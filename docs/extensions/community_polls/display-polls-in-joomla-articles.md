---
id: display-polls-in-joomla-articles
title: Display polls in Joomla! articles
sidebar_label: Display polls in Joomla! articles
sidebar_position: 5
---

Community Polls comes with multiple modules and plugins which can be used to embed a poll on your site anywhere. Here is the brief list.

## Random Poll module

You can display chosen poll or randomly selected poll in any module position of your site. You can display this module inside a Joomla article using loadmodule syntax. Please [read the this documentation](http://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F) to know more about it.

## Content Polls plugin

This plugin is designed specifically to add a poll inside any Joomla article. Joomla content component (Articles) triggers all content plugins automatically. So when you publish this plugin from plugin manager, Joomla will trigger this module.

### How does it work?

The plugin search for a specific syntax as mentioned below and loads the poll as per the syntax given:

`{CONTENTPOLL }`

Where POLLID is the ID of the poll you would like to embed. You can customize the poll display with multiple options which are similar to Polls Anywhere function. You can read them here.

## Polls Anywhere

If you have enabled Polls Anywhere in your component options, the JavaScript code to embed a poll is displayed on the poll details page. You can simply copy and paste the code inside your article HTML code. Please note that your editor may strip JavaScript code if you are editing an article from the front end. In the back-end, you can toggle the editor and add the script code and save. Or use a Joomla editor like Code Mirror which can accept scripts if your user permissions allow.

You can read more about Polls Anywhere script code customization here.
[Polls Anywhere &#8211; Advanced Concepts](https://docs.shondalai.com/community_polls/polls_anywhere_advanced_concepts/)