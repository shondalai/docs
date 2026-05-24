---
id: integration-acymailing
title: AcyMailing Integration
sidebar_label: AcyMailing
sidebar_position: 84
---

# AcyMailing Integration

Subscribe survey respondents to an AcyMailing list when they complete a survey. Joomla-native — no HTTP layer, no API keys.

This replaces the legacy `plg_acymailing_surveys` plugin's audience flow. Existing audience plugins (where you embed a survey *into* an AcyMailing newsletter) still work; this integration adds the inverse direction (pull respondents *into* AcyMailing).

For framework concepts (events, retries, logs), see [Integrations Overview](./integrations-overview.md).

---

## Requirements

- **AcyMailing 8 or later** installed on the same Joomla site (the modern namespaced API: `\AcyMailing\Classes\UserClass`).
- Survey with an email-type question (or a generic text question that captures email).

Older AcyMailing versions aren't supported. The adapter's Test Connection step will tell you if your AcyMailing is missing or too old.

---

## Setup

### 1. Pick the destination list

In AcyMailing → Lists → make sure the list you want to populate exists. Note its name.

### 2. New integration

In Community Surveys → **Integrations → Marketplace → AcyMailing**.

### 3. Fill the wizard

- **Survey** — the survey whose completed responses should subscribe people.
- **Internal name** — e.g. "CSAT respondents → Customer newsletter".
- **AcyMailing list** — picker, populated from your AcyMailing lists. Pick the destination.
- **Email question field key** — *optional*. Leave blank to auto-detect the first email-type question. Fill in if you want to explicitly tie to a specific question's `field_key`.
- **Name question field key** — *optional*. Leave blank to auto-detect the first name-type question (or one whose title contains "name"). Fill in to be explicit.
- **Send AcyMailing's confirmation email** — when on, the new subscriber gets AcyMailing's built-in confirmation email before being marked active. Off = direct subscribe (no confirmation).

### 4. Test connection

Click **Test connection**. The adapter:

1. Checks AcyMailing is installed and the namespaced API is reachable.
2. Loads the configured list by id to confirm it exists.
3. Returns success with the list name + subscriber count.

### 5. Save

The integration is live. Submit a test response — the respondent's email lands in the list immediately.

---

## How field extraction works

The adapter needs an email + a name from each response. Three-tier resolution:

### Email

1. **Explicit field key** — if you set `email_field_key`, the adapter looks for a question with that exact `field_key`. Best for surveys where multiple email-shaped questions exist.
2. **Email type** — if no explicit key, the adapter scans for the first question whose type is `email` and uses its answer.
3. **Fuzzy fallback** — if no email-type question exists, scans every answer for a value that passes `FILTER_VALIDATE_EMAIL`. Useful for legacy surveys where the email lives in a "Short answer" question.

If none of the tiers find a valid email, the sync is **skipped** (logged as `skipped`, not `error`) — the response just isn't subscribed.

### Name

1. **Explicit field key** — `name_field_key`.
2. **Type heuristic** — first question of type `name`, or a short-text question whose title contains the word "name".
3. **Joomla user fallback** — for logged-in respondents, the Joomla account's display name.

A missing name isn't fatal — the subscriber lands in AcyMailing with an empty name. They'll see `Hi {name}` in newsletters as just "Hi ".

---

## What happens on subscribe

Per response:

1. The adapter extracts email + name.
2. Looks up the existing AcyMailing user by email. If found, uses that record; updates the name only if AcyMailing's record has no name and we have one.
3. If not found, creates a new AcyMailing user with the email + name.
4. Subscribes the user to the configured list. Honours your "Send confirmation" toggle.

The subscribe step is **idempotent** — re-firing the same response (e.g. from a retry) doesn't double-subscribe. AcyMailing handles the deduplication at the list-membership level.

---

## Choosing events

The adapter declares support for two events:

- **`response.completed`** — typical choice. Subscribes only fully-completed respondents.
- **`response.submitted`** — broader. Subscribes anyone who hits submit, including partials.

Most use cases prefer `response.completed` — partial respondents may not have given a valid email, and even if they did, you generally want a stronger signal of consent before subscribing.

The adapter currently doesn't have a UI toggle for choosing events (unlike Webhook / Slack which let you multi-select). It always fires on `response.completed` by default; future work will surface the selection.

---

## Consent and double opt-in

Subscribing someone to a mailing list usually requires their consent. Two approaches:

### Explicit consent in the survey

Add a checkbox question to the survey: "*Yes, sign me up for the newsletter.*" In your survey logic, only consider responses where this is checked.

Currently the adapter doesn't have a conditional-subscribe field — it subscribes every completed response. The recommended workaround:

- **Two surveys** — one for general feedback, one for newsletter signups. Wire the integration to the signup one.
- **Two integrations** — one to AcyMailing, one to a Webhook that filters on the consent answer and re-routes only consenters to AcyMailing via AcyMailing's REST API. More plumbing but full control.

Future work will add a filter expression to the field-mapping config.

### Double opt-in

Turn on **Send AcyMailing's confirmation email**. New subscribers land in AcyMailing as `pending` and only become active after they click the confirmation link in the email. That's GDPR-friendly double opt-in.

---

## Result classification

The adapter classifies sync results:

- **Success** — user subscribed, log shows the user id + list id.
- **`skipped`** — no valid email found in the response. Logged at info; doesn't count against retry budget.
- **`prerequisite_missing`** — AcyMailing isn't installed. Terminal failure for the integration; reinstall AcyMailing or delete the integration.
- **`destination_missing`** — list_id is empty in config. Terminal.
- **`destination_not_found`** — list_id points to a list that no longer exists. Terminal.
- **`user_save_failed`** — AcyMailing's `UserClass::save()` returned 0. Rare; usually means the email format failed AcyMailing's own validation.
- **`acymailing_error`** — anything AcyMailing threw. The error message is logged verbatim.

No retries are issued — AcyMailing failures are typically permanent (config wrong, user record corrupt, list deleted). If you need to re-fire a missed subscribe, edit the response and re-save it.

---

## Common questions

### What if someone unsubscribes later?

AcyMailing tracks list-membership status. If a respondent unsubscribes (via the AcyMailing unsubscribe link in a newsletter), then submits another survey response, the adapter re-subscribes them. They'll go through your double opt-in if it's enabled.

To prevent re-subscription, AcyMailing offers a "blocklist" feature — once on the blocklist, subscribe attempts silently fail. The adapter logs these as `acymailing_error`.

### Can I subscribe to multiple lists from one survey?

Create multiple integrations targeting the same survey, each pointing at a different list. Each subscribes independently.

### Can I map custom AcyMailing fields?

Not yet. The adapter currently only handles email + name. Custom AcyMailing fields (e.g. company, phone) aren't populated.

For full mapping, the **Webhook integration** lets you call AcyMailing's REST API directly with whatever fields you want — same outcome, more plumbing.

### Does this work with AcyMailing Free?

Yes. The adapter uses the same `UserClass` API that ships with both Free and Enterprise editions.

### Where can I see who subscribed?

In AcyMailing → Subscribers, filtered to the destination list. The subscriber's metadata (subscription date, source) will show this integration as the source.

The Community Surveys side logs every subscribe in the integration's Activity tab.

---

## Migrating from the legacy plugin

The legacy `plg_acymailing_surveys` plugin embedded surveys *into* newsletters. That's a different feature — the legacy plugin remains useful for the survey-in-newsletter direction.

If you were using a custom plugin to subscribe survey respondents to a list, this integration replaces that workflow. Delete the custom plugin once this integration is live and you've confirmed subscribes work.

---

## Limits

| | Limit | Notes |
|---|---|---|
| List size | AcyMailing's limit (typically unlimited) | |
| Subscribe rate | Limited by AcyMailing's PHP performance | No HTTP overhead — direct API |
| Retries | None (failures are typically permanent) | |
| Custom fields | Email + name only | Use Webhook + AcyMailing REST for more |
| AcyMailing version | 8+ | Older versions not supported |
