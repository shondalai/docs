---
id: reviews
title: Managing Reviews
sidebar_label: Reviews
sidebar_position: 8
---

# Managing Reviews

Moderate product reviews and respond to customers.

## Review List

### Stat Cards

| Metric | Description |
|--------|-------------|
| Total | All reviews |
| Pending | Awaiting moderation |
| Approved | Published reviews |
| Avg Rating | Average star rating across approved reviews |
| Verified | Reviews from verified purchasers |

### Toolbar

| Control | Purpose |
|---------|---------|
| Search | Customer name, product name, review content |
| Status tabs | All, Pending, Approved, Spam, Trash |
| Rating filter | 1 to 5 stars |
| Sort | Newest, Oldest, Highest Rating, Lowest Rating, Most Helpful |

### Review Statuses

| Status | Description |
|--------|-------------|
| Pending | Submitted, awaiting moderation |
| Approved | Visible on the storefront |
| Spam | Flagged as spam, hidden |
| Trash | Soft-deleted |

## Moderation

Selecting one or more reviews opens the bulk action bar with **Approve**, **Pending**, **Spam**, and **Trash**. Per-row actions on the table provide the same transitions.

A typical flow:

1. Customer submits a review. It appears as Pending.
2. Admin opens the review, reads the content.
3. Admin moves the review to Approved, Spam, or Trash.

## Review Detail

| Field | Description |
|-------|-------------|
| Product | Reviewed product, with link to the editor |
| Customer | Reviewer name and email |
| Rating | 1 to 5 stars |
| Title | Review headline |
| Content | Review body |
| Date | Submission timestamp |
| Verified | Badge shown for purchasers |
| Helpful Votes | Count of helpful votes |

## Admin Responses

A response can be attached to any approved review. The response renders publicly beneath the review on the storefront. Editing a response is available from the same panel.

## Settings

Review behavior is configured under [Product Settings](../configuration/product-settings.md):

| Setting | Description |
|---------|-------------|
| Reviews enabled | Allow customers to submit reviews |
| Require approval | New reviews start as Pending |
| Verified purchase only | Only customers who bought the product may review it |
| Star ratings | Enable the 1-5 star rating |

## Related

- [Product Settings](../configuration/product-settings.md)
- [Email Settings](../configuration/email-settings.md)
