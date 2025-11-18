---
id: how-url-parameter-questions-work-in-community-surveys
title: How URL Parameter questions work in Community Surveys
sidebar_label: How URL Parameter questions work in Community Surveys
sidebar_position: 15
---

URL Parameter question type is introduced Community Surveys v5.3.4. The typical use case for this question type are:

- You would like to separate different set of users into groups for your reporting and want to know which group the user belongs to
- You would like to record certain the values from the user response without needing the user to enter in survey form, i.e. save the values when accessing the survey URL.

To create the URL Parameter (Hidden) questions,

- edit your survey and click on the URL Parameter (Hidden) question type under the Special category.
- Now enter the title of the question and the URL parameter name. The URL parameter name must adhere to the browser URL standards.
- That&#8217;s all. When you are inviting your users via Unique Survey URLs or Global Survey URL, just add this URL parameter name along with its value to the survey URL. For example, if your URL parameter name is username, then your survey URL might be like *https://demo.corejoomla.com/surveys/test-survey?username=test*
- When the user access above survey URL, the answer &#8220;test&#8221; will be automatically saved in the URL Parameter question.