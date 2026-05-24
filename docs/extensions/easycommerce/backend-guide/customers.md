---
id: customers
title: Managing Customers
sidebar_label: Customers
sidebar_position: 5
---

# Managing Customers

Inspect customer accounts, lifetime spend, order history, addresses, and subscriptions.

## Customer List

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Name or email |
| Sort | Newest, Oldest, Name A-Z, Name Z-A, Total Spent high/low, Orders high/low |
| Filters | Order filter (High Value, Active, Inactive), Spend range, Minimum order count |
| Resync Totals | Recalculate per-customer aggregates from the orders table |

### Columns

| Column | Description |
|--------|-------------|
| Name | Customer name |
| Email | Email address |
| Total Orders | Lifetime order count |
| Total Spent | Lifetime gross revenue, formatted in the store currency |
| Created | Registration date |

### Bulk Actions

- **Delete** removes selected customers. Joomla user accounts and tied orders are preserved; only the EasyCommerce customer profile is removed.

## Customer Detail

Click a customer to open the detail view, which uses a tabbed layout.

### Overview Tab

Lifetime metrics (orders, revenue, average order value), most-used payment method, last order date, customer status.

### Orders Tab

The customer's order history with the same status badges as the [Orders](orders.md) list. Click an order to open it.

### Addresses Tab

Saved billing and shipping addresses. Each address can be edited or removed. The flag icon shows the country.

### Subscriptions Tab

Active and historical subscriptions for this customer:

| Column | Description |
|--------|-------------|
| Subscription | Subscription number |
| Product | Subscription product |
| Status | Active, Trial, On Hold, Suspended, Pending Cancel, Cancelled, Expired |
| Next Payment | Next scheduled charge |
| Amount | Recurring amount |

### Notes Tab

Admin-only notes about the customer.

## Account Actions

The header exposes account-level actions:

- **Send Password Reset** triggers the Joomla password-reset email.
- **Edit** opens the customer profile editor.
- **Delete** removes the EasyCommerce customer record.

## Related

- [Account Settings](../configuration/account-settings.md)
- [Orders](orders.md)
- [Subscriptions](subscriptions.md)
