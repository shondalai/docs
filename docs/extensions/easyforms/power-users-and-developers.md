# Power Users and Developer Handoffs

This guide is for advanced users who collaborate with developers or want to extend EasyForms beyond built-in features.

> **Audience:** Technical site owners and power users.

[← Back to Overview](/easyforms/overview)

---

## 1. When You Might Need a Developer

Most everyday tasks (building forms, managing submissions, configuring basic integrations) can be done without coding. You may want help from a developer when:

- Building complex, custom integrations with internal systems.
- Implementing advanced automation via APIs and webhooks.
- Creating highly customized designs or layouts not supported by themes.
- Extending EasyForms with custom plugins or behaviors.

---

## 2. Information to Share with Developers

When engaging a developer, provide:

- A description of what you want to achieve (in business terms).
- Examples of forms and submissions involved.
- Any relevant EasyForms documentation from the `docs` folder (API, webhooks, integration guides).
- Access to a **staging or test site** where they can experiment safely.

This helps them design a robust solution faster.

---

## 3. Working with APIs and Webhooks (High Level)

EasyForms can expose APIs and webhooks that developers can use to:

- Retrieve submission data programmatically.
- Trigger external actions when a form is submitted.
- Synchronize data with CRMs, ERPs, or other systems.

As a non-developer, you generally do not need to call these APIs directly, but you should know they exist.

---

## 4. Separating Responsibilities

A good collaboration pattern is:

- **You** design forms, manage content, and configure basic settings.
- **Developers** handle custom code, integrations, and advanced troubleshooting.

This division keeps your workflow efficient while ensuring technical work is done safely.

---

## 5. Related Guides

- Technical docs in the main `docs` folder (API, integrations, implementation guides).
- [Integrations (CRM, Email, Automation, Storage)](./integrations)
- [Troubleshooting and Logs](./troubleshooting-guide)


