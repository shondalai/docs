---
id: custom-module-positions-in-community-polls
title: Where to place modules around Community Polls
sidebar_label: Module placement
sidebar_position: 6
---

# Where to place modules around Community Polls

In version 6 the front-end pages were template overrides and exposed a handful of internal module positions (`jcp-above-toolbar`, `jcp-below-content`, and so on) that you could publish modules into.

Version 7 renders the front end as a single-page React application. The component no longer ships internal module positions of its own — there is no template override to drop a `<jdoc:include type="modules" name="jcp-..." />` into.

This page covers what you can do instead.

## Use your Joomla template's positions

Modules published into your Joomla template's regular positions (sidebar, top, before-content, after-content, footer, etc.) appear around the Community Polls page exactly as they do around any other component. If you want an Adsense block above every poll page, publish it in the position your template uses for content-area banners and assign it to the Community Polls menu items.

This is the simplest route and works with every Joomla template.

## Restrict modules to Community Polls pages

To make a module appear only on Community Polls pages:

1. Open the module in **Content → Site Modules**.
2. Switch to the **Menu Assignment** tab.
3. Pick **Only on the pages selected** and tick the menu items that point at Community Polls views (the polls listing, the categories listing, individual category drill-downs, etc.).
4. Save.

If you have a lot of poll pages and want to assign the module to "any Community Polls page", give the relevant menu items a shared menu-item alias prefix or use a third-party module-assignment plugin that supports component-level rules.

## Place a poll inside an article

If your goal is the inverse — putting a poll inside an article rather than putting a module inside the polls page — see [Display polls in Joomla articles](./display-polls-in-joomla-articles.md). The editor button and the `{poll id=N}` shortcode handle that case directly.

## Place a poll inside another component's view

The Random Poll, Latest Polls, and Categories modules all work in any module position from any component. Publish them and assign them to the menu items you want them to appear on. Most templates make this straightforward through the standard module assignment panel.

## Future plans

If your site relies on the legacy `jcp-*` positions for ads or third-party widgets and the workarounds above do not fit your layout, let us know — we are happy to consider exposing slot positions inside the React shell in a future minor release if there is demand. Open a ticket through your account at [shondalai.com/support](https://shondalai.com/support).
