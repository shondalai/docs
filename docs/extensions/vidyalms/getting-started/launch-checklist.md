---
title: Check your academy before launch
description: A practical end-to-end checklist for a Joomla or WordPress learning site.
---

Run these checks with the same theme, email service, shop, and permissions you will use for real learners. A site that works for an administrator may still have a broken learner menu or a missing instructor permission.

## Website and navigation

- Open the catalogue, My learning, achievements, organizations, and notification preferences from the public navigation.
- Check the header on a phone as well as a desktop. Confirm your template supplies the intended content width and spacing.
- Sign out and follow a link to a protected lesson. Sign in again and confirm the learner can return to the intended destination.
- Try both your light and dark appearance settings if your template supports them.

## Teaching and assessment

- Publish a course with a clear description, correct cover, and suitable category.
- Play a video, open a reading lesson, and download a protected resource as a learner.
- Complete a quiz, including an incorrect answer, and check the feedback and attempt limit.
- Submit an assignment, grade it as an instructor, request a revision, and approve the next attempt.
- Verify that a required assignment blocks the next lesson until approval.
- Check the completion rule and any certificate issued at the end.

## People and sales

- Confirm instructors see the courses they should teach and organization managers see only their permitted organization or units.
- Assign an organization course or seat and verify it appears under that organization's learning.
- For paid courses, make a test purchase through the shop and confirm access belongs to the correct signed-in account.
- Test a renewal, cancellation, and refund if those features are offered. Check access changes without losing learning history.
- Confirm the frontend **Account** link opens the shop account area on Joomla.

Use the [commerce test steps](../commerce/subscriptions-refunds.md) for the expected outcomes.

## Messages and background work

- Confirm a real test notification arrives and its links use your public website address.
- Review the published email template, language, and unsubscribe behaviour.
- Check that scheduled tasks actually run. A green setting alone is not evidence that a server worker is working.
- Generate a report export and a certificate. Both should leave the queue and become available.
- Rehearse an automation before enabling it.

## Records and recovery

- Review learner progress, assignment history, quiz results, and active learning time.
- Check the report export contains the expected scope and no other organization's records.
- Make and restore a backup on a test site, including private learning files.
- Document who will check failed jobs, answer learner questions, and handle shop refunds.

Do not erase test history directly from database tables. Use the application's supported controls and your site's [privacy process](../maintenance/privacy.md). If a check fails, record the account, course, time, and message shown, then follow [troubleshooting](../help/troubleshooting.md).
