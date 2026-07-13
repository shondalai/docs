---
id: overview
title: "Studio Pages: Page Builder"
sidebar_label: Overview
sidebar_position: 1
---

# Studio Pages: Page Builder

Studio Pages is the page builder included with every Shondalai Studio template. You assemble marketing and landing pages from ready-made sections, and your active template renders them, so they always match your storefront.

## What Studio Pages is

Studio Pages lets you build custom pages such as an About page, a campaign landing page, a help page or a collection showcase without touching code or layout overrides. A page is simply an ordered stack of sections: a hero, some text, a product grid, a call to action and so on. You pick the sections, fill in the content and save.

The design comes from your template, not from the page. Every section is styled by the Studio template that is currently active on your site, using the same colours, fonts and spacing as the rest of your storefront.

## Where to find it

Go to **Components → Studio Pages** in the Joomla administrator. This opens the Pages workspace, which contains the pages list, the preset chooser and the page editor.

## Key concepts

- **Pages are global.** Pages are not tied to a particular template or template style. If you switch from one Studio template to another, every page is automatically re-themed by the new template. Nothing needs rebuilding.
- **Pages are made of ordered sections.** Each page is a stack of sections that you can reorder, duplicate and remove. There are 12 section types, described in the [Section Reference](sections-reference.md).
- **Sections are themed automatically.** You never choose colours or fonts inside a section. The active template supplies the styling, so a page built once looks right on any Studio template.
- **Pages need a menu item to get a URL.** Visitors reach a page through a Studio Pages menu item. See [Publishing and Menu Items](publishing-and-menus.md).

## The pages list

The first screen shows every page on the site in a table:

| Column | What it shows |
|--------|---------------|
| Title | The page title, with its URL alias shown underneath |
| Status | Published, Unpublished or Archived |
| Sections | How many sections the page contains |
| Access | The view level that may see the page (Public, Registered and so on) |
| Modified | The date the page was last changed |

Click anywhere on a row to open that page in the editor. The **+ New page** button at the top starts a new page from a preset; it only appears if your user account is allowed to create pages.

If you have no pages yet, the list shows a short prompt to create your first page.

## The active template indicator

The top right of the pages list shows an **Active template** chip, for example `Active template: Meridian · Copper`. It names the Studio template and preset currently active on your site, which is the design your pages will render with. It updates automatically when you change the site's default template style or its preset.

:::note Changing a page's status
To publish, unpublish or archive a page, open the page and use **Page settings** in the editor, then save. The list screen itself has no status toggles, no bulk actions, no search box and no delete button today. There is currently no way to delete a page from the interface.
:::

## Next steps

- [Building a Page](building-a-page.md) walks through the presets and the editor.
- [Section Reference](sections-reference.md) lists every section type and field.
- [Publishing and Menu Items](publishing-and-menus.md) covers URLs, statuses and SEO.
