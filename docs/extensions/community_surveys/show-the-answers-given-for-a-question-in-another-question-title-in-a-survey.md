---
id: show-the-answers-given-for-a-question-in-another-question-title-in-a-survey
title: Show the answers given for a question in another question title in a survey
sidebar_label: Show the answers given for a question in another question title in a survey
sidebar_position: 8
---

Community Surveys has a built-in feature to show answers given for a particular question in another question title. For example, you would like to ask question:

***Which city would you like to go to for your next vacation?***

- *Rome*
- *Venice*
- *Paris*
- *Vienna*

If the user answers, say Venice, then you would like to ask further question:

***What do you like the most in the city Venice?***

This is possible. You can use the answer from first question in your second question. So how to do it? It is simple.

Go to the page where your first question is located in your survey questions edit form and get the ID of the question. Let's say 120 is the ID of first question, use that ID in your second question like below:

***What do you like the most in the city `{QID:120}`?***