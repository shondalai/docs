---
title: Write and publish email templates
description: Customize notification wording, branding, languages, and delivery settings without changing code.
---

Open **Email templates** to change the messages learners and instructors receive. A template supplies the wording and design. A notification rule or another supported workflow decides when it is used.

## Edit a template

1. Find the template for the event you want to change.
2. Select its language and channel where those choices are available.
3. Edit **Message**, including the subject and body.
4. Review **Branding** and **Settings & delivery**.
5. Save the draft and preview it.
6. Publish the completed version when it is ready for use.

Saving a draft and publishing a message are different steps. Confirm which version is active before assuming recipients will see a recent edit.

## Use the supplied placeholders

Insert learner names, course titles, links, and other values through the template's token picker. These placeholders are filled when the message is prepared.

Only use tokens available for that template's event. A certificate message may have certificate information that an invitation does not. Keep required action links intact, particularly invitation, verification, and unsubscribe links.

Use clear subject lines and explain the next step near the beginning. For example, “Your assignment feedback is ready” is more useful than “Notification received.” Avoid putting sensitive grades or private personal information in a subject line.

## Preview and test

Preview uses sample data and does not send an email. Check the subject, body, brand images, and action links at a narrow screen width too.

If a separate test-send action is available, use a designated recipient. A successful test confirms that test's delivery path; it does not prove that the event rule, audience, and learner preferences are all correct. Finish by testing the actual event with a test learner.

## Languages and defaults

Create the language version needed by your learners. Keep the default template complete because a missing language-specific version can fall back to the configured default.

Template translation is separate from translating the interface. See [languages](../configuration/languages.md) for Joomla overrides and WordPress translation files.

## Delivery settings

Sender identity and actual mail transport come from the configured CMS or channel setup. The template editor is not a replacement for your SMTP provider's settings.

Choose the appropriate message category and review consent or unsubscribe behaviour where offered. Use **Settings → Email & notifications** for site-wide values such as the unsubscribe address or bounce domain. Leave automatically derived URLs alone unless your site has a specific routing requirement.

## A message still uses old wording

Check the selected locale, published version, and template referenced by the rule. A message already prepared or queued may contain an earlier version. Start a new test event after publishing rather than repeatedly resending an old queued message.
