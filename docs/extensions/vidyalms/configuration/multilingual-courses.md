---
title: Courses in more than one language
description: Organize Joomla courses by content language, build category catalogues, and link separate language versions.
---

You can offer an English course and a German course on the same site, give each its own catalogue, and let visitors move between their overview pages. Each version remains a separate course. Linking them does not copy lessons or share enrolments, quiz attempts, progress, grades, or certificates.

There are two language choices to keep in mind. **Content language** describes the material an author has written. **Interface language** controls labels, buttons, and messages. Changing the interface does not translate a lesson. See [Translate VidyaLMS](languages.md) for interface translations.

## Prepare Joomla

Set up Joomla's Content Languages, language-specific home pages, Language Filter plugin, and Language Switcher module as you would for any multilingual Joomla site. Install the frontend language packs you want visitors to use. VidyaLMS uses Joomla's enabled Content Languages for course selection; it does not maintain another language list.

Create your course categories under **VidyaLMS → Categories**. For example, you might have a shared **Training** parent with **English courses** and **German courses** beneath it. Set the language of each category in Joomla's category editor.

## Choose a course's language

Open the course editor and select its content language in the course details. Choose a category with the same language, or a category marked **All Languages**. VidyaLMS rejects a combination such as an English course in an explicitly German category, including changes made through the API or an importer.

When creating a course, selecting a language-specific category can fill in an empty language selection. Moving an existing course does not silently change its language: check both fields before saving.

- **All Languages** means you deliberately want to share the same content across languages. It does not mean that translations exist.
- **Not set** means the course has not been classified yet. It is not treated as All Languages. It remains available in an otherwise eligible catalogue that shows all content languages, but is excluded by a current-language filter.
- An older course with incomplete language information can still receive unrelated edits. Correct its language and category together when you are ready.

Modules and lessons belong to their course's content language. You do not need to classify every lesson separately.

## Create a catalogue for a category

Create or edit a Joomla menu item of type **VidyaLMS course catalogue**, or use the **Course category** menu type for a category page. Choose the category that should define that entry's scope.

| Option | What it does |
| --- | --- |
| Category | Limits the catalogue to that branch. A visitor's filter cannot replace it with an unrelated category. |
| Include subcategories | Includes accessible descendants. Leave it off to show only courses directly in the selected category. |
| Content languages | Show all content languages, or follow the current site language. |
| Include All Languages courses | When following the site language, also include deliberately shared content. Category and access restrictions still apply. |

The defaults are **all content languages** and **no subcategories**. Turn on the narrower language behaviour deliberately; existing single-language catalogues do not need to change.

The category filter shows eligible categories with their full title path and language. Search, pagination, and Reset retain the menu's scope. With subcategories enabled, selecting a descendant narrows the list to its permitted subtree. Unpublished or inaccessible parents hide their descendants, even when that parent is above the menu's selected root.

You do not need a menu item for every course. VidyaLMS builds course and category links beneath a suitable language-specific course, category, or catalogue menu item. Keep course slugs unique across the site, including across language versions. Joomla continues to own the outer menus and breadcrumbs.

## Link corresponding courses

1. Create the separate courses and save an explicit content language for each.
2. Open one course's settings and find **Courses in other languages**.
3. Choose a language, search for its course, and select it.
4. Repeat for other versions, then choose **Save language links**.

There can be one course per language in a group. Courses marked All Languages or Not set cannot join a language group. You must be able to edit every course affected by a change, including a counterpart whose link you remove. If a selected course already belongs to another group, unlink it there first; VidyaLMS does not merge groups automatically.

Link changes have their own save button. If another editor changes the group, reload the links before trying again. Unlink a course before changing its content language. Removing links never deletes course content or learning records. Removing all links from one course leaves its other former counterparts linked to each other.

Joomla's **Multilingual Associations** screen lists VidyaLMS courses and their native association status. Its course edit links open the VidyaLMS editor, where you choose and save counterparts. Native side-by-side course editing is not part of this workflow. Category associations still use Joomla's category editor.

The central course listing uses a small read-only database view installed with the package. If your database account cannot create views, the installer reports a warning: the course editor's linking feature still works, but the central Joomla course listing is unavailable until your host grants that permission and you reinstall the package.

## What learners see

On a public course overview, the language switcher can open a linked course's published, accessible overview. VidyaLMS also shows explicit links to available language versions on the overview. A paid course can have a public overview; its lessons still require the appropriate access. Draft and unavailable counterparts are not advertised, and private versions only appear to people with permission to view them. Without an eligible counterpart, Joomla uses its ordinary menu or home-page fallback.

Inside the player or an active quiz, switching interface language keeps the same course and activity. To study a different language version, return to the course overview and choose its language link. There is no guessed lesson-to-lesson mapping between separate curricula.

**My learning** continues to show the learner's enrolments when the interface language changes. If one purchase should include several language versions, map the shop product to all of those courses separately. Associations do not grant access.

A new quiz attempt remembers the locale used when it starts. Answer interpretation, submission, background closure, and regrading keep that locale, so a decimal answer is not reinterpreted after an interface-language change. Older attempts created before this information was recorded use the existing request-locale fallback.

Emails, assignments, and certificates continue to refer to their original course. Linking another language version does not replace destinations in earlier messages or regenerate issued certificates.

## Find and manage courses

The administrator and instructor course lists have a content-language filter independent of the administrator's interface language. Language and linked-language status appear with the course. Filters are retained in the list URL, so reload and browser Back/Forward restore them. Teaching permissions and draft visibility still apply.

The supplied **Smart Search – VidyaLMS** plugin indexes eligible public course titles, summaries, and descriptions, with language and category information. Published courses are searchable; archived results follow Joomla's Search archived setting. It does not index lesson answers, learner progress, or private courses. Category publication and access are checked through the entire ancestry; category edits refresh affected course entries.

Two cases intentionally stay out of Smart Search: courses whose language is not set, and category paths that require several different restricted Joomla access levels. Joomla's search index has one access-level field and cannot safely express that latter combination. Those courses can still appear in VidyaLMS's own catalogue for an eligible visitor. Run Joomla's Smart Search indexing after initially enabling the plugin or changing the site's language setup.

Keep learner pages out of shared page caches. Course overviews contain access and enrolment information and send no-cache instructions; configure any proxy or caching extension to respect them. Do not configure an external cache to serve one visitor's learning pages to another.

## WordPress

The content-language field, language filter in managed course lists, and frozen quiz-attempt locale also apply to WordPress. WordPress without a content-language registry uses a language-tag input, such as `en-GB` or `de-DE`. Joomla categories, menu scopes, native associations, and Language Switcher integration are Joomla features; this does not add integration with a WordPress multilingual plugin.

## Check before publishing

- Visit each catalogue as a guest and a learner. Check search, category selection, page two, and Reset.
- Hide a parent category and confirm its courses disappear from the catalogue and search results.
- Open course links directly, reload them, and use Back/Forward. Check both your SEF configuration and ordinary Joomla query-string links.
- Follow a language counterpart link, then switch the interface language inside a lesson and quiz. Confirm the current course and activity stay the same.
- Check a paid course, a private course, and an unpublished counterpart using an ordinary learner account.
- Check long translated titles, breadcrumbs, keyboard navigation, and a narrow mobile screen.

Course classifications, menu settings, and native association records are stored in the database and retained during normal package updates. Include the database in your backups.
