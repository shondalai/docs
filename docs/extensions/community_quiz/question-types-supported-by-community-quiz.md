---
id: question-types-supported-by-community-quiz
title: Question Types Supported by Community Quiz
sidebar_label: Question Types
sidebar_position: 3
---

# Question Types Supported by Community Quiz

Community Quiz includes **32 question types**, grouped into eight families. This guide explains each one in plain language — what the learner does, when to use it, and how it is marked.

> **Audience:** Anyone creating quizzes, exams, or surveys. No technical knowledge needed.

[← Back to Overview](./overview.md)

You set up questions in the **Question Studio** (see the [Quiz Builder guide](./quiz-builder.md)). Every type also has a built-in **"How to use this type"** panel with tips while you author it.

## How questions are marked

There are three marking styles, referenced throughout this guide:

- **Auto** — marked instantly by the system (most types).
- **Auto, partial credit** — multi-part questions can award part-marks (e.g. 2 of 3 correct = 2 marks). You control this on the [Scoring tab](./quiz-builder.md#4-scoring-tab--turning-answers-into-a-result); the [Scoring Guide](./scoring-guide.md) explains it in full.
- **Manual** — a human reviewer grades the response (essays, uploads, spoken answers, observations). These wait in a grading queue.
- **Not scored** — collected for information only (surveys, psychometric scales, and the stimulus that frames other questions).

## Overview

| Family | Question types |
|--------|----------------|
| **Choice** | Single choice, Multiple response, True / False, Yes / No, Audio, Video, Confidence, Survey |
| **Text** | Fill in the blank, Cloze, Short answer, Essay |
| **Matching** | Match, Order, Classify |
| **Interactive** | Drag-and-drop text, Drag-and-drop image, Hotspot, Matrix, Dropdown |
| **Numeric** | Numeric, Calculated |
| **Code** | Code, SQL |
| **Media** | File upload, Oral recording |
| **Specialised** | Assertion–Reason, Case study, Reading, Observation, OSCE, Psychometric |

---

## Choice questions

### Single choice (MCQ)
The learner picks **one** correct option from a list.
- **Best for:** straightforward knowledge checks with a single right answer.
- **Marking:** Auto.

> **Tip:** four or five options is a good balance — too few is easy to guess, too many overwhelms.

### Multiple response
The learner selects **every** correct option (more than one is right).
- **Best for:** "select all that apply" questions.
- **Marking:** Auto, partial credit (credit per correct choice; wrong picks can be penalised if you turn on negative marking).

### True / False and Yes / No
The learner chooses between two options.
- **Best for:** quick fact checks and confirmations.
- **Marking:** Auto.

### Audio
The learner listens to an audio clip, then answers a multiple-choice question.
- **Best for:** language listening, music, call-handling, or pronunciation checks.
- **Marking:** Auto (like a single choice).
- **You provide:** the audio file URL plus the options.

### Video
The learner watches a video clip, then answers a multiple-choice question.
- **Best for:** technique demonstrations, safety scenarios, or case footage.
- **Marking:** Auto.
- **You provide:** the video URL plus the options.

### Confidence
The learner picks an answer **and** rates how confident they are (Low / Medium / High).
- **Best for:** measuring genuine understanding and discouraging blind guessing.
- **Marking:** Auto with confidence weighting — being confident and right earns the most; being confident and wrong loses marks; low confidence is the safe middle. A question never scores below zero.

### Survey
A poll with no right answer.
- **Best for:** opinions, feedback, course evaluations.
- **Marking:** Not scored — responses are collected and reported.

---

## Text questions

### Fill in the blank
The learner types a short answer that is matched against your list of accepted answers.
- **Best for:** key terms, single values, or short facts.
- **Marking:** Auto (exact match; you can make it case-insensitive).

### Cloze
The learner fills **several** blanks embedded in a sentence or passage.
- **Best for:** completing a paragraph, definitions, or step descriptions.
- **Marking:** Auto, partial credit (one mark per blank).

### Short answer
The learner types a brief phrase matched against accepted answers.
- **Best for:** one- or two-word responses.
- **Marking:** Auto (borderline wording may need a quick manual check).

### Essay
The learner writes an extended response.
- **Best for:** explanations, arguments, and analysis.
- **Marking:** Manual. You can set minimum/maximum word counts and grade against a rubric.

---

## Matching questions

### Match
The learner pairs each item on the left with its correct partner on the right.
- **Best for:** term-to-definition, cause-to-effect, country-to-capital.
- **Marking:** Auto, partial credit (one mark per correct pair).

> **Tip:** add one or two extra options on the right so the last pair can't be guessed.

### Order
The learner arranges items into the correct sequence.
- **Best for:** processes, timelines, rankings.
- **Marking:** Auto, partial credit (one mark per item in the right place).

### Classify
The learner sorts items into labelled buckets.
- **Best for:** grouping into categories, types, or eras.
- **Marking:** Auto, partial credit (one mark per item in the correct bucket).

---

## Interactive questions

### Drag-and-drop text
The learner drags word tokens into blanks in a sentence.
- **Best for:** completing sentences from a word bank.
- **Marking:** Auto, partial credit (one mark per blank). Add a few extra words so guessing is harder.

### Drag-and-drop image
The learner drags labels onto the correct points on an image.
- **Best for:** labelling diagrams, maps, or equipment.
- **Marking:** Auto, partial credit (one mark per correctly placed label).

### Hotspot
The learner clicks the correct spot on an image.
- **Best for:** "point to the…" tasks on photos or diagrams.
- **Marking:** Auto (correct if the click lands in a correct zone).

### Matrix
The learner answers several rows that share the same set of columns (a grid).
- **Best for:** Likert banks, or several related multiple-choice rows.
- **Marking:** Auto when you provide an answer key; or leave it unscored to just collect responses.

### Dropdown
The learner chooses from dropdown menus embedded in a passage.
- **Best for:** in-context choices within a sentence.
- **Marking:** Auto, partial credit (one mark per dropdown).

---

## Numeric questions

### Numeric
The learner enters a number, checked against your answer within a tolerance.
- **Best for:** calculations and measurements (with an optional unit label).
- **Marking:** Auto (set a tolerance, e.g. ±0.05; 0 means an exact match).

### Calculated
The learner solves a formula whose numbers are **randomised for each attempt**.
- **Best for:** practising calculations where every learner gets different values.
- **Marking:** Auto (the system computes the expected answer per attempt and checks within tolerance).
- **You provide:** the formula and each variable's range.

---

## Code questions

### Code
The learner writes code in a syntax-highlighted editor.
- **Best for:** programming practice (JavaScript, Python, Java, and more).
- **Marking:** Auto by keyword coverage — the system checks the submission contains the required keywords. It does **not** execute the code.

### SQL
The learner writes a SQL query against a described schema.
- **Best for:** database query practice.
- **Marking:** Auto by required-clause coverage (not executed).

---

## Media questions

### File upload
The learner uploads one or more files.
- **Best for:** worked solutions, documents, designs, or projects.
- **Marking:** Manual. Set how many files and which file types are allowed.

### Oral recording
The learner records a spoken response in the browser.
- **Best for:** pronunciation, viva exams, presentations.
- **Marking:** Manual. Set a prompt and a maximum recording length.

---

## Specialised questions

### Assertion–Reason
The learner reads two statements (an assertion and a reason) and judges their relationship.
- **Best for:** rigorous reasoning checks common in science and medical exams.
- **Marking:** Auto (the standard relationship options are pre-filled and editable).

### Case study & Reading
A scenario (with optional exhibits) or a reading passage that the **following questions** refer to.
- **Best for:** grouping several questions around shared material.
- **Marking:** Not scored on their own — they present the material; the questions after them carry the marks.

### Observation & OSCE
An assessor marks the learner against a checklist of criteria while watching them perform — OSCE adds a named clinical "station".
- **Best for:** practical skills, clinical exams, and workplace assessment.
- **Marking:** Manual — an assessor scores the criteria; the learner is not asked to type an answer.

### Psychometric
The learner rates a statement on a scale (e.g. Strongly disagree → Strongly agree).
- **Best for:** personality, attitude, and self-assessment profiles.
- **Marking:** Not right-or-wrong — responses roll up into subscale scores (you can reverse-score negatively-worded items).

---

## Related

- [Quiz & Exam Builder](./quiz-builder.md) — how to add and configure questions, sections, and scoring.
- [Scoring (Developer Reference)](./scoring.md) — the exact rules behind partial credit and negative marking.
- [Question Types (Developer Reference)](./question-types.md) — technical detail and answer-data shapes for each type.
