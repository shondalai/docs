---
id: cjblog-changelog
title: CjBlog Changelog
sidebar_label: CjBlog Changelog
sidebar_position: 10
---

2.1.0 &#8211; 2018-06-03

+ GDPR Compliance: Allow users to download their profile and data
+ GDPR Compliance: Allow users to delete their profile and data
+ GDPR Compliance: Take user consent with link to privacy url in profile form
+ Added description about installed packages during installation
+ Added support for CjForum User "About me" text
^ Changed default character set of MySQL tables to utf8mb4_unicode_ci
^ Update user statistics when the articles are manually published
^ Show author about text within article info block
^ Added minimum supported CjLib version number in constants
* Unable to change profile avatar when editing profile
* Added missing edit article link on article page
* Default category cannot be selected in Article Form menu item

2.0.3 &#8211; 2017-12-27

+ Added script to automatically download CjLib package when installing CjBlog for the first time
+ Added CjBlog points rules for Community Surveys
^ PHP 5.5 minimum & Joomla 3.6 minimum
^ Change auto update urls to GitHub package urls
* Corrected wrong language strings for the profile form menu item
* Added missing language string
* Points not awarded when submitting the article
* Auto-update in Joomla 3.8 not working

2.0.2 &#8211; 2017-08-14

+ Reviews: Send direct article approval urls in admin emails
+ New option to customize the size of article thumbnail on listing pages
+ Add Easy Profile as avatar and profile provider
^ Publish article automatically when auto approve permission is given
^ Updating jQuery Guillotine Plugin to latest version
^ Do not load Cj libraries on article pages where it is disabled
* CjBlog bootstrap does not load on article pages even if it is enabled in component options
* Error is thrown after saving an article for missing CjLib library
* Missing Article/author info on top of article #14
* Article images handled by cblog content plugin corrupting template #17
* CjBlog Archive module shows error when published on non-article pages
* Pro-capabilities not working correctly
* Avatar size in Author_info not respecting configured size
* Page not found error shown when excluding categories

2.0.1 &#8211; 2017-02-26

* Category excludes option do not work in categories and archive modules
^ Removed unnecessary files
^ Updated build configuration

2.0.0 &#8211; 2017-01-18

+ Rewritten full source with many new options for customizing interface
+ Redesigned profile pages with new plugin api
+ New review articles feature to give more control to site administrators
+ Two new layouts based on bootstrap 2 and bootstrap 3
+ And many more features in v2
+ Display images and tags below the toolbar
^ Changed default target location of brand icon on toolbar
^ Show items with multiple states in badge streams admin list
^ Unable to filter by item status in admin badge streams page
* Search page throws error when accessing params object
* Excluded categories option do not hide CjBlog styling on article page
* EasyProfile about text field name cannot be changed
* Article thumbnail image from image options is not shown in listing
* Allow users to edit their own profile by default
* Removed invalid references to cjforum
* Articles from excluded categories are shown in listing layouts

1.4.2 &#8211; 2016-05-30

+ Added support for switching between EasyProfile & CjBlog About Author text
* Added a common classname for all avatars across the component
* Rating function do not work in Joomla 3.4
* Article id in articles listing is incorrect
* Conditional points rule do not work in certain situations
* Brand link leads to 403 error on user profile page for guest users
* Category link in user blog page do not work

1.4.1 &#8211; 2015-02-10

Hotfix

1.4.0 &#8211; 2015-02-09

+ New points rule - assign different points based on number of article hits
+ New Integration: CjForum points system
+ New Integration: CjForum avatars and profile linking
+ New Integration: EasyProfile avatars & profile linking
+ New Integration: About text of user profile from EasyProfile
* Article form gives 500 error

1.3.2 &#8211; 2015-02-03

+ Added CjBloggers module in package
* Author about text shown as html in authors list page.

1.3.1 &#8211; 2015-01-31

+ UI tweeks for users listing layout

1.3.0 &#8211; 2015-01-30

+ New conditional rule type to award points based on conditional rules
+ New points rule to award points to article author based on number of hits
+ Configuration option to disable CjBlog points system (in content plugin)
+ Support for choosing max length of about text on article pages (cjblog content plugin options)
+ Support to choose between wysiwyg and bbcode editors for editing user about text
+ Configuration option to select default editor for writing about text
+ Configuration options to change date format in articles and profile pages
+ Hide about text when editing it
+ Added support for CjForum
+ Added new field in cjblog menu item to assign blog layout to a specified user blog.
* BBCode tags are not parsed into html after saving About text on user profile and on article pages.
* User About text should not be limited to 180 character length on article page.
* Update tinymce data to textarea when click on save button of author about text

1.2.2 &#8211; 2014-09-27

* Tags are not saved from CjBlog Form
* Thumbnails are not generated on few server types

1.2.1 &#8211; 2014-08-21

+ Updated with new tags selector
* Fixed issue with thumbnails creation function
* User about text not gets updated

1.2.0 &#8211; 2014-03-29

+ New custom badges trigger page to add badges manually
+ New My Badges module
+ New Tag Cloud module
+ New JomSocial badges plugin
+ Redirect user to login page if a guest access form page
+ Option to display only selected category articles for articles menu items
+ User message for points assignment will not include points rule description as well
* CjBlog menu items not getting created automatically in Joomla 3.x
^ Credits link is now displayed in muted style in lower size font

1.1.8 &#8211; 2013-12-05

+ Use image from article images options to display thumbnail

1.1.7 &#8211; 2013-10-05

+ Intro image support for blog layout articles
+ Automatically selects between intro image if exists or first image in article content on articles listing

1.1.6 &#8211; 2013-09-23

+ Caching article thumbnail images for improving articles listing load time
* Search button on users listing is too small to enter input
* Error message displayed on deleting article from backend

1.1.5 &#8211; 2013-08-28

* CjBlog content plugin not working on J3 after previous update

1.1.4 &#8211; 2013-08-24

* User profile link on toolbar menu is not working
* Pagination is wrapped on few templates
* Tooltips causing elements to be hidden on hover - bootstrap bug
* Search text box is too small on tags page
* User display name is always "username" on My/User Articles page ignoring CjBlog option
^ Removed "Add to root" in category list on form page
^ Lowered the modal height of avatar change modal to fit on small screens

1.1.3 &#8211; 2013-05-22

* Unable to enter unicode characters in tags
* Calender in article form not working
^ vCard meta information for better search results
^ Lowered avatar size on profile page to 160px to allow more content on main block

1.1.2 &#8211; 2013-03-18

^ Display image in user visible area to allow selecting user avatar in user friendly way
^ User avatar image minimum size is reduced to 128 pixels to allow small images
^ Reduced user avatar size to 160px on profile to load page quickly and support small avatars
* Clicking on nav-collapse will open main template collapse on bootstrap templates
* Wrong badge name displayed in badge activity page of admin site
* Clicking on tag in Tags page not opens articles list 
* Bug in installer for Joomla 3

1.1.1 &#8211; 2013-03-05

* Unable to select access level of badge on Joomla 3
* Unable to select access level of points rule on Joomla 3
* Typo in language file

1.1.0 &#8211; 2013-03-01

+ Tagging system support for articles
+ Enhanced social sharing with AddThis
+ Option to choose location of sharing buttons on article
+ Display toolbar on form
* Installer cannot create necessary directories causing error
* Failed installation casing user not able to login to backend

v1.0.9 &#8211; 2013-02-28

* Few Joomla 3 templates loads jQuery libraries after CjBlog jQuery files causing errors.

v1.0.8 &#8211; 2013-02-20

* Article count not updated after submitting new article

v1.0.7 &#8211; 2013-02-15

+ Display hot badge on article page
* Badge details not updated after content state changes

v1.0.6 -2013-02-08

+ Social buttons support (Facebook Like, Google +1 and Twitter Tweet) added in article pages
* Unable to view user articles from profile page unless logged in
* Filter by point rule is not possible in backend
* Badges page does not respect menu meta information
* CjBlog content plugin should be disabled on print view

v1.0.5 &#8211; 2013-01-27

* Message is not being displayed when points awarded to the user
* Points not awarded after user signup

v1.0.4 &#8211; 2013-01-25

+ Hot patch for wrong file uploaded in previous release

v1.0.3 &#8211; 2013-01-25

+ Configuration option to selected exclude user groups from displaying in users listing page

v1.0.2 &#8211; 2013-01-19

+ Remove user profile functionality added in backend
+ Third party user avatar support added
+ Ability choose display name of the user
+ Award points to view article only if difference between successive view is more than a minute.
+ Added ability to restrict component only for selected categorys or for categories not excluded.

v1.0.1 &#8211; 2013-01-13

+ Fix default columns in category list to 3
* Editing an article with CjBlog form handler results in error in Joomla 3

v1.0.0 &#8211; 2012-12-31- First release