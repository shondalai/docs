---
id: leaderboard
title: Leaderboard
sidebar_label: Leaderboard
sidebar_position: 13
---

# Leaderboard

Rewardify ranks members in two places: a Leaderboard tab inside the member app, and a separate site module (`mod_rewardify_leaderboard`) you can publish anywhere on your site. Both show the same kind of standing, and both respect each member's privacy choices.

## The two surfaces

| Surface | Where it shows | Controlled by |
| --- | --- | --- |
| Member app Leaderboard tab | Inside the Rewardify member app, on the page that holds your Rewardify menu item | `navigation.show_leaderboard` (Settings -> Navigation) |
| `mod_rewardify_leaderboard` site module | Any module position on any page you choose | Published as a normal Joomla site module |

You can use either one, both, or neither. They are independent.

## The member app Leaderboard tab

The member app is a single page shown by the Joomla menu item that points at the Rewardify component. The Leaderboard tab is one of its optional tabs.

To show or hide it:

1. Go to **Components -> Rewardify -> Settings**.
2. Open the **Navigation** section in the left-hand nav.
3. Turn the **Leaderboard** tab on or off.

This is the `navigation.show_leaderboard` setting. When it is off, members will not see the Leaderboard tab in the app at all. The other optional tabs (Campaigns, Catalogue, How to earn, Privacy) are toggled in the same place. See the [Settings Reference](settings.md) for the full list.

## The site module (`mod_rewardify_leaderboard`)

The module shows a numbered list of top members ranked by a currency balance. It is a standard Joomla site module, so you publish and position it the same way as any other module.

### Publishing the module

1. Go to **Content -> Site Modules**.
2. Click **New** and choose **Rewardify Leaderboard** from the list of module types.
3. Give it a **Title**, and choose whether to show or hide that title.
4. Pick a **Position** (a module position in your template) or assign it to an article using the editor button.
5. On the **Menu Assignment** tab, choose the pages it should appear on.
6. Set the module parameters (below).
7. Set **Status** to **Published** and **Save**.

### Module parameters

These are on the module's **Module** tab (the basic options), except the last two, which are on the **Advanced** tab.

| Parameter | Default | What it does |
| --- | --- | --- |
| **Currency** | `reputation` | The currency key to rank members by. Enter the key of a currency that exists in **Components -> Rewardify -> Currencies**. Members are ordered by their cached balance in this currency, highest first. |
| **Number of users** | `10` | How many members to list. Minimum 1, maximum 100. |
| **Show avatar** | Yes | Whether to show an avatar next to each member. |
| **Avatar size** | `48` | Avatar size in pixels (shown only when **Show avatar** is on). Minimum 16, maximum 256. |
| **Show username** | Yes | Whether to show the member's `@username` handle beside their name. |
| **Alternative layout** (Advanced tab) | default | The standard Joomla module layout override field. |
| **Module Class** (Advanced tab) | empty | A CSS class suffix added to the module wrapper, for styling. |

> The **Currency** field is free text, so type the currency key exactly as it appears in the Currencies screen (for example `points`, `reputation`, or `event`). If you enter a key that does not exist, every listed member shows a balance of 0. See [Currencies](currencies.md) for the keys and what each currency means.

### How the module picks who appears

The module builds its list like this:

1. It starts from members who have **opted in** to the leaderboard (see Privacy and consent below). Members who have not opted in never appear.
2. Blocked Joomla user accounts are excluded.
3. The remaining members are ordered by their balance in the chosen **Currency**, highest first. Ties are broken by the older account first.
4. The top **Number of users** are shown, numbered from 1.

Each row shows the member's rank number, an optional avatar, their display name, an optional `@username` handle, and their balance in the chosen currency. If no members qualify, the module shows a short "no users" message instead of an empty list.

## Privacy and consent

The leaderboard only ever lists members who chose to be on it, and it honours the alias they picked.

- **Opt-in only.** A member appears only if they have turned on the leaderboard consent (`on_leaderboard`). This is stored per member and is off until they choose it. Members who have not opted in are never listed, no matter how high their balance.
- **Alias is respected.** A member can choose to be shown by an alias instead of their real name. When a member is aliased, the module shows their alias as the display name, and it does **not** show their `@username` handle and does **not** show a recognisable avatar for them. This is true even if you have **Show username** and **Show avatar** turned on, because exposing the real handle or avatar would undo the alias they asked for.
- **Logged-out visitors.** Whether people who are not logged in can see a public leaderboard is controlled by the `appearance.public_leaderboard` setting in **Settings -> Appearance** (Public leaderboard). Use this to decide if the leaderboard is for members only or for everyone.

For the full picture of member consent, aliases, and data handling, see [Privacy & Member Data](privacy.md).

> Consent and alias choices belong to the member. There is no admin override that forces a member onto the leaderboard or reveals an aliased member's real identity in these surfaces.

## After a package update: reinstall or Discover the module

In Rewardify v2 the module's namespace changed. After you update the Rewardify package, Joomla may not pick up the new module class automatically, and the module can stop rendering or fail to install cleanly.

If the leaderboard module is missing or errors after an update:

1. Go to **System -> Install -> Discover**, click **Discover**, then install **Rewardify Leaderboard** if it is listed.
2. If that does not resolve it, reinstall the Rewardify package, which re-registers the module.

This only affects upgrades from an older build. A fresh install is not affected.

## Related pages

- [Currencies](currencies.md): the currency keys you can rank by.
- [Settings Reference](settings.md): the Navigation toggle for the member tab, and the Public leaderboard setting.
- [Privacy & Member Data](privacy.md): how consent and aliases work.
