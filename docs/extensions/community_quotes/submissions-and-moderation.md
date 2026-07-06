---
id: submissions-and-moderation
title: Submissions and moderation
sidebar_label: Submissions and moderation
sidebar_position: 20
---

# Submissions and moderation

Community Quotes lets your visitors contribute quotes and gives you a moderation desk to review them before they go live. This page covers the front-end submit flow your members see, the attribution and verification model that keeps your library honest, the moderation queue where you approve or reject submissions, and the reports your community files against problem content.

Where you set the rules for all of this is **Components -> Community Quotes -> Settings**, on the **Submissions** and **Moderation rules** tabs. Every option below is listed in the [Settings reference](./settings-reference.md).

## How a quote gets submitted

Logged-in members submit quotes through a guided four-step wizard. It opens from the **Submit** button in the site header when submissions are enabled and the visitor is signed in. Guests see a login prompt instead; there is no anonymous submission.

The wizard walks the contributor through four steps, with a progress bar across the top:

1. **Quote text.** The contributor types or pastes the quote and names the author. As they type the author name, the app looks up matching authors already in your archive and offers them as chips, so duplicates are avoided and the quote attaches to the right author record. If the author is new, they can choose **Create new author**. A live character and word count enforces the minimum and maximum length you set.
2. **Verify attribution.** The contributor runs an attribution check on the quote and author pairing. The result is shown as a verdict (verified, needs manual review, or likely misattributed) with a confidence score and a short evidence list. If the checker suggests a correction, the contributor can apply it or submit anyway and have the quote marked as disputed. This step is explained in detail below.
3. **Source and tags.** The contributor adds the primary source, an optional source URL, an optional year, a category, tags, and the language. Which of these are mandatory is controlled by your **Submissions** settings (source, category, tags, and year can each be required or optional). Tags autocomplete against existing tags so your taxonomy stays tidy, up to eight per quote.
4. **Preview and submit.** The contributor sees the finished quote card exactly as it will appear, with its attribution badge. A notice tells them whether the quote will be held for review or published immediately, based on your moderation setting. They click **Submit for review** to send it.

After submitting, they see a confirmation panel. If the quote was queued, they are told a moderator will review it shortly. If it was published straight away, they get a **View quote** link to see it on the wall.

### Submission rules

The **Submissions** settings tab governs who can contribute and what a valid submission looks like:

| Setting | Default | Notes |
| --- | --- | --- |
| Allow submissions | On | Master switch for the whole submit flow. When off, the Submit button disappears and the submit endpoint is refused. |
| Require moderation | On | When on, new submissions enter the queue as pending. When off, they publish immediately (subject to the auto-moderation rules below). |
| Quotes per user per day | 10 | Per-contributor daily cap. A member who reaches it is told to try again tomorrow. |
| Minimum text length | 5 | Characters. Shorter submissions are rejected. |
| Maximum text length | 800 | Characters. Longer submissions are rejected. |
| Source citation required | On | Makes the primary source a required field at step 3. |
| Year required | Off | Makes the year a required field. |
| Category required | On | Makes the category a required choice. |
| At least one tag | On | Requires the contributor to add at least one tag. |

The length and per-day limits are enforced on the server as well as in the wizard, so they hold even if a request is crafted by hand.

## Attribution and verification

Attribution is a separate axis from the published state of a quote. Every quote carries one of four attribution statuses, shown as a badge on the quote card and on the single quote page:

- **Verified** - the attribution has been confirmed.
- **Disputed** - the attribution is contested or likely wrong.
- **Translation** - the text is a translation rather than the original wording.
- **Unverified** - not yet confirmed; the default for a fresh submission.

The attribution status does not by itself hide a quote. A published quote marked disputed still appears, with its disputed badge, so readers see the caveat. Hiding a quote is a matter of its state, covered under moderation below.

### The attribution check

Step 2 of the submit wizard, and the equivalent check a moderator can run, calls the attribution service. It works in one of two ways:

- **AI verification (optional).** When **AI verification** is enabled on the **AI verification** settings tab and a connected Shondalai Core AI account is available, the service asks the AI model to judge the quote and author. It returns a status, a confidence score from 0 to 100, a plain-language summary, an evidence list (each item tagged primary, secondary, or popular, with a weight), and sometimes a suggested correction.
- **Deterministic fallback.** When AI is off or unavailable, the service uses a heuristic that always works and never calls out to a third party. If the exact quote text already exists in your library as a published, verified quote by the same author, it returns **verified** with high confidence. Otherwise it returns **unverified** with a neutral "a moderator should confirm the source" message, so nothing is auto-approved on a guess.

The **AI verification** tab also has two thresholds, **Auto-verify above** and **Auto-reject below**, expressed as confidence percentages. These let mid-confidence quotes route to moderation while very high or very low confidence submissions are handled automatically. See the [Settings reference](./settings-reference.md).

## The moderation queue

Open **Components -> Community Quotes -> Moderation**. The queue shows two things:

- **Pending quotes** - submissions waiting for a decision, newest first, each shown with its text, author, and the member who submitted it.
- **Open reports** - quotes and comments your community has flagged, with the reason and a text excerpt of the reported item.

Every submission and report needs `core.manage` on the component to view; the moderation actions that change content also require the appropriate edit permission. See [Permissions](./permissions.md).

### Acting on a pending quote

You have three actions on each pending quote:

- **Approve** - publishes the quote (sets it to the published state) and refreshes the author's quote count. The quote appears on the wall immediately.
- **Reject** - marks the quote rejected. It stays out of public view. An optional note you add is stored as the attribution note, so you can record why.
- **Flag** - keeps the quote pending and marks its attribution as disputed, with your note. Use this when a quote needs more work or a second opinion before it can be approved.

### The quote state model

A quote is always in exactly one state. Approving, rejecting, and other admin actions move it between these:

| State | Meaning | Visible on the site |
| --- | --- | --- |
| Published | Approved and live | Yes |
| Pending | Awaiting moderation | No (the submitter sees it as pending) |
| Unpublished | Taken down by an admin | No |
| Rejected | Declined in moderation | No |
| Trashed | Sent to the trash | No |

A non-published quote is not simply hidden from the world; the single quote page returns "not found" to anyone who is not the quote's own author or a moderator, so quote ids cannot be probed to read unapproved content.

### Auto-moderation rules

The **Moderation rules** tab tunes how much lands in the queue:

| Setting | Default | Notes |
| --- | --- | --- |
| Auto-approve verified quotes | Off | Skip the queue for submissions the attribution check marks verified. |
| Hold submissions from new users | On | Send a first-time contributor's quotes to the queue even when moderation is otherwise relaxed. |
| Notify above | 20 | Email a moderator once the pending queue passes this many items. Set to 0 to disable. |
| Notify email | (empty) | The address that receives the queue-size notice. Blank falls back to your site's configured recipients. |

## Reports

Any logged-in member can report a quote or a comment they find inappropriate. A report records the object, the reason, and the reporter, and lands in the **Open reports** panel of the moderation queue.

From there a moderator can:

- **Resolve** a report once the issue is dealt with (for example, after unpublishing or editing the reported item).
- **Dismiss** a report when no action is needed.

Resolving or dismissing closes the report so it leaves the open list. Reports are a signal for your team; acting on the underlying quote or comment is a separate step you take through the moderation or comments screens.

## Where to go next

- Tune every option: [Settings reference](./settings-reference.md).
- Understand quotes, authors, and the two category trees: [Quotes, authors and categories](./quotes-authors-and-categories.md).
- Set who can submit and moderate: [Permissions](./permissions.md).
- Reactions, collections, and discussion: [Collections, reactions and discussion](./collections-reactions-and-discussion.md).
