---
id: placing-comments-on-articles
title: Placing comments on articles
sidebar_label: Placing comments on articles
sidebar_position: 3
---

# Placing comments on articles

The comment thread reaches your articles through the content plugin, **Content - QuillThreads**. This page covers where the thread appears and how to control it per article.

## Default behaviour

Out of the box, the thread renders below the article body on the single-article view. It does not appear under article teasers in blog or category listings, so your category pages stay clean.

The thread only shows on the full article view (`com_content.article`), which is what you want in almost every case.

## Choosing the placement

Open the plugin options to change where the thread sits:

1. Go to **System → Manage → Plugins** and open **Content - QuillThreads**.
2. Set **Placement** to one of:
    - **After the article body** (the default).
    - **Before the article body**.
    - **At a manual token** only, so the thread appears solely where you place a `{quillthreads}` tag.
    - **Disabled**, to turn automatic placement off everywhere.
3. Save.

## Manual placement with a token

When you want the thread at a precise point in an article (for example, after a call to action but before related links), type a token directly into the article text:

- `{quillthreads}` places the thread at that exact spot.

The token wins over the automatic placement, so the thread appears once, where you put it.

## Turning comments off for one article

To hide comments on a single article without changing any global setting, add:

- `{quillthreads off}`

anywhere in the article body. This is handy for announcements, legal pages, or any article where a discussion does not belong.

## Excluding whole categories

If you never want comments on certain categories (a news wire, say, or a documentation section):

1. Open **Content - QuillThreads** plugin options.
2. Add the categories to **Excluded categories**.
3. Save.

Articles in those categories will not show the thread, even on the single-article view.

## The master switch

There is also a global on/off switch in the component settings. Open **Components → QuillThreads → Settings → General** and toggle **Enable comments**. When this is off, no article renders a thread, regardless of plugin placement or tokens. Use it for site-wide maintenance windows.

:::note
The order of precedence is: the master switch, then `{quillthreads off}` on the article, then excluded categories, then the placement setting and `{quillthreads}` token. If comments are not showing where you expect, check those in that order.
:::

## Comments beyond articles

QuillThreads is built around Joomla articles (`com_content`). The content plugin handles article placement for you. The comment engine itself is context-aware, which is how the [migration tools](./migrating-comments.md) can map comments from other systems onto your articles.

## Next steps

- [Appearance and theming](./appearance-and-theming.md)
- [Settings reference](./settings-reference.md)
- [Modules and plugins](./modules-and-plugins.md)
