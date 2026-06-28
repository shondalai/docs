---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 16
---

# Troubleshooting

Common questions and quick fixes. If something here does not solve it, write to support@shondalai.com with your Joomla and PHP versions and a description of what you see.

## Comments are not showing on an article

Check these in order:

1. **Master switch**: **Settings → General → Enable comments** must be on.
2. **The article**: it must not contain `{quillthreads off}`.
3. **Category**: the article's category must not be in the plugin's **Excluded categories**.
4. **Content plugin**: **Content - QuillThreads** must be enabled (**System → Manage → Plugins**).
5. **Placement**: if placement is set to the manual token only, the article needs a `{quillthreads}` tag.
6. **The view**: comments render on the single-article view, not on blog or category teasers.

See [Placing comments on articles](./placing-comments-on-articles.md).

## A label shows as a raw key like COM_QUILLTHREADS_…

This is a language or asset cache issue. Clear the Joomla cache (**System → Clear Cache**) and do a hard refresh in your browser. If you just updated, the browser may be holding an old copy of the comment assets.

## "The Vite dev server is not reachable"

This notice means **Vite dev mode** is switched on under **Settings → Developer**. That mode is for building the React apps and should be off on a live site. Turn **Vite dev mode** off and the thread returns to the normal built assets.

## AI says "Insufficient balance"

The connected shondalai.com account has no AI credits. Open **Settings → AI moderation**; if the balance shows 0, either top up that account, or disconnect and reconnect with a funded one. The connection is shared across all Shondalai extensions on the site, so the same account is used everywhere. See [AI moderation](./ai-moderation.md).

## Notification emails are not arriving

1. Check **Settings → Notifications**: the relevant notification is on, and **Moderator email addresses** are set (or you are relying on the site admins).
2. Confirm Joomla can send mail at all (**System → Mail Settings**, send a test).
3. If **Queue email for background sending** is on, mail goes through the Shondalai email queue, which needs the email-queue task to run. Make sure your Joomla Scheduler is firing (a real cron is most reliable).

See [Email and notifications](./email-and-notifications.md).

## An import source shows "not detected"

A database source only appears as available when its tables exist on this site. "Not detected" means, for example, that there is no `#__jcomments` table to read. File sources (CSV, JSON) are always available. See [Migrating comments](./migrating-comments.md).

## An import reports "missing article" failures

Those records point at an article that no longer exists, so QuillThreads refuses to import them as invisible comments. This is the orphan guard doing its job. The failures are informational; the rest of the import is unaffected. If the articles should exist, restore them and run the import again (it is safe to re-run).

## The thread feels slow on a very busy article

QuillThreads pages the thread, so only the first set of top-level comments loads, with a "Load more" button for the rest. If you want fewer per page, lower **Comments per page** on **Settings → General**.

## Styling looks off after an update

Do a hard refresh to clear the cached comment assets, and clear the Joomla cache. The thread is scoped under its own root element, so it should not clash with your template; if a specific element looks wrong, send us a screenshot.

## Smart Search is not finding comments

1. Enable **Smart Search - QuillThreads** and Joomla's **Smart Search** content plugin.
2. Run a full index once from **Components → Smart Search → Index** so existing comments are picked up. New comments index as they are posted.

## Getting help

Contact us at https://shondalai.com/contact-us. Turning on verbose logging under **Settings → Developer** and checking **Components → QuillThreads → Logs** often points straight at the cause, and the log is useful to include with a support request.
