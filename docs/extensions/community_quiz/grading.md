---
id: grading
title: Grading & Review
sidebar_label: Grading & Review
---

# Grading & Review

This guide explains how Community Quiz handles questions that a person has to mark by hand (essays, uploads, recordings, and assessor checklists), and how those marks combine with the automatic ones to produce a final result.

> **Audience:** Anyone who marks learner work or runs an assessment programme. No technical knowledge needed.

[← Back to Overview](./overview.md)

Most question types are marked instantly by the system. A handful need a human: an essay has to be read, a file opened, a recording listened to, a practical observed. Those answers go into a **grading queue**, a grader scores them, and the learner's result is finalised automatically. This guide is about that process. For the points maths itself (partial credit, negative marking, pass marks), see the [Scoring Guide](./scoring-guide.md).

---

## 1. Which questions need a human

These question types are always marked by a person:

| Type | What the grader does |
|------|----------------------|
| **Essay** | Read the written answer and award a score. |
| **File upload** | Open the learner's file(s) and award a score. |
| **Oral recording** | Listen to (or watch) the recorded response and award a score. |
| **Observation** | Score the learner against a checklist of criteria (no learner input to read). |
| **OSCE station** | An examiner scores a practical station against its criteria. |

Everything else (single choice, multiple response, matching, ordering, numeric, cloze, hotspot, and so on) is marked automatically the moment the learner submits.

> **Note:** course **assignments** (a lesson type in the [Course Builder](./course-builder.md)) are also marked by hand. They appear in their own tab of the grading area, alongside quiz responses.

---

## 2. How an attempt's status works

Knowing the status tells you whether a result is final.

| Status | Meaning |
|--------|---------|
| **In progress** | The learner is still taking the assessment. |
| **Submitted** | The learner has finished, but one or more answers are waiting to be marked. The result is not final yet. |
| **Graded** | Every answer (automatic and manual) has been scored. The result is final. |

While an attempt is **submitted**, its pass/fail outcome is deliberately left blank: the system will not declare a pass or fail, and will not issue a certificate, until the human-marked parts are done. The automatic answers are already scored and are never re-marked when you grade the rest.

---

## 3. The grading queue

The admin **Grading** area is the inbox for everything awaiting a mark. It has two tabs:

- **Quiz responses** - individual answers from exams and quizzes that need marking.
- **Assignment submissions** - course assignment lessons that need marking.

At the top you see live counts to help you plan your day: how many are **pending**, how many are **assigned to you**, how many you have **graded** (today and overall), how many are **overdue**, and the **average turnaround time**.

You can search by learner, exam title, question text, or question type, and sort by how long an item has been waiting. Each row shows the question type, the learner (unless blind grading hides it), the points available, and how long it has been in the queue.

### Assigning work

You can **assign** a queued item (or take it yourself) so two graders do not mark the same thing. An assignment can trigger a "you have work to do" email to the grader.

---

## 4. Marking an attempt

Open an item to mark it. The grader screen shows, for each answer that needs marking:

- The **question** exactly as the learner saw it.
- The learner's **answer** (the text, the uploaded file, or the recording).
- The **rubric**, if one is attached (see below).
- A **score** box (from 0 up to the points available).
- A **feedback** box for a comment to the learner.
- A **Flag for second review** checkbox.

Enter a score (or fill in the rubric), add any feedback, and submit. You can mark all the pending answers in one attempt together.

> **Tip:** feedback you write here is for the learner. It is shown with their result according to the quiz's results-release settings, so keep it constructive and specific.

---

## 5. Rubric grading

A **rubric** marks work against named **criteria** instead of a single gut-feel number, which makes marking more consistent and easier to justify.

Each rubric is a set of criteria (for example *Clarity*, *Evidence*, *Structure*), and each criterion has levels with descriptors and points. You build rubrics once in the admin and attach a rubric to a question. When **Rubric grading** is switched on (Scoring tab → Manual grading & review), the grader scores each criterion and the points add up to the answer's mark.

To use rubrics:

1. Create a rubric (criteria, levels, points) in the admin.
2. Attach it to the question that needs it.
3. Turn on **Rubric grading** on the quiz's Scoring tab.

The grader then sees the rubric on the marking screen and scores criterion by criterion. They can still award a direct score where a rubric is not attached.

---

## 6. Blind (anonymous) grading

Turn on **Blind grading** (Scoring tab → Manual grading & review) to hide the learner's identity from the grader. On the marking screen the learner appears as "Candidate #…" instead of by name, which reduces unconscious bias. The rest of the workflow is unchanged.

---

## 7. What happens after you mark

As soon as the last waiting answer in an attempt is scored, the system finalises the result automatically:

1. **The total is recalculated.** Your manual marks are added to the already-scored automatic answers. (Automatic answers are never re-marked.)
2. **The percentage, scaled score, pass/fail, and grade band** are worked out using the quiz's Scoring settings.
3. **The status becomes "Graded".**
4. **A certificate is issued** if the quiz awards one and the learner now passes (or it waits for approval, if that is required). See [Certificates](./certificates.md).
5. **The learner is notified** that their result is ready, in line with the quiz's results-release settings.

You do not need to trigger any of this. Marking the final answer is enough.

---

## 8. Regrading after a fix

Sometimes you discover a problem after learners have already taken an exam: an answer key was wrong, or you changed a scoring rule. The **Regrade engine** (Scoring tab → Manual grading & review) lets you recompute affected attempts.

- With the regrade engine **on**, recomputing an attempt re-runs the automatic marking with the current rules **and keeps every manual mark a grader already gave**. Human marks are treated as final and are never overwritten.
- With it **off**, recomputing only re-applies the pass mark, scale, and grade bands, without re-scoring the automatic answers.

> **Important:** as a rule, taking an attempt locks its scoring to the questions as they were at that moment, which keeps results fair. The regrade engine is the deliberate exception for when you genuinely need to re-mark past attempts after correcting a mistake.

---

## 9. Review-policy settings

The remaining options on the Scoring tab's **Manual grading & review** section let you record and apply your assessment policy:

| Setting | What it does | Default |
|---------|--------------|---------|
| **Double marking** | Pre-flags manually-graded answers so a second grader reviews them. Graders can also flag any individual answer with **Flag for second review**. | Off |
| **Moderation workflow** | Like double marking, marks graded answers for a colleague to review before the result is treated as settled. | Off |
| **Competency scoring** | When your exam has a [blueprint](./quiz-builder.md#3-blueprint-tab--what-the-exam-must-cover) with topic domains, surfaces per-topic mastery in the Reports area so you can see strength by skill, not just an overall score. | Off |
| **Appeals window** | The number of days a learner has to contest a result. This is the policy you publish; appeals are then handled through your normal review and regrade process. | 14 |

> **Tip:** the **Flag for second review** checkbox on the marking screen works at any time, whether or not double marking is switched on. It is the simplest way to say "a colleague should take a second look at this one".

---

## 10. Who can grade

Grading is controlled by a grading permission. You can grant it broadly (anyone in an "Assessors" group can mark anything) or scope it so a grader only handles specific quizzes. Combine this with **assignment** (section 3) so each grader has a clear, non-overlapping pile of work.

---

## 11. A typical marking workflow

1. Learners take the exam. Attempts with essays or uploads show as **Submitted**.
2. You open the **Grading** area and see the pending count.
3. You **assign** batches to graders (or take a batch yourself).
4. Each grader marks their items, scoring by **rubric** where one is attached and leaving **feedback**.
5. As the last answer in each attempt is marked, the result **finalises automatically**: pass/fail is set, a certificate issues if earned, and the learner is notified.
6. If you later spot a key error, fix it and use the **Regrade engine** to recompute the affected attempts.

---

## 12. Troubleshooting

- **An attempt is stuck on "Submitted".** It still has answers waiting to be marked. Open it in the Grading area and score the remaining items.
- **No pass/fail or certificate yet.** Both wait until the attempt is fully **Graded**. Finish marking the manual answers.
- **A grader cannot see the queue.** Check they have the grading permission, and that any per-quiz scoping includes the quizzes they need.
- **The total looks wrong after marking.** Confirm each manual answer's score is within its points range, and remember the final percentage uses the quiz's full Scoring settings (section weights, scale, grade bands). The [Scoring Guide](./scoring-guide.md) explains the maths.
- **I fixed an answer key but old results did not change.** Editing a question only affects future attempts. Use the **Regrade engine** to recompute past attempts deliberately.

---

## Related

- [Scoring Guide](./scoring-guide.md) - how marks turn into a percentage, pass/fail, and a grade.
- [Quiz & Exam Builder](./quiz-builder.md#4-scoring-tab--turning-answers-into-a-result) - the Scoring tab where these workflows are switched on.
- [Certificates](./certificates.md) - issued automatically once an attempt is fully graded and passed.
- [Question Types](./question-types-supported-by-community-quiz.md) - which types are auto-marked and which need a human.
