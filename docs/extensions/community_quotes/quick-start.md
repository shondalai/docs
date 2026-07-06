---
id: quick-start
title: Quick start guide
sidebar_label: Quick start
sidebar_position: 2
---

# Quick start guide

This guide takes you from a fresh install to a working quote wall with a menu item and a module, in about fifteen minutes. You do not need to touch most settings to get started; the defaults are sensible, and a new install even seeds a few sample authors and quotes so you have something to look at right away.

## 1. Install the package

Install it the normal Joomla way:

1. Sign in to **System -> Install -> Extensions** in your Joomla admin.
2. Drag the `pkg_communityquotes_x.x.x.zip` file onto the upload area, or pick it with the file selector.
3. Wait for the success message.

The package installs the component, the site module, the content, editor button, task, Rewardify, and QuillThreads plugins, and the shared Shondalai Core library. See [Overview](./overview.md) for what each piece does.

After install, the component sits at **Components -> Community Quotes**.

:::note
Community Quotes needs Joomla 5 or 6 and PHP 8.1 or newer. The installer checks both and stops with a clear message if either is too old.
:::

## 2. First look

Open **Components -> Community Quotes**. The admin is a single-page app with a navigation column down the left:

- **Overview** is a dashboard of key numbers, recent activity, and top quotes.
- **Content** holds Quotes, Authors, Collections, Comments, and Categories.
- **Engagement** holds Moderation, where community submissions and reports wait.
- **Configure** holds the Modules and Editor plugin guides and the Settings page.
- **System** holds the Migration tool for bringing data across from the old component.

On a fresh install you will already see a handful of sample quotes and authors. You can edit or delete them once you are comfortable, or keep them while you get set up.

## 3. Create your categories

Quotes and authors each have their own category tree, and both are managed in Joomla's category manager. The component gives you direct links to each one.

1. From **Components -> Community Quotes**, open the **Categories** submenu at the top for quote categories, or use the **Author Categories** submenu for author categories.
2. Create at least one quote category, for example "Philosophy" or "Science".
3. Create at least one author category if you want to group authors, for example "Ancient" or "Modern". This is optional; authors can sit in the default category.

Both trees support the usual nesting, aliases, and ordering. For how the two trees relate and why they are separate, see [Quotes, authors, and categories](./quotes-authors-and-categories.md).

:::tip
A fresh install creates a default "Uncategorised" quote category so nothing is ever left without a home. You can rename it or add your own alongside it.
:::

## 4. Add an author

Every quote needs an author, so add one first.

1. In the admin, open **Authors** and start a new author.
2. Give the author a **name**. An alias is generated for you and is used in the author's URL.
3. Optionally add a **role** (for example "Roman Emperor, Stoic Philosopher"), birth and death years or a display years label, a biography, a portrait or avatar colour, and an author category.
4. Mark the author **verified** or **featured** if you want the badge and the extra prominence.
5. Save.

You can also build a **life-event timeline** on an author, a list of years and labels that shows on the author's profile. See [Quotes, authors, and categories](./quotes-authors-and-categories.md).

## 5. Add a quote

1. Open **Quotes** and start a new quote.
2. Type the **quote text** and pick the **author** you just created.
3. Choose a **quote category**, and add **tags** to make the quote easier to find.
4. Optionally add a **source**, a **source URL**, and a **year**, and set the **attribution** status (verified, disputed, translation, or unverified).
5. Set the state to **published** so it shows on the site, and save.

That is the whole content model: an author, a quote that points at that author, a category, and some tags. Attribution and moderation are covered in [Submissions and moderation](./submissions-and-moderation.md).

## 6. Decide how visitors submit quotes

If you want members to contribute quotes themselves, check the submission settings.

1. Open **Settings** and go to the **Submissions** tab.
2. Leave **Allow submissions** on to expose the four-step submit flow on the front end.
3. Leave **Require moderation** on so new submissions wait in the queue before they go live.

New submissions show up under **Moderation**, where you approve, reject, or flag each one. The full picture is in [Submissions and moderation](./submissions-and-moderation.md).

## 7. Place a menu item

A menu item gives Community Quotes a home on your site and a clean base URL.

1. Go to **Menus** and pick the menu you want to add to, then create a new menu item.
2. For **Menu Item Type**, choose **Community Quotes** and pick a layout. The available types are:
   - **Quote Wall** (the main browsing page)
   - **Quote Category** and **Quote Categories**
   - **Author Profile** and **Authors Directory**
   - **Author Categories**
   - **Single Collection** and **Collections**
   - **Submit**
3. Give the item a title and save.

Start with **Quote Wall** as your main entry point. The other types are useful for linking straight to a category, an author, or a collection. How these turn into clean URLs, and the "Remove IDs from URLs" option, are covered in [Menus and SEF URLs](./menus-and-sef-urls.md).

## 8. Place a module

The module puts a quote in a sidebar, header, or footer without sending visitors to the wall.

1. Go to **Content -> Site Modules** and create a new **Community Quotes** module.
2. Pick a **display mode**. The eight modes are Quote of the Day, Random, Carousel, Mini-wall, Featured author, Collection feed, Ticker, and Digest sign-up.
3. Depending on the mode, set the category, author, or collection it should draw from, and how many quotes to show.
4. Choose a module position, the pages it should appear on, and save and publish.

**Quote of the Day** is a good first choice for a sidebar. The full list of modes and their options is in [Modules and plugins](./modules-and-plugins.md).

## 9. Make it yours (optional)

A few settings worth a look before you go live, all under **Components -> Community Quotes -> Settings**:

- **Display and branding**: the aesthetic, dark mode, accent colour, density, and fonts. See [Appearance and theming](./appearance-and-theming.md).
- **Share cards** and **Audio (TTS)**: the share image defaults and the read-aloud voice.
- **Email digest**: turn on the daily quote email and set the send hour. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
- **Privacy**: whether guests can react without logging in. See [Privacy and GDPR](./privacy-and-gdpr.md).

Every option is listed in the [Settings reference](./settings-reference.md).

## 10. Quote discussion (optional)

Discussion under a quote is powered by QuillThreads, Shondalai's comments engine, through the bundled bridge plugin. Install QuillThreads and enable the **QuillThreads - Community Quotes** plugin to give each quote page a full comment thread. Without QuillThreads, quote pages simply show no discussion section. See [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

## 11. Bringing data from the old component

If you are upgrading from the previous Quotes component, you do not have to start from zero. Open **Components -> Community Quotes -> Migration**, preview what will move, then run the migration. It preserves your IDs and category IDs and is safe to run more than once. See [Migrating from version 1](./migrating-from-version-1.md).

## 12. Keeping Community Quotes up to date

When a new version is released, **System -> Update -> Extensions** picks it up automatically through the update site. Click **Update** next to the Community Quotes row. We recommend a database backup before any major-version upgrade.

## Next steps

- [Quotes, authors, and categories](./quotes-authors-and-categories.md)
- [Menus and SEF URLs](./menus-and-sef-urls.md)
- [Settings reference](./settings-reference.md)
- [Submissions and moderation](./submissions-and-moderation.md)
- [Migrating from version 1](./migrating-from-version-1.md)
