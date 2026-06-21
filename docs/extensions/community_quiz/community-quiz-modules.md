---
id: community-quiz-modules
title: Modules
sidebar_label: Modules
---

# Modules

Community Quiz ships three site modules you can place in any template position to surface quizzes, rankings, and a learner's own progress around your site. They are ordinary Joomla modules: add them under **Content → Site Modules**, choose a position, and assign them to the pages you want.

> **Audience:** Site administrators. No technical knowledge needed.

[← Back to Overview](./overview.md)

> **Note:** the rebuilt Community Quiz front-end is a single-page app, so the old "virtual module positions" that injected modules *inside* the quiz layout no longer exist. Use these proper Joomla modules in your template's positions instead.

---

## Featured Quizzes

Shows a list of quizzes to draw people in, for a homepage, a sidebar, or a landing page.

| Setting | What it does |
|---------|--------------|
| **Mode** | Whether to show **featured**, **popular**, or **recent** quizzes. |
| **Category** | Limit the list to one category (or show all). |
| **Count** | How many quizzes to show. |

Use it on your homepage to highlight your best assessments, or in a category page sidebar to suggest related quizzes.

---

## Leaderboard

Shows the top performers, which adds friendly competition and encourages retakes.

| Setting | What it does |
|---------|--------------|
| **Period** | Rank by the last **week**, the last **month**, or **all time**. |
| **Minimum participants** | Hide the leaderboard until enough people have taken part, so it never looks empty. |
| **Count** | How many top performers to list. |

> **Tip:** how names appear (full name, first initial, username, or anonymous) is controlled centrally in **Settings → Leaderboards**, so the module respects your privacy choice.

---

## My Learning

A personal dashboard widget for the logged-in learner. It shows their in-progress and recent attempts and the courses they are enrolled in, with a quick way back in.

- Signed-in learners see their own activity and can resume where they left off.
- Guests see nothing (there is no personal activity to show), so it is safe to place on shared pages.

Place it in a member area, a dashboard page, or a sidebar that logged-in users see.

---

## Placing a module

1. Go to **Content → Site Modules** and click **New**.
2. Pick one of the three Community Quiz modules.
3. Choose a **position** in your template and set the **status** to published.
4. Configure the module's options (above).
5. Set **Menu Assignment** to control which pages it appears on.
6. Save.

> **Tip:** keep modules responsive-friendly. A leaderboard or featured list works well in a sidebar or a full-width row; very long lists can crowd a narrow column on mobile.

---

## Related

- [Display in Articles](./display-quiz-in-joomla-article.md) - drop a single quiz launch card inside an article.
- [Installation & Configuration](./installing-and-configuring-community-quiz.md#site-menu-items) - menu items for full quiz and course listings.
- [Courses & Enrollment](./courses.md) - the courses surfaced by the My Learning module.
