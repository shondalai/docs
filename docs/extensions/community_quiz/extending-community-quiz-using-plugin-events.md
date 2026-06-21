---
id: extending-community-quiz-using-plugin-events
title: Integrating & Extending Community Quiz
sidebar_label: Integrations & Extending
---

# Integrating & Extending Community Quiz

Community Quiz is built to work with the rest of your Joomla site and the wider Shondalai suite. This guide explains the integration points: points and activity streams, e-commerce, search, privacy, and the shared core library that powers email, storage, PDF, and AI.

> **Audience:** Administrators connecting other extensions, and developers building integrations.

[← Back to Overview](./overview.md)

> **Note:** the rebuilt Community Quiz does not expose the old custom PHP events (such as `onQuizAfterPassed`). Integration now flows through the shared Shondalai core library and standard Joomla plugin groups, which are more robust and consistent across the suite.

---

## Points and activity streams

Community Quiz can award points and post activity-stream items to whatever gamification or community system you run (Sociable, Rewardify, JomSocial, EasySocial, AlphaUserPoints, CjForum, and similar), through the shared core library's integration service. You do not write any code: install and configure your points/activity extension, and Community Quiz feeds it these moments:

| Moment | Rule | Who benefits |
|--------|------|--------------|
| A quiz is published for the first time | `com_communityquiz.new_quiz` | The quiz author |
| A learner submits an attempt | `com_communityquiz.new_response` | The learner |
| An attempt is finalised as a pass | `com_communityquiz.passed_quiz` | The learner |
| An attempt is finalised as a fail | `com_communityquiz.failed_quiz` | The learner |

The pass and fail rules fire when the result is final: immediately for auto-marked quizzes, or after a grader finishes for quizzes with essays or uploads (see [Grading & Review](./grading.md)). Awards are advisory and non-blocking: if no points system is installed, quizzes work exactly the same.

> **Tip:** map these four rules to point values and activity messages in your gamification extension to turn assessments into a motivating, social experience.

---

## Selling access (EasyCommerce)

Community Quiz integrates with **EasyCommerce** to sell quizzes and courses and grant access automatically on payment. A connector plugin links the two: when an order is paid the buyer is entitled (and enrolled, for courses), and when it is refunded or a subscription lapses, access is removed. This is covered in full in [Selling Quizzes & Courses](./selling-quizzes-and-courses.md).

---

## Search (Smart Search)

The Smart Search plugin indexes your published quizzes and courses so they appear in Joomla's site search. Enable **Smart Search - Community Quiz** under Plugins, then run an index from **Components → Smart Search**. New and changed items are picked up as you publish.

---

## Privacy and user lifecycle

Two plugins keep you compliant with Joomla's privacy tools and tidy when accounts change:

- **Privacy - Community Quiz** handles data export and removal requests for a learner's attempts, enrolments, and credentials through Joomla's Privacy component.
- **User - Community Quiz** decides what happens to a learner's Community Quiz data when their Joomla account is deleted.

Retention periods for attempts, audit logs, and proctoring media are set in **Settings → Privacy**.

---

## Scheduled tasks

The **Task - Community Quiz** plugin plugs into Joomla's task scheduler to run background jobs such as reminders and scheduled reports. Configure these under **System → Scheduled Tasks**, choosing the Community Quiz task types.

---

## Embedding in content

The **Content - Community Quiz** plugin lets editors drop a quiz launch card into any article with a shortcode. See [Display in Articles](./display-quiz-in-joomla-article.md).

---

## The shared core library

Several capabilities are provided by `lib_shondalai_core`, the shared library installed with the package:

- **Email** delivery and templating (see [Email Customization](./customizing-emails-sent-from-community-quiz.md)).
- **Storage** for uploads (local or S3, set in Settings → Storage).
- **PDF** rendering for certificates (see [Certificates](./certificates.md)).
- **Payments** through EasyCommerce.
- **Integrations** with points and activity systems (the rules above).

Because these live in one shared library, behaviour is consistent across all Shondalai extensions on your site, and an upgrade to the library benefits every component at once.

---

## For developers

There is no separate custom event API to learn. Integrate by:

- Building a points/activity adapter that responds to the gamification rules listed above.
- Writing standard Joomla plugins against the groups Community Quiz participates in (content, user, finder, privacy, task, and the EasyCommerce connector group).
- Using the shared core library's services where you need email, storage, PDF, or integration features.

This keeps integrations aligned with Joomla conventions and stable across Community Quiz updates.

---

## Related

- [Selling Quizzes & Courses](./selling-quizzes-and-courses.md) - the EasyCommerce integration in detail.
- [Email Customization](./customizing-emails-sent-from-community-quiz.md) - the email layer of the core library.
- [Installation & Configuration](./installing-and-configuring-community-quiz.md) - the plugins that ship in the package.
