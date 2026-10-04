---
title: Translate VidyaLMS and use French
description: Translate Joomla and WordPress learning interfaces without changing extension files.
---

VidyaLMS has a shared English interface and supports translation through the host platform, including its React-based screens. A complete, reviewed **French (fr-FR) language pack is not bundled** in the current project. Enabling French in Joomla does not, by itself, translate every VidyaLMS phrase.

You can build your own translation without editing the extension's core files. Course descriptions, lesson text, rubric criteria, and instructor feedback are content: authors must write or translate those separately.

## Joomla language overrides

1. Install and enable the language you want in Joomla.
2. Open **System → Manage → Language Overrides**.
3. Select the correct language and client: **Site** for learner and frontend instructor pages, or **Administrator** for backend pages.
4. Create an override. Search for the English value or its language constant, enter the translation, and save.
5. Open the relevant page in that language and check the result.

VidyaLMS language constants start with `COM_VIDYALMS_`. Shared interactive-screen phrases often use `COM_VIDYALMS_UI_` followed by a generated identifier. If the phrase is difficult to find, ask your translator or site administrator to look up the English text in the installed VidyaLMS language file and use that constant in the override.

Overrides live outside the extension's shipped language file and are preserved by normal VidyaLMS package updates. Back up those overrides with your site. Do not translate by editing the installed `com_vidyalms.ini` directly; an update can replace it.

## WordPress translations

Use a translation tool that supports WordPress gettext catalogues. Translate the **vidyalms** text domain using its supplied translation template. Shared UI messages include a context identifier; keep that context so the application can find the correct translation.

Store custom translations in the tool's update-safe location outside the plugin's replaceable folder. Do the same for add-ons with their own text domains. Set the WordPress site language, then check both the public learning area and the dashboard.

## Keep dynamic values intact

A phrase may contain placeholders such as `{p0}`, `{p1}`, or `%s`. These stand for a person's name, a count, or another value. Keep every required placeholder in the translation. You can move it to a more natural place in the sentence, but changing its spelling can leave a blank or literal marker on screen.

Translate email-template language variants separately in **Email templates**. Set each course's content language correctly, too; that setting describes the course and does not translate its content.

## Review the whole journey

Test sign-in, enrolment, the player, each question type you use, assignment feedback, certificates, emails, and common validation errors. Check dates, decimal formatting, accents, and longer translated labels on a phone.

Your template, shop, connected services, and some diagnostic messages have their own translation coverage. Treat “fully French” as a result to verify across that complete journey, not as a single setting to switch on.
