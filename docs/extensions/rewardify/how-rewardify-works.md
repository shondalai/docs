---
id: how-rewardify-works
title: How Rewardify Works
sidebar_label: How It Works
sidebar_position: 3
---

# How Rewardify Works

This page explains the ideas behind Rewardify in plain language. Once you understand the pipeline and the few terms that go with it, every other admin screen will make sense. Keep this page handy; the rest of the guide links back to it.

## The pipeline: the one mental model to learn

Rewardify works as a small assembly line. Something happens on your site, Rewardify decides what it earns, it writes that down, and then it shows members the result.

The four stages are:

1. **An adapter reports an event.** An adapter is a small plugin that watches a host (Joomla itself, Kunena, HikaShop, and so on) and reports facts to Rewardify, such as "a member logged in" or "an order completed". See [Integrations & Adapters](integrations.md).
2. **The rule engine decides.** Rewardify looks at your published rules to work out what the event should earn (points, reputation, a badge, or nothing). See [Rules](rules.md).
3. **The ledger records it.** Every change is written as one line in an append-only ledger. Append-only means rows are only ever added, never edited or deleted.
4. **Projections show the result.** Balances, levels, badges and the leaderboard are all rebuilt from the ledger. They are just views of what the ledger already says.

In short:

> Adapter reports an Event, the Rule engine decides, the Ledger records the result, and everything members see is a view rebuilt from the ledger.

### The ledger is the single source of truth

This is the most important idea in the whole product, so it is worth stating plainly.

Think of the ledger like a bank statement. The statement is the record of truth. Your account balance is not a separate fact someone types in; it is simply the running total of every line on the statement. If the displayed balance ever looked wrong, you would trust the statement and recompute the total.

Rewardify works the same way:

- A member's **balance** is the sum of their ledger lines, not a number stored on its own.
- A member's **level** is worked out from their reputation total, which itself comes from the ledger.
- A member's **badges** come from a record of every badge award.
- The **leaderboard** is members sorted by a balance, which again comes from the ledger.

Because the ledger is the truth and the rest are just views, you can always rebuild those views. If a balance cache ever drifts out of step (for example after a server problem), you rebuild projections and the numbers are correct again. The original ledger lines are never touched. See [Members, Balances & the Ledger](members-and-ledger.md).

## Events, and why the same login never pays twice

An **event** is a single tidy fact reported by an adapter. It always says who the event is about, what kind of event it is (its event type, for example `content.article.published`), and what object it concerns (an article, an order, a login for a given day).

Every event also carries an **idempotency key**. That is a long word for a simple safety rule: if Rewardify sees the same key twice, it treats the second one as a repeat and does nothing. The first event already had its decision made and recorded, so the repeat is a safe no-op.

A short example makes this clear:

- A daily-login adapter builds its key from the member and the calendar day. So a "daily login" rule can fire once for that member on that day. Refreshing the page or logging in again later that day reports the same key, and nothing extra is paid.
- An article adapter builds its key from the article and the fact that it was published. Editing and saving the same article again does not award it a second time, because it is the same key.

The same protection runs all the way through the engine. Each rule fire, each ledger posting and each badge award has its own unique fingerprint, so even if an event is processed twice (a retry after a timeout, say) the result is recorded only once. This is what makes Rewardify "replay-safe": running the same work again changes nothing.

For how events move through the system and what their statuses mean, see [Events & Evaluation](events-and-evaluation.md).

## Currencies: what members earn and hold

Rewardify can run more than one kind of balance at once. Each one is a **currency**, and each currency has its own rules about whether it can be spent and whether it expires. Amounts are always stored as whole units, never as fractions of a value, which keeps the maths exact. You manage these on the [Currencies](currencies.md) screen.

Three currencies are seeded for you. In the current release you work with two of them, Community Points and Reputation; Event Credits is modelled now but exposed in a later release.

| Currency | Can be spent? | Expires? | What it is for |
|----------|---------------|----------|----------------|
| `points` (Community Points) | Yes | Yes (by lot, default 365 days) | The everyday Community Points members earn and redeem in the Catalogue. |
| `reputation` (Reputation) | No | No | Lifetime standing. Only ever goes up. Drives Levels and ranks. |
| `event` (Event Credits) | Yes | Yes (by lot, default 90 days) | A seasonal currency, planned for a later release. Not yet exposed, so you do not build campaigns around it today. |

Three traits describe any currency:

- **Spendable** means it can be deducted, for example when a member redeems it in the Catalogue.
- **Expires** means it is granted in **lots** that can age out. A lot is just a batch of currency with an expiry date. When a member spends, the oldest-expiring lot is used first. Points expire this way by default; you can change the lot lifetime or turn expiry off entirely so points last forever. Reputation never expires.
- **Decimals** controls whether the currency allows fractions. Most currencies use whole numbers only.

The contrast between `points` and `reputation` is the one to remember. Points are a wallet: members earn them, they can run down, and they can age out. Reputation is a track record: it only ever climbs and is never spent.

## Levels: earned standing that only rises

A **level** is a named band of reputation, such as Newcomer or Veteran. Members move up through the ladder as their reputation grows. See [Levels](levels.md).

The key thing to understand is that a level is not stored on the member. Rewardify works it out on the spot from the member's reputation total. The ladder set up for you is:

| Level | Reputation range |
|-------|------------------|
| Newcomer | 0 to 999 |
| Contributor | 1,000 to 4,999 |
| Regular | 5,000 to 14,999 |
| Veteran | 15,000 to 39,999 |
| Luminary | 40,000 and above |

Because reputation only ever goes up and is never spent, a member's level can only ever rise. The single exception is if you, as an admin, lower someone's reputation by hand. A member is never surprised by a demotion from normal activity. You can rename levels, change the ranges, set a perk, and choose a colour for each one.

## Trust levels: why some events wait for approval

Not every event is equally believable. An event reported by the server itself is solid. An event reported by something running in the visitor's browser is easier to fake. Rewardify captures this with a **trust level** on every event.

The four trust levels, from most to least trusted, are:

1. `server_verified` (highest, the server confirmed it)
2. `trusted_source`
3. `client_reported`
4. `unverified` (lowest)

A rule can require a minimum trust before it pays. If an event arrives with trust below that minimum, the rule does not award straight away. Instead the decision is **held** so you can review and approve it. You will see held events on the Event inbox (see [Events & Evaluation](events-and-evaluation.md)).

Server-side adapters, such as the Joomla core adapter, report `server_verified`. Their events clear any trust requirement automatically, so well-trusted activity is never stuck waiting. Adapters also cannot overstate their trust: a low-trust source is not allowed to claim to be server verified.

> This is the main tool for fighting abuse. If a rule could be triggered from a member's browser, set a minimum trust on it so suspicious cases are held for a human to check rather than paid out automatically. There are matching site-wide protections under Settings -> Anti-abuse.

## Recipients: who an award pays

When a rule grants something, it has to name **who** gets paid. That is the recipient. Most of the time the answer is the obvious one, but some events involve more than one person (an order has a purchaser, a referral has a referrer), so you choose deliberately.

The recipient roles are:

| Recipient | Who it pays |
|-----------|-------------|
| `subject` | The member the event is about. |
| `actor` | The member who performed the action. |
| `author` | The author named in the event details. |
| `purchaser` | The purchasing member named in the event details. |
| `referrer` | The referring member named in the event details. |

There is one safety rule to know. The roles that read a name from the event details (`author`, `purchaser`, `referrer`) never quietly fall back to the subject. If that detail is missing, the award is dropped rather than paid to the wrong person. So if a rule that should pay a referrer never seems to pay, the likely cause is that the event did not carry a referrer, not that Rewardify lost the award.

Recipients are chosen per action in the [Rules](rules.md) editor, and badges use the same idea (see [Badges](badges.md)).

## Why this design helps you

Pulling it together, three benefits come straight out of how Rewardify is built.

- **It is configurable, not hard-coded.** Nothing about points, levels, badges, currencies or the store is fixed in the software. You build all of it from the admin screens, so your reward economy can match your community rather than the other way round.
- **It is replay-safe.** The same login never pays twice, and a retried event never doubles up. You can let activity flow in without worrying about accidental duplicate rewards.
- **It is auditable and repairable.** Every single balance change is one line in the ledger, with the reason attached. You can always explain why a member has the balance they do, and if a cached number ever drifts, rebuilding projections from the ledger puts it right without losing history.

Next, see [Rules](rules.md) to start awarding, or [Events & Evaluation](events-and-evaluation.md) to watch activity arrive.
