---
id: overview
title: Community Polls
sidebar_label: Overview
sidebar_position: 1
---

# Community Polls

Community Polls is a polling component for Joomla 5 and 6. It is what we use ourselves whenever we want to ask visitors a quick question without sending them off to a third-party survey site.

This page is a short tour of what the component does and where to find each feature. If you want a step-by-step setup, jump to the [Quick start guide](./quick-get-started-guide-for-community-polls.md).

## What you can build with it

- **Editorial polls** placed inside articles using the content plugin shortcode, the editor button, or the Random Poll module.
- **Community polls** that registered users can submit from the front end. You can auto-publish them or hold them for an admin to review.
- **Multi-question grid polls** when one question is not enough but a full survey component would be overkill.
- **Ranked-choice polls** where the order of preferences matters.
- **Private polls** that only people with a shared link and key can vote on.

## Poll types

| Type | Best for |
| --- | --- |
| Single choice | Pick one answer (radio buttons). |
| Multiple choice | Pick several answers (checkboxes with an optional minimum and maximum). |
| Grid | Several questions sharing the same set of answers, like a short survey. |

## What is in the package

- **Component** — admin and site-side code, dashboard, polls manager, settings, email templates manager, audience view, and stats.
- **Modules**
    - Random Poll — single-poll widget for any module position.
    - Community Polls — listing of latest or most-voted polls.
    - Categories — categories with poll counts and a glimpse of the most recent poll per category.
- **Plugins**
    - Content plugin — adds the `{poll id=N}` shortcode to articles.
    - Editor button — Poll picker that drops a shortcode into the editor for you.
    - Smart Search — indexes polls so visitors find them through the site search.
    - Privacy — covers Joomla's GDPR export and removal flow.
    - Community Polls events — handles points awards, activity stream entries, and email notifications through the Shondalai Core integration.
- **Email templates** — base wrapper plus three default fragments (new poll, new vote, moderate poll), all editable from the admin.

## What is new in version 7

If you are coming from version 6, the biggest changes are:

- **A new admin** built as a single-page React application. The dashboard, polls list, results, audience view, settings, and email templates all share the same shell, so nothing reloads as you move between them.
- **AI helpers** inside the poll editor that can suggest answer options, summarise live results, and group similar free-text answers. They are off by default and only run when you click them. See [AI helpers](./ai-helpers.md).
- **File-based email templates** with a built-in editor, a live HTML preview at desktop and mobile widths, and a one-click test send. See [Email templates](./email-templates.md).
- **New poll types** — grid and ranked join the existing single and multi-choice types.
- **Configurable column counts** for the public polls and categories listings (Settings → Display).
- **Modernised plugins** — every bundled plugin has been updated to the modern Joomla 5/6 plugin pattern with proper service providers.

The full list of changes between every version is in the [Changelog](./community-polls-changelog.md).

## Where to go next

- New install: [Quick start guide](./quick-get-started-guide-for-community-polls.md).
- Embed a poll in a Joomla article: [Display polls in Joomla articles](./display-polls-in-joomla-articles.md).
- Customise notification emails: [Email templates](./email-templates.md).
- Extend the component with your own plugin: [Plugin events](./extend-community-polls-using-plugin-events.md).
- Hit a snag: [Troubleshooting tips](./troubleshooting-tips-for-community-polls.md).
