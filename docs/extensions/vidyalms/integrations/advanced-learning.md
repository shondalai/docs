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

The current bundled lesson picker provides reading, video, resources, assignments, and quizzes. **A bundled SCORM or cmi5 lesson player is not present in the implementation reviewed for these guides.** References to these formats in product plans or import warnings are not setup instructions for an available player.

Do not upload a SCORM ZIP as a resource and expect its score, resume state, or completion to work as an assessed lesson. If a separately installed extension adds a package player, follow that extension's supported formats and completion setup, then test its learner behaviour before using it in a required course.

## Live sessions and protected streaming

The current bundled implementation does not include a ready-to-configure Zoom, Meet, Teams, Bunny Stream, Cloudflare Stream, or signed-Vimeo lesson connector. A normal supported video URL or a reading lesson containing a meeting link is different from an integration that creates meetings, collects attendance, or validates watched percentage.

You can explain a live activity in a reading lesson and provide the appropriate link, but assess attendance or outcomes through a supported workflow. Do not promise automatic attendance capture from a plain link.

## Organizations and external platforms

Directory and roster integrations have their own configuration and permission boundaries. See [identity and directory connections](../people/identity.md). For payments, use the supported [EasyCommerce or WooCommerce connection](../commerce/overview.md), rather than an activity-reporting connector.
