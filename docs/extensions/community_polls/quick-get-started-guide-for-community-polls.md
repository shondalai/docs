---
id: quick-get-started-guide-for-community-polls
title: Quick get started guide for Community Polls
sidebar_label: Quick get started guide for Community Polls
sidebar_position: 2
---

## Installing Community Polls

Please check the documentation here: [http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

## What are the ways to create polls?

- From back-end

- From front-end

## Basic checklist before creating a new poll

- Permission settings &#8211; check if you have given create permission to your user group (if you want to create polls from the front end)

- Categories &#8211; make sure at least one category created

- Menu items &#8211; Menu items form your urls as well as provide per menu configuration options. It is recommended to create a &#8220;Community Polls &#8211; Category&#8221; menu item for each top-level category and all polls will inherit from them.

- Configuration &#8211; make sure you checked the configuration and saved it. things to check &#8211; poll types allowed, multiple vote restriction methods used

## Quick steps to setup polls

- Install the extension using the Joomla installation manager (http://docs.joomla.org/Installing_an_extension)

- Go to Extensions -> Community Polls and click on the Options button on the toolbar

- Configure the options and permissions. Each option is documented on their labels (mouse over to view the documentation of the options)

- Go to Extensions -> Community Polls -> Categories and create your categories

- Go to Extensions -> Community Polls -> Polls  and create your poll

- Go to Menus -> Manage and add a new Menus, you can add all your poll menus in this

- For generating better URLs please create menu items for all your top-level categories.

- Access polls on the front end using your menu items or publish the Random Poll module.

## Creating your first poll

### From backend

- Go to Components->Community Polls->Polls

- Click New button

- Enter the poll title, select a category, and enter answers (optionally enter the description and check other options)

- Select Published as status if you want to publish the poll immediately.

- Click the Save & Close button

### From frontend

- Login on the frontend with the user whose user group has created permission given

- Access the component using the Community Polls Home menu item you created (see checklist above)

- Click the &#8220;Submit a Poll&#8221; button on the toolbar

- Enter poll title, select a category, and enter answers (optionally enter description and check other options)

- If the user group is given auto-approve permission, the poll will be published immediately, otherwise, admin users (users in those groups which is selected as admin groups in configuration), will get emails with approval/disapproval links

- Publish or unpublish the poll using links in the email. Or you can approve from the backend approval page.

## New version available, how to update?

- Download the latest version from the Downloads section

- Go to Extension Manager->Install/Uninstall Extensions page on your website

- Browse and select the downloaded file

- Click the Install button.

Good luck.