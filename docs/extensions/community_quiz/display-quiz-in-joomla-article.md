---
id: display-quiz-in-joomla-article
title: Displaying Quizzes in Joomla! Articles
sidebar_label: Display in Articles
sidebar_position: 6
---

Community Quiz provides flexible ways to embed your quizzes directly within Joomla! articles, allowing you to create rich, interactive educational content or surveys.

There are two primary methods to achieve this:

---

## Method 1: Using the Content Plugin (Recommended)

The **Content - Quizzes** plugin allows you to embed a quiz using a simple shortcode. This is the most seamless way to integrate quizzes into your narrative content.

### Getting Started

1. Go to **Extensions** → **Plugins**.
2. Search for **Content - Quizzes** and ensure it is **Published**.

### Insertion Syntax

You can insert the `{LOADQUIZ}` tag anywhere in your article text. The tag uses a JSON-like format to specify the quiz ID and optional settings.

**Basic Syntax:**
`{LOADQUIZ ["id": QUIZ_ID]}`

* **QUIZ_ID**: Replace this with the numeric ID of your quiz (found in the Quizzes list).

**Advanced Syntax:**
`{LOADQUIZ ["id": 1, "template": "modern", "container": "my-wrapper"]}`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `id` | (Required) | The ID of the quiz to load. |
| `template`| `default` | The UI layout to use (e.g., `default`, `bootstrap5`). |
| `container`| (Random) | A custom CSS class for the wrapper element. |

### Example

If you want to load Quiz ID #5 using the default template, insert this in your article:
`{LOADQUIZ ["id": 5]}`

---

## Method 2: Using the Quiz Form Module

If you prefer using Joomla's native module system, you can use the **Community Quiz - Quiz Form** module. This is useful if you want to display the quiz in a sidebar or use the `loadposition` syntax.

### Steps

1. Go to **Content** → **Site Modules**.
2. Click **New** and select **Community Quiz - Quiz Form**.
3. In the module settings, enter the **Quiz ID** you wish to display.
4. Optionally, set a **Module Position**.

### Displaying in an Article

If you want to place this module inside an article:

1. Assign the module a unique position name (e.g., `article-quiz-1`).
2. In your article, use the Joomla shortcode: `{loadposition article-quiz-1}`.

---

## Best Practices for Embedded Quizzes

1. **Skip the Intro Page**: When embedding a quiz in an article, it's often better to set the quiz to **"Skip Intro"** in the quiz configuration. This allows users to start seeing questions immediately within the article context.
2. **Clear Container**: If you have multiple quizzes on one page, ensure they have unique `container` names if you are using custom CSS to style them.
3. **Check Permissions**: Ensure the quiz has public access if the article is public, or matching access levels to avoid "Unauthorized" messages.
4. **Responsive Design**: Use the `bootstrap5` template if your site uses Bootstrap 5 to ensure the embedded form looks great on all devices.
