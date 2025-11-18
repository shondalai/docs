---
id: restricting-users-from-taking-the-survey-multiple-times
title: Restricting users from taking the survey multiple times
sidebar_label: Restricting users from taking the survey multiple times
sidebar_position: 3
---

One of the important requirement for any survey is the data accuracy and unique responses from the users. Community Surveys has built-in capability to handle the multiple responses and maintain the data accuracy and uniqueness.

## Response Types

When you are trying to restrict users from taking the survey multiple times, you need to know who the user is. Here comes the response type &#8211; **Onymous** and **Anonymous**. Anonymous responses do not capture user information such as user id or ip addresses. So You cannot use such options for anonymous surveys.

Given that condition, here are the ways you can restrict the multiple responses.

## Public Surveys

Public surveys are open to any one, i.e. your users can simply access the survey by clicking on the URL of the survey. Ofcourse you can restrict the access using permissions system but that is for stopping the complete access and is out of scope of this tutorial. So here are the available options for pubic surveys.

- **Cookies** &#8211; When you are creating or editing the survey, you can choose this in the multiple responses &#8220;Restriction Method&#8221; option. Cookies are stored on user browser and allow you to verify them when they are reopening the survey. However, since they are stored on user browser, they can be cleared and the survey can be taken again.

- **IP Address** &#8211; This is another Restriction Method option which you can choose. The user IP address is used to allow the responses. However, this has its own drawbacks. The computers behind a proxy server will have a same IP address. So users from multiple computers behind a proxy server can take the survey only once.

- **User ID** &#8211; If your survey respondents are registered users, this is the best and most reliable option to restrict the users from taking the survey multiple times. The registered user id will be stored for each response and is verified before the user taking the survey.

## Private Surveys

All the options described for public surveys are applicable for private surveys as well. However, there are few additional methods available in case of private surveys. Private surveys are hidden from viewing on the front-end surveys listing page and are not accessible with simple survey URLs. So here are additional options available for private surveys.

**Unique Survey URL** &#8211; This is the one time survey URL which will expire after the user completes the survey response. Every URL will have a unique key as a parameter which will be verified for restricting the multiple responses. You can create as many unique survey urls as you want from the Invite page of your survey. You can create and send unique keys to the users multiple ways.

- Registered Users &#8211; Send automated emails to your registered users in the Joomla user groups.

- Contact Groups &#8211; You can create personal contact groups, import email ids to them and send the invitations at once. Every invitations will get a unique survey URL automatically.

- AcyMailing &#8211; We have a special plugin for AcyMailing component. If you are using it, you can make use of the plugin to send surveys in the newsletters.

- Social Groups &#8211; You can send invitations to JomSocial user group.

- **Global Survey URL** &#8211; This is secret URL assigned for each survey. You can share this URL in an email. However, please note that any user having access to this URL can take survey and you must select at least one Restriction Method as described in the public surveys section above.