---
id: display-quiz-in-joomla-article
title: Display quiz in Joomla! article
sidebar_label: Display quiz in Joomla! article
sidebar_position: 6
---

There are two ways to display a quiz in Joomla! articles.

### Using Quiz Form module

- Open your quiz form module

- Enter your quiz id in the field provided

- Add a custom position name such as &#8220;quiz_position_1&#8221; in module position

- Load the custom module position entered above using Joomla! short code syntax.

See below url for more information on how to display a module in Joomla! articles.

[https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F)

### Using Content Plugin

This option is applicable for Community Quiz v4.3.5 and later

The component package comes with quizzes content plugin. Make sure this plugin is published. Now edit your article and following code into your article:

`{LOADQUIZ }`

Using the container element to explicitly mention the wrapper block which contains the quiz.

<div id="container-name-1"></div> 
 
`{LOADQUIZ }`

Replace QUIZID with the ID of your quiz.