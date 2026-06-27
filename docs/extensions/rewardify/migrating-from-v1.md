---
id: migrating-from-v1
title: Upgrading from Rewardify v1
sidebar_label: Upgrading from v1
sidebar_position: 17
---

# Upgrading from Rewardify v1

This guide is for sites moving from the old single-currency Rewardify (v1) to Rewardify v2. It explains what changed, how to bring your members' old point balances across, and what to check once the upgrade is done.

## What changed, and why it matters

Rewardify v2 is a full rewrite, not a feature update. Before you upgrade, it helps to reset a few expectations so the new screens make sense.

- **v1 stored points directly.** A member had a single points figure, and plugins added to or subtracted from it. There was no audit trail of how a balance got to where it was.
- **v2 is event-sourced.** Extensions report facts (a member logged in, an order completed). Rules you configure decide what each fact earns, and every change is written to an append-only **Transaction ledger**. Balances are a cache that is rebuilt from that ledger, so they are always explainable and always repairable.
- **v2 has more than one currency.** v1 had a single pot of points. v2 ships `points` (spendable Community Points), `reputation` (lifetime standing that drives Levels and never gets spent), and `event` (Event Credits, a seasonal currency planned for a later release). See [Currencies](currencies.md).
- **v2 adds Levels, Badges, a Catalogue and Campaigns.** None of these existed in v1, and none are hard-coded. You build them.

The practical consequence: **your v1 rules and configuration do not carry over.** There is nothing to translate, because v1 had no rule engine. You rebuild your earning logic from scratch as v2 Rules, which is covered in [Getting Started](getting-started.md) and [Rules](rules.md). What does carry over is each member's balance, through the migration tool described below.

> Because v2 is event-sourced, the migration imports balances only. It does not replay v1 history. The old per-award detail has no meaning in the v2 rule engine, so it is not imported.

## What the installer does automatically

When you install the v2 package over a v1 site, the package script handles some cleanup for you. You do not need to do any of this by hand.

### The old v1 plugins are uninstalled

The v2 rewrite replaced the old per-host plugins with a new adapter design (see [Integrations & Adapters](integrations.md)). To avoid leaving dead, never-loaded plugins behind, the installer removes these v1 plugins if it finds them:

| v1 plugin | Plugin group / element |
|-----------|------------------------|
| Content (article points) | `content` / `rewardify` |
| User (login/registration points) | `user` / `rewardify` |
| JomSocial | `community` / `rewardify` |
| Community Builder | `user` / `rewardifycb` |
| Sociable | `sociable` / `rewardify` |
| HikaShop payment | `hikashoppayment` / `rewardify` |

This step is best-effort and safe: if a plugin is not present, it is simply skipped, and the removal never blocks the package update. None of these collide with the new v2 plugins, which live in different groups.

### Scheduled tasks are created

The installer also enables the v2 task plugin and seeds the four maintenance tasks (drain, expire, reconcile, prune). You do not have to wire these up yourself. See [Scheduled Tasks](scheduled-tasks.md) for what each one does and how to confirm the Joomla scheduler is actually running them.

## The leaderboard module needs attention

The site leaderboard module's internal namespace and structure changed in v2. After the upgrade, the module may not load correctly until Joomla re-registers it.

If your front-end leaderboard module shows nothing or throws an error after upgrading:

1. Go to **System -> Manage -> Extensions** and run **Discover** to let Joomla pick up the new module structure, or
2. Reinstall the package so the module is registered cleanly.

The [Leaderboard](leaderboard.md) page covers the module parameters once it is loading again.

## Migrating member point balances

v2 brings old balances across using a migration card that appears in the admin SPA near the **Danger zone** in **Settings**. There are two separate migration cards, and each one only appears when there is something for it to do.

Both work the same way: each member's old balance is imported once as a single, **non-expiring opening-balance grant** into the spendable `points` currency. It is recorded as a normal ledger entry, so it shows up in the Transaction ledger like any other grant.

> Both migrations are **idempotent**. They are safe to run more than once. Members who have already been imported are skipped, so you can re-run a migration after adding more members, or just to be sure nothing was missed, without double-crediting anyone.

### Migrating from Rewardify v1

The **Migrate legacy points** card reads the old `#__rewardify_users` table. It appears only if that table exists and members still hold points there. The card shows:

- **Members to migrate**: how many still need importing.
- **Points to import**: the total `points` about to be granted.
- **Already migrated**: progress so far, once a run has started.

Press the **Migrate** button. The card processes members in batches and keeps going until everything is done, then refreshes the member, ledger and dashboard views. Imported balances go into `points` and never expire.

### Migrating from other points extensions

If your members earned points in a different extension before Rewardify, the **Migrate points from other extensions** card can import those too. It detects supported source tables automatically and only lists the ones it actually finds on your site. The supported sources are:

| Source | Where the balance comes from |
|--------|------------------------------|
| AlphaUserPoints | per-member running total |
| Sociable | per-award rows, summed per member |
| CjForum | per-award rows, summed per member |
| CjBlog | per-award rows, summed per member |
| JomSocial | per-member running total |

Each detected source has its own **Migrate** button and is imported independently, so a member who had points in two systems can be migrated from both. As with the v1 migration, every balance is imported once as a non-expiring opening balance into `points`, and re-runs skip anyone already migrated.

> These foreign points become spendable `points` balance only. They do not add to `reputation`, because `reputation` reflects standing a member built up inside Rewardify v2. That means a migrated member starts at Level Newcomer until they earn v2 reputation. See [Levels](levels.md).

A few details worth knowing:

- Only whole points are imported. A fractional balance that rounds down to zero is not granted (and is not counted as pending).
- Only balances belonging to a real, current Joomla user are imported. Orphaned rows for deleted users are skipped.
- A source only appears if its table is present and has the expected columns, so a same-named table from an unrelated extension will not be touched.

## Post-upgrade checklist

Work through these in order after the package is installed.

1. **Enable your v2 adapters.** Go to **Components -> Rewardify -> Adapters** and enable the adapters for the hosts you use (Joomla core, Community Builder, Kunena, HikaShop). An adapter that is not enabled reports no events. See [Integrations & Adapters](integrations.md).
2. **Rebuild your earning rules.** v1 rules do not carry over. In **Rules**, create and **Publish** the rules that decide what each event earns. Only published rules are evaluated.
3. **Run the migration.** Open **Settings**, scroll to the migration card(s) near the Danger zone, and run the v1 migration (and any external-source migrations that appear).
4. **Verify balances.** Open **Members** and the **Transaction ledger** and spot-check a few members against their old totals. Each imported balance appears as a single migration grant.
5. **Publish the member menu item.** The front-end is a single React app shown by a Joomla menu item that points at the Rewardify component (view "app"). Make sure that menu item exists and is published so members can see their wallet, badges and the leaderboard.
6. **Confirm the scheduler runs.** Check **System -> Scheduled Tasks** and make sure the seeded Rewardify tasks are enabled and executing. See [Scheduled Tasks](scheduled-tasks.md).

Once those are done, your members keep the points they earned in v1, and everything new (rules, badges, levels, currencies, the store) is yours to configure.
