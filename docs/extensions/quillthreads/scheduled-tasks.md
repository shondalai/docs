---
id: scheduled-tasks
title: Scheduled tasks
sidebar_label: Scheduled tasks
sidebar_position: 12
---

# Scheduled tasks

QuillThreads ships a task plugin (`plg_task_quillthreads`) that adds four routines to Joomla's built-in Scheduler. They keep the component tidy and do work in the background so you do not have to. None of them are required, but a couple are well worth setting up.

## Enabling the plugin

1. Go to **System → Manage → Plugins** and search for `quillthreads`.
2. Open **Task - QuillThreads** and set **Status** to Enabled.

## Adding a task

Joomla runs scheduled tasks from **System → Manage → Scheduled Tasks**:

1. Click **New**.
2. Pick one of the QuillThreads task types (below).
3. Give it a name and a schedule (for example, daily at 03:00, or every 15 minutes).
4. Set any task-specific options.
5. Save.

For the Scheduler to actually fire, Joomla needs either its built-in "lazy" web trigger (on by default) or a real system cron calling the Joomla CLI. A real cron is the reliable choice for a busy site.

## The tasks

### Moderator digest

Queues a summary email of pending, reported, and spam comments to your moderators. It is the calm alternative to a notification for every single comment: one email, on your schedule, telling you what needs attention.

It uses the moderator addresses from [Settings → Notifications](./settings-reference.md) (or the site admins if you left that blank) and sends through the Shondalai email queue. A daily or twice-daily schedule suits most sites.

### Maintenance

Housekeeping that enforces your privacy and storage choices:

- **Anonymises old IP hashes** past your retention window.
- **Purges old spam and trash** so the database does not grow without bound.
- **Removes expired export files** left behind by CSV, JSON, and PDF exports.

The task has an IP-days option; leave it at 0 to use the **IP retention** value from [Settings → Privacy](./privacy-and-gdpr.md). A daily schedule is ideal. If you care about GDPR retention, this is the task that makes "60 days" actually mean 60 days.

### Rebuild counts

Recomputes the cached per-article comment counters from the comments table. QuillThreads keeps these counters up to date as comments come and go, so you rarely need this. Run it occasionally, or once after a large [import](./migrating-comments.md), to be sure every count is exact.

### AI moderation scan

Scores comments that have not yet been scored with the Shondalai AI service, and optionally holds the high-risk ones. This is the efficient way to run [AI moderation](./ai-moderation.md): leave "Scan on post" off and let this task work through new comments in batches.

- It only runs when **AI moderation** is enabled and an account is connected.
- It only holds comments when **Let AI auto-hold comments** is on. It never deletes.
- Each scored comment spends a little AI credit, so keep the per-run limit modest and the schedule sensible (every 15 to 60 minutes works well).

## A recommended schedule

For a typical site:

- **Maintenance**: daily, overnight.
- **Moderator digest**: daily, morning.
- **AI moderation scan**: every 15 to 30 minutes, if you use AI.
- **Rebuild counts**: leave it unscheduled and run it by hand after a big import.
