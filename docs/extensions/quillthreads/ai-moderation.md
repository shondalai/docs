---
id: ai-moderation
title: AI moderation
sidebar_label: AI moderation
sidebar_position: 9
---

# AI moderation

AI moderation is an optional layer that scores new comments for spam and toxicity, can hold the risky ones automatically, and can summarise a long discussion in a sentence or two. It runs on the Shondalai AI service (AICore) and is pay-as-you-go. QuillThreads is fully functional without it; turn it on when you want a hand with the volume.

Everything here is configured on **Settings → AI moderation**.

## What you need

- A **shondalai.com account** with AI credits. Scoring and summarising each spend a small amount of credit.
- The account connected to your site (see below). The connection is shared by all Shondalai extensions on the site, so if you have connected one already, you are connected here too.

## Connecting your account

1. Open **Settings → AI moderation**.
2. In the connection panel, enter your shondalai.com username and password and click **Connect**.
3. Once connected, the panel shows the account email and the available credit balance.

Your password is exchanged for a token and is never stored. The credential is held encrypted and is used only to talk to the AI service.

:::note
If the panel shows a credit balance of 0, the connected account has no credits. AI calls will be refused until the account is topped up, or until you disconnect and reconnect with a funded account. Because the connection is site-wide, this affects every extension that uses AI.
:::

## Turning it on

With an account connected, switch **Enable AI moderation** on. Then choose how it works:

| Setting | What it does |
| --- | --- |
| Scan new comments on post | Score each comment the moment it is posted. This is the most responsive option. |
| Let AI auto-hold comments | Hold a comment automatically when its score is at or above the threshold. AI never deletes, only holds. |
| Auto-hold score threshold | The score (0 to 100) at or above which a comment is held. 70 is a sensible start. |

If you turn **Scan on post** off, comments are not scored as they arrive. Instead they are scored by the background task, or on demand when you click **Review with AI** on a comment in the admin. This trades immediacy for fewer, batched credit charges.

## Reviewing a comment with AI

On any comment in the admin, **Review with AI** asks the service for a score, the flags it raised, a toxicity reading, and a short suggestion. It is useful for the genuinely borderline cases where you want a second opinion before you act. You stay in control; the AI advises, you decide.

## Discussion summaries

When **Show AI discussion summaries** is on, QuillThreads generates a short, public summary of a thread once it has enough published comments. It is a friendly way to let a reader catch up on a busy discussion without scrolling through all of it.

| Setting | What it does |
| --- | --- |
| Summary threshold | Minimum published comments before a summary appears (5 by default). |
| Refresh after new comments | Regenerate the summary after this many more comments, so it stays current. |

## Scoring in the background

The scheduled task plugin includes an **AI moderation scan** task that scores any comments that have not been scored yet, in batches you control. This is the efficient way to run AI moderation: leave **Scan on post** off, and let the task work through new comments on a schedule. It only holds comments when **auto-hold** is on, and it never deletes. See [Scheduled tasks](./scheduled-tasks.md).

## Cost and privacy

- **Cost**: each scored comment and each summary spends a small amount of credit from your shondalai.com account. Keep the background task's per-run limit modest so costs stay predictable.
- **Privacy**: when a comment is scored or a thread is summarised, that text is sent to the AI service to do the work. If that matters for your site, mention AI moderation in your privacy policy, or leave it off. No commenter email or IP is sent, only the comment text and the article title for context.

## A recommended setup

For a busy site that wants low-touch moderation:

1. Connect your account and enable AI moderation.
2. Turn **Scan on post** off and rely on the background **AI moderation scan** task.
3. Turn **auto-hold** on with the threshold at 70.
4. Keep your [honeypot, dwell, and rate limits](./anti-spam.md) on underneath. AI is a layer on top, not a replacement.
