---
id: index
title: Backend Administration Guide
sidebar_label: Overview
sidebar_position: 1
---

# Backend Administration Guide

Reference for the EasyCommerce admin application: where each screen lives, what it does, and which shared interactions apply across the catalog.

## Accessing the Admin Panel

Navigate to **Components &rarr; EasyCommerce**. The admin loads a single-page application with a left navigation rail and a top-level header.

## Admin Sections

| Section | Purpose |
|---------|---------|
| [Dashboard](dashboard.md) | Period snapshots, alerts, top products, recent orders |
| [Products](products.md) | Product catalog, variations, inventory |
| [Orders](orders.md) | Order processing, refunds, invoices |
| [Customers](customers.md) | Customer accounts and lifetime stats |
| [Coupons](coupons.md) | Discount codes |
| [Subscriptions](subscriptions.md) | Recurring billing and dunning |
| [Reviews](reviews.md) | Product review moderation |
| [Reports](reports.md) | Sales, tax, shipping, and channel analytics |

Settings live under their own group and gate on `core.admin`. See the [Configuration](../configuration/index.md) section for each panel.

## Common Interaction Patterns

### Search and Filters

List screens (Products, Orders, Customers, Coupons, Subscriptions, Reviews) share the same toolbar layout:

- Debounced text search (500 ms)
- Page size selector (10 / 20 / 50 / 100)
- Sort dropdown with field-specific options
- Filter toggle with an Advanced Filters panel
- Active-filter count badge and **Clear All** button

Most lists support clicking a column header to toggle that column's sort direction.

### Bulk Actions

Selecting one or more rows opens a fixed action bar at the bottom of the screen. The action set is screen-specific. The cross-cutting actions are:

- **Delete** (Products, Customers)
- **Mark Processing / Mark Completed / Mark as Paid / Cancel / Delete** (Orders)
- **Approve / Pending / Spam / Trash** (Reviews)
- **Activate / Hold / Cancel** (Subscriptions)

Bulk delete is gated on the row's eligibility. Orders tied to a billing subscription, with a paid or refunded payment, or with an issued invoice cannot be deleted.

### Permissions

All settings screens, the import/export endpoints, and irreversible bulk actions require the `core.admin` permission. Lower-tier permissions (`core.manage`, `core.edit`, `core.delete`) gate day-to-day record management.
