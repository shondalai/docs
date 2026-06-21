---
id: courses
title: Courses & Enrollment
sidebar_label: Courses & Enrollment
---

# Courses & Enrollment

This guide explains what learners experience when they take one of your courses, and how you manage enrolments, track progress, and handle completion. It is the companion to the [Course Builder](./course-builder.md), which covers *building* a course; this one covers *running* it.

> **Audience:** Course creators, trainers, and anyone managing learners. No technical knowledge needed.

[← Back to Overview](./overview.md)

A course in Community Quiz is a structured learning path: modules of lessons (videos, readings, quizzes, assignments, and resources), optional gating and pacing, and a certificate at the end. Once you build and publish a course, learners can find it, enrol, work through it at their own pace or together as a group, and earn a credential when they finish.

---

## 1. The learner journey

Every learner travels the same path:

```
Browse the catalog  →  Open a course  →  Enrol  →  Work through lessons
   →  Track progress  →  Complete  →  Earn a certificate
```

1. **Browse.** Learners see your published courses in a catalog, with the title, level, instructor, lesson count, and whether a certificate is offered.
2. **Open.** The course landing page shows what they will learn, the curriculum, the instructor, and the price (if any).
3. **Enrol.** Free courses enrol instantly; paid courses go through checkout; members-only courses check membership.
4. **Learn.** Lessons open in a focused, full-screen player with the curriculum down the side.
5. **Track.** A progress bar follows them, and each finished lesson is ticked off.
6. **Complete.** When they meet the completion rules, the course is marked complete.
7. **Earn.** A certificate is issued automatically if the course awards one.

---

## 2. The course catalog and landing page

The **catalog** lists every course that is published and set to show in the catalog. Learners can see the essentials at a glance: title, subtitle, level (Beginner / Intermediate / Advanced), category, instructor, lesson count, rough duration, how many people are enrolled, and a certificate badge where one is offered.

Opening a course shows its **landing page**, built from what you entered on the Course Builder's Details tab:

- The **title**, **subtitle**, and **promo image or video**.
- **What you'll learn** (the outcomes) and **Requirements**.
- An **About** section and the **instructor**'s name, role, and bio.
- The **curriculum**: modules and lessons, with lessons marked as locked, free preview, or completed.
- An **enrol card** showing the price and the right call to action.

The call to action adapts to the learner:

| The learner sees | When |
|------------------|------|
| **Enrol for free** | The course is free. |
| **Enrol now · [price]** | The course is paid and they have not bought it. |
| **Start learning** | They are enrolled but have not begun. |
| **Continue learning** | They are partway through. |
| **Sign in to enrol** | They are not logged in. |

---

## 3. Enrolling

How a learner joins depends on the course's **access model** (set on the Course Builder's Enrollment tab):

| Access model | How enrolment works |
|--------------|---------------------|
| **Free** | The learner enrols instantly with one click. |
| **Paid** | The learner buys the course through checkout; access is granted automatically on payment. See [Selling Quizzes & Courses](./selling-quizzes-and-courses.md). |
| **Members** | Access is granted to learners who hold an active membership. |

### Capacity and waitlists

If you set a **seat capacity**, enrolment stops when the course is full. If you also enabled a **waitlist**, further learners join a waiting list instead of being turned away, and are promoted automatically (oldest first) when a seat frees up. Buyers of a paid course are never blocked by capacity.

### Self-paced vs cohort

- **Self-paced** courses release content relative to each learner's own enrolment date.
- **Cohort** courses release content relative to a shared start date, so everyone moves together.

This only affects content **drip** (scheduled release); it does not change how someone enrols.

### Prerequisites

If a course has **prerequisites**, a learner must finish the required course (or pass the required quiz) before they can enrol. Buyers of a paid course are not held back by prerequisites.

---

## 4. The lesson player

Lessons open in a **focused, full-screen player**: the lesson content fills the screen, with the course curriculum in a sidebar so learners always know where they are. The sidebar shows each module and lesson with an icon, its duration, a lock symbol where a lesson is not yet available, and a tick once it is done. A progress bar at the top tracks overall completion.

### Lesson types

| Type | What the learner does |
|------|------------------------|
| **Video** | Watches an embedded video. |
| **Reading** | Reads formatted text and images. |
| **Quiz** | Opens a linked quiz or exam and takes it; the result can count towards completion. |
| **Assignment** | Submits work (text and/or a file) for a grader to mark. See [Grading & Review](./grading.md). |
| **Resource** | Downloads a file or opens a link (a syllabus, a worksheet, a reference). |

> **Live sessions:** a lesson can also stand in for a scheduled, instructor-led session. Community Quiz does not run the video call itself; you share the joining details with your learners.

### Moving through lessons

Learners click **Mark complete** to finish a lesson (quiz lessons can complete automatically when the learner passes). They can move to any unlocked lesson from the sidebar, and the player remembers where they left off so **Continue learning** picks up at the right place.

### Drip (scheduled release)

If you enabled **content drip**, lessons unlock over time instead of all at once: weekly, per module, or on your chosen cadence. A locked lesson shows when it will become available. **Free preview** lessons are never locked.

---

## 5. Progress and completion

Community Quiz records progress as learners go: each completed lesson is stored, and the course shows a rolling **percentage complete**. By default every lesson counts, but you can mark some lessons as optional so they do not count towards completion.

A course is marked **complete** when the learner meets its completion rule (set on the Course Builder):

| Completion rule | The learner must |
|-----------------|------------------|
| **All lessons** | Finish every required lesson. |
| **90% progress** | Reach 90% of the required lessons. |
| **Pass the final exam** | Pass the designated final quiz. |

You can layer extra requirements on top, such as **passing the final exam**, **submitting graded assignments**, a **minimum time on the course**, or **manual approval** by a reviewer. Completion is sticky: once a learner has completed a course, adding stricter rules later does not undo their completion.

When the course is completed and it awards a certificate, the credential is issued automatically (or held for approval, if that is required). See [Certificates](./certificates.md).

---

## 6. Free previews and paid courses

**Free preview lessons** let people sample a course before they commit. Any lesson you mark as a preview is visible to everyone, enrolled or not, straight from the landing page. The rest stays locked until they enrol.

For **paid** courses, the curriculum is gated until the learner buys access. They can still watch the preview lessons, and a clear call to action takes them to checkout. The moment payment succeeds, they are enrolled and the whole course unlocks. The buying and unlocking flow is covered in [Selling Quizzes & Courses](./selling-quizzes-and-courses.md).

---

## 7. Course versions: learners stay where they started

Published courses are **versioned**. When a learner enrols, they are pinned to the version of the course that was live at that moment. If you later improve the curriculum and publish a **new version**, learners already enrolled keep following the version they started on, so their progress and lesson list never shift under them. New enrolments get the new version.

This is why the Course Builder asks you to **publish a new version** to change a live course, rather than editing the live one directly.

---

## 8. Managing enrolments (admin)

The admin enrolment tools let you run the programme, not just watch it. You can:

- **See every enrolment** with the learner, course, progress, status, and dates, filtered by status, course, source, or time period.
- **Enrol learners yourself** (pick a course and one or more users), optionally with an access expiry and a welcome email. Capacity and waitlist rules are respected.
- **View a learner's detail**: their progress module by module and an activity timeline.
- **Extend access** by adding days or setting a new expiry date.
- **Unenrol** a learner (their access ends but their history is kept), which also promotes the next person off the waitlist.
- **Message a learner** directly.

### Enrolment statuses

| Status | Meaning |
|--------|---------|
| **Not started** | Enrolled with an active seat, but no lessons begun. |
| **Active** | Enrolled and making progress. |
| **At risk** | Enrolled but inactive for a while (a prompt to follow up). |
| **Completed** | Finished the course and met all the rules. |
| **Waitlisted** | Waiting for a seat; does not hold a seat yet. |
| **Expired** | Access has ended (unenrolled or past its expiry). |

Each enrolment also records its **source**: **manual** (self-enrolled or admin-enrolled), **purchase** (bought), or **membership**.

> **Tip:** the **At risk** status is your early-warning signal. Filter for it to find learners who started but stalled, and send a nudge before they drift away.

---

## 9. Common setups

**A free, open mini-course.** Access model: Free. Pace: Self-paced. Capacity: unlimited. Drip: off (all content at once). A short preview lesson on the landing page to draw people in. Certificate on completion of all lessons.

**A paid, self-paced certification course.** Access model: Paid (price + currency). Completion: Pass the final exam. Certificate with CPD hours and an expiry. A couple of free preview lessons so buyers know what they are getting. See [Selling Quizzes & Courses](./selling-quizzes-and-courses.md).

**A cohort with a fixed start.** Pace: Cohort with a start date. Drip: weekly, so the group moves through together. Capacity set with a waitlist so late sign-ups are queued.

**A members-only library course.** Access model: Members. Learners with an active membership get in automatically; everyone else sees the join prompt.

---

## 10. Troubleshooting

- **A course is not in the catalog.** Check it is **published**, has a published **version**, and is set to show in the catalog.
- **A learner cannot enrol.** The course may be **full** (check capacity and the waitlist), or they may not have met a **prerequisite**, or it is **members-only** and they have no active membership.
- **Lessons are locked.** Drip may be releasing content on a schedule, or the learner is not enrolled (only preview lessons show before enrolment).
- **The course will not mark complete.** Review the completion rule and any extra gates (final exam, graded assignments, minimum time, manual approval). An assignment still waiting to be graded will hold completion until it is marked - see [Grading & Review](./grading.md).
- **No certificate appeared.** Confirm the course awards a certificate and that completion was actually reached. If manual approval is on, the credential is waiting for you. See [Certificates](./certificates.md).
- **A learner says the course "changed".** It did not for them: enrolled learners stay on the version they started. Your edits apply to new enrolments after you publish a new version.

---

## Related

- [Course Builder](./course-builder.md) - building the modules, lessons, and rules.
- [Selling Quizzes & Courses](./selling-quizzes-and-courses.md) - charging for courses through EasyCommerce.
- [Certificates](./certificates.md) - the credential awarded on completion.
- [Grading & Review](./grading.md) - marking course assignments and quiz lessons.
- [Quiz & Exam Builder](./quiz-builder.md) - building the quizzes you attach to lessons.
