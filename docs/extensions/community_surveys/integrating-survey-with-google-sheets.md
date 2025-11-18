---
id: integrating-survey-with-google-sheets
title: Integrating survey with Google Sheets
sidebar_label: Integrating survey with Google Sheets
sidebar_position: 2
---

Community Surveys v5.7 & later versions support Google Sheets integration. When a survey is integrated with Google Sheets, the user responses are automatically synced in real-time with the selected Google Sheet. You can export the Google Sheet to an Excel file or create visualizations. So here is the process to integrate your surveys with Google Sheets.

## Step 1: Create Google Credentials App

The first step is to create an integration app with Google Cloud Console. If you have not done it already, get yourself an **OAuth 2.0** Credentials app created at [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials). You need to enter a callback URI when you are creating the OAuth credentials. The callback URI is based on your survey URL. `e.g. https://yoursite/surveys-menu?task=sheets.integrate`

Here&#8217;s a simpler version of the steps to set up your Google app credentials on your website:

- **First, sign in to your Google account** by going to this page: [Google APIs Credentials page](https://console.developers.google.com/apis/credentials)

- **Next, you&#8217;ll need to make a new app.** Look for a button that says &#8220;Create Credentials&#8221; and click on it.

- **Fill out some details about your app.** You’ll add the name of your application and tell Google where it can send information after someone uses your app. This might look something like `https://yoursitename/surveys-menu?task=sheets.integrate` – but it will depend on your survey listing menu alias. In the above URL, &#8220;surveys-menu&#8221; is the alias name of the &#8220;Surveys Listing&#8221; menu item.

- **Finally, get your app&#8217;s secret details.** After you&#8217;ve made the app, click on its name in the list to see a page with various pieces of information. You&#8217;ll want to find and keep a copy of the credentials – they&#8217;re like a secret code that lets your website talk to Google.

[![](/img/extensions/community_surveys/2021-11-google-app-step-create-credentials-1024x329.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-create-credentials.jpg)

[![](/img/extensions/community_surveys/2021-11-google-app-step-oauth-client.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-oauth-client.jpg)

[![](/img/extensions/community_surveys/2021-11-google-app-step-auth-urls.jpg)](https://docs.shondalai.com/wp-content/uploads/2021/11/google-app-step-auth-urls.jpg)
Steps to create Google credentials

## Step 2: Update Google credentials in the Community Surveys options

Now the next step is to copy and add your OAuth Client ID and Client Secret values in the Community Surveys options. Go to **Components** -> **Community Surveys** -> Click on the **Options** button on the toolbar -> Click on the **Integrations** tab -> **Enable the Google Sheets** Integration option and add your OAuth details here.

Your site is enabled for Google Sheets integration and you can authorize Google Sheets with your surveys.

## Step 3: Connect your survey with a Google Sheet

Go to the **Edit Questions** page of your survey and click on the **Sheets** button. This will take you to your Google login page, authenticate with your GMail ID and you are good to go. If you are already logged in, it will automatically enable the integration when you click on this button. 

A new sheet is created at your Google Sheets page [https://sheets.google.com](https://sheets.google.com/)/. When a user responds to your survey, a new row is added to the sheet.

That&#8217;s all, your survey is connected to Google Sheets.