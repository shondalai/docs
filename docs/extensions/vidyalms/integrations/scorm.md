---
title: SCORM packages
description: Upload SCORM 2004 courses in Pro, choose how they complete and check saved progress.
---

If you already create courses in iSpring, you can use a SCORM 2004 export as a lesson in VidyaLMS Pro. The player, package upload and tracking are included in Pro for both Joomla and WordPress. You do not need to buy another player or connect an external learning record store.

## Before you upload

Install matching versions of VidyaLMS Free and Pro. Your site needs working private storage and PHP's ZIP and DOM extensions. Ask your administrator to check **Settings → Files & storage** if uploads or downloads are unavailable.

Export your course for **SCORM 2004**, with one launchable activity, often called a **single SCO**. A single SCO can contain many slides, videos and quiz questions. Keep the exported ZIP intact: its `imsmanifest.xml` must be at the top level, not inside an extra folder.

The ZIP limit is **64 MB**, or your server's upload limit if that is smaller. The expanded package may contain up to 10,000 files and total 512 MB; no individual file may exceed 64 MB. Packages must contain their own HTML, scripts, images, fonts and media. Server scripts, symbolic links, encrypted entries, unsafe paths and external manifest entities are refused.

## Add the lesson

1. Open your course in the course editor and add a lesson to a module.
2. Choose **SCORM 2004 package**.
3. Select **Upload SCORM 2004 ZIP** and wait for validation to finish. The package title appears when it is ready.
4. Choose **The package reports completion**, or **The package reports a pass** if passing the package's assessment is required.
5. Set a maximum number of attempts. Use **0** for unlimited attempts.
6. Save the lesson and publish it when the course is ready.

The pass mark belongs to your authored package. Configure it in iSpring before exporting. VidyaLMS records the package's completion and success values separately; reaching the last slide does not necessarily mean passing a quiz.

Packages belong to the course where they were uploaded. Upload a copy in another course if you need it there. Replacing a lesson's package starts a new attempt when learners next open it; old attempts remain in the history and are not converted to the new package's resume format. The attempt limit counts the lesson's previous attempts too. Existing completed lessons remain completed; use a new lesson if replacement content must be completed again.

## Starting, leaving and resuming

Learners select **Start or resume package**. Their latest attempt opens with its saved bookmark, suspend data and interactions. The package decides which slide or question to show from that data.

Use **Save and close package**, or the package's own exit control, before leaving. Moving to another lesson asks the player to save and close first. VidyaLMS also saves after changes and periodically while the package is open. Look for **Progress saved** before closing the browser. If the connection fails, keep the page open and select **Retry save**. Changes that have not reached the server cannot be recovered after the tab is closed.

**Start a new attempt** creates a separate record and starts the package again. Resuming does not consume another attempt. Open a package in only one tab: reopening it invalidates the older tab's session. Package links expire after eight hours and stop working when course access is withdrawn. Reopen the lesson to continue after a session expires.

## Viewing results

Learners see their attempts below the player when it is closed. Instructors can open the SCORM lesson in the course editor to see its attempt history. The table shows the latest 200 attempts, including completion, pass/fail, raw and scaled score, and recorded time. **View tracking** shows bookmarks, interactions and other saved tracking fields. Completion dates are shown in UTC.

These are the values the package sends. A package that does not report question interactions cannot produce an interaction report. SCORM tracking runs in the learner's browser; it is not a tamper-proof examination or proctoring system. Time is accumulated per session and capped against elapsed server time.

Attempts and resume data are included in VidyaLMS's personal-data export and erasure tools. Package links are private, should not be shared, and must not be cached by a CDN or page-cache rule.

## Check your iSpring package

The player implements `API_1484_11`, the SCORM 2004 interface used by iSpring, and preserves up to 64,000 characters of suspend data. Before moving a live course, use a test learner to:

- Open the exported ZIP and check slides, audio, video, fonts and quiz controls.
- Leave halfway through, close the browser, sign in again and confirm the package resumes correctly.
- Complete both a failed and a passed attempt. Compare scores and completion with the settings in iSpring.
- Check the interactions you need for reporting, then start a second attempt and confirm the first remains visible.
- Repeat in the browsers and mobile devices your learners use. Briefly disconnect the network and check the save/retry message.

Automated fixtures cover the runtime and resume flow, but a representative customer iSpring ZIP is still needed to confirm that specific export's compatibility. This implementation is not advertised as ADL-certified.

## Current boundaries

- SCORM 1.2, xAPI/Tin Can packages, cmi5 and multi-SCO sequencing are not supported. Export one SCORM 2004 SCO instead.
- Packages run in an isolated frame. They cannot read your CMS page or cookies. Content that depends on same-origin parent access, browser storage, external scripts or external API calls may need to be re-exported as self-contained content.
- Packages using `xml:base`, launch URL query parameters or multiple launchable activities are rejected rather than partially imported.
- Shika and other migration importers do not automatically migrate SCORM ZIPs, old SCORM attempts or resume records. Upload the original ZIPs separately and plan historical-data migration as a separate task.
- Your server must pass `/index.php/vidyalms-scorm/...` requests to PHP. Exclude those URLs from caching and download interception. If the player is blank, check the browser console and server routing with your administrator.

If Pro is deactivated, SCORM playback is unavailable, but stored packages and attempts remain. An expired update subscription does not deactivate the installed Pro player.
