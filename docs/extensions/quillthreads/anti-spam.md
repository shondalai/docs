---
id: anti-spam
title: Anti-spam
sidebar_label: Anti-spam
sidebar_position: 8
---

# Anti-spam

The goal of QuillThreads' anti-spam is simple: you should spend your time moderating real people, not cleaning up after bots. Several layers work together, most of them invisible to genuine commenters. They are configured on **Settings → Anti-spam**.

## The honeypot

A honeypot is a form field that is hidden from people but visible to the simple bots that fill in every field they find. A real visitor never sees it, so they never fill it. A bot does, and its comment is quietly rejected.

The honeypot is **on by default** and there is nothing to configure beyond the toggle.

## Dwell time

Humans take a few seconds to read and type. Bots submit instantly. The **Minimum dwell time** setting rejects any submission that arrives faster than the time you set (3 seconds by default). It is a cheap, reliable filter that costs genuine commenters nothing.

Both the honeypot and dwell-time checks are silent. A tripped submission looks accepted to the bot, so it does not retry with a different approach.

## Rate limits

Rate limits cap how fast and how often any one author can post, which stops both flooding and slow drip spam:

- **Minimum seconds between comments** (30 by default): the gap a single author must wait between posts.
- **Max comments per hour** (10 by default).
- **Max comments per day** (50 by default).

Set any of these to 0 to turn that particular limit off.

## Blocked words and domains

Two lists give you direct control:

- **Blocked words**: one word or phrase per line. A comment containing any of them is held or rejected.
- **Blocked link domains**: one domain per line. Comments linking to those domains are caught.

These are good for the specific junk that targets your site, and for words you simply do not want in your discussion.

## Link handling

Spam is mostly about links, so QuillThreads treats them carefully:

- **Maximum links per comment** ([Settings → Posting](./settings-reference.md)): links beyond the limit are unwrapped to plain text rather than left as clickable spam.
- **Hold comments containing links** ([Settings → Moderation](./settings-reference.md)): sends any link-bearing comment to the queue.
- Every external link in a stored comment carries `rel="nofollow ugc"`, so spam links never pass search authority even if one slips through.

## CAPTCHA for guests

If you still see junk getting through, you can require a CAPTCHA for guest comments. Set the **CAPTCHA plugin** field to any standard Joomla CAPTCHA plugin element (for example, the reCAPTCHA or hCaptcha plugin you already use elsewhere). Signed-in users are not challenged.

CAPTCHA adds friction, so reach for it only when the lighter layers are not enough.

## The spam score

Every comment gets a spam score from 0 to 100, shown in the admin. It is built from the same signals above plus the content itself. You do not have to act on it directly; it simply makes the borderline cases easy to judge at a glance when you review a comment.

## Bans

For a persistent offender, a ban is the final word. Ban by keyword, email, or IP from the **Bans** screen, and their comments land in spam from then on, silently. See [Moderation](./moderation.md#bans).

## A sensible setup

For most sites, the defaults are right: honeypot on, a 3-second dwell, modest rate limits, and "hold comments containing links" on. Add blocked words as you see patterns, and only reach for CAPTCHA if a determined spammer keeps getting through. If you want a hands-off layer on top, turn on [AI moderation](./ai-moderation.md).
