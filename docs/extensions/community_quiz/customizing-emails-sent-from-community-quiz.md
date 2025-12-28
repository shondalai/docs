---
id: customizing-emails-sent-from-community-quiz
title: Customizing Email Templates
sidebar_label: Email Customization
sidebar_position: 2
---

Community Quiz sends various automated email notifications to users and administrators. You can fully customize these emails using the built-in template system, which supports dynamic placeholders for personalized content.

---

## Where to Find Email Templates

To manage your email notifications:

1. Go to **Components** → **Community Quiz** → **Email Templates**.
2. Here you will see a list of templates for different events (e.g., Quiz Passed, Quiz Failed, New Quiz Notification).
3. Click on any template to edit its subject and body.

---

## Supported Placeholders (Shortcodes)

Placeholders are special tags wrapped in curly braces that are automatically replaced with real data when the email is sent.

| Placeholder | Description | Example Replacement |
|-------------|-------------|---------------------|
| `{QUIZ_TITLE}`| The title of the quiz. | `Geography 101` |
| `{SITENAME}` | The name of your website. | `My Education Portal` |
| `{QUIZ_URL}` | A direct link to the quiz page. | `https://site.com/quiz/1...` |
| `{CATEGORY}` | The title of the quiz category. | `Science` |
| `{AUTHOR_NAME}`| The name of the person who created the quiz. | `Admin` |
| `{NAME}` | The name of the email recipient. | `Jane Doe` |
| `{MARKS}` | Total marks scored by the student. | `95` |

---

## Available Template Types

Community Quiz uses specific templates for different scenarios. You can create multiple versions of these templates for different languages.

1. **Results Email**: Sent when a user explicitly requests to email their results.
2. **Quiz Passed Notification**: Sent automatically when a user achieves the cutoff score.
3. **Quiz Failed Notification**: Sent automatically when a user fails to reach the cutoff score.
4. **Admin Notification**: Sent to administrators when a new quiz is submitted or a user completes a quiz.

---

## Advanced Customization Tips

### HTML in Emails

The email editor supports standard HTML. You can use it to add branding, colors, and structured layouts to your emails.

### Language-Specific Templates

If your site is multilingual, you can create separate templates for each language. Community Quiz will automatically select the template that matches the recipient's language site tag (e.g., `en-GB`, `fr-FR`).

### Attachment Support

For certain results-based emails, Community Quiz can automatically attach a PDF copy of the user's response or certificate. This is controlled in the **Global Configuration** settings.

---

## Troubleshooting

- **Placeholders not working?** Ensure you are using uppercase letters and that the placeholders are appropriate for the template type (e.g., `{MARKS}` only works for result-related emails).
- **Emails not sending?** Ensure your Joomla! mail settings are correctly configured and check if **Skip Email Queue** is enabled in the Community Quiz options if you want immediate delivery.
