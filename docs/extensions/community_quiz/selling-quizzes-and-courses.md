---
id: selling-quizzes-and-courses
title: Selling Quizzes & Courses
sidebar_label: Selling (EasyCommerce)
---

# Selling Quizzes & Courses

This guide explains how to charge for your quizzes, exams, and courses using Community Quiz's built-in commerce, which runs on the **EasyCommerce** component. It covers putting items up for sale, memberships, bundles, coupons, and what happens when someone buys.

> **Audience:** Anyone who wants to earn from their content. No technical knowledge needed, though you will work alongside the EasyCommerce store settings.

[← Back to Overview](./overview.md)

Community Quiz does not run its own checkout, payments, or invoices. Instead it connects to **EasyCommerce**, the Shondalai e-commerce component, which handles the cart, payment gateways, orders, refunds, and subscriptions. Community Quiz adds the bridge: it lists your quizzes and courses as products, and when a payment clears it grants the buyer access automatically. You manage all of it from the **Commerce** area inside Community Quiz, without leaving the component for day-to-day work.

---

## 1. How it fits together

```
You price a quiz/course  →  It is listed as an EasyCommerce product
   →  A learner buys it through EasyCommerce checkout
   →  Payment clears  →  Community Quiz grants access automatically
   →  Refund / cancellation  →  Access is removed automatically
```

The two components stay in sync through a small connector plugin. EasyCommerce owns the money side; Community Quiz owns the access side. You set prices once, and access follows payment without any manual steps.

---

## 2. Before you start

Three things must be in place:

1. **EasyCommerce is installed and set up**, with at least one payment gateway configured (this is done in EasyCommerce itself).
2. **The connector plugin is installed and enabled.** Community Quiz ships an EasyCommerce integration plugin (`plg_easycommerce_communityquiz`). Install it through Joomla's **Discover** if it is not already present, then enable it. This plugin is what grants access when an order is paid; without it, payments will not unlock anything.
3. **Selling is switched on** in Community Quiz's Commerce settings (see below).

> **Important:** if the connector plugin is disabled, the Commerce area's Integration tab shows the connection as inactive, and purchases will not grant access. This is the first thing to check if a paid item does not unlock after payment.

---

## 3. The Commerce area

Open **Commerce** inside Community Quiz. It has five tabs:

| Tab | What it is for |
|-----|----------------|
| **Overview** | A dashboard: recent revenue, orders, active subscriptions, refund rate, top sellers, and a revenue trend. |
| **Products** | Your sellable quizzes, exams, courses, and bundles, with pricing and sync controls. |
| **Orders** | A read-only view of EasyCommerce orders (paid, pending, refunded). |
| **Plans and coupons** | Membership plans, bundles, and discount codes. |
| **EasyCommerce integration** | Connection status, how order events map to access, and an event log. |

### Settings (Integration tab)

| Setting | What it does |
|---------|--------------|
| **Enable selling** | Turns commerce on across the component (product pricing, purchase buttons on the site). |
| **Default currency** | The currency used when an item has none set of its own (for example USD). |

---

## 4. Putting a quiz or course on sale

1. **Publish the item.** Only published quizzes, exams, and courses can be sold.
2. **Open the Products tab** in the Commerce area. Your published items appear here, ready to price.
3. **Choose a pricing model** for the item:

| Pricing model | What it means |
|---------------|---------------|
| **Free** | Not sold. No price, no checkout. |
| **One-time** | A single payment buys permanent access. |
| **Subscription** | Recurring billing (handled by EasyCommerce) for ongoing access. |

4. **Set the price and currency.** The price must be greater than zero for a paid item.
5. **Sync the product.** Click **Sync** to push it to EasyCommerce. Once synced, the item is **Listed** and can be bought.

The product's **sync status** tells you where it stands:

| Status | Meaning |
|--------|---------|
| **Not synced** | Priced but not yet pushed to EasyCommerce. |
| **Listed** | Live in the store and purchasable. |
| **Free** | Set to free; not sold. |
| **Error** | The last sync failed; the message tells you why (commonly a price of zero). |

> **Tip:** you can also set a quiz's or course's access model to **Paid** on its Delivery / Enrollment tab. Either way, the price you set in the Commerce area is what the store charges, and the item must be **Listed** to be bought.

---

## 5. Membership plans

A **membership plan** sells all-access on a recurring basis instead of selling items one by one. A member gets into everything the plan covers for as long as their subscription is active.

Create a plan from the **Plans and coupons** tab:

| Field | What it means |
|-------|---------------|
| **Plan name** | The name shown to buyers. |
| **Billing** | **Subscription** (recurring) or **One-time**. |
| **Price + currency** | What the plan costs per billing cycle. |
| **Bill every / period** | For subscriptions: the cycle, e.g. every 1 month or every 1 year. |
| **Free trial** | Optionally offer a trial of a set length before billing starts. |

Click **Publish** to list the plan in EasyCommerce. Deleting a plan removes it from the store but keeps access for people who already subscribed.

---

## 6. Bundles

A **bundle** groups several quizzes, exams, or courses and sells them together at one price (usually a discount on buying each separately). Create one from the **Plans and coupons** tab:

| Field | What it means |
|-------|---------------|
| **Bundle name** | The name shown to buyers. |
| **Price + currency** | The single price for the whole bundle. |
| **Description** | Optional text shown with the bundle. |
| **Included items** | Search and pick the published quizzes, exams, and courses to include. |

When someone buys a bundle, they are granted access to **every** item in it (and courses they buy are enrolled automatically). Deleting a bundle removes it from sale but keeps access for existing buyers.

---

## 7. Coupons

Coupons are discount codes, stored and validated by EasyCommerce but managed from Community Quiz's **Plans and coupons** tab:

| Field | What it means |
|-------|---------------|
| **Code** | The code buyers type at checkout (uppercase, unique). |
| **Discount** | **Percent off** or a **fixed amount off**. |
| **Value** | The percentage or amount. |
| **Status** | Active or disabled. |
| **Max uses** | A usage cap (blank means unlimited). |
| **Starts / Expires** | An optional date range the code is valid for. |

> **Tip:** combine a start and expiry date with a max-use cap to run a time-boxed launch promotion.

---

## 8. What the buyer experiences

1. **They see a price.** On a paid quiz or course, the learner sees the price and a buy button instead of a free "start" button. They can still take any **free preview** content first.
2. **They check out.** The buy button adds the item to the EasyCommerce cart and sends them to checkout, where they pay with one of your configured gateways (and can enter a coupon).
3. **Access is granted instantly.** As soon as the payment clears, Community Quiz grants access: a quiz or exam unlocks, and a course also **enrols** the learner automatically.
4. **They keep access** for as long as their purchase entitles them to (forever for a one-time purchase, or while a subscription stays active).

### Free preview and inline unlock

For paid quizzes, you can mark some content as a **free preview** so learners can try before they buy. When a preview ends, an **Unlock** button takes them straight to checkout for the full item. The same idea applies to courses through preview lessons. See [Courses & Enrollment](./courses.md#6-free-previews-and-paid-courses) and the [Scoring Guide](./scoring-guide.md) for how preview attempts behave.

---

## 9. How access is granted and removed

Behind the scenes, every purchase creates an **entitlement**: a record that a particular learner may access a particular item. Entitlements are what the site checks before letting someone into a paid quiz or course.

| Event | What happens to access |
|-------|------------------------|
| **Order paid / completed** | Access is granted (and the learner is enrolled, for courses). |
| **Order refunded** | Access is removed. |
| **Order cancelled** | Access is removed. |
| **Subscription expired** | Membership access ends at the end of the paid period. |

This is automatic and idempotent: if EasyCommerce sends the same event twice, access is not double-granted or double-removed.

You can also **grant access manually** (for example, to give a colleague a course without a purchase) from the admin. A manual grant is recorded with its own source so you can tell it apart from a sale.

---

## 10. Orders and revenue reporting

The **Overview** tab is your at-a-glance dashboard: revenue and order counts over the last 30 days, active subscriptions, refund rate, average order value, a 14-day revenue trend, your top-selling items, and recent orders. The **Orders** tab lists individual orders mirrored from EasyCommerce (paid, pending, refunded) so you can see who bought what without leaving Community Quiz.

These figures come from EasyCommerce order data as it flows in, so they stay current with your real sales. For the full order detail, invoices, and payment management, use the EasyCommerce component itself.

---

## 11. Setup checklist

1. Install and configure **EasyCommerce**, including at least one **payment gateway**.
2. **Discover-install and enable** the Community Quiz EasyCommerce connector plugin.
3. In Community Quiz → Commerce → Integration, turn on **Enable selling** and set your **default currency**.
4. Confirm the Integration tab shows the connection as **active**.
5. On the **Products** tab, price an item (one-time or subscription, price above zero) and **Sync** it so it shows as **Listed**.
6. (Optional) Create **membership plans**, **bundles**, and **coupons**.
7. Make a **test purchase** and confirm the item unlocks (and the course enrols) on payment.

---

## 12. Troubleshooting

- **A paid item did not unlock after payment.** Check the connector plugin is **enabled** and the Integration tab shows the connection as **active**. This is the most common cause.
- **An item will not sync ("Error").** The price is probably zero, or the item is not published. Set a price above zero on a published item and sync again.
- **No buy button appears on the site.** Confirm **Enable selling** is on, the item's pricing is set, and its product shows as **Listed**.
- **A coupon is rejected at checkout.** Check it is **Active**, within its date range, and under its usage cap. Coupons are validated by EasyCommerce.
- **Revenue figures look empty.** They populate from orders as they come in; make a test purchase to confirm the connection, and check the EasyCommerce orders for the underlying data.
- **A refunded customer still has access.** Confirm the refund was processed in EasyCommerce; access is removed when the refund event reaches Community Quiz through the connector plugin.

---

## Related

- [Courses & Enrollment](./courses.md) - how buyers are enrolled and how preview/unlock works.
- [Quiz & Exam Builder](./quiz-builder.md#5-delivery-tab--when-and-how-learners-take-it) - the access model and price for an exam.
- [Course Builder](./course-builder.md#4-enrollment-tab--access-pricing--completion) - the access model and price for a course.
- [Certificates](./certificates.md) - credentials your paid assessments can award.
