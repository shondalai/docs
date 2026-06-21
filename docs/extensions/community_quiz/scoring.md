---
id: scoring
title: Scoring Engine (Developer Reference)
sidebar_label: Scoring (Reference)
---

# Community Quiz Scoring

Reference for how `com_communityquiz` v8 turns a candidate's responses into marks, a scaled score and a pass/fail decision. Generated from the engine source at `com_communityquiz/admin/src/Service/` (`ScoringService.php`, `QuestionType/`); if the code and this document disagree, the code wins. For the per-type grading rules see [question-types.md](question-types.md).

> **Setting up a quiz rather than reading code?** The [Scoring Guide](./scoring-guide.md) explains all of this in plain language for site owners, with worked examples and recipes.

## The pipeline at a glance

```
response ──grade()──▶ GradeResult ──awardFor()──▶ awarded (per item) ──Σ──▶ raw ──▶ percentage ──▶ scaled ──▶ pass / grade band
            (type)      (fraction +    (ScoringService:                          floor 0    raw/max×100   ×scale_max   ≥ pass_mark
                         breakdown)      policy)                                                                        + grade bands
```

Scoring runs in **two phases** (`ScoringService`), so manual grading composes cleanly:

1. **`scoreAttempt(attemptId)`** — auto-grades every item against the **frozen** `attempt_items.displayed` snapshot (never the live questions), applies the scoring policy, and **stores** the per-response result in `#__cq_responses` (`awarded`, `max_points`, `is_correct`, `partial`, `answered`, `pending`). Manual types are marked `pending` and queued into `#__cq_grading_tasks`.
2. **`finalizeAttempt(attemptId)`** — rolls up the **stored** response scores into the attempt (raw / percentage / scaled / passed / grade band / status) and refreshes the quiz's denormalised stats. Called after submit **and** after each manual grade; it never re-grades, so manual awards are never clobbered.

Because phase 1 grades against the frozen snapshot and phase 2 only sums stored values, **editing a question after an attempt is taken does not change that attempt's score.**

## GradeResult and the per-part breakdown

`grade()` returns a `GradeResult` (`QuestionType/GradeResult.php`):

| Field | Meaning |
|---|---|
| `fraction` | The earned **positive** proportion, `0..1` (signed `-1..1` for confidence). Stored as `responses.partial`. |
| `correct` | Fully correct. |
| `answered` | The candidate provided a non-empty answer. |
| `pending` | Needs manual grading. |
| `right` | Correct parts (multi-part types). |
| `wrong` | **Answered-but-incorrect** parts (multi-part types). Left-blank parts are **not** counted here. |
| `total` | Number of correct keys / scorable parts. `0` for single-part and free-text types (no breakdown). |

`AbstractQuestionType` provides the constructors every built-in uses:

| Constructor | `fraction` | `right`/`wrong`/`total` | Used for |
|---|---|---|---|
| `parts(right, wrong, total)` | `right/total` | the breakdown | Multi-part types (partial credit + per-part negative) |
| `exact(bool)` | `1.0` / `0.0` | `0` (no breakdown) | Single-part all-or-nothing types |
| `scored(float)` | clamped `0..1` | `0` (no breakdown) | Fraction-only partial types (cloze, etc.) |
| `blank()` | `0.0` | `0` | Empty / missing responses |
| `awaiting()` | `0.0`, `pending` | `0` | Essay, file, oral, observation/OSCE |
| `unscored()` | `0.0`, answered | `0` | Survey / psychometric (zero points, analytics only) |

The breakdown is what makes **decoupled partial credit** and **per-part negative marking** possible: positive credit is `right/total`, while `wrong` is carried separately so the scoring policy can penalise it (or not).

## Points: where an item's value comes from

Each scoring item carries a max-points value, frozen into `attempt_items.max_points` when the attempt is created:

- **Authoring** — `points` (the question's base value) or the section's per-item `points_override`, edited in the builder (Structure tab item inspector / Question Studio "Points").
- **`points_source`** (quiz policy):
  - `per_item` (default) — use each item's authored value.
  - `equal` — every scoring item is worth `1.0`, regardless of its authored value. Zero-point items (survey / psych) stay `0`.

Survey/psychometric items carry zero points and are excluded from scoring entirely (`unscored()`).

## The scoring model (quiz default)

Stored as the `scoring` JSON on `#__cq_quizzes`, edited in the builder **Scoring tab** (`ScoringModelCard`). Read by `ScoringService::scoringConfig()`:

| Key | Default | Meaning |
|---|---|---|
| `points_source` | `per_item` | `per_item` or `equal` (see above). |
| `partial_credit` | `true` | Award `right/total × points` for partially-correct multi-part items. When off, items are all-or-nothing. |
| `all_or_nothing` | `false` | Force all-or-nothing even when `partial_credit` is on. |
| `negative_marking` | `false` | Enable deductions for wrong answers. |
| `negative_mode` | `whole` | `whole` or `per_part` (see below). Only used when `negative_marking` is on. |
| `negative_per_wrong` | `1` | **Fixed marks** deducted — per wrongly-selected part (`per_part`) or once when the item is not fully correct (`whole`). Not a fraction of points. |

> The Scoring tab also stores manual-grading workflow fields (rubric/blind/double marking, moderation, regrade, appeals window). Those govern the grading queue and review, not the auto-scoring math, and are ignored by `ScoringService`.

## Partial credit (decoupled)

Positive credit is **decoupled** from wrong picks:

```
positive = right / total × points
```

A wrong selection does **not** reduce this positive credit — wrong picks are deducted only by negative marking (if enabled). Unselected correct answers simply lower `right`, so they reduce the credit but never trigger a penalty by themselves in `per_part` mode.

**Example.** A multiple-answer question with **3 correct** options, worth **3 points**, `partial_credit` on, negative marking off:

| Candidate picks | right | wrong | Award |
|---|---|---|---|
| 3 correct | 3 | 0 | `3/3 × 3` = **3** |
| 2 correct | 2 | 0 | `2/3 × 3` = **2** |
| 2 correct + 1 distractor | 2 | 1 | `2/3 × 3` = **2** (the distractor is ignored without negative marking) |
| 0 correct + 1 distractor | 0 | 1 | **0** |

## Negative marking

Two modes, chosen by `negative_mode`. `negative_per_wrong` is a fixed number of marks.

### Whole question (`whole`)

The item is right or wrong as a unit. Fully correct earns full points; **anything less** — any wrong pick **or** any missed correct answer — voids the positive credit and deducts a fixed penalty:

```
award = fullyCorrect ? points : −negative_per_wrong
```

Unselected / left-out correct answers count toward "not fully correct", so an incomplete answer is treated as wrong.

### Per wrong part (`per_part`)

Positive credit for the correct parts, minus a fixed penalty for each **wrongly-selected** part. Left-blank parts are **not** penalised:

```
award = (right / total × points) − (wrong × negative_per_wrong)
```

The award can go negative (the attempt total is floored at zero in `finalizeAttempt`).

**Example.** Same 3-correct, 3-point question, `negative_per_wrong = 1`:

| Candidate picks | right | wrong | `whole` | `per_part` |
|---|---|---|---|---|
| 3 correct | 3 | 0 | **3** | `3 − 0` = **3** |
| 2 correct, no distractor | 2 | 0 | **−1** (not fully correct) | `2 − 0` = **2** |
| 2 correct + 1 distractor | 2 | 1 | **−1** | `2 − 1` = **1** |
| 1 correct + 2 distractors | 1 | 2 | **−1** | `1 − 2` = **−1** |
| nothing (blank) | 0 | 0 | **0** (not answered) | **0** |

## The award formula

`ScoringService::awardFor(GradeResult, points, cfg, signed)` is the single place the policy is applied (every result rounds to 2 decimals):

```
if signed (confidence):            award = fraction × points         // honoured as-is, exempt from all policy below
fullyCorrect = total>0 ? (right==total && wrong==0) : result.correct

if negative_marking AND answered AND points>0:
    if negative_mode == 'per_part' AND total>0:
        award = right/total × points − wrong × negative_per_wrong
    else:                                                            // whole
        award = fullyCorrect ? points : −negative_per_wrong
else if partial_credit AND NOT all_or_nothing:
    award = (total>0 ? right/total : fraction) × points
else:                                                                // all-or-nothing
    award = fullyCorrect ? points : 0
```

Notes:
- A **blank** response (`answered == false`) is never penalised in any mode.
- A **single-part** item (`total == 0`, e.g. MCQ) behaves all-or-nothing: full points when correct, `−negative_per_wrong` when wrong (negative on), else `0`.
- `confidence` is exempt because it carries its own signed weighting; `pending` (manual) items get no auto-award.

## Per-question override

A single question can override the quiz default. Stored as the `scoring` JSON on `#__cq_questions`, edited in **Question Studio → Scoring** ("Override quiz scoring" toggle, then partial credit / all-or-nothing / negative marking / mode / marks-per-wrong).

| Override key | Effect |
|---|---|
| `override` | Must be truthy for any of the following to apply; otherwise the question inherits the quiz config. |
| `partial_credit`, `all_or_nothing`, `negative_marking` | Replace the quiz value when present. |
| `negative_mode`, `negative_per_wrong` | Replace the quiz value when set. |

`points_source` is **not** overridable per question (it is a quiz-wide concept).

`ScoringService::effectiveConfig(quizConfig, questionScoring)` does the merge: it starts from the quiz config and overlays only the keys the question specifies (when `override` is truthy).

### Immutability

The per-question override is editorial config (not part of the versioned question content), so `AttemptService::freezeQuestion()` reads it from the live `#__cq_questions.scoring` and freezes it into `attempt_items.displayed.scoring` at attempt creation. At grading time `scoreAttempt()` reads that frozen override per item and merges it with the quiz config. Attempts created before this feature (no `displayed.scoring`) and questions with no override fall back to the quiz config with no error.

(The quiz-level defaults are read live at grading time, not frozen; in practice grading runs at submit, moments after the attempt is taken.)

## Per-type behaviour

| Category | Types | Partial credit | Per-part negative | Notes |
|---|---|---|---|---|
| Multi-part | `multi`, `match`, `classify`, `order`, `matrix`, `ddimage`, `ddtext` | Yes (`right/total`) | Yes (uses the breakdown) | `wrong` = answered-but-incorrect parts; blanks excluded. |
| Single-part | `mcq`, `tf`, `yn` | No (all-or-nothing) | n/a (falls to whole-question) | A wrong answer = `−negative_per_wrong` when negative on. |
| Fraction-only | `cloze` and other `scored()` types | Yes (`fraction`) | No (no breakdown → whole-question) | Partial via `fraction`; per-part negative not available. |
| Signed | `confidence` | Self-weighted | Exempt | Returns a signed fraction (`−1..1`); bypasses all policy. |
| Survey / psych | `survey`, `psych`, ungraded `matrix` | n/a | n/a | `unscored()` — zero points, excluded from scoring. |
| Manual | `essay`, `file`, `oral`, `observation`, `osce` | n/a | n/a | `isAutoGraded() === false` → `pending` → grading queue; awarded by a human, then `finalizeAttempt` rerolls. (`code`/`sql` are auto-graded by keyword coverage, not manual.) |

## Scaling, pass mark and grade bands

`finalizeAttempt` rolls the stored awards up:

```
raw     = max(0, Σ awarded)              // negative-marked items can drag this down; the total floors at 0
pct     = max > 0 ? raw / max × 100 : 0  // max = Σ max_points of non-pending items
scaled  = pct / 100 × quiz.scale_max
passed  = (not survey, no pending) ? scaled ≥ quiz.pass_mark : null
band    = grade band whose [min_pct, max_pct] contains pct
status  = pending > 0 ? 'submitted' : 'graded'
```

- `scale_max` (default 100) and `pass_mark` (default 0) are columns on `#__cq_quizzes`; grade bands live in `#__cq_grade_bands`. All are edited in the Scoring tab ("Pass mark & grade bands").
- While any item is `pending`, the attempt stays `submitted` and `passed` is `NULL` until a grader clears the queue.

## Where it is configured

| Setting | Location |
|---|---|
| Per-item points | Builder → Structure (item inspector) / Question Studio → Scoring → Points |
| Quiz scoring model (partial, negative mode + marks, all-or-nothing, points source) | Builder → Scoring tab → "Scoring model" |
| Pass mark, scale max, grade bands | Builder → Scoring tab → "Pass mark & grade bands" |
| Per-question scoring override | Question Studio → Scoring → "Override quiz scoring" |
| Manual grading workflow (rubric, blind, appeals window, …) | Builder → Scoring tab → "Manual grading & review" |

## Edge cases

- **Decoupling changed `multi`.** Before v8's scoring update, `multi` scored `(right − wrong)/total` (a wrong pick reduced the positive score). It is now `right/total`, with wrong picks handled only by negative marking. Existing multi questions score differently unless negative marking is configured.
- **Attempt total floors at zero**, but individual item awards can be negative (visible per item in the response review).
- **Equal weighting + negative marking**: with `points_source = equal`, every scoring item is worth 1 point, so `negative_per_wrong` is measured in those equal points.
- **Confidence + negative marking**: confidence ignores the quiz negative-marking policy; its penalty for a confident-but-wrong answer is built into its own signed weighting.
