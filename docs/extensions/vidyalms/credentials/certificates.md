---
title: Design, issue, and verify certificates
description: Create certificate templates, connect them to course completion, and manage issued credentials.
---

Open **Certificates** to work with issued certificates and their templates. A template is the reusable design. An issued certificate is one person's recorded achievement.

## Create a template

Start with a supplied design or create one from scratch. Add the academy name, learner name, course title, issue date, and any verification information needed for your programme.

Use the designer's content fields for values that change for each learner. Review the design, content, and settings sections. Where the full designer is available, check page size, elements, and layers before publishing.

Set validity and personalized fields only when they are meaningful for the qualification. An expiry date should reflect your actual training policy.

Save before previewing: the preview uses the saved design with sample learner and course information. Check long names and course titles, not only the shortest example.

## Connect it to a course

1. Publish the template revision you want to use.
2. Open the course's **Assessment & completion → Certificates** area.
3. Select the intended template and save.
4. Review the course completion requirements.
5. Complete the course with a test learner and check the issued certificate.

If no default template is published, a settings summary may say so. Create and publish a suitable template, then make the intended course or default selection; the summary itself is not a certificate editor.

## Review issued certificates

Find an issued certificate by learner or course. Check its issue date, status, and verification result. Learners can find their available certificates through their learning or achievements pages.

An issued certificate keeps a snapshot of the details used when it was created. Editing today's template does not silently rewrite every certificate already held by learners.

## Correct or withdraw a credential

Use the supported correction or reissue action when an issued certificate needs replacing. Reissue tools may process a batch as a tracked background job. Review its result before telling holders their replacement is ready.

Revocation, suspension, expiry, and replacement describe different states. Use the state that matches your decision and record a clear reason where requested. Deleting or unpublishing a template is not a reliable substitute for revoking an issued certificate.

## Public verification

The verification page lets someone check a certificate's current public status using its verification information. Keep the configured verification URL reachable when changing domains or menus.

On WordPress, a verification page can use the Certificate verification block or `[vidyalms_certificate_verify]`. On Joomla, use the supplied certificate verification view/menu option. Avoid caching personalized administrative certificate pages as public content.

Additional signed formats and badges need their supporting services. See [credits and digital credentials](credits-badges.md). Issuance jobs that remain queued need [scheduler checks](../maintenance/scheduled-tasks.md).
