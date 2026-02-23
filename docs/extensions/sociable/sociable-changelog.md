---
id: sociable-changelog
title: Changelog
sidebar_label: Changelog
sidebar_position: 11
---

# Sociable Changelog

All notable changes to Sociable will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [3.0.3] - 2026-02-23

### 🚀 Added
- Made admin email templates menu responsive
- Made left icon on top toolbar clickable

### 🐛 Fixed
- Corrected stats percentages in admin dashboard page
- Made settings page menu responsive
- Corrected percentages on dashboard page
- Made login and registration pages mobile responsive

## [3.0.2] - 2026-02-22

### 🐛 Fixed
- Updated notifications module to show bell icon with notifications dropdown
- Updated members module to show correct UX
- Updated groups module to display groups with card layout and correct links
- Updated feed module to display activity feed with correct links

## [3.0.1] - 2026-02-22

### 🐛 Fixed
- Resolved installer error on new sites
- Enabled plugin events to trigger correctly
- Corrected styles display issue in backend
- Restored icon display in backend

## [3.0.0] - 2026-02-19

**Major Release: Complete Rewrite for Joomla 5/6**

This is a complete architectural rewrite of Sociable, modernizing the codebase for Joomla 5 and 6 compatibility with native APIs.

### 🎉 Breaking Changes
- **Joomla 5/6 Native**: Complete rewrite using Joomla 5/6 APIs
- **Minimum Requirements**: Joomla 5.0+ or Joomla 6.0+, PHP 8.2+
- **Modern Architecture**: PSR-4 autoloading, namespaced classes, dependency injection
- **User Profile Fields**: Discontinued support for Joomla user profile fields plugins in favor of built-in profile fields.

### ✨ Added

#### Core Features
- React 19 frontend with TypeScript
- 15+ themes selectable with one-click
- Modern database schema with JSON columns
- Activity feed with reactions (like, love, haha, wow, sad, angry) and comments
- User profiles with customizable fields
- Multiprofile support with auto assignment rules and invite system
- Groups with public, private, and secret visibility
- Connections system (friends, followers, blocks)
- Real-time notifications
- Badge/achievement system with rule engine
- Content reporting system with moderation queue
- Points and gamification system
- Push notification support
- Referral system with rewards

#### Developer Features
- RESTful API with full documentation
- SDK for third-party developers

#### Integrations
- OAuth login with Google, Facebook, Apple

#### Modules
- Activity Feed module
- Members module
- Groups module
- Notifications module

### 🔧 Changed
- Migrated to PHP 8.2+ with typed properties
- Migrated to Joomla 6 MVC architecture
- Unified friends/followers into connections table
- Improved database indexing and performance
- Complete UI redesign with Tailwind CSS

### 🗑️ Removed
- Legacy PHP 7.x compatibility
- jQuery dependencies
- Old template system

---

## [2.1.0] - 2025-10-05

### ✨ Added
- Joomla 6 compatibility update
- Support to select locale of the groups

### 🔧 Changed
- Update copyright headers
- Removed legacy references

### 🐛 Fixed
- Fixed issue with PHP notice message
- Replaced the incorrect language string
- Fixed issue with closing tags
- Fixed issue with long usernames

## [2.0.4] - 2024-07-07

### ✨ Added
- Added options to customize login redirect
- New option to customize which social connections to be shown

### 🔧 Changed
- Updates to store MySQL null dates

### 🐛 Fixed
- Sociable Questions profile plugin does not work
- Activity rules asset name filter is not working
- Authentication error message is not loaded from language file

## [2.0.3] - 2024-03-29

### ✨ Added
- Added option to hide social connections page on the registration page
- Show user points on profile (mobile view)
- Added option to auto login user after the registration completed

### 🐛 Fixed
- Fixed UI issues on user registration form

## [2.0.2] - 2024-03-22

### ✨ Added
- Improved activity stream page

### 🐛 Fixed
- Fixed issue with user registration

## [2.0.1] - 2024-01-13

### ✨ Added
- Added support for Rewardify points

### 🐛 Fixed
- Fixed issue auth plugin with backend login
- Fixed the margin of batch button on admin toolbar

## [2.0.0] - 2023-09-24

### 🎉 Breaking Changes
- Added support for Joomla 5
- Removed legacy layer for Joomla 3

## [1.4.3] - 2023-04-18

### 🔧 Changed
- Replacing legacy API references
- Replaced JFile/JFolder deprecated wrappers with respective file system functions

### 🐛 Fixed
- Fixed issue with associations helper

## [1.4.2] - 2023-02-05

### 🐛 Fixed
- Fixed font icons on the login & registration pages (Joomla 4)
- Fixed legacy Joomla language strings used in Joomla 4 version
- Fixed issue with content plugin causing errors with webservices
- Fixed issue with article plugin not loading articles when using Joomla 3
- Fixed UX issue with checkbox on the login form
- Fix issue with PHP warning message on login page
- Removed unused language strings

## [1.4.1] - 2022-11-07

### ✨ Added
- PHP 8.1 support added

### 🐛 Fixed
- Icon beside the notification count is not showing in bootstrap5 layout
- Login module published on sociable registration menu is not working
- Page shows error when the component redirect to login/any page

## [1.4.0] - 2022-05-27

### ✨ Added
- Adding integration with Joomla privacy module

### 🐛 Fixed
- Fixed issue with error when creating new point entry in backend
- Fix for the sociable extension review link

## [1.3.5] - 2022-02-07

### 🐛 Fixed
- Unable to edit avatar as the select avatar button do not work
- Social profile icons are not shown

## [1.3.4] - 2022-02-06

### 🔧 Changed
- Show gap between icons in the backend dashboard page
- Dashboard page enhancements to UI

### 🐛 Fixed
- Fixed issue with installer script
- Fix issue with profile link on the navbar

## [1.3.3] - 2022-01-07

### 🐛 Fixed
- Unable to checking sociable groups table from global checkin
- User is redirected to Sociable login even if sociable registration is disabled
- Unable to delete the user from users list
- Fixed issue with deleting the notifications
- Fixed issue with registration page on Joomla 4
- Fixed issue with populating fields on Joomla 4 registration form

## [1.3.2] - 2021-09-03

### ✨ Added
- Added extension changelog button shown for Joomla 4 and above

### 🔧 Changed
- Replaced references to corejoomla urls with shondalai urls

### 🐛 Fixed
- Fixed issue with incompatible method in the user and content plugins
- Do not load scripts/styles on asynchronous calls in backend
- Fixed issue with jQuery not loaded on j4 backend

## [1.3.1] - 2021-08-19

### 🔧 Changed
- Allow jQuery loaded always in Joomla 4
- Updating references to new shondalai.com domain

## [1.3.0] - 2021-08-09

### ✨ Added
- Added new layout based on Bootstrap 5 framework
- Added Joomla 4 support
- Added support for PHP8

### 🐛 Fixed
- Unable to delete the user after installing Sociable
- Unable to view form to add new photo album in profile page

## [1.2.9] - 2021-04-16

### ✨ Added
- New option in the registration menu item to automatically assign user to selected Joomla user groups

### 🐛 Fixed
- Removed duplicate entry of sociable in the points system option

## [1.2.8] - 2021-04-11

### 🐛 Fixed
- Photos button on the user profile page not working
- Pagination in photos page do not load second page
- Points activity do not show article name instead shows placeholder

## [1.2.7] - 2021-03-31

### 🐛 Fixed
- Registration form shows error

## [1.2.6] - 2021-03-29

### ✨ Added
- New registration menu item option to automatically add user to a discussion group after registration

## [1.2.5] - 2021-01-23

### ✨ Added
- New field on user registration page to allow users select allowed profiles
- Assign user to a selected Joomla user group when profile is assigned

### 🐛 Fixed
- Sorting profiles on profiles list page on Joomla 3 does not work
- Duplicating a group from backend shows error

## [1.2.4] - 2021-01-16

### 🐛 Fixed
- Notice message shown on groups page when debug mode enabled
- The content of the group should be hidden to non-members

## [1.2.3] - 2021-01-15

### ✨ Added
- Added new option to disable social connections buttons of user profile

## [1.2.2] - 2021-01-13

### ✨ Added
- Redirect the guest user to registration page when try to access unauthorized group URL
- Added Groups menu in backend main menu

### 🐛 Fixed
- When associations are enabled, editing group is not possible
- Added missing language strings for associations tab
- Disallow accessing unauthorized user group by directly accessing URL

## [1.2.1] - 2021-01-06

### ✨ Added
- Added support for switch Sociable profile fields to Joomla User component fields
- Added new module Events

### 🐛 Fixed
- Fixed issue with saving HTML descriptions on server with no tidy

## [1.2.0] - 2020-11-29

### ✨ Added
- New option in login menu to redirect to a URL or menu item
- Support for OpenStreetMap as default maps provider
- New permission setting to allow/disallow viewing profiles

### 🔧 Changed
- Joomla 4 Beta 5 support
- Allow admin change default profile of the user from backend
- Removed Google+ references

### 🐛 Fixed
- Unable to change avatar when the modern routing with remove URLs option is enabled
- Show the first table enabled by default in backend user edit page
- Registration form do not show on first page
- Login form misaligned on bootstrap 4 layout
- User data is not cleared from Sociable tables after a user is permanently deleted

## [1.1.0] - 2020-06-21

### ✨ Added
- New Komento plugin for adding activities/points to Sociable
- New JComment plugin for adding activities/points to Sociable
- Added remove activity API function
- Joomla 4 beta 1 support added

### 🔧 Changed
- Show topic details in a card-body for better visibility
- Show topic details in a boxed layout for better visibility

### 🐛 Fixed
- Pagination in groups listing is not responsive
- The like/dislike button is too big on bootstrap4 layout
- User is autoactivated with social login even if admin approval is enabled
- Event map do not show after saving the event, shows only after refresh
- Group access level does not restrict users from seeing groups
- Page is not redirected to groups listing after creating a new group
- Users are not restricted to create the groups with same title of an existing group
- Clicking on cancel button on group form page takes nowhere
- Unable to use events without having Google Maps Key
- When editing the group, new group is created instead of saving it

## [1.0.7] - 2020-04-19

### ✨ Added
- Send notification to the user when a friend request is made or accepted
- Added support for selecting and showing event location on Google Map

### 🐛 Fixed
- Wrong friend status shown on the members' list page
- Unable to delete the groups permanently
- Edit group link is shown to all users with creating group permission
- Feature button in profiles listing page is not working
- User cannot logout from the system when using Users - Logout menu item
- Comments on photos are not saved when clicking on the post button
- Like/dislike buttons on photos do not work

## [1.0.6] - 2020-03-25

### ✨ Added
- Added option to select the default profile in the registration form

## [1.0.5] - 2020-03-20

### ✨ Added
- Added support for showing privacy policy agreement system field

## [1.0.4] - 2020-03-18

### ✨ Added
- Added new Sociable login page

## [1.0.3] - 2020-02-23

### ✨ Added
- Added support for User profile plugins in the registration form

## [1.0.2] - 2020-02-22

### ✨ Added
- Added new registration page for replacing Joomla registration form
- Added new option to configure the date format of events

### 🐛 Fixed
- Avatar's "original" directory is not created by installer causing errors
- Points rules and activity rules buttons in backend dashboard are not working
- Fixed the typo in a language string
- Pagination in groups list is not shown when navigating page directly
- Edit group button is hidden to the group owner

## [1.0.1] - 2019-12-26

### ✨ Added
- Added new option to restrict allowed file types on the media forms

### 🔧 Changed
- Adjusted privacy selection box width to automatically adjust the content
- Joomla 4 compatibility updates

### 🐛 Fixed
- Points rules are not scanned automatically
- Activity like/dislike buttons do not work with bootstrap2 layout
- Labels on Photos/album form are not translated
- Unable to edit profile type in the backend when multi-language enabled
- Profile URLs do not load properly when SEF URLs enabled

## [1.0.0] - 2019-08-15

### 🎉 Initial Release
- First release of Sociable
