---
title: Manage seats and invitations
description: Allocate limited learning places, handle pending allocations, and understand seat return policies.
---

A **seat** is a training place in a course. A **seat pool** records how many places an organization can allocate. The shop may fund those places, but VidyaLMS manages who uses them.

Seat-management features depend on the installed organization package and your permissions.

## Prepare a pool

1. Release the course to the organization in **Course access**.
2. Open **Seats & capacity** and create or open the pool for that course.
3. Give it a useful name, confirm its funded capacity, and choose the return policy.
4. Assign places to active members.
5. Confirm that each allocation is active and that the learner can enter the course.

Where funding comes from the shop, use the connected funding workflow. Do not increase capacity just to hide a missing or failed purchase synchronization.

## Choose a return policy

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Policy | Meaning |
| --- | --- |
| Never | Allocated places cannot be returned through the ordinary return action |
| Before starting | A place may be returned while the learner has not started |
| Before completion | A place may be returned until the learner completes the training |

</div>

Completion does not automatically recycle a seat. Choose a policy that matches how you sold or allocated the training places.

## Handle a full pool

An allocation can remain **pending** when no place is available. A pending allocation does not consume an occupied seat and does not grant course access.

After increasing legitimate capacity or returning a permitted seat, review pending allocations and use the available allocation action. An optional automatic promotion service can process them when installed and running. Do not promise immediate access to someone whose record still says pending.

The capacity ledger records seat changes. If the interface reports a discrepancy, resolve the underlying funding or allocation issue before trying again. Editing totals directly in the database can make the record less reliable.

## Invite a new person

An invitation starts the membership process; it is not proof that the person has joined. The recipient must complete the required verification and acceptance steps with the intended account.

Check the invitation state before sending another. If a link has expired, use the supported resend or replacement action. For missing messages, check the address, email channel, notification rule, and [delivery controls](../communication/notifications.md).

## Delegated capacity

Business organization tools can support delegated or subdivided capacity. Availability depends on the installed integration and the administrator's scope. Confirm both the parent pool's limits and the delegated allocation before assigning places.

Refunds and subscription changes belong in the [shop](../commerce/subscriptions-refunds.md). Review their resulting effect on funded capacity and assignments separately from returning an individual seat.
