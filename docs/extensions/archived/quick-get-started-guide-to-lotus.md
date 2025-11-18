---
id: quick-get-started-guide-to-lotus
title: Quick Get Started Guide to Lotus
sidebar_label: Quick Get Started Guide to Lotus
sidebar_position: 3
---

This documentation guides you through setting up Lotus app for your users.

## Get the Lotus App

Lotus app comes with two stage download process.

- . Download the Lotus component
- . Build, customize and download Lotus Android App

## Setup Lotus Joomla! component

Setting up Joomla! component is like any other Joomla! extension.

### Download and install

Make sure you have active Lotus membership on corejoomla.com

Go to downloads page on corejoomla.com and download Lotus Joomla! component. This component act as a service provided to the Android clients. Installation is straight forward, please see below documentation about installing a Joomla! component.

[https://docs.joomla.org/Installing_an_extension](https://docs.joomla.org/Installing_an_extension)

### Setup Firebase Project

- . Go to [https://console.firebase.google.com](https://console.firebase.google.com/) and login with your Google ID.
- . Create a new project for your app
- . Once you create the app, it will allow you to download **google-services.json** file. Keep this file safe in your computer.
- . Go to your project settings and note down *&#8220;Project ID&#8221;* value from **General** tab and *&#8220;Server key&#8221;* value from **Cloud Messaging** tab

### Configure Joomla! component Options

- Go to Components -> Lotus -> Click on Options button on toolbar
- Enter Project ID and Server Key values from previous step into Lotus Component Options
- Configure other options as per your requirements
- Enable/Disable integrations for the other components such as CjForum, Community Answers etc.
- Save options

## Setup Android App

Setting up Android app involves creating APK file and uploading it to Google Play Store so that your users can download it and update it from Android phones.

### Create, Customize and Download APK file

- Login to corejoomla.com with your user id and password
- Go to Account -> My Apps menu from main menu
- Click on New App button to start creating new App

See below documentation to learn more about customizing the app:

[Creating Lotus Android App](https://docs.corejoomla.com/Creating_Lotus_Android_App)

- Make sure to upload google-services.json file in the **APP VALUES** tab of customize app page.
- Once you customize the app, save the app settings. You will be redirected back to the My Apps page.
- Click on Build button on your app row
- The app will start building on the server.
- Refresh the page after 15 minutes, you should see the download button enabled and build button back to normal from waiting state.
- Click on download link to download your app

### Sign your app

Google do not accept any app which is not digitally signed. So it is very important to remember the following points.

- Create and store digital signature key in a secured location. Without this signature file you will not be able to update your app on Google Play Store in the future. It is impossible to recreate the signature file if you lost it.
- Never share the signature to anyone including us.

Please follow the below guide to know more about creating signature key file and sign your app.

[https://docs.corejoomla.com/Signing_your_Android_app_to_publish_on_Play_Store](https://docs.corejoomla.com/Signing_your_Android_app_to_publish_on_Play_Store)

### Upload APK file to Android Play Store

Google Developer Console is your one stop shop to manage all your Android Apps. Android mobile users will be able to download and update apps from Play Store directly and you need not store the app on your servers.

- Signup for developer account on Google Play Store: **[https://play.google.com/apps/publish](https://play.google.com/apps/publish)**
- You need to pay small fee to get a developer account at Google
- After login to developer console, create a new app and customize description and other information shows to your users
- Upload signed APK file on developer console.
- Google will review and approve your app within a couple of business days.

Congratulations, your site is now goes mobile.