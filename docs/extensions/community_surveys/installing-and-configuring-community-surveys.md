---
id: installing-and-configuring-community-surveys
title: Installing and configuring Community Surveys
sidebar_label: Installing and configuring Community Surveys
sidebar_position: 14
---

## Core Component Installation

Please install CjLib component before installing Community Surveys.

For installation instructions please check [http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

Once you install CjLib package, make sure to update your MaxMind API key in the CjLib component options.
Read more at [https://docs.corejoomla.com/Update_GeoIP_Database](https://docs.corejoomla.com/Update_GeoIP_Database)

## Configuring Component

Go to
Components->Community Surveys->Click on Options button on toolbar
Here you can configure the various options for Community Surveys.

## General Settings

- **Username:** Choose whether you want to use user original name or username to be displayed on component pages.
- **User Avatar:** Choose which third party component avatar shall be used to integrate
- **Hide Template:** If you want your users to respond to surveys without any styles and module blocks of your Joomla template, select yes to this option. Your users will be displayed only the component area in entire browser page while taking the survey.
- **List Length:** Limits number of public surveys to be displayed on the homepage

## Integration Options

Several settings are available to quickly integrate third-party components and change the look and feel.

### Default Layout

Community Surveys supports templates based on bootstrap 2 and above. Depending on which version of the bootstrap library, your template is using, you need to select the default layout option accordingly. Default is bootstrap2.

### Third Party Settings

If you have supported third-party community extensions such as CjForum, JomSocial, EasySocial, CB etc., you can use the below options to integrate their features into Community Surveys.

- **User Profile System:** Select the user profile component you would like to use. If you do not have any, select none.
- **User Avatar System:** Select user avatar component you would like to use. If you do not have any, select none.
- **Activity Stream System:** Select the activity stream system to use for posting the activities.

Community Surveys allow your users to create surveys so it is good to limit them from misusing or making the feature more useful. For this, it allows a restricting number of responses a survey can receive using points system. CjBlog, AlphaUserPoints, JomSocial, EasySocial Point Systems are supported. You need to install respective plugins to use.

- **Points System:** Points System to be used
- **Points Per Credit:** Number of points required for each credit. Each credit is equivalent to a survey response. Survey creator should have enough points to convert them into credits and can use each credit to invite a respondent. 1 credit is equivalent to 1 response, so if you put 10 points in this, each response requires 10 points in survey creator account.

## Permissions &#8211; Allow and Disallow users

The permission settings tab in Options allow you to configure the access of user groups on your site. Allow Respond to Surveys and View Results permissions as needed. If you would like to allow frontend users to create surveys on their own, allow Create and other permissions (Note: Public users cannot create surveys).

## User Location Settings

Community Surveys uses MaxMind GeoCity2 Lite database for finding the user location such as country, city etc. To get this work, you need to get a MaxMind license key and update it in the CjLib component options. Please read the instructions at the following documentation.