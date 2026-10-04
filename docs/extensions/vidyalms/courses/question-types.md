---
title: Choose question types and scoring
description: Understand the response formats, marking choices, and accessibility considerations available in VidyaLMS.
---

Choose a format that tests the skill you want to assess. The question picker shows the formats supplied by the packages installed on your site. Familiar presets may share an underlying format, so the number of names in the picker is not a count of separate marking engines.

## Core question formats

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Format | Learner does… | Author should check… |
| --- | --- | --- |
| Single choice | Select one answer | One clearly correct answer and plausible alternatives |
| Multiple choice | Select several answers | Instructions explain how many choices are expected and how points are awarded |
| True/false | Choose between two statements | Wording is unambiguous |
| Short answer | Enter a brief response | Accepted answers or manual-grading requirements |
| Fill in the blank | Complete missing text | Every gap has a defined answer and sensible matching rules |
| Ordering | Put items in sequence | The intended order and whether the installed policy allows partial credit |

</div>

## Additional formats

Pro assessment packages extend the picker with the following interaction families and their presets:

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Family | Typical use | Setup to review |
| --- | --- | --- |
| Inline selection | Choose words inside a passage | Choices and correct selection for each gap |
| Association and matching | Connect related items | Pairs, reuse limits, and scoring |
| Gap match | Place terms in text gaps | Allowed terms and the correct placement |
| Hotspot | Select a region on an image | Image, selectable regions, and answer targets |
| Graphic ordering | Order image-based items | Target sequence and accessible instructions |
| Graphic association | Connect areas or labels visually | Regions, associations, and placement rules |
| Point marking | Mark a position | Target coordinates or accepted area |
| Scale value | Choose a value on a scale | Scale limits, labels, and interpretation |
| Numeric | Enter a number | Units, accepted value, and tolerance |
| Extended response | Write a longer answer | Instructions, maximum points, and manual marking |
| File response | Upload evidence | Accepted files and assessment criteria |
| Drawing response | Draw an answer | Canvas instructions and manual assessment |
| Recorded response | Record audio or video | Device permissions, duration, and an alternative submission plan |
| Multi-part item | Answer related subquestions | Each part's response format and contribution to the total |
| Media engagement | Interact with media | The supported engagement evidence and completion rule |

</div>

Use the preview to try every interaction you introduce. An image-based response should have meaningful instructions for people who cannot rely on the image alone. Test touch input and keyboard operation where relevant.

## Marking choices

The selected format supplies the response shape; the **scoring policy** determines how points are awarded. Installed policies may offer exact scoring, partial credit, deductions, numeric tolerance, ordering distance, or certainty-based marking.

Avoid combining policies without checking an example. Write down the expected score for a fully correct, partly correct, incorrect, and empty response, then compare the preview or a test attempt. Explain deductions to learners before the assessment.

Some responses require manual grading or a rubric. Their score is not final just because the learner submitted the quiz. See [grading](grading.md) for recording feedback and managing regrades.

If a type or policy is missing, check the installed assessment package and your permissions. Do not replace a required specialist interaction with an unrelated question simply to make an import finish without warnings.
