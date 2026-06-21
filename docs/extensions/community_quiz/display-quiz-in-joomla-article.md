---
id: display-quiz-in-joomla-article
title: Displaying Quizzes in Articles
sidebar_label: Display in Articles
---

# Displaying Quizzes in Articles

You can promote a quiz from inside any Joomla article using a simple shortcode. This drops a tidy **launch card** into your content, so readers can jump straight from your article into the quiz.

> **Audience:** Content editors. No technical knowledge needed.

[← Back to Overview](./overview.md)

---

## How it works

Community Quiz ships a content plugin, **Content - Community Quiz**, that scans your articles for a shortcode and replaces it with a launch card. The card shows the quiz's label (Exam or Quiz), its title, a short intro, and a **Launch** button that opens the quiz. The quiz itself runs on its own page (the full-screen player), not inside the article, which keeps the reading experience clean and the assessment distraction-free.

### Enable the plugin first

1. Go to **System → Manage → Plugins**.
2. Search for **Content - Community Quiz**.
3. Make sure it is **Enabled**.

---

## Inserting a quiz

Add the shortcode anywhere in an article's text:

```text
{communityquiz id="123"}
```

Replace `123` with the ID of the quiz you want to feature. An unquoted form also works:

```text
{communityquiz id=123}
```

### Finding the quiz ID

Open **Quizzes** in the Community Quiz admin and note the ID of the quiz you want. That number is what goes in the shortcode.

---

## When the card appears (and when it does not)

The launch card only renders when all of these are true:

- The quiz is **published**.
- The quiz has a **published version** (it has been published at least once, not just saved as a draft).
- The reader's access level **includes** the quiz's access level.

If any of these is not met, the shortcode is quietly removed from the article, so visitors never see a broken tag or a quiz they are not allowed to open. This means a draft or restricted quiz simply will not show until it is ready and permitted.

---

## Other ways to surface quizzes

The shortcode is best for featuring one quiz inside a narrative. For other needs:

- **A whole list of quizzes or courses:** create a [site menu item](./installing-and-configuring-community-quiz.md#site-menu-items) of type Quizzes or Courses.
- **A direct link:** link to a quiz's own page from anywhere (a menu, a button, another article).
- **Site widgets** (featured quizzes, a leaderboard, a learner's progress): use the [modules](./community-quiz-modules.md) in a module position.

---

## Best practices

1. **One feature per article.** A single launch card reads better than several. For a set of quizzes, link to a Quizzes menu item instead.
2. **Set the access levels to match.** If the article is public, the quiz should be public too, or the card will not appear for guests.
3. **Introduce it.** A sentence of context before the shortcode ("Test yourself with the quiz below") improves click-through.
4. **Publish the quiz first.** A quiz that has only ever been saved as a draft will not show until you publish it.

---

## Troubleshooting

- **The card does not appear.** Check the plugin is enabled, the quiz is published and has a published version, and the reader's access level includes the quiz. Confirm the ID is correct.
- **The shortcode shows as plain text.** The content plugin is disabled, or another plugin is processing the article first. Enable **Content - Community Quiz**.
- **The wrong quiz appears.** Double-check the ID in the shortcode against the Quizzes list.

---

## Related

- [Modules](./community-quiz-modules.md) - sidebar widgets for featured quizzes, leaderboards, and learner progress.
- [Installation & Configuration](./installing-and-configuring-community-quiz.md#site-menu-items) - creating menu items for quizzes and courses.
- [Quiz & Exam Builder](./quiz-builder.md) - building the quiz you want to feature.
