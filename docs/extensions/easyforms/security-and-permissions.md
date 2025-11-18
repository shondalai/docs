# Security, Permissions, and Data Access

This guide explains how access to EasyForms is controlled and how to keep submission data secure.

> **Audience:** Site owners and administrators.

[← Back to Overview](/easyforms/overview) · [Viewing Submissions](./form-submissions)

---

## 1. How Permissions Work

EasyForms uses Joomla’s Access Control List (ACL) system. Permissions can be set per user group to control who can:

- Access the EasyForms component.
- Create, edit, and delete forms.
- View all submissions.
- View only their own submissions.
- Configure integrations and settings.

Your Joomla super administrator can adjust these permissions in the Joomla backend.

---

## 2. Common Permission Setups

- **Super Administrators** – full control over forms, submissions, analytics, and integrations.
- **Managers or Admins** – manage forms and view all submissions, but may not change global configurations.
- **Editors** – create and manage their own forms, view their own submissions.
- **Registered Users** – may access frontend views only, if allowed.

Review your site’s needs and assign the minimum required permissions for each role.

---

## 3. Protecting Submission Data

Submissions may contain sensitive information (contact details, feedback, or even payment-related data).

Best practices:

- Limit who can view submissions to trusted staff.
- Use HTTPS so data is encrypted in transit.
- Regularly export and archive important data according to your policies.
- Delete or anonymize old data if required by privacy laws.

---

## 4. Integration and API Security

When connecting integrations or APIs:

- Store API keys and tokens securely within EasyForms settings.
- Restrict external accounts (CRMs, email tools) to least-privilege.
- Rotate credentials if you suspect they have been exposed.

If developers use APIs or webhooks, ensure they follow your organization’s security standards.

---

## 5. Auditing and Logs

If your EasyForms setup includes logging:

- Review logs to track key events (integration errors, unusual access patterns).
- Use logs when troubleshooting issues with submissions, emails, or integrations.

Server-level logs can also reveal configuration or security problems and should be monitored by your hosting team or administrator.

---

## 6. Related Guides

- [Validation and Anti-Spam Protection](./validation-and-antispam)
- [Frontend Form Management](./frontend-management)
- [Troubleshooting and Logs](./troubleshooting-guide)


