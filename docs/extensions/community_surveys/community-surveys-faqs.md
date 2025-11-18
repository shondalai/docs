---
id: community-surveys-faqs
title: Community Surveys FAQs
sidebar_label: Community Surveys FAQs
sidebar_position: 22
---

## How do I create surveys?

Community Surveys comes with an easy to use Ajax powered web form for creating survey questions. You can create the surveys from available set of question types, just click or drag them onto the form and add necessary information to the question. Please make sure that your Joomla user group has required permissions to create surveys to access create functionality

Read end user documentation here: [https://docs.corejoomla.com/Community_Surveys_End_User_Documentation](https://docs.corejoomla.com/Community_Surveys_End_User_Documentation)

My users are unable to take survey, getting unauthorized error. How to solve this problem? Check

- You have given proper permission settings to your user groups (see next faq).
- You have not restricted permissions on the category of the survey you are accessing, edit category and check permission settings.
- You have selected proper access level on your &#8220;Community Surveys Home Layout&#8221; menu item

## How do I set permission settings for my user group?

- Login to administration and go to Components->Community Surveys.
- Click on Options button on toolbar. Configuration popup will open.
- Click on Permission settings tab and permission settings are displayed
- Allow or disallow user groups for desired permissions

## How do I allow guest users to take my surveys?

Follow the below instructions.

- Go to Components->Community Surveys->Click on Options button on toolbar->Click on Permission settings tab
- Allow Respond permission to Public user group

## I am unable to access the component, giving me 401 error.

You should select your user group under permission settings tab of Community Surveys component under Component Access box. To allow guest users, check Public User Access check box. You can select multiple user groups by press and hold CTRL button and select items.

## My users are able to take survey earlier, now it is giving error stating unavailability of credits.

Community Surveys allows you to limit number of responses that a survey can take. You can set this number while creating the survey (initial form of survey creation). Please note that if you enabled points system and you do not have enough points in your account, your survey will throw the error as it is unable to allocate points for survey credits.

## I created my first survey, and when user try to take the survey, an indirect loop is being created. How to solve this issue?

This will happen if the necessary steps of setup not done correctly. Here are the reasons.

You have created only one menu item for &#8220;Survey Response Layout&#8221; and using it to take feedback of users directly for a survey. The user may not be allowed to take survey for following reasons:

- The user group he/she is in not allowed to respond to surveys (set in permission settings of component)
- The user already took survey, but the &#8220;Skip Intro&#8221; option is set so that he will always redirect to form
- The survey creator do not have enough credits (if points system is used to charge survey owners)
- There was an error occurred while processing the request

The app will try redirect user to the homepage of surveys to home page but since there is no &#8220;Surveys Home Layout&#8221; menu item created so it will try to redirect him to the only menu item created which in turn creates the infinite loop. To avoid this, please create surveys home page menu item and make it accessible to intended respondents. You need not display this menu item on front-end using your menu module. You can create it in a dummy menus so that it is not visible.

## How do I prevent a user from taking survey multiple times?

There are several methods available depending on your survey type. While creating survey, you can select the restriction type so that the app will restrict users from taking survey multiple times.

### Cookies

Using this method you can prevent users from taking survey multiple times by using cookies stored on user browser. However, users can clear their browser cookies and take survey again.

### IP Address

This method is useful in case users are using static IP addresses. However it is not effective if they use dynamic ip addresses as they can always reset the router, for example, and take it again. This method will not work for anonymous surveys as there is no IP address will be recorded.

### Username

If your survey respondents are registered users, this is the most effective way to restrict the duplicate responses. The app will always verify username registered against the already taken responses. This method will not work for anonymous surveys as there is no user id will be recorded.

### Other methods

- **Invite manually:** You can create the unique survey urls from invite page and send them manually (say through email). Unique urls are one time valid urls.
- **Send invitations from the app:** You can send invitation to users automatically within the component by creating contact groups or registered user groups.
- **Invite through AcyMailing:** If you are using AcyMailing component, you can invite users from it in your newsletters.
- **Invite JomSocial user groups:** If you are using JomSocial, you can send invitation to users of any JomSocial group.