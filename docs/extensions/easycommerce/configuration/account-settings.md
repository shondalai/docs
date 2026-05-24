---
id: account-settings
title: Account & Privacy Settings
sidebar_label: Accounts
sidebar_position: 10
---

# Account & Privacy Settings

Configure customer account creation, account deletion behavior, and privacy / data-protection features.

**Location:** Settings > Accounts

## Registration

| Field | Description | Default |
|-------|-------------|---------|
| `enable_registration` | Allow new accounts to register | On |
| `enable_registration_on_checkout` | Offer account creation as part of the checkout flow | On |
| `registration_generate_username` | Auto-generate a username from the email | On |
| `registration_generate_password` | Auto-generate and email a strong initial password | On |
| `enable_login_reminder` | Show an "already have an account?" prompt during registration / checkout | On |

## Account Management

| Field | Description | Default |
|-------|-------------|---------|
| `enable_account_deletion` | Let customers initiate account deletion from the account area | On |
| `account_deletion_delay_days` | Days the account remains soft-deleted before purge | 30 |

The delay window gives admins time to reverse accidental deletions before the data is permanently removed.

## Privacy & Data

| Field | Description | Default |
|-------|-------------|---------|
| `enable_privacy_policy` | Require privacy policy acceptance at registration and checkout | On |
| `privacy_policy_page_id` | Joomla content article presented as the privacy policy | empty |
| `enable_newsletter_signup` | Show a newsletter opt-in checkbox during checkout | On |
| `enable_data_export` | Let customers download an export of their personal data | On |
| `enable_data_erasure` | Let customers submit an erasure request | On |

The privacy policy page picker references a published Joomla article ID. Set this whenever `enable_privacy_policy` is on so the checkout checkbox links somewhere useful.

## GDPR Mapping

| GDPR Requirement | Implementing Setting |
|------------------|----------------------|
| Lawful basis / consent | `enable_privacy_policy` plus `privacy_policy_page_id` |
| Data portability | `enable_data_export` |
| Right to erasure | `enable_data_erasure` plus `enable_account_deletion` |
| Data minimization | Checkout field toggles under [General Settings](general-settings.md) |

Account erasure also relies on the `enable_account_erasure_requests` and `personal_data_retention_days` fields exposed in [Advanced Settings](advanced-settings.md).

## Related Settings

- [General Settings](general-settings.md) for checkout field requirements
- [Email Settings](email-settings.md) for the customer welcome email
- [Advanced Settings](advanced-settings.md) for data-retention controls
