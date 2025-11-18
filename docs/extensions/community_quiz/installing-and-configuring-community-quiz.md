---
id: installing-and-configuring-community-quiz
title: Installing and configuring Community Quiz
sidebar_label: Installing and configuring Community Quiz
sidebar_position: 4
---

This guide will help you quickly get started with the extension without any advanced details. We try to make Community Quiz fairly simple component which can be setup and understood by least experienced users. However few things that you may need to set up to make it fully functional are explained here, so please read this documentation completely before using the extension.

## Installation

Installing CQ is nothing different from any other Joomla extension. Please follow the below guide.
[http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

Once you install the extension, the administrator menu item is automatically created and available for you to access the extension administration part.

**Tip:** Because of the way the menu tree is created, your menu structure sometimes is not built properly. Installing extension will not allow Joomla to create CQ menu items properly. This is not a CQ bug rather the corrupted menu tree structure. If you face any such issue, please follow the below procedure.

- Access your database and delete the CQ menu items by executing the following query
- delete from xxx_menu where link like &#8216;%com_communityquiz%&#8217;;
- replace xxx with your table prefix
- Go to Menu Manager->Menus in your administration site and click on Rebuild button on toolbar
- Now install the component again

## Configuring Extension

After installing the extension, you can find the extension menu in Components menu. Now follow the below steps:

- Go to Components->Community Quiz->Categories and create the initial categories for your Quizzes. Please do not select any category permissions if you do not need category specific access restrictions. If all of your categories have same level of access to your user groups, you can configure component permissions which is explained below.
- Go to Components->Community Quiz->Click on Options button on toolbar
- Check and adjust all options as per your requirements. All options are documented under their labels. Move mouse over the label to see documentation about that option.
- Click on Permission Settings tab in Options and give necessary permissions to your user groups. Do not give Manage permission to everyone, it is meant for admins only.

## Creating the Menus

It is recommended to create menu items which will make your urls. Menu items play crucial role in creating search engine friendly urls. The alias you create as part of the menu item creation will be added to the urls instead of generic &#8220;components/communityquiz&#8221; which is added by default to distinguish component pages.

### Recommended menu items

In order to build better urls and better seo, the following menu items are recommended. They will also provide you per menu level customization options for your pages.

- **Quizzes Layout:** This menu item is used to display list of latest quizzes along with top level categories
- **Categories List:** This will display two level categories list neatly arranged in a parent-child category hierarchy. You may want to ignore this menu item if you don&#8217;t want to display categories listing page.
- **Category:** This menu item display list of quizzes in a selected category. It is recommended to create this menu item for at least each of the top level category.
- **Quiz Search List:** This menu item displays advanced search page
- **Quiz Form:** Menu item for quiz form page
- **Single Quiz:** Helps in setting up separate menu for a single quiz

## Configuring the features

Community Quiz v4 comes with many settings for you to customize fine grained parameters. The following are some of different types of user settings that you can configure.

- **Notification settings:** you can choose to enable/disable emails sent to users when say, a new quiz is posted, someone responded to quiz etc.
- **Activity Stream:** These settings are same as notification settings but they instead of sending emails, the notification is added to your activity stream component.
- **Points System:** You can enable/disable giving points to different activities. Actual points being awarded (via rules) can be configured only in your points system component.

To configure above settings, follow the below steps.

- Go to Extension Manager -> Plugins
- Filter by group &#8220;communityquiz&#8221;
- Click on the plugin with name &#8220;Community Quiz &#8211; Quizzes&#8221;
- Here you can enable or disable each of the settings.