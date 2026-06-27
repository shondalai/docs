---
id: overview
title: Developer Guide
sidebar_label: Overview
sidebar_position: 1
---

# Rewardify Developer Guide

Rewardify is an event-sourced, multi-currency rewards engine for Joomla. Extensions
report facts ("a user published an article"); Rewardify decides what that earns and
records it in an append-only ledger. Nothing about points, badges, or levels is
hard-coded: admins configure rules and badges, and any extension can feed the engine
or extend it.

This guide is for developers integrating their extension with Rewardify or extending
the engine itself.

## The mental model

```
  Adapter            Engine                         Read models
  (your plugin)
  ───────────        ─────────────────────────      ──────────────
  reports a   ──►   Event ──► Rules ──► Ledger  ──►  Balances / Levels
  normalized        (idempotent  (decide)  (the      Badges / Leaderboard
  event             ingest)                truth)
```

1. An **adapter** translates a host event (a Joomla or third-party event) into a
   normalized **Event** and submits it through the SDK. Adapters only report facts.
   They never touch the ledger or read balances.
2. The engine ingests the event idempotently, then the **Rule engine** evaluates it:
   the first matching published rule whose conditions, limits, and trust gate pass
   produces award commands.
3. The **Ledger** is the single source of truth. It is append-only; balances, levels,
   and badge state are projections rebuildable from it.
4. **Badges** are awarded either by a rule action (`grant_badge`) or by their own
   earning criteria evaluated against the event stream.
5. **Levels** are derived from a member's lifetime Reputation balance, never stored.

## The three guides

| Guide | Read it when you want to | File |
|-------|--------------------------|------|
| **Concepts** | Understand how rules, badges, levels, currencies, and the ledger actually work | [concepts.md](concepts.md) |
| **SDK integration** | Award points/badges or feed events from your own extension | [sdk.md](sdk.md) |
| **Building adapters** | Turn a component's events into Rewardify events, or add new triggers | [adapters.md](adapters.md) |

If you only want to "give a user some points when X happens," start with
[sdk.md](sdk.md). If you are wiring up a whole component's activity, read
[adapters.md](adapters.md). If you are configuring or troubleshooting the reward
logic, read [concepts.md](concepts.md).

## Where things live

All server code is namespaced `Rewardify\Component\Rewardify\Administrator\` under
`com_rewardify/admin/src/`.

| Area | Path |
|------|------|
| SDK facade (the integration entry point) | `Sdk/Rewardify.php`, `Sdk/EventBuilder.php` |
| Extension registry | `Sdk/Registry.php` |
| Extension contracts (interfaces) | `Contract/` |
| Domain value objects + enums | `Domain/ValueObject/`, `Domain/Enum/` |
| Rule engine | `Engine/RuleEngine.php`, `Engine/Action/`, `Engine/Trigger/` |
| Services (ledger, projections, badges, rules, events) | `Service/` |
| Repositories (data access) | `Repository/` |
| Trigger catalog (Rewardify's own triggers) | `Provisioning/TriggerCatalog.php` |
| SQL schema | `admin/sql/install.mysql.utf8.sql` |
| Example adapter | `plugins/plg_rewards_joomla/` |

For how a reported event becomes a reward (the rule, ledger, badge, and level
internals), see [Concepts](concepts.md).

## Glossary

- **Event**: a normalized fact (`EventEnvelope`) with a type, a subject user, a trust
  level, an idempotency key, and a payload.
- **Trigger**: a registered event type the rule and badge editors can bind to. A
  trigger declares its payload fields, which drives the condition builder.
- **Rule**: a versioned, five-part decision (trigger, conditions, actions, limits,
  schedule) that turns a matching event into award commands.
- **Currency**: a quantity a member can hold. Some are spendable and expire (Points);
  some are lifetime and append-only (Reputation).
- **Ledger**: the append-only record of every currency mutation. The source of truth.
- **Badge**: an achievement, awarded by a rule action or by its own earning criteria.
- **Level**: a rank derived from a member's lifetime Reputation balance.
- **Adapter**: a plugin in the `rewards` group that reports a host's events to Rewardify.
- **Recipient**: who an award pays (subject, actor, author, purchaser, referrer).
