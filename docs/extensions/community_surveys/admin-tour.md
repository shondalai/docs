---
id: admin-tour
title: Admin Tour
sidebar_label: Admin Tour
sidebar_position: 3
---

# Admin Tour

A guided walkthrough of every page in the Community Surveys admin. If you've used 7.x before, this is where you'll learn where everything moved.

The admin is a single-page app — once it loads, it never reloads. Navigate via the left rail; every screen has a global search and consistent toolbar layout.

> **Tip:** press <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> anywhere to open the command palette. Search surveys, jump to settings, or fire common actions without leaving the keyboard.

---

## The shell

Every admin screen shares three pieces of chrome:

- **Top bar** — workspace title, dark/light mode toggle, AI credits indicator (if connected to shondalai.com), notification bell.
- **Left rail** — the primary navigation. Collapsible: click the chevron at the bottom to shrink to icons-only.
- **Toolbar** — page-specific filters, view tabs, search, and primary action button. Sticky to the top so it stays visible as you scroll long lists.

Below those, every page renders its own content.

---

## Dashboard

Your landing page. Three sections:

- **KPI tiles** — response volume, completion rate, languages active, integrations connected, all for the workspace's last 30 days.
- **Recent activity** — a live feed of survey edits, response submissions, campaign sends, integration syncs.
- **Quick start** — cards that link straight into the most-common next actions (create a survey, import contacts, configure Google integration, …).

The Dashboard is read-only — no edits happen here.

---

## Surveys

The full survey list. Filter by status (Live / Draft / Closed), folder, language, or owner.

Each row shows the title, owner avatar, status badge, response count, last-updated date, and a small sparkline of the last two weeks' submissions. Click any row to open the builder; click the kebab menu for duplicate / archive / delete.

The top-right **+ New survey** button creates a blank survey and drops you straight into the builder.

---

## Builder

The five-tab survey editor:

- **Builder** — the canvas. Drag-and-drop questions, edit titles inline, organise into pages. Right rail is the question-type palette; selecting a question swaps the palette for that question's Inspector.
- **Design** — pick a base theme, override accent colour, surface tone, and typography for this survey. Mode-aware preview toggle (light/dark).
- **Logic** — conditional rules. "When question X equals Y, do Z." Z is one of: show/hide a question or page, skip to a page, end the survey, or require an answer. Build complex rules with nested AND/OR groups.
- **Translations** — side-by-side editor. Source language on the left, target language on the right. Translate every visible string (titles, descriptions, option labels, validation messages) without leaving the builder.
- **Results** — embedded analytics overview for this one survey. Useful while you're iterating — no need to switch to the Analytics page.

The top bar carries Preview, Publish/Close, and Delete actions plus a language switcher when translations exist.

See the [Survey Builder guide](./survey-builder.md) for a deeper tour.

---

## Responses

The cross-survey responses page (different from the Responses tab inside Analytics, which is scoped to one survey).

Two view modes:

- **Individual** — master-detail split. Pick any response on the left to see the full answers + metadata on the right. PDF download per response.
- **Aggregate** — workspace-wide rollups.

Filter by survey, status (complete / partial), search by respondent or response id.

---

## Analytics

A five-tab analytics workbench scoped to one survey. Pick a survey from the top-left picker; tabs:

- **Overview** — KPIs, responses-over-time chart (daily / weekly / cumulative modes), per-question distribution snapshots.
- **By Question** — two-pane: question list on the left, full distribution / free-text drill-down on the right. Renders matrix grids for grid-style questions.
- **Segments** — completion-status + duration breakdowns side-by-side. Language section appears only when your responses carry language data.
- **Cross-tab** — pick two finite-answer questions, render a heat-shaded matrix of how respondents combined them.
- **Responses** — paginated list of every response with per-row PDF download and a top-of-page CSV export of the whole survey. Each row has a Trash button; bulk-select multiple rows for batch delete.

When you first open Analytics without a survey selected, you get a landing page with a hero greeting, recent surveys as one-click cards, and a feature preview grid.

See [Analytics & Reports](./analytics-and-reports.md) for the full reference.

---

## Contacts

Per-admin contact lists with strict isolation — you only see contacts you created or imported. No admin (no matter their role) can see another admin's contacts.

Features:

- **Add a contact** — name, email, phone, company.
- **Import CSV** — paste a CSV blob or upload a file. Headers are auto-detected; you can map columns into name / email / phone / company. Duplicates (by email, scoped to you) are silently skipped.
- **Contact groups** — categorise contacts into named groups. A contact can belong to multiple groups.
- **Search + filter** — search by name/email; filter to a specific group.
- **Bulk actions** — multi-select rows to delete or move into a group.

The data is yours alone. The Contacts page is the source of the audience picker in invitation campaigns.

See [Contacts & Groups](./contacts-and-groups.md).

---

## Invitations

The outreach console. Campaigns + per-campaign recipient management.

The top stats strip shows campaigns / sent / opened / completed across your whole workspace. Below that:

- **Campaign list** (left) — one card per batch, with title, survey, send date, and progress chips (Pending / Sent / Opened / Started / Completed / Bounced).
- **Campaign detail** (right) — recipients table with funnel progress per row, send-reminder + delete actions per row, plus bulk-select for sending reminders or deleting recipients in batches.

The **New campaign** dialog walks through:

1. Pick the survey (server-driven picker — scales past hundreds of surveys).
2. Pick recipient sources — contact groups and/or individual contacts.
3. Customise the invitation email — the wizard pulls the saved `invitation_send` template, lets you tweak subject + body just for this campaign, and shows a live rendered preview.
4. Send.

See [Invitations & Campaigns](./invitations-campaigns.md).

---

## Email Templates

Author the transactional emails that go out automatically.

Templates ship for: invitation, invitation reminder, response receipt to respondent, response notification to author, survey published, survey closed, survey new (admin notify). Each carries:

- **Subject** — supports `{{variable}}` placeholders.
- **Body (HTML)** — full HTML editor with syntax highlighting.
- **Body (text)** — optional plain-text alternative.

The right pane is a live preview rendered through the actual template engine, so what you see is exactly what will be sent. Brand colours, logo, and header/footer come from Settings → Email and are applied automatically; you don't reauthor them per template.

The variable picker at the top lists every placeholder available for the template you're editing.

See [Email Templates](./email-templates.md).

---

## Themes

The two-pane theming workbench:

- **Theme list** (left) — every theme available on this site, including the built-in catalogue and any you've created.
- **Theme editor** (right) — accent colour, surface tones, typography, button radius, and a live preview that updates as you tweak.

Themes ship in matched light + dark pairs — flip the preview toggle to verify both modes look right.

Use this page to set up reusable themes. Per-survey overrides happen on the Builder's Design tab.

See [Themes & customisation](./themes-and-customization.md).

---

## Integrations

The framework dashboard. Two tabs:

- **Active** — your configured integrations across every survey. Per-row: adapter icon, label, sync status badge, last-sync timestamp. Click any row to open the configure pane with Settings / Activity tabs, Test connection button, Enable/Disable toggle, Edit, Delete.
- **Marketplace** — every adapter installed on this site, grouped by category. Click any card to open the new-integration wizard.

The wizard renders entirely from the adapter's declared config schema — you'll see different fields depending on which adapter you pick.

See:
- [Integrations overview](./integrations-overview.md) — concepts: adapters, events, retries, logs.
- [Google Sheets integration](./integrating-survey-with-google-sheets.md) — OAuth setup + per-survey config.
- [Webhook integration](./integration-webhook.md) — universal HTTP POST.
- [Slack integration](./integration-slack.md) — channel notifications.
- [AcyMailing integration](./integration-acymailing.md) — add respondents to mailing lists.

---

## Presets

Reusable answer sets — e.g. "5-point agreement scale", "NPS 0–10 with labels", "common languages list". Once defined, you can apply a preset to any choice-style question (radio / checkbox / dropdown / image / rank / Likert / matrix) in one click from the builder.

Presets are language-aware: define answer labels in your default language and add translations for each enabled site language. When the preset is applied to a translated survey, the correct language version shows up.

The Presets page is a list + editor. Edit one in place; the preview shows how the preset will render as a question.

---

## Settings

Site-wide configuration. Eight sections:

- **General** — workspace name, default privacy setting, response retention.
- **Privacy** — anonymous responses, IP collection, GDPR notices.
- **Appearance** — admin density (compact / medium / airy), default colour mode.
- **Email** — sender identity (from name + address), reply-to, brand colours, logo, header title + subtitle, footer text. Every transactional email picks these up automatically.
- **PDF** — paper size, orientation, header/footer for the per-response PDF export.
- **AI** — shondalai.com account connection, master toggle for AI features, per-feature gates.
- **Google** — one-time OAuth setup for Google Sheets / Drive integrations. 5-step walkthrough with deep-links into Google Cloud Console; once Client ID + Secret are pasted, every new Google Sheets integration becomes a one-click "Connect" flow.
- **Developer** — toggles for verbose logging, raw API access, dev-mode banner.

All settings require `core.admin` on `com_communitysurveys`.

See [Settings reference](./settings-reference.md).

---

## Where things moved (from 7.x)

| 7.x location | 8.x location |
|---|---|
| Surveys → Edit → Questions tab | Builder tab (in the same builder workspace) |
| Surveys → Edit → Reports button | Builder → Results tab, OR Analytics page |
| Components → Community Surveys → Settings (system plugin params) | Settings page in the admin SPA |
| Database queries for integration config | Integrations page → marketplace + wizard |
| `email_templates` PHP override files | Email Templates page (DB-backed, with live preview) |
| Contact import via custom plugin | Contacts page → Import CSV |
| Survey-published notification plugin | Built into Email Templates (`survey_published_user`) |
| Survey results PDF via add-on | Built-in; PDF download per response on the Responses tab |
| AcyMailing audience plugin | Integrations → AcyMailing adapter (framework-managed) |
| Google Sheets via API key in `configuration.php` | Integrations → Google Sheets (OAuth via Settings → Google) |

Existing 7.x data migrates automatically on first run of the 8.x admin — no manual import required.
