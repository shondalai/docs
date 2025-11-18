---
id: community-surveys-end-user-documentation
title: Community Surveys End-User Documentation
sidebar_label: Community Surveys End-User Documentation
sidebar_position: 23
---

## Get started with Community Surveys quickly

Please refer quick get started guide before reading:
[https://docs.shondalai.com/community_surveys/quick_get_started_guide_for_community_surveys/](https://docs.shondalai.com/community_surveys/quick_get_started_guide_for_community_surveys/)

## Setting up the component Options:

The first part of setting up the application is to configure the component options which will define how the component needs to work. Go to Components->Community Surveys->Click on the Options button on the toolbar.

This will open a new page (popup in j2.5) and you can see a list of options that you can configure.

### Permission Settings

#### Component Permissions:

On the Options dialog above, click on the Permission Settings tab. You can allow/disallow permissions for each user group. A brief guide on how permission settings work is explained here:

[http://docs.joomla.org/J2.5:Access_Control_List_Tutorial](http://docs.joomla.org/J2.5:Access_Control_List_Tutorial)

Following permissions can be configured:

- Configure: Allows users to edit options of the component
- Access Administration Interface: Allows users to access the backend component
- Create: Allows users to create surveys from front-end or back-end
- Delete: Allows users to delete surveys
- Edit: Allows users to edit the existing surveys
- Edit State: Allows users to publish/unpublish surveys
- Edit Own: Allows users to edit their own surveys
- WYSIWYG Editor Access: Allows users to use the editor to enter descriptive texts. If you would like to allow any user to enter input using the editor, enable this permission to such a user group.
- Auto Approve Surveys: If the user creates a survey from the front-end you can review the survey before publishing. Use this permission to allow or deny the auto-publish surveys.
- Respond to Surveys: Users can respond to surveys only if this permission is enabled.
- View Results: If you would like users to see a consolidated report (if enabled in survey options), allow this permission.

#### Category Permissions

Above permissions can be set up on category level as well. While creating categories you will be shown the permissions box where you can configure the above permissions for that particular category. If you leave the permission as inherited, the component permissions setup above will take into effect.

## Categories

You need to have at least one category to add surveys. Go to Components->Community Surveys->Categories and create one or more categories.

## Creating Surveys

### Login to the website

To create a survey, you need to log in to the website. Please register to the website if you do not have the login credentials. Once registered, you can use your username and password to log in to the website.

### Access the Community Survey application

You can create surveys from the back-end (since v3.1.0) and front-end. If you prefer to create a survey from the front-end, please make sure to configure permission settings from the Options button on the toolbar.

- **Back-end:** Go to Components->Community Surveys->Surveys and click the New button to start creating a survey.
- Front-end: Access the survey menu from the main menu and you will be shown three buttons, Home, Create Survey, and My Surveys. Click Create Survey button to start creating your survey.

### Basic Details of the survey

The first screen of the survey creation process involves the basic parameters of the survey.

- **Survey Title:** Enter the survey title which is being used to access the survey.
- **Introduction message:** You can enter an introduction message in this text area which will be shown to your users taking the survey. The first screen of the survey response includes this message along with a confidentiality notice if any. This field is optional.
- **End Message:** Enter the message that you would like to show at the end of the survey response. This field can be ignored if the Redirect URL is used.
- **Custom Header:** Enter a brief message that will be shown on top of each page of the survey response. This field is optional.
- **Start Date:** Enter the date from which the survey can accept responses. Optional.
- Close Date: Select the date on which the survey will be closed for taking responses.
- **Maximum Allowed Responses:** Enter a numeric value to restrict the maximum number of responses the survey can accept. Leave blank for an unlimited number of responses.
- **Anonymous Survey:** Select if the survey is anonymous or non-anonymous. A confidentiality notice is shown below the Introduction Message on the first page of the response. And no user identifiable information is captured during the survey response unless there are any such questions present in the survey.
- **Survey Type:** Select the survey type. A survey can be either private or public. A public survey will be listed on the Home page and can be responded to by any user by clicking on it. A private survey can be responded to only through a valid unique survey URL. We will learn about various ways of creating the unique survey URLs at the later stages of this documentation. Note: The site administrator has the right to choose which users can respond to the surveys.
- **Public Report Permissions:** Enabling this option will allow your users to view the aggregate result of the responses received to the survey at the end of his/her response.
- **Redirect URL:** If would like to redirect the user to a custom URL after the user completes his/her response, enter the custom URL in this field. The End Message will be ignored and the page is redirected to a custom URL at the end of the survey response.
- **Display Template:** Disabling this option open the survey response page in full-screen mode. i.e. the site menu and other parts of the website will be hidden and only the survey block will be shown to the user.

After entering the values in the required fields, click the Continue button to create the survey. On clicking the Continue button, your survey will be created and is ready to add new questions to the survey. Once the survey is created, it can be accessed from the My Surveys tab and you can edit it at a later time.

Please note that the survey is locked and editable only to the survey author until the survey is published on the edit questions page.

### Adding Questions

After saving and closing your &#8220;Edit Survey&#8221; form, click on the &#8220;Edit&#8221; button in the &#8220;Questions&#8221; column beside your survey&#8217;s name on the main surveys listing page. On the next screen, you can add the required number of pages to the survey, and add questions to each page. You will be shown three blocks.

- **Pages and Controls:** The top block contains the clickable page numbers and buttons to create a new page, remove a page and finalize the survey. The first page is already created when you first created the survey and you can start adding questions to it. You can add more pages by clicking the New button. You can remove the current page by clicking the Remove button. You can switch to any page at any time by clicking on the page number. Make sure you have saved all the questions before switching pages, otherwise you will lose your changes.
- **Main Question Area:** All your questions are displayed on the main question block. You can add, edit, re-order or remove questions from this block.
- **Toolbar:** On the left side, a floating toolbar will all available question types is shown. You can either click on a question-type link or drag it to the main question area to add a question.

Once a question is added by clicking/dragging the question type from the toolbar, you can enter the required details and save the question. if you want to remove the question, you can click on the small red bullet located in the top right corner of the question. You can re-order the questions on the page by using small up/down arrow bullets on the top-right corner of each question, just beside the remove question button.

#### Question Types

**Page Header:** A page header question can be added to each page which will be shown at the top of all other questions. Only one-page header questions can be added per page. Multiple Choice Questions: You can choose the multiple-choice type from the options located at the bottom part of the question box. Multiple choice question responses are aggregated and the results are shown in Pie/Bar charts. These questions can also be attached with an advanced set of rules to change the flow of the survey responses based on the answers a user has given. We will learn about them in the Survey Rules section of this documentation. A multiple-choice question can be of three types:

- Radio Buttons
- Checkboxes
- Select Box
- Grid Questions: A grid-type question can be used to receive answers to multiple similar questions, with a single question, which has a fixed set of answers. They cannot be used in aggregate results.
- Free Text: You can use these questions to accept the user&#8217;s own answers. They cannot be used in aggregate results. A free-text question can be of three types
- Single Line Text Box
- Multiline Textarea
- Password Textbox

#### Question Fields

Each question has a set of fields that you can enter depending on the question type. Irrespective of the question type, the following fields are common to all question types.

- **Question Title:** Title of the question
- **Question Description:** Description of the question
- **Mandatory:** Flag to indicate the question as mandatory and the user must answer the question to continue the response.

There are other fields specific to the question type

- **Custom Choice:** This option allows users to enter their own answers. Available for Multiple Choice and Grid type questions. Each question must be saved by clicking on the Save button located at the bottom of each question box. You can edit the saved question by clicking anywhere on the question box.
- **Alert:** Editing the question after it receives responses will force the question recreated and you will lose any responses received before. So make sure, you have all questions correct before going live with your survey.

Once all pages are created and questions are added to the pages, click the Finish button on the top control bar to go to the next page &#8211; Configure Rules.

### Configure Rules

Once the finish button is clicked, your survey is ready to take responses. However, there is one more step to make your survey more productive. You can add rules to the questions to alter the flow of the response in the following ways while a user is answering the question:

- Redirect the survey response to a specified page
- Finish the survey response without proceeding to further pages

The rules for the above redirects can be:

- The user answers the specified question
- User DO NOT answer the specified question
- The user selects a specified answer to a specified question (applicable for multiple-choice questions only)
- User DO NOT select a specified answer to a specified question (applicable for multiple-choice questions only)

This step is optional and you can anytime proceed to the next step &#8211; Sharing Survey. A few guidelines are quoted below:

- You can have any number of rules per question, click Add Rule button to add a rule, RED icon beside each rule to delete the rule.
- The rules are validated with your respondent&#8217;s answers and the first matched condition will be taken up for execution on a particular page that your respondent given answers.
- Subsequent rules, if any, are ignored. For example, if you have set the first rule as (if the user answered this question, finish survey), and if your user response matches this condition, all subsequent rules are skipped and the survey will proceed to finalization.
- The rules can be configured only on multiple-choice questions, other questions are not displayed on this page.

## Sharing the Survey

Congratulations, you have successfully created your survey. Now you need to publicize your survey so that you can analyze the responses. You can continue to share the survey page by clicking the Share Survey button, or by clicking the Invite link below the survey title in the My Surveys tab. If it is a public survey, it will be automatically published on the Home tab of the Surveys page. If it is a private survey, you need to invite the users to take the survey. The survey invitation can be sent in different ways. The Survey Invitation page contains three tabs.
- **Survey URL:** A Survey URL is automatically created by the system when the survey is created. Each survey will have its own Survey URL which can be used by any of your users to respond to the survey. You can send the URL through Email or any other communication medium.
- **Unique Survey URLs:** You may want to send different URLs to your users so that you can analyze your user&#8217;s responses. In this case, you can use the Unique Survey Urls tab. Enter the numeric value in the provided text box and click Create Survey URLs button. The system will automatically create the entered number of unique survey urls and will be shown to you on the screen. Copy the URLs and send them via Email or any other communication medium.
- **Address Book:** In this tab, you can compose a mail and send it to your users. There are different steps involved in inviting through this tab
- **Create a contact group:** Click Add Contact Group button and enter the name of the group and click Submit. The page will refresh and the group will be added and shown on the Address Book tab.
- **Add contacts:** Select the contact group added and click Add Contacts button. You will be shown a dialog box where you can add your contacts. Each contact will have a name and email address. After entering the contacts information click Submit to add contacts to the selected contact group.
- **Email Body:** You can enter your own message in the provided text area. You can use placeholders in your message for adding special values as mentioned below
  - **`{NAME}`** will be replaced with the contact name
  - **`{SURVEY_URL}`** will be replaced with the survey URL which users can click to respond to survey
  - **`{SITENAME}`** will be replaced with your site name from Global Configuration

## Reports

Once the invitations are sent, your users can respond to the survey and the results are recorded in the system. The reports can be accessed from two special links located below the Survey Title in the My Surveys tab. You can access the reports in three stages.

- **Dashboard: **You can access individual responses on this page. A timeline graph of all responses received is also shown on this page. A detailed countrywide response count is also shown on this page.
- **Summary Report:** This page shows an aggregate report of responses. Multiple choice questions will be shown in Bar and Pie charts. Grid responses summary is shown in table format. Text answers and custom answers are shown by clicking on the link provided below each question if any.
- **CSV Report:** You can download the responses to a CSV file by clicking the CSV Download button located on the Summary Report page.

- End of documentation **