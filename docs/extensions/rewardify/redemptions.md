---
id: redemptions
title: Catalogue & Campaigns
sidebar_label: Catalogue & Campaigns
sidebar_position: 8
---

# Catalogue & Campaigns

The Catalogue is the redemption store where members spend a currency on rewards. Campaigns are time-boxed journeys that grant a bonus when a member completes a set of steps. Both screens live under Components -> Rewardify in the Rules & rewards section.

## Catalogue

Open **Catalogue** to manage the redemption store. Members see your published items in the **Catalogue** tab of the member site app, where they can spend points (or any other spendable currency) on the rewards you have created.

The screen has three parts:

1. A row of summary figures at the top: points in circulation, points redeemed in the last 30 days, active reservations, and points released back to members after a failed fulfilment.
2. The catalogue items grid, where each card shows the item name, price, stock and how many times it has been redeemed.
3. A recent redemptions table that shows each redemption working through its reservation flow, plus the reward providers registered on your site.

### Creating a catalogue item

Click **+ New item** to open the item editor. Clicking any existing card opens the same editor for that item. As you type, a live preview card on the right shows exactly how the item will look to members.

The editor is grouped into three cards.

**Item**

- **Name**: the title members see, for example "10% off store coupon".
- **Description**: a short explanation of the reward and how it is delivered.
- **Kind**: a label for the type of reward. The available kinds depend on the chosen provider, and may include `cosmetic`, `coupon`, `perk`, `entitlement`, `raffle` and `physical`.
- **Icon**: pick a glyph shown on the item card.

**Pricing & stock**

- **Currency**: the currency the member spends. Only spendable currencies appear here, so `reputation` (which is never spent) is not listed. See [Currencies](currencies.md) for what makes a currency spendable.
- **Price**: the whole-number cost in the chosen currency.
- **Stock**: how many can be redeemed in total. Leave this blank for unlimited stock.

**Fulfilment**

- **Provider**: who delivers the reward. The list contains the built-in providers and any provider adapter you have installed. Built-in options include an internal perk provider and manual fulfilment. When a provider declares its own settings, those fields appear here after you select it.
- **Fulfilment**: how the reward is handed over. The three modes are:
  - `instant`: the reward is delivered straight away.
  - `reserved`: the cost is held while the reward is delivered, then confirmed (see the reservation flow below).
  - `manual`: an admin completes the reward by hand.
- **Requires shipping address**: turn this on for physical rewards. The member is asked for an address when the redemption is confirmed.
- **Release scope**: an internal label (`MVP` or `Later`) used to organise items.

Click **Create item** (or **Save changes** when editing). Saving publishes the item to the catalogue.

> Deleting an item removes it from the store so members can no longer redeem it. Past redemptions are kept in the ledger and are not affected.

### How a redemption flows: reserved vs available balance

This is the most important idea on the Catalogue screen, because it explains why a member's spendable balance and their available balance can differ.

When a member redeems an item, Rewardify does not deduct the points immediately. Instead it follows a reservation flow so that nobody loses points if delivery fails:

1. **Reserve**: the cost is placed on hold. This is a `reserve` row in the ledger. The points are no longer available to spend, but they have not yet been taken away.
2. **Issue**: the provider delivers the reward.
3. **Confirm**: once delivery succeeds, Rewardify posts a `release` (to clear the hold) and a `deduct` (to take the points). Only now are the points truly spent.

If delivery fails, or you choose to cancel, the redemption is **released** instead: the hold is returned with a `release` row and the member keeps their points.

Because of this flow, a member has two figures:

- **Available balance**: what they can spend right now (their balance minus any active holds).
- **Reserved**: points currently held against pending redemptions.

The transaction types behind all of this (`reserve`, `release`, `deduct`) are explained in full on the [Members, Balances & the Ledger](members-and-ledger.md) page.

### Managing redemptions

The recent redemptions table shows each redemption with a small stepper that visualises its place in the reserve, issue, confirm flow. The actions available depend on the current state:

| Redemption state | Available actions |
| --- | --- |
| Reserved | **Issue** (deliver the reward) or **Release** (cancel and return the points) |
| Issued | **Confirm** (finish and deduct the points) or **Revoke** (return the points) |
| Confirmed (physical items) | **Mark shipped** |

**Mark shipped** opens a small dialog where you record a carrier, tracking number, an optional tracking URL and an optional shipping address. The member is emailed with whatever you provide. The carrier field is required before you can confirm shipping.

### Reward providers

The lower part of the screen lists the reward providers registered on your site, showing which operations each one supports (such as reserve, issue, confirm and release). Built-in providers are marked as such, and provider adapters from add-ons appear here once installed. A provider that only records the redemption in the ledger is shown as ledger-only.

## Campaigns

Open **Campaigns** to build time-boxed journeys. A campaign is a set of steps a member works through; when every step is done, the member receives a one-off completion reward. Members see published campaigns in the **Campaigns** tab of the member site app.

The list screen shows your campaigns as cards, each with its steps, the reward on completion and a progress bar. Click **+ New campaign**, or click any card, to open the editor. As with the Catalogue, a live preview card on the right updates as you edit.

### Campaign fields

**Overview**

- **Name** and **Description**: what members see. Both support translation.
- **Tone**: a visual style for the card. The options are `Starter`, `Weekly`, `Epic` and `Limited`.
- **Ends**: the date the campaign closes. Leave this blank for an evergreen campaign that never ends.
- **Icon**: the glyph shown on the campaign card.
- **Release scope**: an internal label (`MVP` or `Later`).

**Steps**

Each step is a trigger (an event type) that must fire a number of times before the step counts as done.

- **When (trigger)**: the event that advances the step. Triggers come from your installed adapters, the same list used in the Rules and Badges editors. See [Integrations & Adapters](integrations.md).
- **Times required**: how many times the trigger must fire.
- **Conditions (optional)**: filters on the event payload, shown once you pick a trigger that has fields. You can combine conditions with `all` (every condition must match) or `any` (at least one must match).

Use **+ Add step** to add more steps, and the small cross to remove one.

**Reward on completion**

Granted once, when every step is met. You can award any combination of:

- **Community Points** (the `points` currency).
- **Reputation** (the `reputation` currency).
- **Badge**: an optional badge chosen from your existing badges.

Each part of the reward becomes its own row in the ledger when it is granted.

> Deleting a campaign also deletes its member progress and cannot be undone. Rewards already granted are kept in the ledger.

### Campaigns and the date window

The **Ends** date is what makes a campaign time-boxed. While the campaign is open, members can make progress and earn the completion reward; once it ends, the campaign closes.

This is the same idea as a Rule schedule window, which limits when a rule pays out using a from and to date range (see [Rules](rules.md)). A campaign packages a goal, its steps and a one-off reward together with that window, whereas a scheduled rule simply turns ordinary awarding on or off for a period. Campaigns are a natural fit for seasonal runs: set an end date and reward bonus Community Points (or a badge) on completion to mark a season. A dedicated seasonal `event` currency is modelled for a later release; until then, run seasonal campaigns with bonus Community Points. See [Currencies](currencies.md) for more on the `event` currency.

## Hiding these tabs from members

Both the Catalogue and Campaigns tabs in the member site app are optional. If you are not using one of them, you can hide it. Go to **Settings -> Navigation** and switch off the tabs you do not want members to see. The full list of toggles is in the [Settings Reference](settings.md).
