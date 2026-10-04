---
title: Manage learner data and retention
description: Review learning evidence, respond to data requests, and control access to reports and private files.
---

Learning records can contain personal information: enrolments, activity, scores, assignment photos, feedback, certificates, and communication preferences. Decide who needs this information and how long your academy needs to keep it.

## Limit everyday access

Give instructors access to the courses they teach and organization managers access to their own organization. Use a separate administrator account for site-wide configuration. See [users and permissions](../configuration/users-permissions.md).

Review report recipients as carefully as report permissions. A downloaded CSV or emailed attachment leaves the live application's access controls. Store it in an appropriate location and remove it when it is no longer needed.

Keep assignment evidence and enrolled-only resources in [private storage](../configuration/files-storage.md). Do not copy private photos into public course descriptions merely to make them easier to review.

## Respond to a learner's request

Use the CMS's verified privacy-request workflow:

- On Joomla, use the privacy tools with the installed VidyaLMS privacy plugin enabled.
- On WordPress, use **Tools → Export Personal Data** or **Erase Personal Data**, following WordPress's identity-confirmation process.

Review the result for VidyaLMS records and for the other components involved. A request to the LMS does not automatically erase EasyCommerce, WooCommerce, an external mail service, or an identity provider's records.

Organization-specific export and erasure tools may also be available to appropriately authorized managers. Their scope is narrower than a whole-site personal-data request.

## Understand retention decisions

Some records may be retained under the site's configured retention basis. Review the request receipt and any retained-record explanation instead of assuming every erasure request deletes every historical row.

Set policies for assessment evidence, activity records, exports, and import sources. The **Import source retention** setting controls uploaded import sources; it is not a universal retention period for all learning data.

Use approved deletion or erasure workflows. Direct database edits can leave linked files, credentials, and historical records inconsistent.

## Activity and AI data

The activity log records supported learning events and sign-ins, not every action a person takes on the website. Active learning time is a measurement with limits, described in [the time guide](../reports/learning-time.md).

Review the [AI data-use policy](../ai/ai-assistants.md) before enabling helpers. Send only the information required for the task and understand the connected service's retention arrangements.

## Include backups in your policy

Backups can contain records that have since been removed from the live site. Protect them, apply an appropriate retention period, and document how a restore will handle previously completed erasure requests.

The software's controls support your data-management process. Your academy still needs to decide the appropriate policies for its learners, contracts, and obligations.
