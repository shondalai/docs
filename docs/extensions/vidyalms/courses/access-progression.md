---
title: Control access, prerequisites, and progression
description: Decide who can join a course and when each lesson or module becomes available.
---

Access answers “May this person study here?” Progression answers “What can they open next?” Configure both when the order of learning matters.

## Set course access

Open **Access → Visibility & pricing** in the course builder. Choose **Free** or **Paid** and set the catalogue visibility. A paid course also needs a mapped shop product; selecting Paid does not create a price or checkout.

Use **Prerequisites** when learners must complete another course before joining this one. A course hidden from the catalogue can still need valid access checks when reached by a direct link.

Self-enrolment must be allowed by the site and the course's rules. Manual, purchase, organization, and seat access are separate ways of receiving access; see [enrolments](../people/enrolments.md).

## Choose the order of study

In **Access → Schedule & progression**, choose:

- **In any order:** learners choose among the items currently available to them.
- **In order, one item at a time:** the next required item depends on completion of the preceding required work.

Changing this choice does not remove explicit restrictions you have added. A learner can satisfy the course order and still be waiting for a release date or a quiz score.

## Add access conditions

Use the restriction editor on the relevant course, module, or lesson. Start with **Quick setup** for common requirements, and use **Advanced rules** when you need combined conditions.

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Condition | Example |
| --- | --- |
| Date window | Open a module on Monday and close it after the workshop |
| Item completion | Require the practical assignment to be complete and passed |
| Score | Require a minimum quiz percentage |
| Permission | Keep a staff-only resource restricted to a teaching role |
| Enrolment source | Show content only for the intended kind of access |
| Optional schedule or credential condition | Release a week after joining a run, or require a credential, when that provider is installed |

</div>

Combine conditions using **All** or **Any**. For example, “All: passed the assignment, and the release date has arrived” differs from “Any: passed the assignment, or the release date has arrived.” The second allows the date alone to open the item.

Choose whether a locked item is shown with a reason or hidden from the outline. An explanation is usually more helpful when a learner needs to take action.

## Make approval a real gate

For mandatory practical work, keep the assignment in the required sequence and require its completion and pass result. Submission alone is not approval. Avoid a percentage-based course completion rule that could allow the learner to finish while skipping that assignment.

Also review closing dates: an item outside its availability window may stop contributing to completion. If an assignment must always be completed, do not use a closing window as your only enforcement mechanism. Test the learner before and after the closing date.

Follow the complete [photo assignment example](assignments.md).

## Preview and handle exceptions

Use **Preview as a learner** to select a person and, where offered, an effective time. The preview explains which conditions pass or fail without enrolling anyone or sending a message.

Use **Individual exceptions** for a deliberate, time-limited exception. Record why it is needed and check its scope. Do not weaken the whole course's rules to solve one person's access problem.

If a restriction's supporting package is unavailable, the rule stays closed rather than being silently ignored. Restore the integration or intentionally replace the rule.
