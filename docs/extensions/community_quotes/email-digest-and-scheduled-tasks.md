---
id: email-digest-and-scheduled-tasks
title: Email digest and scheduled tasks
sidebar_label: Email digest and scheduled tasks
sidebar_position: 22
---

# Email digest and scheduled tasks

Community Quotes can put a quote in your readers' inboxes every day. A subscriber signs up once, and from then on Joomla's own scheduler mails them the quote of the day, with a link back to the quote page and a one-click unsubscribe. Everything runs on your own site through the bundled task plugin. Nothing is sent to a third-party mailing service.

This page covers the daily digest, how people subscribe, the scheduler task that sends it, and the separate browser-based "Listen" audio feature.

## What the digest is

The digest is a single short email built around the [quote of the day](./quotes-authors-and-categories.md). Each send contains:

- The quote text and its author.
- A "Read this quote on the site" link to the quote page.
- An "Unsubscribe from the daily quote" link in the footer.

The quote of the day is chosen deterministically: it is the same quote for everyone on a given calendar day, drawn from your featured quotes when you have them, otherwise from all published quotes. So a morning digest and the quote of the day on your Quote Wall match.

## Turn the digest on

The digest is off by default. To enable it, open **Components -> Community Quotes -> Settings** and go to the **Email digest** tab.

| Setting | Default | Notes |
| --- | --- | --- |
| Enable digest | Off | Master switch. When off, the scheduler task runs but sends nothing and logs that the digest is disabled. |
| Send hour (0-23) | 6 | The hour of day the digest goes out, in your site timezone. The task fires hourly and holds the send until this hour, so changing it takes effect the same day without re-scheduling. |

The subject line and the whole email design are no longer set here. They live in the **Email templates** editor, described next.

Enabling the digest here is only half the job. The digest is delivered by a Joomla scheduled task, and that task is installed disabled so nothing goes out until you decide it should. See [Enable the scheduler task](#enable-the-scheduler-task).

## Customise the digest email

Community Quotes renders the digest from an editable template, so you control the wording and design without touching code. Open **Components -> Community Quotes -> Email templates** and choose **Daily quote digest**.

The editor gives you:

- A **Subject** line and an **HTML body** you can edit freely. The body is just the inner content; Community Quotes wraps it in a branded header and footer automatically.
- A **placeholders** panel. Click a placeholder to insert it at the cursor. Per-email values include `quote_text`, `author_name`, `author_role`, `quote_source`, `quote_url`, `unsubscribe_url` and `current_date`; brand values such as `site_name` and `primary_color` are filled in for you.
- A **live preview** that renders exactly what recipients will see, wrapped in the branded frame.
- An **enable** toggle for the email type itself (separate from the master digest switch), a **Reset to default** that reverts your edits to the shipped design, and a **Send test** button that mails a sample render to any address so you can check it in a real inbox before turning the digest on.

Clearing the body reverts that template to the shipped default. The branded frame (colours, logo, footer) is driven by the email brand values; the shipped defaults match your Community Quotes accent, and the sender falls back to your Joomla global mail-from address.

## How people subscribe

A subscriber is just an email address with an active or unsubscribed state, stored in your own database. There are two ways an address gets added.

### The digest sign-up module

The bundled module `mod_communityquotes` has a **Digest sign-up** display mode: a small card with an email field and a subscribe button that you can drop into any module position. When a visitor submits it, the address is added as an active subscriber. The form includes a hidden anti-spam field, so automated sign-ups are rejected quietly. Setting the module up is covered in [Modules and plugins](./modules-and-plugins.md).

Anyone can subscribe through this form, signed in or not. If someone subscribes with an address that already exists, their subscription is simply re-activated rather than duplicated.

### Programmatic sign-up

The site also exposes a subscribe endpoint (`api.subscribe`) that validates the email address, rejects submissions that trip the honeypot, and adds or re-activates the subscriber. The digest module posts to this endpoint. It is documented for integrators in the [Developer guide](./developer-guide.md).

## Unsubscribing

Every digest email carries an unsubscribe link in its footer. The link is a one-click action: it uses a private token unique to that subscriber, sets their subscription to unsubscribed, and lands them back on your Quote Wall with a short confirmation message. No login, no form, no account required. Because the link is tokenised, only the person holding that email can unsubscribe that address.

Unsubscribing does not delete the row; it flips the subscriber to an inactive state so future sends skip them. To remove a subscriber entirely, delete them from the subscribers list in the admin (see below).

## Managing subscribers

Your subscriber list lives in the admin. From there you can see who is signed up and remove addresses you no longer want to mail. Subscribers that have unsubscribed remain on the list in an inactive state until you delete them, which gives you a record that they opted out rather than silently vanishing.

## The scheduler task

Delivery is handled by the bundled **Task - Community Quotes** plugin (`plg_task_communityquotes`). It registers a single routine with Joomla's Scheduler:

- **Community Quotes: Daily digest** (task type `communityquotes.digest`) mails the quote of the day to your active subscribers.

The task fires hourly and each run mails up to 200 subscribers who have not yet received today's digest, stamping each one as it goes. On a large list, successive hourly runs page through the rest, so everyone is reached over the day and nobody is mailed twice. A run before the send hour, or one that finds the digest disabled, no published quote for the day, or nobody left to mail today, simply returns without sending, which is normal and harmless.

### Enable the scheduler task

On install, the component seeds a scheduled task row for the digest and leaves it **disabled** so nothing goes out before you are ready. To turn it on:

1. Go to **System -> Manage -> Scheduled Tasks**.
2. Find **Community Quotes - Daily Digest** in the list.
3. Open it, set its status to enabled, and save.
4. Confirm the **Task - Community Quotes** plugin itself is enabled under **System -> Manage -> Plugins** (search `communityquotes`).

If you do not see a seeded task, create one: choose **New**, pick the **Community Quotes: Daily digest** task type, and save. Joomla's scheduler needs to be triggered on your site (through the built-in web-cron or a real system cron) for any scheduled task to fire. See Joomla's own scheduler documentation for that side of the setup.

### When the digest actually sends

The seeded task runs on an hourly interval, and each run holds the send until the **Send hour** you set on the Email digest tab (in your site timezone). So on a normal day the first run at or after your send hour mails the digest, and earlier runs do nothing. Changing the send hour takes effect the same day, with no need to touch the schedule.

One requirement sits outside Community Quotes: Joomla's scheduler must actually be triggered on your site, through the built-in web-cron or a real system cron. If your scheduler is only triggered once a day at a fixed time, the digest goes out then rather than at your send hour. For send-hour timing to be exact, trigger the Joomla scheduler at least hourly. See Joomla's own scheduler documentation for that side of the setup.

### What a run logs

Each execution writes a short line to the task's log so you can confirm it worked. Typical entries include the number of subscribers mailed out of the total, or a note that the digest was disabled, no quote was available, or there were no active subscribers. If mail is not arriving, that log is the first place to look, alongside your Joomla mail settings.

## Audio: the "Listen" feature

Audio playback is unrelated to email but sits nearby because both are ways of consuming a quote hands-free. When enabled, quote pages and cards show a **Listen** control that reads the quote aloud.

| Setting | Default | Notes |
| --- | --- | --- |
| Enable audio | On | Shows the Listen control on quotes. |
| Preferred voice | (empty) | Name of a browser voice to prefer. Blank uses the visitor's system default. |

Playback uses the visitor's own browser speech engine (the Web Speech `SpeechSynthesis` API). The text is spoken locally on the reader's device; no audio is generated on your server and nothing is sent to an external service. Available voices depend on the reader's browser and operating system, so the **Preferred voice** setting is a best-effort hint rather than a guarantee. Whether the Listen control appears at all is also governed by the **Show audio playback** toggle on the [Display and branding tab](./settings-reference.md).

## Deliverability notes

- The digest is delivered through the shared Shondalai core mail service, which falls back to Joomla's own mailer. If mail is not being delivered, check **System -> Global Configuration -> Server -> Mail** first, then use **Send test** in the Email templates editor to confirm delivery.
- Keep the **Notify email** on the Moderation rules tab pointed at a monitored inbox if you also want moderation alerts. That is a separate notification from the digest and is covered in [Submissions and moderation](./submissions-and-moderation.md).
- The subject and body accept the placeholders listed in the Email templates editor. Unknown placeholders render as empty rather than leaking their braces into the email.

## Where to go next

- Place the sign-up card or another quote widget: [Modules and plugins](./modules-and-plugins.md).
- Every option on every tab: [Settings reference](./settings-reference.md).
- How subscriber data is handled: [Privacy and GDPR](./privacy-and-gdpr.md).
- The subscribe and unsubscribe endpoints: [Developer guide](./developer-guide.md).
