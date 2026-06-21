---
id: installing-and-configuring-community-quiz
title: Installing and Configuring Community Quiz
sidebar_label: Installation & Configuration
---

# Installing and Configuring Community Quiz

This is the reference for installing Community Quiz, understanding what ships in the package, and configuring the component. For a guided first run, start with [Getting Started](./getting-started-with-community-quiz.md).

> **Audience:** Joomla administrators. No coding required.

[← Back to Overview](./overview.md)

---

## What is in the package

The installable package (`pkg_communityquiz.zip`) installs everything in one step:

| Extension | Type | What it does |
|-----------|------|--------------|
| `com_communityquiz` | Component | The main app: builder, courses, grading, certificates, commerce, reports. |
| `lib_shondalai_core` | Library | Shared Shondalai library (email, storage, PDF, payments, integrations). |
| `plg_system_licensing` | System plugin | Handles license activation across the Shondalai suite. |
| `plg_easycommerce_communityquiz` | Plugin | Grants access when a quiz or course is purchased through EasyCommerce. |
| `plg_task_communityquiz` | Plugin | Scheduled tasks (reminders, scheduled reports) via Joomla's task scheduler. |
| `plg_user_communityquiz` | Plugin | Handles learner data when a Joomla user account is deleted. |
| `plg_content_communityquiz` | Plugin | Embeds a quiz launch card in articles. See [Display in Articles](./display-quiz-in-joomla-article.md). |
| `plg_privacy_communityquiz` | Plugin | GDPR export and removal of learner data. |
| `plg_finder_communityquiz` | Plugin | Smart Search indexing of quizzes and courses. |
| `mod_communityquiz_featured` | Module | A widget listing featured, popular, or recent quizzes. |
| `mod_communityquiz_leaderboard` | Module | A leaderboard of top performers. |
| `mod_communityquiz_mylearning` | Module | A learner's in-progress attempts and enrolled courses. |

The modules are documented in [Modules](./community-quiz-modules.md).

---

## System requirements

- **Joomla:** 6 (built for Joomla 6; the codebase also targets 4 and 5).
- **PHP:** 8.1 or later.
- **Database:** MySQL (UTF-8).

The PHP image library (GD) is recommended so certificate backgrounds render fully, but the component degrades gracefully without it.

---

## Installation

1. Download `pkg_communityquiz.zip` from your account.
2. In the administrator, go to **System → Install → Extensions**.
3. Drag the package onto the **Upload Package File** tab (or browse to it).
4. Wait for the success message confirming the component, plugins, modules, and library installed.
5. Open **Components → Community Quiz** to launch the dashboard.

> **Tip:** the plugins ship disabled or with safe defaults. Enable the ones you need under **System → Manage → Plugins** (search for "communityquiz"). The EasyCommerce, content, finder, and privacy plugins only do their job once enabled.

### Activating your license

Community Quiz uses the shared Shondalai licensing system. Open the **License** panel from the dashboard sidebar, enter your key (or sign in to your Shondalai account), and activate this site. An active license enables one-click updates. Licensing is handled by the shared `plg_system_licensing` plugin, so the same key activation works across the suite.

---

## The admin dashboard

Open **Components → Community Quiz** and you are in the app. The left navigation is grouped by task:

| Group | Areas |
|-------|-------|
| **Overview** | Dashboard, Reports and analytics. |
| **Author** | Quizzes, Exam builder, Question banks. |
| **Learn** | Courses, Enrolments. |
| **Deliver** | Scheduling, Attempts, Grading, Certificates. |
| **Organisation** | Users and roles, Email templates, Commerce, Migration, Settings. |

Everything happens inside this app; you rarely return to Joomla's classic list views.

---

## Settings

All component options live in the **Settings** area of the app (stored internally and edited through the SPA), **not** in Joomla's component **Options** button. The Options button holds only the access-control rules.

Settings are organised into groups:

| Group | What you control |
|-------|------------------|
| **General** | Platform name, support email, default timezone and language, guest access to quizzes. |
| **Appearance** | Theme colour preset, light/dark/auto mode, soft or sharp style, density, and custom theme tokens. |
| **Assessment** | Default pass mark, time limit, attempts, negative marking, partial credit, navigation mode, integrity level, autosave, and answer-release timing applied to new quizzes. |
| **Question bank** | Approval workflow, second-reviewer requirement, lock-after-publish, and exposure control. |
| **Certificates** | Issue-on-pass, default validity period, the public verification page and its domain, and Open Badge support. See [Certificates](./certificates.md). |
| **Courses** | Enable courses, enrolment model, content drip, ratings, and default completion rule. See [Courses & Enrollment](./courses.md). |
| **Leaderboards** | Enable leaderboards, how names are displayed, default period, and minimum participants. |
| **Commerce** | Show the store, enable selling, default currency, and the EasyCommerce store. See [Selling Quizzes & Courses](./selling-quizzes-and-courses.md). |
| **Privacy** | Retention periods for attempts, audit logs, and proctoring media. |
| **Emails** | Sender addresses, branding (header, logo, colour, footer), the admin alert address, and a notification-preferences link. See [Email Customization](./customizing-emails-sent-from-community-quiz.md). |
| **Storage** | Where uploaded files live (local or S3), the upload size limit, and S3 credentials. |
| **Developer** | Developer mode and the dev server URL (for building the front-end). Leave off in production. |

> **Tip:** the **Assessment** group sets the defaults for *new* quizzes. Changing a default does not alter quizzes you already built; each quiz keeps its own settings.

---

## Permissions and roles

Community Quiz combines Joomla's standard access control with a set of specialised roles.

### Standard permissions

Set these under the component **Options → Permissions** tab (per user group, and overridable per category):

| Permission | Allows |
|------------|--------|
| **Configure ACL & Options** | Full administrative control. |
| **Access Administration Interface** | Open the component in the administrator. |
| **Create** | Create quizzes, courses, and questions. |
| **Delete** | Delete items. |
| **Edit** / **Edit Own** | Edit any / only own items. |
| **Edit State** | Publish, unpublish, archive, and trash. |

### Specialised roles

Beyond the standard actions, Community Quiz defines roles for assessment work, granted under **Users and roles** in the app:

| Role | Purpose |
|------|---------|
| **Author** | Create and edit quizzes and questions. |
| **Reviewer** | Approve items in the review/approval workflow. |
| **Grader** | Mark essays, uploads, recordings, and assessor checklists. See [Grading & Review](./grading.md). |
| **Proctor** | Monitor proctored exams. |
| **Exam manager** | Manage scheduling, attempts, and results release. |
| **Course manager** | Manage course structure and enrolments. |
| **Commerce manager** | Manage pricing, plans, and bundles. |
| **Certificate issuer** | Issue and revoke credentials. |

> **Tip:** roles can be scoped, for example a grader for one set of exams only. Combine them with the assignment tools in Grading and Enrolments so each person sees just their work.

---

## Categories

Community Quiz uses Joomla's own category system, so categories behave exactly as they do elsewhere in Joomla (nesting, access levels, language). There are separate category contexts for **quizzes**, **courses**, and **questions**. Manage them under **Components → Categories**, and assign a category when you build a quiz or course.

---

## Site menu items

Create menu items so learners can reach your content. Under **Menus → Add New Menu Item → Community Quiz**, the available types are:

| Menu type | Shows |
|-----------|-------|
| **Community Quiz app** | The default app home (the front-end SPA). |
| **Quizzes** | A list of available quizzes. |
| **Courses** | A list of courses. |
| **Categories** | A browsable list of categories. |
| **Category** | The contents of one category. |
| **Store** | The commerce catalog (plans and bundles). |
| **Verify a credential** | The public certificate verification page. |

---

## Keeping it updated

With an active license, updates appear under **System → Update → Extensions**, the same as any Joomla extension. Always back up before a major update.

---

## Getting help

- **Documentation:** the other guides in this section.
- **Support:** [Get Support](https://shondalai.com/get-support/).
- **Updates:** **System → Update → Extensions**.

---

## Related

- [Getting Started](./getting-started-with-community-quiz.md) - the guided first run.
- [Quiz & Exam Builder](./quiz-builder.md) - building assessments.
- [Modules](./community-quiz-modules.md) - the site widgets in the package.
- [Email Customization](./customizing-emails-sent-from-community-quiz.md) - the notifications it sends.
