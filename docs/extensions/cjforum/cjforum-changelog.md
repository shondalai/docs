---
id: cjforum-changelog
title: CjForum Changelog
sidebar_label: CjForum Changelog
sidebar_position: 22
---

# CjForum Changelog

All notable changes to CjForum will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.15] - 2026-02-23

### 🔧 Changed
- Enhanced pages for mobile responsive behavior
- Minor updates and improvements

## [6.0.14] - 2026-02-18

### 🚀 Added
- Replaced custom editor with Joomla default content editor
- Added quote styling
- Added new block in edit profile to upload and change user avatar

### 🐛 Fixed
- Fixed reply actions dropdown showing behind the reply container
- Fixed location and Instagram values cleared in edit profile page

## [6.0.13] - 2026-02-13

### 🔧 Changed
- Minor updates and improvements

## [6.0.12] - 2026-02-13

### 🔧 Changed
- Minor updates and improvements

## [6.0.11] - 2026-02-12

### 🐛 Fixed
- User's real name is showing in the metadata
- Category icons configured in the category settings are not showing on the categories list page
- Added missing language strings in the topics and content plugins

## [6.0.10] - 2026-02-11

### 🔧 Changed
- Updated backend dashboard tiles

### 🐛 Fixed
- Fixed issue with non-sef urls showing in search results
- Fixed replies count showing as 0 on topics list
- Fix: Views are not updated when opening the topic

## [6.0.9] - 2026-02-10

### Fixed
- Fixed issue with signup button on dashboard

## [6.0.8] - 2026-02-10

### Added
- Add a button to sync missing user profiles

### Fixed
- Fixed issue with topic urls in the CjForum module
- Fixed issue with linking user avatar with CjForum profile

## [6.0.7] - 2026-02-03

### Added
- Adding field to edit user handle in the profile edit page

### Fixed
- Fixed issue with loading sef profile url
- Fix issue with finder plugin

## [6.0.6] - 2026-01-21

### Changed
- Profile page shows real name instead of user handle
- Updated with UX improvements

## [6.0.5] - 2026-01-15

### Fixed
- Fixed missing directory in the build package

## [6.0.4] - 2026-01-15

### Added
- Adding Embed topic support in Joomla articles

### Fixed
- Fixed issue with layout manager language strings
- Fixed issue with topic sorting and filtering not applying across all replies

## [6.0.3] - 2026-01-08

### Added
- Adding CjForum Redirects plugin to redirect from migration source URLs
- Adding missing sef_ids config option

### Fixed
- Fixed database errors (false positives)
- Fixed CjForum Module UI Issue

## [6.0.2] - 2026-01-06

### Added
- Added new theme - Deep Ocean Gradient
- Added recent topics listing menu item

### Fixed
- Build issues fixed

## [6.0.1] - 2025-12-28

### Added
- Fixed issue with new user's avatar
- Add activity stream and badge integrations

### Fixed
- Fixed issue with upgrading old versions

## [6.0.0] - 2025-12-06

### Added
- Modern React-based interface with enhanced UX and performance
- Complete forum management system with topic and post management tools
- Advanced user permissions and moderation tools
- Support for 25+ built-in themes
- Four forum modules: Recent Posts, Topic Form, Categories, Top Users
- 11 plugin integrations for extended functionality
- Automatic update system with integrity checks
- Native Joomla 5 and 6 compatibility

### Changed
- Account menu replaces previous subscriptions interface for better UX

### Removed
- Private messaging (use Joomla's built-in PM or third-party alternatives)
- Leaderboard page (was not widely used)
- Recent topics menu item (functionality merged into main listing)
- Forum rules menu (create custom menu items instead)
- Users listing menu (use Joomla's user management)

## [5.1.0] - 2025-10-05

### Added
- Joomla 6 Compatibility Update

### Changed
- Removed legacy references
- Update copyright headers

## [5.0.14] - 2024-12-12

### Fixed
- No emails sent when reply posted

## [5.0.13] - 2024-11-23

### Fixed
- Language tag is not retained after saving topic
- Fixed issue with showing incorrect text after like/dislike question

## [5.0.12] - 2024-09-27

### Fixed
- Sync topics fails to sync topics
- Forum rules page shows error

## [5.0.11] - 2024-05-24

### Added
- Added button to sync topic reply counts

### Fixed
- Fixed issue with migration script

## [5.0.10] - 2024-05-12

### Added
- Added .htaccess file to restrict direct access to attachments

### Fixed
- Topics do not display if mysql strict dates enabled
- Fixed issue with selecting admin user group in the Topics plugin
- Fixed issue with expanding filters on the admin list pages

## [5.0.9] - 2024-02-23

### Fixed
- Fixed Google structured data markup for discussion forum posting

## [5.0.8] - 2024-02-14

### Fixed
- Fixed issue with topics search
- Fixed issue with deprecated message on form page

## [5.0.7] - 2024-02-06

### Added
- Added validation to restrict posting duplicate topics

### Fixed
- Fixed issue with smart search plugin

## [5.0.6] - 2024-01-14

### Added
- Added support for Rewardify User Points

## [5.0.5] - 2023-12-22

### Fixed
- Fixed issue with topics not loading after upgrade
- Categories without menu item are not accessible

## [5.0.4] - 2023-12-21

### Added
- Added Joomla Privacy plugin for CjForum
- Show message when users do not have access to view replies

### Fixed
- Report button is not working with bootstrap5
- Replies are not showing when mysql null dates are not allowed
- Empty list is shown when the database option to allow null dates is disabled
- Topics ordering selected in the menu item is not applied
- Unable to edit topic in bootstrap3 layout

## [5.0.3] - 2023-12-02

### Added
- Added support for migrating questions from Community Answers component to CjForum

## [5.0.2] - 2023-11-11

### Fixed
- Fixed the margin of batch button on admin toolbar
- New topic emails sent to blocked users

## [5.0.1] - 2023-09-26

### Fixed
- Fixed version information

## [5.0.0] - 2023-09-24

### Added
- Breaking Change: Added support for Joomla 5

### Changed
- Breaking Change: Removed legacy layer for Joomla 3

## [4.2.2] - 2023-08-12

### Added
- Updated Save button label to Post Topic

### Changed
- Replaced JFile/JFolder deprecated wrappers with respective file system functions
- Replacing legacy API references

### Fixed
- Fixed issue with bootstrap library not loading in older Joomla versions
- Fixed issue with showing social icons on profile details page

## [4.2.1] - 2023-03-26

### Changed
- Changed edit icon to fa-edit on topic page
- Changed icon of the edit button for FA6 compatibility
- Removed deprecated function calls

### Fixed
- Do not send email notifications to globally blocked users

## [4.2.0] - 2023-02-05

### Added
- Show recently discussed topics on category page
- New option to disable login/registration form

### Fixed
- Show create topic button on the toolbar only if user has create permissions
- Logged in user cannot see their unpublished topics from My Topics view
- Fixed PHP warning messages
- Tabs on backend dashboard page are not working
- Topic pagination on the listing page are not aligned properly on bootstrap5 layout
- Quoting a deleted user's reply throws error
- CjForum apps form quizzes & answers do not show correct layout
- Fixed bootstrap5 UX on the advanced search form
- Removed unused language strings

## [4.1.6] - 2022-11-07

### Added
- Adding PHP 8.1 support and fixing deprecation notices

### Fixed
- Unable to send private message from messages dashboard page
- Show Topics Count option is not working for category view in Bootstrap5 layout
- Fixed issue with removed JString invocations
- Fixed issues in syncing users data when mysql strict mode is enabled
- Fixed issues with Kunena migration script

## [4.1.5] - 2022-09-04

### Fixed
- Disabling Show Footer block show empty border item at the bottom
- Fixed issues with Kunena migration on Joomla 4

## [4.1.4] - 2022-07-30

### Changed
- Do not load chosen library in the list layouts when using Joomla 4

### Fixed
- Tags are not saving in Joomla 3.10 or later versions

## [4.1.3] - 2022-07-26

### Fixed
- Fixed issue with topic/reply rating not working
- Fixed PHP notice messages shown when editing a reply
- CjForum content plugin causing error with webservice calls
- Fixed issue with content plugin conflict with webservices plugin

## [4.1.2] - 2022-05-13

### Added
- New category option to set a category as parent group (readonly) or regular forum

## [4.1.1] - 2022-03-14

### Fixed
- Mobile menu on toolbar does not work when using bootstrap5 layout
- Fixed issue with the finder plugin
- Fixed issue with modal selection in topic modal dialogs

## [4.1.0] - 2022-02-07

### Changed
- Leaderboard list rows is wrapped down on bootstrap 5 layout
- Updated default avatar size in the topic view to 256px

### Fixed
- Search bar takes full width on bootstrap 5 layout
- Social sharing buttons are not loading on Joomla 4
- Fixed issue with indexing topics using smart search
- Fixed issue with loading forum rules page
- Fixed issue with download my data button failed on bootstrap5 layout
- Fixed issue with downloading attachments
- Fixed issue with topic selection modal on single topic menu item
- Subscription links are not shown on the topic page (bootstrap5)
- Subscription Tools option does not work on the categories list
- Privacy consent checkbox is not visible on profile form
- Fixed issue with the errors shown when a profile/user was deleted

## [4.0.3] - 2021-08-23

### Changed
- Change automatic update references to shondalai.com

## [4.0.2] - 2021-08-16

### Fixed
- Toolbar dropdown enhancements for bootstrap 5 layout
- Fixed issue with incompatible method in the content plugin

## [4.0.1] - 2021-07-18

### Added
- Joomla 4 RC 4 support added

### Changed
- Adding missing language string in the backend menu

### Fixed
- Fixed warning message shown when using PHP 8
- Unable to submit reply to the personal messages

## [4.0.0] - 2021-06-03

### Added
- Joomla 4 support added
- New layout (for all pages) based on Bootstrap 5 CSS library

### Changed
- Tuning sql queries and performance improvements with user tables

### Fixed
- Selecting "All Categories" in advanced search produces no results when "Show Unauthorised Links" option is disabled

---

## Archived Versions (3.x and earlier)

The following versions are archived and retained in their original format for historical reference.

**3.4.3 (25-Mar-2021)**

* PHP 8 support added

**3.4.2 (09-Feb-2021)**

+ New option to show/hide box which shows number of topics in the category
+ New option to show/hide box which shows number of topics in the sub category
+ New option to show/hide box which shows number of replies in the category
* Unpublished tags are shown on the topic form (Joomla bug)
* Error shown when trying to post reply

**3.4.1 (13-Dec-2020)**

* Same user shown multiple times in online users block
* Fixed missing language strings
* Topic Form module shows 500 error when the access is enabled for guest

**3.4.0 (03-Oct-2020)**

+ New Topic Form module for quick topic creation from any page
+ New option to show subscription buttons on topic details page to subscribe the topic and the topic category
+ Allow creating menu item for a single topic
+ Update last replied user & date when a reply is unpublished/deleted
^ Joomla 4 Beta 4 support added
* New users unable to login when mysql strict dates mode is enabled
* Progress bar do not show when user sync started
* Unable to edit user avatar
* Moderation emails are not sent when permission is enabled at category level
* User profile shows all user reputation/activities when using menu item

**3.3.7 (14-Jun-2020)**

^ Joomla 4 beta 1 support added
* Finder events are not triggered when topics are created/changed
* Emails about new messages are not sent immediately when skip queue option is enabled

**3.3.6 (09-May-2020)**

+ New permission to restrict access to view profile pages
* Social login users are automatically logged in after signup even admin approval enabled

**3.3.5 (04-May-2020)**

+ Added Smart Search plugin for CjForum Topics

**3.3.4 (27-Apr-2020)**

* Attachments do not with the personal messages
* Fixed issue with the plugin in latest version of Community Builder
* Activity url is not hidden from header when the option is disabled

**3.3.3 (26-Mar-2020)**

* Topic form page does not show in the selected template
* Activities are added even if the rule is unpublished.
* Category listing is not showing correct subcategories

**3.3.2 (19-Mar-2020)**

^ Redirect user to topics listing page when the topic is moderated
^ Updated social authentication library to use the latest methods
* Social authentication disabling regular authentication methods
* Topic author name is not displayed in topic details page

**3.3.1 (18-Mar-2020)**

* Warning message is shown on the search page on few PHP versions
* Moderating new posts for URLs should allow internal URLs

**3.3.0 (07-Mar-2020)**

+ New feature: Split topic from selected reply
+ New feature: Restrict forum access based on user post count
+ New feature: Highlight category icon with new topics on the forum index page
+ New feature: Possibility of the user to set invisibility: New feature - NickName
+ New feature: New spam moderation option to moderate posts with hyperlinks
+ New option to show/hide Recent Activities menu item on the toolbar
+ New option to show/hide My Reputation menu item on the toolbar
+ New option to show/hide Forum Members menu item on the toolbar
+ New option to show/hide Karma on the leaderboard page
+ New option to skip email queue for sending email notifications
+ New option to show/hide pagination on top and bottom of the list
+ New option to show/hide pagination on top and bottom of replies
* Currently shown tab is not activated on the profile page with bootstrap2 layout
* Latest activities are not shown first
* Fixed bug with missing required js files in the content plugin

**3.2.3 (29-Dec-2019)**

+ Added new module positions forum-categories-above-toolbar and topics-list-above-toolbar
+ Adding a new option to show/hide Jump to Forum box
* Topics ordering option is not validated while showing listings
* PHP notice messages in the log files are fixed
* Fixed notice messages reporting log files
* Untranslated strings in CB plugin
* The attachments are not rendering properly
^ Joomla 4 alpha 12 support added

**3.2.2 (13-Aug-2019)**

* Private message modal box does not show content/buttons

**3.2.1 (11-Aug-2019)**

+ Added Sociable support
* CjForum module shows listing even if it is disabled

**3.2.0 (03-Aug-2019)**

+ Show last reply author and description in the CjForum module.
+ Added new Recent Posts tab in the CjForum Module.
+ New configuration option to show/hide location on the profile
+ Show top users quizzes count in the backend dashboard page
+ New configuration option to show/hide user information block
* Badge is not assigned for thank you activity
* Hover on elements with tooltip removes the parent element when Mootools is loaded on the page
* Profile URLs are not SEF enabled when advanced routing is selected
* Unable to save changes to profile form when GDPR options disabled
* About text and signature editors on profile form where wrapped down when there are fewer fields enabled.
* Recent messages are not shown on top
* Fixes to bootstrap 4 layout

**3.1.4 (23-Mar-2019)**

* Edit profile link is not visible to registered users
* Page navigation layout is misaligned in users listing page
* Toolbar layout navigation is not aligned properly after the last update

**3.1.3 (20-Mar-2019)**

* Kunena migration do not migrate attachments
* After replying to the topic, the page is redirected to the listing
* Profile tabs are not aligned properly on few templates

**3.1.2 (09-Mar-2019)**

+ New feature: Reporting topics/replies and review reports 
+ Show attachments icon when the topic has files/images attached
+ Added a link back to CjForum changelog in the dashboard page
^ Bootstrap 4 compatibility updates
* Allowed extension types text breaks layout in mobile mode
* Personal messages are not ordered by the last replied date
* Related topics table do not show properly on bootstrap 4
* Unable to select message receiver id in PMS when using bootstrap 4
* Attachments migrated from Kunena are not shown on CjForum

**3.1.1 (12-Feb-2019)**

+ Added Select Category option in category dropdown list of the form page
*  Users can access unauthorized links
* Kunena migrated topics do not have last reply id updated in the table
* Category topics listing page do not follow component list limit option

**3.1.0 (11-Feb-2019)**

+ New Moderation Capabilities: Add/manage moderators for categories
+ New configuration option to show/hide allowed file types text
+ Added allowed file extensions text in the attachments forms
+ New configuration option to exclude selected user group activity from showing in the listing
+ Added new configuration option to show/hide last replied by callout
+ New option to show the introductory text of topic in listing pages 
^ Improved the look and feel of the avatar in the leaderboard with border style
^ Joomla 4.0alpha6 compatibility updates
* Removed duplicate Show Tags option in the configuration
* Topic routing does not identify id when no menu is used
* Unable to remove IDs from topic URLs after upgrade
* A PHP notice message logged in logs when topic do not have any replies
* Show tags configuration option does not show tags on a topic
* Admin points page do not load on Joomla 4
* Error when installing on Joomla 4 Alpha 6

**3.0.4 (01-Jan-2019)**

* Security issue : users can see unauthorized topic short description in related topics in the tooltips
* Install package failed on fresh new sites
* Unable to select target user to send a message in Joomla 4

**3.0.3 (27-Dec-2018)**

+ Added migration script to migrate data from for EasyDiscuss
^ Joomla 4 Alpha 5 compatibility updates
* Unable to change the state of ranks
* Wrong version status is shown on the backend dashboard page

**3.0.2 (08-Dec-2018)**

^ Replaced RuntimeException with Exception
* Unable to unpublish topics/replies after updating Joomla 3.9.1
* User's original name is shown when quoting a reply
* Profile form view styles are not aligned when using bootstrap3
* Ranks are not updated during migration
* Backend dashboard shows the incorrect date in the top users' list
* Cannot edit category when language filter plugin is enabled.

**3.0.1 (04-Oct-2018)**

* New posts link in CjForum Module redirects to homepage.
* Kunena migration failed to migrate avatars
* Component Fails to load on Joomla 3.6.5

**3.0.0 (26-Sep-2018)**

+ Added support for Joomla 4 Alpha 4
+ Added support for Bootstrap 4 templates (backend and frontend)
+ New modern router class added
+ New option to configure maximum number of tabs displayed on profile page
+ Added Joomla! search plugin for CjForum topics search
+ Moved the topic view HTML content to its own layouts
^ Redirect guest users to login page when they access PMS pages
^ Show thumbup and thumb down icons of like/dislike buttons on the users own posts
^ Extra check for menu item in the router file
^ Moved language strings from CjForum module to component language file
^ Adjusting the display area of messages list
^ Removed deprecated usages of APIs
^ Code style fix
* Profile page shows error on few websites with date not accepting null dates
* Thankyou are not synced with users list.
* Updated with GDPR language strings with correct grammar
* Thank you text contains user name instead of login name
* Topic language is undefined when the language options are disabled
* PHP warning message on topic page when using PHP 7.2
* Notice message in the apache logs when modifying the topic.
* Warning messages in ajax response while migrating Kunena
* Unable to migrate Kunena topics when multilanguage is enabled
* Community Surveys plugin is not working
* Removed additional character(:) in footer block
* Fixed language string errors
* Search plugin do not filter unauthorised topics
* Show the correct page when user navigated to a topic from activity stream
* Personal Message details page shows user name instead of login name
* Activities cannot be published/unpublished from frontend.
* Pagination in My Topics page is not working
* Topics listing is not shown on profile page tabs (cjforumapp)
* My Reputation link do not show correct profile tab
* Default editor option is not used in PMS when setting use global
* Attach files permission on component level should apply to PMS

**2.2.2 (29-May-2018)**

+ New configuration option to configure date format in profile details
* Non-sef urls are sent to activity stream when a new article is created
* User profile cannot be downloaded when the user has no avatar uploaded

**2.2.1 (25-May-2018)**

+ Added support for downloading HTML version of user data, media, and attachments
+ Added support to remove points, attachments, and subscriptions of the users while deleting the user profile
+ Added support to download attachments in user profile download
+ Added configuration options to customize date formats in various pages
^ Redirect guest users to the login page when they accessed topic which is not authorized for showing to guest users
^ Moved untranslated strings in edit profile page to language file
* Moderation approval email for a new topic is not being sent
* Fixed typo in administrator language file
* New reply notification message sent to the wrong user
* Attachments form should be hidden when the user is not authorized to attach files

**2.2.0 (20-May-2018)**

+ General Data Protection Regulation (GDPR) compliance update
+ Added menu options to customize default listing type for topics listing menu item
^ Disallow users from liking/disliking their own posts
^ Do not show thank you button on posts created by the logged in user
* Untranslated message shown in activity stream after user signup
* Notification sent in reply to a message containing the wrong URL
* Selecting no avatar do not hide avatar in topic
* Jump to forum shows unauthorised categories

**2.1.0 (07-May-2018)**

+ Topics and replies moderation via emails by administrators
+ Send email notifications on receiving a personal message, new email templates introduced
+ New config option to exclude user groups from users listing page
+ Show user signature on topic description block
^ Add a unique number to alias when there is a duplicate alias detected during a topic creation instead of rejecting the topic
* Toolbar is not hidden by default on mobile devices ^ Redirect users to topics listing page after posting a moderated topic

**2.0.6 (01-Apr-2018)**

+ New permission settings to restrict file attachments
+ New configuration option to show/hide language options on topic form
+ New configuration option to show/hide metadata options on topic form
* Categories list is now shown to guest users in advanced search page
* File uploads are not working in quick reply form when using bs3 layout
* My Topics menu is not shown on toolbar when user has no create permissions at component level but have at category level
* Advanced search is not working on selected categories
* Add attachment block layout is not in line with existing attachments
* Topic form layout menu shows profile layout
* Quiz description cannot be hidden when using quiz form module

**2.0.5 (08-Feb-2018)**

* Avatar image extension is duplicated when editing profile without changing the avatar
* Installer failed to create tables during installation
* Advanced search with content do not search mixed case letters

**2.0.4 (23-Jan-2018)**

+ Added new menu item type to create search page menu
* Personal Messaging URL contain unnecessary parameters
^ Updated default character set of tables to utf8mb4_unicode_ci
^ UTF-8 Multibyte (utf8mb4) conversion for MySQL tables
* Unable to hide view parameter name in the My Subscriptions menu item URL
* User Profile menu item shows all user activity on profile page
* Quality of uploaded avatar is low and background is pixelated

**2.0.3 (28-Dec-2017)**

^ Updated PMS list layout to display in a condensed table.
* Error is shown when updating user avatar (only in few Linux based web servers)
* My Topics page shows all topics

**2.0.2 (28-Nov-2017)**

* Installer shows error although installation was successful

**2.0.1 (20-Nov-2017)**

* New database column is not created by the installer

**2.0.0.Stable (19-Nov-2017)**

+ Added support for social login using facebook, google, twitter and LinkedIn
+ New configuration option to allow editing quoted reply when replying
+ Add robots and other metadata to the profile page
+ Added checks to restrict direct access to PMS form
+ Added option to show tags on topics listings
^ Minimum PHP 5.6 is required
^ Allow uploading files to topics from backend
^ Added untranslated strings
^ Show truncated description on messages listing page
* Page redirect to topics listing page after saving reply form
* Unable to upload files from quick reply form
* Page redirect to own profile after admin editing other profile
* Multipage topic redirect to first page after posting a reply
* Name is being used as title on profile page even if username is chosen
* Image with size smaller than 256px is not fitting into avatar frame
* Unable to send message when there is a conflicting adminForm on the

**2.0.0.RC01 (07-Oct-2017)**

+ New Feature: Private Messaging
+ Community Builder user plugin to show users topics on profile
+ Show replies count in categories listing
+ New option to enable/disable toolbar
+ New option to enable/disable leaderboard
+ New option to enable/disable members listing
+ New module: CjForum Top Users 
+ Customize Leaderboard with custom weight for each parameter
+ Add Register button in login forum block of header
+ Show last replied username text in listing page
+ New module position: topic-view-above-replies
^ Do not show profile pages of users whose account is blocked by admin
^ Updated copyright year
* Kunena migration do not complete
* Page is not redirected to topic after editing the reply
* User reputations block is blank when going through My Profile Summary link
* Modules are not shown after the second topic in topics list page
* Unable to delete own topic when permission is set at category level

**1.5.6 (05-Jun-2017)**

+ New permission setting to allow users delete their own topics
* Child categories are shown in categories list even view permission is denied
* Change avatar function do not work on some browsers
* Community Quizzes plugin throws error

**1.5.5 (02-May-2017)**

+ Unable to migrate from v1.9+ versions to latest
^ Updating jQuery Guillotine Plugin to latest version

**1.5.4 (22-Apr-2017)**

* Forum brand button is not linked to categories index
* Forum index page sef URL is not created properly
* Redirected to non-sef URL after saving topic
* Subscriptions page shows notice message when error reporting enabled
* Users listing default order should be number of posts of the users
* Unpublished users shown in listing page

**1.5.3 (20-Apr-2017)**

+ New option to customize list of allowed attachment types
* User profiles with hyphen character in name shows error
* Checkin button not shown on backend users listing page
* Cannot click cancel button when creating new Rank
* Forum index menu on toolbar do not work from different menu items

**1.5.2 (26-Feb-2017)**

* Profile page display name instead of username
* Emails are not sent from queue
* Fixed security issue - SQL injection due to inadequate request

parameter filtering **1.5.1 (17-Feb-2017)**

* Notifications are not being sent

**1.5.0 (05-Feb-2017)**

+ Added support to send notifications to Lotus Android clients
+ Show new posts in CjForum module
+ Show last reply date in CjForum module
+ Allow attachments through quick reply form
+ Show quoted text outside of editor when quoting a reply
+ Added upload file feature in quick reply form

**1.4.1 (25-Dec-2016)**

+ Support for Lotus Android App is added
+ Support for new Joomla Routing added
* Wrong url in shown in header block when sef is disabled
* Activities url pointing to profile home page
* Author name not displayed properly with CB content plugin
* Forum Apps plugins throws error when corresponding component not installed
* Non-Sef url with category id 0 produces error
* Footer and online users blocks display user name instead of login name ignoring option
* Author name does not show properly when CB plugin is enabled
* Sort order is not maintained while moving between pages in users list

**1.4.0 (24-Sep-2016)**

+ Added local option to customize number of topics displayed per page
+ Changed Account dropdown name on toolbar to My Stuff
+ New subscription icons on categories pages to subscribe to email notifications
+ New icon in topics listings to indicate topic is locked
+ Added new My Subscriptions page to manage user subscriptions
+ Added buttons to subscribe categories and topics directly
^ Style related topics block with panels
^ Send reply notifications only to the topic subscribers
^ Removed the extra lines shown in quote reply text in the editor
* Cannot limit max length of the activity description

**1.3.2 (09-May-2016)**

+ New CjForum Apps: Support for adding new tabs of other components in profile page using plugin events 
+ Moved all corejoomla integrations of profile page to their own cjforum apps
^ View Replies permission at category level
^ Moved all existing tabs in profile pages to standalone plugins

**1.3.1 (22-Mar-2016)**

^ Joomla 3.5 compatibility updates

**1.3.0 (19-Mar-2016)**

+ Added support for awarding points and add streams for Komento comments
+ Added option to show/hide feed icon
+ Option to show/hide credits
+ Added Joomla search plugin for CjForum topics
^ Removed extra semicolon in users statistics block
* Unable to edit topic when multilanguage is enabled

**1.2.0 (16-Jan-2016)**

+ Show search form on top of topic list for quick search of topics
+ Jump to forum list box on topics listing and category pages
+ Show related topics at the bottom of the topic page
+ New forum rules page added
+ Added forum rules link in discover menu
+ Added new fields in category manager listing to show number of topics published, unpublished, trashed and archived
+ Replaced social sharing buttons with jsSocials for better performance
^ Refactored topic pages with reusable layouts
^ Changed social sharing buttons to use jsSocials plugin
^ Click on like/dislike button on already liked/disliked reply or topic should reset the previous vote
^ Show only categories belongs to current language in topic form
^ Show only categories belongs to current language in search form
^ Show only categories belongs to the current menu language in form and search pages
* Unable to save email template
* Registered users cannot post in authorized categories
* Discover button redirect to home page where there is a JavaScript error on the page
* Users can reply using quickly reply form but cannot do with main reply form
* Users will edit replies access cannot edit replies
* Last replied by userid is being reset when editing a reply
* Attachments to replies gets deleted if the reply is edited

**1.1.0 (04-Oct-2015)**

+ New option to show hide like buttons
+ Added points rules for deleted topic and deleted reply
+ Added Joomla auto-update support
+ Added topic title to the activity sent on adding new points
+ New flood control options to limit topics and replies users can post per day
+ New flood control options to limit topics and replies new users can post per day
+ Support for custom profile fields
+ Added support for Community Surveys listing on user profile
* Top users in backend dashboard do not show correct date
* Hide publishing options configuration option do not work
* Articles app not loading latest articles from CjBlog
* Polls app do not load polls from Community Polls

**1.0.7 (01-July-2015)**

+ New configuration option to show/hide voting buttons
* Edit own state permission do not work for registered user groups

**1.0.6 (24-June-2015)**

+ Select the category on topic form page if the user clicks New Topic button from a category page
+ Added batch operation to assign a rank to multiple users
+ New configuration option to hide Gender on the profile page
+ New configuration option to hide Age on the profile page
+ New configuration option to hide Member Since on profile page
+ New configuration option to hide Last Visit date on the profile page
^ Added right padding to labels below avatar in topic replies
* Show hits configuration option is not working
* Custom module positions in category listing page are not showing modules

**1.0.5 (27-Apr-2015)**

+ Added app name filter to filter activities by selected application
+ Joomla 3.4 validator support
+ Community Quizzes on click integration support
* Stream API do not add a stream
* Unable to choose default category of form view menu item
* User profile does not get created automatically when a new user registered

**1.0.4 (17-Apr-2015)**

+ Replies pagination links shown on listing pages
+ Load Sharing tools asynchronously to avoid blocking page load
+ Support for Forum name instead of the name from Joomla user name.
+ Global activity map on backend Dashboard page
+ Enhanced trend chart on the Dashboard page.
+ Added support to show either user name or login name on forum pages
+ Added configuration option to choose default editor
* Some image extensions do not show as thumbnails
* Attachments are shown below the signature.
* All charts in dashboard shows instead of only first tab chart
* Activity is not being shown to public users
* Like/Unlike actions fail when SEF URLs are turned off
* Replies count of users is set to the wrong number when a topic is created.

**1.0.3 (06-Mar-2015)**

+ Added new module positions
+ Added dashboard geo location report chart
+ Added daily trends chart in dashboard

**1.0.2 (01-Mar-2015)**

+ Added Ajax functionality for like/dislike buttons
* Attachements cannot be deleted once added
* User profile names containg hyphen throws 404 error

**1.0.1 (26-Feb-2015)**

+ Joomla 3.4 compatibility updates

**1.0.0 (31-Jan-2015)**

Initial Release