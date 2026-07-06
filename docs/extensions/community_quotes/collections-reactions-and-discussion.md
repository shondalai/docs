---
id: collections-reactions-and-discussion
title: Collections, reactions and discussion
sidebar_label: Collections, reactions and discussion
sidebar_position: 21
---

# Collections, reactions and discussion

Community Quotes is built to be social. Readers can react to a quote, save it, follow the authors and collections they care about, and take part in a discussion under each quote. Curators can gather quotes into themed collections. This page explains each of these features, who can use them, and what you control as an administrator.

Most of what follows is turned on or off from **Components -> Community Quotes -> Settings**. The relevant switches are noted as they come up, and all of them are in the [Settings reference](./settings-reference.md).

## Reactions

Every quote can be reacted to with one of four responses:

- **Inspired**
- **Agree**
- **Think** (makes you think)
- **Disagree**

A member can hold only one reaction on a quote at a time. Clicking the same reaction again clears it; clicking a different one replaces it. The per-quote totals are shown on the quote card and, larger, on the single quote page, along with a total-reactions figure.

Reactions require a login. A guest sees the reaction buttons but clicking one brings up a login prompt rather than recording a vote. There is a **privacy.anonymous_reactions** setting on the **Privacy** tab, but in this release reactions are always attributed to a logged-in member, so leave your expectations there; see [Privacy and GDPR](./privacy-and-gdpr.md) for how reaction data is handled.

Reactions feed two other things:

- **Trending and loved sorting.** The wall can be sorted to surface the quotes with the most reactions.
- **Rewards.** When the Rewardify rewards system is installed, setting a reaction fires an event the rewards adapter can act on. A disagree counts as a downward signal and every other reaction as an upward one. This is dormant unless Rewardify is present. See the [Developer guide](./developer-guide.md).

## Bookmarks

A logged-in member can bookmark any quote to save it for later. Bookmarking is a personal, private action; it does not affect the quote's public counters and is not shown to anyone else. Like reactions, it needs a login, and the bookmark button prompts a guest to sign in.

## Follows

Members can follow the authors and collections they want to keep up with. Following is toggled from the author profile and the collection page. Each author and each collection carries a follower count, which is kept in sync as members follow and unfollow. Following is a logged-in action.

Follows also drive discovery: the wall's right rail surfaces rising authors by follower count, so active authors get more visibility over time.

## Collections

Collections are curated, themed groups of quotes, for example "Stoic wisdom" or "On writing". They give readers a reason to browse beyond a single quote and give curators a way to tell a story with the library.

### For readers and members

The **Collections** page lists published collections, each with a short two-quote preview, a curator name, and follower and quote counts. Featured collections are shown first. Opening a collection shows its full list of quotes in the curator's chosen order.

A logged-in member can create their own collection with a title and description, then add or remove quotes from it. A member can only curate a collection they own, unless they hold the component's edit permission, so one member cannot alter another's collection by guessing its id.

Whether collections appear on the front end at all is controlled by **display.show_collections** on the **Display and branding** settings tab. Turn it off to hide the collections experience entirely.

### For administrators

Manage collections centrally at **Components -> Community Quotes -> Collections**. From there you can create, edit, feature, publish, unpublish, and delete collections, and set the accent colour used on a collection's card. Deleting a collection removes its quote links but leaves the quotes themselves untouched. Collection aliases are kept unique automatically, which matters for the alias-only URL mode described in [Menus and SEF URLs](./menus-and-sef-urls.md).

Each collection tracks a **quote count** (the number of quotes in it) and a **follower count**, both maintained for you as items and follows change.

## Discussion

Community Quotes displays a full threaded discussion under each quote, and that discussion is powered by **QuillThreads**, the Shondalai comments system. The two products are designed to work together through a small bridge plugin that ships inside the Community Quotes package.

### How it works

- The single quote page renders a QuillThreads comment thread for the `com_communityquotes.quote` context. Readers get QuillThreads' full experience: threaded replies, voting, sorting, moderation, spam protection, and the optional AI checks, all handled by QuillThreads itself.
- The bridge plugin, **QuillThreads - Community Quotes** (`plg_quillthreads_communityquotes`), registers quotes as a commentable context so QuillThreads knows how to attach a thread to a quote, resolve its title and URL, and decide who may read it. A thread on an unpublished quote is visible only to the quote's owner or a moderator.

### Enabling discussion

1. Install the QuillThreads package on your site.
2. Enable the **QuillThreads - Community Quotes** plugin. It ships with Community Quotes and is in the `quillthreads` plugin group.
3. Confirm QuillThreads itself is set up. Its own settings, moderation, and anti-spam controls govern the discussion; see the QuillThreads documentation for those.

If QuillThreads is not installed, quotes simply display without a comment thread. Nothing breaks; the discussion section is empty and the rest of the quote page works normally.

### The Comments screen in the admin

Community Quotes has its own **Comments** screen at **Components -> Community Quotes -> Comments**. It is a filterable list of discussion comments stored against quotes, showing an excerpt, the quote id, the author, the vote score, and the status. From each row you can hide, publish, or delete a comment.

This screen manages the comment records held by Community Quotes. Day-to-day discussion moderation, the queue, spam handling, and the reader-facing thread all live in QuillThreads once it is installed and the bridge plugin is enabled. Treat the Community Quotes Comments screen as a convenience view; QuillThreads is the discussion engine.

## Where to go next

- Community submissions, the submit flow, and moderation: [Submissions and moderation](./submissions-and-moderation.md).
- Every setting that governs these features: [Settings reference](./settings-reference.md).
- How reactions, saves, and follows relate to permissions: [Permissions](./permissions.md).
- Privacy handling for reactions and personal data: [Privacy and GDPR](./privacy-and-gdpr.md).
- The events fired for Rewardify and the JSON API behind these actions: [Developer guide](./developer-guide.md).
