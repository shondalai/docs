---
id: course-builder
title: Course Builder
sidebar_label: Course Builder
---

# Course Builder

This guide explains how to build an online course in Community Quiz — combining lessons, videos, quizzes and assignments into a structured learning path — and what every tab and setting does, in plain language.

> **Audience:** Course creators, trainers, and educators. No technical knowledge needed.

[← Back to Overview](./overview.md)

---

## 1. How the course builder works

A course is built across **five tabs** that you can move between freely:

| # | Tab | What you do here |
|---|-----|------------------|
| 1 | **Curriculum** | Add modules and lessons — the structure of the course. |
| 2 | **Details** | The course title, description, image, instructor, and what learners will gain. |
| 3 | **Enrollment** | How learners join (free / paid / members), capacity, pacing, and completion rules. |
| 4 | **Certificate** | Award a certificate when a learner completes the course. |
| 5 | **Review & publish** | Final checks, then make it live. |

**Draft vs. live:** while you edit, changes are kept in a **draft** and only saved when you click **Save**. **Publishing** creates a frozen **version** that learners follow; learners stay on the version they started, so later edits don't disrupt them. Published courses are updated by publishing a **new version**, not by editing the live one.

The header bar shows the course **title**, a **status** badge (New draft / Draft / Live), and live counts of **modules** and **lessons**.

> **Tip:** Curriculum changes (adding or removing lessons) should be **saved** before you switch to another tab.

---

## 2. Curriculum tab — modules & lessons

Organise your course into **modules** (learning blocks), each holding a list of **lessons**. Drag lessons to reorder them within a module; modules are numbered automatically.

### Module settings

Select a module to set its **title**, a **summary** (a short description of the block), and to **delete** it (which removes its lessons too). It also shows whether content **drip** (scheduled release) applies.

### Lesson types

Every lesson has a **title** and an estimated **duration** (e.g. `12:40` or `15` minutes). The lesson **type** decides what content fields appear:

| Lesson type | What it holds |
|-------------|---------------|
| **Video** | A video **URL** (hosted on your CDN or a video platform) to embed. |
| **Reading** | Rich-text **body** content written directly in the lesson. |
| **Quiz** | A link to an **existing quiz or exam** (chosen from a searchable list; surveys are excluded). Learners open the assessment from the lesson. |
| **Assignment** | A **prompt** describing a task learners must respond to (uploads, project work). |
| **Live session** | A scheduled instructor-led session. |
| **Resource** | A **URL** to a downloadable file, document, or external link. |

> **Note:** changing a lesson's type clears the previous type's content fields, so pick the type first.

### Per-lesson settings

| Setting | What it does | Default |
|---------|--------------|---------|
| **Free preview** | Let people view this lesson *before* enrolling (great for samples). | Off |
| **Required to complete** | Learners must finish this lesson to complete the course. Turn off for optional extras. | On |
| **Downloadable** | Allow learners to download the content for offline use. | Off |
| **Available** | **Day 0** = unlocked as soon as they enrol; **Drip** = unlocked later (reveals a **Drip offset days** field). | Day 0 |

---

## 3. Details tab — the course landing page

Everything here shapes how the course appears in the catalog and on its landing page.

| Setting | What it means | Default |
|---------|---------------|---------|
| **Title** | The course name shown everywhere. Required to save. | — |
| **Subtitle** | A short tagline under the title. | — |
| **Category** | Groups the course for browsing and filtering. | None |
| **Level** | Beginner / Intermediate / Advanced. | Beginner |
| **Short description** | A paragraph summarising the course and who it's for. | — |
| **Promo media** | A cover image or intro video URL shown on the landing page (with a "show on page" switch). | On |
| **What you'll learn** | A list of clear, measurable outcomes (4–8 works well). | On |
| **Requirements** | A list of prerequisites or things to prepare. | On |
| **Instructor** | The instructor's **name**, **title/role**, and **bio** (each with a "show" switch). | On |

---

## 4. Enrollment tab — access, pricing & completion

Controls who can join, how they're paced, and what "finished" means.

### Access & pricing

| Setting | What it means | Default |
|---------|---------------|---------|
| **Access model** | **Free**, **Paid** (reveals **Price** + **Currency**), or **Members** only. | Free |
| **Coupons & campaigns** | Allow discount codes / promotions for this course. | On |
| **Includes certificate** | Award a certificate on completion (full setup is in the Certificate tab). | Off |

### Pacing & capacity

| Setting | What it means | Default |
|---------|---------------|---------|
| **Enrollment pace** | **Self-paced** (each learner goes at their own speed) or **Cohort** (everyone moves together). | Self-paced |
| **Seat capacity** | Maximum number of learners (blank = unlimited). | Unlimited |
| **Enrollment window** | When people can enrol ("Always open" or specific dates). | Always open |
| **Waitlist** | Auto-promote waiting learners when a seat frees up. | Off |
| **Content drip** | Release content on a schedule instead of all at once; reveals a **cadence** (All at once / Weekly / Per module). | Off |

### Completion rules

| Setting | What it means | Default |
|---------|---------------|---------|
| **Prerequisites** | Other courses/exams a learner must finish first. | None |
| **Completion requires** | What counts as "done": **All lessons**, **90% progress**, or **Pass the final assessment**. | All lessons |
| **Final exam** | The capstone quiz/exam (used to gate the certificate if "Pass final" is chosen). | None |
| **Issue certificate** | Award a certificate when the completion rule is met. | Off |

---

## 5. Certificate tab — credentials

Turn **Award certificate** on to issue a credential when a learner completes the course. That unlocks the rest.

### Completion criteria (combine as needed)

| Criterion | What it means | Default |
|-----------|---------------|---------|
| **Complete all required lessons** | Every lesson marked "required" must be finished. | On |
| **Pass the final exam** | The designated final exam must be passed. | On |
| **Submit graded assignments** | All graded assignments must be submitted and passed. | On |
| **Minimum time on course** | Learners must spend at least a set time (stops skimming). | Off |
| **Manual approval** | A reviewer must approve before the certificate is issued. | Off |

### Sharing & design

| Setting | What it means | Default |
|---------|---------------|---------|
| **Open Badge 3.0** | Issue a portable badge that fits digital credential wallets. | On |
| **Add to LinkedIn** | One-click button to add the certificate to LinkedIn. | On |
| **CPD / CE credits** | Continuing-education hours/credits printed on the certificate. | — |
| **Public verification page** | A public link others can use to verify the credential. | On |
| **Credential template** | The certificate design: *Modern – Indigo foil*, *Minimal – Ink*, or *Credential – Blue seal*. | Modern |
| **Edit in Template Designer** | Opens an advanced tool to customise colours, fonts, logos and layout. | — |

---

## 6. Review & publish tab — going live

### Readiness checklist

Five checks are shown with a Pass/Review status and a readiness percentage:

1. **Course details** — a title and metadata are set.
2. **Curriculum** — at least one module with one or more lessons.
3. **Enrollment** — a valid access model is chosen.
4. **Certificate** — optional; shows whether it's enabled.
5. **Version** — draft or live status.

### Version control

- **Lock lessons after publish** — published lessons can't be edited directly; updates need a new version. *(On once live)*
- **Snapshot enrollments** — learners are frozen to the course version they enrolled on, so updates don't disrupt them. *(On once live)*
- **Version history** — a list of every published version with its status and date.
- **Release summary** — a quick overview of lesson count, module count, access model, and catalog visibility for the version you're about to publish.

Press **Publish** to make the course live. To change a published course, edit the draft and **publish a new version**.

---

## Related

- [Quiz & Exam Builder](./quiz-builder.md) — build the quizzes you attach to course lessons.
- [Getting started with Community Quiz](./getting-started-with-community-quiz.md)
