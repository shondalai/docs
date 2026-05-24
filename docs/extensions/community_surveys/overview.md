---
id: overview
title: Community Surveys
sidebar_label: Overview
sidebar_position: 0
---

# Community Surveys

A complete survey platform for Joomla. Build surveys with 30+ question types, distribute them by link or email campaign, collect responses, and analyse the results — all from a single admin workspace inside your Joomla install.

Community Surveys 8 is a ground-up rebuild of the legacy 7.x branch. The admin runs as a single-page application inside Joomla's `administrator` area; survey responses still live in your own database, your branding stays consistent, and nothing leaves your site unless you wire up an integration that says otherwise.

## What you can do with it

- **Author surveys** visually with a drag-and-drop builder, 30+ question types (choice, grid, NPS, slider, file upload, signature, location, …), conditional logic, multi-page flow, and live mobile/desktop preview.
- **Theme every survey** to match your brand. Pick from a library of pre-built themes, tweak per-survey colour and typography overrides, or author your own theme from scratch in the Theming page.
- **Translate** into any Joomla content language. The translation editor sits side-by-side with the source survey so you can see exactly what you're translating.
- **Distribute** four ways: public link, Joomla menu item, embed in a Joomla article, or invite-only campaign emails sent to your contacts.
- **Manage contacts** — import from CSV, organise into groups, send targeted invitations. Each admin only sees their own contacts (strict per-user isolation).
- **Customise transactional emails** — every notification (invitation, reminder, response receipt, survey published, …) ships as a template with live preview and a brand-driven header/footer.
- **Analyse responses** with a five-tab analytics dashboard: KPIs and timelines on Overview, per-question drill-downs and free-text browsing on By Question, breakdowns by completion/duration/language on Segments, two-question matrices on Cross-tab, and a full responses table with per-row PDF + bulk CSV export on Responses.
- **Integrate** with the rest of your stack via the integration framework. Built-in adapters for Webhook, Slack, Google Sheets, and AcyMailing; third-party adapters can be added via Joomla plugins.
- **AI-assisted authoring** (optional) — when connected to a shondalai.com account, the builder offers one-click question generation, answer suggestions, and bulk translation.

## What's different in v8

If you're upgrading from 7.x, the headlines:

- The admin is a modern single-page app — every action is faster, every screen has a global search, and form errors surface inline instead of as page-reload toasts.
- The survey builder is fully visual. No more "build the survey, then theme it, then test it" cycle — the preview updates as you author.
- Analytics ships out of the box (no add-on required).
- Email templates are admin-editable with a live preview iframe.
- Integrations use a pluggable framework — the old hard-coded Google Sheets and AcyMailing handlers have been replaced with adapter classes that share a common contract, with new adapters (Slack, Webhook) added in v8 and the door open for third-party plugin contributions.
- A new "Responses" table per survey lets you browse, view, delete, and export individual responses or the whole set as CSV.

## Getting started

If this is your first install, start with [Installation & Configuration](./installing-and-configuring-community-surveys.md), then the [Quick Start Guide](./quick-get-started-guide-for-community-surveys.md).

Already running 7.x? The installer detects your existing data and migrates it forward — all surveys, questions, responses, contacts, and email templates transfer cleanly. Read the [Admin Tour](./admin-tour.md) to learn where your familiar features moved.

## Documentation map

- **Getting started** — install the extension, take the admin tour, build your first survey.
- **Creating surveys** — the builder, themes, question types, logic, translations.
- **Distribution** — public links, menu items, embedded articles, invitation campaigns.
- **Contacts & email** — the contacts page, contact groups, email templates.
- **Analytics & reports** — the five-tab analytics page, response browsing, CSV export.
- **Integrations** — the framework overview plus per-adapter guides (Webhook, Slack, Google Sheets, AcyMailing).
- **Configuration** — every setting documented, including the one-time Google OAuth setup.
- **Advanced** — extending Community Surveys with plugins, custom adapters, custom themes.
- **Help & support** — FAQs, changelog, support channels.
