---
title: Connect WooCommerce on WordPress
description: Link WooCommerce products and variations to paid VidyaLMS courses and verify automatic access.
---

Install and activate WooCommerce alongside VidyaLMS on the same WordPress site. Complete the shop's currency, tax, payment, and checkout setup before connecting courses.

## 1. Prepare a paid course

Open the course in VidyaLMS. Under **Access → Visibility & pricing**, choose paid access and save. Check that the course is published and that its availability dates are appropriate.

The course's paid setting controls access. Enter its selling price on the WooCommerce product.

## 2. Link a product

Edit a WooCommerce product. In its product data **General** section, find **Grants access to course** and select the paid VidyaLMS course. Save or update the product.

This mapping grants one course for that product. Do not assume the Joomla multiple-course mapping editor is also present in WordPress.

For a variable product, review each variation's course setting. A variation can inherit the product's course, grant a different course, or grant none. A variation set to grant none should not be used to sell course access accidentally.

Set the product's normal WooCommerce price and other product options. A virtual product is usually appropriate when nothing physical is being shipped; make that choice according to what you actually sell.

## 3. Require an identifiable customer

Configure checkout so course buyers have a WordPress customer account and sign in or create that account during checkout. The order must be associated with the correct customer ID. Matching a guest email address to a learner is not sufficient for automatic access.

Check the VidyaLMS background enrolment account and ensure it has permission to enrol learners in the mapped course.

## 4. Check background processing

The connection uses WooCommerce's available scheduled processing, with WordPress scheduling as a fallback. Make sure scheduled actions and WP-Cron are working. On a quiet site, ask your host to arrange a reliable scheduled trigger rather than depending on visitors alone.

See [scheduled tasks](../maintenance/scheduled-tasks.md) for the wider academy queue.

## 5. Test the purchase

Buy the product with a separate learner account using your payment gateway's test mode. Confirm that the shop records an eligible paid state, processing completes, and the course appears in **My learning**.

Do not treat the browser's return from checkout as proof of payment. If access is delayed, check the order's customer, purchased variation, saved mapping, background permissions, and scheduled action results.

## Recurring access

Recurring products require **WooCommerce Subscriptions** and its supported payment setup. A regular simple product does not become a subscription merely because the linked course has an expiry date.

Manage renewals, cancellations, invoices, and refunds in WooCommerce. VidyaLMS follows the supported subscription and order state to maintain learning access. Read [subscriptions and refunds](subscriptions-refunds.md), then test renewal and cancellation before using recurring access with real customers.
