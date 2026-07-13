---
id: publishing-and-menus
title: "Publishing and Menu Items"
sidebar_label: Publishing & Menus
sidebar_position: 4
---

# Publishing and Menu Items

A saved page becomes reachable on your site through a Studio Pages menu item. This page covers giving a page a URL, what page statuses and access levels mean for visitors, and the SEO fields.

## Give a page a URL

1. Make sure the page is **Published**: open it in the editor, set **Page settings → Status** to Published and save. The menu picker only lists published pages.
2. Go to **Menus → [your menu] → Add New Menu Item**.
3. Next to **Menu Item Type**, click **Select** and choose **Studio Pages → Studio Page**.
4. Next to the **Select page** field, click **Select**. A picker opens listing your pages with their Title, Alias, Status and ID. Use the search box or the pagination to find the page, then click its title to choose it. A **Clear** button removes the current choice.
5. Give the menu item a title, choose its position in the menu and save.

You cannot save the menu item without choosing a page; the Page field is required. Only published pages appear in the picker, so publish first.

Multiple menu items can point to the same page, for example one in the main menu and one in the footer menu.

## The page URL

The SEF URL is built from the page alias and the menu item's position in the menu. A page with its own menu item lives at that menu item's address, for example `/about-us`. When a page is linked without a dedicated menu item, its alias is used as the URL segment under another Studio Pages menu item.

:::note Aliases are unique
The alias is set in the editor's Page settings and must be unique across all pages. If a duplicate is saved, a unique suffix is appended automatically, so always check the final alias in the editor after saving.
:::

## What visitors see for each status

| Page state | What a visitor gets |
|------------|---------------------|
| Published, access level held | The page renders normally |
| Unpublished | A 404 "page not found" error |
| Archived | A 404 "page not found" error |
| Published, access level not held | A 403 "access denied" error |

:::warning Unpublishing a page does not hide its menu item
The menu picker only lists published pages, but nothing re-checks that later. If you unpublish or archive a page that has a menu item, the link stays in your menu and visitors who click it get a 404. When you take a page down, unpublish its menu item too.
:::

## Access levels

**Page settings → Access** controls who may view the page, using your site's normal Joomla view levels (Public, Registered, Special and any custom levels). A visitor without the required level gets a 403 access denied error rather than a 404.

The menu item has its own Access setting in Joomla. Set it to match the page's level, so visitors are not shown a menu link they cannot open.

## SEO

- **Meta description**: set it in the editor under **Page settings → Meta description**. It is used as the page's description tag. If the page has none, the menu item's meta description (on the menu item's Metadata tab) is used instead.
- **Browser title**: the browser tab shows the page title. A menu item can override this with its own Browser Page Title on the **Page Display** tab.
- **Alias**: keep aliases short and readable; they form the page URL.

## Related pages

- [Building a Page](building-a-page.md) covers the editor and Page settings.
- [Overview](overview.md) explains how pages relate to your active template.
