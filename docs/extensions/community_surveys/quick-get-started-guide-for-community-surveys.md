---
id: quick-get-started-guide-for-community-surveys
title: Quick get started guide for Community Surveys
sidebar_label: Quick get started guide for Community Surveys
sidebar_position: 12
---

## Quick Guide

- Download the main component file and install it just like any other Joomla extension. See the below documentation for installation instructions for a Joomla extension.
http://docs.joomla.org/Installing_an_extension

- Now go to Components -> Community Surveys on your administrator site

- Click the Options button on the toolbar

- Check the **permission settings** for each user group. Allow &#8220;**Respond**&#8221; permission to required user groups so that your users can respond to the surveys (See in the next section below).

- Review all other options to suit your website requirements.

Now create a menu item for Community Surveys menus. If you are new to this, please read the below documentation.
[http://docs.joomla.org/Adding_a_new_menu_item](http://docs.joomla.org/Adding_a_new_menu_item)
The menu items allow you to display the search engine-friendly URLs. If you would like to apply SEF URLs, create menu items for at least all top-level survey categories.

- Once you create the menu items in menus, you can show them using the menu module. Alternatively, you can add the menu items to your main menu. 

- Now you can access the front end. If you have given the create survey permission for your user group, you can see create survey button. Click and follow the instructions to create your first survey.

- Once you create the survey, click the Finish button on the questions creation page, your survey is published and ready to accept the responses. You can invite users from the invite page or manually copy and send URLs using your favorite email client. For public surveys, users can directly access the survey from the survey menu.

- You can find the quick links to edit the survey, invite, and reports pages just beside the survey link on the My Surveys tab on the front end or on the Surveys page on the back end.

#### Configuring Permission Settings

Permission Settings Configuration

#### Create Survey

Survey Creation Tutorial

#### Viewing Survey Reports

Accessing Survey Reports

## Prerequisites before the survey available to the users

- The &#8220;Respond&#8221; permission is given to the user group.

- The access levels of the survey/category/menu are set as required. It is recommended to keep them public.

- The private Survey option is set to &#8220;No&#8221; if you want the survey accessed directly from the listing page. If it is set to &#8220;Yes&#8221;, it can be accessed only via Unique Survey URLs generated on the Survey Invite page.

## What are the ways to display a survey?

- **Show surveys listing on front-end:** Surveys Listing menu item by default lists the **public** surveys on the Surveys home page. Users can click and take the surveys right away. Make sure the survey type is selected as &#8220;Public survey&#8221; to show them on the listing page. Private surveys won&#8217;t show here.

- **Using provided menu item:** Create a Single Survey menu item to display the survey on a page. This menu shows only one public survey. If you have many public surveys, use Surveys Listing or Survey Category menu items.

- **Using mod_surveyform module:** To display a survey in a module position. To display the survey in a Joomla article, use loadposition shortcode to load the module inside an article:
http://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F

- **Using unique URLs:** Invite users from the invite page or manually send Survey URL/Unique URLs and users can take the survey using those URLs. For search engine-friendly URLs, create Survey Category menu items for all top-level categories, although you need not show them on the frontend using the Menu module.

- **Using Joomla! articles:** You can use shortcode to display surveys in the articles. Please read [https://docs.corejoomla.com/Display_surveys_in_Joomla!_articles](https://docs.corejoomla.com/Display_surveys_in_Joomla!_articles)