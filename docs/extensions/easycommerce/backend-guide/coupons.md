---
id: coupons
title: Managing Coupons
sidebar_label: Coupons
sidebar_position: 6
---

# Managing Coupons

Create and manage discount codes.

## Coupon List

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Coupon code |
| Status filter | Active, Inactive, Expired |
| Type filter | Percentage, Fixed Cart, Fixed Product |

### Columns

| Column | Description |
|--------|-------------|
| Code | Coupon code |
| Type | Discount type badge |
| Amount | Value or percent |
| Usage | Used count over the usage limit |
| Status | Active, Inactive, Expired |
| Expires | Expiry date |

## Creating a Coupon

Click **New Coupon** to open the coupon form.

### General

| Field | Description |
|-------|-------------|
| Coupon Code | The code customers enter (for example, `SUMMER20`) |
| Description | Internal description, not shown to customers |
| Discount Type | Percentage, Fixed Cart, or Fixed Product |
| Discount Value | Percent (capped at 100) or fixed currency amount |
| Max Discount | Cap on the absolute discount when using Percentage |

### Discount Types

| Type | Behavior |
|------|----------|
| Percentage | Percent off the eligible cart subtotal |
| Fixed Cart | Flat amount off the eligible cart subtotal |
| Fixed Product | Flat amount off each eligible product line |

Free shipping is not modeled as a coupon type. Configure shipping waivers under [Shipping Settings](../configuration/shipping-settings.md).

### Usage Restrictions

| Field | Description |
|-------|-------------|
| Minimum Spend | Order subtotal must reach this amount |
| Maximum Spend | Order subtotal must not exceed this amount |
| Individual Use Only | Coupon cannot stack with other coupons |
| Exclude Sale Items | Coupon does not apply to products on sale |
| Products | Whitelist of eligible products |
| Excluded Products | Blacklist of products |
| Categories | Whitelist of eligible categories |
| Excluded Categories | Blacklist of categories |
| Email Restrictions | Comma-separated list of customer emails that may use the coupon |

### Usage Limits

| Field | Description |
|-------|-------------|
| Total Execution Limit | Maximum total uses across all customers |
| Usage Limit Per User | Maximum uses per customer |

### Schedule

| Field | Description |
|-------|-------------|
| Start Date | Coupon becomes active on this date |
| Expiry Date | Coupon becomes invalid after this date |

## Examples

### 20% Off Everything

```
Code: SAVE20
Type: Percentage
Value: 20
```

### $10 Off Orders Over $50

```
Code: TENOFF
Type: Fixed Cart
Value: 10
Minimum Spend: 50
```

### $5 Off Each Item, Capped at 4 Items

```
Code: BULK5
Type: Fixed Product
Value: 5
Total Execution Limit: 100
Usage Limit Per User: 1
```

## Related

- [Payment Settings](../configuration/payment-settings.md)
- [Shipping Settings](../configuration/shipping-settings.md)
