---
title: Sell course access through your shop
description: Understand where to configure prices, payments, orders, and the connection to VidyaLMS enrolments.
---

VidyaLMS connects a successful shop purchase to learning access. **EasyCommerce handles sales on Joomla. WooCommerce handles sales on WordPress.** There are no built-in VidyaLMS payment gateways to configure.

## Where each setting belongs

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| What you want to change | Where to do it |
| --- | --- |
| Course content, publication, and whether access is paid | VidyaLMS course builder |
| Which Joomla product grants which courses | VidyaLMS **Settings → Shop integrations → Product & course mappings** |
| Which WordPress product grants a course | WooCommerce product **General → Grants access to course** |
| Price, tax, coupon, payment method, invoice, or refund | EasyCommerce or WooCommerce |
| Recurring billing and subscription changes | The shop's supported subscription system |
| Automated enrolment permissions | VidyaLMS background enrolment account |
| Learning progress and certificates | VidyaLMS |
| Financial reports | The shop |

</div>

The older-looking phrase **CMS shop** describes the connected commerce source. It is not a price editor or a payment method.

## How a purchase becomes access

1. You publish a paid course and connect it to a shop product.
2. A customer signs in and buys that product through the shop.
3. The shop confirms an eligible paid order or subscription state.
4. VidyaLMS synchronizes the purchase and grants the associated learning access.
5. The learner opens **My learning** to start or resume the course.

Returning from the payment page is not, by itself, payment confirmation. Background processing may still be completing. Repeated payment notifications should not create duplicate learning records.

The customer must have a website account associated with the purchase. A guest email address alone is not enough to identify which learner should receive access.

## Start with one product

Follow the guide for [EasyCommerce](easycommerce.md) or [WooCommerce](woocommerce.md). Test one low-risk product using your shop's test payment mode before creating a large catalogue.

Confirm the whole journey: sign in, purchase, payment confirmation, course access, repeat synchronization, and refund or expiry. Check the result with the customer account rather than a site administrator, who may have wider access.

## After the sale

On Joomla, the learner's **Account** link opens the EasyCommerce account area. Orders and subscriptions are managed there. On WordPress, use the shop's account area for the same financial tasks.

A learner can have more than one valid access source. A shop refund removes the affected shop-derived grant when the refund rules require it; it does not erase progress or remove an independent manual or organization grant. See [subscriptions and refunds](subscriptions-refunds.md).
