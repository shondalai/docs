---
id: concepts
title: Concepts
sidebar_label: Concepts
sidebar_position: 2
---

# Concepts: how the systems work

This explains the moving parts of the Rewardify engine: events, currencies, the
ledger, rules, badges, and levels, plus the two cross-cutting ideas (trust levels
and recipients). Every claim here maps to real code; file references are given so you
can read the source.

- [The pipeline](#the-pipeline)
- [Events](#events)
- [Trust levels](#trust-levels)
- [Recipients](#recipients)
- [Currencies](#currencies)
- [The ledger](#the-ledger)
- [Rules](#rules)
- [Badges](#badges)
- [Levels](#levels)

---

## The pipeline

The engine is event-sourced. A fact enters as an event, a decision is made and frozen
on that event, and the ledger records the result. Everything else is a projection.

```
Adapter ──submit──► Event (idempotent ingest, queued by default)
                      │
                      ▼
                 Rule engine ──► Decision (frozen on the event)
                      │              │
                      │              ├─ currency commands ──► Ledger (the only writer)
                      │              └─ badge commands ─────► BadgeService
                      ▼
                 Projections: Balances, Levels, Badges, Leaderboard
```

Key properties:

- **Idempotent ingest.** A repeat delivery of the same `(source_extension, idempotency_key)`
  is a safe no-op that returns the original event. See `Service/EventService.php`.
- **Decision frozen before posting.** The engine writes the decision to the event row
  before the ledger post, so a crash between the two is recoverable by replaying the
  frozen decision rather than re-evaluating. A rule edited between attempts cannot
  change a frozen award.
- **Queued by default.** Awards are queued (status `received`) and drained by a
  scheduled task; `manual.*` events and a `sync` setting evaluate inline. Either way
  the work is idempotent, so a double-run is a no-op.

---

## Events

An event is a normalized fact. The value object is
`Domain/ValueObject/EventEnvelope.php`. You rarely build one by hand; the SDK
`EventBuilder` and the array contract construct it for you (see [sdk.md](sdk.md)).

Fields an event carries:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `eventType` | string | yes | Namespaced, e.g. `content.article.published`. Matches a rule's `trigger` exactly. |
| `schemaVersion` | int | yes | Defaults to 1. |
| `sourceExtension` | string | yes | The adapter that reported it, e.g. `plg_rewards_joomla`. |
| `subjectUserId` | int | yes | The member the event is about (must be > 0). |
| `actorUserId` | ?int | no | Who performed it, if different from the subject. |
| `objectType` | string | yes | What the event concerns, e.g. `article`, `order`, `user`. |
| `objectId` | string | yes | Stable id of that object. |
| `idempotencyKey` | string | yes | Deduplication key. Derived from the object if omitted. |
| `trustLevel` | TrustLevel | yes | How much the server trusts this source (see below). |
| `payload` | array | yes | Event-specific data. Rule conditions and badge steps test these fields. |
| `occurredAt` | ?string | no | ISO-8601. The service stamps it if absent. |
| `correlationId` | ?string | no | For tracing across systems. |

The **idempotency key** is the most important field to get right. Its granularity
decides how often a rule can fire. A daily-login adapter keys on the day
(`com_users:login:42:2026-06-23`), so a "daily login" rule fires once per day. An
article adapter keys on the object (`com_content:article:99:published`), so republishing
the same article does not double-award.

`payloadDigest()` (a SHA-256 of the payload) lets the engine detect a replay that
arrives with the same key but a different payload.

---

## Trust levels

`Domain/Enum/TrustLevel.php`. Trust is how the server decides whether to award
immediately or hold an event for moderation.

| Level | `value` | rank |
|-------|---------|------|
| Server verified | `server_verified` | 3 |
| Trusted source | `trusted_source` | 2 |
| Client reported | `client_reported` | 1 |
| Unverified | `unverified` | 0 |

`$level->atLeast($min)` compares ranks. A rule declares a `required_trust`; if the
event's trust is below it, the rule's decision is **held** (frozen, awaitable by an
admin via approve) rather than awarded. Server-side adapters (like the Joomla core
adapter) report `server_verified`, so they clear any gate.

An adapter's `trustCeiling()` clamps what it is allowed to claim, so a low-trust
source cannot assert `server_verified`.

---

## Recipients

`Domain/Enum/Recipient.php`. An award names who it pays. The recipient is resolved
against the event at award time, identically for the ledger and the badge engine (via
`Domain/Support/RecipientResolver.php`).

| Recipient | Resolves to |
|-----------|-------------|
| `subject` | `subjectUserId` (the member the event is about) |
| `actor` | `actorUserId`, falling back to the subject |
| `author` | `payload['author_id']` |
| `purchaser` | `payload['user_id']` |
| `referrer` | `payload['referrer_id']` |

The payload-keyed roles (author, purchaser, referrer) never fall back to the subject:
a missing key resolves to 0 and the command is dropped and logged, so a misconfigured
rule never pays the wrong member.

---

## Currencies

`#__rewardify_currencies` + `Repository/CurrencyRepository.php`. Rewardify is
multi-currency. Money is stored as a signed `BIGINT` in the currency's smallest unit,
never a float (`toSmallestUnit()` scales by `10 ** decimals`).

Each currency declares:

- `spendable` (can it be deducted/reserved) and `expires` (is it subject to lot expiry).
- `decimals` (0 means integer-only).
- `default_lot_days` (lifetime of a granted lot, if it expires).

The three seeded currencies show the spectrum:

| Key | Spendable | Expires | Purpose |
|-----|-----------|---------|---------|
| `points` | yes | yes (365d lots) | Default earnable + redeemable currency ("Community Points"). |
| `reputation` | no | no | Lifetime standing. Append-only, never spent or deducted. Drives levels and ranks. |
| `event` | yes | yes (90d lots) | Campaign-scoped seasonal currency (modelled, exposed in a later release). |

**Expiring lots.** When an expiring currency is granted, a *lot* opens with an
`expires_at`. Spends consume lots oldest-expiring-first (FIFO). A scheduled task
expires due lots. This is why Points can "expire by lot" while Reputation never does.

---

## The ledger

`Service/LedgerService.php` is the **only writer** of `#__rewardify_ledger`, the
append-only record of every currency mutation. Balances are a cache projected from it
and are always rebuildable.

### Transaction types

`Domain/Enum/TransactionType.php`:

| Type | Sign | Meaning |
|------|------|---------|
| `grant` | + | Award currency (a rule fired, a manual grant). |
| `deduct` | - | Spend/consume currency (a redemption). |
| `reserve` | - (held) | Hold currency for a pending redemption. Balance unchanged; reserved goes up. |
| `release` | + | Return a reservation. Reserved goes down. |
| `expire` | - | A lot expired. |
| `reversal` | signed | Correct a prior posting; references the original transaction. |
| `adjustment` | signed | Manual, audited correction. |

### Invariants

- **One transaction per mutation.** No balance change without a ledger row.
- **Idempotent on `command_id`.** The `command_id` is a hash of
  `(event_id, rule_id, rule_version, action_index, type, currency, recipient)`, unique
  in the table. A retried event never double-posts.
- **No oversell.** Each posting takes a `SELECT ... FOR UPDATE` lock on the
  `(user, currency)` balance row before reading and writing, so concurrent spends
  serialize. Debits that would go negative throw `InsufficientBalanceException`.
- **Reserve/release for redemptions.** A redemption reserves (the hold), the provider
  issues, then confirm posts release + deduct so the hold clears as the spend lands.
- **Rebuildable balances.** `Service/ProjectionService.php` recomputes a member's
  balance and reserved totals by summing the ledger by type, under the same lock.
  Grant/deduct/expire/reversal/adjustment sum to the balance; reserve/release sum to
  reserved. An admin "rebuild projections" action repairs any cache drift.

---

## Rules

`Engine/RuleEngine.php` + `#__rewardify_rules`. A rule is a versioned, five-part
decision. Only `published` rules are evaluated.

### The five parts

1. **Trigger** (`trigger` column): the event type this rule reacts to. Matched by
   exact string equality.
2. **Conditions** (`conditions` JSON): optional filters on the payload, ANDed together.
3. **Actions** (`actions` JSON): what to award.
4. **Limits** (`limits` JSON): throttles.
5. **Schedule** (`schedule` JSON): an optional active time window.

### Evaluation order

For an incoming event, `evaluate()`:

1. If the event type starts with `manual.`, it bypasses rules and produces a direct
   command (this is how the SDK's `award`/`deduct`/`grantBadge` work).
2. Otherwise it fetches published rules whose `trigger` equals the event type, highest
   `priority` first.
3. For the first rule whose **schedule** is active, whose **conditions** all pass,
   whose **actions** produce at least one command, and which is **within limits**:
   - If the event's trust is below the rule's `required_trust`, the decision is
     **held**.
     Otherwise it is **awarded**.
4. If no rule qualifies, the result is **no match** (with the closest condition trace,
   for explainability).

It is first-match-wins per event.

### Conditions

```json
[
  { "field": "word_count", "op": "gte", "value": "500" },
  { "field": "status", "op": "in", "value": "published, approved" }
]
```

Operators (`Domain/Enum/ConditionOperator.php`):
`eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `nin`, `contains`, `exists`.
`eq`/`neq`/`contains`/`in`/`nin` compare as strings (booleans stringify to `1`/`0`);
`gt`/`gte`/`lt`/`lte` compare numerically; `in`/`nin` take a comma list; `exists` is
present-and-non-empty. `field` is a key in the event payload. The set of fields a
trigger offers comes from its payload schema (see [adapters.md](adapters.md)).

### Actions

```json
[
  { "type": "grant", "currency": "points", "amount": 50, "recipient": "subject" },
  { "type": "grant_badge", "badge": "first-article", "recipient": "subject" }
]
```

`grant` produces a currency command (`Engine/Action/GrantCurrencyAction.php`); a zero
amount or empty currency is dropped. `grant_badge` produces a badge command
(`Engine/Action/GrantBadgeAction.php`); an empty badge key is dropped. `recipient` is
one of the recipient roles above.

### Limits

```json
{ "perObject": "once", "perUserPerDay": "5", "perUserLifetime": true, "cooldown": "1h" }
```

- `perObject`: `once` (ever, per object) or `once per day`.
- `perUserPerDay`: max fires per user per day.
- `perUserLifetime`: if true, once per user ever.
- `cooldown`: a duration (`30`, `1m`, `2h`, `7d`) since the last fire.

Limits are tracked in `#__rewardify_rule_fires`, keyed `(rule_id, event_id)` UNIQUE so
recording a fire is itself idempotent.

### Schedule

```json
{ "type": "window", "from": "2026-06-01 00:00:00", "to": "2026-12-31 23:59:59" }
```

`always` (default), `window` (a from/to range checked against the event's
`occurred_at`), or `recurring` (modelled, evaluated permissively for now).

### How rules get created

`Service/RuleService.php` is the write path. `saveFromEditor()` persists a rule from the
admin editor: new rules get a slug key; existing rules bump their version and snapshot the
prior definition. An empty trigger is forced to Draft so an incomplete rule can never go
live. Rules are authored in the editor against the live trigger catalogue (the triggers
installed adapters declare), so there is nothing to "scan" or bulk-provision.

---

## Badges

`Service/BadgeService.php` (the only writer of `#__rewardify_user_badges`) and
`Service/BadgeProgressService.php` (the criteria evaluator). A badge can be earned two
ways, and both funnel through one idempotent `award()` method.

### Two award paths

1. **Command-driven.** A rule's `grant_badge` action (or a `manual.badge` event)
   produces a badge command on the decision. `grantFromDecision()` consumes it,
   resolves the recipient, and awards. This is the immediate, per-event path.
2. **Criteria-driven.** A badge declares its own earning steps. `observe()` runs on
   each verified event, records a durable occurrence for every step whose trigger and
   conditions match, then evaluates whether the badge is complete and awards if so.
   This is the cumulative, multi-step path.

The difference: a rule action grants on one event; criteria accumulate many events
over time and support a progress bar.

### Criteria steps

A step (`#__rewardify_badge_steps`) is a counted, windowed, filtered trigger match:

- `trigger`: the event type to watch.
- `count`: how many qualifying occurrences are needed.
- `window`: `lifetime`, `30d`, `90d`, `365d`, or `streak` (longest run of consecutive
  calendar days).
- `conditions`: the same `{field, op, value}` filters as rules.

A badge's `logic` is `all` (every step satisfied) or `any` (at least one). When all
the relevant steps are satisfied the badge is awarded; otherwise the member's
`progress` fraction is advanced.

### Other badge properties

- **Prerequisites** (`prerequisites` JSON, an array of badge keys): the member must
  already hold every prerequisite before this badge can be awarded.
- **Repeatable + max_per_user**: a non-repeatable badge earns once; a repeatable one
  stops at `max_per_user`.
- **points_reward + reward_currency**: earning a badge can also grant currency. This
  posts through the ledger best-effort (a reward failure is logged and never fails the
  badge award). The default reward currency is `reputation`.
- **secret / visibility**: a secret badge stays hidden from a member until earned.

### Idempotency

Mirrors the ledger. Every award records a row in `#__rewardify_badge_awards` keyed by a
unique `command_id`, so a decision replay never double-awards. Criteria occurrences are
recorded in `#__rewardify_badge_progress` with a `(step_id, user_id, event_id)` unique
key, so an event is never double-counted. The whole engine is replay-safe.

> Note: repeatable *criteria* re-earning (resetting the counting baseline to earn the
> same criteria-based badge again) is a deliberate follow-up. Repeatable badges still
> re-earn naturally via the command path, where each rule fire is a distinct command.

---

## Levels

`#__rewardify_levels` + `Service/ProjectionService.php`. A level is not stored on the
member; it is derived from their lifetime Reputation balance at read time.

A level row declares a `currency` (default `reputation`), a `min_points`/`max_points`
range, a `name`, a `perk`, and a display `slot`/`color`. The seeded ladder:

| Level | Reputation range |
|-------|------------------|
| Newcomer | 0 to 999 |
| Contributor | 1000 to 4999 |
| Regular | 5000 to 14999 |
| Veteran | 15000 to 39999 |
| Luminary | 40000 and up |

`ProjectionService::level($userId)` reads the member's lifetime balance in the level
currency, finds the band it falls into, and returns:

```php
[
  'key'  => 'veteran',
  'name' => 'Veteran',
  'rank' => 12,            // 1-based: how many members out-rank this one, plus 1
  'next' => [              // null at the top level
    'key'       => 'luminary',
    'name'      => 'Luminary',
    'remaining' => 8200,   // reputation still needed to reach it
  ],
]
```

Because Reputation is append-only and never spent, a member's level only ever rises
(unless an admin adjusts Reputation down). The SDK exposes this as
`Rewardify::level($userId)` (see [sdk.md](sdk.md)).

---

Next: [SDK integration](sdk.md) to drive the engine from your extension, or
[Building adapters](adapters.md) to feed it events and add triggers.
