---
id: conditional-rules-explained
title: Conditional Logic & Branching
sidebar_label: Conditional Rules
sidebar_position: 21
---

Community Surveys includes powerful conditional logic that allows you to create dynamic, personalized survey experiences. Skip irrelevant questions, show follow-up questions based on answers, or end the survey early based on responses.

## Overview

Conditional rules enable you to:

- **Skip to specific pages** based on answers
- **Show/hide questions** dynamically on the same page
- **End the survey early** when certain conditions are met
- **Create branching paths** for different respondent types

:::tip When to Use Conditional Logic
- Screening questions that determine eligibility
- Follow-up questions that only apply to certain answers
- Different question paths for different user segments
- Early exit for disqualified respondents
:::

---

## Supported Question Types

Conditional rules can be configured on:

| Question Type | Supported |
|---------------|-----------|
| Radio Button | ✅ |
| Checkbox | ✅ |
| Dropdown | ✅ |
| Grid (Radio) | ✅ |
| Grid (Checkbox) | ✅ |
| Image Choice | ✅ |
| NPS | ✅ |
| Likert Scale | ✅ |
| Slider | ✅ |
| Text Questions | ❌ |
| Special Questions | ❌ |

---

## Trigger Conditions

Rules are triggered based on how respondents answer questions:

### Answer-Based Conditions

| Condition | Description | Use Case |
|-----------|-------------|----------|
| **If user answers this question** | Any answer selected | Show follow-up for engaged users |
| **If user does not answer** | Question skipped (non-mandatory) | Handle opt-outs |
| **If user selects [specific answer]** | Exact answer match | Branch based on specific choice |
| **If user does not select [specific answer]** | Answer not chosen | Exclude specific segments |

### Grid Question Conditions

For grid questions, you can trigger rules based on:

- Selection in a specific **row**
- Selection of a specific **column** value
- Combination of row and column

---

## Available Actions

When a condition is met, you can trigger these actions:

### Skip to Page

Jump directly to a specific page in the survey.

**Use cases:**
- Skip irrelevant sections
- Create different paths for different audiences
- Jump to specific question groups

**Example:**
> If user selects "No" on "Do you own a car?", skip to Page 5 (Public Transport section)

### Show Question

Reveal a hidden question on the same page when conditions are met.

**Use cases:**
- Follow-up questions ("Please explain...")
- Conditional detail fields
- Progressive disclosure

**Example:**
> If user selects "Other" on preferences, show "Please specify" text field

### Finalize Response

End the survey immediately and show the completion message.

**Use cases:**
- Screening/qualification questions
- Early exit for ineligible respondents
- Conditional survey completion

**Example:**
> If user selects "Under 18" for age, finalize response (with appropriate message)

---

## Creating Conditional Rules

### Step-by-Step Guide

1. Navigate to **Components → Community Surveys → Surveys**
2. Click **Edit Questions** on your survey
3. Add or select a question that will trigger the rule
4. Click the **Conditional Rules** tab on the question
5. Configure your rule:

### Rule Configuration

#### Basic Rule Setup

```
IF [condition] THEN [action]
```

**Condition options:**
- User answers this question
- User does not answer this question
- User selects [specific answer]
- User does not select [specific answer]

**Action options:**
- Skip to page [number]
- Show question [select question]
- Finalize response

### Adding Multiple Rules

You can add multiple rules to a single question:

1. Click **Add Rule** to create additional rules
2. Configure each rule independently
3. Click the **red delete icon** to remove a rule

:::warning Rule Priority
Rules are evaluated in order from top to bottom. **The first matching rule wins** — subsequent rules are ignored once a match is found.
:::

---

## Rule Examples

### Example 1: Screening Question

**Scenario:** Only allow respondents who are customers to continue.

**Question:** "Are you a current customer?"
- Option A: Yes
- Option B: No

**Rule:**
- Condition: If user selects "No"
- Action: Finalize response

**Result:** Non-customers see the thank you message immediately.

---

### Example 2: Conditional Follow-up

**Scenario:** Ask for details only when user reports a problem.

**Question:** "How satisfied are you with our service?"
- Very Satisfied
- Satisfied
- Neutral
- Dissatisfied
- Very Dissatisfied

**Rules:**
1. If user selects "Dissatisfied" → Show question "What went wrong?"
2. If user selects "Very Dissatisfied" → Show question "What went wrong?"

**Result:** The "What went wrong?" question only appears for unhappy customers.

---

### Example 3: Branching Paths

**Scenario:** Different question paths for different user types.

**Question:** "What is your role?"
- Student
- Professional
- Educator

**Rules:**
1. If user selects "Student" → Skip to Page 2 (Student Questions)
2. If user selects "Professional" → Skip to Page 3 (Professional Questions)
3. If user selects "Educator" → Skip to Page 4 (Educator Questions)

**Result:** Each user type sees only relevant questions.

---

### Example 4: Multi-Select Logic

**Scenario:** Show follow-up based on checkbox selections.

**Question:** "Which features do you use?" (Checkbox)
- Feature A
- Feature B
- Feature C
- None of the above

**Rules:**
1. If user selects "None of the above" → Skip to Page 5 (Why not using features?)
2. If user selects "Feature A" → Show question "Rate Feature A"
3. If user selects "Feature B" → Show question "Rate Feature B"

**Result:** Users only rate features they actually use.

---

## Best Practices

### Design Tips

1. **Plan your flow first** — Sketch the branching logic before building
2. **Keep it simple** — Complex logic is hard to maintain and debug
3. **Test thoroughly** — Walk through all possible paths
4. **Use page breaks strategically** — Group related conditional questions

### Common Patterns

| Pattern | Implementation |
|---------|----------------|
| **Screening** | Qualification question → Finalize if not qualified |
| **Progressive Detail** | High-level question → Show detailed follow-ups |
| **User Segmentation** | Role/type question → Skip to segment-specific pages |
| **Optional Sections** | Interest question → Skip section if not interested |

### Avoiding Pitfalls

:::danger Common Mistakes
- **Circular logic** — Rules that skip to pages that skip back
- **Orphaned questions** — Questions only reachable through broken rules
- **Conflicting rules** — Multiple rules that contradict each other
- **Missing paths** — Answer options without corresponding rules
:::

---

## Testing Conditional Logic

### Preview Mode

1. Save all questions and rules
2. Click **Preview** to test the survey
3. Select different answers to verify each path
4. Document the expected flow for each scenario

### Checklist

- [ ] All answer options have appropriate rules
- [ ] No circular references between pages
- [ ] Finalize actions show appropriate end messages
- [ ] Hidden questions appear when expected
- [ ] All paths lead to survey completion

---

## Troubleshooting

### Rule Not Triggering

- Verify the question is a supported type (choice/grid)
- Check that the correct answer option is selected in the rule
- Ensure rules are saved (click Save on the question)

### Wrong Page Displayed

- Check rule order — first match wins
- Verify page numbers are correct
- Look for conflicting rules on the same question

### Hidden Question Not Showing

- Ensure the target question is on the same page
- Verify the trigger condition is correct
- Check that the target question exists and is saved

---

## Related Documentation

- [User Guide](./community-surveys-end-user-documentation)
- [Question Types](./community-surveys-end-user-documentation#question-types)
- [Survey Types Explained](./survey-types-explained)
