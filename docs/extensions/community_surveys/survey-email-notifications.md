---
id: survey-email-notifications
title: Survey Email Notifications
sidebar_label: Survey Email Notifications
sidebar_position: 7
---

Community Surveys has a built-in system to send email notifications to users in various scenarios which is explained below.

### Sample Usecases

The following are a few sample cases where you may need to send an email notification to the users.

- Send a thank you message to the user who responded to your survey

- When someone responded to your survey, you want to get a notification

- If you allow your users to create surveys from front-end, you need a notification when they create surveys

- You want some dedicated persons to get the notification when users respond to your survey

These are some use cases of notification emails. Here is how you can configure the notification emails.

### Content of the email notifications

The content of the email notifications can be customized from the administrator menu item **Extensions -> Community Surveys -> Email Templates**. You can create a duplicate of the bundled email template and customize it for a different language. The template is automatically picked up based on the front-end language of the user. For example, if the user is taking a survey from a French language page of your site, and you have a template customized for the French language, the user will get a notification by taking the content from the French language template. Please note that your site must be configured to support multi-language as required by Joomla! to allow multi-language templates. Otherwise, the default English language template will be used. 

The following placeholders can be used inside your email templates.

- **`{SURVEY_RESPONSE_DETAILS}`** &#8211; this will add the user response details to the email template. Use this placeholder only in the emails triggered after the user response. 

- **`{SURVEY_TITLE}`** &#8211; Adds the title of the survey. This can be added in both the email subject and email content. 

- **`{SITENAME}`** &#8211; Name of your site configured in global configuration

- **`{SURVEY_URL}`** &#8211; The URL of the survey. Use this placeholder in the invitation emails

- **`{CATEGORY}`** &#8211; The name of the survey category

- **`{AUTHOR_NAME}`** &#8211; The name of the logged-in user. When creating the survey, this is the survey author&#8217;s name, when responding to a survey it is the responder&#8217;s name

### Customize who will get the notifications

You can customize the email notification recipients at multiple places.

#### 1. Survey Level Recipients List

Edit your survey and go to the Basic Options tab. Here you can enter multiple name/email id combinations to send emails to individual email ids. The email ids entered here need not be registered user email IDs. This option is applicable for notifying new responses.

![](/img/extensions/community_surveys/2020-05-Survey_notifications-1024x512.jpg)Survey Notification Options

#### 2. Global Notification Email IDs List

Go to Extensions -> Plugins -> &#8220;Community Surveys &#8211; Surveys&#8221; plugin and click on the Emails tab. Here you can enter individual email ids for both new responses and new surveys. The entered email ids will receive the notifications. The email ids need not be registered email ids on your site.

#### 3. Notification to users in a Joomla! User Group

You can send email notifications to the users in a user group. Go to Extensions -> Plugins and search for the &#8220;Community Surveys &#8211; Surveys&#8221; plugin and edit the plugin. Go to the Emails tab of the plugin options. Here you can select the user group to send notifications for new responses as well as new surveys.

#### 4. The survey responder

A thank you email can be sent to the user responding to your survey. If the user is logged in, his current login details (email address & name) will be used to send the email. If the user is a guest user, the email will be sent only if your survey has an &#8220;Email&#8221; type question and you have enabled the &#8220;**Send thank you email to the user**&#8221; option in your question&#8217;s customize tab.

![](/img/extensions/community_surveys/2022-12-survey_send_thankyou_emails-1024x320.jpg)

### Email Queue

Most websites send hundreds of emails per hour but your host may not support so many emails sent simultaneously. To avoid such issues, the emails are queued in the CjLib component mail queue and sent in a controlled manner. The manual Cronjob is used by default which will be triggered when someone is visiting your front-end page such as surveys listing, survey response page, etc. If you wish to configure an automatic cronjob, you can do so and the emails will be sent automatically at the intervals specified by you. See the below documentation for the same.

[https://docs.corejoomla.com/Setup_cronjob_to_trigger_emails_automatically](https://docs.corejoomla.com/Setup_cronjob_to_trigger_emails_automatically)