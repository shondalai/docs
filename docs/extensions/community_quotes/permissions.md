---
id: permissions
title: Permissions
sidebar_label: Permissions
sidebar_position: 13
---

# Permissions

Community Quotes uses Joomla's native access control. Permissions are set per user group in the standard place: **System -> Manage -> Components -> Community Quotes -> Options -> Permissions**. You can also reach them from the **Permissions** shortcut in the top right of **Components -> Community Quotes -> Settings**.

Set each action to **Allowed** or **Denied** for a group, or leave it **Inherited** to follow the group's parent. The defaults are sensible for a public site, so most sites do not need to touch this page at all.

## Component actions

These apply to the component as a whole and to quote and author records.

| Action | What it allows |
| --- | --- |
| Configure (Admin) | Full access, including the Settings page and the Migration tool. |
| Access Component (Manage) | Open the Community Quotes admin. |
| Create | Create quotes and authors. |
| Delete | Permanently delete quotes and authors. |
| Edit | Edit any quote or author. |
| Edit Own | Edit only the quotes and authors the user created. |
| Edit State | Change the published state of a quote or author, which covers approving, unpublishing, rejecting, and trashing from the moderation queue. |

## Category actions

Community Quotes uses two Joomla category trees, one for quote categories and one for author categories. Both are managed through Joomla's category manager, and both honour the standard category permissions below. See [Quotes, authors, and categories](./quotes-authors-and-categories.md) for how the two trees are organised.

| Action | What it allows |
| --- | --- |
| Create | Create categories in either tree. |
| Delete | Delete categories. |
| Edit | Edit any category. |
| Edit Own | Edit only categories the user created. |
| Edit State | Publish, unpublish, archive, or trash categories. |

## A note on the Settings page

The Settings page is reserved for administrators. A user needs the **Configure (Admin)** action to change anything there, even if they can otherwise manage quotes. Users with **Access Component (Manage)** but not **Configure (Admin)** can open Settings and read the values, but the Save button stays disabled for them. This keeps site-wide options in the hands of administrators while still letting other staff run day-to-day work.

The Migration tool is likewise gated on **Configure (Admin)**, since importing legacy data is an administrator task. See [Migrating from version 1](./migrating-from-version-1.md).

## How permissions meet the settings

A few front-end capabilities are governed by both a permission and a setting, and the more restrictive of the two wins:

- **Submitting quotes** needs the **Create** permission and the **Allow submissions** setting on the Submissions tab. If either is off, the submit flow is unavailable.
- **Reacting to quotes** normally needs a logged-in account. The **Allow anonymous reactions** privacy setting can open reactions to guests. See [Privacy and GDPR](./privacy-and-gdpr.md).

## A sensible starting point

- **Public**: leave the defaults. Guests browse quotes and, if you enable it, react and submit.
- **Registered**: the same, so members can submit and react without extra setup.
- **A "Moderators" group**: add **Edit State** (and usually **Edit**) so they can work the moderation queue without full admin rights.
- **Administrators**: everything, including **Configure (Admin)** for Settings and Migration.

Adjust to fit how your site is run. If you only ever moderate as an administrator yourself, the defaults already cover you.
