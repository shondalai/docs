---
id: customizing-emails-sent-from-community-quiz
title: Customizing Email Notifications
sidebar_label: Email Customization
---

# Customizing Email Notifications

Community Quiz sends branded, automated emails for the key moments in an assessment or course: an exam is assigned, a result is ready, a certificate is issued, a learner enrols, and more. Every one of these is an editable template. This guide explains where to edit them, how to brand them, and how the personalisation works.

> **Audience:** Administrators who want emails to match their organisation's wording and brand. No coding needed.

[← Back to Overview](./overview.md)

---

## Where emails are managed

Open **Email templates** from the admin navigation (under Organisation). You see every template the component can send, grouped by area. For each one you can edit the **subject**, the **HTML body**, the **plain-text body**, turn it **on or off**, and **reset** it to the shipped default. You can also **preview** a template before saving.

Templates ship with sensible defaults, so emails work out of the box. You only need to edit the ones you want to change.

---

## The emails Community Quiz sends

| Area | Emails |
|------|--------|
| **Assessments** | Exam assigned, Exam reminder, Attempt submitted. |
| **Results** | Result available, Grade released. |
| **Grading** | Manual grading required (to the grader). |
| **Scheduling** | Exam schedule changed, Proctor assigned. |
| **Credentials** | Certificate issued, Certificate expiring, Certificate revoked. |
| **Courses** | Enrolment welcome, Course completion, Access extended, Unenrolled, Learner message. |
| **Publishing** | Reviewer approval requested. |
| **Question banks** | Question review requested. |
| **Users and roles** | User invitation, Team invitation. |

Each template can be switched off if you do not want that notification sent.

> **Tip:** the result, certificate, and enrolment emails are the ones most worth personalising first, since learners see them most.

---

## Personalising with placeholders

Templates use **double-curly placeholders** that are filled in when the email is sent:

```
Hello {{name}}, your result for {{exam}} is ready.
```

### Placeholders available everywhere

These are added to every template automatically:

| Placeholder | Becomes |
|-------------|---------|
| `{{site_name}}` | Your site name |
| `{{site_url}}` | Your site address |
| `{{support_email}}` | Your support address |
| `{{brand_color}}` | Your brand colour |
| `{{notification_preferences_url}}` | The link learners use to manage notifications |

### Placeholders specific to each template

Each template also has its own placeholders for its context. For example:

- **Certificate issued:** `{{name}}`, `{{exam}}`, `{{credential_id}}`, `{{issued_at}}`, `{{verify_url}}`, `{{download_url}}`.
- **Learner message:** `{{name}}`, `{{course}}`, `{{sender_name}}`, `{{message_body}}`, `{{course_url}}`.

The editor lists the placeholders that apply to the template you are editing, so you always know what you can use.

> **Note:** placeholders are case-sensitive and use double braces. `{{name}}` works; `{NAME}` or `{{Name}}` will not.

---

## Branding every email

Rather than editing branding into each template, you set it once in **Settings → Emails**, and it applies to all of them:

| Setting | Controls |
|---------|----------|
| **Header title / subtitle / logo** | The masthead at the top of every email. |
| **Brand colour** | The accent colour used in the email styling. |
| **Footer text** | The footer line (for example your company and address). |
| **From name / From email / Reply-to** | Who the email appears to come from. |
| **Admin alert email** | The address copied on staff-facing emails (grading, review, proctor). |
| **Support email / Notification preferences URL** | Used in the shared placeholders above. |

Because branding is centralised, your templates stay focused on wording, and a logo or colour change updates every email at once.

---

## Languages

Each template can have a version per site language. When an email is sent, Community Quiz picks the version matching the recipient's language (for example `en-GB` or `fr-FR`) and falls back to the default if there is no match. To localise, edit the template with the relevant language selected.

---

## Delivery

Emails are queued and sent through Joomla's mail system by default, which keeps the site responsive when many emails go out at once (for example a result release to a whole cohort). Staff notifications are copied to the admin alert address you set in Settings.

---

## Troubleshooting

- **A placeholder shows literally in the email.** Check the spelling and the double braces, and that the placeholder belongs to that template (the editor lists the valid ones).
- **An email did not arrive.** Confirm Joomla's own mail settings work (Global Configuration → Server → Mail), check the template is enabled, and look in your spam folder.
- **Branding did not change.** Branding comes from Settings → Emails, not the individual template. Update it there and resend.
- **The wrong sender address appears.** Set From name / From email in Settings → Emails; if left blank, Joomla's global mail-from is used.

---

## Related

- [Certificates](./certificates.md) - the certificate issued, expiring, and revoked emails.
- [Courses & Enrollment](./courses.md) - enrolment, completion, and learner-message emails.
- [Grading & Review](./grading.md) - the grading and result-release emails.
- [Installation & Configuration](./installing-and-configuring-community-quiz.md) - where the email settings live.
