---
id: customizing-emails-sent-from-community-quiz
title: Customizing Emails sent from Community Quiz
sidebar_label: Customizing Emails sent from Community Quiz
sidebar_position: 2
---

Community Quiz uses its own templates (defined under Extensions -> Community Quiz -> Emal Templates) to send email notifications. The email templates support a few customizations such as inserting dynamic content using tags. The following are the tags that you can use inside the email templates and they will be replaced automatically when the emails are sent to the users.

- `{QUIZ_TITLE}` &#8211; Title of the quiz. This tag is supported in both the Email Subject and Email Description fields.
- `{SITENAME}` &#8211; Name of the site as you defined in the Global Configuration
- `{QUIZ_URL}` &#8211; The URL of the quiz
- `{CATEGORY}` &#8211; The quiz category title
- `{AUTHOR_NAME}` &#8211; Name of the logged-in user
- `{NAME}` &#8211; The name of the user to whom the mail being sent
- `{MARKS}` &#8211; Marks scored by the user for a quiz response