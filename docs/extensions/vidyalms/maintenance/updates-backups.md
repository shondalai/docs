---
title: Update and back up the academy
description: Keep VidyaLMS and its integrations current while preserving learning records, files, and custom translations.
---

A useful backup restores the academy as a working whole. A course export or settings download is helpful, but neither replaces the database and the files learners depend on.

## What to back up

- The CMS database, including VidyaLMS and shop records.
- Website files and the installed extension versions.
- VidyaLMS private storage, including assignment evidence and protected resources.
- Public course images and other media.
- Custom language overrides and update-safe translations.
- Site configuration and the securely managed credentials needed to restore connections.

Keep credentials in an appropriately protected backup, not in a document distributed with general course exports. Make sure a private folder outside the website root is included in the backup plan.

## Update safely

1. Read the release notes and check the CMS and PHP requirements.
2. Take a complete backup and confirm that it can be restored.
3. Test the update on a staging copy where practical.
4. Update the main VidyaLMS package and compatible add-ons through the CMS's extension/plugin update or installation workflow.
5. Check System health and any reported installation or database update errors.
6. Complete a short learner and instructor test before returning to normal operation.

On Joomla, use the Joomla package rather than separately replacing component files. On WordPress, update the main plugin and installed VidyaLMS add-ons as the release instructions require.

## What to test after an update

Open the catalogue and a published course. Sign in as a learner, resume a lesson, submit a sample assessment, and review it as an instructor. Check a certificate, protected download, scheduled message, and the shop connection if you sell access.

Use a shop test mode or designated test order for payment checks. Do not trigger real charges or bulk messages from a staging copy.

Clear relevant site/browser caches when old assets remain visible, but investigate persistent errors instead of repeatedly clearing everything.

## Preserve customization

Use the provided settings, Joomla language overrides, and WordPress's update-safe translation locations. Changes made inside replaceable extension files can be overwritten by an update.

Removing an add-on can leave courses that depend on its question types, reports, or providers unable to perform those functions. Review dependencies before deactivating it; a stored lesson is not automatically converted to another type.

Before uninstalling, read the current package's data-removal behaviour and take a backup. Deactivation, uninstalling, trashing a course, and erasing a person's data are different operations.

## Recover from a failed update

Keep the error and the package versions involved. Restore a consistent database-and-files backup when rollback is required; mixing old code with a changed database can create further problems. Include the shop and private storage in recovery planning so access and evidence remain aligned.
