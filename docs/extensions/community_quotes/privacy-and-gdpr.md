---
id: privacy-and-gdpr
title: Privacy and GDPR
sidebar_label: Privacy and GDPR
sidebar_position: 23
---

# Privacy and GDPR

Community Quotes is built to keep the amount of personal data it holds small, and to keep all of it on your own server. There is no third-party quotes service, no external analytics, and no account you have to trust with your readers' data. This page explains exactly what the component stores, where the interactive features do their work, and how the privacy settings behave.

## The short version

- Everything Community Quotes stores lives in your own Joomla database, under tables with the `#__cquotes_` prefix.
- The interactive extras that could leak data to third parties, spoken audio and share images, run entirely in the visitor's browser instead. See [In-browser features send nothing out](#in-browser-features-send-nothing-out).
- Contributing (reacting, commenting, bookmarking, following) requires a Joomla login in this release, so the component ties those actions to a Joomla user account rather than to loose personal details.
- The one exception is digest sign-up, which only ever stores an email address and a private unsubscribe token.

## The privacy setting

Community Quotes keeps its privacy controls in one place. Open **Components -> Community Quotes -> Settings** and go to the **Privacy** tab.

| Setting | Default | Notes |
| --- | --- | --- |
| Allow anonymous reactions | Off | Reserved switch for allowing reactions without a login. In this release reactions require a Joomla login regardless of this setting, so leaving it off matches the actual behaviour. |

That is the whole Privacy tab. Most of what protects privacy in Community Quotes is a design choice rather than a toggle, which the rest of this page describes.

:::note
In this release, reacting to a quote requires a signed-in Joomla user. A guest who clicks a reaction is prompted to log in. The **Allow anonymous reactions** setting exists for a future release and does not open reactions to guests today, so you can safely leave it off.
:::

## What Community Quotes stores about people

Every piece of personal data below is written to your own database and nowhere else. Community Quotes creates no rows for a visitor who only reads quotes.

| Feature | What is stored | Tied to |
| --- | --- | --- |
| Reactions (inspired, agree, think, disagree) | The reaction and a timestamp | The Joomla user id |
| Comments and discussion | The comment text and a timestamp | The Joomla user id |
| Comment votes | The vote and a timestamp | The Joomla user id |
| Bookmarks | Which quote was saved | The Joomla user id |
| Follows (authors and collections) | What is followed | The Joomla user id |
| Reports | The reason text and a timestamp | The Joomla user id (0 when reported without login) |
| Submitted quotes | The quote and its metadata | The Joomla user id of the submitter |
| Digest subscribers | An email address and a private unsubscribe token | An email address (and a user id when a signed-in member subscribes) |

Because reactions, comments, votes, bookmarks, follows, and submissions are keyed to the Joomla user id, they are covered by the account the person already has on your site. There is no separate Community Quotes profile and no shadow account.

### No IP addresses on new data

Community Quotes does not store IP addresses against reactions, comments, or submissions. If you migrate from the legacy version 1 component, the old `ip_address` column on quotes is deliberately dropped and not carried across. See [Migrating from version 1](./migrating-from-version-1.md).

## Digest subscribers and consent

The [daily digest](./email-digest-and-scheduled-tasks.md) is the one feature that stores an email address for someone who may not have a Joomla account. It is designed to be low-friction and easy to leave:

- **Opt-in.** An address is only added when someone submits the sign-up form or a signed-in member subscribes. Nobody is subscribed automatically.
- **Anti-spam sign-up.** The sign-up form carries a hidden honeypot field, so automated submissions are rejected without storing anything.
- **One-click, tokenised unsubscribe.** Every digest email carries an unsubscribe link built from a private token unique to that subscriber. Following it deactivates that subscription with no login and no form. Because the link is tokenised, only the holder of that email can unsubscribe that address.
- **Minimal data.** The subscribers table holds the email address, the unsubscribe token, an active or unsubscribed state, and, when a logged-in member subscribed, their user id. Nothing else.

If you want the sign-up form to link to your site's privacy policy, place the standard Joomla privacy consent alongside it in the module position, or link your policy from the surrounding module content.

## In-browser features send nothing out

Two headline features could, in other products, involve sending a quote to an external service. In Community Quotes they run on the reader's own device:

- **Listen (text to speech).** The Listen control reads a quote aloud using the visitor's browser speech engine (the Web Speech `SpeechSynthesis` API). The text is spoken locally; no audio is produced on your server and nothing is sent to a third party. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md) for the audio settings.
- **Share cards.** The shareable quote image is drawn in the browser on an HTML canvas and downloaded straight to the reader's device. No image is uploaded anywhere and no external image service is involved.

## Optional AI verification and your data

Community Quotes can optionally use an AI attribution check when you enable it on the **AI verification** settings tab. This is off by default. When it is off, attribution checks fall back to a local heuristic that never leaves your server.

When AI verification is on, the quote text and author name being checked are sent to the connected Shondalai AI service so it can return a confidence verdict. This happens only for the text an author or moderator is actively verifying, and only while the feature is enabled. If you would rather no quote text ever leaves your server, leave AI verification off. The feature and its thresholds are described in the [Settings reference](./settings-reference.md).

## Handling data requests

Community Quotes stores its data in clearly named `#__cquotes_` tables, all keyed to the Joomla user id (except subscribers, which are keyed to an email address). That makes subject-access and erasure requests straightforward to fulfil:

- **Locate a person's data** by their Joomla user id across the reactions, comments, comment votes, bookmarks, follows, reports, and quotes tables, and by email across the subscribers table.
- **Erase a subscriber** by removing their row from the subscribers list in the admin, or let them use the one-click unsubscribe link, which deactivates the subscription.
- **Erase contributions** by deleting or trashing the person's quotes and comments from the admin, which also updates the denormalised counters.

:::note
Community Quotes does not ship a Joomla privacy plugin, so its data is not yet wired into Joomla's automated privacy export and removal flow. Fulfil requests through the admin screens and, where needed, directly against the `#__cquotes_` tables. If your site is subject to GDPR or similar rules, record this in your data-processing notes.
:::

## Anonymising a removed contributor

When you delete a Joomla user, their historical reactions, comments, and quotes may still reference the now-missing user id. Decide up front whether such contributions should be deleted along with the account or kept as anonymous history, and apply that consistently. Deleting a person's quotes and comments from the Community Quotes admin removes the visible content; the reaction, vote, follow, and bookmark rows can be cleared directly if you need a full erasure.

## Privacy checklist for going live

- Decide whether to run the digest, and if so, place the sign-up alongside a link to your privacy policy.
- Leave **Allow anonymous reactions** off (its current effect).
- Leave **AI verification** off unless you accept that verified quote text is sent to the AI service.
- Confirm the **Notify email** on the Moderation rules tab points at a monitored, appropriate inbox, since moderation alerts can contain submitted quote text. See [Submissions and moderation](./submissions-and-moderation.md).
- Note in your own data-processing records that Community Quotes data is held in `#__cquotes_` tables and handled through the admin rather than Joomla's automated privacy flow.

## Where to go next

- The digest, subscribers, and audio: [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
- Reactions, comments, and follows: [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).
- Every setting in one place: [Settings reference](./settings-reference.md).
- What the migration keeps and drops: [Migrating from version 1](./migrating-from-version-1.md).
