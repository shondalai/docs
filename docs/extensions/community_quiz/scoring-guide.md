---
id: scoring-guide
title: Scoring and Marking Guide
sidebar_label: Scoring Guide
sidebar_position: 4
---

# Scoring and Marking Guide

This guide explains, in plain language, how Community Quiz turns a learner's answers into a score, a percentage, and a pass or fail. It is written for the people who set up assessments (teachers, trainers, HR teams, certification bodies) so you can configure points, partial credit, negative marking, pass marks, and grades with confidence.

> **Audience:** Anyone building quizzes or exams. No coding or maths background needed.

[← Back to Overview](./overview.md)

You configure most of this on the **Scoring tab** of the [Quiz Builder](./quiz-builder.md#4-scoring-tab--turning-answers-into-a-result), with per-question tweaks in the **Question Studio**. If you ever need the exact formulas and edge cases, the [Scoring Engine reference](./scoring.md) has the technical detail.

---

## 1. The big picture: how a result is built

Every attempt travels the same path, from a learner's raw answers to a final grade:

```
Each answer earns points  →  Add up the points  →  Turn into a percentage
   →  Scale it  →  Compare to the pass mark  →  Apply a grade band
```

In plain terms:

1. **Each question earns points** based on how the learner answered and the rules you set.
2. **The points are added up** into a raw score for the attempt.
3. **That raw score becomes a percentage** of the maximum possible.
4. **The percentage is scaled** onto your chosen scale (100 behaves like a normal percentage).
5. **The scaled score is compared to your pass mark** to decide pass or fail.
6. **A grade band** (like A, B, C) is applied if you set one up.

There are only **three decisions** you really need to make:

- **How much is each question worth?** (points)
- **How do answers earn those points?** (partial credit, all-or-nothing, negative marking)
- **What counts as a pass, and what grades exist?** (pass mark, scale, grade bands)

The rest of this guide walks through each one.

> **One thing that never changes:** once a learner takes an attempt, that attempt's score is locked to the questions as they were at that moment. If you later edit a question or change the scoring rules, attempts already taken are **not** affected. This keeps results fair and defensible.

---

## 2. Step one: how much each question is worth (points)

Every scorable question carries a **points** value. You set it in the **Question Studio → Scoring tab → Points** field, or override it for a single section in the Structure tab's item inspector.

There are two ways the system decides each question's worth, chosen with **Points source** on the Scoring tab:

| Points source | What it means | Use it when |
|---------------|---------------|-------------|
| **Per item** (default) | Each question is worth the points you gave it. A 5-point question counts more than a 1-point question. | You want some questions to matter more than others. |
| **Equal** | Every scorable question is worth exactly the same (1 point each), no matter what you typed. | You want a simple "number of questions correct" style score. |

> **Tip:** Surveys and psychometric questions never carry points. They are collected for reporting only and are completely excluded from scoring, even in "Equal" mode.

---

## 3. Step two: how answers earn their points (the scoring model)

This is the heart of scoring, and it lives in the **Scoring model** section of the Scoring tab. There are three settings to understand: **partial credit**, **all-or-nothing**, and **negative marking**.

### Single-answer vs. multi-part questions

First, a key distinction:

- **Single-answer questions** (single choice, true/false, yes/no, a numeric answer) are either right or wrong. There is nothing to give part-marks for.
- **Multi-part questions** have several pieces that can each be right or wrong: multiple-response ("select all that apply"), matching, ordering, classifying, drag-and-drop, grids, and cloze passages.

Partial credit and per-part negative marking only matter for **multi-part** questions. Single-answer questions are always all-or-nothing.

### Partial credit

**Partial credit** (on by default) gives learners marks for the parts they got right, instead of zero for an imperfect answer.

> **Example.** A "select all that apply" question has **3 correct options** and is worth **3 points**. A learner picks **2 of the 3 correct** answers. With partial credit on, they earn **2 marks**. With it off, they earn **0** (because they did not get everything right).

The rule is simple: **credit equals the share of correct parts they found, times the points.**

```
credit = (correct parts found ÷ total correct parts) × points
```

### All-or-nothing

Turn **All-or-nothing** on to force full-marks-or-zero, even on multi-part questions, even when partial credit is enabled elsewhere. A learner must get **every** part right to earn anything.

Use it for questions where a partly-right answer is not good enough (for example, a safety checklist where missing one step is a fail).

### Negative marking (deducting for wrong answers)

**Negative marking** (off by default) takes marks away for wrong answers. It discourages blind guessing, which matters most in formal exams. When you turn it on, two more settings appear.

**Negative mode** decides *how* the penalty is applied:

| Mode | How it works | Good for |
|------|--------------|----------|
| **Whole question** | If anything is wrong (a wrong pick **or** a missing correct answer), the learner loses the question's points and takes one fixed penalty. Getting it perfect earns full marks. | "You either know it or you don't" questions. |
| **Per wrong part** | The learner keeps credit for the parts they got right, and loses a fixed penalty for **each wrong selection**. Answers they left blank are **not** penalised. | "Select all that apply" questions where you want to punish wrong picks but not timidity. |

**Marks deducted per wrong** sets the size of the penalty. It is a **fixed number of marks** (for example, 1), not a percentage. In "per wrong part" mode it is charged once per wrong selection; in "whole question" mode it is charged once if the answer is not perfect.

> **Important:** A question left **completely blank** is never penalised in any mode. Negative marking only bites once a learner has actually answered.

### Worked example: the same question under each rule

A "select all that apply" question with **3 correct options**, worth **3 points**, penalty set to **1 mark per wrong**:

| What the learner picks | Partial credit (no negative) | Whole-question negative | Per-part negative |
|------------------------|------------------------------|-------------------------|-------------------|
| All 3 correct | **3** | **3** | **3** |
| 2 correct, nothing wrong | **2** | **−1** (not perfect) | **2** |
| 2 correct + 1 wrong extra | **2** (the wrong pick is ignored) | **−1** | **1** (2 right, minus 1 wrong) |
| 1 correct + 2 wrong | **1** | **−1** | **−1** (1 right, minus 2 wrong) |
| Nothing (blank) | **0** | **0** | **0** |

Notice how:

- **Partial credit alone** rewards what they found and ignores wrong extras.
- **Whole-question negative** treats anything short of perfect the same way.
- **Per-part negative** is the most nuanced: it rewards correct parts and punishes wrong picks, but leaves "I wasn't sure so I left it" unpunished.

> An individual question's score can go below zero with per-part negative marking, but the **whole attempt never drops below zero**. The total is floored at 0 at the end.

---

## 4. How specific question types are marked

Most types follow the rules above, but a few behave in their own way. Here is what to expect.

| Question type | How it is marked |
|---------------|------------------|
| **Single choice, True/False, Yes/No** | All-or-nothing. Full points if correct; the penalty if wrong and negative marking is on. |
| **Multiple response, Match, Order, Classify, drag-and-drop, Matrix grid, Cloze** | Multi-part. They support partial credit and (where they have distinct parts) per-part negative marking. |
| **Numeric** | Correct if the learner's number falls within the **tolerance** you set (for example ±0.05). A tolerance of 0 means an exact match. |
| **Calculated** | The numbers are randomised per learner. The system works out the expected answer for each attempt and checks it within tolerance, just like a numeric question. |
| **Confidence** | Special. The learner picks an answer **and** rates their confidence. Being confident and right earns the most; confident and wrong loses the most; low confidence is the safe middle. It uses its own built-in weighting and **ignores** the quiz's negative-marking settings. It never scores below zero. |
| **Code and SQL** | Auto-marked by checking the submission contains the required keywords or clauses. The code is **not** run. |
| **Essay, File upload, Oral recording, Observation, OSCE** | Marked by a human. They wait in a **grading queue** until someone scores them (see [Manual grading](#8-manual-grading-essays-uploads-and-observations) below). |
| **Survey, Psychometric** | Not right-or-wrong. They carry no points and are excluded from the score. Psychometric answers roll up into profile/subscale results instead. |

---

## 5. Overriding scoring for a single question

Sometimes one question needs different rules from the rest of the quiz. For example, in an otherwise partial-credit exam, you might want one critical safety question to be all-or-nothing.

Open that question in the **Question Studio → Scoring tab** and turn on **Override quiz scoring**. You can then set, just for this question:

- Partial credit on or off
- All-or-nothing on or off
- Negative marking on or off, with its own mode and penalty

Anything you do not change here still follows the quiz-wide Scoring tab settings. (The "Points source" choice is quiz-wide and cannot be overridden per question.)

> Like all scoring, an override is locked into each attempt when the learner starts, so changing it later does not rewrite past results.

---

## 6. Step three: turning points into a result

Once points are added up, the Scoring tab decides what that score *means*.

### Scale and pass mark

| Setting | What it means | Default |
|---------|---------------|---------|
| **Scale maximum** | The top of your score scale. Leave it at 100 to work in plain percentages. | 100 |
| **Pass mark** | The score (on that scale) a learner must reach to pass. | 70 |

So with the defaults, a learner who earns 70% or more of the available marks passes.

### Grade bands (letter grades)

Grade bands are optional. Without them, a result is simply **Pass** or **Fail**. Add bands to give richer feedback like A/B/C or Distinction/Merit/Pass.

Each band has:

| Field | What it means |
|-------|---------------|
| **Letter** | The grade shown, e.g. A, B, C. |
| **Label** | An optional name, e.g. "Distinction". |
| **Min–max %** | The percentage range this grade covers. |
| **Pass / Fail** | Whether this band counts as a pass. |
| **Colour** | A colour used in reports and on-screen. |

> **Tip:** Make sure your bands cover the whole 0–100% range with no gaps and no overlaps, so every score lands in exactly one band.

---

## 7. Multiple attempts: which score counts

If you let learners try more than once (set on the Delivery tab), you choose which attempt's score is the official one. This is the **Retake scoring basis**:

| Basis | What counts |
|-------|-------------|
| **Best** (default) | The highest score across all attempts. |
| **Latest** | The most recent attempt. |
| **First** | The very first attempt. |
| **Average** | The mean of all attempts. |

> **Tip:** "Best" is friendliest for practice; "First" or "Average" is fairer for high-stakes testing where you want to measure genuine readiness.

---

## 8. Manual grading: essays, uploads, and observations

Some questions cannot be marked by the system: essays, file uploads, spoken recordings, and assessor observations. When a learner submits, these go into a **grading queue** and the attempt shows as *submitted* (not yet *graded*). A reviewer marks them, and the final result is recalculated automatically. Auto-marked answers in the same attempt are never re-marked or lost in the process.

The **Manual grading and review** section of the Scoring tab lets you switch on workflows for this:

| Setting | What it does | Default |
|---------|--------------|---------|
| **Rubric grading** | Mark against criteria and levels (e.g. Clarity, Depth) instead of a single number. | Off |
| **Blind grading** | Hide the learner's name from graders to reduce bias. | Off |
| **Double marking** | Two graders mark each response; large differences go to a third person. | Off |
| **Moderation workflow** | Grades pass through an approval step before release. | Off |
| **Regrade engine** | Re-mark affected attempts after you correct an answer key. | Off |
| **Competency scoring** | Map questions to skills or learning outcomes. | Off |
| **Appeals window** | How many days a learner has to contest their result. | 14 |

> These settings govern the *grading process*, not the points maths. They do not change how auto-marked questions score.

---

## 9. Recipes: setting up common scoring schemes

**A friendly practice quiz.** Points source: Per item. Partial credit: On. Negative marking: Off. Pass mark: low or none. Attempts: unlimited, basis "Best". Learners get rewarded for what they know and never lose marks.

**A simple "number correct" quiz.** Points source: Equal. Partial credit: Off (or on, your choice). This makes every question count the same, so the score reads like "8 out of 10".

**A formal multiple-choice exam that discourages guessing.** Points source: Per item. Negative marking: On, mode "Whole question", penalty 1. Single-choice questions then cost a mark when wrong, so random guessing is not worthwhile.

**A "select all that apply" exam that rewards precision.** Partial credit: On. Negative marking: On, mode "Per wrong part", penalty 1. Learners earn marks for correct picks, lose marks for wrong picks, and are not punished for leaving an option unticked when unsure.

**A high-stakes certification with grades.** Pass mark: 70. Scale: 100. Grade bands: e.g. Fail 0–69, Pass 70–84, Distinction 85–100. Attempts: limited, basis "First". Turn on the certificate on the Certificate tab.

**One critical question must be all-or-nothing.** Leave the quiz on partial credit, then open that question's Studio → Scoring → Override quiz scoring → All-or-nothing.

---

## 10. Common mistakes to avoid

- **Forgetting to set points.** A question worth 0 points contributes nothing to the score. Check the Points field unless you are using "Equal" mode.
- **Grade bands with gaps or overlaps.** If a percentage falls in no band (or two), the result is ambiguous. Cover 0–100% cleanly.
- **Negative marking that is too harsh.** A large penalty plus partial credit can wipe out a mostly-correct answer. Test with the worked example above in mind before going live.
- **Expecting old attempts to change.** Editing a question or its scoring only affects **future** attempts. Use the regrade engine if you need to re-mark past attempts after fixing an answer key.
- **Treating surveys as scored.** Survey and psychometric questions never earn points; do not rely on them for a pass/fail outcome.
- **Confidence questions and negative marking.** Confidence questions handle their own penalties and ignore the quiz's negative-marking setting; you do not need to (and cannot) double up.

---

## 11. Where each setting lives

| What you want to set | Where to find it |
|----------------------|------------------|
| How much a question is worth (points) | Question Studio → Scoring → Points (or Structure tab item inspector) |
| Per item vs. equal points | Scoring tab → Scoring model → Points source |
| Partial credit / all-or-nothing | Scoring tab → Scoring model |
| Negative marking, mode, and penalty | Scoring tab → Scoring model |
| Pass mark and scale | Scoring tab → Pass mark and scale |
| Grade bands (letter grades) | Scoring tab → Grade bands |
| Which attempt counts (retakes) | Scoring tab (or Delivery tab) → Scoring basis |
| Rules for just one question | Question Studio → Scoring → Override quiz scoring |
| Manual grading workflow | Scoring tab → Manual grading and review |

---

## Related

- [Quiz & Exam Builder](./quiz-builder.md) — the full tour of every builder tab, including the Scoring tab.
- [Question Types](./question-types-supported-by-community-quiz.md) — what each question type is and how it is marked.
- [Scoring Engine (Developer Reference)](./scoring.md) — the exact formulas, breakdown fields, and edge cases.
