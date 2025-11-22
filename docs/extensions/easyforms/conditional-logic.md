# Conditional Logic and Smart Forms

> **Audience:** Form builders who want to create dynamic, intelligent forms that adapt to user responses.

This comprehensive guide teaches you how to create smart forms that react to user input by showing or hiding fields, sections, and pages based on conditional rules. Learn how to build sophisticated form logic without writing code.

[← Back to Overview](/easyforms/overview) · [Form Builder Basics](./form-builder)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Understanding Conditional Logic](#2-understanding-conditional-logic)
3. [Creating Conditional Rules](#3-creating-conditional-rules)
4. [Condition Types and Operators](#4-condition-types-and-operators)
5. [Action Types](#5-action-types)
6. [Advanced Rule Patterns](#6-advanced-rule-patterns)
7. [Working with Multiple Conditions](#7-working-with-multiple-conditions)
8. [Field-Specific Conditional Logic](#8-field-specific-conditional-logic)
9. [Multi-Page Form Logic](#9-multi-page-form-logic)
10. [Testing and Debugging](#10-testing-and-debugging)
11. [Best Practices](#11-best-practices)
12. [Common Patterns and Examples](#12-common-patterns-and-examples)
13. [Troubleshooting](#13-troubleshooting)

---

## 1. Overview

### What Is Conditional Logic?

Conditional logic allows you to create **dynamic, intelligent forms** that change based on user responses. Instead of showing every question to everyone, you can:

- Show fields only when relevant
- Skip entire sections based on answers
- Navigate to different pages based on choices
- Create personalized form experiences
- Reduce form abandonment rates

### Why Use Conditional Logic?

**Benefits for Users:**
- ✅ **Shorter forms** - See only relevant questions
- ✅ **Less confusion** - No irrelevant fields
- ✅ **Faster completion** - Skip unnecessary sections
- ✅ **Better experience** - Feels personalized
- ✅ **Higher engagement** - More likely to complete

**Benefits for Form Owners:**
- ✅ **Better data quality** - Relevant answers only
- ✅ **Higher completion rates** - Fewer abandonments
- ✅ **Professional appearance** - Smart, modern forms
- ✅ **Flexible forms** - One form serves multiple purposes
- ✅ **Reduced complexity** - No need for multiple forms

### How It Works

```
User answers Question A
    ↓
Conditional rule evaluates
    ↓
IF condition is true
    ↓
THEN action is triggered
    ↓
Form updates dynamically
    ↓
User sees relevant fields
```

### Real-World Example

**Traditional Form:**
```
1. What's your name?
2. What's your company? (everyone sees this)
3. What's your job title? (everyone sees this)
4. Are you self-employed? (everyone sees this)
```

**Smart Form with Conditional Logic:**
```
1. What's your name?
2. Are you self-employed?
   → If YES: Show "Business name" field
   → If NO: Show "Company name" and "Job title" fields
```

Result: **50% fewer fields** for self-employed users!

---

## 2. Understanding Conditional Logic

### Basic Concepts

#### Rules

A **rule** is a complete conditional statement that defines:
- **When** to take action (conditions)
- **What** to do (actions)
- **Where** to apply it (target fields/sections/pages)

#### Conditions

**Conditions** are the "IF" part of the rule:
- Check field values
- Compare user input
- Evaluate states (empty, checked, etc.)

#### Actions

**Actions** are the "THEN" part of the rule:
- Show fields/sections/pages
- Hide fields/sections/pages
- Skip to specific pages

#### Targets

**Targets** are what the action affects:
- Individual fields
- Entire sections
- Whole pages (multi-page forms)

### Rule Structure

Every conditional rule follows this pattern:

```
RULE: [Rule Name]

IF [Field Name] [Operator] [Value]
AND/OR [Another Condition...]

THEN [Action] [Target]
```

**Example:**
```
RULE: Show Business Questions

IF "Employment Status" equals "Self-Employed"

THEN show field "Business Name"
AND show field "Business Registration Number"
AND show section "Business Details"
```

---

## 3. Creating Conditional Rules

### Accessing the Rule Builder

1. **Open Your Form** in the Form Builder
2. **Click the "Conditional Logic" button** in the toolbar
3. **Rule Builder Opens** showing existing rules
4. **Click "Add Rule"** to create new rule

### Creating Your First Rule

#### Step 1: Name Your Rule

- Enter descriptive name
- Example: "Show Business Questions"
- Helps with organization

#### Step 2: Define Conditions

1. **Click "Add Condition"**
2. **Select Trigger Field** (e.g., "Employment Status")
3. **Choose Operator** (e.g., "equals")
4. **Enter Value** (e.g., "Self-Employed")

Result:
```
IF "Employment Status" equals "Self-Employed"
```

#### Step 3: Define Actions

1. **Click "Add Action"**
2. **Choose Action Type** (Show Field)
3. **Select Target** (e.g., "Business Name")

Result:
```
THEN show field "Business Name"
```

#### Step 4: Save Rule

- Click "Save Rule"
- Rule becomes active immediately

---

## 4. Condition Types and Operators

### Text Fields

**Operators:**
- **Equals** - Exact match
- **Does not equal** - Not exact match
- **Contains** - Includes substring
- **Does not contain** - Excludes substring
- **Starts with** - Begins with text
- **Ends with** - Finishes with text
- **Is empty** - No value
- **Is not empty** - Has value

**Examples:**
```
IF "Country" equals "United States"
IF "Comments" contains "urgent"
IF "Email" ends with "@company.com"
```

### Number Fields

**Operators:**
- **Equals** - Exact number
- **Greater than** - Larger than
- **Less than** - Smaller than
- **Greater than or equal**
- **Less than or equal**
- **Is empty** / **Is not empty**

**Examples:**
```
IF "Age" greater than 18
IF "Quantity" less than or equal 10
IF "Budget" greater than or equal 1000
```

### Dropdown / Radio Buttons

**Operators:**
- **Equals** - Selected option matches
- **Does not equal** - Doesn't match
- **Is one of** - In list of options
- **Is not one of** - Not in list
- **Is empty** / **Is not empty**

**Examples:**
```
IF "Country" equals "Canada"
IF "State" is one of ["CA", "NY", "TX"]
IF "Product" is not empty
```

### Checkboxes

**Single Checkbox:**
- **Is checked**
- **Is not checked**

**Multiple Checkboxes:**
- **Contains** - At least one checked
- **Contains all** - All specified checked
- **Contains none** - None checked
- **Is empty** / **Is not empty**

**Examples:**
```
IF "Accept Terms" is checked
IF "Interests" contains "Sports"
IF "Features" contains all ["Email", "Calendar"]
```

### Date Fields

**Operators:**
- **Equals** - Exact date
- **Is before** - Earlier date
- **Is after** - Later date
- **Is between** - Date range
- **Is empty** / **Is not empty**

**Examples:**
```
IF "Event Date" is after "2025-12-31"
IF "Birth Date" is before "2000-01-01"
IF "Appointment" is between "2025-11-01" and "2025-11-30"
```

---

## 5. Action Types

### Show Field
- Makes hidden field visible
- Field becomes part of validation
- Smooth animation

### Hide Field
- Makes visible field hidden
- Removes from validation
- Value cleared (optional)

### Show Section
- Makes entire section visible
- More efficient than individual fields
- All fields in section become active

### Hide Section
- Makes entire section hidden
- All fields hidden together
- Maintains logical grouping

### Go to Page
- Navigate to specific page (multi-page forms)
- Skip intervening pages
- Can go forward or backward

### Show/Hide Page
- Controls page visibility in navigation
- Dynamic workflow paths
- Simplifies multi-page forms

---

## 6. Advanced Rule Patterns

### Cascading Logic

Rules that depend on other rules:

```
RULE 1: Show Industry Field
IF "Employment Status" equals "Employed"
THEN show field "Industry"

RULE 2: Show Tech Role
IF "Industry" equals "Technology"
THEN show field "Tech Role"

RULE 3: Show Developer Questions
IF "Tech Role" equals "Developer"
THEN show section "Developer Questions"
```

### Mutually Exclusive Fields

Only one field visible at a time:

```
RULE 1: Show Business Fields
IF "Customer Type" equals "Business"
THEN show section "Business Info"
AND hide section "Individual Info"

RULE 2: Show Individual Fields
IF "Customer Type" equals "Individual"
THEN show section "Individual Info"
AND hide section "Business Info"
```

---

## 7. Working with Multiple Conditions

### AND Logic

All conditions must be true:

```
IF "Account Type" equals "Premium"
AND "Payment Status" equals "Paid"
AND "Trial Expired" equals "No"
THEN show section "Premium Features"
```

### OR Logic

Any condition can be true:

```
IF "Coupon Code" is not empty
OR "Loyalty Member" equals "Yes"
OR "First Time Customer" equals "Yes"
THEN show field "Discount Amount"
```

### Complex Combinations

```
IF ("Account Type" equals "Enterprise" OR "Employees" greater than 500)
AND "Support Package" is not empty
THEN show section "Enterprise Support Options"
```

---

## 8. Field-Specific Conditional Logic

### Dropdown Fields

**Country-Based:**
```
IF "Country" equals "United States"
THEN show field "State"
AND show field "ZIP Code"

IF "Country" equals "Canada"
THEN show field "Province"
AND show field "Postal Code"
```

### Radio Buttons

**Yes/No Questions:**
```
IF "Do you own a business?" equals "Yes"
THEN show section "Business Details"
```

### Number Fields

**Quantity-Based:**
```
IF "Quantity" greater than 10
THEN show field "Bulk Discount Code"
```

**Age-Based:**
```
IF "Age" less than 18
THEN show field "Parent/Guardian Name"
```

---

## 9. Multi-Page Form Logic

### Skip Pages

```
IF "Customer Type" equals "Individual"
THEN hide page "Business Information"
```

### Branching Surveys

Create different paths:

```
IF "Product Used" equals "Software"
THEN show page "Software Feedback"
AND hide page "Hardware Feedback"

IF "Product Used" equals "Hardware"
THEN show page "Hardware Feedback"
AND hide page "Software Feedback"
```

---

## 10. Testing and Debugging

### Preview Mode

1. Click **Preview** button
2. Test each rule
3. Try all possible answers
4. Verify fields show/hide correctly

### Debug Checklist

- [ ] Rule name is descriptive
- [ ] Correct trigger field selected
- [ ] Operator matches intent
- [ ] Value exactly matches (case-sensitive)
- [ ] Target field/section exists
- [ ] No circular dependencies
- [ ] Default visibility correct
- [ ] All edge cases tested

---

## 11. Best Practices

### Naming Conventions

**Good:**
```
✅ "Show Business Section for Employed Users"
✅ "Hide Shipping if Digital Product"
✅ "Enterprise Features for Large Companies"
```

**Bad:**
```
❌ "Rule 1"
❌ "Test"
❌ "Biz"
```

### Performance Optimization

**Use sections instead of individual fields:**

**Slow (10 rules):**
```
Show Field 1, Show Field 2, ... Show Field 10
```

**Fast (1 rule):**
```
Show Section "Related Questions" (contains all 10 fields)
```

### Required Fields

**Handle carefully:**
- Make field optional if hidden by default
- Or make visible by default, hide when not needed
- Remove validation when hidden

### Mobile Considerations

- Test on mobile devices
- Ensure touch targets are large
- Avoid excessive scrolling
- Keep animations subtle

---

## 12. Common Patterns and Examples

### Pattern 1: Contact Form Routing

```
IF "Topic" equals "Sales"
THEN show section "Sales Questions"

IF "Topic" equals "Support"
THEN show section "Support Questions"
```

### Pattern 2: Event Registration

```
IF "Attending Dinner?" equals "Yes"
THEN show field "Dietary Restrictions"
```

### Pattern 3: Job Application

```
IF "Years of Experience" does not equal "0-2"
THEN show section "Previous Employers"
```

### Pattern 4: Product Order

```
IF "Product Type" equals "Digital"
THEN hide section "Shipping Address"
AND show section "Download Instructions"
```

### Pattern 5: Survey Skip Logic

```
IF "Do you own a car?" equals "Yes"
THEN show field "What brand is your car?"
```

---

## 13. Troubleshooting

### Fields Not Showing/Hiding

**Check:**
- Field names match exactly
- No conflicting rules
- Default visibility settings
- Condition is met

**Solution:**
- Open browser console (F12)
- Watch for error messages
- Verify field names
- Test with simplified rule

### Required Field Hidden

**Problem:** Form won't submit, hidden required field

**Solutions:**
1. Make field optional
2. Change default visibility
3. Use conditional validation

### Rule Doesn't Fire

**Check:**
- Trigger field correct
- Condition value matches exactly
- Target field exists
- Rule is saved and enabled

### Performance Issues

**Solutions:**
- Reduce number of rules
- Use sections instead of fields
- Simplify complex conditions
- Check for infinite loops

---

## Related Guides

- [Form Builder Basics](./form-builder)
- [Multi-Page Forms and Save & Continue](./multipage-forms)
- [Analytics and Reporting](./form-analytics)
- [Advanced Fields and Special Form Types](./advanced-fields)

---

## Quick Reference

### Conditional Logic Checklist

- [ ] Descriptive rule name
- [ ] Trigger field selected
- [ ] Correct operator
- [ ] Value matches exactly
- [ ] Target exists
- [ ] Default visibility set
- [ ] No conflicts
- [ ] Tested in preview
- [ ] Mobile tested
- [ ] Edge cases considered

### Best Practices Summary

1. ✅ Use descriptive names
2. ✅ Group fields in sections
3. ✅ Test all paths
4. ✅ Keep conditions simple
5. ✅ Set appropriate defaults
6. ✅ Document complex logic
7. ✅ Avoid circular dependencies
8. ✅ Test on multiple devices
9. ✅ Handle required fields
10. ✅ Monitor performance

---

[← Back to Overview](/easyforms/overview) · [Next: Multi-Page Forms →](./multipage-forms)

