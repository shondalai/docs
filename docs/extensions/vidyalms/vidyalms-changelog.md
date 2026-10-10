---
id: vidyalms-changelog
sidebar_position: 100
title: Changelog
---

# VidyaLMS Changelog

All notable changes to VidyaLMS are recorded here. This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses [Semantic Versioning](https://semver.org/).

## [1.0.1] - 2026-10-10

Security and privacy release with smaller packages. It carries the fixes from the 5 October remediation, moves PDF rendering to VidyaLMS Pro on Joomla and WordPress, and publishes the free source at https://github.com/shondalai/vidyalms-free.

### Free

- Fix quiz scoring, course visibility, lesson availability and learner progress checks.
- Restrict private downloads, uploads, reports and organisation records to authorised users.
- Improve privacy erasure, retention, background jobs and commerce enrolment reconciliation.
- Harden private storage defaults, import handling and certificate rendering.
- Fix WordPress React 18 forms, multisite lifecycle and package compatibility.
- Correct Joomla installation, upgrade, uninstall and non-SEF link handling.
- Hide experimental database importers from the normal import list.
- Add schema migrations for privacy file deletion, notification retention and unit-scoped imports.
- Queue scheduled report emails reliably, honour their subject and message, and keep their links usable for the report retention period.
- Recheck report scope before returning a saved export after a staff member loses access.
- Verify assignment attachments against their stored bytes, including each assignment's size and file-type limits.
- Erase unattached learner uploads and required-learning records; preserve shared schedules when a staff account is erased.
- Refuse automatic erasure of mixed-learner AI drafts until an administrator reviews the shared text.
- Translate automation labels and allow an unenrolment rule to name the rule whose access it reverses.
- Preserve supported media and readable question text during Moodle imports.
- Recognise localized database duplicate-key errors.
- Issue certificates as HTML documents with a verification code; PDF certificate files and PDF report exports now come from VidyaLMS Pro.
- Keep designs that chose the PDF renderer issuing on sites without VidyaLMS Pro: they are drawn as HTML, and republishing one asks for the Designed certificate renderer.
- Ship smaller packages: the free Joomla and WordPress packages no longer carry the PDF engine or JavaScript source maps, and the WordPress plugin no longer carries a copy of the interface source or bundled translation files. WordPress translations come from translate.wordpress.org.
- Publish the complete free source, including the uncompiled interface and its build instructions, at https://github.com/shondalai/vidyalms-free.

### Pro

- Fix hotspot answer validation, tenant scope, SCIM and authenticated SSO handling.
- Harden AI route scope, credential signing secret references and notification feedback validation.
- Correct update validation, dependency checks and shared licensing lifecycle.
- Hide verified-domain joining when the host cannot supply verified email addresses.
- Require AICore administration permission to configure local AI billing and prevent routes overriding the billing account.
- Let instructors preserve manager-placed restricted questions while saving their quiz, without granting access to further bank items.
- Render PDF certificates and PDF report exports on Joomla and WordPress from Pro, which now carries the PDF engine the free packages no longer ship.
- Isolate PDF debug state from other WordPress plugins.

## [1.0.0] - 2026-10-06

### Added

- First release for Joomla and WordPress, with Free and Pro editions.
- Courses with lessons, quizzes, downloadable resources and practical assignments.
- Learner progress, submission review, grading and certificates.
- Paid course access through EasyCommerce on Joomla and WooCommerce on WordPress.
- Advanced assessments, cohorts, reporting and integrations in Pro.
- Account downloads for both platforms and licensed automatic updates for Pro.
