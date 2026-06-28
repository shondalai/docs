---
id: moderation
title: Moderation
sidebar_label: Moderation
sidebar_position: 7
---

# Moderation

Moderation is where QuillThreads earns its keep. The admin gives you a dashboard, a review queue, and per-comment tools, plus rules that handle the routine cases so they never reach you. This page covers the day-to-day workflow.

Everything here lives under **Components → QuillThreads**.

## How a comment is handled when it arrives

When someone posts, QuillThreads decides whether to publish it or hold it for review, based on your **Moderation mode** ([Settings → Moderation](./settings-reference.md)):

- **Hold every comment for review**: nothing goes live until you approve it.
- **Hold guest comments only** (the default): signed-in members post straight away, guests wait.
- **Hold a user's first comment only**: a new commenter's first post waits, then they are trusted.
- **Publish immediately**: everything goes live, leaving moderation to your anti-spam rules and after-the-fact review.

On top of that, a comment is also held if it trips one of your rules, for example **Hold comments containing links**, a blocked word, or an [AI auto-hold](./ai-moderation.md). Anti-abuse trips (honeypot, dwell time, a ban) route a comment to spam silently, so the poster does not learn what caught them.

## The dashboard

The **Dashboard** opens on the numbers that matter: how many comments are pending, published, spam, and reported, plus what is new today and your busiest articles. The pending count also shows as a badge in the sidebar so you always know when something is waiting.

## The Comments list

**Comments** is the full list, with filters across the top:

- **All**, **Published**, **Pending**, **Spam**, and **Reported**.

Use the search box to find a comment by author or text, and the rows selector to show more per page. Tick one or more comments to reveal the bulk action bar.

### Bulk actions

With comments selected, you can:

- **Approve**: publish held comments.
- **Spam**: mark as spam.
- **Feature**: highlight a comment.
- **Trash**: move to trash.
- **Clear reports**: dismiss the open reports on a comment.
- **Delete**: permanently remove (requires the Delete permission).

## Reviewing a single comment

Click **Review** on any row to open the detail panel. It shows the full comment, the author, the signals behind its spam score, and an audit trail of what has happened to it. From here you can approve, unpublish, feature, pin, spam, trash, or ban the author, and run an [AI review](./ai-moderation.md) on demand.

## The moderation queue

**Moderation** is a focused view of just what is waiting on a decision. It is the fastest way to clear a backlog: work top to bottom, approving or removing as you go, without the noise of already-handled comments.

On the front end, moderators see inline controls on the thread itself and a "Moderator view" toggle, so you can moderate in context while reading an article.

## Reports

When a reader flags a comment, it appears under **Reports** with the reason and any message. Resolve a report by acting on the comment, or dismiss it if it does not hold up. Set the report reasons readers can choose from on [Settings → Moderation](./settings-reference.md).

If a comment collects more open reports than your **Auto-unpublish after N reports** threshold, QuillThreads hides it automatically and puts it in front of you, so a pile-on never stays visible while you are away.

## Bans

**Bans** lets you block a troublemaker for good. You can ban by:

- **Keyword**: any comment containing the phrase is treated as spam.
- **Email**: comments from that address are blocked.
- **IP**: comments from that address are blocked.

Bans are silent. A banned poster's comment lands in spam rather than showing an error, so they do not learn they have been blocked and simply move on.

## Rules that moderate for you

A few settings cut your workload down to the cases that actually need a human:

- **Auto-approve registered users** and **Auto-approve after N approved comments** build trust automatically, so your regulars stop hitting the queue.
- **Hold comments containing links** catches the most common spam pattern.
- **Auto-unpublish after N reports** lets your community flag problems while you are offline.
- **AI auto-hold** scores and holds risky comments before you ever see them. See [AI moderation](./ai-moderation.md).

## A digest while you are away

The scheduled task plugin can email moderators a summary of pending, reported, and spam comments on a schedule you choose, so you do not have to keep checking. See [Scheduled tasks](./scheduled-tasks.md).

## Next steps

- [Anti-spam](./anti-spam.md)
- [AI moderation](./ai-moderation.md)
- [Scheduled tasks](./scheduled-tasks.md)
