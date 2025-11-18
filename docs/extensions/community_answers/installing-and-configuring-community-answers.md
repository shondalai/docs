---
id: installing-and-configuring-community-answers
title: Installing and configuring Community Answers
sidebar_label: Installing and configuring Community Answers
sidebar_position: 3
---

This guide will help you quickly get started with the extension without any advanced details. We try to make Community Answers a fairly simple component that can be set up and understood by the least experienced users. However few things that you may need to set up to make CA fully functional are explained here, so please read this document completely before using the extension.

## Installation

Installing CA is nothing different from any other Joomla extension. Please follow the below guide.
[http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

## Configuring Extension

After installing the extension, you can find the extension menu in Components menu. Now follow the below steps:

- Go to Components->Community Answers->Categories and create the initial categories for your Q&A. Please do not select any category permissions if you do not need category specific access restrictions. If all of your categories have same level of access to your user groups, you can configure component permissions which is explained below.
- Go to Components->Community Answers->Click on Options button on toolbar
- Check and adjust all options as per your requirements. All options are documented under their labels. Move mouse over the label to see documentation about that option.
- Click on Permission Settings tab in Options and give necessary permissions to your user groups. Do not give Manage permission to everyone, it is meant for admins only.

## Creating the Menus

It is recommended to create menu items that will make your urls. Menu items play a crucial role in creating search engine-friendly urls. The alias you create as part of the menu item creation will be added to the urls instead of generic &#8220;components/communityanswers&#8221; which is added by default to distinguish component pages.

### Recommended menu items

In order to build better urls and better SEO, the following menu items are recommended. They will also provide you with per menu level customization options for your pages.

- **Questions Layout:** This menu item is used to display list of latest questions along with top level categories
- **Categories List:** This will display two level categories list neatly arranged in a parent-child category hierarchy. You may want to ignore this menu item if you don&#8217;t want to display categories listing page.
- **Category:** This menu item display list of questions in a selected category. It is recommended to create this menu item for at least each of the top level category.
- **Leaderboard:** This menu item displays leaderboard
- **Users List:** This menu item displays users listing
- **Question Form:** Menu item for question form page

## Configuring the features

Community Answers comes with many settings for you to customize fine-grained parameters. The following are some of the different types of user settings that you can configure.

- **Notification settings:** you can choose to enable/disable emails sent to users when say, a new question/answer is posted, someone liked/disliked questions/answers etc.
- **Activity Stream:** These settings are same as notification settings but they instead of sending emails, the notification is added to your activity stream component.
- **Points System:** You can enable/disable giving points to different activities. Actual points being awarded (via rules) can be configured only in your points system component.

To configure the above settings, follow the below steps.

- Go to Extension Manager -> Plugins
- Filter by group &#8220;communityanswers&#8221;
- Click on the plugin with name &#8220;Community Answers &#8211; Questions&#8221;
- Here you can enable or disable each of the settings.

## Configure Options

Community Answers settings can be configured from the component Options page. You can access this page by going to Extensions -> Community Answers -> Click on the Options button on the toolbar.

The options must be configured before using the component. These include the permission settings for your front-end and back-end user access, settings for customizing the front-end, integration settings with third-party components, etc. Following are the important options that you may want to change according to your preferences.

**Default Layout** &#8211; Based on the Bootstrap CSS Library version used by your template, choose the right layout in this option.

**Permissions** &#8211; This tab contains the permission settings. You must give View Questions and View Replies permissions to let the users access questions. Create permissions can be given to registered users as needed.

**Integration Settings &#8211; **Choose these options to customize third-party integrations such as user avatars, profile linking, user points, activity stream, etc.

There are several other options to customize the component. Please check them and save the options.