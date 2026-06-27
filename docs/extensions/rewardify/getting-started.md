---
id: getting-started
title: Getting Started with Rewardify
sidebar_label: Getting Started
sidebar_position: 2
---

# Getting Started with Rewardify

This page walks you through installing the Rewardify package, checking that the first-run defaults are in place, and putting the member-facing rewards page on your site. By the end you will have a working rewards engine with a few starter rules and a member page your visitors can open.

## Before you install

- Joomla 5 or 6.
- PHP 8.1 or later. The installer checks this and stops if your server is below 8.1.
- Administrator access to your Joomla site.

## Install the package

Rewardify ships as a single installable package. You install that one file and Joomla unpacks everything inside it.

1. Download the Rewardify package ZIP from your account.
2. In the Joomla administrator, go to **System -> Install -> Extensions**.
3. Open the **Upload Package File** tab.
4. Drag the package ZIP onto the upload area, or click to browse and select it.
5. Wait for the success message. You should see "Rewardify package installed successfully."

> Do not unzip the package yourself and upload the inner files one by one. Always install the single package file. It carries the correct install order and the post-install steps that seed your defaults.

### What gets installed

The package installs the component, the shared library, several plugins, and one site module:

| Item | Type | Notes |
|------|------|-------|
| `com_rewardify` | Component | The admin screens and the member app. |
| `lib_shondalai_core` | Library | Shared Shondalai library (email, storage, PDF, and more). Required. |
| `plg_system_rewardify` | System plugin | Boots the engine. Keep it enabled. |
| `plg_task_rewardify` | Task plugin | Provides the scheduled task routines. The installer enables this for you. |
| `plg_privacy_rewardify` | Privacy plugin | Wires Rewardify into Joomla data export and erasure requests. |
| `plg_rewards_joomla` | Rewards adapter | Reports Joomla core activity (`user.login`, `user.registered`, `content.article.published`). |
| `plg_rewards_communitybuilder` | Rewards adapter | Declares the Community Builder adapter. |
| `plg_kunena_rewardify` | Kunena adapter | Reports Kunena forum activity. Inert until Kunena is installed. |
| `plg_hikashop_rewardify` | HikaShop adapter | Reports HikaShop orders and refunds. Inert until HikaShop is installed. |
| `mod_rewardify_leaderboard` | Site module | A leaderboard you can place in any module position. |

A licensing system plugin is also installed as part of every Shondalai package.

### What the installer sets up for you

During installation Rewardify prepares your defaults so the engine works out of the box:

- **Scheduled tasks** are created and enabled. Four maintenance routines (drain, expire, reconcile, prune) are added under **System -> Scheduled Tasks**. You will see a message telling you how many were created. See [Scheduled Tasks](scheduled-tasks.md) for what each one does.
- **Default currencies** are seeded: `points` (Community Points, the everyday spendable currency) and `reputation` (lifetime standing). A third currency, `event` (Event Credits), is also seeded as a seasonal currency, but it is planned for a later release. Today you work with Community Points and Reputation.
- **A default level ladder** is seeded: Newcomer, Contributor, Regular, Veteran, and Luminary, derived from lifetime reputation.

If you are upgrading from Rewardify v1, the installer also removes the old v1 plugins that the new version replaces. See [Upgrading from v1](migrating-from-v1.md) for the full upgrade path.

## First-run checklist

Work through these steps once, in order, right after installing.

1. **Open the dashboard.** Go to **Components -> Rewardify**. You land on the **Reward economy** dashboard. This confirms the component installed and loaded correctly.
2. **Enable the adapters you need.** Open the **Adapters** screen (under Integrations in the left nav), or go to **System -> Manage -> Plugins**. Each adapter is a plugin that reports a host's activity to the engine. Enable the ones for the systems you actually run. The Adapters screen flags "Host not installed" for an adapter whose host component (Kunena, HikaShop, or Community Builder) is missing, so you know which ones will sit idle. See [Integrations & Adapters](integrations.md) for the full list and what each one reports.
3. **Choose your evaluation mode.** Open **Settings**, then the **Evaluation** section in the left-hand nav. On a fresh install **Evaluation mode** is seeded to **Queued**, which holds awarded events until the `drain` scheduled task processes them. For most sites the simplest choice is to switch it to **Instant** so rewards post the moment each event arrives and no cron is needed. If you keep **Queued**, you **must** enable the `drain` scheduled task or awarded events never post. (Note that `manual.*` events always evaluate instantly regardless of mode.) See [Events & Evaluation](events-and-evaluation.md), [Scheduled Tasks](scheduled-tasks.md), and [Settings Reference](settings.md).
4. **Review the seeded Rules, Levels and Currencies.** Open **Rules**, **Levels** and **Currencies** under "Rules & rewards" and look over the defaults. Nothing earns anything until a Published rule matches an event, so the Rules screen is where you decide what your community actually gets rewarded for. See [Rules](rules.md).

> Only **Published** rules are evaluated. A rule left in Draft never awards anything. After installing, plan to publish or create at least one rule before you expect members to earn.

> On a brand-new install the dashboard, the Members list, and the ledger are empty until the first event is awarded. This is normal. Figures appear once a Published rule matches an event and a member earns.

## Add the member page

Members see their rewards through a single page that you add as a Joomla menu item. The page is a tabbed app with up to eight tabs: Overview, My rewards, Badges, Campaigns, Catalogue, Leaderboard, How to earn, and Privacy.

1. Go to **Menus** and choose the menu you want the link to appear in (for example Main Menu).
2. Click **New** to create a menu item.
3. Next to **Menu Item Type** click **Select**, choose the **Rewardify** component, then pick the menu item type labelled **Rewardify** (described as "The member-facing Rewardify experience: balances, badges, campaigns, catalogue and leaderboard.").
4. Give the item a title, for example "Rewards" or "My Points".
5. Set the access level and any other menu options as you would for any menu item.
6. **Save** the item.

Open the new menu item on the front end to confirm the app loads.

### Choosing which tabs appear

Three tabs are always shown: Overview, My rewards, and Badges. The other five (Campaigns, Catalogue, Leaderboard, How to earn, Privacy) are optional and can be turned off. To control them, open **Settings -> Navigation** and toggle each tab. Hide the tabs for features you are not using yet, then show them later when you are ready.

## Publish the leaderboard module

The package includes a site module, `mod_rewardify_leaderboard`, that ranks members by a chosen currency. This is separate from the Leaderboard tab inside the member app, so you can show a leaderboard anywhere on your site.

1. Go to **Content -> Site Modules**.
2. Click **New** and choose **Rewardify Leaderboard**.
3. Set the module **Position** to wherever you want it (a sidebar, for example).
4. In the module options, set the **Currency** parameter (it defaults to `reputation`). You can also set how many members to show, whether to show avatars, and whether to show usernames.
5. Set the menu assignment, then **Save** and publish the module.

The module only lists members who opted in to the leaderboard, and shows an alias for members who chose one. For the full set of options and the privacy behaviour, see [Leaderboard](leaderboard.md).

## Starter recipes

Pick the recipe that matches your site. Each one lists the adapter to enable and a couple of rules to get you started. Build the rules on the [Rules](rules.md) screen.

### Community or blog

1. Enable the **plg_rewards_joomla** adapter.
2. Create a rule on the `user.registered` trigger that grants a small amount of `points` to the new member.
3. Create a rule on the `content.article.published` trigger that grants `reputation` to the article author, so contributors climb the level ladder.

### Forum

1. Install Kunena, then enable the **plg_kunena_rewardify** adapter.
2. Create a rule that grants `reputation` when a member posts, so active members rise through Levels over time.
3. Add a daily limit (a throttle) to the rule so a member cannot farm points by posting repeatedly. See the Limits section in [Rules](rules.md).

### Store

1. Install EasyCommerce, then enable the **plg_rewards_easycommerce** adapter or install HikaShop, then enable the **plg_hikashop_rewardify** adapter.
2. Create a rule on the order-completed trigger that grants `points` to the purchaser, so customers earn spendable points on each order.
3. Set up your redemption store on the **Catalogue** screen so members can spend those points. See [Catalogue & Campaigns](redemptions.md).

> The triggers you can select in the Rules and Badges editors come from the adapters you have enabled. If a trigger you expect is missing, the matching adapter is probably disabled or its host is not installed. Enable the adapter first, then build the rule.

## A note on developer mode

In **Settings -> Developer** there is a **Dev server mode** option (`developer.dev_mode`) and a Vite dev server URL. These exist only for building the member and admin React apps during development. They tell the page to load assets from a local Vite server instead of the installed files.

> Keep developer mode **off** on a production site. As a safeguard, dev server mode is honoured only on local hostnames (such as `localhost`, `.test`, `.local`, and similar), so a setting left on cannot point a live site at someone's local server. Even so, leave it off in production.

## Where to go next

- [How Rewardify Works](how-rewardify-works.md) for the event-to-ledger pipeline.
- [Rules](rules.md) to decide what members earn.
- [Settings Reference](settings.md) for every configuration option.
- [Integrations & Adapters](integrations.md) for connecting other extensions.
