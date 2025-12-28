---
id: adding-mathematical-formulas-in-quizzes
title: Adding Mathematical Formulas in Quizzes
sidebar_label: Mathematical Formulas
sidebar_position: 9
---

Community Quiz provides built-in support for displaying complex mathematical formulas using the **KaTeX** library. This allows you to create high-quality STEM quizzes with beautifully rendered equations.

---

## How to Enable Formulas

To use mathematical formulas, you must first enable the library in the component settings.

1. Navigate to **Components** → **Community Quiz** → **Options**.
2. Under the **Shared Settings** tab, ensure **Load Maths/Tex Library** is set to **Yes**.
3. (Optional) You can also override this setting at the individual quiz level in the **Quiz Options** tab.

### The Editor Button

For a better experience, enable the **Button - Maths** (type `editors-xtd`) plugin. This adds a button to your Joomla! editor that allows you to insert formulas without writing HTML.

---

## How to Add Formulas

There are two ways to add formulas to your quiz descriptions or answers:

### Method 1: Using the HTML Tag

Wrap your LaTeX formula in a `<span>` tag with the class `math`.

**Syntax:**

```html
<span class="math">YOUR_LATEX_FORMULA</span>
```

**Example:**
`<span class="math">x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}</span>`

### Method 2: Manual Delimiters

If you have the library loaded, you can also use common LaTeX delimiters:

- **Inline Math**: `\( E = mc^2 \)`
- **Display Math**: `\[ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \]`

---

## Practical Examples

| If you want to show... | Use this LaTeX code |
|-------------------------|---------------------|
| Fractions | `\frac{numerator}{denominator}` |
| Exponents | `x^{2}` |
| Square Roots | `\sqrt{x}` |
| Summation | `\sum_{i=1}^{n}` |
| Greek Letters | `\alpha, \beta, \gamma, \pi` |

### Sample Question Configuration

**Question:** Solve for x in the following equation:
**Description:** `<span class="math">2x + 5 = 15</span>`
**Answer Options:**

- 5
- `<span class="math">\sqrt{25}</span>`
- 10

---

## Tips for Success

1. **Preview First**: Always use the "Preview" button in the quiz builder to ensure your formulas are rendering correctly.
2. **Keep it Simple**: While KaTeX is powerful, very complex formulas might be harder to read on mobile devices.
3. **Use Inline for Sentences**: Use the `<span>` method for formulas that appear within a sentence to ensure correct vertical alignment.
4. **Documentation**: For a full list of supported LaTeX functions, refer to the [KaTeX Documentation](https://katex.org/docs/supported.html).
