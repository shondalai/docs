---
id: getting-started-guide-to-cjfit
title: Getting started guide to CjFit
sidebar_label: Getting started guide to CjFit
sidebar_position: 6
---

The CjFit app needs integration with Fitbit API. To integrate Fitbit, you need to create an app on Fitbit site and enter the API keys in CjFit options.

## Setup Fitbit App

- Go to [https://dev.fitbit.com/apps](https://dev.fitbit.com/apps)
- Create a new app with the details mentioned in your CjFit dashboard page
- While creating your app, please create a subscriber as well.
- You can find your API client id and client secret keys on your app page
- Fill the Client ID, Client Secret and Verification Code in CjFit Options
- Once you fill in the options, go to your Fitbit app page and click on verify link on the subscriber row
- Your subscription verification is completed now and you are ready to use the app on your site.

## Creating Cronjob

- Get the cronjob url from the CjFit dashboard page
- Create a cronjob to execute every hour and trigger the cron url available in your CjFit administrator dashboard page.

Related Links: [http://wiki.corejoomla.com/Setup_cronjob_to_trigger_emails_automatically](http://wiki.corejoomla.com/Setup_cronjob_to_trigger_emails_automatically)

## Create Menu Items

- Go to Menus -> Main Menu
- Create CjFit dashboard menu item

When you access the menu item from front-end, it will show the logged in user&#8217;s dashboard if the user is already connected to Fitbit. If the user is not connected to the Fitbit, a button will be shown to proceed to authorize Fitbit with your site. User dashboard will be visible to other users only when he authorized your site to connect to Fitbit.

## How it works

- When the user account is connected to Fitbit by authorizing with his Fitbit account, CjFit stores OAuth token of the user shared by Fitbit.
- CjFit will create a user subscription with Fitbit so that Fitbit can send updates about the user workouts.
- Fitbit will notify, your site in the background, user data whenever there is an update available.
- The cronjob, which you setup, will get these updates every hour and fetch user data using Fitbit API.