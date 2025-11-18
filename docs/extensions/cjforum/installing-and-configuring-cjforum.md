---
id: installing-and-configuring-cjforum
title: Installing and configuring CjForum
sidebar_label: Installing and configuring CjForum
sidebar_position: 12
---

## Installation

CjForum package includes the main component, modules, and plugins required to build the full forum feature. 

A quick video guide to set up the component.

Follow the steps below for installing the component.

- Install the CjLib component which you can download from the Required Extensions section on downloads. Know more about how to install an extension for Joomla at [https://docs.joomla.org/Installing_an_extension](https://docs.joomla.org/Installing_an_extension)

- Install the CjForum package from your Joomla installer page as above.

- The package will install all required database tables, modules, and plugins. If you find the database tables do not create or you see any issue in accessing the component, please install it again.

- You should see CjForum menu created on your administrator menus if the installation went well.

- Go to Extensions->Plugin Manager

- Filter plugins by &#8220;cjforum&#8221; and enable all CjForum plugins (&#8220;Content &#8211; CjForum&#8221;, &#8220;CjForum Topics&#8221;, &#8220;User &#8211; CjForum&#8221;)

- Filter plugins by &#8220;cjforumapps&#8221; and enable &#8220;CjForumApps &#8211; Cjforum&#8221; plugin. You can enable other components integration plugins if you have them installed. Please do not enable plugins for which the components do not exist on your site. For example, if you do not have CjBlog installed, then disable cjforumapps &#8211; Articles plugin.

## Configuration

- Go to Components->CjForum

- Click on Options button on the toolbar

- Check all the configuration options and update as per your requirement

- Important: Check the permission settings tab to configure the permissions.

## Creating Forums

- Go to Components->CjForum->Categories

- Add new forums from this page

- Add at least one sub-category for each top-level category to show the forum index page with a forum look.

- You may want to customize permissions for each category separately

## Creating Menu Items

- Go to Menus->Add New Menus

- Add new Menus and go to the new Menus

- Add your CjForum menu items to this new Menus

- Create a Menu Alias menu item in your main menu and point it to any of the menu item created above.

See more about the menu structure here:
[Configure Search Engine Friendly URLs for CjForum](https://docs.corejoomla.com/Configure_Search_Engine_Friendly_URLs_for_CjForum)

## Syncing Users

- Go to Components -> CjForum -> Users

- Click on the Sync button to start syncing users

- This will create user mapping in CjForum so that all features work