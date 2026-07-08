---
id: community-quotes-changelog
title: Community Quotes Changelog
sidebar_label: Changelog
description: Complete version history for the Community Quotes extension
sidebar_position: 3
---

# Community Quotes Changelog

All notable changes to Community Quotes are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [6.0.1] - 2026-07-08

### 🔧 Changed
- Minor updates and improvements

## [6.0.0] - 2026-07-03

Community Quotes 6.0.0 is a complete, ground-up rewrite for Joomla 5 and Joomla 6.
The legacy component has been replaced by a modern Joomla MVC codebase and React 19
single-page apps for the administrator and site experiences. A non-destructive,
idempotent migration brings existing authors, quotes, collections, comments, and
reactions forward with their row IDs intact so links and SEF URLs keep working.

### Added

#### Quote Wall and Reading Experience

- Added a quote wall with a Quote of the Day hero and masonry feed.
- Added sort orders for trending, newest, most discussed, most loved, verified only, and featured quotes.
- Added category filters with deep-linkable URLs, tag filters, and full-text search.
- Added per-quote pages with provenance, attribution status, reactions, discussion, and similar quotes.
- Added browser text-to-speech listen mode with play-count tracking.
- Added multi-language quote chips with contributed translations and attribution markers.

#### Community and Membership

- Added four reactions per quote: Inspired, Agree, Makes me think, and Disagree.
- Added bookmarks with a dedicated Saved view for members.
- Added member-created collections with follow support, profile pages, previews, and follower counts.
- Added add-to-collection actions on quote cards and single-quote pages.
- Added a four-step Submit a Quote wizard with attribution checking, confidence scoring, required source, category, tags, and language.
- Added moderation routing based on submission rules and per-day limits.
- Added author profiles with timelines, biography, verified badges, follower counts, and follow actions.
- Added a filterable author directory and Rising Authors rail.
- Added gamification with submission streaks and badge progress.
- Added a member account menu with Saved and Email Preferences links.

#### Sharing and Embedding

- Added downloadable browser-rendered share cards in 1080x1350, 1080x1080, and 1920x1080 formats.
- Added the `{cquote}` shortcode with card, blockquote, pull quote, and inline styles.
- Added a `{cquote off}` token to disable shortcode processing where literal text is needed.
- Added an editor toolbar button for TinyMCE and JCE that opens a quote picker and inserts the shortcode.

#### Email, Digest, and Notifications

- Added daily and weekly quote digests delivered by a Joomla Scheduler task.
- Added member notification preferences for digest frequency, submission updates, and comment-reply alerts.
- Added one-click token unsubscribe links.
- Added an administrator email template editor with subject, HTML body, enable switch, reset, test send, and live preview.
- Added email branding controls for sender identity, logo, titles, footer copy, unsubscribe link, and brand colors.

#### Administration

- Added a React administrator dashboard with KPI cards, a 30-day submission activity chart, and top quotes.
- Added dense table-and-drawer managers for quotes, authors, collections, and tags.
- Added a moderation workspace for pending submissions and open reports.
- Added focused settings tabs for general, display, submissions, moderation, audio, share cards, SEO, privacy, digest, email branding, AI verification, and developer options.
- Added a categories browser for quote and author category trees.
- Added a modules gallery that previews all eight site-module modes.
- Added editor-plugin configuration for default embed style and auto-link behavior.

#### Site Module and Plugins

- Added `mod_communityquotes` with Quote of the Day, Random, Carousel, Mini-wall, Featured Author, Collection, Ticker, and Digest signup modes.
- Added content, editor-button, and task plugins.
- Added a dormant Rewardify adapter plugin that awards points when Rewardify is installed.
- Added a QuillThreads plugin that registers quotes as a commentable context when QuillThreads is installed.

### Changed

- Rebuilt the extension on modern Joomla MVC for Joomla 5 and Joomla 6.
- Replaced legacy controllers, models, helpers, and jQuery views with PSR-4 namespaced PHP services and React apps.
- Moved database access to Joomla query builder usage with parameter binding and quoted identifiers.
- Normalized the schema under the `#__cquotes_` prefix with utf8mb4 collation.
- Added a scoped `--cq-*` design-token system with appearance presets and light, dark, and auto modes.
- Added search-engine-friendly routing for quotes, authors, and collections.

### Security

- Added CSRF protection and permission checks to write endpoints.
- Required `core.manage` for administrator API access.
- Scoped member read endpoints to the current session user instead of client-supplied user IDs.
- Added anonymous reaction controls and privacy export/removal paths for member content.

### Upgrade Notes

- Back up the database and files before installing.
- Install the package over the legacy build.
- Open the administrator Migration screen, review the counts, and run the migration.
- Enable the QuillThreads plugin to turn on discussion when QuillThreads is installed.
- Review settings, publish the site module, and choose the desired module mode.

## [5.1.0] - 2025-10-24

### Added

- Added Joomla 6 compatibility.
- Added Rewardify Points support.

### Changed

- Updated copyright headers.

### Fixed

- Fixed the margin of the batch button on the administrator toolbar.

## [5.0.0] - 2023-09-24

### Added

- Added Joomla 5 support.

### Removed

- Removed the legacy layer for Joomla 3.

### Upgrade Notes

- This release contains breaking changes.

## [4.2.2] - 2023-02-05

### Added

- Added PHP 8.1 support.

### Fixed

- Fixed an error on the form layout menu when SEF is disabled.
- Fixed PHP deprecation notices.
- Removed unused language strings.

## [4.2.1] - 2022-08-04

### Fixed

- Fixed an installer issue.

## [4.2.0] - 2022-07-30

### Changed

- Added spacing between the sharing buttons block and quote suggestions.

### Fixed

- Fixed inability to check in the quotes table from Joomla Global Check-in.
- Fixed a warning on the categories page in Joomla 4.
- Fixed PHP notice messages on the quotes feed page.
- Fixed errors when the component redirects to login or another page.

## [4.1.0] - 2021-08-10

### Added

- Added Joomla 4 support.
- Added a new Bootstrap 5 based layout.
- Added PHP 8 support.

### Fixed

- Fixed issues with author categories routing.

## [4.0.1] - 2020-10-09

### Fixed

- Fixed toolbar menu items not being highlighted on their respective pages.
- Fixed pagination on popular quotes.

## [4.0.0] - 2020-09-25

### Added

- Added author avatars in the backend listing page.
- Added Joomla 4 Beta 4 support.
- Added Joomla router support with modern routing and remove-IDs support.
- Added a Bootstrap 4 layout for all pages.
- Added a missing language string for EasySocial user points setup.

### Fixed

- Fixed avatar upload failures.
- Fixed the category list layout.
- Fixed avatar folders not being created automatically on first install.
- Fixed Unicode URL creation when saving items.

## [3.1.0] - 2019-07-21

### Added

- Added a legacy layer for supporting Joomla 4 in the Community Quotes v4 release.
- Added a content plugin to show user answers in Joomla articles.
- Added a sh404SEF plugin.
- Added canonical URLs on all question pages.
- Added a legacy router file.

### Changed

- Updated the default table character set to `utf8mb4_unicode_ci`.
- Removed deprecated API usage.

### Fixed

- Fixed EasySocial points not being awarded.
- Fixed live search when SEF is disabled.
- Fixed Community Answers module errors on some Joomla versions.
- Fixed category pages not showing the category title in the browser title bar.
- Fixed category meta descriptions not being used on category pages.
- Fixed misaligned category list layout when author categories are enabled.

## [3.0.5] - 2018-01-12

### Added

- Added support for custom fields and field groups on quotes and authors.

### Changed

- Updated Kommento integration for newer versions.
- Removed redundant options.
- Added missing language strings.

### Fixed

- Fixed the Show Search Box option on category pages.

## [3.0.4] - 2017-10-10

### Added

- Added a Community Builder plugin to show user quotes on their profile as a tab.

### Changed

- Added table indexes for performance improvements.

### Fixed

- Fixed author names not being shown in backend listings for Joomla users.

## [3.0.3] - 2017-07-15

### Added

- Added AltaUser Points support.
- Redirected users to the quote details page after saving a quote.
- Redirected users to the quotes listing after a quote is sent for moderation.

### Fixed

- Fixed author names being shown multiple times when using multilingual mode.
- Fixed points not being awarded when someone likes or dislikes a quote.
- Fixed avatars showing as empty images after upload.

## [3.0.2] - 2017-04-09

### Added

- Allowed guest users to rate quotes.
- Allowed guest users to vote on quotes.

## [3.0.1] - 2017-02-25

### Fixed

- Fixed Bootstrap not loading on templates without Bootstrap support.
- Fixed inability to hide quote options on the frontend.

## [3.0.0] - 2016-05-28

### Added

- Added a references field to the quotes form.

### Changed

- Added PHP 7 compatibility.

### Fixed

- Fixed bugs from the beta release.

## [3.0.0.b3] - 2016-03-22

### Changed

- Added Joomla 3.5 compatibility updates.

### Fixed

- Fixed an empty box shown when categories are hidden.
- Fixed activity stream behavior so it respects the user display name option.
- Fixed other beta issues.

## [3.0.0.b2] - 2016-02-12

### Added

- Added missing language strings.
- Added a categories listing page.

### Fixed

- Fixed association issues.
- Fixed beta bugs.

## [3.0.0.b1] - 2016-01-27

### Added

- Added a redesigned interface fully integrated with Joomla APIs.

## [2.2.0] - 2015-07-09

### Added

- Added nine configuration options to customize elements on listing pages.
- Added ten configuration options to customize elements on quote details pages.
- Added a configuration option to show or hide one or more quote suggestions.
- Added a permission setting to edit own state.
- Added configurable visibility for likes and dislikes for users without vote permission.
- Updated sharing tools to use the AddThis async function.

### Fixed

- Fixed publish and unpublish actions for quotes.

## [2.1.1] - 2015-03-03

### Added

- Added Joomla 3.4 support and sidebar updates.
- Added a like and dislike feature for quotes.
- Added a view comments link on listing pages when a comment system is enabled.
- Added quote counts on quote category listing pages.
- Added an option to show author avatars in the random quote module.
- Added CjForum Points System support.
- Added CjForum Activity Stream support.
- Added CjForum Avatars support.
- Added CjForum Profiles support.

### Changed

- Changed the header size of categories.

### Fixed

- Fixed carriage return and line feed rendering on quote details pages.
- Fixed duplicate author detection and prevention.
- Fixed public visitor access to author pages and author lists.
- Fixed the random quote module not displaying author names when a logged-in user posts under their own name.
- Fixed popular quotes always showing latest quotes in the Community Quotes module.
- Fixed alias being mandatory.
- Fixed avatar size options.
- Fixed pagination for popular and author quotes.

## [2.1.0] - 2014-10-01

### Added

- Used Chosen only when it is available for selecting list entries.
- Updated icons with Font Awesome icons.
- Added a quote icon to the quote title.
- Changed the title from `h3` to `h1` for better SEO.
- Added a better tag selection box using Chosen on the form page.

### Fixed

- Fixed the submit button.
- Fixed missing User Layout menu item visibility.
- Fixed the missing My Quotes menu item on the toolbar.

## [2.0.19] - 2014-06-22

### Fixed

- Fixed the countries selection.
- Fixed author profile submission in the backend.
- Fixed the wrong brand URL on the author page toolbar.

## [2.0.18] - 2013-11-10

### Added

- Added an alias field to the frontend form for administrators.

### Fixed

- Fixed search box sizing in backend listings.

## [2.0.17] - 2013-10-12

### Fixed

- Fixed administrator updates to quote aliases.

## [2.0.16] - 2013-08-14

### Added

- Added RSS feed support.

## [2.0.15] - 2013-08-07

### Fixed

- Fixed errors when there are no subcategories on category listings.
- Fixed Kommento plugin issues.

## [2.0.14] - 2013-07-31

### Changed

- Enhanced the search box.

### Fixed

- Fixed untranslated category tooltips.

## [2.0.13] - 2013-07-08

### Added

- Added CComment support.

## [2.0.12] - 2013-07-07

### Fixed

- Fixed user profile links when the author is the same as the quote submitter.

## [2.0.11] - 2013-07-03

### Fixed

- Fixed quote and author category counts not incrementing when new quotes or authors are added.

## [2.0.10] - 2013-06-26

### Fixed

- Fixed missing administrator notifications.

## [2.0.9] - 2013-06-19

### Fixed

- Fixed points and activity stream behavior.

## [2.0.8] - 2013-06-01

### Added

- Enhanced toolbar menu items to load only selected category quotes.

### Fixed

- Fixed display of quotes in unauthorized categories.
- Fixed category search on the advanced search page.

## [2.0.7] - 2013-05-15

### Changed

- Enhanced multilingual support.
- Updated the sh404SEF plugin.

### Fixed

- Fixed aliases not being saved during quote updates.

## [2.0.6] - 2013-05-14

### Added

- Added multilingual support for quotes listings.

### Fixed

- Fixed empty countries lists.
- Fixed administrator editing of author avatars.

## [2.0.5] - 2013-05-11

### Fixed

- Fixed quote suggestions after the first tab not loading.

## [2.0.4] - 2013-05-10

### Added

- Added custom module positions `quotes-list-below-pagination` and `quotes-list-above-pagination`.

### Changed

- Removed unused language strings.

### Fixed

- Fixed registered users being unable to upload author avatars.
- Fixed author category display.
- Fixed Joomla editor enablement.

## [2.0.2/3] - 2013-05-09

### Changed

- Added help text for the search page.
- Removed add-to-root-category behavior from the category list.

### Fixed

- Fixed category editing.
- Fixed deleting multiple quotes at once.
- Fixed avatar saves from the frontend.

## [2.0.1] - 2013-05-08

### Added

- Added category description support.

### Fixed

- Fixed category saving.
- Fixed unpublished categories being shown.

## [2.0.0] - 2013-05-03

### Added

- Added Joomla 3 support.
- Added multi-level categories for quotes.
- Added an authors listing page.
- Fully rewrote the frontend and backend with Bootstrap support.
- Added a tags listing page to edit and manage tags from the frontend.
- Added tag descriptions and Unicode character support.
- Added frontend and backend author profile editing.
- Added quote moderation for user-submitted quotes.
- Added seamless integration of author profiles and user profiles at the same time.
- Added a categories module to display author and quote category trees.

### Changed

- Replaced the built-in comment system with third-party comment system integrations.

## [1.3.3] - 2012-12-28

### Fixed

- Fixed a blank page in search results.

## [1.3.2] - 2012-11-28

### Added

- Added quote names in points activity.

### Fixed

- Fixed global select all in the administrator quotes list.

## [1.3.1] - 2012-11-26

### Fixed

- Added a hot patch for self quotes.

## [1.3.0] - 2012-11-26

### Added

- Added Joomla 2.5 support.
- Added PHP 5.3 strict standards support.
- Added CjLib component support.
- Added multilingual URL support for Joomla 2.5.
- Added CjBlog avatars support.
- Added support for submitting a quote under the user's own name instead of an author name.
- Loaded all users on list pages at once for better performance.

### Fixed

- Fixed saving descriptions in HTML.
- Fixed typos in English language files.
- Fixed year selection so past years can be selected.
- Fixed edit links being shown to unauthorized users, which produced 403 errors.

## [1.2.0] - 2011-12-06

### Added

- Added a JomSocial application for user-submitted quotes.
- Added frontend and backend editing for authors and quotes.
- Added nested category breadcrumbs or back button support.
- Added ability to turn off mandatory fields.

## [1.1.3] - 2011-09-26

### Added

- Added latest and most popular quotes module.

### Changed

- Made internal API changes.

### Fixed

- Fixed a warning message on author profile pages.
- Fixed random quote module display of submit quote buttons for unauthorized users.

## [1.1.2] - 2011-09-19

### Added

- Added JomSocial activity stream entries when new quotes are created.

### Changed

- Stopped awarding points while editing quotes.

### Fixed

- Fixed saving tags while editing quotes.
- Suppressed email notifications while quotes are being edited.

## [1.1.0] - 2011-08-28

### Added

- Added frontend publishing and editing tools on the quote view page.
- Added edit author profile capability for moderators.
- Added comment counts in listings.

### Fixed

- Fixed the invalid component version shown in the backend.

## [1.0.1] - 2011-08-01

### Fixed

- Fixed small bugs in the initial version.

## [1.0.0] - 2011-07-24

### Added

- Initial stable release.

## [1.0.0.beta] - 2011-07-17

### Added

- Initial beta release.
