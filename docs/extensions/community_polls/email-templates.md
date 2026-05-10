---
id: email-templates
title: Customise notification emails
sidebar_label: Email templates
sidebar_position: 3
---

# Customise notification emails

Community Polls 7 ships every notification email as an HTML file you can edit, preview, and test from the admin. Three templates come with the install:

- **New poll** — sent to admins when a new published poll appears on the site.
- **New vote** — sent to the poll author (and optionally admins) when a vote is cast.
- **Poll pending moderation** — sent to admins when a front-end submission needs approval. Includes one-click Approve and Reject links.

A shared **base wrapper** handles the header, footer, and brand chrome so the per-event templates stay short and easy to read.

## Where they live

The templates are stored as `.html` files under:

```
media/com_communitypolls/emails/
├── base.html              ← shared wrapper
├── new_poll.html
├── new_vote.html
├── moderate_poll.html
└── templates_config.json  ← per-template publish flags
```

A pristine baseline of every template ships under `administrator/components/com_communitypolls/default_emails/`. Reset-to-default copies from there. You should not need to touch either folder by hand — the admin UI covers everything.

## Open the templates manager

In the admin sidebar, click **Email templates**. Each template appears as a card showing its name, the derived subject line, and an **Enabled / Disabled** toggle. Two buttons sit on every card:

- **Preview** (paper-plane icon) — opens a full-screen preview against realistic sample data, with a desktop / mobile viewport toggle and a test-send field.
- **Edit** (pencil icon) — opens the editor.

## Edit a template

The editor is a full-screen dialog with two tabs:

- **HTML editor** — the source on the left, a **Variables** panel on the right. Click any variable to insert it at the cursor.
- **Live preview** — a sandboxed iframe that re-renders every time you stop typing for a moment.

The footer has four actions:

- **Send test** — sends a copy of the current draft to any email address you type in the field.
- **Reset to default** — restores the file from the pristine baseline. Asks you to confirm first.
- **Close** — leaves without saving.
- **Save changes** — writes the draft to disk.

Edits write straight to `media/com_communitypolls/emails/{name}.html`, so you can also edit the files in your IDE if you prefer; the manager picks up file-system changes on the next page load.

## Variables

Each template ships with a leading HTML comment block listing the variables that template can use. The comment block is stripped before the email is sent, so it does not show up in the recipient's inbox — it is purely there to document the template.

Some variables are filled by the per-event payload (the poll title, the voter name, the URL of the poll). Others are inherited from the **Email branding** settings (see below) and are available in every template.

`{#if VARIABLE}...{/if}` blocks let you wrap optional sections — they render only when the variable is non-empty.

### Variables in every template

| Variable | What it contains |
| --- | --- |
| `{SITE_NAME}` | Your site name from Joomla's global configuration. |
| `{SITE_URL}` | The site root URL with trailing slash. |
| `{CURRENT_YEAR}` | Today's year — useful for the footer copyright line. |
| `{RECIPIENT_NAME}` | Display name of the recipient, derived from their email when the recipient is an admin list. |
| `{EMAIL_BRAND_COLOR}` and the rest of `{EMAIL_*}` | The configured brand chrome (logo, colours, header text, footer text). |

### Variables specific to each template

The per-template variables are documented in the comment block at the top of each template file. The Variables panel in the editor mirrors that list.

## Brand the header and footer once

Every template inherits the same header chrome: a logo (or wordmark when no logo is set), an optional bold title, an optional smaller subtitle, a hairline divider, and a footer with your site name and copyright line.

You configure this once in **Settings → Email branding**. The fields are:

- **Header logo URL** — paste a media-manager URL or any URL serving a square or wide PNG/SVG. Max height 48 pixels. Leave blank to use the site name as a wordmark.
- **Header title** — bold line next to the logo. Leave blank to use the site name. Use `{site_name}` to interpolate.
- **Header subtitle** — smaller line under the title. Leave both title and subtitle blank for a centred-logo layout instead.
- **Brand accent** — colour for buttons, links, and the wordmark fallback.
- **Body text colour** — default colour for paragraphs.
- **Page background** — the colour outside the email card.
- **Card background** — the colour of the email card itself.
- **Footer message** — optional copy above the site link in the footer. Use `{site_name}` to interpolate.

The colour pickers accept hex values directly if you have brand guidelines. Save and the next email rendered (preview, test send, or actual notification) picks up the new chrome immediately.

## Disable a specific template

If you want to keep the component sending emails but skip one specific notification (for example, you want admin alerts for new polls but not for every vote):

1. Open **Email templates** in the admin sidebar.
2. Click the **Enabled** pill on the template you want off — it flips to **Disabled**.
3. The template stays editable, but no emails for that event will go out until you toggle it back on.

The toggle writes to `templates_config.json` and applies immediately.

## Send a test email

Both the preview dialog and the editor dialog have a test-send field at the bottom.

1. Open the template (preview or edit).
2. Type any email address into the field.
3. Click **Send test**.

The component renders the template against sample data, sends through whatever mailer Joomla is configured to use, and reports success or the underlying mailer error inline. Use this as the final check before relying on a customised template in production.

## Tips for editing the HTML

A few things to remember when editing email HTML:

- **Inline styles win.** Mail clients strip `<style>` blocks aggressively. The default templates use inline `style="..."` attributes for that reason. If you add new visual treatments, inline them.
- **Tables are still the safest layout primitive in email.** The default templates use a single 600px-wide table for the card. Stick with that pattern when adding rows; modern flexbox layouts will not render in Outlook.
- **Conditional sections** use the `{#if VARIABLE}...{/if}` syntax. The block renders only when the variable is non-empty.
- **The `base.html` wrapper** controls the global look. You can edit it from the **Settings → Email branding** page, but smaller per-template tweaks are usually enough.
- **Raw HTML in variables** is allowed for the brand chrome variables (`{EMAIL_HEADER_HTML}`, `{EMAIL_FOOTER_TEXT}`, etc.) and for `{POLL_DESCRIPTION}`. Other variables are HTML-escaped before substitution to prevent injection — voter-supplied text is therefore safe to interpolate anywhere.

## Add a new template

The component renders any `.html` file dropped into `media/com_communitypolls/emails/`. To add your own:

1. Copy one of the existing templates as a starting point.
2. Save it under a new filename (lower-case, dashes or underscores only, no spaces).
3. The template will appear in the manager on the next page load.

To actually have something send your new template, you will need a plugin that subscribes to a Community Polls event and calls the `EmailTemplateService` rendering API. See [Plugin events](./extend-community-polls-using-plugin-events.md) for the plugin pattern.
