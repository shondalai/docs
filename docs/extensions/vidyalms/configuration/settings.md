---
title: Find the right setting
description: Understand VidyaLMS settings, where to configure each feature, and how saving works.
---

Open **VidyaLMS → Settings** on either platform. Use **Find a setting** when you know part of its name, such as “upload,” “header,” or “inactivity.” The settings belong to your academy and are saved in VidyaLMS's database tables.

## Settings at a glance

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| Section | What to configure | A sensible starting point |
| --- | --- | --- |
| **General** | Academy name and public site base URL | Enter your academy name. Leave the URL empty unless the automatically detected address is wrong. |
| **Learner experience** | Navigation, header branding, spacing, and inactivity timeout | Use top navigation for a learning area inside an existing website. |
| **Catalogue & enrolment** | Courses per catalogue page and self-enrolment | Choose a manageable page size between 1 and 50. Enable self-enrolment only when learners should be able to join eligible courses themselves. |
| **Certificates & credentials** | Default issuer logo and public verification addresses | Use a public logo. Keep default routes unless you deliberately host verification elsewhere. |
| **Email & notifications** | Unsubscribe address and bounce domain | Use the site's default unsubscribe route; arrange bounce-domain changes with your email administrator. |
| **Files & storage** | Upload limits, private folder, and import-source retention | Check hosting limits before increasing a file size. |
| **Network & security** | External hosts integrations may contact and request timeout | Add only the service hosts your configured integrations need. |
| **Shop integrations** | Shop setup, course mappings where supported, and background enrolment account | Follow the guide for [EasyCommerce](../commerce/easycommerce.md) or [WooCommerce](../commerce/woocommerce.md). |
| **Learning activity** | Progress heartbeat and background-service information | Treat this as an operational summary; open System health to investigate work that is not running. |
| **Appearance** | Workspace appearance controls offered by the installed dashboard | Check the result in the actual admin workspace. Learner-header settings live under Learner experience. |

</div>

## Save changes deliberately

Changed values are marked as unsaved. Select **Save changes** before leaving. **Discard changes** restores the last loaded values; it does not undo changes another administrator has already saved.

If someone else edits settings while your form is open, reload the latest values and reapply your intended changes. This prevents one person from silently overwriting another's work.

**Export saved configuration** downloads the saved workspace values. Credentials and provider secrets are excluded. This export is useful for reviewing settings, but it is not a full backup or a promise that every integration can be restored by uploading that file.

## Some settings belong elsewhere

<div className="table-wrapper" tabIndex={0} role="region" aria-label="Scrollable reference table">

| You want to change… | Go to… |
| --- | --- |
| A course's price | Its EasyCommerce or WooCommerce product |
| Who can start a course, or which lesson unlocks next | The course builder's **Access** section |
| A quiz's time limit or passing score | That quiz lesson's **Quiz settings** |
| Which event sends a message | **Notification rules** for the course |
| How messages are delivered | **Notifications → Channels** |
| Email wording and branding | **Email templates** |
| The sender address or SMTP connection | Joomla mail settings or your WordPress mail plugin |
| A certificate design | **Certificates → Templates & customization** |
| A teaching permission | Joomla permissions or WordPress user roles, plus the course teaching team |

</div>

Settings are cached so the application does not need a separate database query for each value. Saving updates the configuration for new requests. If an already-open learner page uses an old header or timeout, reload it after saving; there is no need to edit the database or clear unrelated learning records.

## Allow a connected service to communicate

Under **Network & security**, the outbound-host list controls which external hosts server-side integrations may contact. An empty list denies external requests. Enter only the hosts your chosen connections require, separated by commas or new lines. A leading dot allows the matching subdomains, so use it only when the service requires that wider scope.

The request timeout is between **1 and 120 seconds**. Increase it only for a service that legitimately needs longer to respond; a longer timeout does not repair incorrect credentials or an unavailable service. Your hosting administrator can confirm the required service hosts without opening access to unrelated destinations.
