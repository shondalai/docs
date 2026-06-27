---
id: overview
title: Rewardify Overview
sidebar_label: Overview
sidebar_position: 1
---

# Rewardify Overview

Rewardify v2 is an event-sourced, multi-currency rewards and gamification engine for Joomla 5 and 6. Your extensions report facts about what members do, Rewardify decides what those facts earn using rules you configure, and it records every change in a permanent ledger.

## The mental model

The whole system is one pipeline. It helps to keep it in mind as you read the rest of this guide:

> An adapter reports a normalised **event** (for example "a member published an article") -> the **rule engine** evaluates that event against the rules you have published -> the **ledger** records the result as one permanent row -> everything members see (balances, levels, badges, the leaderboard) is a **projection** rebuilt from the ledger.

Nothing is hard-coded. You build the currencies, rules, badges, levels and store. Rewardify supplies the engine that ties them together.

## How v2 differs from v1

> **New in v2.** Rewardify has been rebuilt around an append-only ledger. Where v1 stored a single points balance on each member, v2 records every change as a ledger entry and projects balances from it. v2 is multi-currency (Community Points and Reputation today, with Event Credits, a seasonal currency, planned for a later release), adds configurable badges and levels and a redemption store, and makes the whole reward logic admin-configurable rather than fixed in code. If you are coming from v1, read [Upgrading from v1](migrating-from-v1.md) before you go live, because the points migration is a one-time step.

## What you can do with it

- Award one or more currencies automatically when something happens on your site.
- Hand out badges, either as a side effect of a rule or by their own multi-step criteria.
- Give members a level (rank) that rises with their lifetime reputation.
- Run a redemption Catalogue where members spend a currency on items.
- Run time-boxed Campaigns that boost earning or issue a seasonal currency.
- Approve, hold or reject incoming events before they pay out.
- Adjust any member's balance by hand, with a full audit trail.
- Show a privacy-respecting leaderboard on the site.

## A tour of the admin screens

All admin screens live under **Components -> Rewardify**. There are 16 screens grouped into 7 sections in the left-hand navigation.

### Overview

| Screen | What it is for |
|--------|----------------|
| Reward economy | The dashboard: a summary of activity, balances and recent rewards across the whole site. |

### Pipeline

| Screen | What it is for |
|--------|----------------|
| Event inbox | Every incoming event and its status (`received`, `awarded`, `held`, `no_match`). You approve held events here. |
| Simulate & trace | Dry-run a rule against a hypothetical event payload to see what it would do, with no side effects. |

### Rules & rewards

| Screen | What it is for |
|--------|----------------|
| [Rules](rules.md) | The decisions that turn events into awards. Only Published rules are evaluated. |
| [Badges](badges.md) | Achievements, earned by a rule action or by their own criteria. |
| [Levels](levels.md) | Ranks derived from a member's lifetime reputation. |
| [Currencies](currencies.md) | The currencies members can hold: Community Points and Reputation today, with Event Credits, a seasonal currency, planned for a later release. |
| [Catalogue](redemptions.md) | The redemption store where members spend a currency on items. |
| [Campaigns](redemptions.md) | Time-boxed boosts and seasons. Issuing the seasonal Event Credits currency is planned for a later release. |

### Ledger

| Screen | What it is for |
|--------|----------------|
| [Transaction ledger](members-and-ledger.md) | The append-only record of every balance change. |
| [Manual adjustments](members-and-ledger.md) | Post an audited grant, deduct or adjustment to a member, or rebuild projections. |

### Integrations

| Screen | What it is for |
|--------|----------------|
| [Adapters](integrations.md) | The installed plugins that report a host's events. Enable or disable each one here. |

### People

| Screen | What it is for |
|--------|----------------|
| [Members](members-and-ledger.md) | Per-member balances, levels, badges and history. |

### Configuration

| Screen | What it is for |
|--------|----------------|
| [Settings](settings.md) | All configuration: appearance, navigation, evaluation, anti-abuse, point expiration, badge taxonomy, email branding and more. |
| [Email templates](emails.md) | The member emails Rewardify sends, which you can override and toggle. |
| [Privacy & data](privacy.md) | Member consent and how Rewardify handles data export and erasure. |

## What members see

The member-facing side is a single React app shown by a Joomla menu item that points at the Rewardify component. It has up to 8 tabs:

1. Overview
2. My rewards (activity, wallet and history)
3. Badges
4. Campaigns
5. Catalogue
6. [Leaderboard](leaderboard.md)
7. How to earn
8. Privacy

The first three tabs are always shown. The remaining five (Campaigns, Catalogue, Leaderboard, How to earn and Privacy) are optional and can be hidden under **Settings -> Navigation**.

## System requirements

| Requirement | Minimum |
|-------------|---------|
| Joomla | 5.3 or 6 |
| PHP | 8.1 |
| Database | MySQL 5.7+ or MariaDB 10.3+ |

## Where to go next

- [Getting Started](getting-started.md): install Rewardify and publish your first rule.
- [How Rewardify Works](how-rewardify-works.md): the pipeline in more detail.
- [Rules](rules.md): the screen where you decide what events earn.
