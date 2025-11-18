# Advanced Fields and Special Form Types

This guide covers advanced fields and special form types like surveys and quizzes.

> **Audience:** Users who are already comfortable with the basic form builder.

[← Back to Overview](/docs/extensions/easyforms) · [Form Builder Basics](./form-builder)

---

## 1. Advanced Fields Overview

Beyond basic text and choice fields, EasyForms includes advanced options for richer data collection.

Common advanced fields include:

- **Address** – structured address with street, city, ZIP/postcode, and country.
- **Rating** – stars or scales for satisfaction scores.
- **Slider / Range** – choose a value within a numeric range.
- **Calculation** – compute values based on other fields (e.g., totals, scores).
- **Hidden** – store internal values (campaign codes, tags, tracking IDs).
- **Signature** – allow users to sign via mouse or touch.

Availability of each field type depends on your EasyForms version and configuration.

---

## 2. Adding Advanced Fields

1. Open your form in the **Form Builder**.
2. In the field sidebar, look for sections such as **Advanced**, **Survey**, or **Quiz**.
3. Drag the desired advanced field into your form.
4. Click the field to configure its settings.

### Example Configurations

- **Rating**
  - Label: "Overall Satisfaction"
  - Scale: 1–5 or 1–10
  - Help text: "1 = Very Dissatisfied, 5 = Very Satisfied"

- **Slider**
  - Label: "Budget Range"
  - Minimum and maximum values
  - Step size (e.g., whole numbers only)

- **Signature**
  - Label: "Signature"
  - Enable clear/reset button for users.

---

## 3. Survey-Style Forms

Survey fields are designed for collecting opinions and ratings at scale.

Typical survey fields:

- **Opinion scale** (1–5, 1–10)
- **Net Promoter Score (NPS)** fields
- **Matrix/grid** questions (if available)

### Building a Survey

1. Create a new form and choose a **survey** type if available.
2. Add rating and opinion scale fields for each question.
3. Group related questions under section headings.
4. Optionally use multi-page layout to avoid overwhelming users.
5. Enable analytics to track responses and trends.

---

## 4. Quiz-Style Forms

Quizzes use special fields and scoring to evaluate answers.

Typical quiz elements:

- **Question fields** with correct answers defined.
- **Score fields** that sum correct answers.
- **Result messages** that depend on the final score.

### Building a Quiz

1. Create a new form and select a **quiz** type if available.
2. Add **quiz question** fields (often based on radio/checkbox fields).
3. Mark which options are correct.
4. Add a **score** or **result** field that calculates the total.
5. Configure result messages:
   - 0–3 points: Beginner
   - 4–7 points: Intermediate
   - 8–10 points: Advanced
6. Use a final page to display the user’s result.

Test your quiz thoroughly in preview mode.

---

## 5. Using Calculation Fields

Calculation fields let you compute values from other fields, such as:

- Order totals (quantity × price)
- Weighted scores (e.g., sum of ratings)
- Custom metrics

### Example: Simple Total

1. Add fields for **Quantity** and **Price**.
2. Add a **Calculation** field called "Total".
3. In the calculation settings, reference Quantity and Price (syntax depends on your EasyForms version).
4. Choose the display format (e.g., plain number or currency).

Your admin or developer can help with more complex formulas if needed.

---

## 6. Best Practices

- Don’t overload users with too many advanced elements on a single page.
- Use clear labels and help text so users understand how to answer.
- Always preview and test forms, especially quizzes and calculation-heavy forms.

---

## 7. Related Guides

- [Conditional Logic and Smart Forms](./conditional-logic)
- [Analytics and Reporting](./form-analytics)
- [Payment and E-Commerce Forms](./payments-support)


