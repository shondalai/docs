---
id: quiz-builder
title: Quiz & Exam Builder
sidebar_label: Quiz Builder
---

# Quiz & Exam Builder

This guide explains how to build a quiz or exam in Community Quiz, what every tab does, and what each setting means — in plain language, no technical knowledge needed.

> **Audience:** Teachers, trainers, HR teams, certification bodies, and anyone creating assessments. You do **not** need to write code.

[← Back to Overview](./overview.md)

---

## 1. How the builder is organised

When you open a quiz, the builder is split into **seven tabs** that you work through in order (but you can jump between them freely at any time):

| # | Tab | What you do here |
|---|-----|------------------|
| 1 | **Structure** | Add sections and questions — the skeleton of the assessment. |
| 2 | **Blueprint** | (Optional) Define the topics the exam must cover and how deep each one goes. |
| 3 | **Scoring** | Decide how answers turn into points, the pass mark, and grade letters. |
| 4 | **Delivery** | Set when learners can take it, time limits, attempts, and on-screen tools. |
| 5 | **Integrity** | Choose how secure the exam is (anti-cheating measures). |
| 6 | **Certificate** | Award a certificate when a learner passes. |
| 7 | **Review & publish** | Check everything is ready, then make it live. |

### Working copy vs. live version (important)

- While you edit, you are changing a **working copy** held in your browser. Nothing is permanent until you click **Save draft**.
- A quiz that has been **published** has a separate frozen **live version** that learners take. Your edits to the working copy do **not** affect people currently taking the live version.
- **Save draft** stores your work but does **not** make it live. **Publish** makes it live.
- **Discard changes** throws away your unsaved edits (and, for an already-published quiz, returns to the live version).

### The header bar

At the top you always see:

- **Status badge** — *Unsaved*, *Draft*, *Live version current*, or *Unpublished changes*.
- **Readiness ring** — a 0–100% indicator of how many "ready to publish" checks pass. Click it to see what is still missing.
- **Save draft**, **Discard**, and **Publish** buttons.
- Live counters for **Sections** and **Items** (questions).

### Creating a new quiz

When you first create an assessment you choose a few things that set the tone:

| Setting | What it means | Choices (default) |
|---------|---------------|-------------------|
| **Kind** | The purpose. A **Certification exam** is scored and can issue certificates; a **Practice quiz** is lower-stakes; a **Survey** collects opinions with no right answers. | Exam / Quiz / Survey (Exam) |
| **Title** | The name learners and admins see. Required before you can save. | Free text |
| **Category** | An optional folder to group related quizzes. | Your categories (None) |
| **Integrity level** | The starting security posture (you can change it later in the Integrity tab). | Open / Controlled / Secure (Open) |

---

## 2. Structure tab — sections & questions

This is where you lay out the assessment. It has three columns: an **outline/question palette** on the left, the **section canvas** in the middle, and a **section inspector** (settings) on the right.

### Sections

A **section** is a block of the exam. There are six types:

| Section type | What it is |
|--------------|-----------|
| **Instructions** | A welcome/rules page with no questions (rich text only). |
| **Question set** | A fixed list of questions you choose yourself. |
| **Random pool** | The system draws a random set of questions from a **question bank** — every learner gets a different mix. |
| **Case study** | A scenario (with optional exhibits) followed by related questions. |
| **Break** | A timed pause between sections. |
| **Feedback** | A closing page, often used to show the score and a message. |

You add a section by dragging a type onto the canvas, or from the **+ Add section** menu. Drag the up/down arrows on a section card to reorder.

### Adding questions

- For **Question set** and **Case study** sections, switch the left rail to **Add question** and either drag a question type onto the section or click it to add. You can also click **From bank** to reuse existing questions.
- Each question shows its **points**, type, and a status badge (**approved** = ready to deliver, **draft** = still being written). Only *approved* questions count towards publishing.
- Editing a question opens the **Question Studio** (see section 9).

### Random pool settings

When a section is a **Random pool**, the inspector asks for:

| Setting | What it does | Default |
|---------|--------------|---------|
| **Question bank** | Which bank of questions to draw from. | — (must choose) |
| **Pool draw** | How many questions to pull per attempt. | 10 |
| **Difficulty filter** | Only draw easy / medium / hard questions (or any). | Any |
| **No repeats** | Avoid showing a learner the same question across retakes. | Off |

> **Tip:** keep your bank much larger than the draw count (about 4× or more) so retakes feel fresh and questions don't repeat.

### Per-section rules (the inspector tabs)

Select a section and open its **Rules** tab to control:

| Setting | What it does | Default |
|---------|--------------|---------|
| **Section timer** | A time limit just for this section (minutes; 0 = none). | 0 |
| **Lock when time ends** | Auto-close the section when its timer runs out. | On |
| **Navigation mode** | **Free** (jump around), **Sequential** (in order), or **Locked** (no going back). | Free |
| **One question per page** | Show one question at a time vs. several. | On |
| **Required to finish** | Learners must complete this section to submit. | On |
| **Shuffle questions** | Randomise question order. | On for pools |
| **Shuffle answer options** | Randomise the order of answer choices. | On |

The **Advanced** tab holds the section **Weight** (its share of the score, 0–100%) and the **Delete section** button. Per-question **points** can be overridden here too.

> **Note:** "Shuffle" lives here in Structure (per section), *not* in the Delivery tab.

---

## 3. Blueprint tab — what the exam must cover

A **blueprint** is a plan for *what* the exam tests and *how much*. It is **optional** — skip it for simple quizzes. Use it for serious certifications where you want balanced, fair coverage across topics and repeatable exams drawn from banks.

You define **domains** (topic areas). Each domain has:

| Field | What it means | Default |
|-------|---------------|---------|
| **Name** | The topic, e.g. "Cloud Security". | — |
| **Weight %** | How much this topic counts towards the final score. All weights should add up to 100%. | 0 |
| **Target items** | How many questions from this topic each learner should get. | 0 |
| **Item bank** | The question bank this topic draws from. | None |
| **Difficulty split** | How many of the target questions should be Easy / Medium / Hard. | 0 / 0 / 0 |
| **Bloom distribution** | (Optional) How many should test Remember / Understand / Apply / Analyse — i.e. thinking level. | 0s |
| **Colour** | A colour to identify the domain in charts. | Blue |

The tab also shows read-only health indicators: a **coverage matrix**, **weight distribution**, **cognitive balance**, **item-pool health** (how many spare questions each bank has), and a **validation** panel. Aim for: weights total 100%, coverage ≥ 95%, and each bank holding several times more questions than it needs.

Other blueprint settings: **Total points**, **Parallel forms** (how many interchangeable versions of the exam to generate), and a **Target difficulty split** (default 30% easy / 50% medium / 20% hard). You can **Export spec** to download the blueprint as a file.

---

## 4. Scoring tab — turning answers into a result

This tab decides how responses become points, a percentage, a pass/fail, and a grade. A **pipeline diagram** at the top summarises the journey: raw answers → section weights → scaled score → pass decision.

> **New to scoring?** The [Scoring Guide](./scoring-guide.md) walks through points, partial credit, negative marking, pass marks, and grade bands in plain language, with worked examples and ready-made recipes.

### Pass mark & scale

| Setting | What it means | Default |
|---------|---------------|---------|
| **Scale maximum** | The top of the score scale (100 behaves like a percentage). | 100 |
| **Pass mark** | The cut-off to pass, on that scale. | 70 |

### The scoring model

| Setting | What it means | Default |
|---------|---------------|---------|
| **Points source** | **Per item** = each question is worth its own points; **Equal** = every question counts the same. | Per item |
| **Partial credit** | Give part-marks on multi-part questions (e.g. 2 of 3 correct = 2 marks) instead of all-or-nothing. | On |
| **All-or-nothing items** | Force full-marks-or-zero, even where partial credit could apply. | Off |
| **Negative marking** | Deduct marks for wrong answers (discourages guessing). | Off |
| **Negative mode** | *(only when negative marking is on)* **Whole question** = one penalty if anything is wrong; **Per wrong part** = a penalty for each wrong selection (blanks aren't penalised). | Whole question |
| **Marks deducted per wrong** | *(only when negative marking is on)* How many marks each wrong answer costs. | 1 |
| **Retake scoring basis** | When multiple attempts are allowed, which counts: **Best**, **Latest**, **First**, or **Average**. | Best |

> **Example:** a 3-correct-answer question worth 3 points. With partial credit on, picking 2 correct = 2 marks. Turn on per-part negative marking with "1 mark per wrong" and a wrong extra pick costs 1 mark.

### Grade bands

Optionally add letter grades. Each band has a **Letter** (A, B…), an optional **Label** ("Distinction"), a **min–max %** range, a **Pass/Fail** flag, and a **colour**. With no bands, the result is simply Pass or Fail.

### Manual grading & review

For questions a human marks (essays, file uploads, observations), toggle the workflows you need:

| Setting | What it does | Default |
|---------|--------------|---------|
| **Rubric grading** | Mark against criteria × levels (e.g. Clarity, Depth). | Off |
| **Blind grading** | Hide the learner's name from graders. | Off |
| **Double marking** | Two graders mark each response; big differences go to adjudication. | Off |
| **Moderation workflow** | Grades pass through an approval queue. | Off |
| **Regrade engine** | Re-mark attempts after fixing an answer key. | Off |
| **Competency scoring** | Map questions to skills/outcomes. | Off |
| **Appeals window** | How many days learners have to contest a result. | 14 |

---

## 5. Delivery tab — when and how learners take it

Controls access, timing, attempts, and the on-screen experience.

### Schedule & access window

| Setting | What it means | Default |
|---------|---------------|---------|
| **Opens / Closes** | The date/time window the exam is available (blank = always / no deadline). Shown in the learner's timezone. | Blank |
| **Timezone** | The reference timezone for the schedule. | UTC |
| **Duration** | Total time limit in **minutes** (0 = untimed). | 0 |
| **Registration window** | Require learners to register first; reveals a **registration opens** date and **seat capacity**. | Off |
| **Late entry grace** | Minutes a latecomer can still start after the open time. | 0 |
| **Results release** | When final scores are shown. | Immediately |

### Attempts

| Setting | What it means | Default |
|---------|---------------|---------|
| **Attempts allowed** | 1, 2, 3, or unlimited. | 1 |
| **Scoring basis** | Which attempt counts (First / Latest / Best / Average). | Best |
| **Cooling period** | Hours a learner must wait between attempts. | 0 |
| **Vary questions on retake** | Draw a different question set each attempt (works only with random pools). | Off |
| **Resume after disconnect** | Let learners continue if they lose connection. | Off |
| **Autosave** | Save answers automatically as they go. | Off |

### Navigation & on-screen tools

Navigation: **Navigation mode** (Free / Sequential / No-back), **Page layout** (one per page / many / all), **Flag for review**, **Review screen** before submit, and **Show progress**.

Helper tools you can switch on: **Scientific calculator**, **Formula/reference sheet**, **Highlighter & strikethrough**, **Text zoom / high contrast**, and **Language switch**.

### Access model & pricing

| Setting | What it means | Default |
|---------|---------------|---------|
| **Access model** | **Free**, **Paid**, or **Members** only. Paid/Members reveal **Price** and **Currency**. | Free |

### Accommodations & overrides

Use **Add override** to give specific users or groups extra support: **extra time %**, **extra minutes**, **larger text**, **reader mode**, an **alternative window**, and a private **note** (e.g. "medical extension").

> **Note:** answer feedback settings live in the **Review & publish** tab, and shuffle lives in **Structure**.

---

## 6. Integrity tab — keeping exams honest

Pick a **security posture**; higher levels automatically switch on more protections (they build on each other):

| Posture | Use for | Turns on |
|---------|---------|----------|
| **Open** | Practice, marketing quizzes. | Nothing extra. |
| **Controlled** | Internal training. | Event logging + block copy/paste. |
| **Secure** | Academic / professional exams. | The above plus lockdown browser, forced fullscreen, blocked shortcuts, watermark, and consent. |
| **Proctored / Test-centre** | *(Coming soon — not selectable yet.)* | — |

You can also fine-tune each control individually:

- **Lockdown controls:** *Lockdown browser required*, *Force fullscreen*, *Disable copy/paste*, *Block right-click & shortcuts*, *Browser event logging* (logs tab-switching).
- **Access controls:** *Exam password*, *Voucher/access code*, *Invitation-only link*, *IP allow-list* (reveals an "allowed ranges" field), *Geolocation rules*, *Device fingerprint*, *Dynamic watermark* (overlays the candidate's identity to deter sharing).
- **Candidate consent:** require accepting a policy before starting.
- **Evidence retention:** how many days logs are kept (default 90).

A read-only **Monitoring signals** panel shows which behaviours are being logged (focus loss, fullscreen exit, copy/paste, unusual speed) based on the controls you enabled.

---

## 7. Certificate tab — rewarding a pass

Turn **Issue a certificate for this exam** on to award a verifiable credential. Key settings:

| Setting | What it means | Default |
|---------|---------------|---------|
| **Award when score ≥** | Minimum % to earn the certificate. | The pass mark |
| **Validity period** | How long it stays valid (6 months / 1 year / 2 years / no expiry). | 1 year |
| **CPD / CE credits** | Professional-development hours printed on the certificate. | 3 |
| **Require manual approval** | Hold certificates until a reviewer approves them. | Off |
| **Re-issue on retake** | Replace the certificate if a later attempt scores higher. | On |
| **Issue for prior passes** | Back-fill certificates to people who already passed. | Off |
| **Credential template** | Which certificate design to use. | Modern – Indigo |
| **Public verification page** | A public link/QR anyone can use to check the certificate. | On |

Sharing & integration toggles: **Open Badge 3.0**, **Add to LinkedIn**, **xAPI statement** (to a learning record store), **Email certificate on issue**, **Renewal reminder** (days before expiry), **Revocation** (invalidate with a reason), and **Watermark holder identity** on the PDF.

---

## 8. Review & publish tab — going live

### Readiness checklist

Five checks must pass before publishing (each links to the tab that fixes it):

1. **Draft state** — all changes are saved.
2. **Structure** — at least one section exists.
3. **Questions** — enough *approved* questions/pool draws.
4. **Scoring** — a pass mark / grade scheme is set.
5. **Integrity** — a security level is chosen.

### What learners see afterwards

| Setting | What it means | Default |
|---------|---------------|---------|
| **Release mode** | When answers/feedback appear: **on submit**, **after the exam closes**, or **never**. | — |
| **Show correct answers** | Reveal the right answer in the review. | Off |
| **Show explanations** | Show the author's explanations. | On |
| **Per-answer feedback** | Show feedback written for each option. | On |
| **Conditional feedback** | Show score-band messages (e.g. "Great job!"). | On |

### Version control

- **Lock items after publish** — questions become read-only once live (edits need a new version). *(On)*
- **Snapshot attempts** — each learner is tied to the exact version they started, so later edits never disrupt them. *(On)*
- **Version history** — a timeline of every published version (each is a frozen snapshot).

Then press **Publish**. The exam becomes live; the readiness ring and status badge confirm the state.

---

## 9. Question Studio — writing a question

When you add or edit a question, the **Question Studio** opens with four tabs and a live preview:

| Tab | What you set |
|-----|--------------|
| **Prompt** | The question **title** (a short label) and the **stem** (the full question text, with rich formatting/images). |
| **Answers** | The type-specific content — options, accepted answers, pairs, image hotspots, etc. Changes per question type. |
| **Scoring** | **Points** (how much it's worth), **Difficulty** (1–5, for analytics only), and an optional **Override quiz scoring** switch. |
| **Feedback** | An optional message shown after the learner answers. |

Each type also has a collapsible **"How to use this type"** guide with tips and how it's marked.

### Per-question scoring override

Turn **Override quiz scoring** on to give just this question its own rules (otherwise it follows the Scoring tab): **Partial credit**, **All-or-nothing**, and **Negative marking** (with whole-question / per-part mode and the marks to deduct). Useful for, say, making one critical question all-or-nothing in an otherwise partial-credit exam.

### The question types

Community Quiz includes **32 question types** in eight groups. Auto-graded types are marked instantly; manual types go to a grading queue.

**Choice**
| Type | What the learner does |
|------|------------------------|
| Single choice (MCQ) | Pick one correct option. |
| Multiple response | Pick every correct option (partial credit). |
| True / False, Yes / No | Pick one of two. |
| Audio / Video | Listen/watch a clip, then pick an option. |
| Confidence | Pick an answer **and** rate their confidence (which weights the score). |
| Survey | Pick an option — no right answer, just collected. |

**Text**
| Type | What the learner does |
|------|------------------------|
| Fill in the blank | Type a short answer matched to your accepted list. |
| Cloze | Fill several blanks inside a passage. |
| Short answer | Type a brief phrase. |
| Essay | Write a long answer (human-graded). |

**Matching**
| Type | What the learner does |
|------|------------------------|
| Match | Pair left items to right items. |
| Order | Arrange items into the correct sequence. |
| Classify | Sort items into labelled buckets. |

**Interactive**
| Type | What the learner does |
|------|------------------------|
| Drag-and-drop text | Drag words into blanks in a sentence. |
| Drag-and-drop image | Drag labels onto points on an image. |
| Hotspot | Click the correct spot on an image. |
| Matrix | Answer several rows that share one set of columns (Likert). |
| Dropdown | Choose from dropdowns embedded in a passage. |

**Numeric**
| Type | What the learner does |
|------|------------------------|
| Numeric | Enter a number (checked within a tolerance, with an optional unit). |
| Calculated | Solve a formula whose numbers are randomised each attempt. |

**Code**
| Type | What the learner does |
|------|------------------------|
| Code | Write code, checked for required keywords. |
| SQL | Write a SQL query, checked for required clauses. |

**Media**
| Type | What the learner does |
|------|------------------------|
| File upload | Upload file(s) for a human to grade. |
| Oral recording | Record a spoken response for a human to grade. |

**Specialised**
| Type | What the learner does |
|------|------------------------|
| Assertion–Reason | Judge two statements and their relationship. |
| Case study / Reading | A scenario or passage that following questions refer to (not scored itself). |
| Observation / OSCE | An assessor scores the learner against a checklist of criteria. |
| Psychometric | Rate a statement on a scale that feeds a personality/attitude profile. |

> See the [supported question types](./question-types-supported-by-community-quiz.md) reference for more detail on each.
