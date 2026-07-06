---
id: overview
title: Community Quotes
sidebar_label: Overview
sidebar_position: 1
---

# Community Quotes

Community Quotes turns a plain list of quotations into a living quote community. It gives your Joomla site a curated quote wall, rich author profiles, curated collections, member submissions with moderation, reactions, threaded discussion, a daily email digest, and share-ready graphics. Everything runs inside your own site and stores its data in your own database.

This page is a short tour of what the extension does and where to find each feature. If you would rather get going right away, jump to the [Quick start guide](./quick-start.md).

## What it does

- **A quote wall people want to browse.** A hero "Quote of the day", a sticky filter and sort bar, a masonry layout of quote cards, and a sidebar of categories, featured collections, and rising authors. Visitors filter by category, tag, author, or collection and sort by trending, newest, most discussed, most loved, or verified.
- **Authors with a story.** Every quote is tied to an author who gets a full profile: a portrait or coloured avatar, a role and life-years label, a biography, a life-event timeline, and tabs for their quotes, biography, and collections.
- **Two category trees, kept separate.** Quotes have their own category tree and authors have theirs, so you can organise "Stoicism" and "Science" quotes independently of how you group the people who said them. Both trees are managed in Joomla's own category manager.
- **Attribution you can stand behind.** Each quote carries an attribution status of verified, disputed, translation, or unverified, alongside an optional source, source URL, year, and note. An optional AI verification step can score how confident it is in an attribution and help route a submission.
- **Community submissions, on your terms.** A guided four-step submit flow lets members add quotes: write the text, check the attribution, add a source and tags, then preview. New submissions land in a moderation queue where you approve, reject, or flag them.
- **Engagement built in.** Readers react to a quote as inspired, agree, think, or disagree, bookmark quotes, follow authors and collections, and take part in a threaded discussion under each quote.
- **Collections and curation.** Group quotes into named collections with their own colour and description, feature the best ones, and let members build their own.
- **Listen and share.** A "Listen" button reads a quote aloud using the visitor's own browser voice, and a canvas share card turns any quote into a downloadable image for social posts.
- **A daily digest.** An optional email sends the quote of the day to your subscriber list on a schedule, with a one-click unsubscribe.
- **Reach beyond the component.** A module with eight display modes, a `{cquote}` shortcode for articles, and an editor button place quotes anywhere on your site.

## What is in the package

The single package installs everything you need:

- **Component** (`com_communityquotes`): the admin desk and the front-end quote experience. The admin is one React application at **Components -> Community Quotes** covering the dashboard, quotes, authors, collections, comments, categories, moderation, module and editor guides, migration, and settings. The front end renders the quote wall, quote pages, author profiles, collections, and the submit flow.
- **Module** (`mod_communityquotes`): one site module with eight display modes (Quote of the Day, Random, Carousel, Mini-wall, Featured author, Collection feed, Ticker, and Digest sign-up). See [Modules and plugins](./modules-and-plugins.md).
- **Content plugin** (`plg_content_communityquotes`): renders the `{cquote id="N"}` shortcode inside articles as a card, blockquote, pullquote, or inline quote.
- **Editor button** (`plg_editors-xtd_communityquotes`): a toolbar button that opens a quote picker and inserts the shortcode into an article for you.
- **Task plugin** (`plg_task_communityquotes`): the daily digest routine for Joomla's Scheduler. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
- **Rewardify adapter** (`plg_rewards_communityquotes`): a dormant plugin that awards points for quote activity when the Rewardify component is installed. It does nothing on its own.
- **QuillThreads integration** (`plg_quillthreads_communityquotes`): the bridge that powers quote discussion with QuillThreads. It stays dormant until QuillThreads is installed. See [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).
- **Shondalai Core library**: the shared platform library used by every Shondalai extension. Community Quotes will not run without it, and it is safe to keep even if you remove the component while other Shondalai extensions are present.

After install, the component sits at **Components -> Community Quotes** in the admin menu, with submenu links straight to the quote categories and the author categories.

## How it fits together

The content model has three moving parts: **quotes**, **authors**, and two **category trees**. A quote belongs to an author and to a quote category, and it can carry tags. An author belongs to an author category and can have a life-event timeline. Members build **collections** on top of quotes, react to them, bookmark them, and discuss them. The full model is covered in [Quotes, authors, and categories](./quotes-authors-and-categories.md).

A quote moves through a simple state model. New community submissions arrive as **pending** and wait in the moderation queue. Approving one **publishes** it; you can also **unpublish** or **reject** a quote, or send it to the trash. Attribution (verified, disputed, translation, unverified) is a separate axis, so a published quote can still be marked disputed while it is checked. See [Submissions and moderation](./submissions-and-moderation.md).

Discussion under a quote is delivered by QuillThreads, Shondalai's dedicated comments engine, through a small bridge plugin that ships in the package. Install QuillThreads and enable the bridge and each quote page carries a full QuillThreads thread with replies, votes, sorting, and moderation. Without QuillThreads the quote page simply shows no discussion section; nothing breaks. See [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

Both the admin and the front end are single React applications. The admin is one shell with a left-hand navigation, so moving between the dashboard, quotes, moderation, and settings never reloads the page. The front end paints the first screen on the server for search engines and speed, then takes over for filtering, reactions, discussion, and navigation without full page loads.

Settings live in their own tabbed page at **Components -> Community Quotes -> Settings**, not in Joomla's Options screen. Permissions are the exception; they use Joomla's own access control. See [Settings reference](./settings-reference.md) and [Permissions](./permissions.md).

## Requirements

- Joomla 5 or Joomla 6
- PHP 8.1 or newer
- The Shondalai Core library, which is bundled in the package

## Where to go next

- New install: [Quick start guide](./quick-start.md).
- Understand the content model: [Quotes, authors, and categories](./quotes-authors-and-categories.md).
- Set up menus and clean URLs: [Menus and SEF URLs](./menus-and-sef-urls.md).
- Tune every option: [Settings reference](./settings-reference.md).
- Run a healthy community: [Submissions and moderation](./submissions-and-moderation.md) and [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).
- Place quotes around your site: [Modules and plugins](./modules-and-plugins.md).
- Moving from the old component: [Migrating from version 1](./migrating-from-version-1.md).
- Hit a snag: [Troubleshooting](./troubleshooting.md).
