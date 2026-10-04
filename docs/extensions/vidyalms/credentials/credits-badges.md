---
title: Use credits, badges, and digital credentials
description: Configure available recognition options and understand the dependencies of signed credential formats.
---

Certificates, continuing-education credit, and badges recognize different things. Choose the form that matches what your academy is actually authorized to award.

## Continuing-education credit

Where credit settings are available, select the supported credit scheme and enter the course's credit information. Review how the value appears on the learner's record and certificate.

Contact hours and named schemes such as IACET, NASBA, or ACCME may be supplied by installed providers. Selecting a scheme in software does not make your organization accredited by that body. Enter only the designation and credit value you are entitled to award.

Estimated course duration, measured active learning time, and awarded credit are separate values. Do not assume the activity timer automatically establishes a professional credit entitlement.

## Badges and achievements

Use the installed badge or rewards integration to define the achievement and its award criteria. Choose a name, image, and description that tell the learner what they accomplished.

Test the triggering event with a learner account. Check whether the award appears in **Achievements**, and confirm the intended behaviour for repeated completion or revoked achievements.

Joomla can connect to the supported Rewardify integration. WordPress uses the available native or connected rewards implementation. The presence of a badge tab does not mean an external rewards service has been configured.

## Exportable credential formats

Available formats depend on your installed packages and signing services. Core credential support includes VidyaLMS's own data format and Open Badges 2 PNG. Additional packages can supply signed Open Badges 3, CLR 2, signed PDF, and credential status-list capabilities.

For a signed format, have your administrator configure the issuer identity, signing connection, and any published status endpoints required by that provider. A normal certificate preview does not establish that a cryptographic signature has been configured.

Keep verification and status URLs stable. If you change the website domain, plan how previously issued credentials will still be verified.

## Test what a recipient receives

Issue a test credential, download it using the learner account, and check the public verification result. If you plan to use another credential wallet or verifier, test that exact format with that service before advertising compatibility.

Use the supported revocation or replacement workflow to change an issued credential's status. Retain the reason and history for authorized review. See [certificates](certificates.md) and [privacy and retention](../maintenance/privacy.md).
