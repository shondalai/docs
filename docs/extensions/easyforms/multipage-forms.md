# Multi-Page Forms and Save & Continue

This guide explains how to split long forms into multiple pages and allow users to save their progress.

> **Audience:** Users building longer forms, surveys, or applications.

[← Back to Overview](/easyforms/overview) · [Form Builder Basics](./form-builder)

---

## 1. Why Use Multi-Page Forms?

Long forms can feel overwhelming. Breaking them into smaller pages or steps helps:

- Improve completion rates.
- Make complex forms easier to understand.
- Group related questions logically.

Examples:

- Multi-step registration (Personal Info → Preferences → Confirmation).
- Job application (Profile → Experience → References).
- Detailed surveys spread over several pages.

---

## 2. Creating Multiple Pages

1. Open your form in the **Form Builder**.
2. Add fields for the questions you need.
3. Insert **Page Break** elements from the field sidebar wherever you want a new page.

Everything above the first page break is **Page 1**. Each page break creates a new page.

### Tips

- Put only a manageable number of questions per page.
- Use page titles like "Step 1: About You" to orient users.

---

## 3. Configuring Progress Indicators

In your **Form Settings**, look for options related to progress:

- **Progress bar style** – percentage (0–100%) or steps (1/3, 2/3, 3/3).
- **Show/hide step titles** – display descriptive names for each page.

Choose the style that best fits your form. Always preview to see how it looks.

---

## 4. Enabling Save & Continue (If Available)

The **Save & Continue** feature lets users save their progress and return later.

1. Open the form’s **Settings**.
2. Find the **Save & Continue** option (usually under submission or advanced settings).
3. Enable it.
4. Configure details such as:
   - How the resume link is delivered (on-screen, email, or both).
   - How long partial submissions are kept before expiring.
   - Whether users must be logged in to resume.

Check with your admin if you’re unsure how your site is configured.

---

## 5. What the User Experience Looks Like

When Save & Continue is enabled:

1. Users start filling out the form.
2. At any point (or at the end of a page), they can click **Save and continue later**.
3. They receive a **resume link** on-screen and/or via email.
4. When they return via the link, their previous answers are restored so they can continue.

You can test this by filling a form yourself and using the feature.

---

## 6. Considerations and Best Practices

- Don’t rely on Save & Continue for very short forms—it adds more complexity than benefit.
- For sensitive data, consider how long partial submissions should be retained.
- Make it clear in the form description that users can save their progress.
- If your site requires login to save, mention this early in the process.

---

## 7. Related Guides

- [Conditional Logic and Smart Forms](./conditional-logic)
- [Viewing, Filtering, and Exporting Submissions](./form-submissions)
- [Email Notifications and Autoresponders](./emails)


