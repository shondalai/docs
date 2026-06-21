---
id: getting-started-with-community-quiz
title: Getting Started with Community Quiz
sidebar_label: Getting Started
---

# Getting Started with Community Quiz

This guide takes you from a fresh install to your first published quiz that learners can take on your site. It assumes no prior knowledge of the component.

> **Audience:** Joomla administrators and content authors setting up Community Quiz for the first time.

[← Back to Overview](./overview.md)

For full installation detail and the complete settings reference, see [Installation & Configuration](./installing-and-configuring-community-quiz.md). This page is the quick, guided path.

---

## Step 1: Install the package

1. Download `pkg_communityquiz.zip` from your account.
2. In the Joomla administrator, go to **System → Install → Extensions**.
3. Drag the package onto the **Upload Package File** tab.
4. Wait for the success message. The installer adds the component, its modules and plugins, and the shared Shondalai core library.

To confirm it installed, open **Components → Community Quiz**. You should land on the Community Quiz dashboard.

> **Tip:** if the Components menu entry does not appear, go to **System → Manage → Extensions**, check that Community Quiz is enabled, and reload the administrator.

---

## Step 2: Get to know the dashboard

Community Quiz runs as a single app inside your administrator. The left navigation groups everything by what you are doing:

- **Author** - Quizzes, Exam builder, Question banks.
- **Learn** - Courses, Enrolments.
- **Deliver** - Scheduling, Attempts, Grading, Certificates.
- **Organisation** - Users and roles, Email templates, Commerce, Settings.

You do not need all of these on day one. To publish a first quiz you only need the builder.

---

## Step 3: Set your basics in Settings

Open **Settings** from the navigation and review a few things before you build:

- **General** - your platform name, support email, and default timezone.
- **Appearance** - the theme colour, light/dark mode, and density of the admin and player.
- **Assessment** - sensible defaults applied to new quizzes (pass mark, attempts, navigation, integrity level). You can override these per quiz later.

All Community Quiz options live here in Settings, not in Joomla's component **Options** button (which only holds the access-control rules). Save when you are done.

> **Tip:** the Assessment defaults are a real time-saver. Set them once to match how your organisation usually assesses, and every new quiz starts that way.

---

## Step 4: Set up who can do what (permissions)

Community Quiz uses Joomla's access control plus a few roles of its own. Open the component **Options** (the Joomla toolbar button) → **Permissions** tab to set the standard actions (create, edit, delete, manage), and use **Users and roles** inside the app to grant specialised roles such as **author**, **reviewer**, **grader**, and **certificate issuer**. See [Installation & Configuration](./installing-and-configuring-community-quiz.md#permissions-and-roles) for the full list.

For a first quiz as a Super User you can skip ahead; you already have full access.

---

## Step 5: (Optional) Create a category

Categories help you organise quizzes and courses and power browsing on the site. Community Quiz uses Joomla's own categories. Create them under **Components → Categories** (choose the Community Quiz context), or just leave a quiz uncategorised for now.

---

## Step 6: Build your first quiz

1. Go to **Quizzes** and create a new assessment, or open the **Exam builder**.
2. Choose the **kind** (Exam, Quiz, or Survey), give it a **title**, and optionally a category.
3. In the **Structure** tab, add a section and add a few questions to it. Start with a couple of **Single choice** questions to keep it simple.
4. Set a **pass mark** on the **Scoring** tab (or accept your Assessment default).
5. Click **Save draft** as you go.

The builder has seven tabs (Structure, Blueprint, Scoring, Delivery, Integrity, Certificate, Review & publish). You do not need them all for a first quiz. The full walkthrough is in the [Quiz & Exam Builder](./quiz-builder.md) guide, and the writing of individual questions is covered in [Question Types](./question-types-supported-by-community-quiz.md).

---

## Step 7: Publish

Open the **Review & publish** tab. It shows a readiness checklist (a saved draft, at least one section, enough approved questions, a scoring scheme, and an integrity level). When the checks pass, click **Publish**. Publishing creates a frozen version that learners take; your later edits stay in a draft until you publish again.

---

## Step 8: Add a site menu item

Learners reach your quizzes through a Joomla menu item.

1. Go to **Menus → [your menu] → Add New Menu Item**.
2. For **Menu Item Type**, choose **Community Quiz**, then pick one of its types:
   - **Quizzes** - a list of available quizzes.
   - **Courses** - a list of courses.
   - **Community Quiz app** - the default app home.
   - **Verify a credential** - the public certificate verification page.
3. Give it a title and save.

---

## Step 9: Take it as a learner

1. Open your site in a private/incognito window (or log in as a test user).
2. Navigate to the menu item you created and open your quiz.
3. Answer the questions and submit.
4. Confirm the result and, if you set one up, the certificate.

Back in the administrator, check **Attempts** to see the recorded attempt and its score.

---

## Next steps

- **Score it your way:** [Scoring Guide](./scoring-guide.md)
- **Mark essays and uploads:** [Grading & Review](./grading.md)
- **Award credentials:** [Certificates](./certificates.md)
- **Build a course:** [Course Builder](./course-builder.md) and [Courses & Enrollment](./courses.md)
- **Charge for access:** [Selling Quizzes & Courses](./selling-quizzes-and-courses.md)
- **Embed a quiz in an article:** [Display in Articles](./display-quiz-in-joomla-article.md)
- **Show widgets on your site:** [Modules](./community-quiz-modules.md)
