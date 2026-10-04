---
title: Connect EasyCommerce on Joomla
description: Configure paid courses and product mappings inside VidyaLMS, then test the purchase-to-enrolment journey.
---

Install EasyCommerce and VidyaLMS on the same Joomla site. EasyCommerce must already be able to sell a product through your chosen payment method. Use its [store documentation](/easycommerce/overview) for pricing and checkout setup.

## 1. Prepare the course and product

In VidyaLMS, open the course and go to **Access → Visibility & pricing**. Choose paid access and save. Finish the course's publication and availability settings.

In EasyCommerce, create or open the product that will sell that access. Set its price, tax treatment, and any subscription options in the shop. Publish the product when you are ready to test.

## 2. Enable the event connection

In Joomla's plugin manager, enable the installed **VidyaLMS EasyCommerce integration** plugin. Its job is to receive shop events. You configure course mappings in the component, not in the plugin's settings.

If the plugin is absent, check that the EasyCommerce integration package has been installed. Enabling a payment plugin in EasyCommerce does not install the LMS connection.

## 3. Map products to courses

Open **VidyaLMS → Settings → Shop integrations → Product & course mappings**.

1. Add a mapping and select the EasyCommerce product.
2. Select a variation if the rule is only for that variation. Otherwise, use the product-level mapping.
3. Select the paid course or courses that the purchase should grant.
4. Save and review the displayed mapping.

A variation-specific mapping takes precedence over the product-level mapping. Check each variation you sell; do not assume it inherits a different variation's courses.

Mappings are captured when a purchase is first synchronized. Editing or removing a mapping affects future, not-yet-processed purchases. It does not rewrite the access promised by an already processed order.

## 4. Choose the background account

In the shop integration settings, select a **background enrolment account** that can enrol learners in every mapped course. Save the account selection.

Shop events and scheduled jobs use this account's authority. An account that is disabled or lacks course enrolment permission can prevent an otherwise valid purchase from granting access.

## 5. Run the scheduled tasks

Enable the job queue processing and **reconcile EasyCommerce access** task described in [scheduled tasks](../maintenance/scheduled-tasks.md). Reconciliation checks shop state again when an event was delayed or missed.

## 6. Test as a customer

Use a separate Joomla learner account and EasyCommerce's test payment setup. Buy the mapped product and allow synchronization to finish. Confirm that the course appears in **My learning** and opens successfully.

Check the learner's **Account** link too. This opens EasyCommerce, where the customer can review orders and subscriptions. VidyaLMS does not issue a separate invoice.

If the order is paid but access is missing, check the order's customer account, exact product or variation mapping, saved paid course setting, background account permission, and processing errors. Do not mark unrelated orders as paid just to test access. Finish by testing the appropriate [refund or subscription transition](subscriptions-refunds.md).
