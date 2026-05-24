---
id: invitations-campaigns
title: Invitations & Campaigns
sidebar_label: Invitations & Campaigns
sidebar_position: 60
---

# Invitations & Campaigns

Send tracked survey invitations to your contacts. Each invitee gets a unique survey URL, you see who opened / started / completed, and you can send targeted reminders.

Open via **Invitations** in the left rail.

---

## Layout

- **Top KPI strip** — workspace-wide stats: total campaigns, sent, opened, completed.
- **Campaigns list (left)** — one card per campaign (batch). Title, survey, send date, progress chips for each funnel stage.
- **Campaign detail (right)** — recipients table for the selected campaign, with per-row funnel progress.

When you have no campaigns yet, an empty state explains the page and offers a **New campaign** CTA.

---

## The campaign concept

A **campaign** is one outreach batch — created when you send invitations to a chosen audience. Each campaign:

- Targets one survey.
- Has a unique `batch_id` for tracking.
- Generates one `#__survey_invitations` row per recipient.
- Each invitation has its own unique URL (the `key_name` query parameter).
- Tracks status per recipient: `pending → sent → opened → started → completed`, plus terminal `bounced`.

You can create as many campaigns as you want against the same survey.

---

## Creating a campaign

Click **+ New campaign** in the toolbar. A dialog opens with a two-pane layout:

### Left pane — recipients

**Pick a survey** at the top. The picker is server-driven so it scales past hundreds of surveys; type to filter. Closed surveys don't appear — they can't accept invitations.

**Contact groups** — multi-select your contact lists. Each list shows its member count. Recipients across selected lists are deduped at send time.

**Individual contacts** — search + pick contacts outside any group. The same dedupe applies if a contact is both in a selected group and individually picked.

### Right pane — invitation email

A live preview of the email that will be sent, rendered through the actual template engine.

Above the preview, two fields:

- **Subject** — pre-filled with the saved `invitation_send` template's subject.
- **Body (HTML)** — pre-filled with the saved template's body.

Type into either to customise for *this campaign only*. A **Customised** badge appears. The preview re-renders as you type (debounced).

**Reset to template** discards your campaign-level edits and reloads the saved template.

Per-campaign customisation is the right tool for one-off tweaks ("This batch is for VIPs, so let's add a personal note"); for permanent changes, edit the underlying template in the **Email Templates** page.

### Sending

The bottom of the dialog shows the recipient count. Click **Send invitations**.

The send happens synchronously — for very large audiences (1000+) this can take a few seconds. A success toast confirms how many invitations were dispatched. The dialog closes, the new campaign appears in the list, and you can drill in to track progress.

---

## Tracking campaigns

### The campaigns list

Each campaign card shows:

- **Survey title**.
- **Batch identifier** — a short hash for reference (useful when reading logs).
- **Send date**.
- **Funnel chips** — coloured pills for each status, with counts.

Click any card to load its detail in the right pane.

### The detail pane

Top: campaign metadata + a **Send reminders** button (action: send a reminder to every pending recipient).

Below that:

- **Status filter chips** — narrow the recipient list to a single status (All / Pending / Sent / Opened / Started / Completed / Bounced).
- **Recipients table** — one row per invitee.

### Recipient row

Each row carries:

- **Checkbox** for bulk actions.
- **Recipient** — name + email.
- **Status** — coloured pill.
- **Progress** — tiny four-segment funnel visualisation (sent → opened → started → completed). Filled segments = milestones hit.
- **Reminders** — count of reminders sent so far.
- **Actions** — Send-reminder button (disabled for recipients past the funnel) and Delete button.

### Reminders

Three ways to send:

- **Per row** — the Send button on a recipient's row. One-off, single recipient.
- **Bulk** — check multiple rows → **Remind selected** in the bulk action bar.
- **Campaign-wide** — the **Send reminders** button at the top of the detail pane fires to every pending recipient (sent but not started).

In all cases, the server skips recipients who have already started or completed — reminding them would be noise.

The recipient gets the `invitation_reminder` template (not `invitation_send`), so you can tune the reminder voice differently from the original invitation.

The reminder counter on each row increments each time, and the funnel chip stays at its current stage. Reminders don't reset the funnel.

---

## Deleting recipients

Per-row Trash icon, or bulk Delete from the multi-row selection bar.

Deleting a recipient removes their invitation row. If they've already submitted a response, the response itself stays — only the invitation tracking is removed. The unique URL they got also stops working (responses can no longer resume from that key).

This is permanent — no undo, no recycle bin.

---

## What recipients see

The invitation email lands in their inbox with:

- **From** — your sender identity (Settings → Email).
- **Subject** — the (possibly customised) campaign subject.
- **Body** — the rendered template with their name + survey title + a unique survey URL.

The survey URL is `index.php?option=com_communitysurveys&view=survey&id=X&key=YYY` where `YYY` is the unique invitation key. Clicking the URL:

1. Bumps the invitation's `opened_at` timestamp.
2. Loads the survey for that specific recipient.
3. When they submit, links their response back to the invitation.

If they share the URL with someone else, that someone else can submit a response too — but only one per URL (single-use is the default; this is configurable per campaign in a future release).

---

## Tracking accuracy

- **Opened** — accurate via a tracking pixel embedded in the HTML body. Recipients using image-blocking clients (some corporate mail filters, plain-text clients) won't be tracked as opened even though they've read the email.
- **Started** — accurate. We bump `started_at` when the recipient lands on the survey page for the first time.
- **Completed** — accurate. We bump `completed_at` when the recipient submits a complete response.
- **Bounced** — set when the SMTP transport reports a hard bounce. Soft bounces (temporary failures) don't flip the status.

---

## Limits and expectations

| | Soft limit | Notes |
|---|---|---|
| Recipients per campaign | None enforced | Send is synchronous; budget ~1 second per 50 recipients on typical PHP-FPM workers |
| Campaigns per survey | None enforced | |
| Reminders per recipient | None enforced | |
| Per-campaign overrides | Subject + body only | All other settings (sender, branding) come from Settings → Email |

For very large audiences (10,000+ recipients), schedule the send during off-peak hours and bump PHP's `max_execution_time`. Future work will move large sends to a Joomla scheduled task.

---

## Common questions

### Can I schedule a campaign for later?

Not from the admin yet. Workaround: create a draft campaign by writing the audience + email but holding off on **Send**. Come back at send time to hit the button.

### How do I get someone's unique URL without sending the email?

Right now, you can't extract it from the admin UI — the URL is generated and emailed in one step. If you need direct URLs for an external mailing system, use the **Webhook integration** to mirror invitations to your own infrastructure.

### Do recipients need a Joomla account?

No. Invitations work for any email address. The recipient never logs into Joomla — the unique key in their URL is enough to identify them.

### Can I import an external invitation list?

If you have an external system that already generated invitations, import the recipients as **Contacts** (CSV import), then create a campaign targeting that contact group. Each contact gets a fresh tracking URL.

If you need to match existing external invitation IDs, you'd integrate via the framework — see the [Webhook integration](./integration-webhook.md) for an event-driven pattern.

### Why aren't all my opens registered?

Tracking depends on image loading. Recipients with image-blocking email clients (Outlook with images blocked, plain-text-only clients, some corporate filters) won't be tracked. The Started + Completed milestones are server-side and unaffected.
