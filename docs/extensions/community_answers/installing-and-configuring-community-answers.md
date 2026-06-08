---
id: installing-and-configuring-community-answers
title: Installing and configuring Community Answers
sidebar_label: Installation and configuration
sidebar_position: 3
---

Community Answers installs as a Joomla package containing the main component, companion modules, the bounty expiry task plugin, and the Shondalai Core library used by integrations and email delivery.

## Requirements

- Joomla 6
- PHP 8.2 or later
- MySQL or MariaDB supported by Joomla
- Joomla SEF URLs enabled for the best frontend experience

## Install the Package

1. In Joomla administrator, go to **System > Install > Extensions**.
2. Upload and install the Community Answers package zip.
3. Go to **Components > Community Answers** and confirm that the dashboard loads.
4. Open **System > Plugins** and enable the task plugin named **Community Answers - Bounties** if you use bounties.
5. Review the component options before opening the community to users.

## Create Categories

Community Answers uses Joomla categories. Create the categories that will hold questions:

1. Go to **Components > Community Answers > Categories**.
2. Create the top-level categories for your community.
3. Use category permissions only when a category needs different access rules from the component defaults.
4. Keep category aliases stable if you are migrating from an older Community Answers installation and want to preserve URLs.

## Create Menu Items

Create Joomla menu items for the pages you want to expose. Menu items help Joomla generate clean SEF URLs and stable Itemids.

Recommended public menu items:

- **Question Feed**: main Q&A landing page.
- **Ask Question**: question submission screen.
- **Bounty Board**: active, expiring, awarded, and expired bounties.
- **Tags**: tag directory.
- **Search**: dedicated search page.
- **Leaderboard**: contributor leaderboard.
- **My Profile**: signed-in user profile.
- **Notification Preferences**: user notification settings.

Optional menu items:

- **Category Questions** for important top-level categories.
- **Single Tag** for promoted topics.
- **Single Question** for featured questions.
- **Moderation Queue** for moderator-only menus.

Legacy menu entries such as question form, reply form, subscriptions, archive, featured questions, my questions, and my answers remain available for compatibility, but new sites should prefer the v7 menu entries above.

## Configure Permissions

Open **Components > Community Answers > Options > Permissions** and configure ACL carefully.

Common setup:

- Public or Guest: allow `core.view` if questions should be public.
- Registered: allow `core.create`, `core.reply`, `core.view`, `core.view.replies`, and voting/bounty permissions as needed.
- Authors or trusted users: allow `core.edit.own` to edit their own questions and replies.
- Moderators: allow moderation actions, flag queue access, and audit log access as needed.
- Administrators: retain full component management.

Important permissions:

| Permission | Purpose |
| --- | --- |
| `core.view` | View questions. |
| `core.view.replies` | View answers and comments. |
| `core.create` | Ask questions. |
| `core.reply` | Post answers. |
| `core.edit.own` | Edit own questions and replies. |
| `core.edit` | Edit any question or reply. |
| `core.delete` | Delete or unpublish questions and replies from the frontend. |
| `ca.vote` | Vote on questions, answers, and comments. |
| `ca.bounty.create` | Start bounties. |
| `ca.moderate` | Moderate flagged content. |
| `ca.audit.view` | View audit logs. |

If a user can sign in but cannot answer, Community Answers shows a permission message instead of a disabled answer form.

## Configure Appearance

Go to **Components > Community Answers > Settings > Appearance**.

You can configure:

- Theme preset: `Civic`, `Pulse`, `Harbor`, or `Custom`.
- Theme mode: light, dark, auto, or follow template.
- Density: compact, balanced, or spacious.
- Left menu visibility.
- Top toolbar visibility.
- Right sidebar blocks: top bounties, popular tags, and top contributors.
- Leaderboard visibility.
- Answer card border, shadow, and animation.
- Custom CSS variables for brand-level styling.

The frontend also exposes semantic `ca-*` class names so templates can add CSS overrides safely.

## Configure Question Workflow

Community Answers uses Joomla-native content helpers:

- The ask form requires a category, title, description, and tags.
- Tags are stored with Joomla core tags, not a standalone tags table.
- The description uses the configured Joomla editor.
- Duplicate question suggestions appear while users write their title.
- Guests are sent to login before asking questions.

## Configure Notifications and Email Templates

Go to **Components > Community Answers > Settings > Notifications**.

You can configure:

- In-app notification polling interval.
- Global email notification enablement.
- Email header logo, title, subtitle, and chip text/colors.
- Email footer visibility and footer text.

Use **Components > Community Answers > Email Templates** to edit each notification template. Templates include HTML, plain text, preview, enabled state, and reset support.

Users can manage their own notification preferences from the frontend notification preferences page.

## Configure Integrations

Go to **Components > Community Answers > Settings > Integrations**.

Integration modes can be set to `auto`, `none`, or a specific provider where supported.

Available integration areas:

- Profile and avatar linking
- Points
- Activity streams
- External badges

Supported provider options include Joomla, Gravatar, JomSocial, EasySocial, Community Builder, Kunena, Sociable, AlphaUserPoints, and Rewardify depending on the integration type and what is installed on your site.

Community Answers does not manage its own badge catalogue. Use Rewardify or another connected badge provider to define badge rules and awards. Community Answers can trigger external badge rules through Shondalai Core and display earned external badges on contributor profiles.

For points-driven bounties, select a points provider and verify the user balance appears in the bounty form.

## Configure Bounties

Go to **Components > Community Answers > Settings > Bounties**.

You can configure:

- Enable or disable bounties.
- Minimum and maximum bounty amount.
- Default and maximum duration.
- Amount choices and duration choices shown in the frontend form.
- Expiring-soon window.
- Maximum active bounties per question.
- Whether expired bounties can still be awarded.
- Whether expired bounties should be refunded.
- Maximum extension period.

See [Setting up the Community Answers bounty system](./setting-up-the-community-answers-bounty-system.md) for the full workflow.

## Configure Routing

Community Answers v7 uses Joomla-generated URLs so existing SEF behavior is preserved as much as possible.

Recommended routing setup:

- Enable Joomla SEF URLs.
- Create menu items for the main Community Answers pages.
- Keep category aliases stable during migration.
- Use the component-generated URLs in templates, modules, and custom code.

Do not hard-code React paths such as `/questions/3`; the frontend and API receive Joomla URLs from the component.

## Developer Mode

Developer mode is only for local development. When enabled, the site loads the React app from the Vite dev server instead of the packaged media files.

Typical local URL: `http://localhost:5177`

Keep developer mode disabled on production sites.
