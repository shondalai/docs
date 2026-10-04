---
title: Understand subscriptions, refunds, and access changes
description: Learn how shop state affects course access without deleting a learner's progress.
---

Make every payment, refund, and subscription change in EasyCommerce or WooCommerce. VidyaLMS synchronizes the resulting learning access. It does not calculate refund fees or maintain a second financial ledger.

## One-time purchases

An eligible paid purchase grants the mapped course access. A cancellation or qualifying refund can end the grant associated with that purchase. The learner's submissions, grades, and progress remain in their learning history, subject to your retention policy.

Another valid grant may keep the course accessible. For example, refunding a personal purchase does not remove an active organization assignment for the same course.

## Refunds differ by shop

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Situation | Expected access treatment |
| --- | --- |
| WooCommerce course line fully refunded by quantity or value | The affected line's access can be removed |
| WooCommerce partial line refund or fee-only refund | Access is retained for the remaining eligible purchase |
| Another eligible order line still grants the same course | That separate grant continues |
| EasyCommerce amount-only partial refund | Access is retained while the order remains eligible; an amount alone does not identify which course to remove |
| EasyCommerce fully refunded or cancelled order | The order's corresponding access is removed |
| EasyCommerce identifies a fully refunded line by cumulative refunded quantity | The affected line can lose its access |

</div>

Refund the intended product line where your shop supports it. A goodwill adjustment to shipping, tax, or a fee should not be treated as proof that a particular course was returned.

## Subscriptions and renewals

The shop owns the subscription and its billing schedule. VidyaLMS uses the supported active state and paid access dates to grant or extend learning access. A renewal is associated with its own payment period.

Refunding an older period does not automatically revoke a newer, valid paid period. A refund affecting the current period must be reviewed against that period's course line and subscription state.

For WooCommerce pending cancellation, access may continue until the known paid-through date. A cancellation request is different from immediate loss of paid access. If the shop has no usable expiry or next-payment information, investigate the subscription record rather than promising a particular access date.

## Check a change end to end

1. Record the order, product line, customer, and subscription involved.
2. Make the intended change in the shop.
3. Allow the relevant event processing or reconciliation to finish.
4. Review the learner's access sources and expiry dates in VidyaLMS.
5. Check with the learner account whether entry is allowed.

Changes are not guaranteed to appear instantly: queue and scheduler health matter. See [scheduled tasks](../maintenance/scheduled-tasks.md).

## Seats and historical mappings

A shop purchase may fund organization capacity when the supporting integration is installed. Review the funding and seat state after a financial change; returning an individual seat is a separate learning-management action.

Changing today's product mapping does not reinterpret a previously synchronized purchase. If an earlier mapping was wrong, correct the future mapping and review affected access explicitly. Keep a record of any manual correction.
