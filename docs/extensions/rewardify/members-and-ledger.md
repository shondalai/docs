---
id: members-and-ledger
title: Members, Balances & the Ledger
sidebar_label: Members & Ledger
sidebar_position: 9
---

# Members, Balances & the Ledger

This page covers the three admin screens you use day to day to look after individual members and the money in the system: **Members**, **Manual adjustments** and **Transaction ledger**. All three live under Components -> Rewardify.

A short reminder of the underlying model: the ledger is the single, append-only record of every change to a balance. Everything else (a member's points total, their level, the economy figures) is a cache rebuilt from that ledger. Read [Currencies](currencies.md) for how money itself is defined.

## Members

The **Members** screen (People section) is your directory of everyone who has a balance, a badge, or any activity in Rewardify. The list spans every Joomla user who has earned something, so it grows as people take part.

### Searching and sorting the list

- The search box at the top filters by name, handle or email. Type a few characters and the list narrows as you go.
- The count on the right (for example `25 of 312`) shows how many rows are on screen against the full total.
- Click a column heading to sort: **Member**, **Points**, **Reputation**, **Badges** or **Last seen**. Click again to reverse the direction. The list is sorted on the server, so it sorts the whole directory, not just the current page.
- Use the pager at the foot to move through pages (25 members per page).

The **Export (privacy-safe)** button in the toolbar produces an export that respects member consent. See [Privacy & Member Data](privacy.md) for what that includes.

### Opening a member

Click any row (or its **Open** button) to drill into that member's detail view. From there, **Members** in the top left takes you back to the list.

The detail view shows:

- Four headline figures: **Community Points**, **Reputation**, **Level** and **Badges**.
- **Ledger, this member**: every transaction posted for this person, newest first. You can sort by **Type**, **Amount** or **When**, and page through the history. This is the same ledger described below, filtered to one member.
- **Consent & visibility**: the member's own choices (public profile, leaderboard, alias, notification emails). These are read-only for admins. They are member controlled: you can see them, but you cannot switch them on or off on the member's behalf.
- **Export member data**: downloads everything Rewardify holds about this one member as a JSON file, for a data request.

> Reputation only ever rises, so a member's **Level** can only go up over time, unless you lower their reputation with a manual adjustment. Levels are explained in [Levels](levels.md).

### Member actions

Two buttons sit in the detail view toolbar:

| Action | What it does |
|--------|--------------|
| **Award badge** | Grants a chosen badge to this member straight away. Pick a badge from the list and confirm. This is idempotent: awarding a badge a member already holds does not duplicate it. |
| **Adjust balance** | Opens the same adjustment form described below, pre-set to this member. Choose a currency, enter an amount (a negative amount deducts), and give a reason of at least 8 characters. |

Both actions take effect immediately and the member's figures and ledger refresh.

## Manual adjustments

The **Manual adjustments** screen (Ledger section) is for granting, correcting or removing balance by hand: a goodwill gesture, fixing a mistake, an offline reward, and so on. The same form is available from a member's detail view via **Adjust balance**.

The headline rule for this screen: there is no silent edit. Every adjustment posts a real ledger transaction, records which administrator made it, and requires a written reason. You are always able to see who changed what and why.

### Posting an adjustment

1. Go to Components -> Rewardify -> **Manual adjustments**.
2. In the **New adjustment** card, choose the **Member**.
3. Choose the **Currency** (for example Community Points or Reputation).
4. Enter the **Amount**. A positive number grants; a negative number deducts (for example `500` or `-200`).
5. Write a **Reason**. It must be at least 8 characters. The reason is permanently audited, so write something a colleague would understand later. Referencing a support ticket is good practice.
6. Click **Post adjustment**.

The **Post adjustment** button stays disabled until you have selected a member, entered a non-zero amount, and written a reason of at least 8 characters.

> Posting an adjustment requires the `rewards.transactions.adjust` permission. If the button does nothing for a user, check their group's permissions.

A few things to know:

- **Deducts are floored at the available balance.** If you try to deduct more than a member actually has available, the adjustment is rejected with a message that the member does not have enough balance. Nobody goes negative.
- **Adjustments are idempotent.** The ledger writer guards against duplicate postings, so an accidental double click will not award twice.
- **Adjusting reputation changes a member's level.** Because levels are derived from reputation, a reputation adjustment can move a member up or down a level. Treat reputation adjustments with care.

### The adjustment audit

Beside the form, the **Adjustment audit** table lists every manual adjustment that has been posted, newest first. It shows the member, the signed amount, the reason (with the transaction id beneath it), the administrator who posted it, and when. It is empty until your first adjustment. You can sort by **Member**, **Amount** or **When**, and page through older entries.

This audit is simply the ledger filtered to adjustment transactions, so the same rows also appear in the full Transaction ledger.

## Transaction ledger

The **Transaction ledger** (Ledger section) is the append-only source of truth for the whole rewards economy. Every balance change has exactly one ledger row, and rows are never edited or deleted. A correction is itself a new row (a reversal or an adjustment), so the history is always complete.

### Transaction types

Each row carries a type. The filter buttons across the top let you show one type at a time.

| Type | Sign | What it means |
|------|------|---------------|
| `grant` | + | Currency added to a member (a rule paid out, a manual grant, a migration). |
| `deduct` | - | Currency removed from a member. |
| `reserve` | hold | Currency held back for a pending redemption. The balance is unchanged but the held amount cannot be spent again. |
| `release` | + | A previous hold returned, for example when a redemption is cancelled. |
| `expire` | - | A point lot reached its expiry date and was written off. |
| `reversal` | - | A correction that backs out an earlier posting. |
| `adjustment` | +/- | A manual, audited correction posted from the Manual adjustments screen. |

> Spends and expirations consume a member's oldest points first (oldest lot first). This is why a member's points can expire even while they keep earning: the old lot ages out regardless of newer earnings.

### Filtering the ledger

- The segmented buttons (**All**, **Grants**, **Deducts**, **Reservations**, **Expirations**, **Reversals**, **Adjustments**) filter by transaction type.
- The currency dropdown on the right filters to a single currency, or **All currencies**.
- Sort by **Txn**, **Member**, **Type**, **Amount**, **Lot** or **Posted** by clicking the column heading.
- Held and released rows are flagged inline with a small `held` or `released` pill so you can spot pending or returned holds.
- The **Source / reason** column shows the reason, and beneath it the rule and event that produced the row (where there was one), so you can trace a posting back to what triggered it.

Above the table, one card per currency shows the economy at a glance: the amount **in circulation**, the number of **Holders**, and the amounts **Issued** and **Redeemed** over the last 30 days.

When you choose the **Expirations** filter, an extra **Expiring lots** panel appears below the table. It lists the soonest-expiring open lots, how much remains in each, the expiry date, and how many days are left (overdue lots are flagged). Expirations themselves are written by a scheduled task; see [Scheduled Tasks](scheduled-tasks.md).

### Exporting

The **Export ledger** button downloads every row matching the current filters as a CSV (the whole filtered set, not just the page on screen). The file includes the transaction id, member, currency, type, amount, status, rule, event id, lot id, reason, the administrator, the posted time and any expiry. Use it for accounting or an audit.

## Balances are a cache, and "Rebuild projections"

Balances, the per-currency totals you see for a member, are a cache projected from the ledger. The ledger is authoritative; the cached balance is just a fast running total kept alongside it. Because the ledger is complete, every balance can be recomputed from scratch at any time.

In normal use the cache and the ledger agree. The Transaction ledger shows a reconciliation banner at the top:

- A green tick reads "Projections reconciled, balances match the ledger".
- If a balance has drifted from the ledger, the banner turns to a warning and tells you how many balances are affected.

If you see a warning, you can repair it:

- **Rebuild projections** (in the toolbar, or **Rebuild now** in the warning banner) recomputes every member's cached balance directly from the immutable ledger. It asks you to confirm first, then reports how many member projections were rebuilt.
- **Re-check** simply re-runs the comparison without rebuilding, in case the figures are already stale on screen.

Rebuilding is safe to run at any time: it never changes the ledger, it only re-derives the cache from it. The same repair also runs automatically as the `reconcile` scheduled task, described in [Scheduled Tasks](scheduled-tasks.md).

> Drift is rare and usually points at something interrupting a write (a crashed request, a database problem). If you see it repeatedly, rebuild to fix the immediate numbers, then look into what is interrupting postings. For how events become ledger rows in the first place, see [Events & Evaluation](events-and-evaluation.md).
