---
id: emails
title: Email Notifications
sidebar_label: Emails
sidebar_position: 15
---

# Email Notifications

Rewardify can email members when something happens to their rewards: a redemption is confirmed, a badge is earned, a level is reached, points are about to expire, and more. You control every one of these from **Components -> Rewardify -> Email templates**, and the look that wraps them all from **Settings -> Email branding**.

> **Before any email can be delivered:** Rewardify sends through Joomla's global mail settings (**System -> Global Configuration -> Server -> Mail**). If Joomla mail is not configured, no Rewardify email is delivered, no matter how the templates are set up. The **From email** falls back to your Joomla global mail-from address when you leave it blank.

## How emails fit together

Each email has two parts:

- **The content** (subject and body) of the specific email, for example "Points expiring soon". You edit this on the **Email templates** screen.
- **The wrapper** (header logo, brand colours, footer) that surrounds every email. You set this once in **Settings -> Email branding**.

When an email is sent, Rewardify takes the content for that template and wraps it in the branded header and footer, then fills in the placeholders (member name, points amount, dates, links) for the member who is receiving it.

> Member-facing buttons and links in emails (for example "View your rewards" or "Redeem before they expire") are built as front-end SITE links using your site's SEF settings. They point members at the Rewardify menu item on the public site, not the admin area.

## The Email templates screen

Open **Components -> Rewardify -> Email templates**. The screen lists every email Rewardify can send, grouped into four sections:

- **Redemptions**: emails about store redemptions.
- **Points & balance**: emails about points being earned or expiring.
- **Achievements**: emails about badges, levels and campaigns.
- **Account**: onboarding and account emails.

Each row shows the email's title, a short description, an on/off toggle, and an **Edit** button. A row marked **Customised** means you have overridden the shipped default for that email.

### The catalogue of emails

| Email | Section | Sent on by default | What it is for |
|-------|---------|:------------------:|----------------|
| Redemption confirmed | Redemptions | On | A redemption is confirmed and ready to use (points deducted, code issued). |
| Redemption received | Redemptions | On | A redemption request was received and is awaiting fulfilment or approval. |
| Reward shipped | Redemptions | On | A physical reward has shipped, with tracking details. |
| Redemption could not be fulfilled | Redemptions | On | A redemption failed and the held points were returned to the member. |
| Points awarded | Points & balance | Off | A member earned points. Off by default to avoid noise; turn on for high-value awards. |
| Points expiring soon | Points & balance | On | Some of a member's points are about to expire, so they can redeem in time. |
| Points expired | Points & balance | Off | Some of a member's points have expired. |
| Badge earned | Achievements | On | A member earned a badge or achievement. |
| Level up | Achievements | On | A member's reputation crossed into a new level. |
| Campaign completed | Achievements | On | A member completed a campaign and earned its reward. |
| Welcome to rewards | Account | Off | Onboarding email introducing the rewards programme to a new member. |

> "Off by default" means the email exists but is never sent until you turn it on. **Points awarded** and **Points expired** are off on purpose: if you reward members for many small actions, an email for each one quickly becomes noise. Turn **Points awarded** on only if you reserve it for high-value awards.

The **Points expiring soon** and **Points expired** emails are triggered by the scheduled tasks, not by a live action, so they only go out if those tasks are running. See [Scheduled Tasks](scheduled-tasks.md). When and how points expire is controlled in **Settings -> Point expiration** (see the [Settings Reference](settings.md)).

## Turning an email on or off

You can toggle an email from two places:

1. On the **Email templates** list, click the toggle in the email's row.
2. Inside the editor, use the **Enabled** toggle at the top right.

When an email is **off**, it is never sent, no matter what happens. Turning it back on takes effect immediately.

## Editing an email

Click **Edit** (or the email's title) to open the editor. The editor has two columns: the editing fields on the left, and a live preview on the right.

You can change:

- **Subject**: the email's subject line. Placeholders work here too, so a subject like `You earned {{points_amount}} {{currency_label}}` is filled in per member.
- **HTML body**: the inner content of the email. This is just the content, not the header and footer; Rewardify wraps it in the branded header and footer when it sends.

### Live preview

The right-hand column shows a live preview that updates as you type (after a short pause). It shows the **From** name and address, a sample **To** recipient, the subject, and the full rendered email inside the branded wrapper. Use the **Desktop** and **Mobile** buttons above the preview to check how the email looks at each width.

The sample values in the preview (for example "Marta Linde", a points figure, a date) are example data so you can see the layout. Real member data is filled in at send time.

### Placeholders (merge variables)

The body and subject can include placeholders that Rewardify fills in for each member at send time. In the editor, the **Placeholders** panel on the left lists every placeholder available, split into:

- **This email**: placeholders specific to the email you are editing.
- **Brand**: the shared brand placeholders (site name, logo, colours, footer) that come from your **Email branding** settings.

Click any placeholder to insert it at your cursor. A placeholder looks like `{{member_name}}`. A few placeholders (for example the header and logo HTML) insert as `{{{name}}}` with triple braces, which means their value is HTML and is inserted as-is rather than being escaped.

The placeholders available depend on the email. For example:

- **Points awarded** offers `{{member_name}}`, `{{points_amount}}`, `{{currency_label}}`, `{{reason}}`, `{{balance_after}}` and `{{dashboard_url}}`.
- **Badge earned** offers `{{member_name}}`, `{{badge_name}}`, `{{badge_description}}`, `{{points_reward}}`, `{{currency_label}}` and `{{badges_url}}`.
- **Level up** offers `{{member_name}}`, `{{level_name}}`, `{{previous_level}}`, `{{level_perk}}` and `{{dashboard_url}}`.
- **Points expiring soon** offers `{{member_name}}`, `{{points_expiring}}`, `{{currency_label}}`, `{{expires_on}}`, `{{balance_after}}` and `{{catalog_url}}`.

Every email also has a `{{preheader}}` placeholder. The preheader is the short preview text that some mail apps show next to the subject in the inbox.

> The exact list of placeholders for an email is always shown in the **Placeholders** panel for that email. Use what is listed there. A placeholder that the email does not provide will not be filled in.

### Saving, resetting and the default

- **Save** stores your changes. It is only available once you have made an edit.
- **Reset to default** appears only when you have customised the email (the **Customised** chip is showing). It reverts the email's subject and body back to the version Rewardify shipped and removes your override.
- If you clear the **HTML body** completely and save, the email falls back to its shipped default content. This is a quick way to undo a content change without losing the rest of your work.

## Email branding (the wrapper)

Open **Settings -> Email branding**. These settings control the header and footer that wrap **every** Rewardify email, so you set your brand once rather than per email.

### Sender

- **From name** and **From email**: the name and address the email is sent from. If you leave these blank, Rewardify uses your Joomla site's global mail sender settings.

### Header

- **Logo URL**: the logo image shown at the top of every email. You can give a full URL, or a path relative to your site, which Rewardify turns into a full URL. If you do not set a logo, Rewardify draws a simple coloured mark using your brand primary colour instead.
- **Header title** and **Header subtitle**: the wording shown beside the logo in the header.

### Brand colours

- **Primary (buttons & links)**: used for buttons and accents (default `#2563EB`).
- **Body text**: the main text colour (default `#1A1A1A`).
- **Page background**: the colour behind the email card (default `#ECEAE6`).
- **Email card background**: the colour of the email card itself (default `#FFFFFF`).

Colours are plain hex values such as `#2563EB`. Pick colours with enough contrast so the text stays readable.

### Footer

- **Footer signature**: the text shown in the footer of every email, for example a programme name or a short sign-off.

After you save your branding, open any email in the editor and look at the live preview to confirm the header, colours and footer look the way you want. Because the wrapper is shared, a change here updates the look of every email at once.

## Testing your emails

There is no separate "send a test" button. Instead, use the **live preview** in the email editor to check both the content and the branding before you rely on an email. The preview renders the real branded wrapper with your current branding settings, so what you see is what members receive. Check it on both **Desktop** and **Mobile**.

To confirm a real email actually sends, make sure the email is **Enabled**, then perform the action that triggers it (for example confirm a redemption for a test member, or use **Manual adjustments** to grant points if you have **Points awarded** turned on). The expiry emails only send when the **expire** scheduled task runs; see [Scheduled Tasks](scheduled-tasks.md).

## A note on member consent

Rewardify emails are reward notifications tied to a member's own account activity. Member consent for the leaderboard and the handling of member data are separate concerns covered on the [Privacy & Member Data](privacy.md) page. For all of the email settings discussed here, see also the [Settings Reference](settings.md).
