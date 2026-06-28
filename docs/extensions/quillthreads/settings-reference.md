---
id: settings-reference
title: Settings reference
sidebar_label: Settings reference
sidebar_position: 4
---

# Settings reference

Every option lives on one page: **Components → QuillThreads → Settings**. The page is split into tabs that match the groups below. Permissions are the exception; they are managed through Joomla's own permissions screen and are covered in [Permissions](./permissions.md).

You do not need to set anything to start. Defaults are listed so you know what you are getting.

## General

Core behaviour and presentation of the thread.

| Setting | Default | Notes |
| --- | --- | --- |
| Enable comments | On | Master switch. When off, no article renders a thread. |
| Thread mode | Threaded | Nested replies, or a flat chronological list. |
| Maximum nesting depth | 4 | How deep replies can nest (1 to 10). Deeper replies attach at the limit. |
| Comments per page | 20 | Top-level threads loaded per page (5 to 100). |
| Default sort order | Newest first | Newest, oldest, or top (most upvoted). |
| Lazy-load the thread | On | Load comments only when the reader scrolls near them. |
| Colour theme | Auto | Auto follows the device, or force light or dark. See [Appearance](./appearance-and-theming.md). |
| Accent hue | 280 | An OKLCH hue (0 to 360) that drives the accent colour. |

## Posting

Who can comment, how comments are written, and what they can contain.

| Setting | Default | Notes |
| --- | --- | --- |
| Who can comment | Everyone | Guests and registered users, or registered users only. |
| Allow guest comments | On | When on, visitors who are not logged in can post with a name and email. |
| Comment formatting | Plain text | Plain text, Markdown, or limited HTML. Every body is sanitised regardless. |
| Edit window (minutes) | 15 | How long an author may edit their own comment. 0 disables editing. |
| Maximum length | 5000 | Characters per comment. 0 means no limit. |
| Maximum links per comment | 2 | Extra links are unwrapped to plain text. |
| Enable up/down votes | On | Adds vote arrows and the "Top" sort. |
| Enable emoji reactions | Off | Adds emoji reactions to each comment. |
| Enable attachments | Off | Lets commenters attach files, stored through the Shondalai Core storage service. |

## Moderation

How new comments are held, approved, and auto-actioned. The full workflow is in [Moderation](./moderation.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Moderation mode | Hold guest comments only | Hold everything, guests only, a user's first comment only, or publish immediately. |
| Auto-approve registered users | Off | Skip the queue for signed-in members. |
| Auto-approve after N approved comments | 3 | Trust a user automatically once they have this many approved comments. 0 disables. |
| Hold comments containing links | On | Send link-bearing comments to the queue. |
| Auto-unpublish after N reports | 3 | Hide a comment once it reaches this many open reports. 0 disables. |
| Report reasons | spam, harassment, off_topic, inappropriate, other | One reason key per line. |

## Anti-spam

Honeypot, rate limits, and content filters. See [Anti-spam](./anti-spam.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Honeypot field | On | A hidden field that bots fill and humans never see. |
| Minimum dwell time (seconds) | 3 | Reject submissions faster than this. Bots fill forms instantly. |
| Minimum seconds between comments | 30 | Per-author throttle. |
| Max comments per hour | 10 | Per-author cap. |
| Max comments per day | 50 | Per-author cap. |
| Blocked words | (empty) | One word or phrase per line. Matching comments are held or rejected. |
| Blocked link domains | (empty) | One domain per line. |
| CAPTCHA plugin | (none) | The Joomla CAPTCHA plugin element to require for guests. |

## Privacy

Consent, IP handling, and data retention. See [Privacy and GDPR](./privacy-and-gdpr.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Require privacy consent | On | Show a consent checkbox linked to your policy. |
| Privacy policy URL | (empty) | The page the consent prompt links to. |
| Store commenter IP address | Store hashed | Do not store, store hashed, or store in plain text. |
| IP retention (days) | 60 | After this many days, IP data is anonymised. 0 keeps it indefinitely. |
| Anonymised display name | Deleted user | The name shown in place of a removed commenter. |

## Notifications

Email notifications and the branding applied to them. See [Email and notifications](./email-and-notifications.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Notify moderators of new comments | On | Email moderators when a comment needs attention. |
| Moderator email addresses | (empty) | One address per line. Blank uses the site admins. |
| Notify the article author | On | Email the author when their article gets a comment. |
| Queue email for background sending | On | Send through the Shondalai Core email queue rather than inline. |
| Email brand name | (empty) | Shown in the email header. |
| Email brand subtitle | (empty) | Optional line under the brand name. |
| Email brand logo | (empty) | Logo shown in the email header. |
| Email brand colour | #4f46e5 | Accent colour used in emails. |
| Email footer text | (empty) | Footer line in every notification. |
| Support URL | (empty) | Linked from the email footer. |

## AI moderation

AICore-powered scoring and summaries. This is optional and requires a connected shondalai.com account. See [AI moderation](./ai-moderation.md).

| Setting | Default | Notes |
| --- | --- | --- |
| Enable AI moderation | Off | Score comments with the connected AI service. |
| Scan new comments on post | On | Score each comment as it is posted. Off scores only via the background task and the moderator button. |
| Let AI auto-hold comments | Off | Hold a comment automatically when it scores above the threshold. AI never deletes. |
| Auto-hold score threshold | 70 | Comments scoring at or above this (0 to 100) are held when auto-hold is on. |
| Show AI discussion summaries | On | A short public summary once a thread has enough comments. |
| Summary threshold | 5 | Minimum published comments before the summary appears. |
| Refresh after new comments | 5 | Regenerate the summary after this many more published comments. |

## Developer

For working on the bundled React apps. Leave these off on a live site. See [Troubleshooting](./troubleshooting.md) if you ever see a "dev server not reachable" notice.

| Setting | Default | Notes |
| --- | --- | --- |
| Vite dev mode | Off | Load the React apps from a Vite dev server instead of built assets. |
| Dev mode scope | Admin + Site | Which side loads from the dev server. |
| Dev server URL | http://localhost:5182 | Where the Vite dev server is running. |

## Saving

Changes apply as soon as you save. There is no separate publish step. If a setting does not seem to take effect on the front end, do a hard refresh to clear the browser cache of the comment assets.
