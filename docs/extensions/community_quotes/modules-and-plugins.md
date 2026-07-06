---
id: modules-and-plugins
title: Modules and plugins
sidebar_label: Modules and plugins
sidebar_position: 30
---

# Modules and plugins

Community Quotes is more than the component. The single package also installs one module and a set of plugins that carry quotes out to the rest of your site: into module positions, into your articles, into the editor, into your visitors' inboxes, and into other Shondalai extensions. They all install and enable in one step; this page explains what each one does and when to reach for it.

Everything below ships inside `pkg_communityquotes`. You never install these pieces separately.

## The Community Quotes module

**Community Quotes** (`mod_communityquotes`) is a single site module with eight display modes. You pick the mode you want when you place the module, so the same extension can be a quote-of-the-day box in one position and a scrolling ticker in another.

Place it the normal Joomla way:

1. Go to **Content -> Site Modules -> New** and choose **Community Quotes**.
2. Pick a **Mode** (see the table below).
3. Choose a module position and the pages it should appear on.
4. Fill in the fields the mode needs, then save and publish.

### The eight modes

| Mode | What it shows |
| --- | --- |
| Quote of the day | The same deterministic quote everyone sees today, chosen from the featured pool first and the published pool otherwise. It changes once a day. |
| Random | A fresh random quote on each page load, with a "Tap for another" refresh. |
| Carousel | A rotating set of the newest quotes with dot navigation and a small amount of inline JavaScript. No framework. |
| Mini-wall | A compact stack of the newest quotes, good for a sidebar. |
| Featured author | One author you choose, with their avatar, details, and up to three of their quotes. |
| Collection feed | A curated collection you choose, with its quotes and a link to the full collection page. |
| Ticker | A single-line scrolling strip of quotes for a header or footer strip. |
| Digest sign-up | An email capture form that subscribes visitors to the daily digest. |

### Module options

The options you see change with the mode you pick, so you only ever configure what is relevant.

| Setting | Default | Notes |
| --- | --- | --- |
| Mode | Quote of the day | Which of the eight presentations this instance renders. |
| Category | All categories | Limits quotes to one Community Quotes category. Shown for Random, Carousel, Mini-wall, and Ticker. |
| Collection ID | 0 | The collection to feature. Shown for the Collection mode. Find the ID in **Components -> Community Quotes -> Collections**. |
| Author ID | 0 | The author to spotlight. Shown for the Featured author mode. Find the ID in **Components -> Community Quotes -> Authors**. |
| Number of quotes | 5 | How many quotes the list modes show (1 to 20). Shown for Carousel, Mini-wall, Ticker, and Collection. |
| Show author | Yes | Show the author name with each quote. |
| Show source | Yes | Show the source work when a quote has one. |
| Show verified badge | Yes | Show a check mark next to verified quotes and authors. |
| Link to pages | Yes | Wrap quotes, authors, and titles in links to their pages. |

The **Advanced** tab carries the standard Joomla module fields: an alternative layout, a module class suffix, and caching.

### Styling and links

The module does not ship its own stylesheet. It borrows the component's shared embed styles, so its look matches the `{cquote}` embeds you place in articles and follows your Community Quotes accent and aesthetic. All links point at the real front-end pages through the component router, so they respect your menu structure and your SEF settings. See [Menus and SEF URLs](./menus-and-sef-urls.md).

If a mode has nothing to show, for example a Featured author with no published quotes, the module renders a quiet empty state rather than breaking the page. The Digest sign-up mode posts to the same subscribe endpoint the front end uses and works for logged-out visitors. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).

## The `{cquote}` shortcode (content plugin)

**Content - Community Quotes** (`plg_content_communityquotes`) lets you drop a live quote into any article, category description, or other content that runs through Joomla's content preparation. You write a short token and the plugin replaces it with a rendered quote.

The token looks like this:

```
{cquote id="123"}
{cquote id="123" style="blockquote"}
{cquote id="123" style="pullquote" link="false"}
```

- **id** is the quote's ID, and is required. Find it in **Components -> Community Quotes -> Quotes**.
- **style** is optional and can be `card`, `blockquote`, `pullquote`, or `inline`. When you leave it out, the plugin uses the default style set in its own options (which itself defaults to `card`). The four styles are the same ones used across the component and the editor button.
- **link** is optional. `true` (the default) links the embed to the quote's page; `false` renders it without a link.

Single quotes, double quotes, or no quotes around the values all work, so `{cquote id=123 style=blockquote}` is fine too.

To show the literal syntax on a page without it being replaced, put `{cquote off}` anywhere in the article. Every shortcode in that article is then left as plain text and the `{cquote off}` marker itself is removed.

The plugin is enabled on install. It only loads its stylesheet when an article actually contains a rendered quote, so it adds nothing to pages that do not use it. If a quote ID does not exist or cannot be rendered, the token is quietly removed rather than left as broken text.

The easiest way to get the token right is the editor button below, which builds it for you.

## The editor button

**Button - Community Quotes** (`plg_editors-xtd_communityquotes`) adds a **Community Quotes** button under your article editor. It opens a picker so you can find a quote and insert its `{cquote}` shortcode at the cursor without typing anything by hand.

1. Edit an article and look under the editor for the **Community Quotes** button.
2. In the picker, search or browse to the quote you want.
3. Choose an embed style, then insert. The matching `{cquote}` token drops in at the cursor.

The button only appears for users who are allowed to create content, so it respects your existing editorial permissions. It is enabled on install. The inserted token is rendered later by the content plugin above, so keep that plugin enabled for the embeds to appear on the published page.

## The daily digest task

**Task - Community Quotes** (`plg_task_communityquotes`) adds one routine, **Community Quotes daily digest**, to Joomla's Scheduler. When it runs, it emails the current quote of the day to everyone who has subscribed, each message carrying a one-click unsubscribe link.

The routine respects the **Email digest** settings: if the digest is turned off, the run does nothing and logs that it was skipped. The component seeds a scheduler entry for this routine on install, disabled by default, so you only need to enable and schedule it when you are ready. Full setup, including the subscriber list and the send hour, is in [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).

## The QuillThreads integration

**QuillThreads - Community Quotes** (`plg_quillthreads_communityquotes`) connects quote discussion to [QuillThreads](/quillthreads/overview), Shondalai's dedicated comments engine. It registers the quote as a commentable context, so each quote page carries a full QuillThreads thread with replies, votes, sorting, and moderation.

This plugin stays dormant until QuillThreads is installed, so it is safe to leave enabled whether or not you use QuillThreads. When QuillThreads is absent, quote pages simply show no discussion section. How discussion works is covered in [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

## The Rewardify adapter

**Rewards - Community Quotes** (`plg_rewards_communityquotes`) lets [Rewardify](/rewardify/overview) award points for quote activity: submitting a quote, having a quote deleted, and reacting to a quote (a like or a dislike). It ships in the package but stays completely dormant unless Rewardify is installed and enabled, so it costs nothing to leave in place.

When Rewardify is present, the adapter advertises four triggers you can build reward rules around:

| Trigger | Fires when |
| --- | --- |
| Quote created | A member submits a new quote. |
| Quote liked | A member reacts positively to a quote (inspired, agree, or think). |
| Quote disliked | A member reacts with disagree. |
| Quote deleted | A quote is removed. |

The adapter only reports facts to Rewardify. It never reads balances or writes to the ledger itself, and it never interferes with the quote action that triggered it. Point values, caps, and recipients are all configured in Rewardify. The developer view of the events it listens for is in the [Developer guide](./developer-guide.md).

## Shared platform pieces

The package also relies on the **Shondalai Core library**, the shared platform library used by every Shondalai extension for email, storage, and more. Community Quotes will not run without it, and it is safe to keep even if you remove the component while other Shondalai extensions are installed.

## Which ones do I need?

| Piece | Enable it if |
| --- | --- |
| Community Quotes module | You want quotes in a module position (any of eight modes). Optional. |
| Content plugin | You want to place quotes inside articles with `{cquote}`. Recommended. |
| Editor button | You want a point-and-click way to insert those shortcodes. Recommended. |
| Task plugin | You want to send the daily email digest. Enable when you set the digest up. |
| QuillThreads integration | You want discussion under quotes, which QuillThreads powers. Enable it alongside QuillThreads. |
| Rewards adapter | You use Rewardify and want to reward quote activity. Optional. |

## Where to go next

- Put quotes in a module position or an article: this page.
- Turn the digest on: [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
- Pick native or QuillThreads discussion: [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).
- Tune every option: [Settings reference](./settings-reference.md).
- The events and API behind the plugins: [Developer guide](./developer-guide.md).
