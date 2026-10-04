---
title: Review progress and export reports
description: Find learner, course, organization, assessment, and evidence reports and export the right scope.
---

Open **Reports** and choose a report from the catalogue. Start with the question you need to answer, then choose the smallest useful scope.

## Choose a report

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| You need to know | Start with |
| --- | --- |
| Who is enrolled and who has completed | Course overview or enrolment roster |
| How learning is progressing across the academy | Site learning |
| Who may need support | At-risk learners; treat this as an advisory signal |
| A learner's assignment attempts, files, and assessment | Assignment submission history |
| Measured time by learner, course, module, or lesson | Active learning time (cumulative) |
| Recorded activity and sign-ins | Training activity and sign-ins |
| An organization's members and access history | Organization overview, roster, or access log |
| Question quality, course-run outcomes, compliance, or seat reconciliation | The corresponding report, when its optional package is installed |

</div>

Organization and instructor permissions limit which records you can see. A site-wide report viewed by an instructor does not grant site-wide access to learner data.

## Filter before interpreting

Select the course, learner, organization, or other filters the report offers. Check the report's date meaning: a completion date, submission date, and latest activity date answer different questions.

Do not interpret a suppressed or undisclosed value as zero. Some reports hide small groups or sensitive fields to reduce unnecessary disclosure. Exports apply the same disclosure rules.

Open a record or the relevant Gradebook view when you need the detail behind a summary. A course's completion percentage alone does not explain which assignment is awaiting approval.

## Export the results

Use the report's export action and choose an available format. CSV and JSON are the core formats. CSV opens in spreadsheet software such as Excel; detailed values may appear as structured text inside a column.

PDF and XLSX exports require their supporting report-format providers. Only the formats shown by the current report should be treated as available. An export labelled **this page** contains the displayed page, not automatically every matching row.

Larger exports may be prepared as background jobs. Wait for completion and download through the authorized interface. Treat the downloaded file as learner data when storing or sharing it.

## Practical training evidence

**Assignment submission history** includes attempt numbers, submission and grading dates, scores, overall feedback, frozen rubric results, and file metadata. It does not embed the photos or expose private file paths. Open the authorized submission view to inspect the actual files.

Combine this report with quiz results, progress, and the activity report when preparing a training record. A dedicated all-in-one training-dossier PDF is not supplied by this workflow.

Sign-ins are recorded from the point the feature is installed and active. Earlier activity cannot be reconstructed if it was never recorded.

## Schedule a report

Where scheduling is offered, choose the report, filters, available format, recipients, delivery method, and timing. Review the recipient list carefully. Reports are prepared according to the recipient's authorized scope, not simply the scheduler's wider permissions.

Test one scheduled delivery and check [background processing](../maintenance/scheduled-tasks.md). For the meaning and limits of time measurements, see [active learning time](learning-time.md).
