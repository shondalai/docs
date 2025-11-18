---
id: shortcodes-supported-by-community-quiz-certificates
title: Shortcodes supported by Community Quiz certificates
sidebar_label: Shortcodes supported by Community Quiz certificates
sidebar_position: 1
---

The following shortcodes can be inserted into the certificate PDF files. The values will be automatically replaced according to the user&#8217;s response. Add the following shortcodes in the certificate template (Components -> Community Quiz -> Certificates)

- `{QUIZ_ID}` &#8211; The ID of the quiz

- `{QUIZ_TITLE}` &#8211; Quiz title

- `{USER_NAME}` &#8211; The responder&#8217;s name

- `{SCORE}` &#8211; The marks scored by the user

- `{DATE}` &#8211; The date the user response is started on

The answers submitted by the user can also be inserted into the PDF certificate. Make sure the &#8220;**Content &#8211; Quotes Fields**&#8221; plugin is enabled. Add the following shortcode format to the certificate template.

`{QUIZFIELD }`

Replace QUIZ_ID with ID of the quiz and QUESTION_ID with ID of the question.

Limitation: This feature is limited to textbox and radio-type questions only.