---
id: rules-side-effects
title: Side-Effects
sidebar_label: Side-Effects
sidebar_position: 26
---

Five server-authoritative actions that fire **as the response comes in**. They react to the submitted data rather than steering the survey-taking flow. Every action here runs on the server's evaluation of the rule, so a tampered client cannot suppress them.

| Feature | Action type | Runs |
|---------|-------------|------|
| [Send notification](#send-notification) | `notify` | Inline at submit (sync) or queued (async per integration setting) |
| [Add to contact list](#add-to-list--segment) | `notify` against AcyMailing adapter | Same as notify |
| [Tag response](#tag-response) | `tag` | Inline at submit |
| [Open follow-up survey](#follow-up-survey) | `followup` | Inline at submit, with retry queue |
| [Auto-close survey](#auto-close) | `auto_close` | Inline at submit, idempotent |

---

## Send notification

Pipe a response through one configured integration (Webhook, Slack, email, contact-list adapter) when conditions match. The rule references the integration by id; the integration framework handles delivery, retries, and audit logging.

### Authoring

Add a rule, action **Notify via integration**. The popover takes:

| Field | Description |
|-------|-------------|
| **Integration** | Picker filtered to integrations bound to this survey. Adapters that don't list `rule.notified` in their event subscriptions are shown but flagged as "does not handle rule.notified". |
| **Message** (optional) | Author-supplied template the adapter substitutes into its body. Slack uses it as the title; the email-notify adapter renders it as the email body; webhook delivers it as `data.message`. Supports `{{q_<id>_<type>}}` pipe placeholders. |

### Eligible adapters

Out of the box, four adapters opt into `rule.notified`:

| Adapter | Use case |
|---------|----------|
| **Webhook** | POST a JSON payload to any URL. Most flexible, HMAC-signed. |
| **Slack** | Block Kit message to a channel. Uses the rule's message verbatim as the title. |
| **Email notification** | Free-form transactional email. Recipients can be `{{q_5_email}}`-piped from answer. |
| **AcyMailing** | Add the respondent's email to a list (see [Add to list](#add-to-list--segment)) |

Third-party adapters (added via plugin) only need to list `rule.notified` in their `events` array to become eligible.

### Example: alert Slack on NPS detractor

Pre-req: a Slack integration configured on the survey, with `rule.notified` listed in events.

```
Rule on NPS question:
  When nps_score <= 6,
  notify via integration "CS Escalations Slack",
  message: "NPS detractor, {{q_5_email}}, score {{q_3_nps}}"
```

When a 6-or-lower NPS arrives:

1. Server matches the rule.
2. Dispatches `rule.notified` to integration #7 (the Slack one).
3. Slack adapter renders the message plus a block with the answer summary.
4. Posts to the configured channel.

### Failure handling

The integration dispatcher carries every notify through:

- **Timing middleware** records duration.
- **Retry queue**: transient failures (5xx, network errors) re-fire after exponential back-off; permanent failures (4xx auth errors) hard-fail.
- **Audit log**: every dispatch attempt lands in `#__survey_integration_logs`.

Failed deliveries don't break the submit. The respondent sees their thank-you page; the failed integration shows up in the **Integrations → Activity** tab.

---

## Add to list / segment

A special case of `notify` against the **AcyMailing** adapter. When the rule matches, the respondent's email is added to the configured AcyMailing list.

### Authoring

Pre-req: AcyMailing installed plus an AcyMailing integration configured on the survey, with the destination list picked and the email-question mapping set.

Then write a notify rule against that integration:

```
Rule on NPS question:
  When nps_score >= 9,
  notify via integration "Promoter newsletter list"
```

Every NPS promoter gets subscribed to the chosen AcyMailing list. The AcyMailing adapter reuses the field-mapping from the integration config, so the email comes from whichever question the adapter knows holds the address.

### Why not a separate "add to list" action?

The integration framework already covers "push respondent to external destination". A dedicated rule action would be a parallel pathway with worse composition (you couldn't easily switch the destination from AcyMailing to Mailchimp without re-authoring rules). Going through `notify` means swapping the integration changes every rule that references it.

---

## Tag response

Apply a string tag to the response when the rule matches. Tags surface in Analytics filters, the response inspector, and the CSV export.

### Authoring

Add a rule, action **Tag response**. The popover takes a single field:

| Field | Description |
|-------|-------------|
| **Tag** | Short string (max 64 chars). Empty tags are a no-op. Lowercase plus hyphens is conventional but not enforced. |

### Storage

Tags live in `#__survey_response_tags` with a unique `(response_id, tag)` constraint, so re-firing the same rule on a resubmit (or a retry) doesn't double-tag.

### Example: classify churn risk

```
Rules on usage / satisfaction questions:
  When monthly_active = 'No' AND $score.nps <= 6,
    tag response with "churn-risk"
  When monthly_active = 'No' AND tenure_months > 24,
    tag response with "long-tenure-at-risk"
  When $segment.detractor = 1 AND plan = 'Enterprise',
    tag response with "high-value-detractor"
```

Tags compose. A single response can carry several. Analysts can filter Analytics by intersection:

> Show me Enterprise customers who are both churn-risk AND long-tenure-at-risk

---

## Follow-up survey

Queue a one-shot invitation to a **different** survey, branded as a follow-up. The invitation uses a dedicated email template (`survey_followup_invitation`) so the recipient knows it's a continuation, not a generic broadcast.

### Authoring

Add a rule, action **Queue follow-up survey**. The popover takes:

| Field | Description |
|-------|-------------|
| **Target survey** | Picker showing every survey in the system. Self-referential targets are rejected server-side. |
| **Email question** | Picker for the question whose answer holds the recipient's email. Works on `email`, `short`, `long` types. |
| **Name question** (optional) | Same picker for a personalisation field. Falls back to empty string. |
| **Custom message** (optional) | Author-supplied template that renders inside the `{{custom_message}}` block of the follow-up email |

### What happens at submit

1. Server resolves recipient email from the named question. Invalid emails or anonymous respondents short-circuit silently.
2. Inserts an `#__survey_invitations` row with `recipient_type = 'response_followup'` and `recipient_id = source response id`, preserving the trace from "which response triggered this invite".
3. Calls `EmailDispatcherService::sendFollowupSurvey()` with the resolved name plus email plus original / follow-up survey rows plus invitation key.
4. On send success, promotes the invitation status to "sent".
5. On failure, the invitation row stays at status `0` so a cron retry can pick it up later.

### Email template

The follow-up uses a dedicated template: **survey_followup_invitation** in Settings → Email templates. Authors can override subject and body just like any other built-in. Variables:

| Variable | Resolves to |
|----------|-------------|
| `recipient_name` | From the rule's `name_field_key` answer (empty when unset) |
| `original_survey_title` | Title of the survey the respondent just finished |
| `followup_survey_title` | Title of the target survey |
| `followup_survey_description` | Description of the target survey |
| `followup_survey_url` | One-shot tracked URL with the invitation key embedded |
| `expires_at` | Optional expiry (currently always null, passed for forward compat) |
| `custom_message` | Author-supplied template from the rule |
| `eta_minutes` | Estimated completion minutes for the target survey |

### Example: power-user deep dive

```
Survey A: Onboarding feedback (15 questions)
Survey B: Power user deep dive (40 questions)

Rule on Survey A's last page:
  When weekly_active = 'Yes' AND $score.engagement >= 80,
  queue follow-up:
    target: Survey B
    email field: respondent_email
    name field: respondent_first_name
    message: "We loved your last feedback, would value your input here too."
```

Power users who finish Survey A get a follow-up email pointing at Survey B, threaded with the original via the invitation row.

### Anti-loop safety

Targeting the same survey as the source is rejected server-side with an audit log entry. Otherwise every response would trigger another invite to the same survey, ad infinitum.

---

## Auto-close

Flip the survey to `published = 2` (closed) when conditions match. New respondents see the closed-survey page; the survey-closed notification email fires once per close.

### Authoring

Add a rule, action **Auto-close survey**. The popover takes:

| Field | Description |
|-------|-------------|
| **Reason** (optional) | Free text that lands in the audit log plus the survey-closed notification email |

### Common patterns

**Goal-reached:**

```
Rule on the answer count:
  When total_responses >= 500,
  auto-close with reason "Reached 500-response goal"
```

(Note: `total_responses` isn't a built-in field. You'd typically pair this with the survey's existing `max_responses` setting, which already auto-closes at the cap. Use the `auto_close` rule when the trigger is semantic, not just a count.)

**Bot-flood detection:**

```
When $quality.honeypot = 1,
auto-close with reason "Honeypot tripped, review for bot activity"
```

This is aggressive: one honeypot trip closes the survey. Tune the threshold by composing with a tag plus manual review.

**Time-of-day:**

```
When $hour >= 17,
auto-close with reason "Outside business hours"
```

Combined with a scheduled re-open task, you can offer a survey only during business hours.

### Idempotency

Auto-close fires the UPDATE conditioned on `published <> 2`, so re-firing on an already-closed survey is a no-op (the WHERE clause skips the row). The follow-on "survey closed" notification email is gated by `closed_notified_at` so it sends exactly once.

### What stays accessible after close

| Surface | Behaviour |
|---------|-----------|
| Public survey URL | Shows the closed-survey page |
| Existing partial responses | Cannot resume; respondent sees the closed page |
| Admin / Analytics | Unchanged. Closed surveys still appear in lists, exports work, response data persists. |
| Reopen | Manual via the Builder's publish toggle |

---

## Composing side-effects

Most response-time workflows combine multiple side-effect actions:

```
NPS detractor workflow:
  1. Score nps from nps_question, with buckets (detractor: max 6)
  2. When $segment.detractor = 1, tag response with "detractor"
  3. When $segment.detractor = 1, notify Slack #cs-escalations
  4. When $segment.detractor = 1 AND plan = 'Enterprise',
       queue follow-up: Enterprise Detractor Deep Dive
```

All four fire in a single submit. The server evaluates each rule against the same answer plus context map, applies the side-effects in rule-order, and writes the result atomically.

---

## Related

- [Integrations Overview](./integrations-overview), the framework `notify` delegates to
- [Email Templates](./email-templates). `survey_followup_invitation` documented in detail.
- [Webhook integration](./integration-webhook), [Slack integration](./integration-slack), [AcyMailing integration](./integration-acymailing)
- [Rules Engine Overview](./conditional-rules-explained)
