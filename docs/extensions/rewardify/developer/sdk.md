---
id: sdk
title: SDK Integration
sidebar_label: SDK Integration
sidebar_position: 3
---

# SDK integration

The SDK is the supported way for any extension to talk to Rewardify: award points,
grant badges, submit activity events, and read balances or levels. It is a static
facade, `Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify`, defined in
`com_rewardify/admin/src/Sdk/Rewardify.php`.

- [Getting started](#getting-started)
- [Direct operations](#direct-operations-award-deduct-grant-badge)
- [Submitting events](#submitting-events)
- [The event contract](#the-event-contract)
- [Reading state](#reading-state)
- [Simulating a rule](#simulating-a-rule)
- [Registering extensions](#registering-extensions)
- [Best practices](#best-practices)
- [Method reference](#method-reference)

---

## Getting started

Import the facade and guard every call with `isReady()`. The SDK lazily boots
`com_rewardify` before touching its services, so it is safe to call from a plugin that
fires early in the request. `isReady()` returns false when the component is not
installed, so your extension stays fully decoupled.

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

if (\class_exists(Rewardify::class) && Rewardify::isReady()) {
    Rewardify::award(42, 'points', 100, 'Order completed', 'order:1234:completed');
}
```

The `class_exists` check matters only if Rewardify might be entirely absent (not
installed). If it is a hard dependency of your extension, `isReady()` alone is enough.

**Sync vs queued.** Direct operations and `submit()` return an `EventReceipt`. By
default activity events are queued (status `received`) and processed by the drain task;
`manual.*` operations (the direct ones below) evaluate inline, so their receipt carries
the resulting `Decision` and `wasAwarded()` is meaningful immediately.

---

## Direct operations (award, deduct, grant badge)

These are audited convenience wrappers over `manual.*` events. Use them when your code
has already decided the outcome and just wants to record it.

```php
// Award currency.
Rewardify::award(
    userId: 42,
    currency: 'points',
    amount: 100,
    reason: 'Newsletter signup',
    idempotencyKey: 'newsletter:42'   // optional but recommended
);

// Deduct currency (spend / correction).
Rewardify::deduct(42, 'points', 50, 'Manual correction', 'correction:ticket-991');

// Post a SIGNED adjustment (positive grants, negative deducts), attributed to an
// admin so the ledger records who made it. The reason is required.
Rewardify::adjust(42, 'points', -25, 'Chargeback correction', adminId: 7, idempotencyKey: 'adjust:ticket-991');

// Grant a badge by its key.
Rewardify::grantBadge(42, 'early-adopter', 'early-adopter:42');
```

Signatures:

```php
public static function award(int $userId, string $currency, int|float $amount, string $reason = '', ?string $idempotencyKey = null): EventReceipt
public static function deduct(int $userId, string $currency, int|float $amount, string $reason = '', ?string $idempotencyKey = null): EventReceipt
public static function adjust(int $userId, string $currency, int|float $amount, string $reason, int $adminId = 0, ?string $idempotencyKey = null): EventReceipt
public static function grantBadge(int $userId, string $badgeKey, ?string $idempotencyKey = null): EventReceipt
```

`adjust()` is the SDK form of a manual ledger adjustment: the `amount` is signed
(a positive value grants, a negative value deducts), the `reason` is mandatory,
and `adminId` is recorded as the actor so the ledger shows who posted it. It is the
call behind the admin Manual adjustments screen.

If you pass an idempotency key, repeating the call with the same key is a no-op. Always
pass one for anything that could run twice (an order hook, a cron, a retried request).

`amount` accepts a float; it is converted to the currency's smallest unit using that
currency's `decimals`. Pass whole numbers for integer currencies like `points`.

---

## Submitting events

Prefer submitting a normalized **event** (rather than a direct award) when you are
reporting a fact and want the admin's rules to decide the reward. This is what adapters
do, and it is what makes the reward configurable instead of hard-coded.

Two equivalent ways:

### Fluent builder (recommended)

```php
$receipt = Rewardify::event('content.article.published')
    ->source('plg_rewards_mycomponent')      // your adapter key
    ->subject($article->created_by)          // the member earning
    ->object('article', $article->id)        // what it concerns
    ->trust('server_verified')               // how trusted this report is
    ->idempotency('com_content:article:' . $article->id . ':published')
    ->with('word_count', $words)             // payload fields rules can test
    ->with('category_id', $article->catid)
    ->with('featured', (int) $article->featured)
    ->submit();
```

The builder (`Sdk/EventBuilder.php`) is fluent; every method returns `$this`. Call
`->submit()` to build, validate, and ingest, or `->toEnvelope()` to build and validate
without submitting (useful in tests).

Builder methods: `schema(int)`, `source(string)`, `subject(int)`, `actor(int)`,
`object(string $type, string|int $id)`, `trust(string|TrustLevel)`,
`idempotency(string)`, `payload(array)` (replace), `with(string, mixed)` (merge one
field), `occurredAt(string $iso8601)`, `correlation(string)`, `toEnvelope()`,
`submit()`.

### Array contract

The same event as a plain array, for code that prefers it (the fluent builder is the
recommended path, and what the bundled Joomla adapter uses):

```php
Rewardify::submit([
    'event_type'       => 'content.article.published',
    'schema_version'   => 1,
    'source_extension' => 'plg_rewards_mycomponent',
    'subject_user_id'  => (int) $article->created_by,
    'actor_user_id'    => null,
    'object_type'      => 'article',
    'object_id'        => (string) $article->id,
    'idempotency_key'  => 'com_content:article:' . $article->id . ':published',
    'trust_level'      => 'server_verified',
    'payload'          => ['word_count' => $words, 'featured' => (int) $article->featured],
]);
```

`submitMany(array $events)` ingests a batch and returns an array of receipts.

---

## The event contract

Whether you use the builder or the array, these are the fields. Full detail and the
trust/recipient model are in [concepts.md](concepts.md#events).

| Field (array key) | Builder | Required | Notes |
|-------------------|---------|----------|-------|
| `event_type` | `event(...)` | yes | Must match a registered trigger to be usable in rules/badges. |
| `schema_version` | `schema()` | no | Defaults to 1. |
| `source_extension` | `source()` | yes | Your adapter key. |
| `subject_user_id` | `subject()` | yes | The member earning. Must be > 0. |
| `actor_user_id` | `actor()` | no | Who acted, if different. |
| `object_type` / `object_id` | `object()` | yes | What the event concerns. |
| `idempotency_key` | `idempotency()` | derived if omitted | Controls dedup and rule-firing frequency. |
| `trust_level` | `trust()` | yes | `server_verified` for server-side reports. |
| `payload` | `payload()` / `with()` | yes (may be empty) | Fields rules and badge steps test. |
| `occurred_at` | `occurredAt()` | no | Stamped by the service if absent. |
| `correlation_id` | `correlation()` | no | For tracing. |

The receipt (`EventReceipt`) exposes `->eventId`, `->status` (an `EventStatus`),
`->duplicate` (true on an idempotency hit), `->decision` (populated on inline eval),
and `->wasAwarded()`.

---

## Reading state

```php
// One currency, in smallest units.
$points = Rewardify::balance(42, 'points');           // int

// All currencies.
$all = Rewardify::balances(42);
// [ 'points' => ['balance' => 7840, 'expiring' => 320, 'expiring_on' => '2026-09-01'], ... ]

// Level (derived from lifetime reputation).
$level = Rewardify::level(42);
// [ 'key' => 'veteran', 'name' => 'Veteran', 'rank' => 12,
//   'next' => ['key' => 'luminary', 'name' => 'Luminary', 'remaining' => 8200] ]
```

Signatures:

```php
public static function balance(int $userId, ?string $currency = null): int|array
public static function balances(int $userId): array
public static function level(int $userId): array
```

`balance()` with a currency returns an `int` (smallest unit); with `null` it returns
the keyed array of all balances (the same shape as `balances()`). These are projections
served from the balance cache and are always rebuildable from the ledger.

---

## Simulating a rule

Dry-run a rule against a hypothetical payload, with no side effects. Useful for an
admin "test this rule" tool or your own diagnostics.

```php
$decision = Rewardify::simulate(ruleId: 7, userId: 42, payload: ['word_count' => 1200]);
```

Returns a `Decision` (the outcome, the matched conditions trace, and the commands it
would post) without touching the ledger.

To dry-run a rule that has not been saved yet (an unsaved editor draft) or any rule
definition object, use `simulateDraft()`. It evaluates the object you pass rather
than a stored row, which is what the admin "test this rule" panel uses on a draft.

```php
public static function simulate(int $ruleId, int $userId, array $payload): Decision
public static function simulateDraft(object $rule, int $userId, array $payload, ?string $occurredAt = null): Decision
```

---

## Registering extensions

Beyond reporting events, an extension can extend the engine itself by registering
strategies on the shared registry. These are typically called at plugin boot.

> **From an adapter, prefer the collect events, not these `register*` calls.** The
> `rewards` plugin group is not booted when the editor asks for the trigger,
> adapter, or provider list, so a boot-time push would be missing. Declare these by
> answering the matching event instead: triggers via `onRewardifyCollectTriggers`,
> the adapter self-description via `onRewardifyCollectAdapters`, and fulfilment
> providers via `onRewardifyCollectProviders` (with `onRewardifyProviderOptions`
> and `onRewardifyRedemptionFulfil` for the work). All of these are covered in
> [adapters.md](adapters.md). The `register*` methods below remain only for
> advanced code that is already booted when it runs.

```php
public static function registerTrigger(TriggerInterface $trigger): void
public static function registerCondition(ConditionOperatorInterface $operator): void
public static function registerAction(ActionHandlerInterface $action): void
public static function registerProvider(RewardProviderInterface $provider): void
public static function registerCurrencyType(CurrencyTypeInterface $type): void
public static function registerEventSource(EventSourceInterface $source): void
public static function registerEventSchema(string $eventType, int $version, array $spec, bool $current = false): void
```

`Rewardify::registry()` returns the shared `Registry` for read-only inspection.

---

## Best practices

- **Always guard with `isReady()`.** It keeps your extension decoupled and safe to run
  when Rewardify is absent or mid-install.
- **Always pass an idempotency key** for anything that can run more than once. Choose
  its granularity to match the desired reward frequency (per object, per day, per
  request). This is your main lever over how often a rule fires.
- **Prefer events over direct awards** when the reward should be configurable. Submit
  `content.article.published` and let the admin decide the points; reserve
  `award()`/`grantBadge()` for cases where your code is the authority (a manual admin
  action, a migration, a one-off grant).
- **Never let Rewardify break the host action.** Wrap calls so an exception from the
  engine cannot abort the user's save/login/checkout. Adapters do this with a
  `try { ... } catch (\Throwable) {}` around the whole report.
- **Report facts; do not compute rewards.** Put the points amount in the rule, not in
  your event. Your job is to say what happened, accurately, with the right subject and
  payload fields.
- **Send the payload fields the trigger declares.** Rules and badge steps can only test
  fields you include. Match your payload to the trigger's schema (see
  [adapters.md](adapters.md#declaring-triggers)).

---

## Method reference

`Sdk/Rewardify.php`:

| Method | Signature | Purpose |
|--------|-----------|---------|
| `isReady` | `(): bool` | True when the component is installed and bootable. |
| `submit` | `(array\|EventEnvelope): EventReceipt` | Ingest one event. |
| `submitMany` | `(array): EventReceipt[]` | Ingest a batch. |
| `event` | `(string $eventType): EventBuilder` | Start the fluent builder. |
| `award` | `(int, string, int\|float, string='', ?string=null): EventReceipt` | Award currency (idempotent). |
| `deduct` | `(int, string, int\|float, string='', ?string=null): EventReceipt` | Deduct currency (idempotent). |
| `adjust` | `(int, string, int\|float, string, int=0, ?string=null): EventReceipt` | Signed manual adjustment, attributed to an admin. |
| `grantBadge` | `(int, string, ?string=null): EventReceipt` | Award a badge (idempotent). |
| `balance` | `(int, ?string=null): int\|array` | One balance (int) or all (array). |
| `balances` | `(int): array` | All balances, keyed by currency. |
| `level` | `(int): array` | Level key/name/rank/next. |
| `simulate` | `(int $ruleId, int $userId, array $payload): Decision` | Dry-run a saved rule. |
| `simulateDraft` | `(object $rule, int $userId, array $payload, ?string=null): Decision` | Dry-run an unsaved rule definition / draft. |
| `registerTrigger` | `(TriggerInterface): void` | Add a trigger. |
| `registerCondition` | `(ConditionOperatorInterface): void` | Add a condition operator. |
| `registerAction` | `(ActionHandlerInterface): void` | Add an action handler. |
| `registerProvider` | `(RewardProviderInterface): void` | Add a reward provider. |
| `registerCurrencyType` | `(CurrencyTypeInterface): void` | Add a currency type. |
| `registerEventSource` | `(EventSourceInterface): void` | Register an adapter as a source. |
| `registerEventSchema` | `(string, int, array, bool=false): void` | Register a payload schema/version. |
| `registry` | `(): Registry` | The shared extension registry (read-only use). |

Next: [Building adapters](adapters.md) to wire a whole component's events into the
engine, or [Concepts](concepts.md) for how the rewards are decided.
