# Conditional Logic and Smart Forms
- [Analytics and Reporting](./form-analytics)
- [Multi-Page Forms and Save & Continue](./multipage-forms)
- [Advanced Fields and Special Form Types](./advanced-fields)

## 8. Related Guides

---

- Use sections to group conditional fields—you can show/hide the section with a single rule.
- Avoid long chains of rules that are hard to debug.
- Start with simple rules and add complexity only when necessary.

## 7. Best Practices

---

- Keep rule names descriptive so they’re easy to understand later.
- After renaming fields, revisit your rules to ensure they still reference the correct fields.
  - Either relax the requirement or adjust the rules so the field is visible when needed.
- If a required field is hidden but still required, users may not be able to submit.

### Troubleshooting Tips

3. Confirm that the correct fields/sections/pages appear or disappear.
2. Answer the trigger question in different ways.
1. Click **Preview** in the form builder.

## 6. Testing Your Conditional Logic

---

When building your rules, select the appropriate target from the list.

- **Pages** – skip or hide entire pages in a multi-page form.
- **Sections** – show or hide a group of fields.
- **Single fields** – show or hide a specific field.

You can target different parts of the form:

## 5. Applying Logic to Fields, Sections, or Pages

---

You can often combine conditions using **AND** and **OR** for more complex rules.

- **Is empty / Is not empty** – for optional fields.
- **Greater than / Less than** – for numbers and ratings.
- **Contains / Does not contain** – for text.
- **Equals / Does not equal** – for dropdown, radio, checkbox.

The exact options depend on field type, but common conditions include:

## 4. Available Conditions

---

- **THEN**: **Show** the section "Business Details".
- **IF**: "Do you own a business?" **is** "Yes"

### Example Rule

   - **THEN**: Decide what should happen (show/hide a field, section, or page).
   - **IF**: Choose a field and a condition.

4. Define your rule using an **IF… THEN…** structure:
3. In the rule editor, click **Add Rule**.
2. In the toolbar, click **Conditional Logic**, **Rules**, or similar.
1. Open your form in the **Form Builder**.

## 3. Creating Conditional Rules

---

- **Application forms** – show company details only when "Business" is selected.
- **Surveys** – ask more detail only when someone gives a low satisfaction score.
- **Support forms** – show product-specific questions based on the product chosen.
- **Contact forms** – show additional fields when a user selects a specific topic.

## 2. Common Use Cases

---

- Reduce confusion and improve completion rates.
- Keep forms shorter for most users.
- Ask follow-up questions only when needed.

This helps you:

> *If the user answers "Yes" to Question A, show Question B. Otherwise, hide it.*

Conditional logic lets you define rules like:

## 1. What Is Conditional Logic?

---

[← Back to Overview](/easyforms/overview) · [Form Builder Basics](./form-builder)

> **Audience:** Users who want shorter, smarter forms.

This guide shows you how to make forms react dynamically to user answers by showing or hiding fields, sections, or pages.



