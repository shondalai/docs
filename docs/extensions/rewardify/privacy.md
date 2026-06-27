---
id: privacy
title: Privacy & Member Data
sidebar_label: Privacy
sidebar_position: 16
---

# Privacy & Member Data

Rewardify records what members do so it can reward them, so privacy is built into how it works rather than added on top. This page explains what data Rewardify holds about a member, how the consent record works, and how Rewardify takes part in Joomla's data export and "right to be forgotten" requests.

## What data Rewardify holds about a member

Everything Rewardify stores about a member is keyed to their Joomla user ID. There is no separate Rewardify account. The data falls into these areas:

| Data | What it is |
|------|------------|
| Consent | The member's notification and privacy preferences, including leaderboard opt-in and any alias. Stored in `#__rewardify_consent`. |
| Balances | The cached current balance per currency (points, reputation, event). A projection rebuilt from the ledger. |
| Ledger | The append-only transaction history: every grant, deduct, reserve, release, expire, reversal and adjustment for that member. |
| Lots | The currency lots that track expiry batches for currencies that expire. |
| Badges | Badges the member has earned, plus their progress towards badges not yet complete. |
| Redemptions | Items the member has redeemed from the Catalogue. |
| Streaks | Activity-streak counters used by streak limits and streak-based badges. |
| Events | Incoming events where the member is the subject or the actor. |

Reputation and levels are not stored as separate personal records. A member's level is always derived from their lifetime reputation balance at the moment it is shown, so there is no separate "level" record to export or erase.

## The consent record

Each member has one consent record in `#__rewardify_consent`. It captures their personal privacy choices, separately from the site-wide defaults. Two choices matter most for what other people can see:

- **Leaderboard opt-in** (`on_leaderboard`): whether the member appears on the public Leaderboard and in the leaderboard module at all. Members who have not opted in are never listed.
- **Alias**: an optional display name. When a member sets an alias, that alias is shown on the Leaderboard instead of their real name.

A member's consent record also covers whether they receive notification emails and whether their profile is public. See [Email Notifications](emails.md) for how members manage their email preferences.

### Defaults for new members

You set the starting position for these choices on the **Settings -> Privacy & data** screen (Components -> Rewardify -> Privacy & data), in the **Consent** card. These are defaults only. Each member can change their own choices afterwards.

- **Public profile by default**: off by default.
- **Leaderboard participation by default**: off by default. New members do not appear on the Leaderboard until they opt in.
- **Allow aliases on leaderboard**: on by default. This permits members to display an alias rather than their legal name. If you turn it off, members can no longer hide behind an alias on the Leaderboard.
- **Notification emails by default**: on by default.

> The Consent defaults decide what happens to a member who has never touched their settings. They do not override a choice a member has already made.

### How members manage their own consent

Members manage their own choices from the **Privacy** tab in the member app (the front-end React app shown by your Rewardify menu item). From there a member can opt in or out of the Leaderboard and set or clear their alias.

The Privacy tab is one of the optional member tabs. If you do not want it shown, you can hide it under **Settings -> Navigation**. See the [Settings Reference](settings.md) for the full list of tabs you can show or hide. If you hide the Privacy tab, remember that members then have no self-service way to change their consent, so leave it visible unless you have a specific reason not to.

## Joomla data export and removal requests

Rewardify plugs into Joomla's own privacy tools through the **Privacy - Rewardify** plugin (`plg_privacy_rewardify`). This is the plugin that lets Rewardify data appear in a member's data export and be removed when a "right to be forgotten" request is actioned.

### Enable the plugin

For export and removal to include Rewardify data, the plugin must be enabled:

1. Go to **System -> Manage -> Plugins**.
2. Search for **Privacy - Rewardify**.
3. If it is not already enabled, open it and set Status to Enabled, then save.

> If this plugin is disabled, a Joomla privacy export or removal request will simply skip Rewardify. The member's points, ledger and badges would stay in place. Keep it enabled on any live site.

The package also ships `plg_system_rewardify`, which should stay enabled at all times for the engine itself to run. That is separate from the privacy plugin above.

### What an export includes

When an administrator processes an information request in Joomla's **Users -> Privacy** screens, Rewardify adds the following domains to the exported file for the matched member:

- Consent (notification and privacy preferences)
- Currency balances
- Points ledger (transaction history)
- Currency lots (expiry batches)
- Badges earned
- Catalogue redemptions
- Activity streaks

Rewardify data is matched by Joomla user ID only. A request that supplies just an email address with no matching user account returns no Rewardify rows, because there is nothing keyed to that person without an account.

### What a removal request removes

When Joomla processes a removal (erasure) request, Rewardify deletes every record tied to that user across all of its tables: consent, balances, ledger, lots, badges and badge progress, campaign progress, redemptions, streaks, and any events where the member was the subject or the actor.

This is a full per-user delete, not an anonymisation. Because Rewardify keys everything on the Joomla user ID, and a removal request happens as the Joomla account itself is being removed, there is no remaining account to attach an anonymised record to. The rows are removed outright.

> A removal request takes the member off the Leaderboard automatically, because their consent record and balances are gone. There is nothing left to rank.

If a removal does not fully complete (for example a database problem on one table), Rewardify writes a warning to Joomla's privacy log channel rather than failing silently. Check **System -> Maintenance -> Logs** if you suspect a request did not finish.

### The Privacy & data screen tools

The **Privacy & data** admin screen also offers buttons under **Member data requests** for handling export, anonymisation and removal directly. The accompanying note explains that anonymising a member preserves ledger integrity: transactions stay in place for accounting, but identifying fields are replaced with a tombstone reference, and balances stay rebuildable.

> For a true Joomla "right to be forgotten" request that removes the user account, use Joomla's own Users -> Privacy workflow with the Privacy - Rewardify plugin enabled. That path performs the full per-user delete described above. The anonymisation option keeps the ledger for sites that must retain accounting history while severing the personal identity.

## Retention controls

The **Privacy & data** screen also controls how long raw activity is kept. These windows trim transient data; they never touch the ledger, which is permanent.

- **Raw activity-event retention**: how many days normalised events are kept before they are pruned. Default 90 days.
- **Failed / dead-letter retention**: how long failed events are kept. Default 30 days.
- **Store minimal payloads only**: on by default. Drops sensitive order or membership metadata from an event once it has been evaluated, so it is never kept longer than needed.
- **Collect IP addresses**: off by default. Only turn this on if abuse detection genuinely needs it.

The actual pruning is done by the `prune` scheduled task. See [Scheduled Tasks](scheduled-tasks.md) for how those routines run.

## Leaderboard privacy guarantees

The Leaderboard is built to respect member choices:

- **Only members who opted in appear.** A member who has not set `on_leaderboard` is never listed, on either the member app Leaderboard tab or the `mod_rewardify_leaderboard` site module.
- **Aliased members are shown by alias.** If a member chose an alias, that is the name shown. Their real name is not exposed in the ranking.
- **Non-member visibility is a separate switch.** Whether people who are not logged in can see the public Leaderboard at all is controlled by the `appearance.public_leaderboard` setting (Settings -> Appearance). Turning that off hides the Leaderboard from the public without changing any member's own opt-in.

See [Leaderboard](leaderboard.md) for the full behaviour of both surfaces and the module parameters.

## Ethical guardrails

The Privacy & data screen also publishes the principles Rewardify is built around. These are commitments, not switches:

- No hidden expiration or disguised advertising.
- No artificial urgency or unpredictable reward mechanics.
- Rewards recognise useful progress, not time on site.
- Clear, published point-expiration and redemption policies.
