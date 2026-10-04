---
title: Install and set up VidyaLMS on Joomla
description: Install the Joomla package, publish learning pages, configure permissions, and start scheduled work.
---

Use this guide for **Joomla 6 with PHP 8.3 or later**. These are the minimum versions checked by the current Joomla package. Ask your hosting company to check them if you do not manage the server yourself.

## Before you begin

You need a Joomla administrator account that can install extensions, the VidyaLMS Joomla package, and a backup of the site. Start on a test copy if the website already serves customers. Confirm that your site uses HTTPS and can send an ordinary Joomla test email.

If you have a Pro package, install the main VidyaLMS package first. Keep the main package and add-on on compatible releases.

## Install the package

1. Sign in to Joomla administration.
2. Open **System → Install → Extensions**.
3. Upload the VidyaLMS **package ZIP**. Install the complete package rather than selecting its inner component or library ZIP files separately.
4. Wait for Joomla's success message, then open **Components → VidyaLMS**.
5. Open **Settings**, enter your academy name, and save.

The package supplies the component, shared learning library, and supporting plugins. If Joomla reports an installation error, keep the full error message and check the [installation troubleshooting steps](../help/troubleshooting.md). Repeatedly uploading the same package without checking the error rarely helps.

## Give learners a way in

1. Open the Joomla menu you use on the public website and create a new item.
2. Choose the VidyaLMS course catalogue as its menu item type.
3. Give it a recognizable title, such as **Courses**, publish it, and save.
4. Add a **My learning** entry if you want a direct link for returning learners. The learner header also links to this area.
5. If instructors will work on the frontend, add the VidyaLMS instructor page using the available menu item type and give the teaching group access to it.

Menu visibility alone does not grant teaching permission or course access. Follow [users and permissions](../configuration/users-permissions.md) for those settings. Test the menu as a normal signed-in learner, not only as a Super User.

## Make background work run

In **System → Manage → Plugins**, check that the VidyaLMS system and task plugins are enabled. Use the web services plugin when the installed application requires its API routes. Keep the privacy and search plugins enabled when you use those Joomla features.

In **System → Manage → Scheduled Tasks**, set up the VidyaLMS job runner and recurring tasks. Start with the [scheduled tasks guide](../maintenance/scheduled-tasks.md); certificates, imports, reports, notifications, and access reconciliation depend on it.

For paid courses, enable the **VidyaLMS integration for EasyCommerce** plugin. Its job is to handle events. Configure product-to-course mappings in **VidyaLMS → Settings → Shop integrations**, not in the system plugin. The [EasyCommerce guide](../commerce/easycommerce.md) takes you through the complete setup.

## Finish the first setup

- Choose [top navigation or a sidebar](../configuration/learner-experience.md) to suit your template.
- Check [private file storage](../configuration/files-storage.md) before uploading learning resources.
- Confirm the site can deliver a [notification](../communication/notifications.md).
- Create and complete [one small course](first-course.md) using a test learner account.

Use VidyaLMS's own **Settings** workspace for learning settings. Joomla still owns site-wide functions such as mail, users, language overrides, extension permissions, and scheduled-task execution.
