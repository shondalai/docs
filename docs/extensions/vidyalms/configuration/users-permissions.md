---
title: Set up administrators, instructors, and learners
description: Give people the permissions they need without granting unnecessary control of your whole website.
---

VidyaLMS uses your existing Joomla or WordPress accounts. A learner should sign in with the same account they use to buy courses and join organizations. Creating a second account with another address can make paid access appear to be missing.

## Choose the right responsibility

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Person | Typical work |
| --- | --- |
| Site administrator | Install packages, configure the academy, manage integrations and permissions |
| Instructor | Build assigned courses, assess work, enrol learners where allowed, and read course reports |
| Organization manager | Manage members, units, released courses, and seats within their delegated scope |
| Learner | Join or buy courses, study, submit work, and view their own results |

</div>

Teaching permission, course assignment, organization membership, and paid access are different things. A person may hold more than one responsibility without receiving every permission on the website.

## Joomla

Create the person's account and assign the appropriate Joomla user group. In the component permissions, review **Teach**, **Grade**, **Enrol**, **Reports**, and organization-management permissions. Joomla's access to the component and its administrator interface is separate from permission to perform a learning action.

Use a dedicated teaching group instead of making every instructor a Super User. If the installed package supplies an Instructors group, review its permissions before using it. Add instructors to the relevant course's teaching team in **Course details**.

For a frontend instructor page, both its menu access level and the person's teaching permission must allow entry. Hiding a menu item is not a substitute for permission checks.

## WordPress

In **Users**, assign the **VidyaLMS Instructor** role for teaching work. The plugin supplies teaching, grading, enrolment, and reporting capabilities for this role. Add the person to the relevant course's teaching team.

The **VidyaLMS Organisation Administrator** role opens the delegated organization area. It does not make the user a site administrator or give them authority over every organization. Their organization role and unit assignments still determine what they can manage.

An existing custom role can be configured by your site administrator if it needs only selected VidyaLMS capabilities. Avoid granting WordPress Administrator just to make one missing course button appear.

## Background enrolment account

Open **Settings → Shop integrations**, choose **Change** beside the background account, select a real CMS account, and save that section. It must be allowed to enrol learners on every mapped paid course.

This is the account the application uses when processing shop events and scheduled access updates. It is not the buyer, a payment gateway credential, or an instructor selected for each order. If the account is blocked or loses permission, investigate failed synchronization instead of entering payment credentials here.

## Verify a new role

Sign in as a test user with the same role. Check the visible courses, grading queue, reports, and organization scope. Confirm the person can perform the intended task and cannot open unrelated management areas. If a control is missing, also check whether its supporting extension is installed; permissions cannot add a feature that is absent.
