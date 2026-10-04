---
title: Build modules and lessons
description: Add reading, video, resource, assignment, and quiz lessons and choose how learners complete them.
---

A module groups related lessons. A lesson gives the learner one clear activity. Short, purposeful lessons make progress easier to understand than one long page containing everything.

## Add and arrange content

1. Open a course's **Curriculum**.
2. Add a module with a clear title and, if useful, a short introduction.
3. Choose **Add lesson**, then select the lesson type.
4. Enter the title, content, and settings for that type.
5. Save the lesson and check its preview.
6. Arrange modules and lessons using drag-and-drop or the ordering controls.

Use curriculum search in a long course. Archive lessons you no longer want active instead of replacing meaningful historical content with an unrelated lesson.

## Choose the right lesson type

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Lesson | Good for | What to configure |
| --- | --- | --- |
| **Reading** | Instructions, explanations, worked examples | Rich text, headings, images, and an estimated reading time |
| **Video** | Demonstrations and recorded teaching | The supported video URL or embed and its delivery settings |
| **Resource** | PDFs, worksheets, reference files | A protected upload and a useful description of what to download |
| **Assignment** | Practical work and instructor feedback | Instructions, submission limits, points, passing score, and rubric |
| **Quiz** | Knowledge checks and assessed tests | Questions, selection rules, attempts, timing, and grading |

</div>

These are the bundled lesson types. Do not assume that references to audio, live sessions, protected streaming, SCORM, or cmi5 in a product plan mean a corresponding player is installed. See [advanced learning integrations](../integrations/advanced-learning.md) for current availability and limitations.

## Decide what counts as completion

Lesson behaviour depends on its type and configuration. A resource can record a successful download; an assignment waits for assessment; a quiz follows its assessment rules. Review the relevant delivery and completion controls instead of assuming that opening every lesson completes it.

For video, confirm what your installed player can measure. A generic embedded video does not necessarily provide reliable watched-percentage evidence. If your training requires that measurement, verify that an installed player explicitly supports it and test its completion rule before relying on the result.

Mark a lesson as a free preview only when its content is intended to be accessible without the normal course entitlement. Do not make a mandatory assessment a preview as a workaround for a locked learner.

## Add resources accessibly

Use meaningful headings, descriptive link text, readable images, and captions or transcripts for video. Explain a download's purpose before its button. Supply an alternative when an external activity depends on a capability some learners may not have.

Upload private course files through the resource lesson, rather than pasting a public media URL. See [protected files](../configuration/files-storage.md).

## Check the real learner flow

Open the course as a learner, complete the first activity, and move to the next. Check the outline, progress indicator, lesson search, previous/next controls, and resume behaviour. If the next item is locked, its [access or progression rule](access-progression.md) may be doing exactly what you configured.
