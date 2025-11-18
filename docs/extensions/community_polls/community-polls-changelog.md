---
id: community-polls-changelog
title: Community Polls changelog
sidebar_label: Community Polls changelog
sidebar_position: 7
---

v6.2.0 (2025-10-05)

+ Joomla 6 Compatibility Update
^ Removed legacy references
^ Update copyright headers

v6.1.9 (2025-03-23)

* Voter list shows name instead of username, discarding config option
* Removed unused stop words in search

v6.1.8 (2024-11-29)

+ Update ChartJS library to latest version
^ Fixed UX related issues

v6.1.7 (2024-10-30)

+ Show login modal if the guest user is not authorised to vote
* Fixed issue with finder plugin
* Fix issue with loading captcha

v6.1.6 (2024-08-04)

+ Added new permission to allow a user group to exclude from multiple vote restrictions
* Fixed issue with random poll module when a poll is unpublished
* Added CSS classname votecount to the anywhere
* Google charts library loaded on a poll with simple bar chart

v6.1.5 (2024-06-07)

* Fixed JavaScript error in Random Poll module

v6.1.4 (2024-06-08)

* Fixed issue with installer

v6.1.3 (2024-06-07)

+ Use window.location when anywhere is false
* Fixed issue with loading anywhere script
* Fixed issue with loading anywhere help page in a modal window

v6.1.2 (2024-05-30)

+ Added support for custom templates in Anywhere scripts
+ Added support for Joomla Email Templates
+ Relocated the email notification, activity stream and points options to component options (new features tab)

v6.1.1 (2024-04-20)

* Fixed issue with displaying charts on anywhere plugin code

v6.1.0 (2024-04-14)

+ Added support for Rewardify Points
^ Removed redundant header for poll messages
* Fixed issue with smart search plugin
* Fixed layout issues with few templates when horizontal answers order is selected
* Applied outline for Results and Vote Form buttons of content plugin
* Fixed errors with language string
* Fixed list view items on mobile view

v6.0.2 (2023-11-02)

^ Added missing language string
* Community Polls editor button is not showing
* Error shown while removing votes from the poll
* Administrator buttons are not visible on the polls listing page

v6.0.1 (2023-09-26)

* Community Polls v6 should not allow installing on j3

v6.0.0 (2023-09-24)

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3

v5.3.6 (2023-04-15)

^ Replacing legacy API references
^ Replaced JFile/JFolder deprecated wrappers with respective file system function
* Fixed component option help labels

v5.3.5 (2023-03-22)

* Fixed issue with finder plugin
* After Joomla update, poll form not working

v5.3.4 (2023-03-19)

+ Replace addthis sharing service with JavaScript social sharing buttons
* Replace deprecated code for loading jQuery

v5.3.3 (2023-02-05)

+ Allow no restrictions on multiple voting with an option
* Form layout menu shows erorr when SEF is disabled
* Content polls plugin causing issues with Joomla 4 webservices

v5.3.2 (2022-12-16)

+ Allow no restrictions on multiple voting with an option
* Form layout menu shows erorr when SEF is disabled
* Content polls plugin causing issues with Joomla 4 webservices

v5.3.1 (2022-11-02)

+ New plugin for supporting Joomla Privacy component

v5.3.0 (2022-10-24)

+ Added new option to disable animations when switching form and results
+ New option to show/hide user avatar on the polls listing page
+ PHP 8.1 support added
* Fix issue with browser window navigate to top after voting on the poll
* Fix issue with content plugins that does not send article text field

v5.2.7 (2022-08-05)

* Fixed issue with content poll plugin on Joomla 3

v5.2.6 (2022-07-30)

+ Use styled radio/checkboxes when using Bootstrap 5 layout
^ Do not load redundant bootstrap support files in Joomla 4
* Inner padding in the toolbar occupying more space than it should be
* Tags are not saving in Joomla 3.10 or later versions

v5.2.5 (2022-03-11)

* Link and youtube selection dialog do not show on backend form
* Fixed issue with poll selection dialog on single poll menu item
* Editor button plugin does not open correct modal window
* Fixed issue with conflicting class name HtmlIcon
* Fixed issue with displaying edit button on poll details page
* Fixed issue with single poll menu item selection modal in Joomla3

v5.2.4 (2021-12-08)

* Fixed issue with deprecated API in the community polls content plugin
* Messages block cannot be hidden even after disabling option

v5.2.3 (2021-11-18)

* Fixed issue with content plugin not loading properties

v5.2.2 (2021-11-08)

* Categories page shows warning message on Joomla 4
* Fixed issue with editor plugin in Joomla 4

v5.2.1 (2021-10-22)

+ New responsive view for grid type poll in bootstrap5 layout
+ Adding new validations for min/max selections with individual messages
+ Adding new reset answers button to reset grid poll selections
* Categories list advanced search is empty
* Google pie chart does not load in Random Poll module on non-CP pages

v5.2.0 (2021-07-18)

+ New layout based on Bootstrap 5 library
+ Joomla 4 RC 4 support added
^ Changed the button appearance of clear all votes button
* Fixed issue with the warning messages when using PHP 8

v5.1.4 (2021-03-25)

+ PHP 8 support added
+ Show "Closed" badge in polls listing for polls which are closed for voting
+ New option to hide the information messages show after loading poll
* Fixed issue with submit button on front-end poll form
* Search box overflows right to viewport in mobile view
* Guest users cannot vote when changing votes allowed
* Show Title option do not show/hide title in content poll
* Introtext cannot be displayed when using content poll
* Warning message shown on page when showing poll with content plugin
* Editor button insert poll link instead of shortcode.
* Toolbar menu items do not work when SEF is not enabled

v5.1.3 (2020-09-04)

* Incorrect install sql file in the previous package fixed

v5.1.2 (2020-09-02)

* Hotfix to the previous failed build

v5.1.1 (2020-09-02)

* Add answer button does not work in backend form page

v5.1.0 (2020-09-01)

+ Allow safe HTML tags in poll answers
^ Added missing language strings
^ Joomla 4 beta 3 support added
^ Updated default collation of tables for new installations
* Modern chart type cannot be used in content plugin
* Poll do not load properly when using YooTheme pagebuilder
* Unable to show results when random poll module loaded on poll details page
* Modify jquery cdn URL to https in anywhere script
* Timeline charts are not working when using Google charts

v5.0.10 (2020-06-02)

* Messages shown in poll displayed using anywhere script are misaligned
* Content poll loads anywhere script even if anywhere flag not set
* Content poll submit button disabled when selecting answer
* Categories page shows php warning message when there are no polls

v5.0.9 (2020-04-24)

+ New Geo Chart in backend dashboard
^ Replace daily votes flash chart with Google SVG chart
* reCaptcha could not be validated when using v2

v5.0.8 (2020-04-19)

+ Show global option beside "User Global" text on each option in the poll edit page and menu item pages.
+ New option to skip email queue when sending emails
+ New single poll level vote restriction method option
+ Added new statistics such as Country, City and User-Agent in administrator poll statistics page
* Unable to select the poll in Single Poll menu item configuration
* Votes count cannot be hidden in polls listing page using option
* Poll publish status is ignored when saving the poll from back-end
* Do not allow search engines to index poll suggestions ajax URLs
* Poll results are not shown when the voting closed and user is eligible

v5.0.7 (2020-01-11)

+ Added new module positions (see documentation for updates)
* Unicode urls are not created when saving the items
* Images attached to answers are shown in smaller size and not aligned
* Poll rendered through anywhere code does not show proper styles
* Points are not assigned when using easysocial user points system
* Added missing language string for EasySocial user points setup

v5.0.6 (2019-08-11)

+ Added Sociable support
^ Removed Google+ references
* Unable to vote when there are no menu items created
* Blank box is displayed when all elements in poll details are disabled
* Hover on tooltips removes elements when mootools loaded
* Suggestions tabs don't work in bootstrap4

v5.0.5 (2019-07-15)

* Voting buttons disabled when selecting answer in random poll module

v5.0.4 (2019-06-28)

+ Custom answer as valid vote (for min and max answers validation)
^ Improved validation messages display
^ Updates to bootstrap 4 layouts
^ Bootstrap 4 layout issue with voted members list is fixed
^ Redesigned the votes count box in the polls listing page
* Voting button continue to sping and do not complete voting when custom answer is shown
* Do not allow parsing non-existent polls in the content plugin
* Editor button to insert survey shortcode is not working
* Wrong order of columns and headers in backend user listing page

v5.0.3 (2019-03-11)

+ Added link back to Community Polls changelog in the dashboard view
^ Show results view by default when user already voted
* Show page heading menu option breaks the page
* Backward compatibility of content plugin with anywhere option

v5.0.2 (2018-01-12)

* Unable to hide category box in list pages
* Warning message shown when using PHP 7.x

v5.0.1 (2018-12-27)

+ Added support for Joomla 4 alpha 5
* Guest users cannot vote when reCaptcha is enabled.

v5.0.0 (2018-11-30)

+ Joomla 4 compatibility updates (Full rewrite of code)
+ New Bootstrap 4 based layout/theme
+ New router with remove IDs capability
+ Added plugin option to configure custom email distribution for new polls and new votes
^ Replaced annoying alert messages with inline message on anywhere script output
^ Removed deprecated API usages
^ Framework: Replaced RuntimeException with Exception
* Poll answers are not updated with new vote after it is registered
* Show polls count option is not working in categories page
* Email type cannot be editable when creating new email templates
* Added user email id in votes CSV export file
* Added missing language string in edit poll screen
* Empty space shown below poll title in listing pages
* Timeline chart does not show on few templates

v4.7.0 (2018-05-29)

+ New feature - export responses of a poll to CSV file (admin only)
+ GDPR Compliance: Allow users to downloaded their voting history
+ GDPR Compliance: Allow users to delete their own polls using permission system
^ Changing Save button label to Submit on poll form page
* Selected poll customize options in form page are not visible on mobile phone browsers
* Cancel button on form page do not show correctly with bootstrap3 based templates

v4.6.5 (2018-04-01)

* Version update shows wrong status

v4.6.4 (2018-02-09)

^ Updated default character set of tables to utf8mb4_unicode_ci
^ EasySocial compatibility update
* Deleted polls causing alerts in activity stream
* No results are shown for closed polls when using modern chart
* Random Poll module do not select poll from all polls

v4.6.3 (2017-10-31)

^ Redirect user to polls category page after saving poll
^ Added untranslated strings
* Random poll module do not show reports of bar chart after voting
* New votes not shown after user vote

v4.6.2 (2017-09-29)

^ Added untranslated strings
* Random Poll module throws javascript error
* Default avatar is showing for all users in voters list block

v4.6.1 (2017-08-13)

* JavaScript errors shown after updating to v4.6.0
* Unable to deselect allowed chart types

v4.6.0 (2017-08-13)

+ New modern chart types (doughnut, bar, line) using chart.js library
+ Show voted answer in My Votes page
^ Removed support for image charts using pChart library
* Clicking on poll link in My Votes page shows error
* Clicking on poll title in My Votes page shows error page
* Ordering of columns is not working on backend users listing page
* Voter list shows duplicate users
* Chart displayed after voting do not show last recorded vote

v4.5.3/4 (2017-06-15)

+ Display votes and voters count in poll details backend page
^ EasySocial poll plugin compatibility with PHP strict standards
^ Performance improvements with votes table
* Untranslated strings in backend
* Poll results shows chart from the first poll if multiple polls showed on the same page
* Poll form shows javascript error when site template do not define messages container

v4.5.2 (2017-02-25)

+ New feature to show list of users who voted on the poll
* Fixed layout issues in random poll module with few templates
* Guest users cannot vote on private polls
* Secret code is not generated when creating the private poll

v4.5.1 (2017-02-04)

* Poll validations failed when poll type is checkbox

v4.5.0 (2017-01-06)

+ New shareable layouts for Poll details view
+ Added AltaUserPoints support
+ Show answers with images in thumbnail format when answers are selected to show inline
+ New points rules for awarding points to user who voted up a question or a reply
+ Added option to restrict categories in Community Answers module
+ Added support for AltaUserPoints
+ New JLayout based layouts for poll details page
+ New option to toggle answers layout from line by line to vertical columns
^ Removed deprecated APIs, minimum Joomla! version required is v3.5.0
^ Updated easysocial profile plugin to support v4
^ Changed Vote Now label to Vote and View Result button to Result
* All categories are not showing on backend when multilanguage is enabled
* Ask form do not fit screen when viewed on mobile devices
* Error shown when ratings are enabled
* Bounty/Login modal shown as disabled on some templates
* Poll cannot be selected using single poll menu item
* Modal dialogs are hidden under black box on few templates
* User name do not display properly when CB content plugin is enabled
* Unable to load poll using embedding in article
* Content plugin do not show all data from poll
* Bar chart bars are aligned to right side with small width when poll is displayed using anywhere script

v4.4.6 (2016-08-08)

+ Added index on polls table to improve performance of loading lists
+ Added new user message to show answers user voted on when modify answers option is enabled
^ Added index on modified_by field to improve performance of polls listing
* Create Poll button do not show if user is given access to only few categories 
* JomSocial stream always gets user display name instead of username
* Custom answer should be mandatory if other answers are not selected

v4.4.5 (2016-05-28)

+ Added component option to show/hide poll description
* Unable to vote on a radio button type poll when custom answer is enabled
* Activity stream always sent with user original name even username is chosen
* Empty alert is shown on poll details page when template css force show alerts

v4.4.4 (2016-05-08)

* Limit Polls option do not restrict users from creating more polls if the form is accessed directly.
* Wrong url configured for advanced search button
* Random polls module always default to random order
* Poll description is not showing when view access is not set
* Polls are not displayed in random order when custom poll ids are given

v4.4.3 (2016-04-07)

^ Joomla 3.5 compatibility update
* reCaptcha broken after Joomla 3.5.1 upgrade
* Limit Polls parameter do not limit maximum polls allowed to create per day
* No email notification sent to admin users when a new poll is created
* Default settings of minimum and maximum selection values prevent users from voting
* Poll end message do not show when showing poll with anywhere code or content plugin
* Show Search Box option is not working
* Error during installation

v4.4.2 (2016-03-25)

+ Added option to show/hide feed icon
^ Joomla 3.5 compatibility updates
* Youtube media do not work with content plugin
* Certain HTML content in poll description causes polls listing broken

v4.4.1 (2016-01-16)

+ Added polls statistics on admin categories page
+ Added migrate page to migrate from previous versions
* Default chart type cannot be overridden at poll level
* Polls ordering option do not work

v4.4.0 (2016-01-10)

+ Added option to hide category box
+ Support for attaching YouTube video for each answer
+ New easysocial plugin added to support showing polls in user profile
+ Support for customizing email notification templates
+ Emails are now sent using CjLib queue process
+ Support for extending Community Polls through plugin events
^ Moved question layouts to new shareable layouts
* Poll cannot be saved from backend
* Captcha do not work when user voting
* No approval emails being sent for moderation
* Vote cannot be registered
* Poll specific chart type cannot be selected

v4.3.6 (2015-11-25)

^ Hot patch

v4.3.5 (2015-11-25)

* JomSocial points are not getting added, new rules updated
* Random poll module throw error

v4.3.4 (2015-11-24)

+ Show poll form in EasySocial activity stream
^ Show only categories belongs to the current menu language in form and search pages
^ Show end message after voting when anywhere code is used
^ Show results first when the user already voted and can modify results
^ Support for content plugins in random poll module description
* Discover button redirect to home page where there is a JavaScript error on the page
* Vote button do not complete task when reCaptcha is enabled but not configured.

v4.3.3 (2015-10-25)

* Highlight notice messages box on poll details page
* Untranslated strings shown on small devices (phones)
* EasySocial activity stream shows html tags
* Activity stream do not get SEF enabled poll urls
* Listing layout do not render properly when the poll description html is not well formatted
* Vote button spin continuously after voting
* Advanced search is not working
* New poll creating activity is not sent to EasySocial
* Author polls suggestions tab loads page content instead of polls
* Poll form does not work if Joomla editor is selected as default

v4.3.2 (2015-09-17)

^ Added front-end validation for Minimum and Maximum answers rules
^ Bootstrap 3 compatibility updates
^ Added CjForum and EasySocial rules within the distribution for easy installation
* Categories do not show to front-end users
* RSS Feed text is not translated in language file

v4.3.1 (2015-08-30)

+ Support for Joomla AutoUpdater added

v4.3.0 (2015-08-29)

+ Added new Bootstrap 3 enabled theme
+ Added Community Polls module
+ Updated form validator to support Joomla 3.4
* Removed container adding extra padding on the component content
* Percent votes shown on chart bars are not updated after voting
* Fixed category layout issue
* Community Polls Categories module is not working
* User display name option do not work, always shows user original name
* RSS Feed text is not translated in language file
* Vote button in Random poll module do not work after upgrade from Joomla 2.5

v4.2.5 (2015-05-31)

* Fixed issues related to layouts

v4.2.4 (2015-04-17)

* Chart not shown on poll published in an article using anywhere script

v4.2.3 (2015-03-29)

+ Added mod_cpcategories module
+ Added new table to track user location, browser and platform details
+ Only last poll result is shown when multiple polls inserted in an article using Content Polls plugin.
* Vote expiration does not work when using Anywhere script
* Default poll types allowed field is empty on new installation
* Vote button continue to spin when using EasySocial points system
* Enabling EasySocial activity stream results in vote progress spinning continuosly.
* Enabling caching results in vote not getting registered.

v4.2.1/2 (2015-02-21)

* Fixed issue with show search box option not effective

v4.2.0 (28-Jan-2015)

+ Support for CjForum (Profile Integration, Profile Linking, Avatars, Activity Stream, Points System)
+ Joomla 3 sharable layouts for easy customization (for few blocks such as polls listing, category table, search form etc.)
+ Added new permission for poll review/approval
+ New configuration option to show/hide poll suggestions lists.
* Fixed issue with EasySocial plugin.
* Descriptions does not show in category list table when a category is clicked
* Stack answers option hides custom answer field in random poll module.
* User table counts do not update when a user vote or created a poll
^ Align grid answers and controls to center

v4.1.0 (22-Oct-2014)

* If multiple polls embedded through anywhere code, already voted message shows for vote on second poll
* Styles not loaded on poll loaded through anywhere code
* Votes count of options does not update after a vote is deleted from administrator
* Show view result/form button only when there are votes registered
* Unable to override the default values of options if they are disabled

v4.0.9 (29-Sep-2014)

+ New plugin - Editor button to add poll inside an article
+ Option to display latest or random poll in Random Poll module
+ Added new search plugin for Community Polls v4
* Anywhere code does not work if the anywhere flag not set on same website
* Default values are not effective when use global is selected in poll options
* Do not execute content polls plugin in admin site
* Random poll vote button does not work for second time if the user clicks on it without selecting any option
* Unable to save HTML content using Joomla editor
* Empty icon is being displayed if end message is empty

v4.0.8 (16-Sep-2014)

* Setting category in random poll module produces error
* Stack answers option does not display custom answer textbox.

v4.0.7 (06-Sep-2014)

+ Updated ramdom poll module options 
* Random poll module does not show charts when google charts enabled
* Random poll module custom answers static strings are not translated
* End message shows bbcode instead of html when bbcode editor is used

v4.0.6 (01-Sep-2014)

* Fixed issue with displaying anywhere poll

v4.0.5 (21-Aug-2014)

* Unable to save poll if language filter plugin enabled
* Backend always using bbcode editor irrespective of editor selected
* Fixed backend layout issues

v4.0.4 (12-Aug-2014)

* Unable to change default editor

v4.0.3 (11-Aug-2014)

+ My Polls link on toolbar updated to have linkable url

v4.0.2 (08-Aug-2014)

* Radio button question should not allow custom answer along with selection
^ Removed unused language strings

v4.0.1 (07-Aug-2014)

* Twitter integration throws error

v4.0.0 (04-Aug-2014)

+ New Joomla category system support with category specific permissions
+ New Joomla tags support
+ Full ACL support at component/category/poll levels
+ Revamped front-end and back-end to streamline the UI with Joomla UI
+ Complete customization options at component/category/poll levels
+ New WYSIWYG BBCode editor in place of existing bbcode editor
+ Modify Answers support
+ End of Voting Message support
+ Be simple approach with UI, voting etc. No more blocking popups.
+ New router and urls structure for better SEO
+ New feature: Minimum Answers, Maximum Answers restriction
^ Removed multipoll support

v3.5.5/6 (30-Jun-2014)

* Fixed issue with closing date and results up date when poll created from backend.

v3.5.3/4 (21-Jun-2014)

* Fixed issue with modify answers function

v3.5.0 (13-Jan-2014)

+ Answers order: Now you can order answers by number of votes
+ Save, Save & Close buttons: Editing poll on back-end now made easy
+ Alias: Now admins can enter alias manually instead of it generated automatically
+ New menu item short-cut for Featured Polls
+ New menu item short-cut for Latest Polls
+ New menu item short-cut for Most Voted Polls
+ New events to support extendibility of the component - onBeforeSavePoll, onAfterSavePoll, onAfterVote
+ Joomla 3.2 fully supported
^ Generate Unicode slugs only when Unicode aliases enabled on Global Configuration
^ Do not display the component menu on back-end dashboard as it is already exist
* Sync button on back-end does not sync statistics properly.
* xhtml urls cause issue on few systems
* Display user friendly login message when user tries to vote on poll which he is not authorized
* Votes points not registered if using JomSocial points
* Dialog box not shown on certain templates
* Form validation messages are not translatable

v3.4.4 (10-Nov-2013)

* Fixed typo in language file
* Users cannot edit the polls from front-end
* Poll closing date and results up date do not consider time-zone differences
* Captcha update for Joomla 3

v3.4.3 (24-Oct-2013)

* Links in mails sent on approval from admin screen are not working
^ Hide suggestions box when no suggestions enabled

v3.4.2 (13-Oct-2013)

* Update to previous install breaks CP in J2.5

v3.4.1 (11-Oct-2013)

+ Stack Answers: Now you can enable "Custom Answer" to stack to existing answers when user adds one.
+ Joomla 3.2 compatibility
+ Vote Expiration: Now you can set vote expiration in minutes after which user can vote again
^ No results found message now has alert box styling
^ Images now has alt text
* URLs in breadcrumbs has wrong links
* Dates are not considering timezone differences
* Publish Results value is not in effect when using Anywhere script
* Search box is too small to access

v3.4.0 (09-Sep-2013)

+ Vote Expiration: Now you can set vote expiration in minutes and works with ip and username restrictions
+ reCaptcha support for grid polls
+ Missing entries for back-end translation files.

v3.3.12 (29-Aug-2013)

+ reCaptcha support for voting using new permission setting
* Feeds are not shown on Joomla 3.x

v3.3.11 (14-Aug-2013)

* Points are not awarded using JomSocial points
* Search box always gets a default value causing questions list empty

v3.3.10 (31-July-2013)

* Unable to get categories in Kommento plugin

v3.3.9 (28-July-2013)

* Search box is too small

v3.3.8 (15-July-2013)

* Edit poll link not working on admin listing page

v3.3.7 (08-July-2013)

+ Daily voting stats chart on dashboard
* Search button not working on admin listing page

v3.3.6 (22-May-2013)

+ User votes listing page in administrator users page
+ User sync using Ajax sync function to avoid timeouts
^ Added indexes to optimize permformance

v3.3.5 (20-May-2013)

* Multipolls page cannot get data
* Bug in Kommento plugin

v3.3.4 (18-May-2013)

* Poll suggestions list has same url for all polls

v3.3.3 (14-May-2013)

* Error while creating poll using secret flag set

v3.3.2 (12-May-2013)

+ Configuration entries to disable jquery and bootstrap to debug jquery issues

v3.3.1 (11-May-2013)

+ Private Polls - now you can create private polls which are accessible only through a secret url

v3.3.0 (09-May-2013)

+ New votes listing page in admin site to view and manage votes recorded for each poll
+ New daily votes chart in dashboard to display overall voting trend
+ New daily votes chart in poll details page in admin section
^ Performance improvements in sync function
* Author polls list not getting populated in suggestions below the poll page
* No error displayed but poll not saved when description is mandatory
* Poll creator should see the results irrespective of whether poll results view date passed or not
* File upload form is floated around page on some templates

v3.2.5 (29-Mar-2013)

+ Users will now see loading status after click vote button and multiple clicks of vote button are now avoided
+ sh404sef plugin included in the package with full feature support
^ Multipoll layout polls now respect their own color palletes
^ Breadcrumbs enhancements for poll details page
* Pagination layout fixes for some templates
* Spin wheel does not stop after voting if the user do not have view result permission
* Poll accepting votes even after poll closing date passed
* Both poll form and vote now buttons visible at the same time on some templates

v3.2.3 (27-Mar-2013) Hot-fix for previous release v3.2.2 (27-Mar-2013)

+ Now you can select default menu item type either latest, popular, mostvoted or ordered polls listing page
+ Now you can select polls listing time duration per menu item level
^ Date selection through date picker on poll form
* Wrong message displayed after poll is autoapproved

v3.2.1 (18-Mar-2013)

* Anonymous option not shown on backend form

v3.2.0 (17-Mar-2013)

+ Full customization configuration for front-end poll form options
+ Anonymous polls
* No username present in notification emails when poll approved from email
* View Results permission not working for multipolls page
* User cannot vote by entering only custom answer
* Ignore adding category parent as itself to avoid errors on categories page

v3.1.3 (21 Feb 2013)

+ Added an menu option to redirect user to different page after voting on multipoll page.
* Content plugins not being processed on poll description
* No html is being saved when using CK editor

v3.1.2 (16 Feb 2013)

* RSS Feed button is not visible
* Menu items language strings are not translated
* Spinner not stops but registered vote
* Percentage bar is not visible on Gpie chart if percentage is over 90

v3.1.1 (10 Feb 2013)

* Urls are incorrect in EasyComment notifications
* Unable to show more than 20 listings on listing page

v3.1.0 (28 Jan 2013)

* Missing poll moderation selection configuration option
* Untranslated strings exist
* Alias should not be mandatory

v3.0.9 (24 Jan 2013)

+ Added EasyComment support

v3.0.8 (18 Jan 2013)

* Hot patch for previous release

v3.0.7 (18 Jan 2013)

^ Added scope to bootstrap css to avoid template conflicts
* Admin notifications are not sent

v3.0.6 (15 Jan 2013)

^ Disallow multiple submits when voting through Anywhere
* Progress animation is not shown using Anywhere

v3.0.5 (13 Jan 2013)

^ Use native poll voting method while voting using content plugin
* Do not show error when no chart types selected on configuration

v3.0.4 (07 Jan 2013)

* Minimum description character length is not respected
* Checkboxes questions are not selectable on IE7
* Email notification not sent if voted using Polls Anywhere
^ Pull avatar to left side when viewing on mobile phones instead of spanning to full row

v3.0.3 (07 Jan 2013)

* Joomla input API bug prevents loading json request values, reverted to JRequest temporarily.
^ Added comment blocks on template for easy customization

v3.0.2 (31 Dec 2012)

^ Updated backend functions to use Joomla 12.1 platform JInput API
^ Removed unused language strings

v3.0.1 (31 Dec 2012)

+ CjBlog badges support
* Answer link label is not shown in admin poll form

v3.0.0 (30 Dec 2012)

+ Joomla 3.0 Support
+ Full rewrite of front-end and back-end with Bootstrap UI look and feel.
+ Categories list display support on front-end listing with customizable options for number of rows of categories
+ New permission settings to control attachments and editing polls
+ Multi Polls with images and URLs display support
+ New and redesigned control panel page for administrator site
+ Ajax enabled publishing options for admin site
+ New and easy to understand design of poll creation form.
+ Multi-Language support: Now restrict categories and polls from showing to only language of your choice.
+ Daily responses chart and sharing tools are now occupies less space with foldable accordin
* Number of bugs were fixed duing the rewrite phase
^ Removed jQuery UI support as it conflicts with bootstrap and there is no significant progress in jQuery UI project

v2.1.2 (05 Dec 2012)

* JSON calls not passthrough in IE7

v2.1.1 (29 Nov 2012)

* Unable to use more than 7 colors on Anywhere polls layouts
* JomSocial activity stream not working for new polls
* Uesr display name is not changed even if set in configuration

v2.1.0 (25 Nov 2012)

+ Poll option to publish results only after specified date
+ Added support to display poll result messages in Anywhere
+ Multipolls support - display multiple polls on same page like a survey - with limited functionality
+ Load users at a go in third party integrations to avoid multiple DB calls (supported Kunena & CjBlog only)
* Language file correction for typo

v2.0.17 (10 Sep 2012)

+ Added ability to update alias
^ Removed unused helper methods
^ PHP 5.3 strict mode support changes
^ Migrate common functions to CjLib

v2.0.16 (22 Aug 2012)

+ Added debug mode to find errors
* Front-end dashboard page blocks not aligned properly in IE

v2.0.15 (1 Aug 2012)

* Categories not showing correct statistics
^ Update to CJLib new version support

v2.0.14 (17 Jul 2012)

^ Language strings correction
* Guests unable to vote when a vote is recorded
* Categories menu not functioning

v2.0.13 (14 Jul 2012)

+ Give points to poll author when a vote received

v2.0.12 (8 Jul 2012)

^ Version number correction

v2.0.11 (7 Jul 2012)

^ Changes related to STRICT mode compliance of PHP
^ CJLib new API support
* Minor language string correction
* Unable to select categories in menu item creation

v2.0.10 (1 Jul 2012)

+ DISQUS comment support
+ New module positions introduced

v2.0.9 (31 May 2012)

* Unable to load poll using Anywhere

v2.0.8 (29 May 2012)

* Category poll count not updated while saving poll
* Editing from backend deletes existing answers
* Sharing options cannot be deselected after selecting in configuration
* Chart not gets loaded when global option selected

v2.0.7 (18 May, 2012)

+ Community Polls module update
* Unable to de-select sharing services once selected
* Include pChart libraries only when required
* Saving poll without changing default answer should give error

v2.0.6 (14 May, 2012)

+ Embed polls in articles
* Added missing language string in language file
* Progress spinner not showing in Anywhere

v2.0.5 (13 May, 2012)

* Unable to approve polls from front-end
* Breadcrumb urls missing itemid, uses catid instead of id

v2.0.4 (12 May, 2012)

+ Images and links support for Anywhere
+ Ability to choose chart type from Anywhere Javascript options
+ Ability to pass color pallete name in Anywhere JavaScript options
+ RSS Feed link in polls listings page
* Unable to load multiple polls on same page using Anywhere
* BBCode is not processed for poll description

v2.0.3 (08 May, 2012)

+ Ability to restrict polls for selected category per menu item level

v2.0.2 (08 May, 2012)

* Removed debug information from admin save poll function
* Unable to save poll from backend in j1.5
* Column span is not set to correct number causing polls list table foooter not span properly
* Username is not displayed in listings if no avatar component selected
* Minor corrections in language strings shown to user when not authorized
* Unable to hide Anywhere block even it is disabled in backend.

v2.0.1 (07 May, 2012)

+ User documentation page for advanced Anywhere configuration on share block
* Blank page displayed after poll approval fom backend
* Twitter tweet url and activity stream is missing itemid
* 500 error shown after poll creation when moderation is enabled
* Pipe symbol causing issue with language strings in j1.5
* User polls button should only visible to users logged in

v2.0.0 (05 May, 2012)

+ Two new charts - Image bar chart and Image pie chart
+ Multiple poll support - Random poll & Polls anywhere update for supporting multiple polls on same page
+ Poll creation from backend - Now you can add polls from both front-end and back-end
+ Color palletes - No more fixed colors for charts, choose from different color palletes
+ Linking answers - Now you can attach hyperlink to the poll answers along with adding images for each answer
+ New dashboard page for more beautiful and customizable front-end
+ Full rewrite - The front-end is fully rewritten for best performance
+ Improved bookmarking: Better sharing tools
+ New timeline graphs for displaying voting timeline
+ Natural search feature
+ Improved poll suggestions - Now loads on demand to reduce load on your server
+ Facebook comments support
+ Tableless design
+ Pls, add the option to see results in random community poll module
+ Support for FB Comments Plugins / API
+ Mod_communitypolls and Xmap plugin for Joomla 1.6
+ Facebook Comments
+ Date button Bug
+ JomSocial - Activity Stream Item For Guests
+ Add ordering option for polls
* "results are ready" on zero votes ??
* Image per option doesn't display after first view following voting
* Publishing a poll from moderation causes incorrect hyperlink in activity stream

v1.7.2 (15 Nov, 2011)

+ RSS Feeds
+ mod_communitypolls.zip 
* Backend - Poll Closing Date - not possible to change 

v1.7.1 (23 Oct, 2011)

+ Allow users to enter their own answer/options
+ Notification for Vote posted for given Poll
+ Random Poll module update

v1.7.0 (28 Aug, 2011)

+ Multi-level category system
+ Kunena 1.6.3+ support
+ Random poll module update
+ Enhanced UI for admin configuration
* Correction in language entry

v1.5.29 & v1.6.4 (27 Apr, 2011)

+ Multi-level categories
+ Images support for Polls Anywhere.
+ Kunena 1.6.3+ support
+ Improved admin configuration UI
+ One installer for all Joomla versions
* Date format is invalid for dates over 1 year
* Invalid date format displayed in admin pages in Joomla 1.6/7

v1.5.29 & v1.6.4 (27 Apr, 2011)

* List of active polls : "not the right category"
* Description is not being saved

v1.5.28 & v1.6.3 (23 Apr, 2011)

+ jQuery plugin v1.5.0 & v1.6.1 support
+ HTTPS support for Google charts
* Random Poll module update for bug fixes
* Category id is not in effect on home page
* Category links are not working as expected
* No space between label and category name
* Duplicate style height in list.php
* Translation friendly dates
* Answers not displayed in order they posted
* Back to poll link in user polls page is not working
* Moved admin notification email body and subject to language file
* Error with grid poll which casting vote on few systems
* 1.5.25 Missing translation in category box tooltip

v1.5.27 & v1.6.2 (27 Mar, 2011)

^ General maintenance update

v1.5.26 & v1.6.1 (20 Mar, 2011)

* sef issues, some urls not passed through JRoute
* Grid poll layout issues
* Add another column button is not styled in New poll page
^ v1.6.1 updated to sync with 1.5.x version.

v1.5.25 (15 Feb, 2011)

+ Reset a Poll
+ Number of Votes versus Number of Poll Submissions
+ Email notification to "Admin Group"
+ txt_n_ bad to translate
+ Twitter new API update
* Multi Radio Grid Polls - Only 1 chance to see the results!
* unpublish not functioning
* poll submitted for approval - email link

v1.6.0 (22 Jan, 2011)

+ v1.6.1 hotpatch update released

v1.5.24 (27 Nov, 2010)

+ Improved human friendly dates
+ To use jQuery Tabs & buttons for enhanced user experience & unique look and feel across corejoomla components
+ Improved notification emails
* Create poll issues with IE7 & IE8 Bug Fixes
* Mighty Touch Bug Fixes
* JavaScript error message appearing while uploading image in IE8
* Move hardcoded styles in viewpoll page to css file

v1.5.23 (26 Oct, 2010)

* Unable to add more than two options in IE7 (Related to IE7 bug, other versions of IE are not affected)
* Unable to post description when set mandatory in IE7 (Related to IE7 bug)
* PollsAnywhere is not working after last update (Missing JavaScript file)

v1.5.22 (26 Oct, 2010)

* Unable to load template on some custom Joomla templates
* Failed to update the PollsAnywhere js file during installation

v1.5.21 (24 Oct, 2010)

+ Template overrides (See documentation)
+ Ability to change theme dynamically using request parameter (See FAQs)
+ Include poll url in poll approval notification mail.
+ Link IP Address to whois database in admin & site pages
+ Added menu toolbar to have backlinks on author polls page
+ Added Back To Poll menu in voted users page
+ Added total votes display on view poll page
* Empty row displayed in user list when a Joomla user is deleted
* Custom date format is not effective on view poll page
* Date format is not considering the timezone lead/lag
* Moved hardcoded language strings to language file
* unadjusted div widths on listing page
* Buttons are too adjuscant to each other
* Setting description mandatory does not allow saving poll

v1.5.20 (11 Oct, 2010)

+ Added new menu item for Add New Poll page.
* No emails sent after poll approval
* Preserve itemids to retain modules on pages
* Language text is not translated in JomSocial activity stream when approved a poll from backend.
* Warning message in firebug for JavaScript handlers.

v1.5.19 (26 Sep, 2010)

* Quotation mark appearing below avatar in Polls Anywhere view
* Website name ends with slash in Polls Anywhere view

v1.5.18 (23rd Sep, 2010)

+ Allow voting restriction either/one/many of ip address, cookie and username
* No points for approval of polls from CPanel page
* Polls anywhere is not working on some pages

v1.5.17 (3rd Sep, 2010)

* Cast Vote button shall not be displayed when voter is not eligible for voting
* Hide Add New Poll button from unauthorised users
* Toolbar css styling issue
+ Avatar in voted users page
+ IP Address of voted users (visible only for backend users)

v1.5.16 (2nd Sep, 2010)

+ Hide results from viewing to selected group of front end users
+ Polls Anywhere on individual poll level
+ Polls Anywhere enabled by default for all new and old polls unless disabled at poll level
+ Support for JAComment comment system
* Wrong version shown in version information
* Polls Anywhere preview is allowing double voting
* Polls Anywhere preview is not showing up on some systems
* Missing jQuery.noConflict in one js file
* Add default text in polls anywhere div to avoid truncation of tag in WYSIWYG save
* Missing Poll Suggestions in grid poll

v1.5.15 (27 Aug, 2010)

* MooTools conflict on few systems
* Random Poll module update

v1.5.14 (25 Aug, 2010)

* Make compatible with Mootools 1.2 plugin. Now using jQuery for all interactions.
* Embed Poll preview is not working
* Polls Anywhere avatar is not displaying outsite the owner website
* Process content plugins in poll description field (configurable from backend)
* Tabs are not working on some systems. Improved poll suggestions tabs with new look
* Missing end HTML tags for options in backend configuration

v1.5.13 (06 Aug, 2010)

+ Polls Anywhere
+ Mighty Touch Points Support
+ Redirect to login and route back to referrer page upon login when user not logged in
* Moved language strings in code to language file
* Tweeked SQL queries to boost performance
* IE8 issue in viewing cast vote button
* Grid poll does not cast vote properly in IE7/8

v1.5.12 Change log

* Guests unable to vote after previous update
* ShareThis option help tool-tip is not showing the description in admin configuration.

v1.5.11 Change log

+ ShareThis widget integration
* poll votes count issue
* voter names not appearing in users who voted page
* vote count went to millions after upgrade to v1.5.10

v1.5.10 Change log

+ New grid polls feature
* Points not awarded on approval of poll from backend
* voted users shall not be displayed before a couple of votes registered
* poll result shall not be shown if less than 2 votes registered
* text poll is displayed instead of votes in admin poll details page
* Moved static texts to language files

v1.5.9 Change log

* Fixed issue while deleting the polls from backend that does not update polls count properly.
+ Added new Sync button in polls list page of backend to update the polls count manually.

v1.5.8 Change log

+ New Interactive Pie Chart
+ New Delete polls from backend feature
* Fixed typo of table variable (fixes random poll module bug).
* Css style fix (buttons text not displaying properly on some rocket theme templates)
* Joomla 1.6 supporting updates
* Error displaying charts when poll cannot be retrieved
* Twitter update message length issue fix
* Alpha User Points avatar fix per latest release
* Null checks missing in few places for pagination links
* Filter combo boxes wrapped in list pages

v1.5.7 Change log

+ Mighty Extensions username link dropdown box integration
+ Mighty Extensions Avatar profile link integration
+ Added version check block in Administration CPanel
* Fixed small issue with polls count when checkboxes are used

v1.5.6 Change log

+ Multiple selection checkboxes support
+ WYSIWYG Editor support for editing polls in backend
* Fixed few UI issues

v1.5.5 Change log

+ Mighty Touch integration
+ WYSIWYG editor support for description of poll
+ Tracking option selected by the user. Administrator can view in the backend which option the user selected.
+ New users list page to display poll statistics of each user (backend pages)
+ IP Address column in moderated backend polls list and poll details pages
+ New details link in polls list for each link, which displays page to show who all voted on poll (backend)
+ New username column in control panel pending list view.
* Points shall not be awarded before poll gets approved
* PHP notice in poll view page.
* CPanel button in backend pages is not functioning
* PHP include error when AUP points system selected but not installed.

v1.5.4 Change log

* Unable to vote on RocketTheme templates
* Community Polls button css overrides JComments button css
^ Moved static text entries in View Poll page to language file
* Scrambled poll titles in administration control panel
* IE6 issues with sidebar
* Removed $mainframe (Joomla 1.6 compatiability changes)

v1.5.3 Security Release

* Security issues fixed (Please upgrade immediately)
* points awarded when poll created but not approved. Applicable only when poll moderation enabled.
* Major UI enhancements to support most of the popular browsers including IE6 +Twitter updates with bit.ly and tinyurl.com support
+ Image attachments facility for poll options +CPAuthorization - A new granular permission system to restrict the usage of Community Polls.
+ IP based restriction of guest user votes.

v1.5.2 Change log

+ Added back-end pages - Dashboard, Statistics and Support
+ Added approval tool in Dashboard page + Added back-end option to change the order of poll suggestions displayed on view poll page
+ Added back-end option to limit the number of polls displayed on polls listing page
+ Added back-end option to change chart colors
+ Added back-end option to change pie chart height
+ Now previewing the poll before voting is possible with the newly added button on front-end
+ Added back-end option to control preview poll button display
+ Now navigating to previous poll is also possible with newly added button.
+ New page to list polls created by the user whose poll is being viewed currently
+ New page to display list of registered users who voted on poll
+ Recording IP addresses of registered and guest users
+ Recording votes from guest users
+ Added more information on polls view page to show category and creator name.
* Fixed headings and subheadings to display drop shadows for better look and feel.
* Fixed issue of displaying even if none of the poll suggestions enabled.
* Fixed few issues with Email Notification facility on some systems
* Fixed Email body content length limit issue

v1.5.1 Change log

*  Fixed few security related issues. Recommended to upgrade to this version immediately.
*  Fixed issues with the email notification functionality.

v1.5.0 Change log

+ Featured Polls
+ Advanced Google Pie Charts
+ Time bounded polls
+ New poll suggestions - Author Polls and Featured Polls
+ Email notification on approval of polls
+ Publishing features on view poll page.

v1.0.9 Change log

* Hotfix for warning display when there are no results found in poll suggestions feature.

v1.0.8 Change log

+ New Ajax voting functionality added.
+ Bar chart look and feel updated.
- Pie chart is removed due to few bugs, will be added in the next release.
+ New view poll interface with the Avatar and sidebar.
+ Jomsocial Activity Stream is added
+ New poll suggestions - Latest Polls and Most Voted Polls added.
+ View poll and New poll pages updated with the Jaaji Template.
+ Sirimalli template buttons removed for effective space utilization.
+ Administrator configuration options updated with the latest changes and more categories.
+ Added new module position cp_below_avatar (Loaded on 20% of the width of your template) for Jaaji template. Sirimalli template. 
* Fixed issues with the backend configuration options not reflecting the changes
* Fixed front-end issue of showing non-related polls in the related polls section. An exclude keyword list introduced.
* Fixed few minor bugs with the list layout

v1.0.7 Change log

+ New templating system introduced
+ Updated templates sirimalli and jaaji
+ Support for new Avatars - Kunena, Gravatar, Alpha User Points
* Fixed configuration parameter propagation delay issue.
* Fixed categories show/hide issue
* Fixed few styles issues

v1.0.6 Change log

+ Added poll editing feature on administration control panel
+ Added description option for polls
+ Added JomComment comments count link on listing page
* Fixed avatar issue with Community Builder
* Fixed few security related issues.

v1.0.5 Change log

+ Added Related Polls feature.
* Fixed performance issues with Advanced pie chart.

v1.0.4 Change log

+ Added new advanced pie chart to display the results
+ Added new configuration option for date format selection
+ Added new configuration option for user name format selection
+ Added JComments comments count link on list page

v1.0.3 Change log

+ Added support for JComments. Now Community Polls support two great comment systems JomComment and JComment.

v1.0.2 Change log

+ Added moderation feature for polls. The submitted polls can be reviewed in the admin control panel before they get published. Moderation can be set to guest polls or all polls.

v1.0.1 Change log

+ Added configuration parameter "Limit Polls". You can limit number of polls per day per person. Set 0 for no limit.
* Fixed bug with configuration parameter not displaying right option.

v1.0.0 (14-Sep-2009)

+ Initial Release