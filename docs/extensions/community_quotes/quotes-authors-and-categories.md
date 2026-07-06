---
id: quotes-authors-and-categories
title: Quotes, authors, and categories
sidebar_label: Quotes, authors, and categories
sidebar_position: 10
---

# Quotes, authors, and categories

Everything in Community Quotes hangs off three kinds of content: the quotes themselves, the authors they are attributed to, and the categories that organise both. This page explains how those pieces relate, where you manage each one, and the small details that matter later, such as aliases and attribution. If you are just getting set up, the [Quick start guide](./quick-start.md) walks you through creating your first author, quote, and category in order.

## The content model at a glance

- **Quotes** are the core item. Each quote has its text, an author, a quote category, an optional source and year, tags, and an attribution status. Quotes are what your visitors browse, react to, discuss, and share.
- **Authors** are people quotes are attributed to. An author carries a short role line, life years, a biography, an optional portrait and colour, a verified badge, and an optional life-event timeline. Authors live in their own category tree.
- **Categories** organise both. Community Quotes keeps two separate Joomla category trees, one for quotes and one for authors, so you can file each independently.

Quotes and authors are managed inside the single Community Quotes admin app at **Components -> Community Quotes**. Categories are managed in Joomla's own category manager, reached through the admin submenus described below.

## Quotes

A quote is created and edited in the admin app under **Components -> Community Quotes -> Quotes**. Community members can also submit quotes from the front end, which then arrive in your moderation queue. Both paths are covered in [Submissions and moderation](./submissions-and-moderation.md).

Each quote holds:

- **Quote text**: the words themselves. This is the one required field.
- **Author**: the person the quote is attributed to, picked from your authors. A quote always belongs to exactly one author.
- **Quote category**: which quote category the quote is filed under. This drives the nested category URL, so choose it with your site structure in mind.
- **Source and source URL**: where the quote comes from, such as a book, speech, or letter, and an optional link.
- **Year and year label**: the year the quote is from, plus an optional free-text label for cases a plain year cannot express, for example "c. 6th BCE".
- **Language and translations**: the quote's language, plus optional translations that appear as language chips on the quote page.
- **Tags**: free-form tags that help visitors find related quotes and power the "similar quotes" panel.
- **Attribution**: the confidence you have in the attribution. See [Attribution](#attribution) below.
- **Featured**: an editor's pick flag. Featured quotes are weighted into the Quote of the Day pool and can be surfaced by the module.

### Quote state

A quote's publishing state is separate from its attribution. The state decides whether the quote is visible on your site:

| State | Meaning | Visible on the site |
| --- | --- | --- |
| Published | Live and public. | Yes |
| Pending moderation | Submitted and waiting for review. | No. The submitter sees it as "pending" in their own submissions. |
| Unpublished | Taken down by an administrator. | No |
| Rejected | Declined during moderation. | No |
| Trashed | In the trash. | No |

New community submissions arrive as pending when moderation is on. Approving a quote publishes it; rejecting a quote sets it to rejected. See [Submissions and moderation](./submissions-and-moderation.md) for the full workflow.

### Attribution

Attribution is a second, independent axis that tells your readers how trustworthy the wording and the credit are. It does not affect visibility; a quote can be published and still marked as disputed. The four values are:

- **Verified**: the wording and author are confirmed against a reliable source.
- **Disputed**: the quote is commonly attributed to this author but the credit is contested.
- **Translation**: the text is a translation rather than the original wording.
- **Unverified**: not yet checked. This is the default for a new quote.

A quote can also carry an **attribution note** explaining the call, and an **attribution confidence** score from 0 to 100. An optional AI verification check can suggest a status and confidence for you; that is described in [Submissions and moderation](./submissions-and-moderation.md) and configured on the AI verification tab in the [Settings reference](./settings-reference.md).

### Reactions, discussion, and counts

Every published quote can gather reactions (inspired, agree, think, disagree), threaded discussion, bookmarks, and reports. Reaction and comment counts are shown on the quote and kept up to date automatically. Those features have their own page: [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

## Authors

Authors are managed under **Components -> Community Quotes -> Authors**. An author record holds:

- **Name**: the author's display name. Required.
- **Role**: a short descriptor shown under the name, for example "Roman Emperor, Stoic Philosopher".
- **Life years**: a birth year and death year. Negative years are treated as BCE. A **years label** lets you override the displayed span with free text, such as "c. 6th BCE", when exact years do not fit.
- **Biography**: a longer description shown on the author's profile.
- **Author category**: which author category the author is filed under. This drives the author's nested profile URL.
- **Portrait and colour**: an optional image, and an avatar colour. When no colour is set, one is derived from the author's name so avatars stay consistent.
- **Verified**: marks the author as verified, showing a badge on their profile and quotes.
- **Featured**: highlights the author in featured author placements, including the module.

An author cannot be deleted while quotes are still attributed to them. Reassign or remove those quotes first.

### Life-event timelines

Each author can have a timeline of life events. An event is simply a year and a short label, for example "121 CE, Born in Rome". Events are ordered by year and rendered as a timeline on the author's profile, giving readers context for the person behind the words. Add, edit, and reorder events in the author editor; saving an author replaces its full set of events with what you entered.

### Author profiles on the front end

An author's public profile gathers their portrait, role, life years, verified badge, biography, life-event timeline, and their published quotes, along with counts of followers, discussion, and any collections they appear in. Visitors can follow an author to keep track of them. You can link directly to a profile with an [Author Profile menu item](./menus-and-sef-urls.md), and you can surface a single author with the Featured author module described in [Modules and plugins](./modules-and-plugins.md).

## The two category trees

Community Quotes uses Joomla's standard category system, but it keeps **two independent trees**:

- **Quote categories** organise quotes. In Joomla's category manager these belong to the extension `com_communityquotes`.
- **Author categories** organise authors. These belong to the extension `com_communityquotes.author`.

Keeping them separate means your author filing (say, by era or field) does not have to mirror how you file quotes (say, by theme). Both are full Joomla category trees, so they support nesting, access levels, ordering, and everything else you expect from Joomla categories.

### Where to manage them

Both trees are managed in Joomla's own category manager, reached from the Community Quotes admin submenus:

- **Components -> Community Quotes -> Quote Categories** opens the category manager for quote categories.
- **Components -> Community Quotes -> Author Categories** opens the category manager for author categories.

Because these are ordinary Joomla categories, you create, nest, publish, and reorder them exactly as you would categories for articles. When you add a quote or an author, you pick its category from the matching tree.

### Category nesting and URLs

Category nesting is not just for tidiness. The public URL of a quote is built from the path of its quote category, and the same is true for authors and their author categories. A quote filed under `Philosophy / Stoicism` produces a URL that walks that path before reaching the quote. This is covered in full in [Menus and SEF URLs](./menus-and-sef-urls.md), but the practical takeaway is: decide your category structure before you have a lot of content, because it shapes your URLs.

## Aliases

Every quote, author, category, and collection has an **alias**, the URL-safe slug used in its address. Aliases are generated for you:

- A **quote** alias is taken from an explicit alias if you set one, otherwise slugged from the start of the quote text.
- An **author** alias is taken from an explicit alias if set, otherwise slugged from the name.
- **Category** aliases work exactly like Joomla category aliases everywhere else.

To keep every URL working, Community Quotes makes sure aliases do not collide. If a generated alias would clash with an existing one, a numeric suffix is appended so each item still has a distinct address.

Aliases matter most if you turn on **Remove IDs from URLs**, which routes purely by alias. In that mode an alias must be unique for a page to resolve, so you should give quotes and authors clear, distinct aliases. See [Menus and SEF URLs](./menus-and-sef-urls.md) for how that setting changes your URLs and what to watch for.

## Where to go next

- Put these pages on your site's menu: [Menus and SEF URLs](./menus-and-sef-urls.md).
- Let your community add quotes: [Submissions and moderation](./submissions-and-moderation.md).
- Group quotes into curated sets: [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).
- Tune every option: [Settings reference](./settings-reference.md).
- Bring content over from the old component: [Migrating from version 1](./migrating-from-version-1.md).
