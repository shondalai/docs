---
id: community-answers-built-in-module-positions
title: Community Answers companion modules
sidebar_label: Companion modules
sidebar_position: 6
---

Community Answers 7 ships lightweight Joomla modules that can be published in your template's normal module positions. This is the recommended way to add Community Answers content around your Q&A pages, landing pages, dashboards, or sidebars without editing the component.

The v7 React frontend no longer depends on hard-coded in-component module positions from older Community Answers releases. Use Joomla module positions and the component layout settings instead.

## Included Modules

| Module | Purpose | Common placement |
| --- | --- | --- |
| **Community Answers - Top Bounties** (`mod_ca_top_bounties`) | Shows active bounties with amount, answer count, and expiry. | Sidebar, Q&A landing page, support dashboard. |
| **Community Answers - Top Tags** (`mod_ca_top_tags`) | Shows popular Joomla tags used by questions. | Sidebar, topic landing page. |
| **Community Answers - Top Contributors** (`mod_ca_top_contributors`) | Shows top contributors and optional seven-day reputation change. | Sidebar, community homepage. |
| **Community Answers - Ask CTA** (`mod_ca_ask_cta`) | Shows a call to action for asking a question or signing in. | Above content, sidebar, empty-state pages. |
| **Community Answers - Unanswered** (`mod_ca_unanswered`) | Shows recent unanswered questions. | Sidebar, support homepage. |
| **Community Answers - My Activity** (`mod_ca_my_activity`) | Shows the signed-in user's recent activity. | User dashboard, account pages. |

## Publish a Module

1. Go to **Content > Site Modules**.
2. Create a new module.
3. Select one of the Community Answers modules.
4. Choose a template position such as your sidebar, footer, dashboard, or content-adjacent position.
5. Configure the module options.
6. Assign it to the menu items where it should appear.
7. Save and test on the frontend.

## Module Options

Most list modules include an **Items** setting that controls how many rows are displayed.

Additional options:

- **Top Tags**: show or hide question counts.
- **Top Contributors**: show or hide weekly reputation change.
- All modules: module class suffix for template-specific styling.

## Built-In Right Sidebar Blocks

The main React question feed also has configurable right sidebar blocks:

- Top bounties
- Popular tags
- Top contributors

You can show or hide these from **Components > Community Answers > Settings > Appearance**.

Use the built-in blocks when you want the default Q&A layout. Use Joomla modules when you want to place similar content elsewhere in your site template.

## Styling

The modules are server-rendered and intentionally lightweight. Use your Joomla template CSS or the module class suffix to customize spacing, typography, and colors.

The React component itself exposes semantic `ca-*` class names for frontend overrides, while the modules can be styled using their module wrapper classes and template module chrome.

## Legacy Module Positions

Older Community Answers versions documented positions such as `questions-list-above-list`, `questions-list-below-list`, and `answers-view-after-answerX`. These were tied to the legacy PHP-rendered views.

In v7, publish companion modules into Joomla template positions instead. This keeps layouts predictable with the React frontend and gives site builders more control through Joomla's module assignment system.
