---
title: Measure active learning time
description: Configure inactivity handling and understand what the lesson timer does and does not measure.
---

VidyaLMS measures activity in the lesson player. It distinguishes this from simply being signed in to the website.

## Set the inactivity timeout

Open **Settings → Learner experience → Learning inactivity timeout (seconds)**.

The default is **300 seconds**, or five minutes. The supported range is **30–3600 seconds**. Choose a value that suits the activities learners perform, then save.

A very short timeout can undercount thoughtful reading. A very long one can count time after someone has walked away. Explain your chosen policy to instructors and learners.

## What counts

A visible, focused lesson can accrue time while the learner remains active. Interaction refreshes activity. Media playback that continues to advance also counts as activity when the player is visible and focused.

Hidden tabs and unfocused windows pause accounting. A static page stops accruing time after the inactivity timeout. Interaction resumes accounting.

For example, with a five-minute timeout, opening a static lesson and leaving it untouched for three hours does not record three hours of training. At most the initial activity window is counted. Conversely, a person reading without interacting beyond five minutes will stop accruing time until they interact again.

## Heartbeats and credited time

The player periodically sends a progress update, often called a **heartbeat**. The settings summary describes the current interval and maximum amount of time that one update can credit.

This maximum prevents a delayed update from treating an arbitrarily long gap as uninterrupted training. It is not the inactivity setting and does not mean every update automatically awards that maximum number of seconds.

## Review the report

Open **Reports → Active learning time (cumulative)**. Filter by course and learner as needed. The rows identify the learner, course, module, and lesson, together with time and progress information.

The report is cumulative. A lesson total that grew over several visits must not be treated as time spent entirely on its last activity date. Use the separate chronological activity report to investigate when recorded events occurred.

## Understand the limits

This is browser activity and playback measurement, not proof of attendance, attention, or identity throughout the session. It does not measure offline study, time elsewhere in the CMS, or every action in an external website.

Connection interruptions, browser behaviour, and the availability of media signals can affect what is recorded. Historical totals are not recalculated simply because you change the timeout today.

For evidence of a practical skill, combine the time report with completed lessons, quizzes, [assessed assignments](../courses/assignments.md), and instructor feedback.
