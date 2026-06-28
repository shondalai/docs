---
id: overview
title: QuillThreads
sidebar_label: Overview
sidebar_position: 1
---

# QuillThreads

QuillThreads is a modern comments system for Joomla articles. It puts a fast, threaded discussion under your content and gives you a proper moderation desk to run it, without sending your readers or their data to a third-party service. Everything lives in your own Joomla database.

This page is a short tour of what the extension does and where to find each feature. If you want to get going right away, jump to the [Quick start guide](./quick-start.md).

## What it does

- **A discussion that fits a modern site.** Threaded replies or a flat timeline, voting, optional emoji reactions, @mentions, and sorting by newest, oldest, or most upvoted. Long threads load page by page and stay fast.
- **A moderation desk that respects your time.** A dashboard, a review queue, one-click and bulk actions, a spam score on every comment, bans, and rules that handle the routine cases for you.
- **Spam that stops before you see it.** A honeypot, a dwell-time check, rate limits, blocked words and link domains, and optional CAPTCHA for guests.
- **Optional AI help.** Connect a shondalai.com account and QuillThreads can score new comments for spam and toxicity, hold the risky ones, and summarise long threads. It is entirely optional and pay-as-you-go.
- **Privacy you can defend.** Consent prompts, encrypted commenter emails, IP handling you control, and a privacy plugin that answers Joomla data export and removal requests.
- **A move that keeps your history.** Import from JComments, Akeeba Engage, and CSV or JSON files, with a dry-run preview and safe, repeatable runs.

## What is in the package

The single package installs everything you need:

- **Component**: the admin desk (dashboard, comments, moderation, reports, subscriptions, bans, email templates, import, logs, settings) and the comment engine that renders the thread on the front end.
- **Content plugin** (`plg_content_quillthreads`): places the comment thread on your articles, before or after the body or at a token you drop in.
- **Latest comments module** (`mod_quillthreads_latest`): a recent-comments widget for any module position.
- **Smart Search plugin** (`plg_finder_quillthreads`): makes comment content findable through Joomla's site search.
- **Privacy plugin** (`plg_privacy_quillthreads`): handles Joomla's GDPR export and removal flow.
- **Scheduled task plugin** (`plg_task_quillthreads`): moderator digests, maintenance, counter rebuilds, and batch AI scanning.
- **Shondalai Core library**: the shared platform library used by every Shondalai extension (email, storage, AI client, and more).

After install, the component sits at **Components → QuillThreads** in the admin menu.

## How it fits together

QuillThreads renders the comment thread as a small React application embedded in your article page. The first page of comments is rendered on the server, so search engines see the discussion and the page paints instantly, then the application takes over for replies, voting, and live updates.

The admin is a single-page React application too. The dashboard, comment lists, moderation queue, settings, and every other screen share one shell, so nothing reloads as you move between them.

## Where to go next

- New install: [Quick start guide](./quick-start.md).
- Put comments on your articles: [Placing comments on articles](./placing-comments-on-articles.md).
- Tune every option: [Settings reference](./settings-reference.md).
- Keep the conversation clean: [Moderation](./moderation.md) and [Anti-spam](./anti-spam.md).
- Let AI do the boring part: [AI moderation](./ai-moderation.md).
- Move from JComments or Akeeba Engage: [Migrating comments](./migrating-comments.md).
- Hit a snag: [Troubleshooting](./troubleshooting.md).
