---
id: community-quotes-changelog
title: Community Quotes Changelog
sidebar_label: Community Quotes Changelog
sidebar_position: 3
---

v5.1.0 (2025-10-24)

+ Joomla 6 Compatibility Update
+ Added support for Rewardify Points
^ Update copyright headers
* Fixed the margin of batch button on admin toolbar

v5.0.0 (2023-09-24)

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3

v4.2.2 (2023-02-05)

+ PHP 8.1 support added
* Form layout menu shows erorr when SEF is disabled
* Fixed PHP deprecation notices
* Removed unsued language strings

v4.2.1 (2022-08-04)

* Fixed issue with installer

v4.2.0 (2022-07-30)

^ Adding space betweekn sharing buttons block and quote suggestions
* Unable to checkin quotes table from Global Checkin page
* Categories page shows warning message on Joomla 4
* Fixed PHP notice messages on the quotes feed page
* Page shows error when the component redirect to login/any page

v4.1.0 (2021-08-10)

+ Joomla 4 support added
+ New layout based on Bootstrap 5 library
+ PHP 8 support added
* Fixed issues with author categories routing

v4.0.1 (2020-10-09)

* Toolbar menu items are not highlighted when viewing respective pages
* Pagination in popular quotes does not work

v4.0.0 (2020-09-25)

+ Added author avatar in backend listing page
+ Joomla 4 Beta 4 support added
+ New Joomla router support added with modern routing and remove ids support
+ New Bootstrap 4 layout added for all pages
* Unable to upload avatar
* Fixed layout issue with category list
* Avatar folders are not created automatically when installed first time
* Added missing language string for EasySocial user points setup
* Unicode urls are not created when saving the items

v3.1.0 (2019-07-21)

+ Added legacy layer for supporting Joomla 4 in Community Quotes v4 release
+ New content plugin to show user answers in Joomla! articles
+ New sh404sef plugin
+ Added canonical url in all questions pages
+ Added legacy router file
^ Updated default character set of tables to utf8mb4_unicode_ci 
^ Removed usage of deprecated apis.
* Points are not awarded to users when using EasySocial points system
* Live search do not work when sef is disabled
* Error shown with community answers module on few Joomla versions
* Category view do not show category title on browser titlebar
* Meta description of category is not used on category pages
* Enabling author categories makes the categories list layout misaligned

v3.0.5 (2018-01-12)

+ Added support for custom fields and field groups to quotes and authors
^ Updated Kommento integration to support latest versions
^ Redundant options are removed
^ Added missing language strings
* Show search box option is not working on category page

v3.0.4 (2017-10-10)

+ New CB plugin to show user quotes on their CB profile as tab
^ Added table indexes for performance improvements
* Author name is not shown on backend listing in case of Joomla users

v3.0.3 (2017-07-15)

+ Added support for AltaUser Points
+ Redirect user to quote details page after saving quote
+ Redirect user to quotes listing after quote sent for moderation
* Author name shows multiple times when using multilanguage
* No points are awarded when someone liked or disliked a quote
* Avatar shows as empty image after uploading

v3.0.2 (2017-04-09)

+ Allow guest users to rate quotes
+ Allow guest users to vote/rate on quotes

v3.0.1 (2017-02-25)

* Bootstrap is not loading on templates with no Bootstrap support
* Cannot hide quote options on front-end

v3.0.0 (2016-05-28)

+ New references field added in quotes form
* Fixed bugs from the beta release
^ PHP7 compatibility

v3.0.0.b3 (2016-03-22)

^ Joomla 3.5 compatibility update
* Empty box shown when categories are set to be hidden
* Activity stream do not respect user display name option
* Other bug fixes

v3.0.0.b2 (2016-02-12)

^ Added missing language strings, Fixed issues with associations, Added categories listing page
* Bug fixes

v3.0.0.b1 (2016-01-27)

+ New redesigned interface, fully integrated with Joomla APIs

v2.2.0 (09/Jul/2015)

+ 9 new configuration options to customize the elements displayed on listing page
+ 10 new configuration options to customize the elements displayed on quote details page
+ New configuration option to show/hide one or more quote suggestions
+ New permission setting to edit own state
+ Show likes/dislike numbers to users who do not have permission to vote (configurable)
+ Updated sharing tools to use AddThis async function
* Publish/Unpublish quotes do not work

v2.1.1 (03/03/2015)

+ Support for Joomla 3.4, updates for sidebar support.
+ New like/dislike feature for quotes
+ Added view comments link on listing page when a comment system enabled
+ Display number of quotes present in a Quote category on listing pages
+ Option to show author avatar in random quote module
+ Added support for CjForum Points System
+ Added support for CjForum Activity Stream
+ Added support for CjForum Avatars
+ Added support for CjForum Profiles
^ Changed header size of categories
* Carriage return/line feed does not translate to new line on quote details page
* Detect and disallow saving duplicate authors
* The public visitor must not allowed to be able to view Author page or any other Author list.
* Random quote module do not display author name if the quote is posted by logged in user on his name
* Popular quotes always shows latest quotes in community quotes module
* Alias should not be mandatory
* Avatar size cannot be changed from options
* Pagination does not work for poular/author quotes

v2.1.0 (01/Oct/2014)

+ Use chosen only when it is available for selecting list entries
+ Updated icons with fontawesome icons
+ Added quote icon to the quote title
+ Changed the title from h3 to h1 for better seo
+ Better tags selection box using chosen on form page
* Submit button does not work
* User Layout menu item is not visible
* My Quotes menu item on toolbar is missing

v2.0.19 (22/Jun/2014)

* Fixed bug with countries selection
* Fixed bug with author profile submission on backend
* Wrong brand url on toolbar of author pages

v2.0.18 (10/Nov/2013)

+ Alias form field on from front-end form for admins
* Search box is too small in backend listing

v2.0.17 (12/Oct/2013)

* Unable to update quote alias as an administrator

v2.0.16 (14/Aug/2013)

+ RSS feeds support

v2.0.15 (07/Aug/2013)

* Error when there are no sub categories on category listing
* Kommento plugin fixes

v2.0.14 (31/Jul/2013)

* Tooltip on category is not translated
^ Search box enhancements

v2.0.13 (08/Jul/2013)

+ CComment support added

v2.0.12 (07/Hyl/2013)

* Display user profile link when author is same as quote submitter

v2.0.11 (03/Jul/2013)

* Category/author quotes counts are not incremented when new quote/author is added.

v2.0.10 (26/Jun/2013)

* No admin notification is being sent

v2.0.9 (19/Jun/2013)

* Points and activity stream not function properly

v2.0.8 (01/Jun/2013)

+ Enhance toolbar menu items to load selected category quotes only
* Display quotes only to authorized categories
* Category search in advanced search page does not work

v2.0.7 (15/May/2013)

* Alias not saved during quote update
^ Multi-language support enhancements
^ sh404sef plugin update

v2.0.6 (14/May/2013)

+ Multi-language support for quotes listing
* Countries list is empty
* Administrator cannot edit author avatar

v2.0.5 (11/May/2013)

* Suggestions except first tab does not load

v2.0.4 (10/May/2013)

+ Added custom module positions quotes-list-below-pagination and quotes-list-above-pagination
* Registered users cannot upload author avatar
^ Removed unused language strings
* Unable to display author category
* Joomla editor cannot be enabled

v2.0.2/3 (09/May/2013)

^ Added help text for search page
^ Remove add to root category from category list
* Editing category does not work
* Deleting multiple quotes at a time is not possible
* unable to save avatar from  front-end

v2.0.1 (08/May/2013)

+ Category description support
* Unable to save category
* Do not show unpublished categories

v2.0.0 (03/May/2013)

+ Joomla 3 support added
+ Multi Level categories support for quotes
+ New authors listing page
+ Fully rewritten front-end and back-end with Bootstrap support
+ New tags listing page to edit and manage tags from front-end
+ Tags now support descriptions and unicode characters
+ Now you can edit author profile both from front-end and back-end
+ Quotes moderation to moderate and publish user submitted quotes
+ Built-in comment system is no longer exist, you can make use of third party comment systems integrated
+ Seamless integration of author profiles and user profiles at the same time
+ New categories module to display author and quotes categories tree

v1.3.3 (28/Dec/2012)

* Search results produce blank page

v1.3.2 (28/Nov/2012)

+ Add quote name in points activity
* Global select all not working in admin site quotes list

v1.3.1 (26/Nov/2012)

* Hot patch for self quotes

v1.3.0 (26/Nov/2012)

+ Joomla 2.5 support added
+ PHP 5.3 strict standards support
+ CjLib component support
+ Multi-language urls support (j2.5)
+ CjBlog Avatars Support
+ Added support to submit quote on self name instead of an Author name
+ Load all users on list page at once for better performance
* Not able to save description in HTML
* Typo in English language files
* Unable to select past years unless the last year selected
* Edit link is shown to unauthorized users which produce 403 error

v1.2.0 (06/Dec/2011)

+ Jomsocial application for user submitted quotes
+ Editing authors and quotes from Frontend and Backend
+ Jomsocial application for user submitted quotes
+ Nested categories breadcrumbs or back button
+ Need ability to turn off mandatory fields

v1.1.3 (26/Sep/2011)

+ Latest and most popular quotes module
* Warning message in author profile page
* Random quote module displays submit quote button to unauthorized users.
* Internal API changes

v1.1.2 (19/Sep/2011)

* Unable to save tags while editing the quote
+ Adding new quote creates an activity in Jomsocial activity stream
^ Points shall not be given while editing the quote.
* Email notifications shall be suppressed when quote is being edited.

v1.1.0 (28/Aug/2011)

+ Front-end publishing and editing tools on view quote page
+ Edit author profile capability for moderators
+ Comment count in listings
* Invalid component version in backend

v1.0.1 (01/Aug/2011)

* Fixed few small bugs in initial version

v1.0.0 (24/Jul/2011)

+ Initial stable release

v1.0.0.beta (17/Jul/2011)

+ Initial beta release