---
id: email-templates
title: Email Templates
sidebar_label: Email Templates
sidebar_position: 50
---

# Email Templates

Every transactional email Community Surveys sends — invitations, reminders, response receipts, survey-published notices — runs through a customisable template. The Email Templates page is where you edit them.

Open via **Email Templates** in the left rail.

---

## Layout

A three-pane workspace:

- **Left rail** — list of templates available on the site. Click any one to load it into the editor.
- **Editor (middle)** — Subject input + Body (HTML) editor with syntax highlighting + optional Plain text body.
- **Preview (right)** — live iframe showing the rendered email, exactly as recipients will see it.

The editor saves on every keystroke (debounced). The preview re-renders 1.5s after the last change.

---

## Built-in templates

Templates ship with sensible defaults; you can rewrite any of them.

| Template key | When it sends | Recipient |
|---|---|---|
| `invitation_send` | Campaign creates a new invitation | The contact being invited |
| `invitation_reminder` | "Send reminder" fires (manual or scheduled) | Recipients who haven't started |
| `response_thankyou` | A response is submitted (complete or partial) | The respondent (if email known) |
| `response_notify_author` | A response is submitted | The survey's owner |
| `survey_new_admin` | A survey is published for the first time | Site admin from Settings |
| `survey_published_user` | A survey transitions to Live | The survey's owner |
| `survey_closed` | A survey transitions to Closed | The survey's owner |

You can also publish your own templates from a third-party plugin — see [Extending with plugin events](./extending-community-surveys-using-plugin-events.md).

---

## Editor

### Subject

A single-line input. Use `{{variable}}` placeholders to interpolate values at send time. Variables available depend on the template — every template's variable picker appears at the top of the editor.

### Body (HTML)

The main email body. The editor uses CodeMirror with HTML syntax highlighting + bracket matching + auto-indent.

Two important rules:

- **Don't include `<html>`, `<head>`, or `<body>` tags** — Community Surveys wraps your body in a fully-styled outer envelope (logo, header, footer, brand colours) automatically. Your body is the *content* that goes inside the envelope.
- **Use inline styles** for any custom HTML — most email clients strip `<style>` blocks. The brand variables (colours, fonts) are pre-resolved by the engine, so `color: {{primary_color}}` works.

### Body (text)

Optional plain-text alternative for clients that can't render HTML. If you leave it empty, the engine derives it from the HTML by stripping tags. Override when you want the text version to read differently.

### Variables

Three flavours of placeholder:

| Syntax | Resolved at | Notes |
|---|---|---|
| `{{var}}` | Send time | Substituted with the actual value (e.g. `{{recipient_name}}` → "Alice") |
| `{var}` | Send time (settings only) | Used for site-wide brand settings (e.g. `{workspace_name}` in footer) |
| `{{#if var}}…{{/if}}` | Send time | Conditional block — renders only when `var` is truthy |
| `{{#unless var}}…{{/unless}}` | Send time | Inverse — renders when `var` is empty/false |

**Always-available variables** (every template):

- `site_name`, `site_url` — your Joomla site
- `workspace_name` — alias for site_name
- `from_name`, `from_email` — sender identity (Settings → Email)
- `primary_color`, `text_color`, `background_color`, `body_background_color` — brand colours
- `footer_text` — Settings → Email footer
- `current_year` — for copyright lines

**Per-template variables** — see the variable picker at the top of each template's editor for the full list. Examples:

- `invitation_send` — `recipient_name`, `sender_name`, `survey_title`, `survey_description`, `survey_url`, `expires_at`, `preheader`
- `invitation_reminder` — `recipient_name`, `sender_name`, `survey_title`, `survey_url`, `days_remaining`, `preheader`
- `response_thankyou` — `recipient_name`, `survey_title`, `completed_at`, `survey_url`, `preheader`
- `response_notify_author` — `author_name`, `survey_title`, `responder_name`, `responder_email`, `submitted_at`, `total_responses`, `results_url`, `preheader`

---

## Live preview

The preview iframe renders the template through the actual TemplateRenderer the server uses at send time. What you see is exactly what gets sent.

The preview uses **example values** from each variable's manifest entry — `recipient_name` becomes "Alice Doe", `survey_title` becomes "Your sample survey", `survey_url` becomes a deep-link example. Real sends substitute real values.

### Test send

Below the preview, a **Send test** button mails the rendered preview to your own email (the Joomla user's email address). Useful for checking how the email renders in Gmail / Outlook / Apple Mail.

---

## Brand-driven envelope

Every email is wrapped in a consistent outer envelope:

- **Header** — your logo (uploaded in Settings → Email → Branding) + optional title + subtitle.
- **Body card** — your template's body, framed in a rounded card with branded colours.
- **Footer** — workspace name, copyright, optional footer text.

You don't author the envelope per template — it's a single shared base that picks up brand settings.

Configure the envelope via **Settings → Email**:

- **Sender identity** — from name, from email, reply-to.
- **Branding** — logo, header title, header subtitle, primary colour, text colour, background colour, body background colour, footer text.

See [Settings reference → Email](./settings-reference.md#email).

---

## Resetting to defaults

Each template has a **Reset to default** button in its editor toolbar. Click to discard your customisations and restore the shipped default. Confirmation dialog before destructive action.

The default templates are well-tested across email clients — if you're starting from scratch, they're a good baseline to copy and edit rather than rewrite from zero.

---

## Per-campaign overrides

Templates are workspace-wide — every campaign uses the same `invitation_send`. But the **New campaign** dialog lets you tweak the subject and body for *just this campaign* without touching the saved template:

1. New campaign wizard → fills audience.
2. The right pane shows the invitation email preview using the saved template.
3. Click into the subject or body and type — a "Customised" badge appears.
4. Live preview updates as you type.
5. On Send, the customised version is used for this campaign only. The saved template is unchanged.

A **Reset to template** button reverts your campaign-level edits.

See [Invitations & Campaigns](./invitations-campaigns.md).

---

## Sending logic

Every template goes through the same dispatch pipeline:

1. The TemplateRenderer resolves `{{variables}}` against the event's variable map.
2. Conditional blocks (`{{#if}}/{{#unless}}`) collapse based on which variables are set.
3. The body is wrapped in the brand envelope.
4. Brand-variable substitutions (`{primary_color}` etc.) happen on the final wrapped HTML.
5. The dispatcher hands the rendered `{subject, body_html, body_text}` to Joomla's Mailer.
6. The `from` / `reply-to` are set from Settings → Email; if those are empty, Joomla's global mailer config wins.

If the mailer fails to send, the failure is logged at warning level (Joomla's log) and the caller is informed (toast on the admin side, or `false` return for programmatic callers). The send pipeline is fire-and-forget — a failed send doesn't block the user action that triggered it.

---

## Common tasks

### Localising emails to a respondent's language

Email templates support per-language overrides. In the editor, the language selector at the top defaults to `*` (default for all languages). Pick a specific language (e.g. `fr-FR`) to author the French version — the dispatcher matches the recipient's language and falls back to `*` when no per-language override exists.

### Adding your logo

Settings → Email → Branding → **Logo** — upload an image. Recommended size: 200×60 px, transparent PNG. The logo appears in every email's header band.

### Changing the colour scheme

Settings → Email → Branding → **Primary colour**. Cascades into:

- `<a>` link colour
- Button background
- Header band background (with tinted variations)
- Bullet markers

Tip: pick a colour that contrasts well with white text — buttons in the default templates use white text on the primary colour.

### Disabling a template

Templates don't have an "enabled" toggle — every event fires its template. To suppress a template, set its body to an empty string (or, equivalently, write a comment-only body); the dispatcher still tries to send but the email is one empty paragraph.

To actually prevent sending, disable the trigger:

- `response_thankyou` — disable via Settings → General → "Send response thank-you" toggle.
- `response_notify_author` — disable via Settings → General → "Notify survey owner on response" toggle.
- `invitation_send` — only sends when a campaign is created; don't create campaigns.
- `survey_published_user` — disable via Settings → General → "Notify owner on publish" toggle.

---

## Limits

| | Limit | Notes |
|---|---|---|
| Body size | 64 KB | Hard limit per template |
| Subject size | 255 chars | Standard SMTP limit |
| Variable substitution depth | 1 level | Variables aren't templates themselves |
| Per-language overrides | Unlimited | One per Joomla content language |
| Custom plugins adding templates | Unlimited | See plugin event docs |
