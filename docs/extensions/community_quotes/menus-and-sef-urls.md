---
id: menus-and-sef-urls
title: Menus and SEF URLs
sidebar_label: Menus and SEF URLs
sidebar_position: 11
---

# Menus and SEF URLs

Community Quotes gives your visitors a full front-end experience: a quote wall, author profiles, curated collections, and a submission flow. You decide how they reach it by adding menu items in Joomla's menu manager, exactly as you would for any component. This page lists the menu item types, explains how the nested, search-friendly URLs are built, and covers the "Remove IDs from URLs" option.

## Adding a menu item

Menu items are created the normal Joomla way:

1. Go to **Menus -> [your menu] -> Add New Menu Item**.
2. Give the item a title.
3. Under **Menu Item Type**, click **Select** and choose one of the **Community Quotes** types below.
4. Fill in any type-specific fields (for example, which category or which quote).
5. Save.

You will usually want at least one menu item pointing at the quote wall, so the front end has a clear home. Everything else on your site links back through that.

## Menu item types

Community Quotes ships these menu item types. All of them appear under the **Community Quotes** heading in the menu item type picker.

| Menu item type | What it shows | Extra field |
| --- | --- | --- |
| Quote Wall | The public quote wall: the Quote of the Day, filters, and the community feed. This is the main landing page. | None |
| Quote Category | Quotes in one quote category, rooted at that category's nested URL. | Quote category (required) |
| Quote Categories | An index of your quote categories. | None |
| Author Profile | One author's profile page. | Author id (required) |
| Authors Directory | A browsable directory of quote authors. Optionally rooted at one author category. | Author category (optional) |
| Author Categories | An index of your author categories. | None |
| Single Collection | One curated collection of quotes. | Collection id (required) |
| Collections | The index of curated collections. | None |
| Submit | The quote submission flow. | None |
| Single Quote | A direct link to one published quote. | Quote id (required) |

A few notes on choosing types:

- **Quote Wall** is the front door. If you add only one menu item, make it this one.
- **Quote Category** and **Authors Directory** let you build browse pages scoped to a specific category. The Quote Category type requires you to pick a quote category; the Authors Directory type lets you optionally pick an author category to root the directory, or show all authors if you leave it blank.
- **Single Quote**, **Author Profile**, and **Single Collection** are for spotlighting one specific item on your menu. You supply its id (or, for the collection and quote, pick it in the menu item). Most links to individual quotes and authors happen from within the app, not from menu items, so you only need these when you want a fixed menu entry for a particular item.
- **Submit** gives your community a dedicated "Submit a quote" link. Whether visitors can actually submit depends on your submission settings and permissions; see [Submissions and moderation](./submissions-and-moderation.md).

The front end runs as a single app, so wherever a visitor lands, the in-page navigation, search, and links carry them across the whole experience without needing a separate menu item for every screen.

## How the URLs are built

Community Quotes produces clean, nested SEF URLs, ported from the legacy component so existing links keep their shape.

### Nested category paths

Quotes and authors sit inside their category trees, and their URLs reflect that. A quote's address walks the path of its quote category before reaching the quote's own segment:

```
/your-menu/philosophy/stoicism/12-the-happiness-of-your-life
```

Here `philosophy/stoicism` is the quote category path and `12-the-happiness-of-your-life` is the quote. Authors work the same way against the author category tree:

```
/your-menu/ancient/13-marcus-aurelius
```

By default each item segment is its numeric id joined to its alias, written as `id-alias`. The id keeps the link stable even if you later change the alias, which is why this is the default and the safest choice for most sites.

Because the URL is built from the category path, the category structure you set up in [Quotes, authors, and categories](./quotes-authors-and-categories.md) directly shapes your addresses. It is worth settling on a category tree early.

### The menu item is the root

The first part of every URL is the route of the menu item the visitor is browsing under. Give your quote wall a menu item, and quote, author, category, and collection pages all resolve neatly beneath it. Without a matching menu item, Joomla falls back to a longer, generic URL, so a Quote Wall menu item is recommended even if it is the only one you add.

## Remove IDs from URLs

If you prefer addresses with no numeric ids at all, turn on **Remove IDs from URLs** on the **SEO** tab under **Components -> Community Quotes -> Settings** (this is the `routing.sef_ids` setting). With it on, quotes, authors, and categories route by alias only:

```
/your-menu/philosophy/stoicism/the-happiness-of-your-life
```

This produces the tidiest possible URLs, but it comes with one firm requirement.

:::warning
When IDs are removed, an alias is the only thing that identifies a page, so **every alias must be unique**. If two quotes, or two authors, share an alias, one of them cannot be resolved and the link will 404. Community Quotes already appends a numeric suffix to keep generated aliases distinct, but if you edit aliases by hand, keep them unique. If you see 404s after enabling this option, duplicate aliases are the first thing to check.
:::

Because turning this on changes the shape of every quote, author, and category URL, it is best set before you launch or before your links are widely shared. If you change it on an established site, expect the old id-carrying URLs to stop matching; set up redirects if those links are indexed or linked externally. See [Troubleshooting](./troubleshooting.md) for recovering from 404s after enabling this setting.

## SEO options

The same **SEO** tab in Settings controls two related front-end SEO features:

- **Generate schema.org Quotation**: adds structured data to quote pages so search engines can understand them as quotations.
- **OpenGraph share card**: adds OpenGraph tags so quotes preview nicely when shared on social platforms.

Both are on by default. They are listed alongside every other option in the [Settings reference](./settings-reference.md).

## Where to go next

- Set up the content these menus point at: [Quotes, authors, and categories](./quotes-authors-and-categories.md).
- Put a quote block anywhere with the module and shortcode: [Modules and plugins](./modules-and-plugins.md).
- Tune every option, including the SEO tab: [Settings reference](./settings-reference.md).
- Moving from the old component and keeping links working: [Migrating from version 1](./migrating-from-version-1.md).
- Chasing a 404 after enabling Remove IDs: [Troubleshooting](./troubleshooting.md).
