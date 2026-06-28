---
id: permissions
title: Permissions
sidebar_label: Permissions
sidebar_position: 5
---

# Permissions

QuillThreads uses Joomla's native access control. Permissions are set per user group in the standard place: **System → Manage → Components → QuillThreads → Options → Permissions** (or **Components → QuillThreads**, then **Options** in the toolbar).

Set a permission to **Allowed** or **Denied** for each group, or leave it **Inherited** to follow the group's parent. The defaults are sensible for a public site.

## Participant actions

These control what visitors and members can do on the front end.

| Action | What it allows |
| --- | --- |
| Comment | Post a top-level comment. |
| Reply | Reply to an existing comment. |
| Vote | Cast up and down votes. |
| Report | Flag a comment for moderator attention. |
| Subscribe | Subscribe to an article or to replies for email updates. |

The **Who can comment** setting on the Posting tab works alongside these. If you restrict commenting to registered users there, guests will not be able to post even if the Public group is allowed to comment.

## Moderator and staff actions

These control the admin and the inline moderator tools.

| Action | What it allows |
| --- | --- |
| Moderate | Approve, unpublish, feature, pin, spam, and trash comments, and see the moderation queue. |
| Ban | Create and remove bans by keyword, email, or IP. |
| View IP | See commenter IP data where it is stored. |
| Export | Export comments to CSV and JSON. |
| Export PDF | Export comments to PDF. |
| Import | Run migrations and imports. See [Migrating comments](./migrating-comments.md). |
| Configure integrations | Connect and manage third-party integrations. |
| Use AI | Use the AI moderation tools. See [AI moderation](./ai-moderation.md). |
| Manage templates | Edit the email templates. |

## Standard Joomla actions

QuillThreads also respects the usual Joomla actions, which apply to comment records:

| Action | What it allows |
| --- | --- |
| Configure (Admin) | Full access, including the Settings page. |
| Access Component (Manage) | Open the component admin. |
| Create | Create comment records. |
| Delete | Permanently delete comments. |
| Edit | Edit any comment. |
| Edit Own | Edit comments the user created (within the edit window for front-end users). |
| Edit State | Change a comment's published state. |

## A note on the Settings page

The Settings page is reserved for administrators. A user needs the **Configure (Admin)** action to open it, even if they can otherwise manage comments. This keeps site-wide options in the hands of administrators while still letting moderators run day-to-day moderation.

## A sensible starting point

- **Public**: Comment, Reply, Vote, Report (if you allow guest comments).
- **Registered**: the same, plus Subscribe.
- **A "Moderators" group**: add Moderate, Ban, and View IP.
- **Administrators**: everything, including Import, Use AI, Manage templates, and Configure (Admin).

Adjust to fit how your site is run. If you only ever moderate as an administrator yourself, the defaults already cover you.
