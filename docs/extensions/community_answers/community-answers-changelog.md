---
id: community-answers-changelog
title: Changelog
sidebar_label: Changelog
sidebar_position: 5
---

# Community Answers Changelog

All notable changes to Community Answers will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [7.0.0] - 2026-06-07

### Added
- Major React-powered frontend rewrite for Joomla 6 with modern question feed, question detail, answers, comments, tags, search, users, profile, leaderboard, moderation, bounty board, ask question, and notification preferences screens.
- Joomla SEF/browser-router compatibility with Joomla-generated URLs for navigation, tags, questions, profiles, bounties, ask form, leaderboard, and notification preferences.
- Configurable frontend layout options for top toolbar, left navigation, right sidebar blocks, themes, density, and answer card styling.
- Semantic `ca-*` CSS hooks across key frontend surfaces so Joomla templates can override component styling without depending on Tailwind utility classes.
- Full ask-question workflow with category selection, Joomla editor integration, Joomla core tags, duplicate question suggestions, tag suggestions, and required-field guidance.
- Complete bounty system with configurable limits, durations, bounty board status tabs, balance display, connected points deduction, escrow summaries, and awarded/expired states.
- Users directory, profile pages, and leaderboard with reputation, answers, accepted answers, bounties, and activity metrics.
- In-app notification center, unread counts, notification preferences, and email notification delivery using Shondalai Core services.
- Admin email template manager with editable HTML/plain text templates, preview, enable/disable state, configurable header/logo/title/subtitle/chip/footer options, and media-based template files.
- Moderation queue, flag handling, audit log support, and frontend moderation actions.
- Modern Joomla plugin event dispatcher with `onCommunityAnswers...` lifecycle events, cancellable before events, and legacy Community Answers event aliases for third-party integrations.
- Shondalai Core integration service support for points, activity streams, profiles, avatars, and external badges, including Rewardify rule coverage.

### Changed
- Replaced legacy frontend page rendering with fluid, responsive React screens while preserving Joomla component integration.
- Switched tag handling back to Joomla core tags and removed the new standalone tags-table approach before release.
- Consolidated SQL updates into the 7.0.0 migration path for cleaner unreleased upgrade handling.
- Centralized button/action styling into semantic CSS classes and reduced long utility-class markup in shared UI components.
- Improved answer cards, comment UX, icon-only action buttons, bookmark/share feedback, and guest access states.

### Fixed
- Enforced Joomla permissions for viewing, creating, replying, editing, deleting, bounties, moderation, audit access, and reply visibility.
- Prevented duplicate question submissions while redirecting after submit.
- Prevented users from creating bounties without sufficient connected points balance and avoided negative balance/karma states.
- Hid bounty creation once an answer is accepted or a bounty is awarded.
- Corrected bounty awarded notification wording for bounty sponsor and answer recipient.
- Improved API error messaging for voting, permissions, and failed mutations.
- Fixed guest user toolbar/profile/ask behavior so guests are routed to login or shown proper access messages.
- Fixed action button icon alignment and delete button styling with a soft red default and solid red hover state.

## [6.2.0/1] - 2025-10-05

### Added
- Joomla 6 Compatibility Update
- Added new option to show login form to the guest users

### Changed
- Set default date values in the install script
- Update copyright headers

## [6.1.6] - 2024-11-03

### Fixed
- Fixed issue with backend answers page when filtered by category
- Fixed issue with comments display

## [6.1.5] - 2024-09-11

### Fixed
- Fixed issue with indexing question in smart search plugin

## [6.1.3/4] - 2024-07-26

### Fixed
- Fixed issue with finder plugin

## [6.1.2] - 2024-07-07

### Fixed
- Fixed issue with smart search plugin not showing results

## [6.1.1] - 2024-04-16

### Fixed
- Fixed issue with installing finder plugin

## [6.1.0] - 2024-04-14

### Added
- Added support for Rewardify Points
- Added option to sort by trending questions in category view

### Fixed
- Fixed issue with smart search plugin
- Empty list is shown when the database option to allow null dates is disabled
- Fixed issue with upgrading from v4 to v6
- Fixed the margin of batch button on admin toolbar

## [6.0.1] - 2023-09-26

### Fixed
- Fixed build issue

## [6.0.0] - 2023-09-24

### Added
- Breaking Change: Added support for Joomla 5

### Changed
- Breaking Change: Removed legacy layer for Joomla 3

### Fixed
- Fixed issue with redirection after login through login module on a question page

## [5.3.8] - 2023-05-10

### Changed
- Replaced JFile/JFolder deprecated wrappers with respective file system functions
- Removed deprecated code

### Fixed
- Replacing legacy API references
- Fixed issue with finder plugun causing error
- Fix for user last accessed questions data

## [5.3.7] - 2022-11-07

### Added
- Added support for PHP 8.1
- Updated support for latest easysocial version

### Fixed
- Cancel button on admin questions batch modal does not work
- Fix for JMap plugin deprecated code
- Fixed issues with untranslated/removed language strings
- Show right online guest user count on the categories page statistics
- Tags are not saving in Joomla 3.10 or later versions
- Page shows error when the component redirect to login/any page

## [5.3.6] - 2022-05-03

### Added
- New preferences page to customize user signature

### Fixed
- Fixed issue with showing question detail page withour reply permission
- Set mandatory default values while creating the question
- Error message shown after saving the question on backend
- Fixed issue with PHP notice message on category feed page

## [5.3.5] - 2021-12-12

### Fixed
- Unable to create or save tags in the question form

## [5.3.4] - 2021-11-11

### Fixed
- Categories page do not show categories list

## [5.3.3] - 2021-11-10

### Fixed
- Categories list page shows PHP warning message
- Community Answers Module shows error when loading on non-ca pages
- Fixed issues with redirecting to login page in Joomla 4
- Fixed issue with form module with loading the styles

## [5.3.2] - 2021-11-06

### Changed
- Improved login form styles for bootstrap5

### Fixed
- Statistics module do not show correct count of solved questions
- Fixed issue with permanently removing a reply from front-end
- Unable to like/dislike when mysql strict mode enabled
- After like/dislike the button icon is hidden
- Installaer fails with error on Joomla 3

## [5.3.1] - 2021-09-03

### Added
- Added extension changelog button shown for Joomla 4 and above

### Changed
- Update the documentation link with new shondalai domain

### Fixed
- Fixed issue incompatible method in the content plugin
- Added missing language string for admin system menu
- Toolbar users menu items shown even after disabling it

## [5.3.0] - 2021-07-18

### Fixed
- Unable to post multiple answers from backend questions page

## [5.1.2] - 2020-05-17

### Fixed
- Modifying a comment in the backend, shows multiple duplicate comments on the page
- Sort ordering text in advanced search is not translated
- Accessing my answers page without logging in shows error instead of redirecting the user to login page
- Duplicate approval emails are being sent to the administrator

## [5.1.1] - 2020-04-20

### Fixed
- No emails triggered after the administrator approves the question/answers
- Questions linked to wrong URL in My Answers page

## [5.1.0] - 2020-03-28

### Added
- Show the number of questions of the parent category in the category list
- Add an option to display part of the accepted answer in Community Answers module
- Show date in Community Answers Module
- New menu item layouts for My Questions, My Answers & Export My Data
- Show micro avatar of the usernames of comments
- Allow adding answers from administrator site
- Added support for Easy Profile avatars and profile linking

### Fixed
- No email notifications sent to the question author if the question is posted as guest
- The RSS feed icon cannot be hidden using the component option
- Fixed issues with SMFaq migration
- Error message shows after saving question when there are no users synced

## [5.0.9] - 2020-01-11

### Added
- Added migration script to migration questions from SMFaq extension to Community Answers

### Fixed
- Last replied user of question is modified when answer is edited from backend
- Guests are unable to view the comments

## [5.0.8] - 2019-12-29

### Added
- Added Sociable support

### Fixed
- Unicode urls are not created when saving the items
- CA Form module is not shown when using Bootstrap 3/4 layouts.

## [5.0.7] - 2019-08-11

### Added
- Added Sociable support

### Changed
- Removed references to Google+ service

### Fixed
- Hover on tooltips disappear elements when mootools loaded on the page
- RSS Feed cannot be rendered properly when PHP notice messages is enabled
- Fixed issues with layouts and bootstrap4 layouts
- Edit button in backend answers listing is not working
- Add meta keywords from question title if they are not available

## [5.0.6] - 2019-05-08

### Fixed
- Edit comment form show error in backend
- Updated Joomla 4 alpha 8 support

## [5.0.5] - 2019-03-30

### Added
- Added new backend view to manage user subscriptions

### Fixed
- Author filter do not work properly in backend answers/comments pages

## [5.0.4] - 2019-03-20

### Fixed
- Registered users are unable to submit answer after the last upgrade

## [5.0.3] - 2019-03-16

### Fixed
- Topic author cannot add comment unless answer permission is given
- Error shown when guest user trying to post question/answer
- Unable to edit and save answers from backend

## [5.0.2] - 2019-02-17

### Fixed
- Category description is not showing even when enabled option
- Guest users cannot ask questions after upgrade

## [5.0.1] - 2019-02-16

### Added
- Added CA changelog link in the admin dashboard

### Fixed
- Subscribe button on category page is missing.

## [5.0.0] - 2019-01-31

### Added
- Make featured question stay on top in their category

### Fixed
- Bug fixes from beta

## [5.0.0.b1] - 2018-12-25

### Added
- Joomla 4 support is added

## [+ New Bootstrap 4 based layout] - can be chosen from component options

### Added
- New router for SEF URLs
- Added support for new reCaptcha plugin
- Added live search capability in question form page

### Changed
- Removed usage of a deprecated API for fitering output
- Page title of the category page should include page number
- Replaced RuntimeException with Exception

### Fixed
- Question(s) canonical url is not using https when enabled
- Added missing language strings for multi language associations
- Category page do not show the meta description of the category
- Category view do not show category title on browser title bar
- New database columns cannot be created during installation causing errors
- Points are not refunded to the user when bounty is expired
- Show number of questions option in category not working
- Subscribe checkbox in reply form do not subscribe users to topic

## [4.7.1] - 2018-06-11

### Added
- Added comments and email templates menu to backend component menus

### Fixed
- Comments page on backend shows error

## [4.7.0] - 2018-06-01

### Added
- GDPR Compliance: Allow users to download their data as HTML file
- Added management screens for managing comments
- Add canonical url on questions and category pages

### Changed
- Updated sh404sef plugin

### Fixed
- Installer failed on few database instances when installing the component for the first time

## [4.6.0] - 2018-04-01

### Added
- Add page number in the page title of listing pages
- New content plugin to show user answers in Joomla! articles
- sh404sef plugin for community answers
- Added canonical url in all questions pages
- New config option to show/hide current page title on response page
- Add "mandatory" css class for mandatory questions block
- Added JSiteMap plugin for Community Answers

### Changed
- Updated default character set of tables to utf8mb4_unicode_ci

### Fixed
- RSS Feed cannot be generated from questions listing page
- Response status filter not working on responses list with pending responses
- Charts are not aligned properly in grid chart report page
- Conditionally hidden questions causing page to jump to top
- Live search do not work when sef is disabled
- Error shown with community answers module on few Joomla versions
- Community Answers Form Module redirects to non sef url
- Unable to edit email type of new email templates
- Search view menu item is not used for the advanced search link

## [4.5.6] - 2017-12-27

### Fixed
- Unable to access question url from email notification
- Urls sent in email notification do not enforce https
- Added missing language string

## [4.5.5] - 2017-10-13

### Added
- Redirect guest users to login page when they access question form page

### Changed
- Show only users with positive karma in leaderboard

### Fixed
- Top users module shows incorrect ordering of users
- Options button shown two times on backend pages

## [4.5.4] - 2017-07-02

### Added
- Unable to migrate from v1.9+ versions to latest
- New tag in email templates `{SUBSCRIPTIONS_URL}`

### Changed
- Updating jQuery Guillotine Plugin to latest version
- Delete user from component user table when the user is deleted from Joomla
- Show alias field only for admin users
- Updated copyright year
- Redirect guest users to login page when they access subscriptions page

### Fixed
- Question view page shows warning about component not found
- Subscriptions url is rendered as non-sef url even the menu item exist
- Guest users are not redirected to login page when accessing form page directly.

## [4.5.3] - 2017-04-15

### Added
- Added AlphaUserPoints plugin in package
- Added new option to show only featured questions excluding bounty questions

### Fixed
- Page redirect to error page when setting feature flag in backend
- Unable to archive/publish answers
- Categories are not shown to registered users on search page
- Match all keywords option do not work on advanced search page

## [4.5.2] - 2017-02-25

### Added
- Added AlphaUserPoints plugin in package

## [4.5.1] - 2017-01-18

### Added
- Added support layer for Lotus Android app

### Fixed
- Points deducted from user who upvoted answer using cjforum

## [4.5.0] - 2016-12-25

### Added
- Added support for Lotus Android App
- Added support for new Joomla 3.7 router
- New option to show/hide small intro text in listing

### Fixed
- Deleting questions/answers do not sync counts properly in leaderboard
- Corrected typo in language files
- User name is not displayed properly with CB content plugin enabled
- Link Titles option do not disable linking titles
- Creating bounty by admin user should not deduct points from admin user
- Questions and answers count is not synced with users when they are deleted permanently

## [4.4.1] - 2016-10-04

### Added
- Added support for Community Builder activity streams
- New options to fully customize leaderboard behavior
- New points rules for awarding points to user who voted up a question or a reply
- Added option to restrict categories in Community Answers module
- Added support for AltaUserPoints

### Fixed
- Ask form do not fit screen when viewed on mobile devices
- Error shown when ratings are enabled
- Bounty/Login modal shown as disabled on some templates
- Fixed issues with Kunena migration script

## [4.4.0] - 2016-08-22

### Added
- Added new navbar for quick links on listing pages
- Added CjBlog v2 rules
- Added Kunena migration script

### Changed
- Updated accepted answer block styling to custom boxed styling

### Fixed
- Import CSV function imports one questions max at a time
- Trigger badges throws error
- User unable to post replies to questions migrated from previous releases
- Ask form returns to homepage menu item when sef urls disabled
- Users can access questions in category with no different access level

## [4.3.3] - 2016-04-26

### Added
- Added sync questions button to resync answers count

### Fixed
- Leaderboard shows Name instead of username when the option is changed
- CjBlog badges do not trigger when a new question is created

## [4.3.2] - 2016-04-16

### Added
- Added support for AltaUserPoints

### Fixed
- Users cannot unpublish posts with edit own state permission enabled
- Users unable to delete their replies if permissions enabled
- reCaptcha do not show after upgrading to Joomla 3.5.1
- User display name always shows user real name instead of login name

## [4.3.1] - 2016-03-22

### Added
- Added question statistics columns in admin categories page
- Added option to show/hide toolbar

### Changed
- Joomla 3.5 compatibility updates

### Fixed
- After failed upgrade, answers are not accessible
- Post updating to Joomla 3.4.6, page is return to homepage after posting reply
- Users sync should not count unpublished items

## [4.3.0] - 16-01-2016

### Added
- New table layout for Community Answers module
- Added CSV Import feature for questions

### Changed
- Show only categories belongs to current language in topic form
- Show only categories belongs to current language in search form
- Show only categories belongs to the current menu language in form and search pages
- Changed social sharing to jsSocials for better performance
- Moved question layouts to new shareable layouts

### Fixed
- Questions and answers statistics not updated when they published from backend
- Discover button redirect to home page where there is a JavaScript error on the page
- AlphaUserPoints option is missing in Points System configuration option
- Error shown when clicking category link in few selected cases
- Links in category feed do not work if the SEF urls are not enabled
- Advanced search form throw error if SEF urls not enabled
- CjBlog badge rules are not triggered
- Categories module doesn't show categories in multi-language setup
- Top users modules do not show avatar

## [4.2.7] - 26-09-2015

### Added
- New option to auto-subscribe users when they signup
- Redirect guest users to login page in case they do not have access for creation
- Support for Joomla auto-updates is added (one click component updates now possible).

### Changed
- Updated the JED URL on back-end dashboard
- Changed the language strings to user friendly messages
- Bootstrap 3 compatibility updates

### Fixed
- Temporary code replacement for sites with no Joomla lib loaded
- Removed container adding extra padding on the component content
- User is denied access to download files even if the user has permissions for the category.

## [4.2.6] - 21-06-2015

### Added
- Added new permission to publish/unpublish own questions/answers/comments

### Changed
- Updated naming conventions of edit state buttons on front-end

### Fixed
- Spaces in usernames of leaderboard page getting striped

## [4.2.5] - 11-06-2015

### Added
- Added new configuration option to customize when the ask form is displayed on listing/question pages

## [4.2.4] - 03-06-2015

### Added
- Added new permission to allow/disallow attaching files to questions and answers
- Added new option to choose user display name, i.e. username or name

### Fixed
- Removed unused and redundant options

## [4.2.3] - 01-06-2015

### Added
- Added option to hide category on form page

### Fixed
- Category list gets scrambled

## [4.2.2] - 24-05-2015

### Added
- Added ability to add attachments from quick answer box.

## [4.2.1] - 23-5-2015

### Fixed
- Layout get scrambled when there are no categories to view on questions page
- Toolbar links don't work when SEF urls disabled

## [4.2.0] - 17-04-2015

### Added
- Show images as thumbnail and in lightbox
- Show only categories of selected language when multilanguage is enabled

### Fixed
- Form fields are not aligned properly on templates with bootstrap 3
- Buttons in Edit Answer page on admin site are not working
- Category/List menu items description language strings are missing
- Cannot accept guest user answers
- Cannot select default category for form view menu item

## [4.1.3] - 27-04-2015

### Added
- Categories page enhanced with two level categories list.

### Fixed
- Parent category not shown on categories listing page

## [4.1.2] - 21-04-2015

### Fixed
- User name and email fields are missing for guest users while asking/answering
- Login dialog on question pages is missing in v4.1
- Administrators do not get emails to approve/disapprove new questions and answers
- Guest name is not shown on answers submitted by guest users
- No message shown about question being moderated when moderation is enabled for a user group.
- Guest users are not notified of the new answers to their questions

## [4.1.1] - 18-04-2015

### Fixed
- Captcha not shown for guest users
- Featured options should not be shown to guest users

## [4.1.0] - 04-04-2015

### Added
- New module: Community Answers Form module
- New plugin: Community Answers Smart Search plugin
- New configuration option to show/hide hits in listing page
- New configuration option to show/hide author name/link in listing page
- New configuration option to show/hide categories flat list in listing page
- New configuration option to show/hide ask form field in listing page
- EasySocial activity rules for deleting activity when a question/answer deleted
- Icon to show beside a category link when it has subcategories

### Changed
- Display bigger category list box on form page

### Fixed
- Some points rules not working with EasySocial
- Category image does not show
- Community Answers module does shows all questions in most answered questions list
- Form page overlaps with sidebar on some templates
- Category page throws error when description present
- No results present text in leaderboard is not translated
- Bounty points does not work with EasySocial

## [4.0.3] - 21-03-2015

### Added
- New option to choose different editor instead of the one in Global Configuration
- Subscribe category function restored
- Added switch to enable/disable bounty system.
- New table added to track user location, browser and platform information for statistical purposes

### Fixed
- New question emails do not sent
- Error shown when activity count greater than zero

## [4.0.2] - 07-03-2015

### Changed
- Updated modules and plugins to compatible with Joomla 3.4

### Fixed
- Install script gives error on fresh installation
- Migration script fails on very old installations

## [4.0.1] - 25-02-2015

### Changed
- Joomla 3.4 compatibility updates

## [4.0.0] - 21-02-2014

### Added
- New Category System
- New Tagging System
- Search engine friendly and user friendly urls
- Questions now embedded in microdata elements for better seo.
- Fully redesigned front-end and back-end
- New email templates designer
- Ratings can be now allowed on questions as well
- CjForum integration
- Many customization options for easy customization
- New ACL rules added
- New shareable layouts for overriding the templates easily

### Changed
- Removed BBCode support

## [3.1.0] - 30-Oct-2014

### Added
- Migrated icons from default icon-* to FontAwesome icons
- New package structure to include all modules and component in a single package
- Added configuration option to show hide description (option should be added in config.xml)

### Changed
- Removed unused files

### Fixed
- Unable to accept answer unless given ask permission
- Leader board shows wrong count of best answers

## [3.0.5] - 29-Jul-2014

### Fixed
- Tag not properly closed in question details page

## [3.0.4] - 18-May-2014

### Added
- New permission setting to allow users to view answers posted on their answers only
- Added meta title and description tags for question

### Changed
- Added global cj-wrapper-main class for views

### Fixed
- Do not show ask form for registered users if they are not allowed to create questions
- Deleting a tag from a question deletes it from all other questions

## [3.0.3] - 16-Mar-2014

### Changed
- Hotfix release

## [3.0.2] - 09-Jan-2004

### Fixed
- Unable to answer if replied to an answer before

## [3.0.1] - 07-Jan-2014

### Fixed
- Feeds are not working in v3

## [3.0.0] - 07-Jan-2014

### Added
- Bounty System: Now users can trade their points for best answers (Thanks to David Larpent)
- Leaderboard: New leaderboard page for displaying top users
- Question Clarifications: users can now clarify the question by posting a reply before answering
- New Question Details UI: New look to the question details page
- Activities Enhancements: Now supports pagination with enhanced look and feel
- Login Form: Now built-in login form can be switched off within options
- EasySocial Support: Activities, Points System, User Avatars, Profile Linking
- CKEditor Support
- Custom Alias: Admins can write/edit in their own alias instead system generate it automatically
- Joomla 3.2 support

### Changed
- Use tags as keywords for finding related questions

### Fixed
- Breadcrumbs links to wrong urls
- Refresh does not correctly counts statistics
- Delete activity when a question is deleted
- Do not allow captcha when captcha plugin is disabled
- Answer approval email contain userrname in place of sitename
- Activities page does not open from tags page
- Question approval email body html does not ended properly
- Do not allow multiple click on answer button
- Do not display same question in related questions

## [2.2.1] - 23-July-2013

### Fixed
- Feeds are not working

## [2.2.0] - 20-July-2013

### Added
- New activties page for users to keep track of their activities
- Login/Logout functionality right from the component toolbar
- Improved icons, colored vote up/down icons
- Options to disable bootstrap and jquery, if the Joomla template already loading them

### Changed
- Created indexes for better performance
- Redirect guest users to login page when view question permission not given to them

### Fixed
- Subscribe and RSS feed icons are not properly visible on few Joomla templates
- v2.1.10
- Do not send mails to disabled admin users
- UI fixes for backend
- v2.1.9
- v2.1.8

## [2.1.7] - 07-May-2013

### Fixed
- Wong label is shown for View Answers permission setting

## [2.1.6] - 06-May-2013

### Added
- New permission setting to hide answers from unauthorized users but allow viewing/answering question

### Changed
- Redirect guest users to login page if they are not authorized to view the question

### Fixed
- Ask form accordion in question page is not responding on some templates

## [2.1.5] - 26-Apr-2013

### Fixed
- JomSocial activity stream for best question has wrong user name

## [2.1.4] - 31-Mar-2013

### Added
- Default listing view selection (latest, popular etc) per menu item
- Automatically highlights selected listing on toolbar menus

### Changed
- sh404sef plugin to support all features of CA

### Fixed
- Attaching files not possible on safari

## [2.1.3] - 23-Mar-2013

### Fixed
- Answer replies not getting any notification to the answerer

## [2.1.2] - 20-Mar-2013

### Fixed
- User details not inserted into users table automatically causing no user displayed on top users module

## [2.1.1] - 18-Mar-2013

### Changed
- Added answers count label displayed on mobile view

## [2.1.0] - 16-Mar-2013

### Added
- Automatically convert urls to links in question description and answers (with nofollow attribute set)
- Configuration option to display image attachments as thumbnails instead of links

### Fixed
- Upload attachment feature not working on Safari

## [2.0.16] - 12-Mar-2013

### Changed
- Toolbar menu items should respect the category selection and load questions from selected category only.
- Changed the CjLib notification to point to download location on new installations
- Remove left padding of social sharing box.

### Fixed
- Toolbar Menu collapse opens and closes Main Menu on bootstrap enabled templates on mobile devices
- Selecting the same category as parent category should not be allowed while editing category

## [2.0.15] - 09-Mar-2013

### Added
- Login dialog support for guest users if the answer permission not given to them

### Changed
- On popular demand: reverted the sharing tools earlier style of displaying without additional click

### Fixed
- Too much space in rating block
- Incorrect index name in SQL installer corrected
- Admins not getting notifications
- Pagination in tagged results is not working

## [2.0.14] - 26-Feb-2013

### Added
- New notification email sent to users to notify when their questions approved
- New module - Global statistics to display total questions, answers, solved questions and categories

### Fixed
- Guests do not receive emails when moderation is enabled

## [2.0.13] - 14-Feb-2013

### Added
- Added configuration option to hide toolbar

## [2.0.12] - 07-Feb-2013

### Added
- Sets default administrator user group for notifications to super admin to avoid confusion for new users

### Fixed
- Feed image is larger than email icon
- Can't set questions limit per page other than 20

## [2.0.11] - 25-Jan-2013

### Added
- Added icons to related and category questions accordin for better UX.

### Fixed
- Deleting a tag from question is not possible

## [2.0.10] - 23-Jan-2013

### Added
- Remove users support in back-end users page
- JomSocial 2.8 support

### Fixed
- Sync feature gets hanged when large number of questions present
- Global checkbox is not working in back-end questions page
- Users unable to edit their own answers
- Tags does not accept UTF-8 characters
- When answer is deleted category answers count is shown a large number

## [2.0.9] - 20-Jan-2013

### Fixed
- User display name is not changed even if the configuration option is changed
- Related questions box in ask form is not getting closed when user want to ask question

## [2.0.8] - 20-Jan-2013

### Added
- Checkbox in question form to let users choose if they want to get new answer notifications

## [2.0.7] - 15-Jan-2013

### Added
- CjBlog badges support
- Limit the bootstrap css scope to component to avoid css conflicts on Joomla 2.5

## [2.0.6] - 14-Jan-2013

### Changed
- Language string enhancement for tags placeholder text
- Few enhancements to css on front-end

### Fixed
- Admins cannot accept other user's answers

## [2.0.5] - 12-Jan-2013

### Added
- SimAnswer one click migration
- New multianswer permission to restrict user groups from answering multiple times on same question
- Close button handle on social sharing popover box

### Fixed
- Only one sharing box should be shown at a time
- Unable to select all questions in admin panel using global checkbox
- Admins not getting notification emails
- My Answers page does not show processed html if BBcode is used
- Unsubscribe link is redirecting to new page on iPhone

## [2.0.4] - 09-Jan-2013

### Fixed
- Categories are inaccessible if the permissions are left empty
- Search button should redirect to advanced search page if no input given
- Users unable to update answers unless manage permission given

## [2.0.3] - 07-Jan-2013

### Fixed
- Update answer is being failed for admins
- Attachments folder not created on fresh installations

## [2.0.2] - 06-Jan-2013

### Fixed
- Removed unique key in attachments table which is causing issue on some servers
- Unpublish/publish links not working
- Limit tag suggestion description to max 100 characters to let the window not spanned
- Tag should be added on pressing enter, semicolon or comma.

## [2.0.1] - 04-Jan-2013

### Added
- Allow fullstop, hyphen in tag names
- Hide avatar and answers box on phone layout to make slick look.
- Make username link to profile in question page

### Fixed
- Redirect user to login form if guest user is not authorized to ask
- Link is JomSocial activity stream is incorrect

## [2.0.0] - Dec 19, 2012

### Added
- Full rewrite of both front-end and back-end
- Joomla 3 support
- New bootstrap enabled UI look
- New administrator dashboard page
- CjBlog badge system support
- New points rules for vote up, vote down, voted down user
- Beautiful email template for email notifications
- Revamped tags system, new tags listing page
- New advanced search page
- New My Subscriptions user page
- Improved and tiny social sharing tools
- Improved rating system
- New permission setting: Edit own question/answer
- New permission setting: Allow attaching files
- New permission setting: Rate answers
- New permission setting: Report question/answers
- New permission setting: Subscribe to questions/categories
- New permission setting: Download attachments
- Downloads count for attachments
- Send notifications to admin group instead of single administrator
- Take sender name and sender email from Global configuration
- New and improved suggestions for ask question page

### Fixed
- (Joomla 2.5 version)
- Category specific permissions do not obey parent child replations

## [1.9.4] - Dec 18, 2012

### Fixed
- Category edit page not working

## [1.9.3] - Dec 12, 2012

### Fixed
- Hot patch for installer

## [1.9.2] - Dec 11, 2012

### Added
- CjBlog avatars and points system support

### Fixed
- Refresh categories not refreshing answers
- Categories tooltip do not show counts
- Do not show root category in form

## [1.9.1] - Nov 30, 2012

### Added
- CjLib Component support

### Fixed
- Wrong buttons shown up for thumbup and thumbdown

## [1.9.0] - Nov 24, 2012

### Added
- CjBlog Avatars Support
- CjBlog User Profiles Support
- CjBlog Points System Support
- CjLib Component Support, now do not need jQuery plugin anymore
- Support to select default UI theme from configuration

### Fixed
- Unable to delete the answers from front-end
- Unable to edit answer on back-end
- Updates for PHP 5.0 strict standards

## [1.8.12] - Sep 13, 2012

### Fixed
- Unable to answer in IE8
- IE related bug fixes

## [1.8.11] - Jul 08, 2012

### Fixed
- Wrong user name populated in lists

## [1.8.10] - Jun 07, 2012

### Added
- ShareThis is replaced with better placed AddThis sharing service
- Improved UI layout in view question page
- Ability to send notifications to multiple administrators by adding multiple emails separated by comma in configuration

### Fixed
- Guest user avatar results in 500 error in JomSocial
- Use active menu id instead of default itemid to support multiple menu items of component
- Empty placeholder shown when no avatar system selected

## [1.8.9] - Apr 10, 2012

### Fixed
- Question link in JomSocial stream is pointing to administrator site when question/answer is approved from backend
- Approval from backend is not considering limit on description length
- Wrong site name being printed in admin email notification when question/answer approved from backend.
- JomSocial stream does not have like and comment links when question/answer is moderated
- Feeback is not shown after answer submission
- Ask question page does not display modules published on limited menu items
- User questions page produces error.

## [1.8.8] - Apr 02, 2012

### Fixed
- Activity stream description is not being saved
- JomSocial points are not awarded to the user when the question/answer is approved

## [1.8.7] - Mar 27, 2012

### Fixed
- Selecting multiple categories in category specific permissons hides the category in ask form.
- Wrong name in regards section email notification for question resolved status
- Answers count box in listing not being highlighted when new posts available

## [1.8.6] - Mar 21, 2012

### Added
- Search plugin for Joomla updated to new search feature of CA

### Fixed
- My answers page produce error
- My questions produce no results

## [1.8.5] - Mar 19, 2012

### Fixed
- Clicking feed link does not produce correct page
- Unable to unsubscribe/subscribe categories using subscribe category link

## [1.8.4] - Mar 18, 2012

### Fixed
- Hot patch

## [1.8.3] - Mar 18, 2012

### Added
- Enhanced and natural search for questions
- Unicode alias support for J2.5 or above
- Reporting, RSS Feeds and Subscriptions should be configurable from backend
- Exception handling to remove dependancy on deprecated API of j1.5
- Seperate messages for question creation, updation etc.
- Unpublish, delete function for both questions and answers
- Show re-open button only for accepted answer to make page look clean

### Fixed
- Cannot save html content in J1.7
- Links from JomSocial activity stream missing itemid
- Activity stream on new question does not include proper url
- Include reCaptcha API only if it is not available
- Date over a year are not showing proper text
- Invalid tag entry being posted when there is no tag entered
- Users with manage permissions caannot accept answer if the answer is posted by them
- First item in listing shows extra space on few templates
- Like/Unlike button tooltips are reversed
- Answer categories list is not being shown in menu item in J2.5

## [1.8.2] - Jan 11, 2012

### Fixed
- Hot patch

## [1.8.1] - Jan 10, 2012

### Fixed
- Error in submit question form when file attachments are disabled
- Fixes for file attachments feature
- Fixes in UI related issues with IE
- Fixes in manage permissions for administrators.

## [1.8.0] - Jan 08, 2012

### Added
- jomsocial tighter integration
- Add Like and Comment in CA Activity in Jomsocial
- References links need to open in new window
- Category Listing Pagination, Select Specific Category, Publish category
- Feature Additions to CA updates to Jomsocial's Recent Activity Stream
- Anonymous Voting
- attachments file to question and answer and multi level points
- Redesigned default2 theme
- Style tags on view question page
- Community Answers tag cloud module
- Force Answering - to allow answering after question poster selects best answer
- Category email notification subscriptions - to allow email subscriptions on category or site level
- New Attachments permission to restrict user groups from attaching files
- Multiple attachments in questions and answers
- Redirect automatically to home page when a question published or deleted from view question page
- Remove user login popup box and replace it with default user login link for consistency
- Report feature for questions
- Edit questions from front-end

## [1.7.3] - Nov 15, 2011

### Added
- RSS feed - Answers & Polls

## [1.7.2] - Aug 28, 2011

### Fixed
- Login popup results in error in Joomla 1.6/7
- Category stats not updated while deleting/unpublishinh questions/answers from front-end by admins.

## [1.7.1] - Aug 28, 2011

### Fixed
- Tagging system not working for certain pages
- Installer not working in Joomla 1.6

## [1.7.0] - Aug 20, 2011

### Added
- attachments file to question and answer and multi level points (attachments only)
- Tagging for Answers & Polls
- Allow users and admins to add TAGs to questions
- Answer permissions request
- Create automatic approval link
- popup system message box
- Replace Google buzz with Google + button on "view answer" page.

### Fixed
- Language file correction in Community Answers

## [1.5.5 & 1.6.5] - May 22, 2011

### Added
- In CA - Make it easier for viewing Answer updates and date by hiliting the text
- Question in a specific category
- Ask Questions Page - Modules without categories
- Notify admin that questions require approval
- Display recently “replied to” Module Request
- Manager vs Publisher Permissions
- Similar category questions
- guest e-mail adress
- 500 error must bu 404 error
- Avatar Support for Kunena 1.6
- Edit answers
- Report question and answer
- Toolbar buttons now configurable and displayed in configurable order
- Show indicator for accepted questions in lists
- Customize number of questions displayed in similar questions list
- Template look changes with new Answers box to display answers count in big font
- Layout change to answers list to have better design

### Fixed
- disabling reCAPTCHA doesn't work
- question date won't appear
- Problem when creating menu item for Community Answers Category
- Duplicate "height" attribute in answers.css line 17 :-)
- wrong user name displayed in the
- Manage resolved Questions

## [1.5.4 & 1.6.4] - April 10, 2011

### Added
- New default2 template with dark colors support
- jQuery plugin v1.5.0 & v1.6.1 support

### Fixed
- Number of days after creation is not visible for certain time period
- View permission for category is not being stored while creating but saved when editing
- Corrected "1 Answers" to "1 Answer" language string
- Admin unable to accept guest question answers

## [1.5.3 & 1.6.3] - March 22,2011

### Fixed
- Fixed all notice messages when E_NOTICE PHP error logging enabled
- Fixed UI alignment issues

## [1.5.2] - March 01, 2011

### Fixed
- User avatar shown is wrong when answering question
- Categories permissions are not considered in similar questions

## [1.5.1] - February 27, 2011

### Fixed
- Error with pagination results

## [1.5.0] - February 23, 2011

### Added
- Make it superb private and grouped consultation and support
- Notification with every new answer
- Suggestions to Improve clarification and grammar in email notifications from CA
- Answer Tips - Add clarification Answer Tip text to Share buttons.
- Simplify Answer Editor - More professional and simplifies only available functions
- Unresolve a Resolved Answer
- Ask Question changed to: What do you want to ask? Ask It (button)
- Comment moderation message still shows.
- Question Subscriptions
- New question & new answer notifications for admins
- Ajax answer submission

### Fixed
- Guest do not receive mail and the 'Asked by' field is empty
- Gravatar Support
- Guest see the 'Accept this' butto, but should be hidden
- Notify admin that questions require approval

## [1.2.1] - January 2, 2011

### Added
- Email & Social Bookmarking tools
- Ability for guest users to ask questions
- Enable moderation for asking questions
- Validations for Question Submission Form
- Support for YooTheme jQuery enabled parameter

### Fixed
- title page of categories do not change
- Guest is displayed instead of name of the user for guest answers
- Itemid is not being sent when answering question

## [1.2.0] - November 27, 2010

### Added
- Refactored categories page on administration
- Categories reordering/sorting capability
- Question & Answers count on categories list on front-end home page
- Improved JomSocial activity stream, now description of question and answer is shown in activity stream.
- More human friendly detailed date formats. Now displays depth of minutes to years (Eg. Just now, 1 minute ago, 1 hour ago, 3 months ago, 1 year ago and so on)
- Refactored breadcrumbs functionality
- Show default text in category list of new question page to discourage users from using same category everytime.

### Fixed
- Backend Category Edit not working
- Activity icon is not displayed in Mighty Touch activity stream
- 500 error page is displayed when click on links in Mighty Touch activity stream
- Update question & answers count properly when click on recalculate button on backend questions page
- Display reCAPTCHA by default
- Date format is not in effect in admin questions page.
- Move language strings in admin pages to language files
- Unable to post answer when guest answers option is disabled.
- Add itemid for Ajax search results on home page search box
- No message is displayed when required fields missing and page is redisplayed in New Question page
- Added asterisk for required fields in New Question page

## [1.1.04] - October 25, 2010

### Added
- Guest user answers support
- reCAPTCHA support for guest users
- Configuration option to disable references field in answer form
- Default empty option for category lists to avoid wrong category selection
- Automatic addition of Meta Keywords based on question title (SEO enhancement)

### Fixed
- Wrong link posted to Touch activity stream
- Answered tab displays unanswered questions
- Ajax search results duplicate questions
- CSS Fixes for answer form and answers block
- Category name repeated in breadcrumbs

### Removed
- Feature: Toolbar menu in My Answers page (would be enhanced in next version)

## [1.1.03] - October 08, 2010

### Fixed
- No points to answerer after selecting best answer
- Points awarded twice if accepted as best from two browsers
- Email sent even after disabling it from backend
- Question author's own answer is being accepted as best answer.
- Moved hardcoded language string to language file

## [1.1.02] - September 26, 2010

### Fixed
- Wrong category name in view question page breadcrumbs
- Mighty Touch points bug

## [1.1.01] - September 10, 2010

### Fixed
- Sender name is null in emails being sent
- Similar questions list not working with international characters
- Recently resolved questions list on home page is displaying open questions

## [1.1.0] - September 9, 2010

### Added
- CoreJoomla jQuery plugin compatibility
- Ajax autosuggest for search functionality
- Joomla Search plugin
- My Questions page - Displays questions submitted by logged in user
- My Answers page - Displays answers submitted by logged in user
- Answers page in backend
- Ask form under view question page
- New toolbar look and feel for front page
- New buttons for easy navigation - Open, Resolved and Index
- New improved front end theme
- Improved backend users page
- Improved search functionality, now searches over question title, description and answers as well.
- Refresh functionality for questions and answers to sync counts

### Fixed
- 500 error upon clicking the link produced when deleted/unpublished the question
- Backend users page is not being shown
- Search functionality not working as expected with international characters
- jQuery conflicts with MooTools

## [1.0.6] - August 02, 2010

### Added
- Custom module positions support (see documentation)

### Fixed
- Cannot see Accept answer button
- HTML standards fix in admin configuration
- Null check in categories list function
- Pagination not working properly in home page
- Fetch Pagination only when required and save a call to DB

## [1.0.5] - July 28, 2010

### Added
- Choose the user group for WYSIWYG editor access.

### Fixed
- Version shown in backend control panel is incorrect

## [1.0.3] - July 27, 2010

### Added
- Extensive permission system for viewing, creating, answering and managing the answers.
- Delete button on backend for deleting questions
- Moderation tools for front-end questions
- Mighty Touch Points system integration
- Display 10 similar questions along with the open questions on home page
- WYSIWYG editor for question description
- Record who is rating on what answer (For future use)

### Fixed
- An medium risk XSS security bug fix
- Category name not appearing in breadcrumbs while viewing question
- Redirect to login page when user not logged for creating/answering questions.

## [1.0.2] - July 20, 2010

### Added
- new Dashboard page for admin control with version check.

### Fixed
- Missing Points System selection option under admin configuration
- Change to standard type for question meta data in view question page
- Name option is not in effect in view question page
- Answers count not displayed in similar questions list

## [1.0.1] - July 11, 2010

### Added
- JomSocial & Mighty Touch Activity Stream support
- Email notification support on new answer and accepted/best answer
- question title to browser title bar for better SEO
- Most Popular Questions page
- Most Answered Questions page
- WYSIWYG support
- Moderation tools for administrators (edit, unpublish and delete answer) on front-end
- Search capability
- pagination support in most pages

### Fixed
- itemid not retaining on few pages
- Revamped the front-end pages to have better look and feel
- categories not displayed as tree
- admin question details page not working
- Resolved Question button not changing to Open Questions when clicked
- user shall not rate his answer
- username/name option switch not working
- JomSocial activity stream is always posted for best answer
- Always Guest user name is being displayed on similar answers

## [1.1.01] - September 10, 2010

### Added
- Added global cj-wrapper-main class for views+ Added meta title and description tags for question

### Fixed
- Sender name is null in emails being sent
- Similar questions list not working with international characters
- Recently resolved questions list on home page is displaying open questions

## [1.0.0] - June 26, 2010

### Added
- Initial release.
