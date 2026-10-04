---
title: Feature guide and availability
description: Find configuration help for every major area and understand platform and optional-feature differences.
---

This reference describes the current implementation used for these guides. Your permissions, installed packages, and configured services determine which controls appear. A capability listed by the system is not necessarily a fully configured external connection.

## Installation and site configuration

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Area | Help |
| --- | --- |
| Joomla 6 installation, plugins, and learner menus | [Joomla setup](../getting-started/joomla.md) |
| WordPress installation, routes, blocks, and shortcodes | [WordPress setup](../getting-started/wordpress.md) |
| Dashboard, workspace navigation, filters, and day-to-day checks | [Workspace guide](../getting-started/workspace.md) |
| General, catalogue, certificates, email, storage, network, commerce, activity, and appearance settings | [Settings reference](../configuration/settings.md) |
| Frontend header, logo, top/sidebar navigation, open layout, and dark mode | [Learner experience](../configuration/learner-experience.md) |
| Instructors, organization administrators, and course permissions | [Users and permissions](../configuration/users-permissions.md) |
| Upload limits, private PDFs, submission photos, and signed downloads | [Files and storage](../configuration/files-storage.md) |
| French, Joomla overrides, WordPress translations, and React text | [Languages](../configuration/languages.md) |

</div>

## Teaching and assessment

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Area | Help and availability |
| --- | --- |
| Courses, categories, authoring, publication, archive, and trash | [Course builder](../courses/course-builder.md) |
| Reading, video, resources, assignments, and quizzes | [Lessons](../courses/lessons.md); bundled types |
| Prerequisites, linear learning, schedules, exceptions, and completion rules | [Access and progression](../courses/access-progression.md); advanced policies depend on installed providers |
| Quiz attempts, timing, feedback, pools, and grading policies | [Quizzes](../courses/quizzes.md) |
| Reusable banks, folders, versions, and question selection | [Question banks](../courses/question-banks.md) |
| Core questions and additional interactive/recorded response families | [Question types](../courses/question-types.md); additional families require Pro providers |
| Multiple-photo submissions, rubric points, approval, and resubmission | [Practical assignments](../courses/assignments.md) |
| Gradebook aggregation, manual marking, result history, and regrading | [Grading](../courses/grading.md) |
| Scheduled classes, membership, and relative releases | [Course runs](../courses/course-runs.md); optional run/scheduling features |

</div>

## People and commerce

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Area | Help and availability |
| --- | --- |
| Manual, self-service, paid, and organization access | [Enrolments](../people/enrolments.md) |
| Organizations, members, units, and delegated administration | [Organizations](../people/organizations.md) |
| Offered courses, required assignments, and organization learner views | [Organization learning](../people/organization-learning.md) |
| Seat capacity, invitations, returns, and pending allocations | [Seats](../people/seats-invitations.md); automatic promotion and delegated capacity need their supporting packages |
| Domain verification, SAML/OIDC mapping, SCIM, and roster services | [Identity connections](../people/identity.md); optional services and host sign-in connectors |
| Joomla product-to-course mappings | [EasyCommerce](../commerce/easycommerce.md); configured in VidyaLMS settings |
| WordPress product and variation mappings | [WooCommerce](../commerce/woocommerce.md); configured on shop products |
| Subscriptions, cancellations, refunds, and independent access sources | [Access lifecycle](../commerce/subscriptions-refunds.md); billing stays in the shop |

</div>

## Communication, evidence, and integrations

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Area | Help and availability |
| --- | --- |
| Channels, event rules, consent, blocked addresses, and delivery feedback | [Notifications](../communication/notifications.md); additional channels require their packages and services |
| Message copy, branding, languages, tokens, drafts, and publishing | [Email templates](../communication/email-templates.md) |
| Workflow conditions, delays, repetition, rehearsals, and activity | [Automations](../communication/automations.md) |
| Certificate design, issuance, correction, revocation, and verification | [Certificates](../credentials/certificates.md) |
| Credits, badges, signed credentials, and status lists | [Digital credentials](../credentials/credits-badges.md); formats and signing services vary |
| Course, learner, organization, assessment, seat, and compliance reports | [Reports](../reports/reports.md); some reports and PDF/XLSX formats require additional providers |
| Activity logs, sign-ins, cumulative lesson time, and inactivity | [Learning time](../reports/learning-time.md) and [evidence reports](../reports/reports.md) |
| AI helpers, connections, task routes, data-use policy, drafts, and usage | [AI assistants](../ai/ai-assistants.md); model tasks require a configured service |
| QTI, external LRS, and Caliper | [Learning integrations](../integrations/advanced-learning.md); optional exchange/forwarding providers |
| Discussions, rewards, mobile website, and dedicated app | [Community and mobile](../integrations/community-mobile.md); separate services or app deployment where relevant |
| Course/question migration and organization roster import | [Import and transfer](../maintenance/import-export.md) |
| Schedulers, queues, access expiry, and System health | [Background tasks](../maintenance/scheduled-tasks.md) |
| Privacy requests, retention, updates, and recovery | [Privacy](../maintenance/privacy.md) and [backups](../maintenance/updates-backups.md) |

</div>

## Important current limits

- Payments, invoices, tax calculations, and financial refunds belong to the shop. There is no native VidyaLMS gateway configuration.
- A complete reviewed French language pack is not bundled. Host translation mechanisms are available.
- Assignment feedback supports overall and rubric-criterion comments, not separate annotations on each photo.
- Evidence exports include file metadata, not an archive containing every private photo. There is no dedicated combined training-dossier PDF in that workflow.
- Bundled SCORM/cmi5 players and live-session/protected-streaming connectors are not present in the implementation reviewed here.
- Mobile source is not an automatically published app-store application.
- Time tracking measures supported browser activity; it does not establish verified attendance or attention.

If a control is missing, check its dependencies and your role before following the [troubleshooting steps](troubleshooting.md).
