---
id: privacy-and-gdpr
title: Privacy and GDPR
sidebar_label: Privacy and GDPR
sidebar_position: 11
---

# Privacy and GDPR

Because comments live in your own database rather than a third-party service, you are in control of your readers' data, and you are also responsible for it. QuillThreads gives you the tools to handle that properly. Privacy options are on **Settings → Privacy**, and the privacy plugin covers Joomla's data-request flow.

## Consent

| Setting | Default | What it does |
| --- | --- | --- |
| Require privacy consent | On | Shows a consent checkbox on the comment form. |
| Privacy policy URL | (empty) | The page the consent prompt links to. |

When consent is required, a reader ticks a box (linked to your policy) before they can post. Set your **Privacy policy URL** so that link goes somewhere real.

## IP addresses

You decide whether commenter IP addresses are kept at all, and for how long:

| Setting | Default | What it does |
| --- | --- | --- |
| Store commenter IP address | Store hashed | Do not store, store hashed, or store in plain text. |
| IP retention (days) | 60 | After this many days, IP data is anonymised. 0 keeps it indefinitely. |

**Store hashed** is the right default for most sites: it keeps enough to spot and ban abuse without holding a readable address. Choose **Do not store** if you would rather not keep IPs at all, or **plain** only if you have a clear reason and say so in your policy.

The retention setting means IPs do not linger forever. The scheduled **Maintenance** task anonymises hashes older than your retention window automatically. See [Scheduled tasks](./scheduled-tasks.md).

## Commenter emails

Guest commenters give an email so they can be notified and recognised. QuillThreads stores that email **encrypted**, never in plain text, and only ever displays a commenter's name publicly, never their address.

## Data export and removal

The bundled **privacy plugin** (`plg_privacy_quillthreads`) plugs into Joomla's own privacy tools, so subject-access and erasure requests are handled the standard Joomla way:

1. A request comes in through **Users → Privacy** (Joomla's information-request and removal-request system).
2. When you process an export request, QuillThreads adds the person's comments and related data to the export.
3. When you process a removal request, QuillThreads removes or anonymises their comments.

Make sure the privacy plugin is enabled (**System → Manage → Plugins**, search `quillthreads`) so these requests include comment data.

## The anonymised name

When a commenter is removed, their comments are not necessarily deleted (that would tear holes in threads). Instead the author is anonymised. The **Anonymised display name** setting controls what shows in their place, "Deleted user" by default.

## A quick privacy checklist

- Set your **Privacy policy URL**.
- Decide your **IP storage** and **retention** and note it in your policy.
- Enable the **privacy plugin** so data requests cover comments.
- If you use [AI moderation](./ai-moderation.md), mention that comment text is sent to the AI service for scoring.
- Schedule the **Maintenance** task so retention is actually enforced. See [Scheduled tasks](./scheduled-tasks.md).
