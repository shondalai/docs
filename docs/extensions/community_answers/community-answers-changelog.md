---
id: community-answers-changelog
title: Community Answers changelog
sidebar_label: Community Answers changelog
sidebar_position: 5
---

v6.2.0/1 (2025-10-05)

+ Joomla 6 Compatibility Update
+ Added new option to show login form to the guest users
^ Set default date values in the install script
^ Update copyright headers

v6.1.6 (2024-11-03)

* Fixed issue with backend answers page when filtered by category
* Fixed issue with comments display

v6.1.5 (2024-09-11)

* Fixed issue with indexing question in smart search plugin

v6.1.3/4 (2024-07-26)

* Fixed issue with finder plugin

v6.1.2 (2024-07-07)

* Fixed issue with smart search plugin not showing results

v6.1.1 (2024-04-16)

* Fixed issue with installing finder plugin

v6.1.0 (2024-04-14)

+ Added support for Rewardify Points
+ Added option to sort by trending questions in category view
* Fixed issue with smart search plugin
* Empty list is shown when the database option to allow null dates is disabled
* Fixed issue with upgrading from v4 to v6
* Fixed the margin of batch button on admin toolbar

v6.0.1 (2023-09-26)

* Fixed build issue

v6.0.0 (2023-09-24)

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3
* Fixed issue with redirection after login through login module on a question page

v5.3.8 (2023-05-10)

^ Replaced JFile/JFolder deprecated wrappers with respective file system functions
^ Removed deprecated code
* Replacing legacy API references
* Fixed issue with finder plugun causing error
* Fix for user last accessed questions data

v5.3.7 (2022-11-07)

+ Added support for PHP 8.1
+ Updated support for latest easysocial version
* Cancel button on admin questions batch modal does not work
* Fix for JMap plugin deprecated code
* Fixed issues with untranslated/removed language strings
* Show right online guest user count on the categories page statistics
* Tags are not saving in Joomla 3.10 or later versions
* Page shows error when the component redirect to login/any page

v5.3.6 (2022-05-03)

+ New preferences page to customize user signature
* Fixed issue with showing question detail page withour reply permission
* Set mandatory default values while creating the question
* Error message shown after saving the question on backend
* Fixed issue with PHP notice message on category feed page

v5.3.5 (2021-12-12)

* Unable to create or save tags in the question form

v5.3.4 (2021-11-11) 

* Categories page do not show categories list

v5.3.3 (2021-11-10)  

* Categories list page shows PHP warning message
* Community Answers Module shows error when loading on non-ca pages
* Fixed issues with redirecting to login page in Joomla 4
* Fixed issue with form module with loading the styles

 v5.3.2 (2021-11-06) 

^ Improved login form styles for bootstrap5
* Statistics module do not show correct count of solved questions
* Fixed issue with permanently removing a reply from front-end
* Unable to like/dislike when mysql strict mode enabled
* After like/dislike the button icon is hidden
* Installaer fails with error on Joomla 3

v5.3.1 (2021-09-03) 

+ Added extension changelog button shown for Joomla 4 and above
^ Update the documentation link with new shondalai domain
* Fixed issue incompatible method in the content plugin
* Added missing language string for admin system menu
* Toolbar users menu items shown even after disabling it

 v5.3.0 (2021-07-18)

* Unable to post multiple answers from backend questions page

v5.1.2 (2020-05-17)

* Modifying a comment in the backend, shows multiple duplicate comments on the page
* Sort ordering text in advanced search is not translated
* Accessing my answers page without logging in shows error instead of redirecting the user to login page
* Duplicate approval emails are being sent to the administrator

v5.1.1 (2020-04-20)

* No emails triggered after the administrator approves the question/answers
* Questions linked to wrong URL in My Answers page

v5.1.0 (2020-03-28)

+ Show the number of questions of the parent category in the category list
+ Add an option to display part of the accepted answer in Community Answers module
+ Show date in Community Answers Module
+ New menu item layouts for My Questions, My Answers & Export My Data
+ Show micro avatar of the usernames of comments
+ Allow adding answers from administrator site
+ Added support for Easy Profile avatars and profile linking
* No email notifications sent to the question author if the question is posted as guest
* The RSS feed icon cannot be hidden using the component option
* Fixed issues with SMFaq migration
* Error message shows after saving question when there are no users synced

v5.0.9 (2020-01-11)

+ Added migration script to migration questions from SMFaq extension to Community Answers
* Last replied user of question is modified when answer is edited from backend
* Guests are unable to view the comments

v5.0.8 (2019-12-29)

+ Added Sociable support
* Unicode urls are not created when saving the items
* CA Form module is not shown when using Bootstrap 3/4 layouts.

v5.0.7 (2019-08-11)

+ Added Sociable support
^ Removed references to Google+ service
* Hover on tooltips disappear elements when mootools loaded on the page
* RSS Feed cannot be rendered properly when PHP notice messages is enabled
* Fixed issues with layouts and bootstrap4 layouts
* Edit button in backend answers listing is not working
* Add meta keywords from question title if they are not available

v5.0.6 (2019-05-08)

* Edit comment form show error in backend
* Updated Joomla 4 alpha 8 support

v5.0.5 (2019-03-30)

+ Added new backend view to manage user subscriptions
* Author filter do not work properly in backend answers/comments pages

v5.0.4 (2019-03-20)

* Registered users are unable to submit answer after the last upgrade

v5.0.3 (2019-03-16)

* Topic author cannot add comment unless answer permission is given
* Error shown when guest user trying to post question/answer
* Unable to edit and save answers from backend

v5.0.2 (2019-02-17)

* Category description is not showing even when enabled option
* Guest users cannot ask questions after upgrade

v5.0.1 (2019-02-16)

+ Added CA changelog link in the admin dashboard
* Subscribe button on category page is missing.

v5.0.0 (2019-01-31)

+ Make featured question stay on top in their category
* Bug fixes from beta

v5.0.0.b1 (2018-12-25)

+ Joomla 4 support is added
+ New Bootstrap 4 based layout (can be chosen from component options)
+ New router for SEF URLs
+ Added support for new reCaptcha plugin
+ Added live search capability in question form page 
^ Removed usage of a deprecated API for fitering output
^ Page title of the category page should include page number
^ Replaced RuntimeException with Exception
* Question(s) canonical url is not using https when enabled
* Added missing language strings for multi language associations
* Category page do not show the meta description of the category
* Category view do not show category title on browser title bar
* New database columns cannot be created during installation causing errors
* Points are not refunded to the user when bounty is expired
* Show number of questions option in category not working
* Subscribe checkbox in reply form do not subscribe users to topic

v4.7.1 (2018-06-11)

+ Added comments and email templates menu to backend component menus
* Comments page on backend shows error

v4.7.0 (2018-06-01)

+ GDPR Compliance: Allow users to download their data as HTML file
+ Added management screens for managing comments
+ Add canonical url on questions and category pages
^ Updated sh404sef plugin
* Installer failed on few database instances when installing the component for the first time

v4.6.0 (2018-04-01)

+ Add page number in the page title of listing pages
+ New content plugin to show user answers in Joomla! articles
+ sh404sef plugin for community answers
+ Added canonical url in all questions pages
+ New config option to show/hide current page title on response page
+ Add "mandatory" css class for mandatory questions block
+ Added JSiteMap plugin for Community Answers
^ Updated default character set of tables to utf8mb4_unicode_ci
* RSS Feed cannot be generated from questions listing page
* Response status filter not working on responses list with pending responses
* Charts are not aligned properly in grid chart report page
* Conditionally hidden questions causing page to jump to top
* Live search do not work when sef is disabled
* Error shown with community answers module on few Joomla versions
* Community Answers Form Module redirects to non sef url
* Unable to edit email type of new email templates
* Search view menu item is not used for the advanced search link

v4.5.6 (2017-12-27)

* Unable to access question url from email notification
* Urls sent in email notification do not enforce https
* Added missing language string

v4.5.5 (2017-10-13)

+ Redirect guest users to login page when they access question form page
^ Show only users with positive karma in leaderboard
* Top users module shows incorrect ordering of users
* Options button shown two times on backend pages

v4.5.4 (2017-07-02)

+ Unable to migrate from v1.9+ versions to latest
+ New tag in email templates `{SUBSCRIPTIONS_URL}`
^ Updating jQuery Guillotine Plugin to latest version
^ Delete user from component user table when the user is deleted from Joomla
^ Show alias field only for admin users
^ Updated copyright year
^ Redirect guest users to login page when they access subscriptions page
* Question view page shows warning about component not found
* Subscriptions url is rendered as non-sef url even the menu item exist
* Guest users are not redirected to login page when accessing form page directly.

v4.5.3 (2017-04-15)

+ Added AlphaUserPoints plugin in package
+ Added new option to show only featured questions excluding bounty questions
* Page redirect to error page when setting feature flag in backend
* Unable to archive/publish answers
* Categories are not shown to registered users on search page
* Match all keywords option do not work on advanced search page

v4.5.2 (2017-02-25)

+ Added AlphaUserPoints plugin in package

v4.5.1 (2017-01-18)

+ Added support layer for Lotus Android app
* Points deducted from user who upvoted answer using cjforum

v4.5.0 (2016-12-25)

+ Added support for Lotus Android App
+ Added support for new Joomla 3.7 router
+ New option to show/hide small intro text in listing
* Deleting questions/answers do not sync counts properly in leaderboard
* Corrected typo in language files
* User name is not displayed properly with CB content plugin enabled
* Link Titles option do not disable linking titles
* Creating bounty by admin user should not deduct points from admin user
* Questions and answers count is not synced with users when they are deleted permanently

v4.4.1 (2016-10-04)

+ Added support for Community Builder activity streams
+ New options to fully customize leaderboard behavior
+ New points rules for awarding points to user who voted up a question or a reply
+ Added option to restrict categories in Community Answers module
+ Added support for AltaUserPoints
* Ask form do not fit screen when viewed on mobile devices
* Error shown when ratings are enabled
* Bounty/Login modal shown as disabled on some templates
* Fixed issues with Kunena migration script

v4.4.0 (2016-08-22)

+ Added new navbar for quick links on listing pages
+ Added CjBlog v2 rules
+ Added Kunena migration script
^ Updated accepted answer block styling to custom boxed styling
* Import CSV function imports one questions max at a time
* Trigger badges throws error
* User unable to post replies to questions migrated from previous releases
* Ask form returns to homepage menu item when sef urls disabled
* Users can access questions in category with no different access level

v4.3.3 (2016-04-26)

+ Added sync questions button to resync answers count
* Leaderboard shows Name instead of username when the option is changed
* CjBlog badges do not trigger when a new question is created

v4.3.2 (2016-04-16)

+ Added support for AltaUserPoints
* Users cannot unpublish posts with edit own state permission enabled
* Users unable to delete their replies if permissions enabled
* reCaptcha do not show after upgrading to Joomla 3.5.1
* User display name always shows user real name instead of login name

v4.3.1 (2016-03-22)

+ Added question statistics columns in admin categories page
+ Added option to show/hide toolbar
^ Joomla 3.5 compatibility updates
* After failed upgrade, answers are not accessible
* Post updating to Joomla 3.4.6, page is return to homepage after posting reply
* Users sync should not count unpublished items

v4.3.0 (16-01-2016)

+ New table layout for Community Answers module
+ Added CSV Import feature for questions
^ Show only categories belongs to current language in topic form
^ Show only categories belongs to current language in search form
^ Show only categories belongs to the current menu language in form and search pages
^ Changed social sharing to jsSocials for better performance
^ Moved question layouts to new shareable layouts
* Questions and answers statistics not updated when they published from backend
* Discover button redirect to home page where there is a JavaScript error on the page
* AlphaUserPoints option is missing in Points System configuration option
* Error shown when clicking category link in few selected cases
* Links in category feed do not work if the SEF urls are not enabled
* Advanced search form throw error if SEF urls not enabled
* CjBlog badge rules are not triggered
* Categories module doesn't show categories in multi-language setup
* Top users modules do not show avatar

v4.2.7 (26-09-2015)

+ New option to auto-subscribe users when they signup
+ Redirect guest users to login page in case they do not have access for creation
+ Support for Joomla auto-updates is added (one click component updates now possible).
^ Updated the JED URL on back-end dashboard
^ Changed the language strings to user friendly messages
^ Bootstrap 3 compatibility updates
* Temporary code replacement for sites with no Joomla lib loaded
* Removed container adding extra padding on the component content
* User is denied access to download files even if the user has permissions for the category.

v4.2.6 (21-06-2015)

+ Added new permission to publish/unpublish own questions/answers/comments
^ Updated naming conventions of edit state buttons on front-end
* Spaces in usernames of leaderboard page getting striped

v4.2.5 (11-06-2015)

+ Added new configuration option to customize when the ask form is displayed on listing/question pages

v4.2.4 (03-06-2015)

+ Added new permission to allow/disallow attaching files to questions and answers
+ Added new option to choose user display name, i.e. username or name
* Removed unused and redundant options 

v4.2.3 (01-06-2015)

+ Added option to hide category on form page
* Category list gets scrambled

v4.2.2 (24-05-2015)

+ Added ability to add attachments from quick answer box.

v4.2.1 (23-5-2015)

* Layout get scrambled when there are no categories to view on questions page
* Toolbar links don't work when SEF urls disabled

v4.2.0 (17-04-2015)

+ Show images as thumbnail and in lightbox
+  Show only categories of selected language when multilanguage is enabled
* Form fields are not aligned properly on templates with bootstrap 3
* Buttons in Edit Answer page on admin site are not working
* Category/List menu items description language strings are missing
* Cannot accept guest user answers
* Cannot select default category for form view menu item

v4.1.3 (27-04-2015)

+ Categories page enhanced with two level categories list.
* Parent category not shown on categories listing page

v4.1.2 (21-04-2015)

* User name and email fields are missing for guest users while asking/answering
* Login dialog on question pages is missing in v4.1
* Administrators do not get emails to approve/disapprove new questions and answers
* Guest name is not shown on answers submitted by guest users
* No message shown about question being moderated when moderation is enabled for a user group.
* Guest users are not notified of the new answers to their questions

v4.1.1 (18-04-2015)

* Captcha not shown for guest users
* Featured options should not be shown to guest users

v4.1.0 (04-04-2015)

+ New module: Community Answers Form module
+ New plugin: Community Answers Smart Search plugin
+ New configuration option to show/hide hits in listing page
+ New configuration option to show/hide author name/link in listing page
+ New configuration option to show/hide categories flat list in listing page
+ New configuration option to show/hide ask form field in listing page
+ EasySocial activity rules for deleting activity when a question/answer deleted
+ Icon to show beside a category link when it has subcategories
^ Display bigger category list box on form page
* Some points rules not working with EasySocial
* Category image does not show
* Community Answers module does shows all questions in most answered questions list
* Form page overlaps with sidebar on some templates
* Category page throws error when description present
* No results present text in leaderboard is not translated
* Bounty points does not work with EasySocial

v4.0.3 (21-03-2015)

+ New option to choose different editor instead of the one in Global Configuration
+ Subscribe category function restored
+ Added switch to enable/disable bounty system.
+ New table added to track user location, browser and platform information for statistical purposes
* New question emails do not sent
* Error shown when activity count greater than zero

v4.0.2 (07-03-2015)

^ Updated modules and plugins to compatible with Joomla 3.4
* Install script gives error on fresh installation
* Migration script fails on very old installations

v4.0.1 (25-02-2015)

^ Joomla 3.4 compatibility updates

v4.0.0 (21-02-2014)

+ New Category System
+ New Tagging System
+ Search engine friendly and user friendly urls
+ Questions now embedded in microdata elements for better seo.
+ Fully redesigned front-end and back-end
+ New email templates designer
+ Ratings can be now allowed on questions as well
+ CjForum integration
+ Many customization options for easy customization
+ New ACL rules added
+ New shareable layouts for overriding the templates easily
^ Removed BBCode support

v3.1.0 (30-Oct-2014)

+ Migrated icons from default icon-* to FontAwesome icons
+ New package structure to include all modules and component in a single package
+ Added configuration option to show hide description (option should be added in config.xml)
* Unable to accept answer unless given ask permission
* Leader board shows wrong count of best answers
^ Removed unused files

v3.0.5 (29-Jul-2014)

* Tag not properly closed in question details page

v3.0.4 (18-May-2014)

+ New permission setting to allow users to view answers posted on their answers only
+ Added meta title and description tags for question
^ Added global cj-wrapper-main class for views
* Do not show ask form for registered users if they are not allowed to create questions
* Deleting a tag from a question deletes it from all other questions

v3.0.3 (16-Mar-2014)

^ Hotfix release

v3.0.2 (09-Jan-2004)

* Unable to answer if replied to an answer before

v3.0.1 (07-Jan-2014)

* Feeds are not working in v3

v3.0.0 (07-Jan-2014)

+ Bounty System: Now users can trade their points for best answers (Thanks to David Larpent)
+ Leaderboard: New leaderboard page for displaying top users
+ Question Clarifications: users can now clarify the question by posting a reply before answering
+ New Question Details UI: New look to the question details page
+ Activities Enhancements: Now supports pagination with enhanced look and feel
+ Login Form: Now built-in login form can be switched off within options
+ EasySocial Support: Activities, Points System, User Avatars, Profile Linking
+ CKEditor Support
+ Custom Alias: Admins can write/edit in their own alias instead system generate it automatically
+ Joomla 3.2 support
^ Use tags as keywords for finding related questions
* Breadcrumbs links to wrong urls
* Refresh does not correctly counts statistics
* Delete activity when a question is deleted
* Do not allow captcha when captcha plugin is disabled
* Answer approval email contain userrname in place of sitename
* Activities page does not open from tags page
* Question approval email body html does not ended properly
* Do not allow multiple click on answer button
* Do not display same question in related questions

v2.2.1 (23-July-2013)

* Feeds are not working

v2.2.0 (20-July-2013)

+ New activties page for users to keep track of their activities
+ Login/Logout functionality right from the component toolbar
+ Improved icons, colored vote up/down icons
* Subscribe and RSS feed icons are not properly visible on few Joomla templates

v2.1.10

^ Created indexes for better performance
* Do not send mails to disabled admin users
* UI fixes for backend

v2.1.9

+ Options to disable bootstrap and jquery, if the Joomla template already loading them

v2.1.8

^ Redirect guest users to login page when view question permission not given to them

v2.1.7 (07-May-2013)

* Wong label is shown for View Answers permission setting

v2.1.6 (06-May-2013)

+ New permission setting to hide answers from unauthorized users but allow viewing/answering question
^ Redirect guest users to login page if they are not authorized to view the question
* Ask form accordion in question page is not responding on some templates

v2.1.5 (26-Apr-2013)

* JomSocial activity stream for best question has wrong user name

v2.1.4 (31-Mar-2013)

+ Default listing view selection (latest, popular etc) per menu item
+ Automatically highlights selected listing on toolbar menus
^ sh404sef plugin to support all features of CA
* Attaching files not possible on safari

v2.1.3 (23-Mar-2013)

* Answer replies not getting any notification to the answerer

v2.1.2 (20-Mar-2013)

* User details not inserted into users table automatically causing no user displayed on top users module 

v2.1.1 (18-Mar-2013)

^ Added answers count label displayed on mobile view

v2.1.0 (16-Mar-2013)

+ Automatically convert urls to links in question description and answers (with nofollow attribute set)
+ Configuration option to display image attachments as thumbnails instead of links
* Upload attachment feature not working on Safari

v2.0.16 (12-Mar-2013)

^ Toolbar menu items should respect the category selection and load questions from selected category only.
* Toolbar Menu collapse opens and closes Main Menu on bootstrap enabled templates on mobile devices
* Selecting the same category as parent category should not be allowed while editing category
^ Changed the CjLib notification to point to download location on new installations
^ Remove left padding of social sharing box.

v2.0.15 (09-Mar-2013)

+ Login dialog support for guest users if the answer permission not given to them
^ On popular demand: reverted the sharing tools earlier style of displaying without additional click
* Too much space in rating block
* Incorrect index name in SQL installer corrected
* Admins not getting notifications
* Pagination in tagged results is not working

v2.0.14 (26-Feb-2013)

+ New notification email sent to users to notify when their questions approved
+ New module - Global statistics to display total questions, answers, solved questions and categories
* Guests do not receive emails when moderation is enabled

v2.0.13 (14-Feb-2013)

+ Added configuration option to hide toolbar

v2.0.12 (07-Feb-2013)

+ Sets default administrator user group for notifications to super admin to avoid confusion for new users
* Feed image is larger than email icon
* Can't set questions limit per page other than 20

v2.0.11 (25-Jan-2013)

+ Added icons to related and category questions accordin for better UX.
* Deleting a tag from question is not possible

v2.0.10 (23-Jan-2013)

+ Remove users support in back-end users page
* Sync feature gets hanged when large number of questions present
* Global checkbox is not working in back-end questions page
* Users unable to edit their own answers
+ JomSocial 2.8 support
* Tags does not accept UTF-8 characters
* When answer is deleted category answers count is shown a large number

v2.0.9 (20-Jan-2013)

* User display name is not changed even if the configuration option is changed
* Related questions box in ask form is not getting closed when user want to ask question

v2.0.8 (20-Jan-2013)

+ Checkbox in question form to let users choose if they want to get new answer notifications

v2.0.7 (15-Jan-2013)

+ CjBlog badges support
+ Limit the bootstrap css scope to component to avoid css conflicts on Joomla 2.5

v2.0.6 (14-Jan-2013)

^ Language string enhancement for tags placeholder text
^ Few enhancements to css on front-end
* Admins cannot accept other user's answers

v2.0.5 (12-Jan-2013)

+ SimAnswer one click migration
+ New multianswer permission to restrict user groups from answering multiple times on same question
+ Close button handle on social sharing popover box
* Only one sharing box should be shown at a time
* Unable to select all questions in admin panel using global checkbox
* Admins not getting notification emails
* My Answers page does not show processed html if BBcode is used
* Unsubscribe link is redirecting to new page on iPhone

v2.0.4 (09-Jan-2013)

* Categories are inaccessible if the permissions are left empty
* Search button should redirect to advanced search page if no input given
* Users unable to update answers unless manage permission given

v2.0.3 (07-Jan-2013)

* Update answer is being failed for admins
* Attachments folder not created on fresh installations

v2.0.2 (06-Jan-2013)

* Removed unique key in attachments table which is causing issue on some servers
* Unpublish/publish links not working
* Limit tag suggestion description to max 100 characters to let the window not spanned
* Tag should be added on pressing enter, semicolon or comma.

v2.0.1 (04-Jan-2013)

* Redirect user to login form if guest user is not authorized to ask
* Link is JomSocial activity stream is incorrect
+ Allow fullstop, hyphen in tag names
+ Hide avatar and answers box on phone layout to make slick look.
+ Make username link to profile in question page

v2.0.0 (Dec 19, 2012) (Joomla 2.5 version)

+ Full rewrite of both front-end and back-end
+ Joomla 3 support
+ New bootstrap enabled UI look
+ New administrator dashboard page
+ CjBlog badge system support
+ New points rules for vote up, vote down, voted down user
+ Beautiful email template for email notifications
+ Revamped tags system, new tags listing page
+ New advanced search page
+ New My Subscriptions user page
+ Improved and tiny social sharing tools
+ Improved rating system
+ New permission setting: Edit own question/answer
+ New permission setting: Allow attaching files
+ New permission setting: Rate answers
+ New permission setting: Report question/answers
+ New permission setting: Subscribe to questions/categories
+ New permission setting: Download attachments
+ Downloads count for attachments
+ Send notifications to admin group instead of single administrator
+ Take sender name and sender email from Global configuration
+ New and improved suggestions for ask question page
* Category specific permissions do not obey parent child replations  

v1.9.4 (Dec 18, 2012)

* Category edit page not working

v1.9.3 (Dec 12, 2012)

* Hot patch for installer

v1.9.2 (Dec 11, 2012)

+ CjBlog avatars and points system support
* Refresh categories not refreshing answers
* Categories tooltip do not show counts
* Do not show root category in form

v1.9.1 (Nov 30, 2012)

+ CjLib Component support
* Wrong buttons shown up for thumbup and thumbdown

v1.9.0 (Nov 24, 2012)

+ CjBlog Avatars Support
+ CjBlog User Profiles Support
+ CjBlog Points System Support
+ CjLib Component Support, now do not need jQuery plugin anymore
+ Support to select default UI theme from configuration
* Unable to delete the answers from front-end
* Unable to edit answer on back-end
* Updates for PHP 5.0 strict standards

v1.8.12 (Sep 13, 2012) * Unable to answer in IE8

* IE related bug fixes

v1.8.11 (Jul 08, 2012)

* Wrong user name populated in lists

v1.8.10 (Jun 07, 2012)

+ ShareThis is replaced with better placed AddThis sharing service
+ Improved UI layout in view question page
+ Ability to send notifications to multiple administrators by adding multiple emails separated by comma in configuration
* Guest user avatar results in 500 error in JomSocial
* Use active menu id instead of default itemid to support multiple menu items of component
* Empty placeholder shown when no avatar system selected

v1.8.9 (Apr 10, 2012)

* Question link in JomSocial stream is pointing to administrator site when question/answer is approved from backend
* Approval from backend is not considering limit on description length
* Wrong site name being printed in admin email notification when question/answer approved from backend.
* JomSocial stream does not have like and comment links when question/answer is moderated
* Feeback is not shown after answer submission
* Ask question page does not display modules published on limited menu items
* User questions page produces error.

v1.8.8 (Apr 02, 2012)

* Activity stream description is not being saved
* JomSocial points are not awarded to the user when the question/answer is approved

v1.8.7 (Mar 27, 2012)

* Selecting multiple categories in category specific permissons hides the category in ask form.
* Wrong name in regards section email notification for question resolved status
* Answers count box in listing not being highlighted when new posts available

v1.8.6 (Mar 21, 2012)

+ Search plugin for Joomla updated to new search feature of CA
* My answers page produce error
* My questions produce no results

v1.8.5 (Mar 19, 2012)

* Clicking feed link does not produce correct page
* Unable to unsubscribe/subscribe categories using subscribe category link

v1.8.4 (Mar 18, 2012)

* Hot patch 

v1.8.3 (Mar 18, 2012)

+ Enhanced and natural search for questions
+ Unicode alias support for J2.5 or above
+ Reporting, RSS Feeds and Subscriptions should be configurable from backend
+ Exception handling to remove dependancy on deprecated API of j1.5
+ Seperate messages for question creation, updation etc.
+ Unpublish, delete function for both questions and answers
+ Show re-open button only for accepted answer to make page look clean
* Cannot save html content in J1.7
* Links from JomSocial activity stream missing itemid
* Activity stream on new question does not include proper url
* Include reCaptcha API only if it is not available
* Date over a year are not showing proper text
* Invalid tag entry being posted when there is no tag entered
* Users with manage permissions caannot accept answer if the answer is posted by them
* First item in listing shows extra space on few templates
* Like/Unlike button tooltips are reversed
* Answer categories list is not being shown in menu item in J2.5

v1.8.2 (Jan 11, 2012)

* Hot patch 

v1.8.1 (Jan 10, 2012)

* Error in submit question form when file attachments are disabled
* Fixes for file attachments feature
* Fixes in UI related issues with IE
* Fixes in manage permissions for administrators.

v1.8.0 (Jan 08, 2012)

+ jomsocial tighter integration
+ Add Like and Comment in CA Activity in Jomsocial
+ References links need to open in new window
+ Category Listing Pagination, Select Specific Category, Publish category
+ Feature Additions to CA updates to Jomsocial's Recent Activity Stream
+ Anonymous Voting
+ attachments file to question and answer and multi level points
+ Redesigned default2 theme
+ Style tags on view question page
+ Community Answers tag cloud module
+ Force Answering - to allow answering after question poster selects best answer
+ Category email notification subscriptions - to allow email subscriptions on category or site level
+ New Attachments permission to restrict user groups from attaching files
+ Multiple attachments in questions and answers
+ Redirect automatically to home page when a question published or deleted from view question page
+ Remove user login popup box and replace it with default user login link for consistency
+ Report feature for questions
+ Edit questions from front-end

v1.7.3 (Nov 15, 2011)

+ RSS feed - Answers & Polls

v1.7.2 (Aug 28, 2011)

* Login popup results in error in Joomla 1.6/7
* Category stats not updated while deleting/unpublishinh questions/answers from front-end by admins.

v1.7.1 (Aug 28, 2011)

* Tagging system not working for certain pages
* Installer not working in Joomla 1.6

v1.7.0 (Aug 20, 2011)

+ attachments file to question and answer and multi level points (attachments only)
+ Tagging for Answers & Polls
+ Allow users and admins to add TAGs to questions
+ Answer permissions request
+ Create automatic approval link
+ popup system message box
+ Replace Google buzz with Google + button on "view answer" page.
* Language file correction in Community Answers

v1.5.5 & v1.6.5 (May 22, 2011)

+ In CA - Make it easier for viewing Answer updates and date by hiliting the text 
+ Question in a specific category 
+ Ask Questions Page - Modules without categories 
+ Notify admin that questions require approval 
+ Display recently “replied to” Module Request 
+ Manager vs Publisher Permissions 
+ Similar category questions 
+ guest e-mail adress 
+ 500 error must bu 404 error 
+ Avatar Support for Kunena 1.6 
+ Edit answers 
+ Report question and answer
+ Toolbar buttons now configurable and displayed in configurable order
+ Show indicator for accepted questions in lists
+ Customize number of questions displayed in similar questions list
+ Template look changes with new Answers box to display answers count in big font
+ Layout change to answers list to have better design
* disabling reCAPTCHA doesn't work 
* question date won't appear 
* Problem when creating menu item for Community Answers Category 
* Duplicate "height" attribute in answers.css line 17 :-) 
* wrong user name displayed in the
* Manage resolved Questions
v1.5.4 & v1.6.4 (April 10, 2011)
+ New default2 template with dark colors support
+ jQuery plugin v1.5.0 & v1.6.1 support
* Number of days after creation is not visible for certain time period
* View permission for category is not being stored while creating but saved when editing
* Corrected "1 Answers" to "1 Answer" language string
* Admin unable to accept guest question answers

v1.5.3 & v1.6.3(March 22,2011)

* Fixed all notice messages when E_NOTICE PHP error logging enabled
* Fixed UI alignment issues

v1.5.2 (March 01, 2011)

* User avatar shown is wrong when answering question
* Categories permissions are not considered in similar questions

v1.5.1 (February 27, 2011)

* Error with pagination results

v1.5.0 (February 23, 2011)

+ Make it superb private and grouped consultation and support
+ Notification with every new answer
+ Suggestions to Improve clarification and grammar in email notifications from CA
+ Answer Tips - Add clarification Answer Tip text to Share buttons.
+ Simplify Answer Editor - More professional and simplifies only available functions
+ Unresolve a Resolved Answer
+ Ask Question changed to: What do you want to ask? Ask It (button)
+ Comment moderation message still shows.
* Guest do not receive mail and the 'Asked by' field is empty
* Gravatar Support
* Guest see the 'Accept this' butto, but should be hidden
* Notify admin that questions require approval
+ Question Subscriptions
+ New question & new answer notifications for admins
+ Ajax answer submission

v1.2.1 (January 2, 2011)

+ Email & Social Bookmarking tools
+ Ability for guest users to ask questions
+ Enable moderation for asking questions
+ Validations for Question Submission Form
+ Support for YooTheme jQuery enabled parameter
* title page of categories do not change 
* Guest is displayed instead of name of the user for guest answers
* Itemid is not being sent when answering question

v1.2.0 (November 27, 2010)

+ Refactored categories page on administration
+ Categories reordering/sorting capability
+ Question & Answers count on categories list on front-end home page
+ Improved JomSocial activity stream, now description of question and answer is shown in activity stream.
+ More human friendly detailed date formats. Now displays depth of minutes to years (Eg. Just now, 1 minute ago, 1 hour ago, 3 months ago, 1 year ago and so on)
+ Refactored breadcrumbs functionality
+ Show default text in category list of new question page to discourage users from using same category everytime.
* Backend Category Edit not working
* Activity icon is not displayed in Mighty Touch activity stream
* 500 error page is displayed when click on links in Mighty Touch activity stream
* Update question & answers count properly when click on recalculate button on backend questions page
* Display reCAPTCHA by default
* Date format is not in effect in admin questions page.
* Move language strings in admin pages to language files
* Unable to post answer when guest answers option is disabled.
* Add itemid for Ajax search results on home page search box
* No message is displayed when required fields missing and page is redisplayed in New Question page
* Added asterisk for required fields in New Question page

v1.1.04 (October 25, 2010)

+ Guest user answers support
+ reCAPTCHA support for guest users
+ Configuration option to disable references field in answer form
+ Default empty option for category lists to avoid wrong category selection
+ Automatic addition of Meta Keywords based on question title (SEO enhancement)

- Feature: Toolbar menu in My Answers page (would be enhanced in next version)

* Wrong link posted to Touch activity stream
* Answered tab displays unanswered questions
* Ajax search results duplicate questions
* CSS Fixes for answer form and answers block
* Category name repeated in breadcrumbs

v1.1.03 (October 08, 2010) * No points to answerer after selecting best answer

* Points awarded twice if accepted as best from two browsers
* Email sent even after disabling it from backend
* Question author's own answer is being accepted as best answer.
* Moved hardcoded language string to language file

v1.1.02 (September 26, 2010) * Wrong category name in view question page breadcrumbs

* Mighty Touch points bug

v1.1.01 (September 10, 2010)

* Sender name is null in emails being sent
* Similar questions list not working with international characters
* Recently resolved questions list on home page is displaying open questions

v1.1.0 (September 9, 2010)

+ CoreJoomla jQuery plugin compatibility
+ Ajax autosuggest for search functionality
+ Joomla Search plugin
+ My Questions page - Displays questions submitted by logged in user
+ My Answers page - Displays answers submitted by logged in user
+ Answers page in backend
+ Ask form under view question page
+ New toolbar look and feel for front page
+ New buttons for easy navigation - Open, Resolved and Index
+ New improved front end theme
+ Improved backend users page
+ Improved search functionality, now searches over question title, description and answers as well.
+ Refresh functionality for questions and answers to sync counts
* 500 error upon clicking the link produced when deleted/unpublished the question
* Backend users page is not being shown
* Search functionality not working as expected with international characters
* jQuery conflicts with MooTools

v1.0.6 (August 02, 2010)

+ Custom module positions support (see documentation)
* Cannot see Accept answer button
* HTML standards fix in admin configuration
* Null check in categories list function
* Pagination not working properly in home page
* Fetch Pagination only when required and save a call to DB

v1.0.5 (July 28, 2010)

+ Choose the user group for WYSIWYG editor access.
* Version shown in backend control panel is incorrect

v1.0.3 (July 27, 2010)

+ Extensive permission system for viewing, creating, answering and managing the answers.
+ Delete button on backend for deleting questions
+ Moderation tools for front-end questions
+ Mighty Touch Points system integration
+ Display 10 similar questions along with the open questions on home page
+ WYSIWYG editor for question description
+ Record who is rating on what answer (For future use)
* An medium risk XSS security bug fix
* Category name not appearing in breadcrumbs while viewing question
* Redirect to login page when user not logged for creating/answering questions.

v1.0.2 (July 20, 2010)

+ new Dashboard page for admin control with version check.
* Missing Points System selection option under admin configuration
* Change to standard type for question meta data in view question page
* Name option is not in effect in view question page
* Answers count not displayed in similar questions list

v1.0.1(July 11, 2010)

+ JomSocial & Mighty Touch Activity Stream support
+ Email notification support on new answer and accepted/best answer
+ question title to browser title bar for better SEO
+ Most Popular Questions page
+ Most Answered Questions page
+ WYSIWYG support
+ Moderation tools for administrators (edit, unpublish and delete answer) on front-end
+ Search capability
+ pagination support in most pages
* itemid not retaining on few pages
* Revamped the front-end pages to have better look and feel
* categories not displayed as tree
* admin question details page not working
* Resolved Question button not changing to Open Questions when clicked
* user shall not rate his answer
* username/name option switch not working
* JomSocial activity stream is always posted for best answer
* Always Guest user name is being displayed on similar answers

v1.1.01 (September 10, 2010)

* Sender name is null in emails being sent
* Similar questions list not working with international characters
* Recently resolved questions list on home page is displaying open questions
+ Added global cj-wrapper-main class for views+ Added meta title and description tags for question

v1.0.0 (June 26, 2010)

+ Initial release.