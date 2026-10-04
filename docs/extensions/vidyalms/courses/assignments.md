---
title: Assess practical assignments with photos and rubrics
description: Configure multiple-photo submissions, instructor approval, resubmission, and automatic progression unlocking.
---

An **Assignment** lesson lets a learner submit practical work for an instructor to assess. One submission can contain several JPG or PNG photos. The learner and instructor can return to the submission history to review earlier files, dates, scores, and feedback.

## Set up the assignment

Add an Assignment lesson in **Curriculum** and explain what the learner must produce. Include the required views, file expectations, and how the work will be assessed.

For a baking exercise, you might configure:

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Setting | Example |
| --- | --- |
| Maximum files | 10 |
| Accepted extensions | jpg, jpeg, png |
| Per-file size | 8192 KB, subject to the host's lower limit |
| Maximum points | 100 |
| Pass percentage | 70 |
| Instructions | Upload 6–10 photos showing preparation, technique, baking, and finished presentation. |

</div>

The file count is a **maximum**, not an automatic minimum. Assignments also accept a text response. If six photos are mandatory, state that in the instructions and assess compliance; setting the maximum to ten does not require six uploads.

## Add a rubric

Create criteria with their individual point maxima. The criteria must total the assignment maximum. For example:

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Criterion | Maximum points |
| --- | ---: |
| Hygiene | 10 |
| Organization | 10 |
| Technique | 30 |
| Baking | 20 |
| Finishing | 15 |
| Presentation | 15 |
| **Total** | **100** |

</div>

Explain what a strong result looks like in the assignment instructions. When grading, enter a score for each criterion. VidyaLMS calculates the total and applies the passing percentage.

## Make approval unlock the next step

1. Arrange the curriculum as **teaching lesson → assignment → next lesson or module**.
2. In **Access → Schedule & progression**, select **In order, one item at a time**. For a flexible course, add an explicit completion-and-pass prerequisite to the dependent item instead.
3. Keep the assignment required. Do not make it a free preview, excuse it, or choose a course completion rule that allows it to be skipped.
4. Test the sequence with a learner account before publishing.

Uploading files or selecting **Submit for assessment** does not unlock the next required step. The work waits for assessment. A passing, approved assignment completes its lesson and opens the next otherwise-eligible step.

## Review and request a revision

In **Gradebook**, open the submission. View the photos directly and enlarge them for closer inspection. Enter criterion scores, criterion feedback where needed, and overall feedback. The workflow supports overall and criterion feedback; it does not provide separate annotations on each photo.

Choose **Request resubmission** when the learner needs to revise the work. This explicitly permits another submission even when ordinary resubmission is disabled or the original due date has passed. Course and lesson availability windows still apply.

A failed grade alone is not the same as a request for another attempt. If you want the learner to try again, use the resubmission action.

On the next attempt, grade the new work. **Use the pass percentage** derives the result from the score. **Approve work** also enforces the minimum passing score. A passed attempt cannot be resubmitted through this workflow.

## Keep the evidence

Each attempt preserves its files and assessment history. Its rubric, points, and pass mark are captured for that submission; later authoring changes do not rewrite it. Assess a new attempt rather than trying to overwrite a completed historical grade.

The learner sees feedback and attempt history inside the assignment. The **Assignment submission history** report provides a later record, including detailed rubric results and file metadata. See [reports](../reports/reports.md) for export behaviour.
