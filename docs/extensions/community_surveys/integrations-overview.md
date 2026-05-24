---
id: integrations-overview
title: Integrations Overview
sidebar_label: Integrations Overview
sidebar_position: 80
---

# Integrations Overview

Pipe survey events into the rest of your stack. Built-in adapters for Webhook, Slack, Google Sheets, and AcyMailing; third-party adapters can be added via Joomla plugins.

This page covers the framework concepts shared by every integration. For per-adapter setup, see:

- [Webhook integration](./integration-webhook.md)
- [Slack integration](./integration-slack.md)
- [Google Sheets integration](./integrating-survey-with-google-sheets.md)
- [AcyMailing integration](./integration-acymailing.md)

Open via **Integrations** in the left rail.

---

## Concepts

Three pieces:

- **Adapter** — a class that knows how to talk to one third-party (e.g. `WebhookAdapter`, `SlackAdapter`). Adapters declare their config schema, the events they handle, and how to test the connection.
- **Integration** — a configured instance of an adapter. "Send response.completed to the Operations Slack channel" is one integration. You can have many integrations for the same adapter (multiple Slack channels, multiple sheets).
- **Event** — something that happened in Community Surveys that an integration can react to. Examples: `response.submitted`, `response.completed`, `invitation.sent`, `survey.published`.

When an event fires, the framework finds every published integration whose adapter handles that event, then runs each one. Failures retry with exponential backoff; everything is logged.

---

## Layout

The Integrations page has two tabs:

- **Active** — your configured integrations. Master-detail split: list on the left, configure pane on the right.
- **Marketplace** — every adapter installed on this site, grouped by category. Click a card to start a new integration.

Top toolbar carries a survey filter (narrow the Active list to one survey's integrations), survey-wide search, and the **+ Add integration** button.

When you have no integrations yet, the Active tab shows a landing card with a CTA to **Browse marketplace**.

---

## Creating an integration

1. **Marketplace tab** → click an adapter card.
2. The new-integration wizard opens.
3. **Pick a survey** — server-driven picker.
4. **Internal name** — a label for this integration (e.g. "Ops channel — new responses").
5. **Adapter-specific config** — the wizard renders fields from the adapter's manifest. Each adapter declares its own schema (a URL for webhook, a sheet picker for Google Sheets, a list picker for AcyMailing, …).
6. **Save** to create.

The wizard renders entirely from the adapter's declared schema — there's no per-adapter UI code. New adapters get full wizard support automatically.

---

## Configuring an integration

Click any row in the Active list. The right pane shows:

### Toolbar

- **Test connection** — runs the adapter's `testConnection()` method with the stored config. Shows the result inline. Helpful before publishing.
- **Enable / Disable** — toggle the integration on/off without deleting. Disabled integrations don't fire on events.
- **Edit** — re-open the wizard with the saved values.
- **Delete** — permanent. Confirmation dialog.

### Settings tab

Read-only view of the saved configuration. Secret fields (API keys, OAuth tokens, etc.) are masked as `••••••••`. Use **Edit** to change anything.

### Activity tab

Recent sync logs — one row per event the integration processed. Each row shows:

- **Status** — `success` / `error` / `retry` / `skipped`.
- **Event** — the firing event name.
- **Message** — human-readable result (success message, error text, skip reason).
- **Timestamp** — when the sync ran.
- **Duration** — how long the sync took in milliseconds.

50 most recent rows are shown. Older rows are kept in `#__survey_integration_logs` indefinitely (you can prune them via Joomla's database admin if disk usage becomes an issue).

---

## Events

Available event names + their meaning:

| Event | Fires when | Adapter sees |
|---|---|---|
| `response.submitted` | A respondent submits, complete or partial | Response row + survey row + flat answers |
| `response.completed` | A response transitions to `complete` state | Response row + survey row + flat answers |
| `response.abandoned` | A partial response is reaped | Response row + survey row |
| `invitation.sent` | A campaign invitation email is dispatched | Invitation row + survey row |
| `survey.published` | A survey transitions to Live | Survey row |
| `survey.closed` | A survey transitions to Closed | Survey row |

Most use cases want `response.completed` — fires once per finalised response.

Adapters declare which events they can handle in their manifest. The framework only routes events to adapters that opt in.

---

## Retries

The framework distinguishes three failure modes:

- **Skipped** — the adapter decided this event doesn't apply (e.g. webhook subscribed only to `response.completed` but `response.submitted` fired). Logged as `skipped`, no retry, no error.
- **Permanent failure** — the adapter returned a hard error (e.g. HTTP 400 from a third-party). Logged as `error`, no retry. The integration's status badge turns red.
- **Transient failure** — the adapter returned a retry-worthy error (e.g. HTTP 503, network timeout, rate-limited). Logged as `retry`. The framework re-enqueues with exponential backoff (30s × 2^attempt, capped at 24h) and re-fires through a scheduled task.

Each event is retried up to **5 times** before being dead-lettered. A dead-lettered event becomes a permanent `error` log row with the final failure message.

For retries to actually fire, install the `Drain Integration Retry Queue` task in Joomla's Task Scheduler:

1. **Components → Scheduled Tasks → New**.
2. **Type** → Survey: Drain Integration Retry Queue.
3. **Schedule** — every 5 minutes is typical; tune to your retry tolerance.
4. **State** → Enabled.

Without the task, retries are queued but never re-fire. Permanent failures and successes don't need the task.

---

## Sync modes

Two delivery modes per integration:

- **Synchronous** (default) — the sync runs inside the request that fired the event. Fast for webhooks (sub-second); slower for Google Sheets (multi-second). The respondent waits for completion.
- **Asynchronous** — the event is queued; a scheduled task processes it later. The respondent's request returns immediately, and the integration fires within minutes.

Most adapters expose this toggle as a config field. Webhook defaults to sync; Google Sheets defaults to async.

---

## Field mapping

Some adapters need to pull specific fields out of the response — e.g. AcyMailing needs an email + a name. The framework supports declarative field mapping:

- Each adapter declares which "target fields" it needs (`email`, `name`, etc.).
- The wizard shows a mapping table: target field → survey question.
- At sync time, the framework looks up the mapped question's answer and hands it to the adapter.

Adapters that don't need field mapping (Webhook ships the whole flat-answer object; Slack uses block kit) declare no mappable fields.

See per-adapter docs for what each adapter maps.

---

## Credentials and security

Secret config fields (API keys, OAuth tokens, signing secrets, etc.) are encrypted at rest via the framework's **CredentialVault**:

- **Algorithm** — AES-256-GCM.
- **Key derivation** — HKDF-SHA256 from Joomla's site `secret`. Per-purpose salting so the same secret can't be used for unrelated subsystems.
- **Storage format** — `v1:<iv-base64>:<tag-base64>:<ciphertext-base64>`. The `v1:` prefix is forward-compatible — future versions can rotate algorithms without forced migration.
- **Tamper detection** — GCM tag mismatch throws on decrypt. A DB dump that's been edited won't decrypt cleanly.

The `credentials` column on `#__survey_integrations` never appears in API responses — even the integration's `find()` endpoint strips it. Adapters receive the decrypted bundle only inside the sync pipeline.

If your Joomla `secret` is the default `CHANGEME` value (or shorter than 16 chars), the vault refuses to encrypt. Fix this in Joomla's `configuration.php` first.

---

## Plugin extensibility

Third-party developers can add new adapters via Joomla plugins. The framework fires the `onCommunitysurveysCollectIntegrationAdapters` event on first registry access; plugins listen and contribute their adapter classes:

```php
public function onCommunitysurveysCollectIntegrationAdapters(Event $event): void
{
    $registry = $event->getArgument('registry');
    $registry->registerClass(MyHubSpotAdapter::class);
}
```

The new adapter shows up in the marketplace automatically — no changes in this component.

See the [implementation docs](https://github.com/shondalai/communitysurveys/tree/main/impl-docs/integrations.md) for the adapter interface contract.

---

## Common questions

### Can I send the same event to multiple integrations?

Yes. Create multiple integrations targeting the same survey + event. Each fires independently with its own retry pipeline.

### What happens to integrations when a survey is deleted?

Cascading delete — every integration row on that survey is removed, along with its sync logs and any queued retries.

### Can I share integrations between admins?

Integrations are workspace-wide, not per-user. Any admin with `communitysurveys.integrate` can see and edit every integration. Use Joomla's ACL to scope.

### Where can I see all dispatch history across integrations?

The Activity tab is per-integration. For a cross-integration view, look at `#__survey_integration_logs` directly via Joomla's database admin — every dispatch lands there with `integration_id`, `event`, `status`, `message`, `created`, `duration_ms`.

### How do I know if the retry task is running?

Joomla's Task Scheduler page shows last-run timestamps. The integration's Activity tab also gives you a useful proxy — if you see `retry` rows that never converted to `success` or `error`, the queue isn't draining.

### Why is my integration showing "pending" status?

`pending` means the most recent sync returned `SyncResult::retry`. The framework has queued another attempt. If the task scheduler runs the drain job, the row will eventually flip to `success` (good outcome) or `error` (dead-lettered after 5 attempts).
