---
title: Import courses, questions, and rosters
description: Plan a transfer, preview supported content, and review import results before publishing.
---

Open **Import and transfer** for the importers installed on your site. Importing learning content, importing people, and exporting a report are different tasks. Choose the tool that matches the information you are moving.

## Prepare a small transfer first

Back up the destination site and keep the original export. Start on a test site with one representative course containing the lesson and assessment types you actually use.

The available importers can include VidyaLMS JSON, Community Quiz, Moodle backups, LearnDash, LifterLMS, and Tutor LMS. Joomla-specific sources include supported Shika, Guru, and OSCampus importers. Availability and source requirements vary; the importer picker is the authority for your installed site.

Some importers read an uploaded export. Others need access to an installed source component or its data. Do not rename an unrelated archive to make it look like a supported format.

## Run an import

1. Select the source/importer and read its accepted input and limits.
2. Upload the export or provide the supported source selection.
3. Use the available preview or validation step.
4. Review unsupported content, proposed changes, and warnings.
5. Start the import and monitor its run history.
6. Open the resulting course and test it before publishing.

Large jobs may need the queue worker. A failed run can have completed some work; failure is not a promise that every change was rolled back. Inspect the run before using its supported retry action or importing the same file again.

## Review the result as a teacher and learner

Check module order, lesson content, images, protected resources, question answers, points, pass marks, and completion requirements. Test an actual quiz attempt and assignment submission.

An unsupported source activity should not be assumed to have become a functional lesson. In particular, an imported SCORM reference does not supply a SCORM player. See [integration limits](../integrations/advanced-learning.md).

Historical enrolments, grades, and file links may have importer-specific limits. Read the preview and result rather than assuming a content import also moved every learner's history.

## Exchange question banks

Optional interoperability providers add QTI, supported Canvas/Blackboard/D2L dialects, Moodle XML, and GIFT. Choose the exact supported format and review its restrictions.

When exporting QTI, a strict exchange option can favour portability while an extended option preserves more information that another product may not understand. Test the exported package in the intended destination, including scoring and media.

## Import organization members

Use the organization roster flow for CSV or supported OneRoster data. Follow its expected columns and identity rules. Review row-level problems and download failed rows when offered, then correct those rows rather than blindly repeating the entire import.

Continuous directory synchronization is covered in [identity connections](../people/identity.md).

## Retention and other exports

**Settings → Files & storage → Import source retention** controls eligible cleanup of completed upload sources. Active jobs retain the files they still need. Retaining an import log does not necessarily retain its original uploaded archive indefinitely.

For results and evidence, use [report exports](../reports/reports.md). For a restorable copy of the academy, use a [full backup](updates-backups.md); a course export alone is not a site backup.
