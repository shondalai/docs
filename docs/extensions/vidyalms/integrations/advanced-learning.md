---
title: Learning standards and advanced integrations
description: Understand available assessment exchange, external activity reporting, and the limits of learning-package support.
---

Some integrations extend the course experience. Others exchange questions, rosters, or activity records. They are separate capabilities: supporting a question exchange format does not automatically provide a player for every learning package.

## Question and assessment exchange

The optional assessment interoperability package adds import and export formats such as QTI and supported Moodle question formats. Use **Import and transfer** and the format choices actually available on your site.

Preview imported content, inspect unsupported-item messages, and test the scoring of representative questions. A format can represent more features than another LMS or importer supports. See [imports and exports](../maintenance/import-export.md).

## Activity records and an external LRS

VidyaLMS can build xAPI statements for assessment attempts. Sending statements to an external **Learning Record Store (LRS)** is a separate optional integration. It is not enabled merely because the attempt has a statement available.

Have your administrator configure the available forwarding service, destination, credentials, permitted network host, and queue processing. Test with a designated learner and confirm the record arrives in the receiving service. Do not send real learner data to an unreviewed destination.

Caliper forwarding is another optional activity integration. Choose the format required by the receiving service rather than enabling every connector.

## SCORM, cmi5, and packaged lessons

Pro now includes a **SCORM 2004 package** lesson with ZIP upload and a built-in player on Joomla and WordPress. It supports a single SCO (one launchable activity), including the SCORM 2004 `API_1484_11` interface used by iSpring. Completion, pass/fail, scores, interaction records, session time, separate attempts and saved resume data are kept in VidyaLMS. No separate player extension or external LRS is required.

Choose the SCORM lesson type rather than uploading the ZIP as an ordinary resource. See [SCORM packages](scorm.md) for the upload steps, completion settings, limits and a compatibility checklist.

This player does **not** support SCORM 1.2, multi-SCO sequencing, xAPI package playback or cmi5. The activity-record integration above is separate from package playback. The SCORM 2004 runtime has automated tracking and browser checks; this is not a claim of ADL certification or proof that every iSpring export works. Test your representative package before migrating required training.

## Live sessions and protected streaming

The current bundled implementation does not include a ready-to-configure Zoom, Meet, Teams, Bunny Stream, Cloudflare Stream, or signed-Vimeo lesson connector. A normal supported video URL or a reading lesson containing a meeting link is different from an integration that creates meetings, collects attendance, or validates watched percentage.

You can explain a live activity in a reading lesson and provide the appropriate link, but assess attendance or outcomes through a supported workflow. Do not promise automatic attendance capture from a plain link.

## Organizations and external platforms

Directory and roster integrations have their own configuration and permission boundaries. See [identity and directory connections](../people/identity.md). For payments, use the supported [EasyCommerce or WooCommerce connection](../commerce/overview.md), rather than an activity-reporting connector.
