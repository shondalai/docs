---
id: rewardify-changelog
title: Rewardify Changelog
sidebar_label: Changelog
sidebar_position: 2
---

# Changelog

All notable changes to Rewardify are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] - 2026-06-27

### 🚀 Added
- Released Rewardify v2.0 rewrite

### 🐛 Fixed
- Corrected update site URLs

## [2.0.0] - 2026-04-28

**A complete rebuild.** v1 kept a single points balance on each member and changed it in place, with no record of how it got there. v2 is built on an append-only ledger: every grant, deduction, redemption, and expiry is one permanent row, and balances, levels, and badges are projections rebuilt from that record. On top of it sit the things v1 could not reach, all configured from the dashboard rather than fixed in code: multiple currencies, a no-code rules engine, badges, levels, campaigns, and a redemption store with real fulfilment.

### Highlights

- Event-sourced ledger: every points movement is a permanent, auditable row, and balances are rebuilt from it.
- Multi-currency wallets you create from the dashboard. Community Points (spendable) and Reputation (lifetime, drives levels) come ready to use.
- No-code rules engine with triggers, conditions, limits, streaks, versioning, and a Simulate tool that tests a rule before it pays anyone.
- Badges from rules or their own multi-step criteria, with tiers, rarities, prerequisites, secret badges, and Open Badges.
- Levels that rise from lifetime Reputation and can map to a Joomla user group to unlock real access.
- A redemption catalogue with a reserve, issue, confirm flow that returns a member's points automatically if fulfilment fails.
- Campaigns: time-boxed seasons and boosts that start and end on a schedule.
- Anti-abuse and a trust model: daily caps, cooldowns, self-action guards, and a held-event queue for low-trust reports.
- Privacy by default: opt-in leaderboard, aliases, consent records, and Joomla-native export and erasure.

### Added

**Engine and ledger**
- Append-only event store and ledger as the single source of truth, idempotent on the command id so a duplicated event never pays twice.
- Seven transaction types: grant, deduct, reserve, release, expire, reversal, and adjustment.
- Points held in dated lots with per-lot expiry (oldest spent first), and an "expiring soon" view.
- Balances are a projection with a reconciliation check and a rebuild-from-ledger action.
- Instant or queued evaluation, with a retrying dead-letter queue for events that fail to process. Manual adjustments always evaluate instantly.
- An event pipeline you can watch end to end: received, evaluated, awarded, no-match, duplicate, held, retrying, and dead-letter.

**Rules engine**
- No-code rule builder: trigger, conditions, actions, limits, and schedule.
- Triggers come from whichever adapters are installed. Conditions use operators (equals, not, greater or less than, in, contains, exists) combined as match-all or match-any.
- An action grants a currency or awards a badge to a chosen recipient: the subject, actor, author, purchaser, or referrer.
- Fairness limits: once ever, once per day, a per-day cap, a lifetime cap, and a cooldown between identical awards.
- Streak rules reward consecutive days and can pay again at each milestone.
- Rules are versioned with immutable snapshots, ordered by priority, with stop-processing and stacking controls.
- A Simulate and trace tool dry-runs a rule against a test payload and writes nothing to the ledger.

**Currencies**
- Create and configure your own currencies (name, code, glyph, colour, decimals, spendable, lot expiry) from the dashboard.
- Ships with Community Points (spendable, 365-day lots) and Reputation (lifetime, never spent, drives levels) ready to use. An Event Credits currency is modelled for a later release.

**Badges**
- Earned two ways: as a rule action, or from a badge's own multi-step criteria with progress tracking.
- Criteria windows: lifetime total, the last N days, or consecutive calendar days.
- Tiers and rarities, prerequisites, repeatable badges, and visibility (visible, teased, secret).
- An optional currency reward on earning, and Open Badges 3.0 credentials with hosted verification.

**Levels**
- A level ladder derived from lifetime Reputation (Newcomer through Luminary), never stored as a separate field so it can never drift.
- Each level has a name, colour, and perk, and can map to a Joomla user group so reaching it grants real access. Members rise but never drop.

**Catalogue and redemptions**
- A redemption store where members spend a currency on items: cosmetic, coupon, perk, entitlement, raffle, or physical.
- A reservation saga holds the points while the reward is delivered and returns them automatically if delivery fails, so nobody loses points to a redemption that did not complete.
- Reserved-versus-available balances, optional stock limits, and shipping address and tracking for physical items.
- Built-in fulfilment providers: Internal perk, Grant a badge (awards a chosen badge the moment a member redeems), and Manual fulfilment. Any extension can add its own provider, and providers ship for EasyCommerce (a discount coupon or a granted product) and Community Quiz (course, quiz, or exam access).

**Campaigns**
- Time-boxed, multi-step journeys with their own start and end dates and a completion reward: a currency, Reputation, or a badge.

**Admin console**
- A single-page console with a reward-economy dashboard, per-currency cards, and an event-pipeline funnel.
- An Event Inbox with master-detail, status filters, decision traces, held-event approval, and CSV export.
- A Member directory with balances, a per-member ledger, consent, and privacy-safe export.
- A Transaction Ledger screen with type and currency filters, a reconciliation banner, and CSV export.
- Manual adjustments that require a reason, record the admin who made them, and never push a balance below zero.
- An Adapters screen listing each event source with its trust level, the events it emits, health (events today, error rate), and an enable or disable switch.
- Six built-in themes: Paper, Carbon, Sage, Plum, Midnight, and Frost.

**Member area**
- A self-service area showing wallet balances, an activity stream, earned badges, the current level and next-level forecast, the catalogue, campaigns, the leaderboard, a how-to-earn guide, and personal privacy controls. Tabs can be switched on or off in Settings.

**Leaderboard**
- An in-app leaderboard tab and the `mod_rewardify_leaderboard` site module, ranked by a currency you choose.
- Opt-in only, with alias support and a separate public-visibility toggle. Ties break by the oldest account, so ranking is stable.

**Email**
- Templates for redemptions (confirmed, received, shipped, failed), points (awarded, expiring, expired), badge earned, level up, campaign completed, and a welcome message.
- A shared branded wrapper (sender, logo, header, colours, footer) applies to every email, with per-template enable, a live preview, and restore-to-default.

**Privacy and compliance**
- Per-member consent records (public profile, leaderboard opt-in, alias, notification emails) with admin-set defaults.
- `plg_privacy_rewardify` wires Joomla's own data export and right-to-be-forgotten, with an anonymise option that keeps the ledger intact for accounting.
- Configurable retention for events and dead-letter records, minimal payload storage, and IP collection off by default.

**Integrations, adapters, and SDK**
- Bundled adapters: Joomla core (`plg_rewards_joomla`), Community Builder (`plg_rewards_communitybuilder`), Kunena (`plg_kunena_rewardify`), and HikaShop (`plg_hikashop_rewardify`). EasyCommerce and Community Quiz integrate from their own components.
- Adapters only report facts and never touch the ledger. The same rules, limits, and trust checks apply to every source.
- A developer SDK with an EventBuilder, trust levels (server-verified or client-reported), SHA-256 payload digests, and idempotency keys, plus interfaces for custom triggers, action handlers, and fulfilment providers.

**Scheduled tasks**
- Four maintenance routines seeded through `plg_task_rewardify`: drain the event queue, expire currency lots, reconcile balances, and prune old events.

### Changed

- Balances are no longer stored directly. They are projections rebuilt from the ledger and can be recalculated at any time.
- Earning logic moved out of hard-coded plugins into rules you build and publish. Per-host plugins are now adapters that only report events.
- Settings moved out of the component Options panel into a dedicated Settings screen.
- Six new ACL actions: `rewardify.award`, `rewardify.deduct`, `rewardify.redeem`, `rewardify.adjust`, `rewardify.simulate`, and `rewardify.integrate`.

### Migration

- Installing v2 over v1 builds the new schema, seeds the currencies and levels, removes the old v1 plugins it finds (content, user, JomSocial, Community Builder, Sociable, HikaShop payment), and seeds the four scheduled tasks. None of this needs doing by hand.
- Your v1 balances are not touched by the upgrade. To bring them across, open Settings, find the migration card near the Danger zone, and run it. Each member's v1 balance is imported once as a single non-expiring opening grant into Community Points, and the run is idempotent, so re-running it skips anyone already imported.
- Migrated points become Community Points only. They do not add to Reputation, so a migrated member starts at Newcomer until they earn v2 reputation.
- v1 rules, configuration, and per-award history do not carry over, because v1 had no rule engine to translate. Rebuild your earning logic as v2 Rules. Only balances migrate.
- The same screen can import balances from AlphaUserPoints, Sociable, CjForum, CjBlog, and JomSocial, each with its own migrate button.
- After upgrading, the leaderboard module may need a Discover or a reinstall before it loads, because its namespace changed. Confirm Joomla's scheduler is running so the seeded tasks (and queued event processing, if you use it) actually execute.

---

## [1.2.3] - 2025-12-28

### Changed
- Enhancing 7-day streak user message

## [1.2.2] - 2025-12-22

### Added
- New rule - 7 day login streak
- Add rate limiting the points award
- Add rate limiting the points award
- Adding Community Builder support
- New HikaShop payment plugin to use rewardify points for purchasing products
- New leaderboard module
- New HikaShop plugin to purchase points

### Changed
- Unable to sort backend users
- Joomla 6 Compatibility Update
- Unable to delete trashed point rules
- Update copyright headers

### Fixed
- Fixed issues with content and user plugins

## [1.2.1] - 2025-10-05

### Fixed
- Hotfix for Joomla 6 compatibility

## [1.2.0] - 2025-10-05

### Added
- Joomla 6 compatibility update

### Fixed
- Unable to sort backend users

---

## [1.1.0] - 2025-08-16

### Added
- New leaderboard module
- HikaShop plugin to buy points
- HikaShop payment plugin to use Rewardify points for purchasing products

### Fixed
- Unable to delete trashed point rules

---

## [1.0.5] - 2024-12-10

### Fixed
- Fixed issue with PHP 7.4
- Fixed PHP deprecated messages
- Show message when user profile not found
- Fixed issue with awarding points with Joomla articles

---

## [1.0.4] - 2024-08-30

### Fixed
- Negative points cannot be entered from backend points form

---

## [1.0.3] - 2024-05-11

### Fixed
- Fixed issue with user points synchronization
- Fixed menu item name for email templates
- Fix issue with synchronizing users

---

## [1.0.2] - 2024-01-30

### Added
- Added admin menu item for Mail Templates

### Fixed
- Fixed class comments
- Smart search indexer shows error with content plugin
- Fixed issue with profile when using PHP 7.4

---

## [1.0.1] - 2024-01-13

### Added
- Added sociable profile plugin
- Added trends chart on the user profile page
- Added developer API for assigning points
- Added developer API for fetching points

---

## [1.0.0] - 2024-01-07

🎉 **Initial Release**

### Features
- Complete points management system
- User profile integration
- Points rules engine
- Plugin system (user, content)
- Backend management interface
- Frontend user display
- Leaderboard functionality
