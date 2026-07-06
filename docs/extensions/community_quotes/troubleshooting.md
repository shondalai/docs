---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 60
---

# Troubleshooting

Common issues and quick fixes. If something here does not solve your problem, write to support@shondalai.com with your Joomla and PHP versions and a description of what you see.

## SEF pages 404 after turning on "Remove IDs from URLs"

This is the most common one. "Remove IDs from URLs" (the `routing.sef_ids` setting under **Components -> Community Quotes -> Settings -> SEO**) switches the router to alias-only URLs. With IDs in the URL, the number does the routing and the alias is only decoration. With IDs removed, the alias *is* the route, so every quote, author, and collection must have a unique, populated alias.

If some pages 404 right after you enable this option, one of two things is true:

1. **An item has an empty alias.** Older data can have a blank alias. The installer and every package update run an alias backfill that generates a unique alias for any quote that has none, so a fresh install or an update usually fixes this on its own. To force it for a single item, open the quote, author, or collection in the admin and save it once. Saving regenerates the alias.
2. **Two items share an alias.** Alias-only routing needs aliases to be unique. If two authors are both `john-smith`, one of them will resolve. Rename one alias so they differ.

A safe way to test the switch is to leave IDs in the URL, confirm everything routes, then enable "Remove IDs from URLs" and click through your menu items. If a page 404s, note its item and check its alias. See [Menus and SEF URLs](./menus-and-sef-urls.md) for the full URL scheme.

Aliases feed the nested URL path, so this also matters after a migration from version 1. See [Migrating from version 1](./migrating-from-version-1.md).

## A category menu item shows nothing, or the wrong tree

Community Quotes uses two separate Joomla category trees, and they are easy to mix up:

- **Quote categories** live under the extension `com_communityquotes`.
- **Author categories** live under the extension `com_communityquotes.author`.

Each tree is managed from its own admin submenu under **Components -> Community Quotes**, and each is a normal Joomla category tree in Joomla's category manager. When you create a "Quote Category" or "Author Categories" menu item, point it at a category from the matching tree. A Quote Category menu item pointed at an author category (or vice versa) will look empty because there are no items of that kind in it.

If a brand-new install shows no categories at all, the installer creates a single root "Uncategorised" quote category for you. Author categories start empty; add the first one from the author-categories submenu before you build an authors-by-category menu.

See [Quotes, authors, and categories](./quotes-authors-and-categories.md).

## A label shows as a raw key like COM_COMMUNITYQUOTES_...

This is a language or asset cache issue, not a bug in your data. Clear the Joomla cache (**System -> Clear Cache**) and do a hard refresh in your browser. If you just updated, your browser may be holding an old copy of the app assets. A hard refresh (Ctrl+F5, or Cmd+Shift+R) clears them.

## The admin screen is blank, or the app does not load

The admin and front end are a single React application. If a screen is blank:

1. **Clear caches.** Clear the Joomla cache and hard-refresh the browser so old assets are dropped.
2. **Check developer mode.** Under **Components -> Community Quotes -> Settings -> Developer**, "Vite dev mode" must be off on a live site. That mode tries to load the app from a local build server that only exists on a developer machine. With it off, the component always serves its built assets.
3. **Check the browser console.** A blocked script or a mixed-content warning shows up there and usually points straight at the cause.

## The admin toolbar is empty, or the app is not full height

This is by design, not a fault. Community Quotes takes over the whole admin content area with its own React shell, so it deliberately hides Joomla's empty component sub-toolbar and removes the surrounding padding. It does this only on its own pages (scoped to the component body), so the rest of your Joomla admin is untouched.

The shell measures the space left below the Joomla header and sizes itself to fill it. If it ever looks short or overlapped, it is almost always a stale asset: clear the Joomla cache and hard-refresh. A browser extension that injects its own toolbar can also change the measured height; test in a clean browser profile if you suspect one.

## Licensing or activation problems

Community Quotes receives updates through the shared Shondalai licensing system, delivered by the `plg_system_licensing` plugin. The licence panel in the admin talks to that plugin.

- If the licence panel reports that the manager is unavailable, enable **System - Shondalai Licenses** under **System -> Manage -> Plugins**.
- The licence connection is shared across every Shondalai extension on the site, so once one extension is activated the rest use the same account.
- If the panel returns no response, clear the Joomla cache and reload; the licence responses are sent with no-cache headers, but a proxy in front of your site can still cache them.

The Shondalai Core library is bundled in the package and is required. If a plugin or the component reports that a core class is missing, reinstall the full package so the bundled core library is refreshed. Keep the core library installed even if you remove the component, as long as other Shondalai extensions are present.

## The alias column is missing after an upgrade

The nested SEF router needs an `alias` column on the quotes table. A fresh install creates it. On an upgrade, the installer adds it during the update run, because the additive change cannot be expressed in a database-portable update script. Each run is guarded so it is a safe no-op once the column exists.

If you ever see an error about a missing `alias` column (for example after a partial or interrupted upgrade), reinstall the current package. The update step re-checks the column, adds it if it is absent, and backfills aliases for any quotes that lack one. It never removes data.

## Install or upgrade seems to have skipped a step

The installer does several things after copying files: it seeds any missing settings, creates the root quote category, seeds sample content only when both content tables are completely empty, adds the daily-digest Scheduler task in a disabled state, and backfills quote aliases. Every step is idempotent and best-effort, so a failure in one does not abort the install.

- **No sample quotes appeared.** Samples are only seeded into empty tables. If you already had quotes, or you are upgrading, seeding is skipped on purpose.
- **No digest task appeared in the Scheduler.** The task is only added when Joomla's Scheduler tables exist, and it is added disabled. Enable it from **System -> Scheduled Tasks**. See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).
- **Settings look wrong after an update.** Re-running the install or update reseeds only missing keys; it does not overwrite values you have changed.

## The daily digest is not sending

1. Turn the digest on under **Settings -> Email digest** (`digest.enabled`).
2. Enable the "Community Quotes - Daily Digest" task in **System -> Scheduled Tasks**. The installer adds it disabled.
3. Confirm Joomla's Scheduler is actually firing. A real system cron pointed at Joomla's scheduler is the most reliable trigger.
4. Confirm Joomla can send mail at all: **System -> Mail** and send a test.

See [Email digest and scheduled tasks](./email-digest-and-scheduled-tasks.md).

## Comments are not showing under a quote

Front-end discussion is delivered by QuillThreads. If a quote shows no discussion:

1. **Is QuillThreads installed?** The discussion thread appears only when the QuillThreads package is present. The bundled `plg_quillthreads_communityquotes` plugin is dormant without it.
2. **Is the plugin enabled?** Enable **QuillThreads - Community Quotes** under **System -> Manage -> Plugins** so quotes register as a commentable context.
3. **Hard-refresh.** The discussion element mounts through the SPA, so a stale asset can leave it out. Clear the cache and hard-refresh.

See [Collections, reactions, and discussion](./collections-reactions-and-discussion.md).

## A guest cannot react, comment, bookmark, or follow

These actions require a logged-in user. Guests see the buttons but are prompted to sign in when they click. This is expected. Newsletter sign-up and listening to a quote do not require login.

## Getting help

Contact us at https://shondalai.com/contact-us. Please include your Joomla and PHP versions, whether you are on a fresh install or an upgrade, and a screenshot of anything that looks wrong. It speeds up a diagnosis a great deal.
