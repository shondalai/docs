---
id: sociable-changelog
title: Sociable Changelog
sidebar_label: Sociable Changelog
sidebar_position: 5
---

#### 2.1.0 – 05/Oct/2025

+ Joomla 6 compatibility update
+ Adding support to select locale of the groups
^ Update copyright headers
^ Removed legacy references
* Fixed issue with PHP notice message
* Replaced the incorrect language string
* Fixed issue with closing tags
* Fixed issue with long usernames

#### 2.0.4 – 07/Jul/2024

+ Added options to customize login redirect
+ New option to customize which social connections to be shown
^ Updates to store MySQL null dates
* Sociable Questions profile plugin does not work
* Activity rules asset name filter is not working
* Authentication error message is not loaded from language file

#### 2.0.3 – 29/Mar/2024

+ Added option to hide social connections page on the registration page
+ Show user points on profile (mobile view)
+ Added option to auto login user after the registration completed
* Fixed UI issues on user registration form

#### 2.0.2 – 22/Mar/2024

+ Improved activity stream page
* Fixed issue with user registration

#### 2.0.1 – 13/Jan/2024

+ Added support for Rewardify points
* Fixed issue auth plugin with backend login
* Fixed the margin of batch button on admin toolbar

#### 2.0.0 – 24/Sep/2023

+ Breaking Change: Added support for Joomla 5
^ Breaking Change: Removed legacy layer for Joomla 3

#### 1.4.3 – 18/Apr/2023

^ Replacing legacy API references
^ Replaced JFile/JFolder deprecated wrappers with respective file system functions
* Fixed issue with associations helper

#### 1.4.2 – 05/Feb/2023

* Fixed font icons on the login & registration pages (Joomla 4)
* Fixed legacy Joomla language strings used in Joomla 4 version
* Fixed issue with content plugin causing errors with webservices
* Fixed issue with article plugin not loading articles when using Joomla 3
* Fixed UX issue with checkbox on the login form
* Fix issue with PHP warning message on login page
* Removed unsued language strings

#### 1.4.1 – 07/Nov/2022

+ PHP 8.1 support added
* Icon beside the notification count is not showing in bootstrap5 layout
* Login module published on sociable registration menu is not working
* Page shows error when the component redirect to login/any page

#### 1.4.0 – 27/May/2022

+ Adding integration with Joomla privacy module
* Fixed issue with error when creating new point entry in backend
* Fix for the sociable extension review link

#### 1.3.5 – 07/Feb/2022

* Unable to edit avatar as the select avatar button do not work
* Social profile icons are not shown

#### 1.3.4 – 06/Feb/2022

^ Show gap between icons in the backend dashboard page
^ Dashboard page enhancements to UI
* Fixed issue with installer script
* Fix issue with profile link on the navbar

#### 1.3.3 – 07/Jan/2022

* Unable to checking sociable groups table from global checkin
* User is redirected to Sociable login even if sociable registration is disabled
* Unable to delete the user from users list
* Fixed issue with deleting the notifications
* Fixed issue with registration page on Joomla 4
* Fixed issue with populating fields on Joomla 4 registration form

#### 1.3.2 – 03/Sep/2021 

+ Added extension changelog button shown for Joomla 4 and above
^  Replaced references to corejoomla urls with shondalai urls
* Fixed issue with incompatible method in the user and content plugins
* Do not load scripts/styles on asynchronous calls in backend
* Fixed issue with jQuery not loaded on j4 backend

#### 1.3.1 – 19/Aug/2021

* Allow jQuery loaded always in Joomla 4
^ Updating references to new shondalai.com domain

#### 1.3.0 – 09/Aug/2021

+ Added new layout based on Bootstrap 5 framework
+ Added Joomla 4 support
+ Added support for PHP8
* Unable to delete the user after installing Sociable
* Unable to view form to add new photo album in profile page

#### 1.2.9 – 16/Apr/2021

+ New option in the registration menu item to automatically assign user to selected Joomla user groups
* Removed duplicate entry of sociable in the points system option

#### 1.2.8 – 11/Apr/2021

* Photos button on the user profile page not working
* Pagination in photos page do not load second page
* Points activity do not show article name instead shows placeholder

#### 1.2.7 – 31/Mar/2021

* Registration form shows error

#### 1.2.6 – 29/Mar/2021

+ New registration menu item option to automatically add user to a discussion group after registration

#### 1.2.5 – 23/Jan/2021

+ New field on user registration page to allow users select allowed profiles
+ Assign user to a selected Joomla user group when profile is assigned
* Sorting profiles on profiles list page on Joomla 3 does not work
* Duplicating a group from backend shows error

#### 1.2.4 – 16/Jan/2021

* Notice message shown on groups page when debug mode enabled
* The content of the group should be hidden to non-members

#### 1.2.3 – 15/Jan/2021

+ Added new option to disable social connections buttons of user profile

#### 1.2.2 – 13/Jan/2021

+ Redirect the guest user to registration page when try to access unauthorized group URL
+ Added Groups menu in backend main menu
* When associations are enabled, editing group is not possible
* Added missing language strings for associations tab
* Disallow accessing unauthorized user group by directly accessing URL

#### 1.2.1 – 06/Jan/2021

+ Added support for switch Sociable profile fields to Joomla User component fields
+ Added new module Events
* Fixed issue with saving HTML descriptions on server with no tidy

#### 1.2.0 – 29/Nov/2020

## 

+ New option in login menu to redirect to a URL or menu item
+ Support for OpenStreetMap as default maps provider. Google Maps will be used only for GeoCoding, if the API key is provided.
+ New permission setting to allow/disallow viewing profiles
^ Joomla 4 Beta 5 support
^ Allow admin change default profile of the user from backend
^ Removed Google+ references
* Unable to change avatar when the modern routing with remove URLs option is enabled
* Show the first table enabled by default in backend user edit page
* Registration form do not show on first page
* Login form misaligned on bootstrap 4 layout
* User data is not cleared from Sociable tables after a user is permanently deleted

#### 1.1.0 – 21/Jun/2020

## 

+ New Komento plugin for adding activities/points to Sociable
+ New JComment plugin for adding activities/points to Sociable
+ Added remove activity API function
+ Joomla 4 beta 1 support added
^ Show topic details in a card-body for better visibility
^ Show topic details in a boxed layout for better visibility
* Pagination in groups listing is not responsive
* The like/dislike button is too big on bootstrap4 layout
* User is autoactivated with social login even if admin approval is enabled
* Event map do not show after saving the event, shows only after refresh
* Group access level does not restrict users from seeing groups
* Page is not redirected to groups listing after creating a new group
* Users are not restricted to create the groups with same title of an existing group
* Clicking on cancel button on group form page takes nowhere
* Unable to use events without having Google Maps Key
* When editing the group, new group is created instead of saving it

#### 1.0.7 – 19/Apr/2020

+ Send notification to the user when a friend request is made or accepted
+ Added support for selecting and showing event location on Google Map
* Wrong friend status shown on the members' list page
* Unable to delete the groups permanently
* Edit group link is shown to all users with creating group permission
* Feature button in profiles listing page is not working
* User cannot logout from the system when using Users - Logout menu item
* Comments on photos are not saved when clicking on the post button
* Like/dislike buttons on photos do not work

#### 1.0.6 – 25/Mar/2020

+ Added option to select the default profile in the registration form

#### 1.0.5 – 20/Mar/2020

+ Added support for showing privacy policy agreement system field

#### 1.0.4 – 18/Mar/2020

+ Added new Sociable login page

#### 1.0.3 – 23/Feb/2020

+ Added support for User profile plugins in the registration form

#### 1.0.2 – 22/Feb/2020

+ Added new registration page for replacing Joomla registration form
+ Added new option to configure the date format of events
* Avatar's "original" directory is not created by installer causing errors
* Points rules and activity rules buttons in backend dashboard are not working 
* Fixed the typo in a language string
* Pagination in groups list is not shown when navigating page directly
* Edit group button is hidden to the group owner

#### 1.0.1 – 26/Dec/2019

+ Added new option to restrict allowed file types on the media forms
^ Addjusted privacy selection box width to automatically adjust the content
^ Joomla 4 compatibility updates
* Points rules are not scanned automatically
* Activity like/dislike buttons do not work with bootstrap2 layout
* Labels on Photos/album form are not translated
* Unable to edit profile type in the backend when multi-language enabled
* Profile URLs do not load properly when SEF URLs enabled

#### 1.0.0 – 15/Aug/2019

* First release