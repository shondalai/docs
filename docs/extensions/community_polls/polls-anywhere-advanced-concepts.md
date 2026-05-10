---
id: polls-anywhere-advanced-concepts
title: Polls Anywhere (removed in version 7)
sidebar_label: Polls Anywhere (removed)
sidebar_position: 9
---

# Polls Anywhere has been removed in version 7

Polls Anywhere was the JavaScript-snippet feature in Community Polls 6 and earlier. It let you copy a small `<script>` block from a poll's detail page and paste it into any external site so the poll could load and accept votes from outside your Joomla install.

The feature has been removed in **Community Polls 7**. The bundled `anywhere.js` file no longer ships, and the snippet panel on the poll detail page is gone. Existing snippets pasted on external sites will stop loading after you upgrade.

## Why we removed it

Polls Anywhere predated modern browser security defaults. Sites loading the script today typically have to deal with content-security-policy blocks, mixed-content warnings, third-party-cookie restrictions, and CORS edge cases that we could not paper over without compromising the security of the host Joomla site.

Rather than ship a feature most installs could no longer use cleanly, we have chosen to focus on first-party embedding paths that work reliably on Joomla 5 and 6.

## What to use instead

For embedding inside your own Joomla site, the modern equivalents cover most use cases:

- **Inside articles** — use the `{poll id=N}` shortcode or the editor button. See [Display polls in Joomla articles](./display-polls-in-joomla-articles.md).
- **Inside any module position** — use the Random Poll, Latest Polls, or Categories modules.
- **As a dedicated page** — create a Community Polls menu item.

For embedding on a different site (someone else's blog, a static landing page, etc.), the cleanest option today is an `<iframe>` pointing at the poll page on your Joomla site. Visitors vote on your site, results live on your site, and your CSP and cookie rules apply normally.

If you have a use case that the embedding paths above do not cover, let us know through [shondalai.com/support](https://shondalai.com/support).
