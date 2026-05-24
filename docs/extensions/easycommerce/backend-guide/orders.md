---
id: orders
title: Managing Orders
sidebar_label: Orders
sidebar_position: 4
---

# Managing Orders

Process, refund, and invoice customer orders.

## Order List

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Order number, customer name, customer email |
| Status tabs | Quick filter by order status |
| Payment status tabs | Pending, Paid, Failed, Refunded, All |
| Filters | Date range, amount range, product, payment method, subscription type |
| Page size | 10, 20, 50, 100 |

Filter state persists in `sessionStorage` so navigating to an order and back preserves the view.

### Order Statuses

| Status | Description |
|--------|-------------|
| Pending | Created, awaiting payment |
| Processing | Paid, preparing for fulfillment |
| On Hold | Suspended awaiting action |
| Completed | Fulfilled |
| Cancelled | Cancelled before completion |
| Refunded | Fully refunded |
| Partially Refunded | One or more line items refunded |
| Failed | Payment did not complete |

### Payment Statuses

| Status | Description |
|--------|-------------|
| Pending | Not yet captured |
| Paid | Captured |
| Failed | Payment attempt failed |
| Refunded | Fully refunded |

## Bulk Actions

When orders are selected, the action bar exposes an **Actions** menu:

- **Mark Processing**
- **Mark Completed**
- **Mark as Paid**
- **Cancel Orders**
- **Delete Orders**

### Delete Eligibility

An order can be deleted only when all of these are true:

- Status is Pending, Cancelled, or Failed
- Payment status is not Paid, Authorized, Refunded, or Partially Refunded
- Refunded amount is zero
- No invoice has been issued
- No active subscription is bound to the order

If any condition fails, the row's delete checkbox is disabled and the server rejects the action with an explanation.

## Order Detail

Clicking an order opens the detail screen, organized in panels:

### Customer

Name, email, phone, billing address, shipping address. Address fields are editable inline and persist with the **Save** button.

### Line Items

| Column | Description |
|--------|-------------|
| Product | Name and variation (if any) |
| Quantity | Units |
| Price | Unit price |
| Subtotal | Quantity multiplied by price |
| Total | After line discounts |

### Totals

Subtotal, discounts, shipping, tax, refunded, **Total**.

### Status Changes

Use the per-status quick buttons (for example, **Mark Processing** on a pending order, **Mark Completed** on a processing order) or open the status menu for the full transition list.

### Notes

Notes are tracked per order. System notes log status changes, payment events, and refunds. Manual notes have a private or customer-visible scope.

## Invoices

When invoicing is enabled, an invoice number is assigned to the order. From the order detail:

- **Download Invoice** opens the rendered PDF in a new tab.
- Invoice settings (numbering format, branding, footer text) are configured under [Invoice Settings](../configuration/invoice-settings.md).

Once an invoice number is issued, the order can no longer be deleted.

## Refunds

The **Refund Order** action opens the refund dialog.

| Field | Description |
|-------|-------------|
| Method | Automatic (through the gateway) or Manual (recorded only) |
| Amount | Up to the remaining refundable balance |
| Reason | Free-text note attached to the refund |

Automatic refunds call the payment gateway. The order status moves to Refunded or Partially Refunded based on the amount.

Refunds are blocked on cancelled and already-fully-refunded orders.

## Related

- [Payment Settings](../configuration/payment-settings.md)
- [Invoice Settings](../configuration/invoice-settings.md)
- [Email Settings](../configuration/email-settings.md)
