---
title: Enrol learners and manage access
description: Add learners to courses, manage access dates, and understand suspension, expiry, and progress.
---

A website account identifies a person. An **enrolment** connects that person to a course. Their **access** determines whether they can enter it today. Keeping these separate lets you suspend access without throwing away the learner's work.

## Enrol someone yourself

1. Make sure the person has a Joomla or WordPress account.
2. Open **Enrolments** in VidyaLMS and choose the action to add an enrolment.
3. Select the learner and course. Review the access dates and any available enrolment options.
4. Save, then open the learner's record to confirm the course appears.
5. Ask the learner to sign in with that same account and open **My learning**.

You need enrolment permission for the course. Being able to edit a lesson does not necessarily let you enrol other people.

## Choose the right way to grant access

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Situation | Use |
| --- | --- |
| A tutor adds a learner individually | Manual enrolment |
| Anyone with an account may join a free course | Self-enrolment, allowed in site settings and on the course |
| A customer buys a course | The [connected shop](../commerce/overview.md) |
| An employer assigns staff training | [Organization learning](organization-learning.md) |
| An organization has a limited number of places | [Seat allocation](seats-invitations.md) |
| A class starts and ends together | A [course run](../courses/course-runs.md), where available |

</div>

A learner may have more than one valid reason to access a course. For example, buying it personally and receiving it through an employer are separate grants. Removing one does not remove the other.

## Find and support a learner

Use **Learners** to find the person's account and review their courses and progress. Use **Enrolments** when your task concerns a particular course membership or access state. Search and filter before making a change, especially when two accounts have similar names.

For a learner who cannot continue, check their account, active access, course publication, access dates, and lesson prerequisites in that order. An active enrolment does not override a locked prerequisite or an unpublished course.

## Suspend, expire, or remove access

Suspend access when participation should stop temporarily. Use the supported access controls rather than deleting the website account. The learning record remains available for an authorized reviewer.

For shop-funded access, make the financial change in the shop. For organization access, use that organization's assignment or seat controls. Editing an unrelated manual enrolment does not cancel a subscription or return an organization's seat.

Expiry processing depends on the [scheduled tasks](../maintenance/scheduled-tasks.md). Check the expiry date and background job status if an expected transition has not appeared.

## Progress and recertification

Removing access is not a progress reset. Where recertification or reset actions are available, read the confirmation carefully and use the intended workflow to begin a new learning cycle. Keep earlier evidence according to your retention policy. Never delete assessment records simply to make a progress percentage return to zero.

For larger groups, see [imports](../maintenance/import-export.md) and [organization membership](organizations.md).
