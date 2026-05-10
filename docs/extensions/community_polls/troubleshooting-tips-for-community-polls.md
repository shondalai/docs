---
id: troubleshooting-tips-for-community-polls
title: Troubleshooting tips
sidebar_label: Troubleshooting
sidebar_position: 8
---

# Troubleshooting tips

This page collects the questions that come up most often through support. If your issue is not here, open a ticket at [shondalai.com/support](https://shondalai.com/support).

## My poll shortcode shows as plain text in the article

You see `{poll id=12}` rendered literally instead of the embedded poll.

Check three things in order:

1. The **Content - Community Polls** plugin is enabled in **System → Manage → Plugins**.
2. The article is in a category that runs through Joomla's content events. A handful of custom views skip the content-prepare event; in that case the shortcode will not be replaced.
3. Your editor is not converting the curly braces into HTML entities. JCE's "Process HTML Entities" option does this — switch it off, or add the shortcode through the source-view (Toggle editor) and save without flipping back.

If all three are correct and the shortcode still shows literally, paste the relevant article HTML into a support ticket and we will take a look.

## I cannot find the Poll button in the editor toolbar

The button is provided by the **Editor Button - Community Polls** plugin. Open **System → Manage → Plugins**, search for "Community Polls", and make sure the editor-button entry is enabled.

If the plugin is enabled but the button still does not appear, your editor may have a separate "buttons" allow-list. In TinyMCE this lives under **System → Templates → TinyMCE → Set 0 → Toolbar**. Make sure the polls button is present in the chosen set.

## How do I let users vote anonymously?

Open the poll in the admin, switch to the **Voting** tab, and turn on the **Anonymous** toggle. Votes on anonymous polls are recorded without the voter's user ID, IP address, or browser fingerprint, so you can still count them but cannot trace them back to a specific person.

## How do I make a poll private?

Open the poll, switch to the **Privacy** tab, and turn on the **Private** toggle. The component will generate a secret key. Private polls do not appear in any public listing — visitors can only reach them through the URL with the secret key appended (the admin shows you the full URL after saving).

## How do I let only certain user groups submit polls from the front end?

Submission is gated by the **Create** permission on the component. Open **System → Manage → Components**, find Community Polls, click **Options**, switch to the **Permissions** tab, and grant **Create** to the user groups you want.

## Submitted polls do not appear immediately

That is the moderation queue working as intended. By default, polls submitted from the front end land in a pending state until an admin approves them.

If you want auto-publish without moderation, turn on the equivalent permission in the **Permissions** tab. If you want moderation to stay on but want a wider notification list, edit the recipient list in **Plugin Manager → Plugins → Community Polls - Polls → Notifications**.

The moderation email itself includes one-click **Approve** and **Reject** links that work without an admin login. The link tokens are single-use.

## Notification emails are not arriving

Check, in this order:

1. **Plugin Manager → Plugins → Community Polls - Polls** is enabled, and the relevant notification toggles (new poll, new vote, moderation) are on.
2. **System → System Information → Configuration → Mail** confirms Joomla can send mail at all. Send a test mail from there first.
3. **Plugin Manager → Plugins → Community Polls - Polls → Notifications** has a recipient address (defaults to the site mail-from address when blank).
4. Check the spam folder of the recipient address.

If Joomla's test mail works but Community Polls notifications do not, open the **Email templates** page in the admin sidebar, pick the relevant template, and use the test-send field to send yourself a copy. The dialog will surface any error coming back from the mailer.

## My customised email looks different from what I see in the preview

The preview iframe runs your template through the same pipeline used to send the actual email — header chrome, variable substitution, the lot. Inbox rendering is more conservative because mail clients strip styles, block images by default, and re-flow tables on small screens.

A few common causes of preview-vs-inbox drift:

- Gmail strips `<style>` blocks above a certain length. The default base.html keeps the inline styles small enough; if you add a lot of new CSS, expect Gmail to discard it.
- Outlook on Windows ignores most modern CSS. The default templates already use table-based layouts and inline styles for that reason.
- Images are blocked by default in many clients. Make sure every image has an `alt` attribute and a sensible width/height so the layout does not collapse.

## AI helpers in the poll editor are greyed out

The AI buttons inside the poll editor only become live once two conditions are true:

1. **Settings → AI services → Enable AI helpers** is on.
2. The site is connected to the Shondalai AI service (the same Settings → AI services page has a connect button).

A single Shondalai AI subscription covers every Shondalai component on your site, so connecting once unlocks the helpers everywhere. If your subscription has lapsed, the buttons stay live but the calls return a "subscription expired" error.

## Component dashboard is blank or stuck on the loading spinner

This usually means the React bundle failed to load. The most common causes:

- A browser extension is blocking the bundle (an aggressive ad-blocker on a non-public admin URL).
- Your Joomla cache is serving a stale asset version after an upgrade. Open **System → Maintenance → Clear Cache** and clear all caches.
- Your CDN is fronting `/administrator/components/com_communitypolls/media/` with the wrong cache headers. Purge the CDN.

If clearing caches does not help, open the browser's developer console on the dashboard page and copy any red errors into a support ticket.

## I upgraded from version 6 and my customised email templates are gone

Version 7 stores email templates as files in `media/com_communitypolls/emails/`, not as database rows. The upgrade installer drops the old `#__communitypolls_email_templates` table.

If you had heavily customised templates in v6 and want to carry the changes forward, contact support — we can help you port the customisations into the new file format. The defaults shipped with v7 are already branded with your site name and colours, so most installs do not need to do anything special after upgrading.

## A setting I changed in Settings does not seem to take effect on the front end

The settings page writes to the database immediately on save, but the React app on the front end caches the configuration object until the page is reloaded. After saving, do a hard refresh (Ctrl+F5 / Cmd+Shift+R) on the public page to pick up the new values.

If a hard refresh does not help, check that you are looking at the right setting. The settings are split across several sections — for example, the polls-listing column count is under **Display**, not under **Defaults**.

## Poll URLs include `?option=com_communitypolls` instead of clean SEF URLs

Joomla's SEF URLs require:

1. **System → Global Configuration → Site → Search Engine Friendly URLs** to be on.
2. Mod_rewrite (or your web server's equivalent) configured so the `.htaccess` file is in effect.
3. A menu item pointing at the Community Polls views — without one, Joomla cannot build a clean URL.

Check the [Quick start guide](./quick-get-started-guide-for-community-polls.md#4-create-a-menu-item) for how to create the menu item.
