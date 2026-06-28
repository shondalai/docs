---
id: email-and-notifications
title: Email and notifications
sidebar_label: Email and notifications
sidebar_position: 10
---

# Email and notifications

QuillThreads keeps the right people in the loop and brings readers back when a conversation continues. Notifications are configured on **Settings → Notifications**, and the emails themselves are edited under **Components → QuillThreads → Email Templates**.

## Who gets notified

| Setting | Default | What it does |
| --- | --- | --- |
| Notify moderators of new comments | On | Emails moderators when a comment needs attention. |
| Moderator email addresses | (empty) | One address per line. Blank uses the site admins. |
| Notify the article author | On | Emails the author when their article receives a comment. |
| Queue email for background sending | On | Sends through the Shondalai Core email queue rather than inline, so posting stays fast. |

We recommend leaving **Queue email** on. It hands sending to a background queue, so a burst of comments never slows the page down for the person posting.

## Subscriptions

Readers can choose to be told when there is something new:

- **Subscribe to an article**: get an email for every new comment on it.
- **Subscribe to replies**: get an email when someone replies to their comment.

Subscriptions are opt-in and controlled by the **Subscribe** permission ([Permissions](./permissions.md)). Every notification includes a one-click unsubscribe link, so readers stay in control and your mail stays welcome. You can see and manage subscriptions under **Components → QuillThreads → Subscriptions**.

## @mentions

When a comment mentions another member by name, that member is notified, so people can pull each other into a conversation. Mentions only notify on published comments, never on held or spam ones.

## Branding the emails

The Notifications tab also sets how every email looks, so they match your site:

| Setting | What it does |
| --- | --- |
| Email brand name | Shown in the email header. |
| Email brand subtitle | Optional line under the brand name. |
| Email brand logo | Logo at the top of the email. |
| Email brand colour | Accent colour used through the email. |
| Email footer text | A line in the footer of every email. |
| Support URL | Linked from the footer. |

These apply to every template at once, so you set your branding in one place.

## Editing the templates

Open **Components → QuillThreads → Email Templates** to edit the wording of each notification. The editor gives you:

- A **subject** and **body** for each template type.
- A list of **variables** you can drop in, such as the commenter's name, the article title, and the comment text, plus the brand variables that come from your Notifications settings.
- A **live preview** of the rendered email.
- A **test send** so you can mail yourself a copy before going live.
- A **reset** button that returns a template to its built-in default.

Each template is built from a shared wrapper plus the content for that notification, so your branding and layout stay consistent across all of them while you only edit the part that changes.

:::tip
Emails to readers always link to your public site pages, not the admin, so an unsubscribe or "view comment" link takes them to the right place on the front end.
:::

## A scheduled digest

Rather than a mail for every single comment, you can have moderators receive a periodic **digest**: one email summarising what is pending, reported, and spam. Set it up with the scheduled task plugin. See [Scheduled tasks](./scheduled-tasks.md).
