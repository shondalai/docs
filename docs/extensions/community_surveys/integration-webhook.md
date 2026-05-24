---
id: integration-webhook
title: Webhook Integration
sidebar_label: Webhook
sidebar_position: 81
---

# Webhook Integration

POST survey events to any HTTP endpoint. The universal connector — pair with Zapier, Make.com, n8n, your own backend, or any service that accepts webhooks.

For framework concepts (events, retries, logs), see [Integrations Overview](./integrations-overview.md).

---

## What it does

For each event you subscribe to, the adapter POSTs a JSON payload to your URL. Optional HMAC signing lets you verify the request came from Community Surveys.

The webhook adapter is the **reference implementation** of the integration framework — every other adapter follows the same template.

---

## Setup

### 1. Open the marketplace

**Integrations → Marketplace tab → Webhook card**.

### 2. Fill in the wizard

- **Survey** — which survey's events to forward.
- **Internal name** — e.g. "Zapier — new responses to Slack".
- **Destination URL** — the receiver. Must be HTTPS (HTTP works in dev but is rejected by most webhook hosts).
- **HTTP method** — POST (default), PUT, or PATCH.
- **Content type** — `application/json` (recommended) or `application/x-www-form-urlencoded` (for legacy receivers).
- **Send on** — multi-select which events to forward. Default: `response.completed` only.
- **Signing secret** — optional. When set, the adapter signs each request body with HMAC-SHA256 and sends the signature in a header. Receivers verify the signature to confirm the request came from us.
- **Signature header name** — the header name to carry the signature. Default: `X-CommunitySurveys-Signature`. Some services expect `X-Signature` or a vendor-specific name.
- **Custom headers** — textarea, one `Name: value` per line. Useful for adding auth tokens, source IDs, routing hints.

### 3. Test connection

Click **Test connection** in the configure pane. The adapter sends a `webhook.test` ping to your URL. Result appears inline:

- **Success** — your endpoint returned 2xx.
- **HTTP X — message** — the endpoint rejected the request; the message explains why.
- **Network error** — DNS lookup failed, TLS rejected, or the endpoint isn't reachable.

### 4. Save

The integration is live the moment you save. Submit a test response to fire the first real event.

---

## Payload format

The POST body is a JSON object:

```json
{
  "event": "response.completed",
  "occurred_at": "2026-05-14T12:34:56+00:00",
  "attempt": 1,
  "integration_id": 7,
  "survey_id": 42,
  "trace_id": "a1b2c3d4e5f6a7b8",
  "data": {
    "response": {
      "id": 12345,
      "survey_id": 42,
      "user_name": "Alice Doe",
      "user_email": "alice@example.com",
      "created": "2026-05-14T12:30:00+00:00",
      "completed": "2026-05-14T12:34:56+00:00",
      "complete": true
    },
    "survey": {
      "id": 42,
      "title": "Customer satisfaction",
      "alias": "csat-may"
    },
    "answers": [
      {
        "question_id": 100,
        "title": "How would you rate us?",
        "type": "nps",
        "values": [{ "text": "9" }]
      },
      // …
    ]
  }
}
```

- `event` — one of `response.submitted`, `response.completed`, `invitation.sent`, `survey.published`, …
- `occurred_at` — ISO 8601 timestamp.
- `attempt` — 1 on first send, increments on retries.
- `trace_id` — unique per (event, integration) pair. Reuse across retries so receivers can dedupe.
- `data` — the event-specific payload. For response events, this is the whole event object including the answers list.

For `application/x-www-form-urlencoded` content type, the same data is flattened into form fields (one level deep — nested objects are JSON-encoded into a single field).

---

## HMAC signing

When you set a signing secret, every request carries an extra header:

```
X-CommunitySurveys-Signature: sha256=4a3b...e7f8
```

The signature is `HMAC-SHA256(secret, exact request body)`, hex-encoded, prefixed with `sha256=` to match GitHub/Stripe convention.

### Verifying on your end (Node.js)

```js
const crypto = require('crypto');

function verifySignature(body, header, secret) {
  if (!header.startsWith('sha256=')) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(header.slice(7), 'hex'),
    Buffer.from(expected, 'hex')
  );
}

// In your webhook handler:
app.post('/hooks/communitysurveys', (req, res) => {
  const rawBody = req.rawBody; // requires raw-body middleware
  const sig = req.headers['x-communitysurveys-signature'];
  if (!verifySignature(rawBody, sig, process.env.CS_WEBHOOK_SECRET)) {
    return res.sendStatus(401);
  }
  // …handle the event
});
```

### Verifying on your end (PHP)

```php
function verifySignature(string $body, string $header, string $secret): bool {
    if (!str_starts_with($header, 'sha256=')) return false;
    $expected = hash_hmac('sha256', $body, $secret);
    return hash_equals($header, 'sha256=' . $expected);
}
```

The receiver must compute the HMAC on the **exact raw body bytes**, before any JSON parsing or transformation. Use a raw-body middleware in Node/Express; PHP's `php://input` already gives you the raw bytes.

---

## Response handling

The adapter classifies your response status:

- **2xx** — success. Logged + integration marked healthy.
- **4xx (except 408/429)** — terminal failure. Logged + integration marked failed. Examples: 400 (bad request), 401 (signature rejected), 403 (firewall blocked), 404 (wrong URL), 422 (validation).
- **408** — request timeout. Retried.
- **429** — rate-limited. Retried, honouring the `Retry-After` header if present.
- **5xx** — upstream error. Retried.
- **Network error** (DNS, TLS, connection reset) — retried.

Retries follow exponential backoff (30s × 2^attempt, capped at 24h) up to 5 attempts before dead-letter.

For retries to actually fire, install the **Drain Integration Retry Queue** task in Joomla's Task Scheduler. See [Integrations overview → Retries](./integrations-overview.md#retries).

---

## Common recipes

### Forwarding to Zapier

1. Create a Zap with a "Webhooks by Zapier → Catch Hook" trigger.
2. Zapier gives you a URL — paste into the adapter's Destination URL.
3. Test connection.
4. Submit a test response in your survey.
5. Zapier shows the parsed payload; pick the fields you need for downstream steps.

### Forwarding to Make.com (Integromat)

1. Create a scenario with a "Webhook → Custom webhook" trigger.
2. Copy the webhook URL into the adapter.
3. Make will show "Determining data structure" after the first event — submit a test response so it can learn the shape.

### Custom backend with verification

1. Stand up an HTTPS endpoint at your domain.
2. Generate a strong secret (e.g. `openssl rand -hex 32`) and paste it into the adapter's Signing secret field.
3. Verify the signature server-side (sample code above) before processing.
4. Respond with 200 OK on success; let the framework retry on transient errors.

### Logging only (no auth)

Skip the signing secret. The adapter doesn't sign. Your endpoint accepts anything — risky for production but fine for debugging.

---

## Sync timing

The webhook adapter runs **synchronously** by default — the survey-submission request waits for the webhook POST to return. For fast endpoints (under 1 second), that's fine. For slow ones, the respondent sees a slight delay.

If your endpoint takes more than 5 seconds, prefer async dispatch (set the **Async** toggle in the config). The framework queues the event; a scheduled task delivers it. Requires the Drain Integration Retry Queue task to be installed.

---

## Multiple webhooks per survey

Create as many webhook integrations as you want. Each fires independently with its own retry pipeline. Useful for:

- Mirroring events to multiple downstream systems (Zapier + your own backend).
- Subscribing different webhooks to different event subsets (one for `response.completed`, another for `invitation.sent`).

---

## Limits

| | Limit | Notes |
|---|---|---|
| Request timeout | 20 seconds | Hard limit per attempt |
| Response body logged | First 1 KB | Truncated to keep log rows small |
| Custom headers | Unlimited | Practical cap: a dozen lines |
| Retries | 5 attempts max | Dead-lettered after that |
| Retry-After max | 24 hours | Caps a runaway `Retry-After` header |
| Payload size | Limited by your `post_max_size` PHP setting | Typical max: 8 MB |
