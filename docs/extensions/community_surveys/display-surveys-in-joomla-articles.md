---
id: display-surveys-in-joomla-articles
title: Display surveys in Joomla! articles
sidebar_label: Display surveys in Joomla! articles
sidebar_position: 18
---

Community Surveys v4 comes with a content plugin which can be used to embed public survey on your Joomla! article.

## Content Plugin

This plugin is designed specifically to add a survey inside any Joomla article. Joomla content component (Articles) triggers all content plugins automatically. So when you publish this plugin from plugin manager, Joomla will trigger this plugin.

### How does it work?

The plugin search for a specific syntax in your article as mentioned below and loads the survey:

`{LOADSURVEY }`

Where SURVEYID is the ID of the survey you would like to embed.

## Survey Form Module

If you are using Community Surveys v3, you can load a survey into Joomla! article using below process

- Publish your Survey Form module in any custom module position, for example, &#8220;mysurvey_module&#8221;. You can type in this position name in your module position field of your module settings.
- Now load your module into your article using following method: [https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F)