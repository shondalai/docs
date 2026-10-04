---
title: Community features and mobile access
description: Use available discussion and rewards connections and understand mobile website and app setup.
---

VidyaLMS's learner pages work within your Joomla template or WordPress theme. Start by testing that website experience on a phone before deciding whether you also need a dedicated app.

## Discussions and comments

Joomla integrations can connect supported QuillThreads comments and CjForum discussions. WordPress can use the available native comments or bbPress integration. Install and configure the relevant community extension before expecting its controls to appear in VidyaLMS.

Choose the discussion destination offered by the installed integration. Check that a learner can see the intended conversation and that people without course access cannot see private course discussions through an unrelated forum page.

Set moderation and notification rules in the connected discussion system. The LMS's course publication switch does not replace the forum's own visibility and moderation settings.

## Points and rewards

Use the supported rewards integration when you want achievements to earn points or badges. Test the relevant completion event and check duplicate-event behaviour with a test learner.

Keep academic grading separate from engagement rewards. Earning participation points should not accidentally satisfy an assignment's pass requirement. See [credits and badges](../credentials/credits-badges.md).

## The mobile website

Check navigation, lesson outlines, quizzes, assignment uploads, and certificate access at phone width. A top menu may adapt to the available space; the academy administrator chooses the navigation arrangement in [learner experience settings](../configuration/learner-experience.md).

Phone browsers may ask permission to use a microphone or camera for supported recorded responses. Offer an alternative or clear instructions when a learner cannot grant that permission. Test the specific question type rather than assuming every desktop interaction behaves identically on a phone.

## A dedicated mobile app

The project includes a mobile app implementation, but installing the CMS extension does not publish an app to an app store. App distribution, branding, site connection, and supported host authentication need a separate deployment by your app administrator.

Use only the app and connection address supplied by your academy. The app can expose learner and authorized administration features according to the site's capabilities and the account's permissions. It should not be assumed to replace every browser-based authoring or integration screen.

Device notifications also require the supported delivery service, device registration, and the learner's operating-system permission. Enabling a channel in the web dashboard alone does not complete that setup.

If an app cannot connect, have the administrator check its site discovery and supported authentication configuration. Do not share website administrator credentials as a workaround.

## Sign in to an academy-provided app

Enter the academy's website address in the connection screen. The current app uses a personal Joomla API token on Joomla, or the person's username and a WordPress application password on WordPress. Your administrator must make the appropriate account-level credential available; the ordinary website password is not a substitute for an application password.

Create a dedicated credential for the app when your CMS permits it. Keep it private, revoke it if the device is lost, and sign out on shared devices. If it is revoked or expires, reconnect with a new valid credential. A permission error after sign-in can mean the account is not allowed to use that particular administration screen, rather than that the entire connection is broken.
