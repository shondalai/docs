---
title: Keep background tasks running
description: Configure Joomla and WordPress scheduled processing for notifications, reports, certificates, and access synchronization.
---

Some actions finish in the background so a person does not have to leave a browser page open. Notifications, larger reports, certificate work, and shop reconciliation depend on reliable scheduled processing.

## Joomla setup

Enable the installed VidyaLMS task plugin, then open **System → Manage → Scheduled Tasks**. Configure the supplied task types appropriate to your site.

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Task | Purpose | A starting schedule |
| --- | --- | --- |
| **VidyaLMS: drain job queue** | Processes queued work | Every one or two minutes |
| **VidyaLMS: start the sweeps** | Queues the recurring checks that are due | A regular short interval, such as every five minutes |
| **VidyaLMS: sweep entitlements** | Processes access-expiry housekeeping | Daily |
| **VidyaLMS: prune spent records** | Cleans eligible temporary and spent records | Daily or weekly |
| **VidyaLMS: reconcile EasyCommerce access** | Rechecks the shop's access state | A regular interval, such as every five minutes |

</div>

These intervals are examples to adjust for workload and hosting capacity. Starting sweeps does not replace draining the queue: one can create work while the other executes it.

Ask your hosting administrator to trigger Joomla's scheduler reliably. A task that depends only on site traffic can run late on a quiet academy.

## WordPress setup

Ensure WordPress scheduled processing is enabled and actually being triggered. VidyaLMS uses the available scheduling service; WooCommerce access synchronization uses Action Scheduler when available, with WP-Cron as a fallback.

Ask your host to provide a reliable scheduled trigger for a low-traffic site. In WooCommerce's scheduled action tools, inspect failed or pending synchronization actions when a paid customer is waiting for access.

Do not run several overlapping replacement schedulers without understanding which system owns each job.

## Check System health

Open **System health** in VidyaLMS to review the available queue and runtime information. Look at recent successful processing as well as queued or failed work.

The **Settings → Learning activity** section summarizes runtime behaviour and links to System health. It is not a second scheduler editor.

A healthy queue count does not prove that an email arrived or an external service accepted a request. Check the originating workflow's result too: the notification delivery record, export run, certificate job, or shop synchronization.

## When a job fails

Record the workflow, time, and displayed error. Correct the underlying cause, such as a missing permission, unavailable file, invalid connection, or host limit. Use that workflow's retry or cancellation control where offered.

Avoid repeatedly retrying an external action before checking whether it already succeeded. Read the recorded result and the receiving service's state.

Access rules are checked when a learner requests content. Background notices should not be treated as the authority for whether a lesson is available. Expiry cleanup and reconciliation still matter for accurate records and later processing.

Keep private storage accessible to both web requests and scheduled jobs. See [files and storage](../configuration/files-storage.md).
