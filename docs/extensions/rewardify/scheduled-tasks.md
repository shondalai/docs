---
id: scheduled-tasks
title: Scheduled Tasks
sidebar_label: Scheduled Tasks
sidebar_position: 11
---

# Scheduled Tasks

Rewardify does some of its work in the background through Joomla's task scheduler. This page explains the four routines it provides, which ones you actually need, how often to run them, and how to confirm the scheduler is running at all.

## Where the tasks live

The background routines are provided by the `plg_task_rewardify` plugin and run as standard Joomla scheduled tasks. You manage them under **System -> Manage -> Scheduled Tasks** (the same place you manage every other Joomla task).

The installer seeds all four tasks for you, so on a fresh install you do not have to create them by hand. They appear in the task list with these names:

| Task name in Joomla | What it does |
|---------------------|--------------|
| Rewardify: drain event queue | Processes queued events through the rule engine |
| Rewardify: expire currency lots | Expires due point lots and notifies members |
| Rewardify: reconcile balances | Rebuilds cached balances from the ledger |
| Rewardify: prune old events | Housekeeping of old processed event rows |

> The plugin only orchestrates this work; the actual logic lives in the Rewardify component. If `com_rewardify` is ever missing or disabled, each routine logs a warning and skips cleanly rather than failing.

## The four routines

### Drain event queue

Processes queued events and any events that are due for a retry, runs them through the rule engine, and posts any awards.

- **Required by default:** the seeded default **Evaluation mode** is **Queued** (see [Events & Evaluation](events-and-evaluation.md)), so out of the box this task is required. In Queued mode, incoming events are stored and wait for this task to process them, so without it members never get awarded. An admin can avoid relying on it by switching Evaluation mode to **Instant** (the recommended setting for most sites) under **Settings -> Evaluation**, which posts rewards immediately and needs no cron.
- **Not needed when:** Evaluation mode is **Instant**. In Instant mode events are evaluated on the spot and the queue stays empty. Note that `manual.` events always evaluate instantly regardless of mode, so manual admin grants never depend on this task.
- **Suggested frequency:** every minute, so asynchronous awards land promptly.

Options:

| Option | Default | Notes |
|--------|---------|-------|
| Batch size | 100 | Maximum events processed per batch. |
| Maximum batches | 10 | Upper limit on how many batches run back to back in one execution, so a large backlog cannot produce one unbounded run. |

### Expire currency lots

Sweeps currency lots whose expiry date has passed and posts an immutable `expire` entry in the ledger that removes the remaining balance. As part of the same run it also notifies members whose points have just expired, and warns members whose points are due to expire soon.

- **Required when:** point expiry is switched on. This is controlled by **Points expire** under [Settings -> Point expiration](settings.md). The "notify before expiry" warning honours the **notify members before expiry (days ahead)** value from the same screen.
- **Not needed when:** you have turned expiry off (lifetime points). `reputation` never expires, so it is never touched here.
- **Suggested frequency:** once a day, ideally off-peak.

Options:

| Option | Default | Notes |
|--------|---------|-------|
| Batch size | 200 | Maximum expired lots processed per run. |

### Reconcile balances

Recomputes the cached balances from the append-only ledger (oldest-checked rows first) and repairs any drift between the cache and the ledger truth. Balances are only a projection of the ledger, so this is a safety net that keeps them honest.

- **Required when:** always recommended as a low-cost safeguard. It does not depend on any setting.
- **Suggested frequency:** daily or weekly.

Options:

| Option | Default | Notes |
|--------|---------|-------|
| Batch size | 200 | Maximum balance rows reconciled per run. |

> If you ever suspect a balance is wrong, you can also rebuild projections on demand from **Manual adjustments** and from **Settings -> Danger zone**. The reconcile task just does this continuously in the background. See [Members, Balances & the Ledger](members-and-ledger.md).

### Prune old events

Retention housekeeping. It deletes old processed events (awarded, no-match and duplicate) and old dead-lettered events once they pass their retention windows. This only trims the event log; the ledger keeps every outcome, so no balance history is lost.

- **Required when:** recommended on any busy site to stop the event tables growing without limit.
- **Suggested frequency:** daily or weekly.

Options:

| Option | Default | Notes |
|--------|---------|-------|
| Processed retention (days) | 0 | Delete processed events older than this. `0` means inherit the component's Privacy retention setting. |
| Dead-letter retention (days) | 0 | Delete dead-lettered events older than this. `0` means inherit the component's Privacy retention setting. |

When either option is left at `0`, the task uses the retention values configured in Rewardify's privacy settings rather than a fixed number on the task itself.

## Suggested schedule at a glance

| Routine | Run it if | Suggested interval |
|---------|-----------|--------------------|
| Drain event queue | Evaluation mode is Queued (the seeded default) unless you switch to Instant | Every minute |
| Expire currency lots | Points expire is on | Daily (off-peak) |
| Reconcile balances | Always (safety net) | Daily or weekly |
| Prune old events | Always (housekeeping) | Daily or weekly |

## Verify the tasks exist and are enabled

1. Go to **System -> Manage -> Scheduled Tasks**.
2. Check that the four Rewardify tasks listed above are present.
3. Make sure each task you need is **Enabled** (a green tick in the Status column). On a default install **drain event queue** must stay enabled, because the seeded Evaluation mode is Queued; only disable it once you have switched Evaluation mode to Instant.
4. Open a task to set its run interval and adjust the options described above, then save.
5. After a task has run at least once, the list shows its last run time and last exit code, so you can confirm it is actually firing.

> If the seeded tasks are missing (for example after a partial or manual install), confirm the `plg_task_rewardify` plugin is installed and enabled under **System -> Manage -> Plugins**. Without it, the routines are not advertised to the scheduler and you cannot create them.

## The scheduler has to actually run

Creating and enabling a task is only half the job. Joomla's scheduler has to be triggered for any task to fire. There are two common ways to do that:

- **Web cron (lazy scheduler):** Joomla runs due tasks during normal page visits to your site. This is the simplest option and works for low-traffic sites, but it depends on someone visiting, so timing is approximate and quiet periods can delay a task.
- **System cron (recommended for busy sites):** a real cron job on your server calls the Joomla scheduler endpoint on a fixed interval. This is reliable and runs on time even when no one is browsing, which matters for the per-minute **drain** task and for daily **expire** runs. You can set this up from the Scheduled Tasks toolbar, which can generate the cron command and URL for you.

> If awards are not appearing on a Queued site, or points are not expiring on the day they should, the first thing to check is whether the scheduler is running at all. A task that is enabled but never shows a recent run time usually means web cron is not being triggered and a system cron is needed.

## Related pages

- [Events & Evaluation](events-and-evaluation.md): Instant versus Queued mode, and what the drain task processes.
- [Settings Reference](settings.md): the Point expiration settings that drive the expire task.
- [Members, Balances & the Ledger](members-and-ledger.md): how balances are projected from the ledger and rebuilt.
