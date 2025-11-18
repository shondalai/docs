---
id: setting-up-social-login-in-sociable
title: Setting up social login in Sociable
sidebar_label: Setting up social login in Sociable
sidebar_position: 1
---

Sociable has built-in support for authenticating and login users via social platforms such as Facebook, Google, LinkedIn and Twitter

## Enable Social Authentication

To enable social authentication, follow the below steps

- Go to Components -> Sociable

- Click on Options button on the toolbar, this will open the component options

- Click on the Profile tab to show profile options

- Select the desired authentication platforms in the &#8220;Social Authentication&#8221; option under &#8220;Integration&#8221; tab

- Enter the API keys of the respective authentication methods in the fields shown after selective the above, if any shown.

## Enable Authentication Plugin

When the user is authenticated, his profile will be integrated into Joomla! by using an authentication plugin. Enable it by following the below steps.

- Go to Extensions -> Plugins

- Filter Authentication type plugins in the search filters or Search for &#8220;Authentication &#8211; Sociable&#8221; plugin

- Enable it

## How to get Facebook API Key

You need to create your application on the Facebook developer page to get your API key. Follow the below steps.

- Login into your Facebook account.

- Go to [https://developers.facebook.com/](https://developers.facebook.com/)

- Click on My Apps and click on Create App button

- Enter required details to create an app

- Now you can access your app from the My Apps menu

- In the App Dashboard, choose your app and scroll to Add a Product Click Set Up in the Facebook Login card. Select Settings in the left side navigation panel and under Client OAuth Settings, enter your redirect URL in the Valid OAuth Redirect URIs field for successful authorization.

- The Valid OAuth Redirect URL should be with the following format: https://yourwebsitename/index.php?option=com_sociable&task=user.login&provider=**PROVIDER **(replace PROVIDER with one of facebook, google, twitter or linkedin)

- You can find your app credentials under the settings menu

- See more details at [https://developers.facebook.com/docs/facebook-login/web/](https://developers.facebook.com/docs/facebook-login/web/)

The Facebook login button will be shown below the login form on your Sociable login page. Now your Sociable compopnent is enabled for social authentication.