---
id: shortcodes-supported-by-community-quiz-certificates
title: Certificate Shortcodes
sidebar_label: Certificate Shortcodes
sidebar_position: 1
---

Community Quiz allows you to highly customize your certificates using dynamic shortcodes. These placeholders are automatically replaced with specific data from the quiz or the user's response when the certificate is generated.

## Global Shortcodes

The following shortcodes are available in any certificate template. You can use them anywhere in the certificate description (Components -> Community Quiz -> Certificates).

| Shortcode | Description | Example Replacement |
|-----------|-------------|---------------------|
| `{QUIZ_ID}` | The unique ID of the quiz. | `42` |
| `{QUIZ_TITLE}`| The title of the quiz the user completed. | `PHP Advanced Certification` |
| `{USER_NAME}` | The name of the user who took the quiz. | `John Doe` |
| `{SCORE}` | The numerical score/marks achieved by the user. | `85` |
| `{DATE}` | The date the quiz was completed. | `October 24, 2025` |

---

## Question-Specific Shortcodes (Quiz Fields)

You can insert specific answers submitted by the user directly into the certificate. This is useful for creating personalized certificates that show exactly how a user answered certain questions (e.g., their specialized field, company name, or a custom text response).

### Preparation

To use this feature, ensure the **Content - Quiz Fields** plugin is enabled in your Joomla Plugin Manager.

### Syntax

The syntax for question-specific fields uses a JSON-like format within the brackets.

**Format:**
`{QUIZFIELD ["question": QUESTION_ID]}`

* **QUESTION_ID**: Replace this with the numeric ID of the question. You can find the Question ID in the **Questions** list in the Community Quiz backend.

**Examples:**
* `{QUIZFIELD ["question": 12]}` — Inserts the user's answer for question ID 12.
* `{QUIZFIELD ["question": 5]}` — Inserts the user's answer for question ID 5.

### Supported Question Types

This feature currently supports the following question types:
* **Single Line/Multi Line Text** (inserts the text entered)
* **Radio Buttons/Checkboxes/Dropdowns** (inserts the title of the selected option)
* **Image Selection** (inserts the title of the selected image)
* **Matching/Grid Questions** (inserts the relationship, e.g., "Term = Definition")

---

## Styling Your Certificate

Since certificates are generated as PDFs, you can use standard HTML and CSS within the certificate editor to style them.

### Best Practices

1. **Use Tables for Layout**: PDF generation engines often handle `<table>` layouts more reliably than complex CSS Flex/Grid.
2. **Absolute Positioning**: You can use inline styles like `style="position: absolute; top: 100px; left: 50px;"` to place text precisely over a background image.
3. **Background Images**: You can set a background image for your certificate using a full-width `<div>` or a table layout.
4. **Font Formatting**: Use standard HTML tags like `<b>`, `<i>`, and `<h1>` to format your shortcodes.

**Example Template Fragment:**

```html
<div style="text-align: center; font-family: sans-serif;">
    <h1>CERTIFICATE OF COMPLETION</h1>
    <p>This is to certify that</p>
    <h2 style="color: #2c3e50;">{USER_NAME}</h2>
    <p>has successfully passed the quiz</p>
    <h3>{QUIZ_TITLE}</h3>
    <p>with a score of <b>{SCORE}</b></p>
    <p>Date: {DATE}</p>
</div>
```

---

## Troubleshooting

* **Shortcodes not replacing?** Check for typos in the brackets and ensure you are using uppercase for the standard shortcodes (e.g., `{SCORE}` not `{score}`).
* **Empty Quiz Fields?** Verify that the Question ID is correct and that the **Content - Quiz Fields** plugin is enabled.
* **Date Format**: The date format can be customized in the **Community Quiz Global Configuration** under the **Shared Settings** tab.
