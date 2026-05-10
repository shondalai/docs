---
id: quick-get-started-guide-for-community-polls
title: Quick start guide
sidebar_label: Quick start
sidebar_position: 2
---

# Quick start guide

This guide walks you from a fresh install to your first published poll in about ten minutes. It covers Community Polls 7. If you are upgrading from version 6, the upgrade installer takes care of the schema changes — you can still use this guide to learn where the new admin puts each setting.

## 1. Install the component

Install the package the normal Joomla way:

1. Sign in to **System → Install → Extensions** in your Joomla admin.
2. Drag the `pkg_communitypolls_v7.x.x.zip` file onto the upload area, or pick it with the file selector.
3. Wait for the success message.

The package installs the component, three modules (Random Poll, Latest Polls, Categories), six plugins, the shared Shondalai core library, and a default set of email templates.

After install, the component sits at **Components → Community Polls** in the admin menu.

## 2. Set permissions

Permissions decide who can create, edit, and moderate polls.

1. Open **System → Manage → Components**, find Community Polls, and click **Options**.
2. Switch to the **Permissions** tab.
3. For each user group, set what you want them to be able to do. The settings that matter most:
    - **Create** — can submit a poll from the front end.
    - **Edit** — can edit any poll.
    - **Edit Own** — can edit polls they created.
    - **Edit State** — can publish, unpublish, and feature polls.
    - **Delete** — can delete polls.
4. Save.

If you only ever create polls from the admin yourself, the defaults are fine. Open create permission to **Registered** when you want members to submit polls from the front end.

## 3. Create at least one category

Polls live inside categories so URLs and navigation stay tidy.

1. Go to **Components → Community Polls → Categories** in the admin sidebar.
2. Click **New**.
3. Give it a title (for example, "General"). Save.

You only need one category to get started; you can add more later as your library grows.

## 4. Create a menu item

A menu item gives the public polls page a clean URL and lets you control inheritance and access per area of your site.

1. Go to **Menus → Main Menu** (or whichever menu you want).
2. Click **New**, then for **Menu Item Type** pick **Community Polls → Polls listing**.
3. Save.

For category-driven sites, also add a **Community Polls → Category** menu item per top-level category. Polls inside that category will inherit menu-item parameters automatically.

## 5. Configure the basics in Settings

Open the admin sidebar and click **Settings**. The settings page is split into sections:

- **Voting** — how visitors are identified (cookie, IP, or login) and how often they can vote.
- **Editor defaults** — fallback chart style, palette, and answer ordering for new polls.
- **Display** — how the public listings look, including the column count for the polls and categories pages.
- **Email branding** — the logo, header title and subtitle, accent colours, and footer text used in every notification email.
- **AI services** — connect to the Shondalai AI service if you want the optional AI helpers in the poll editor.
- **URLs** — whether public poll URLs include numeric IDs or only the alias.
- **Developer** — verbose logging for support tickets.

Save when you are done. None of the settings are required to create a poll — the defaults work — but it is worth a quick pass before you start.

## 6. Create your first poll

In the admin sidebar, click **Polls**, then **New poll**.

The poll editor is split into tabs across the top:

- **Question** — the poll title, description, category, and poll type (single, multi, grid, or ranked).
- **Options** — the answer options. For multi-choice polls you can also set the minimum and maximum number of selections.
- **Schedule** — publish window and close date.
- **Voting** — restrictions, anonymous voting, and whether voters can change their mind.
- **Privacy** — private poll toggle and the secret key.
- **Design** — chart style and palette for the results.
- **SEO** — alias, meta description, and keywords.

Fill in the question and at least two options. If you want to use AI to draft the options, click the **AI suggest** button next to the options heading — see [AI helpers](./ai-helpers.md).

Set the status to **Published** and click **Save**. The poll is live.

## 7. Show the poll on the front end

There are several ways to surface your new poll:

- **Visit the polls page** through the menu item you created in step 4.
- **Embed it in an article** — see [Display polls in Joomla articles](./display-polls-in-joomla-articles.md) for the editor button, the `{poll id=N}` shortcode, and the Random Poll module.
- **Drop a module** — publish the Random Poll, Latest Polls, or Categories module in any module position from **Content → Site Modules → New**.

## 8. Let users submit polls (optional)

If you want registered users to submit polls themselves:

1. In **System → Manage → Components → Community Polls → Permissions**, give the **Registered** group (or whichever group fits) the **Create** permission.
2. In the front-end polls listing, signed-in users will see a **Submit a poll** button.
3. By default, submitted polls land in a pending state and trigger a moderation email to the recipients you configured in the Community Polls events plugin (Plugin Manager → Plugins → Community Polls - Polls).
4. The moderation email contains one-click **Approve** and **Reject** links that work without an admin login. The link tokens are single-use.

To skip moderation entirely and auto-publish front-end submissions, give the user group an additional auto-approve permission in the same permissions screen.

## 9. Updating to a new version

When a new version comes out:

1. **System → Update → Extensions** picks it up automatically through the update site.
2. Click the **Update** button next to the Community Polls row.

If you prefer to update manually, download the package from your account on shondalai.com and install it the same way as a fresh install — the installer detects the existing version and runs the schema upgrade.

We recommend taking a database backup before any major-version upgrade.

## Next steps

- [Embed polls in Joomla articles](./display-polls-in-joomla-articles.md)
- [Customise notification emails](./email-templates.md)
- [Use AI helpers in the poll editor](./ai-helpers.md)
- [Extend the component with your own plugin](./extend-community-polls-using-plugin-events.md)
