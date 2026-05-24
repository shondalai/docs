---
id: integration-slack
title: Slack Integration
sidebar_label: Slack
sidebar_position: 82
---

# Slack Integration

Post survey events to a Slack channel. Two setup styles supported — pick the one that matches your Slack setup:

- **Incoming webhook URL** (simple) — no Slack app required.
- **Bot token + channel** (rich) — one credential drives many integrations across multiple channels.

For framework concepts (events, retries, logs), see [Integrations Overview](./integrations-overview.md).

---

## What it does

When an event fires (e.g. `response.completed`), the adapter posts a Block-Kit message to your Slack channel:

```
:white_check_mark: Response completed on *Customer satisfaction* (#12345)
How would you rate us?: 9
What did we do well?: Fast support, clear communication
```

Title formatted per event type. The first 6 answers from the response appear underneath. For survey-level events (`survey.published`, `invitation.sent`), the message is just the title — there's no response data to render.

---

## Style 1: Incoming webhook URL

The simplest path. Best when you only want to post to one channel and don't want to manage Slack apps.

### Setup

1. **In Slack** — go to `https://api.slack.com/apps` → **Your Apps** → **Create New App** → "From scratch". Name it (e.g. "Community Surveys") and pick your workspace.
2. **Activate Incoming Webhooks** — left rail → Incoming Webhooks → toggle on → **Add New Webhook to Workspace** → pick the channel to post to.
3. **Copy the Webhook URL** — looks like `https://hooks.slack.com/services/T01.../B02.../...`.
4. **In Community Surveys** — Integrations → Marketplace → **Slack**.
5. **Configure**:
   - **Survey** — which survey's events to forward.
   - **Connection style** — pick "Incoming webhook URL".
   - **Incoming webhook URL** — paste from step 3.
   - **Notify on** — multi-select events. Default: `response.completed`.
   - **Include answer summary** — when on, the first 6 answers appear under the title.
6. **Test connection**.
7. **Save**.

### Limitations of webhook style

- One URL = one channel. To post to multiple channels, create one integration per channel.
- Slack rate-limits incoming webhooks (1 message per second per webhook). Burst sends queue.
- No two-way communication. We send, Slack doesn't reply.

For most use cases, this is the right choice. Switch to bot token only if you need multi-channel from one credential.

---

## Style 2: Bot token + channel

For workspaces that already have a Slack app, or want one credential to drive multiple channel posts.

### Setup

1. **In Slack** — create an app at `https://api.slack.com/apps` (same as above).
2. **Add scopes** — left rail → OAuth & Permissions → Bot Token Scopes → add **chat:write** (mandatory) and optionally **chat:write.public** (lets the bot post to channels it hasn't been invited to).
3. **Install the app to your workspace** — top of the OAuth page → **Install to Workspace** → review scopes → **Allow**.
4. **Copy the Bot User OAuth Token** — starts with `xoxb-`.
5. **(Optional) Invite the bot to the channel** — in Slack, type `/invite @<your-bot-name>` in the channel. Skip if you added `chat:write.public`.
6. **Find the channel ID** — in Slack, right-click the channel → **View channel details** → scroll to the bottom → copy the **Channel ID** (e.g. `C01ABCDEF`). Or use the channel name (`#feedback`).
7. **In Community Surveys** — Integrations → Marketplace → **Slack**.
8. **Configure**:
   - **Survey** — which survey's events to forward.
   - **Connection style** — pick "Bot token + channel".
   - **Bot user token** — paste from step 4.
   - **Channel** — channel name or ID from step 6.
   - **Notify on** — multi-select events.
   - **Include answer summary** — toggle.
9. **Test connection**.
10. **Save**.

### Multiple channels

To post to multiple channels, create one integration per channel. Each uses the same bot token, just a different channel value. The bot must have access to each channel (either invited or `chat:write.public`).

---

## Message format

Every message uses Slack Block Kit for rich rendering:

- **Header block** — the title line with an emoji + survey title + response ID.
- **Section block** (when `include_answers` is on) — markdown-formatted list of the first 6 answer values.

Title emojis by event:

| Event | Emoji | Format |
|---|---|---|
| `response.submitted` | 📥 | New response on *X* (#42) |
| `response.completed` | ✅ | Response completed on *X* (#42) |
| `invitation.sent` | ✉️ | Invitation sent for *X* |
| `survey.published` | 🚀 | Survey published: *X* |
| `survey.closed` | 🔒 | Survey closed: *X* |

A plain-text fallback also goes with every message for accessibility + notifications — Slack uses it when generating push notifications.

---

## Response classification

Slack returns a slightly weird mix of HTTP + JSON statuses; the adapter handles both.

### Incoming webhook

- **200 OK** — message accepted. Logged as success.
- **400** — bad payload (rare; would indicate a bug in our adapter). Terminal failure.
- **429** — rate limit. Retried after `Retry-After` seconds.
- **5xx** — Slack outage. Retried.
- **404** — webhook URL revoked. Terminal — re-create the webhook in Slack and update the integration.

### Bot token

Slack returns 200 OK with `{ok: false, error: "<code>"}` for most failures. The adapter maps Slack's `error` codes to stable framework codes:

| Slack error | Framework code | Meaning |
|---|---|---|
| `invalid_auth`, `not_authed`, `token_revoked` | `auth_invalid` | Token wrong / revoked. Terminal. |
| `channel_not_found` | `destination_not_found` | Channel ID wrong, or bot can't see it. Terminal. |
| `not_in_channel`, `restricted_action` | `forbidden` | Bot lacks permission. Terminal. |
| `ratelimited` | `rate_limited` | Slack throttled us. Retried after `Retry-After`. |
| `service_unavailable`, `fatal_error`, `request_timeout` | (retry) | Transient. Retried. |
| Anything else | `slack_error` | Terminal — read the activity log for the exact code. |

For retries to fire, the **Drain Integration Retry Queue** task must be running. See [Integrations overview → Retries](./integrations-overview.md#retries).

---

## Choosing events

Default selection is `response.completed`. Other useful combos:

- **Just completed responses** — `response.completed` only. Avoids noise from partial submissions.
- **Live response feed** — `response.submitted` + `response.completed`. Posts when each response starts AND when it completes.
- **Outreach tracker** — `invitation.sent`. Posts when each campaign goes out.
- **Survey lifecycle alerts** — `survey.published` + `survey.closed`. Posts to a "Site changes" channel.

Adapters declare every event in the manifest; per-integration config picks the subset.

---

## Filtering and routing

The adapter doesn't filter by answer values — it posts every event matching the subscription. For conditional posting ("only post NPS detractors"), you have two options:

1. **Use a webhook integration to your own intermediary**, which decides whether to relay to Slack.
2. **Use Slack workflows** — Slack has built-in conditional routing in its workflow builder. Have the integration post everything; let Slack filter.

The second is simpler and stays inside Slack.

---

## Common issues

### "Connection successful" but no message arrives

- **Bot not invited to channel** — type `/invite @<bot-name>` in the channel.
- **Channel ID wrong** — verify the channel ID by right-clicking the channel in Slack. `#feedback` and `feedback` and `C01ABCDEF` are all accepted; mistyping is the common culprit.
- **Webhook URL revoked** — check the Slack app's Incoming Webhooks page. URLs can be revoked manually or expire when the app is reinstalled.

### Messages look broken / empty in Slack

- **`include_answers` off** — only the title posts. Toggle on to include answer values.
- **Survey has no answer questions** (just page headers) — there's nothing to include. Add real questions.
- **Response was partial** with no answered questions yet — same thing.

### Slack says "I think you've reached your rate limits"

- **Webhook style** — Slack rate-limits incoming webhooks to 1 message per second per webhook. Bursts queue.
- **Bot token style** — Slack's `chat.postMessage` is rate-limited per workspace. Spread events across multiple integrations if you're hitting limits.
- The adapter respects Slack's `Retry-After` header and retries automatically.

### Bot token style errors with `not_in_channel`

The bot has `chat:write` but the channel is private and the bot wasn't invited. Two fixes:

- Invite the bot via `/invite @bot-name`.
- Or add the `chat:write.public` scope and re-install the app.

---

## Limits

| | Limit | Notes |
|---|---|---|
| Answer summary | First 6 answers | Slack's Block Kit caps at 50 blocks; we stay well under |
| Request timeout | 20 seconds | Hard limit per attempt |
| Retries | 5 attempts max | Dead-lettered after that |
| Channels per integration | 1 | Create multiple integrations for multiple channels |
| Slack rate limit | Per Slack docs (~50 msg/sec workspace-wide) | Adapter respects `Retry-After` |
