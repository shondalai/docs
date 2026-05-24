---
id: settings-reference
title: Settings Reference
sidebar_label: Settings Reference
sidebar_position: 90
---

# Settings Reference

Every setting in Community Surveys, organised by section. All settings require `core.admin` on `com_communitysurveys`.

Open via **Settings** in the left rail.

---

## General

Workspace defaults that apply across the component.

| Setting | Default | Purpose |
|---|---|---|
| **Workspace name** | Joomla's `sitename` | Shown in email headers, PDF footers, integration logs. Defaults to your Joomla site name; override if you want a survey-specific brand. |
| **Default privacy** | `private` | New surveys inherit this — `public` (anyone can take), `private` (logged-in users only), `invite` (invitation campaigns only). Per-survey override on each survey's settings. |
| **Response retention** | `forever` | How long to keep responses. `forever` / `1 year` / `6 months` / `30 days`. Older responses are deleted automatically by a scheduled task. Disable retention by leaving as `forever`. |
| **Anonymous responses** | `off` | When on, responses don't carry the respondent's Joomla user id (or any IP). Per-survey override available. |
| **Notify owner on response** | `on` | Fires `response_notify_author` email when a response comes in. |
| **Notify owner on publish** | `on` | Fires `survey_published_user` email when a survey goes Live. |
| **Send response receipt** | `on` | Fires `response_thankyou` email to the respondent when known. |
| **Notify admin on new survey** | `off` | Fires `survey_new_admin` to the site admin (configured below) when any author publishes a new survey. |
| **Admin notification email** | empty | Where `survey_new_admin` lands. Comma-separated list for multiple recipients. |

---

## Privacy

GDPR + data-minimisation controls.

| Setting | Default | Purpose |
|---|---|---|
| **Collect IP address** | `off` | When on, every response stores `ip_address`. GDPR considers IPs PII; default off respects that. |
| **Cookie consent text** | empty | Optional inline notice shown above the first question. Markdown supported. |
| **Show GDPR consent checkbox** | `off` | When on, every survey requires the respondent to tick a consent checkbox before submitting. Text controlled by the next setting. |
| **GDPR consent text** | "I agree to the processing of my data." | Shown next to the consent checkbox. Edit to match your privacy policy. |
| **Privacy policy URL** | empty | Linked from the consent area. Recommended. |

---

## Appearance

Admin UI preferences.

| Setting | Default | Purpose |
|---|---|---|
| **Density** | `medium` | Admin UI row/control sizing — `compact` / `medium` / `airy`. Reflects on every page. |
| **Default colour mode** | `auto` | `auto` (follows OS), `light`, or `dark`. Each admin can override via the topbar toggle; this is the workspace default. |
| **Accent colour** | inherits theme | Admin-side accent colour. Per-admin override sticks for that admin only via a future user-prefs page. |

These don't affect the public survey runtime — only the admin SPA. The public survey's appearance comes from the survey's theme (Themes page + per-survey overrides).

---

## Email

Sender identity + email branding. Every transactional email picks these up automatically.

### Sender identity

| Setting | Default | Purpose |
|---|---|---|
| **From name** | Joomla mailer name | Display name on outbound emails. |
| **From email** | Joomla mailer address | Sender address. Must be on a domain you control + verified with your SMTP host or it'll likely be rejected. |
| **Reply-To** | empty (uses From) | When set, replies route here instead of the from address. Useful for "do-not-reply" senders. |

If left empty, Joomla's global mailer config applies. The override is per-component.

### Branding

| Setting | Default | Purpose |
|---|---|---|
| **Logo** | empty | Header image for every email. Upload via the file picker. Recommended 200×60 px, transparent PNG. |
| **Header title** | empty | Optional title text in the email header band. Supports `{workspace_name}` placeholder. |
| **Header subtitle** | empty | One-liner under the header title. |
| **Primary colour** | accent from theme | Drives link colour, button background, header accents. |
| **Text colour** | `#1f2937` | Primary body text in emails. |
| **Background colour** | `#f8fafc` | Outer page background. |
| **Body background colour** | `#ffffff` | The card the email content sits in. |
| **Footer text** | `© {current_year} {workspace_name}` | Bottom of every email. Supports `{workspace_name}`, `{current_year}` placeholders. |

See [Email Templates](./email-templates.md) for how these brand variables flow through individual templates.

### Delivery

| Setting | Default | Purpose |
|---|---|---|
| **Use lib_shondalai_core** | `off` | When on (and the library is installed), routes emails through the queueable multi-provider EmailService instead of Joomla's built-in Mailer. Adds retry + provider failover. |
| **Queue large campaigns** | `on` | Campaigns over 100 recipients use the queue. Avoids PHP timeouts on big sends. Requires Drain Integration Retry Queue task. |

---

## PDF

Per-response PDF export styling.

| Setting | Default | Purpose |
|---|---|---|
| **Paper size** | `A4` | `A4` / `Letter`. |
| **Orientation** | `portrait` | `portrait` / `landscape`. |
| **Header text** | empty | Shown at the top of every PDF page. Supports `{survey_title}`, `{response_id}` placeholders. |
| **Footer text** | `Page {page} of {pages}` | Bottom of every page. Supports `{page}`, `{pages}`, `{date}`, `{workspace_name}`. |
| **Logo** | empty | Top-left of page 1. Defaults to the email logo. |
| **Show empty answers** | `off` | When on, unanswered questions appear as "(not answered)". Off = unanswered questions are hidden. |
| **Show meta** | `on` | Page 1 includes response metadata (respondent, submitted at, duration). |

PDF generation uses Browsershot (Chromium-based) when available, falling back to DOMPDF. Browsershot output is closer to web rendering; DOMPDF is lighter-weight and works without Node.js.

---

## AI

Optional AI authoring features. Requires lib_shondalai_core + an active shondalai.com account.

| Setting | Default | Purpose |
|---|---|---|
| **AI features enabled** | `off` | Master toggle. Off = every AI button across the admin is hidden. |
| **shondalai.com connection** | (read-only status) | Shows whether AI credentials are stored. |
| **Connect** | — | Open the connect dialog. Enter your shondalai.com username + password to exchange for an API token. Site-wide credential. |
| **Disconnect** | — | Revokes the stored token. AI features stop working immediately. |
| **Credits balance** | (live from SaaS) | Current AI credit balance. Each AI call costs credits; balance polled every few minutes. |
| **Per-feature toggles** | all on | Individually enable/disable the 6 AI surfaces: question suggestion, grid suggestion, survey generation, preset translation, full-survey translation, answer translation. |

When AI is disabled or disconnected, the builder hides the AI buttons silently — no error toasts, no spinner that never resolves.

---

## Google

One-time OAuth setup for Google Sheets integrations.

| Setting | Default | Purpose |
|---|---|---|
| **Setup status** | (live badge) | "Configured" if both Client ID + Secret are present; "Not configured" otherwise. |
| **Client ID** | empty | OAuth Client ID from your Google Cloud project. |
| **Client Secret** | empty | OAuth Client Secret. Stored encrypted. Masked once saved; click "Replace" to enter a new one. |
| **Redirect URI** | (read-only, derived) | The URL Google should redirect users to after consent. Copy this into the GCP "Authorised redirect URIs" field when creating the OAuth client. |

See [Google Sheets Integration](./integrating-survey-with-google-sheets.md) for the full setup walkthrough.

---

## Developer

Verbose logging + raw API access. Most sites leave these off.

| Setting | Default | Purpose |
|---|---|---|
| **Verbose logging** | `off` | When on, the component logs every API call + service invocation to Joomla's log. Useful for debugging; noisy in production. |
| **Show raw API in admin** | `off` | When on, every list/detail page shows a "View raw" toggle that displays the API response JSON inline. Diagnostic aid. |
| **Dev-mode banner** | `off` | When on, a yellow "DEV" banner appears in the admin topbar. Visible reminder when you're not on production. |
| **Disable CSRF on API** | `off` | **Never enable in production.** Strips the CSRF check on API mutations. Only useful for command-line tooling tests. |

---

## Logging

Audit and retention behaviour for component-internal logs.

| Setting | Default | Purpose |
|---|---|---|
| **Keep audit logs** | `1 year` | How long to keep entries in `#__survey_audit`. Older are pruned by scheduled task. |
| **Keep integration logs** | `90 days` | How long to keep `#__survey_integration_logs` rows. |
| **Audit level** | `mutations` | `mutations` (writes only) / `all` (every read + write). `all` is loud; only use when investigating. |

---

## Where settings live

Settings are stored in `#__survey_options` as `(group, key, value)` rows. The values column carries either a scalar (string/number/bool serialised) or a JSON blob.

The settings system is dynamic — adding a new group + key in code (e.g. for a third-party plugin) Just Works without schema changes. The admin Settings page exposes a fixed set of sections; other groups (e.g. plugin-specific) are managed by their owning code.

---

## Programmatic access

From PHP code (e.g. plugins extending Community Surveys), use the `SettingsService`:

```php
use Shondalai\Component\CommunitySurveys\Administrator\Service\SettingsService;

$settings = Factory::getContainer()->get(SettingsService::class);

$accent = $settings->get('appearance.accent_color', '#3b82f6');
$settings->set('myplugin.last_run', date('c'), 'myplugin');
```

`get($key, $default)` reads. `set($key, $value, $group)` writes. Keys are dot-prefixed by their group (`appearance.accent_color`); the optional group argument disambiguates when needed.

Group lookup: `$settings->group('appearance')` returns the whole group as an associative array.

---

## Resetting

There's no "reset to defaults" button on the Settings page. To wipe customisations, delete rows from `#__survey_options` directly:

```sql
DELETE FROM `#__survey_options` WHERE `group` = 'general';
```

Defaults will re-apply on next read. Don't delete the whole table — some components (notably the credentials vault check on Google OAuth) rely on missing-row defaults.
