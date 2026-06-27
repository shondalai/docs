---
id: currencies
title: Currencies
sidebar_label: Currencies
sidebar_position: 7
---

# Currencies

Currencies are the units Rewardify keeps track of for each member. The **Currencies** screen (Components -> Rewardify -> Currencies) is where you see what each currency is for and where you can adjust how it behaves.

## The multi-currency model

Rewardify is multi-currency by design. Instead of one fixed "points" total, every member can hold a balance in several currencies at once, and each currency can behave differently. One might be spendable and expire over time, another might be permanent and used only for ranking.

A few rules apply to every currency:

- Balances are stored as whole integers, never as floating-point numbers. This avoids rounding errors in the ledger.
- Every change to a balance is one row in the ledger. Balances are a cache rebuilt from those rows, so they can always be recalculated. See [Members, Balances & the Ledger](members-and-ledger.md).
- A currency is referenced everywhere by its stable key (for example `points` or `reputation`). The key is set when the currency is created and is never changed afterwards, because the ledger points back to it.

## The three seeded currencies

Rewardify installs with three currencies already set up. For most sites these three are all you ever need.

| Currency | Key | Spendable | Expires | What it is for |
|----------|-----|-----------|---------|----------------|
| Community Points | `points` | Yes | Yes (by lot) | The everyday earnable and spendable currency. Members earn it from rules and spend it in the Catalogue. |
| Reputation | `reputation` | No | Never | Lifetime standing. It only ever goes up, and it drives a member's Level and rank. |
| Event Credits | `event` | Yes | Yes (by lot) | A seasonal, campaign-scoped currency for time-boxed campaigns. |

### Community Points (`points`)

This is the default working currency, shown to members as "Community Points". Members earn it through your [Rules](rules.md), and they spend it in the [Catalogue](redemptions.md) to redeem rewards. By default, points expire by lot: each batch of points a member earns has its own expiry clock, and the oldest lots are spent or expired first. You control whether points expire at all, and how long a lot lasts, in **Settings -> Point expiration** (see [Settings Reference](settings.md)).

### Reputation (`reputation`)

Reputation is a member's lifetime standing. It is append-only: it is only ever added, never spent and never deducted by normal activity, and it never expires. Reputation is what [Levels](levels.md) are calculated from, and it is the default currency the [Leaderboard](leaderboard.md) ranks by.

> Reputation is special. Do not make it spendable. Because Levels are derived from a member's reputation balance, and reputation is meant to only ever rise, turning it into a spendable currency would let it fall and would push members back down the level ladder. Leave Reputation as non-spendable and non-expiring.

### Event Credits (`event`)

Event Credits is a seasonal currency meant for [Campaigns](redemptions.md). A campaign can run for a fixed window and issue Event Credits during that window, giving you a separate pot that does not mix with everyday Community Points. Like points, it is spendable and expires by lot, but with a shorter default lot life suited to short seasons.

## What a currency is made of

Open a currency card, or click **+ New currency**, to open the editor. The editor is split into Identity and Behaviour, with a live preview card on the right that updates as you type.

### Identity

| Field | What it does |
|-------|--------------|
| Name | How the currency appears to members, for example "Community Points". |
| Code | A short ticker of 2 to 4 letters shown beside amounts, for example `CP`. It is forced to upper case. |
| Description | A short note shown to admins and on the member "How to earn" page. |
| Icon | The glyph shown on the currency's badge. |
| Colour | The colour of the currency's badge. |

A name and a code are both required before you can save.

### Behaviour

| Switch | What it does |
|--------|--------------|
| Spendable | When on, the currency can be deducted and redeemed in the Catalogue. When off, the currency is append-only and is used to drive Levels. |
| Expires by lot | When on, issued amounts expire on a schedule, oldest lots first. When off, the currency never expires. |
| Release scope | A planning label (MVP or Later). It does not change how the currency works. |

### Engine settings that are not on this screen

Two further properties exist on every currency but are managed by Rewardify rather than edited here:

- **Decimals.** How many decimal places the currency uses. The seeded currencies use `0`, meaning whole numbers only. New currencies you create are also set to whole numbers.
- **Default lot life (days).** How long an issued lot lasts before it can expire. When you turn **Expires by lot** on for a new currency, Rewardify sets a sensible default lot life; when it is off, there is no expiry. For Community Points specifically, the lot life is controlled centrally in **Settings -> Point expiration**.

> The Currencies screen exposes the identity and behaviour of a currency. It does not let you edit decimals or per-currency lot length by hand. Point expiry for Community Points is set in [Settings -> Point expiration](settings.md), not on this screen.

## The cards on the screen

Each currency is shown as a card. A card tells you at a glance:

- The name, code, icon and colour.
- Whether it is **spendable** or **non-spendable**.
- Whether it **expires by lot** or **never expires**, and whether it is **redeemable** or **drives levels**.
- **In circulation**: the total amount currently held across all members.
- How much was **issued** and **redeemed** in the last 30 days.

Click a card to edit that currency. Click **+ New currency** to create one.

## When to add a new currency

For most sites the three seeded currencies are enough, and we recommend you start with them. Consider adding a new currency only when you have a genuinely separate pot of value that should not mix with the others. For example:

- A separate "store credit" that members can only spend on a specific class of reward.
- A distinct seasonal currency for a recurring event, kept apart from the standard Event Credits.

When you add one, decide its behaviour up front:

1. Set a clear **Name** and a short **Code**.
2. Decide whether it is **Spendable**. If members will redeem it in the Catalogue, turn this on.
3. Decide whether it **Expires by lot**. Turn this on for currencies that should not pile up forever.
4. Save. The key is generated from the code and is then fixed for good.

> Adding a currency does not make members earn it. Currencies are only awarded when a [Rule](rules.md) action grants them, when a [Badge](badges.md) reward issues them, when a [Campaign](redemptions.md) issues them, or when an admin posts a manual adjustment. After creating a currency, wire it into at least one rule, badge or campaign or it will sit at zero.

## Related screens

- [Levels](levels.md): levels are derived from the Reputation balance.
- [Settings -> Point expiration](settings.md): controls whether and when Community Points expire.
- [Catalogue & Campaigns](redemptions.md): where spendable currencies are redeemed and where Event Credits are issued.
