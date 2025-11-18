---
id: translating-surveys
title: Translating Surveys
sidebar_label: Translating Surveys
sidebar_position: 5
---

### Introduction

Community Surveys supports multiple languages through a built-in translation feature. So you need not create a separate survey for each language. To start with the translations, you need to fully set up your survey first which includes:

- Your survey title and descriptions
- Your survey questions and answers

Once you setup your survey, close the survey and go back to the surveys listing page. You can see the Translate link below your survey title on the listing page. Click on it.

### Adding language

Every language that you need to translate must be created first. In the translations page, add your desired language by clicking on the New button. Enter details of the new language such as &#8220;Language&#8221;, &#8220;Sef Key&#8221; and &#8220;Status&#8221;. Sef Key must be a unique string across all languages of a particular survey. This string is used to determine the language through which the user is responding to your survey.

### Adding translation

Once you setup the language, you can now click on the translate link of the language that you just added and start adding your language translations. The translations tool will show every string from your survey such as Survey Title, Survey Description, Survey End Text, Question Title, Question Description, Answers and so on. You can add translations by clicking on each entry of these strings and press enter to save the translation.

### Using translations to respond to the survey

Once you added the translation, there are two ways the translation can be automatically applied when a user responding to the survey.

- If your site is multilingual and you have already set up the Joomla! language, then whatever the language the user is using on your site will be used. Make sure the translation is available for the language, otherwise default English will be used.
- Pass &#8220;lang=LANGUAGE&#8221; parameter to your survey URL, where LANGUAGE is your Sef Key parameter. For example, your Sef Key parameter is es, then your survey URL might look like *mysite/survey/test-survey?lang=es*

The survey engine will now take care of rendering the correct language strings. Please note that the language translations are used only for responding to your surveys and not for reporting purposes.