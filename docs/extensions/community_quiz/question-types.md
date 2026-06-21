---
id: question-types
title: Question Types (Developer Reference)
sidebar_label: Question Types (Reference)
---

# Community Quiz Question Types

Reference for all question types built into `com_communityquiz` v8. Generated from the engine source at `com_communityquiz/admin/src/Service/QuestionType/`; if the code and this document disagree, the code wins.

## Engine overview

Question types are pluggable units resolved through a single registry. Every layer of the platform (builder authoring, exam player, scoring engine, analytics) talks to a type only through `QuestionTypeInterface`:

| Method | Purpose |
|---|---|
| `key()` | Stable identifier persisted on `#__cq_questions.type` (e.g. `mcq`, `multi`) |
| `label()` | Human label shown in the builder palette |
| `group()` | Palette group: `choice`, `text`, `match`, `interactive`, `numeric`, `code`, `media`, `specialised` |
| `isAutoGraded()` | `false` routes responses to the manual grading queue (`#__cq_grading_tasks`) |
| `validateContent(array $content): array` | Validates + normalizes the authoring payload on save; throws `ApiException` (422) on invalid input, returns the cleaned content to persist |
| `grade(array $content, mixed $response): GradeResult` | Grades a candidate response against the frozen content snapshot |

Key source files:

- `QuestionTypeInterface.php` - the contract
- `AbstractQuestionType.php` - shared result constructors and answered detection
- `QuestionTypeRegistry.php` - registry, `withBuiltins()`, and the grouped `palette()` for the builder UI
- `GradeResult.php` - the normalized grading outcome
- `Type/*.php` - one class per type (32 built-ins)

The registry is registered once on the global DI container in `CommunityQuizServiceProvider` (`QuestionTypeRegistry::withBuiltins()`, shared) and injected into `QuestionService` (content validation on save) and `ScoringService` (attempt grading). Third-party plugins can call `register()` on the shared instance to add or replace types; no other layer changes.

### GradeResult semantics

`grade()` returns a `GradeResult`:

| Field | Meaning |
|---|---|
| `fraction` | Earned **positive** proportion of the item value, `0..1` (signed `-1..1` for confidence). The simple award is `round(fraction * points, 2)`, but the full formula depends on the scoring policy — see [scoring.md](scoring.md). |
| `correct` | Fully correct |
| `answered` | The candidate provided a non-empty answer |
| `pending` | Needs manual grading; the response is queued into `#__cq_grading_tasks` and the attempt stays `submitted` until all pending items are graded |
| `right` / `wrong` / `total` | Per-part breakdown for multi-part types (correct parts / answered-but-incorrect parts / number of correct keys). `total = 0` for single-part and free-text types. Drives partial credit and per-part negative marking. |

`AbstractQuestionType` provides the standard constructors that all built-ins use:

| Constructor | Result | Used for |
|---|---|---|
| `parts(right, wrong, total)` | `fraction = right/total` + breakdown | Multi-part partial-credit types (`multi`, `match`, `classify`, `order`, `matrix`, `ddimage`, `ddtext`) |
| `exact(bool)` | fraction 1.0 or 0.0, no breakdown | All-or-nothing single-part types |
| `scored(float)` | fraction clamped to [0,1], no breakdown | Fraction-only partial types (e.g. cloze) |
| `blank()` | unanswered, no credit | Empty/missing responses |
| `awaiting()` | pending manual grading | Essay, file, oral, checklists |
| `unscored()` | answered, zero credit | Survey/psychometric items (zero points, analytics only; the scoring engine excludes them) |

A response counts as answered when it is non-null, a non-empty array, or a non-blank string (`isAnswered()`).

**Partial credit and negative marking** (per-correct-answer credit, whole-question vs per-part penalties, quiz default + per-question override) are documented in full in [scoring.md](scoring.md).

## Type summary

32 built-in types across 8 palette groups:

| Key | Label | Group | Grading |
|---|---|---|---|
| `mcq` | Single choice | choice | Auto, exact |
| `multi` | Multiple response | choice | Auto, partial |
| `tf` | True / false | choice | Auto, exact |
| `yn` | Yes / no | choice | Auto, exact |
| `blank` | Fill in the blank | text | Auto, exact |
| `cloze` | Fill in the blanks | text | Auto, partial |
| `short` | Short answer | text | Auto, exact |
| `essay` | Essay / long answer | text | Manual |
| `match` | Matching | match | Auto, partial |
| `order` | Ordering | match | Auto, partial |
| `classify` | Classification | match | Auto, partial |
| `ddtext` | Drag & drop text | match | Auto, partial |
| `hotspot` | Hotspot | interactive | Auto, exact |
| `ddimage` | Drag to image | interactive | Auto, partial |
| `matrix` | Matrix / Likert | interactive | Auto, partial (or unscored survey mode) |
| `dropdown` | Dropdown in text | interactive | Auto, partial |
| `numeric` | Numeric | numeric | Auto, exact (tolerance) |
| `calc` | Calculated | numeric | Auto, exact (tolerance, per-attempt variables) |
| `code` | Code answer | code | Auto, partial (keyword heuristic) |
| `sql` | SQL / code answer | code | Auto, partial (keyword heuristic) |
| `audio` | Audio | media | Auto, exact |
| `video` | Video | media | Auto, exact |
| `file` | File upload | media | Manual |
| `oral` | Oral / video response | media | Manual |
| `assertion` | Assertion-reason | specialised | Auto, exact |
| `caseset` | Case-based set | specialised | Container, not graded |
| `reading` | Reading comprehension | specialised | Container, not graded |
| `observation` | Observation checklist | specialised | Manual |
| `osce` | OSCE station | specialised | Manual |
| `survey` | Survey item | specialised | Unscored |
| `psych` | Psychometric | specialised | Unscored |
| `confidence` | Confidence-based | specialised | Auto, exact (confidence weighting applied by scoring engine) |

In the per-type sections below, `content` is the persisted (validated) authoring payload and `response` is the value the exam player submits for the item.

## Choice

### `mcq` - Single choice

Radio-button MCQ with one correct option.

```jsonc
// content
{ "options": ["string", "..."], "answer": 0 }   // answer = correct option index
// response
2                                                // selected option index
```

- Validation: at least 2 options; `answer` index within range.
- Grading: exact. `(int) response === answer`.

### `multi` - Multiple response

Checkbox MCQ with several correct options and partial credit.

```jsonc
// content
{ "options": ["string", "..."], "answer": [0, 2] }   // indices of all correct options
// response
[0, 1]                                                // selected option indices
```

- Validation: at least 2 options; at least 1 correct index, each within range (duplicates removed).
- Grading: partial. `fraction = max(0, (right - wrong) / |answer|)` where `right` = selected correct options and `wrong` = selected incorrect options. Wrong picks cancel right picks; the result is clamped at 0.

### `tf` - True / false

```jsonc
// content
{ "answer": true }
// response
"true"   // bool, int, or "1"/"true"/"yes"/"on" (case-insensitive)
```

- Validation: `answer` must be present; coerced to a strict bool.
- Grading: exact, after coercing both sides with the same bool rules.

### `yn` - Yes / no

Extends `tf` with compliance-friendly Yes/No labels. Identical content, response, and grading.

## Text entry

### `short` - Short answer

Free text matched against a list of accepted answers.

```jsonc
// content
{ "answers": ["accepted", "alternate"], "caseSensitive": false }
// response
"accepted"
```

- Validation: at least 1 non-blank accepted answer; blank entries dropped; `caseSensitive` defaults to `false`.
- Grading: exact. Trimmed response equals any accepted value (lowercased on both sides unless `caseSensitive`).

### `blank` - Fill in the blank

Extends `short`: a single short answer embedded in a sentence template.

```jsonc
// content
{ "answers": ["mitochondria"], "caseSensitive": false, "template": "The ___ is the powerhouse of the cell." }
```

Response and grading are identical to `short`.

### `cloze` - Fill in the blanks

Multiple named blanks in one template, partial credit per blank.

```jsonc
// content
{ "template": "Water is {b1} at {b2} degrees.", "blanks": { "b1": "boiling", "b2": "100" } }
// response
{ "b1": "boiling", "b2": "100" }    // keyed by blank key
```

- Validation: at least 1 blank; every blank needs a non-blank accepted answer.
- Grading: partial. `fraction = correctBlanks / totalBlanks`; each blank compared case-insensitively after trimming.

### `essay` - Essay / long answer

Manually graded long-form text, optionally against a rubric.

```jsonc
// content
{ "minWords": 0, "maxWords": 0 }    // 0 = no limit
// response
"free text"
```

- Grading: `awaiting()` when answered (queued for manual grading), `blank()` otherwise.

## Match & order

### `match` - Matching

Pair left items with right items, partial credit per pair.

```jsonc
// content
{
  "left":  ["France", "Japan"],
  "right": ["Paris", "Tokyo", "Berlin"],     // may contain distractors
  "answer": { "0": 0, "1": 1 }               // leftIdx -> rightIdx
}
// response
{ "0": 0, "1": 1 }                           // leftIdx -> chosen rightIdx
```

- Validation: both sides non-empty; a non-empty answer map.
- Grading: partial. `fraction = correctPairs / totalPairs`.

### `order` - Ordering

Arrange items into the correct sequence, partial credit per position.

```jsonc
// content
{ "items": ["Egg", "Larva", "Pupa", "Adult"], "answer": [0, 1, 2, 3] }   // correct order of item indices
// response
[0, 2, 1, 3]                                                              // candidate's order of item indices
```

- Validation: at least 2 items; `answer` must list every item exactly once (same length as `items`).
- Grading: partial. `fraction = positionsCorrect / totalPositions` (position-by-position comparison, no sequence-distance credit).

### `classify` - Classification

Sort items into buckets, partial credit per item.

```jsonc
// content
{
  "items":   ["Whale", "Trout", "Eagle"],
  "buckets": ["Mammal", "Fish", "Bird"],
  "answer":  { "0": 0, "1": 1, "2": 2 }     // itemIdx -> bucketIdx
}
// response
{ "0": 0, "1": 1, "2": 0 }                  // itemIdx -> chosen bucketIdx
```

- Validation: non-empty items; at least 2 buckets; each answer bucket index within range.
- Grading: partial. `fraction = correctlyPlaced / totalItems`.

### `ddtext` - Drag & drop text

Drag token fragments into blanks inside a template, partial credit per slot.

```jsonc
// content
{
  "template": "The {s1} jumped over the {s2}.",
  "tokens":   ["fox", "dog", "cat"],                       // may contain distractors
  "slots":    [ { "id": "s1", "answer": 0 }, { "id": "s2", "answer": 1 } ]   // answer = tokenIdx
}
// response
{ "s1": 0, "s2": 2 }                                       // slotId -> placed tokenIdx
```

- Validation: non-empty tokens; at least 1 slot; each slot needs an `id` and an in-range token index.
- Grading: partial. `fraction = correctSlots / totalSlots`.

## Interactive

### `hotspot` - Hotspot

Click the correct region of an image. All coordinates are normalized to `0..1` relative to the image.

```jsonc
// content
{
  "image": "images/anatomy.png",
  "zones": [ { "x": 0.1, "y": 0.2, "w": 0.15, "h": 0.1, "correct": true }, { "x": 0.6, "y": 0.5, "w": 0.2, "h": 0.2, "correct": false } ]
}
// response
{ "x": 0.17, "y": 0.25 }    // normalized click point
```

- Validation: image required; at least one zone marked correct.
- Grading: exact. Correct when the click point falls inside any `correct` zone rectangle (inclusive bounds).

### `ddimage` - Drag to image

Drag labels onto image targets (label a diagram), partial credit per target. Coordinates normalized `0..1`.

```jsonc
// content
{
  "image":   "images/cell.png",
  "labels":  ["Nucleus", "Ribosome"],                                     // may contain distractors
  "targets": [ { "id": "t1", "x": 0.3, "y": 0.4, "answer": 0 } ]          // answer = labelIdx
}
// response
{ "t1": 0 }    // targetId -> placed labelIdx
```

- Validation: image required; non-empty labels; at least 1 target; each target needs an `id` and an in-range label index.
- Grading: partial. `fraction = correctTargets / totalTargets`.

### `matrix` - Matrix / Likert

A rows-by-columns grid with two modes:

- **Scored mode** (an `answer` key is present): partial credit per row.
- **Likert / survey mode** (no `answer`): the response is recorded as answered but unscored; author it with zero points.

```jsonc
// content
{
  "rows": ["Statement A", "Statement B"],
  "cols": ["Agree", "Neutral", "Disagree"],
  "answer": { "0": 0, "1": 2 }              // optional; rowIdx -> correct colIdx
}
// response
{ "0": 0, "1": 1 }                          // rowIdx -> chosen colIdx
```

- Validation: non-empty rows; at least 2 columns; if an answer map is given, each column index must be within range.
- Grading: with a key, `fraction = correctRows / keyedRows`; without one, `unscored()`.

### `dropdown` - Dropdown in text

Inline dropdowns embedded in a passage, partial credit per slot.

```jsonc
// content
{
  "passage": "Select {d1} and {d2}.",
  "slots": [ { "id": "d1", "options": ["a", "b"], "answer": 0 }, { "id": "d2", "options": ["x", "y", "z"], "answer": 2 } ]
}
// response
{ "d1": 0, "d2": 1 }    // slotId -> selected option index
```

- Validation: at least 1 slot; each slot needs an `id`, at least 2 options, and an in-range answer index.
- Grading: partial. `fraction = correctSlots / totalSlots`.

## Numeric

### `numeric` - Numeric

A number compared within an absolute tolerance.

```jsonc
// content
{ "answer": 9.81, "tolerance": 0.05, "unit": "m/s^2" }   // unit is display-only
// response
9.8
```

- Validation: numeric answer required; tolerance must be zero or positive.
- Grading: exact. Correct when `abs(response - answer) <= tolerance`. Non-numeric responses are treated as unanswered.

### `calc` - Calculated

A formula question where each attempt gets randomized variable values. At attempt creation the player/attempt layer substitutes random values within each variable's range, computes the expected `answer`, and freezes both into the attempt's content snapshot. Grading then works exactly like `numeric` against that frozen answer.

```jsonc
// content (authored)
{
  "expression": "a * b / 2",
  "variables": [ { "name": "a", "min": 2, "max": 10, "decimals": 0 }, { "name": "b", "min": 1, "max": 5, "decimals": 1 } ],
  "tolerance": 0.01,
  "unit": ""
}
// content (frozen into the attempt snapshot, added by the attempt layer)
{ "...": "...", "answer": 12.5 }
// response
12.5
```

- Validation: non-empty expression; at least 1 variable, each with a name and numeric min/max (`decimals` >= 0); tolerance zero or positive.
- Grading: exact within tolerance against the per-attempt frozen `answer`; blank when the snapshot carries no resolved answer.

## Code

### `code` - Code answer

Free-text code scored by required-keyword coverage. This is a deliberate heuristic; execution/test-based grading is a future plugin.

```jsonc
// content
{ "starter": "function add(a, b) {\n}", "keywords": ["return", "a + b"] }
// response
"function add(a, b) { return a + b; }"
```

- Validation: at least 1 non-blank keyword (blank entries dropped).
- Grading: partial. `fraction = keywordsFound / totalKeywords`, case-insensitive substring match.

### `sql` - SQL / code answer

Extends `code` with an optional schema/setup snippet shown to the candidate.

```jsonc
// content
{ "starter": "", "keywords": ["select", "group by"], "schema": "CREATE TABLE orders (...);" }
```

Response and grading are identical to `code`.

## Media & upload

### `audio` - Audio

Listen-and-answer: extends `mcq` with an audio stimulus.

```jsonc
// content
{ "options": ["string", "..."], "answer": 1, "audio": "media/listening-01.mp3" }
```

- Validation: `mcq` rules plus a required, non-blank audio source URL.
- Response and grading identical to `mcq`.

### `video` - Video

Watch-and-answer: extends `mcq` with a video stimulus.

```jsonc
// content
{ "options": ["string", "..."], "answer": 0, "video": "https://example.com/clip.mp4" }
```

- Validation: `mcq` rules plus a required, non-blank video source URL.
- Response and grading identical to `mcq`.

### `file` - File upload

Upload-an-artifact answer (assignments, evidence, diagrams). Manually graded.

```jsonc
// content
{ "maxFiles": 1, "allowed": ["pdf", "docx"] }   // allowed extensions, lowercased, no dots; empty = any
// response
[ { "...upload reference..." } ]                 // any non-empty value counts as answered
```

- Validation: `maxFiles` minimum 1; extensions trimmed of whitespace/dots, lowercased, blanks dropped.
- Grading: `awaiting()` when answered, `blank()` otherwise.

### `oral` - Oral / video response

Recorded spoken/video answer (language, interview, practical exams). Manually graded from the recording.

```jsonc
// content
{ "prompt": "Describe your approach.", "maxDuration": 120 }   // seconds; 0 = unlimited
```

- Grading: `awaiting()` when answered, `blank()` otherwise.

## Specialised

### `assertion` - Assertion-reason

The professional-exam staple: an Assertion (A) and a Reason (R), with the candidate choosing the relationship. When no custom options are supplied, the five standard relationships are used:

1. Both A and R are true and R is the correct explanation of A
2. Both A and R are true but R is NOT the correct explanation of A
3. A is true but R is false
4. A is false but R is true
5. Both A and R are false

```jsonc
// content
{ "assertion": "...", "reason": "...", "options": ["...5 standard or custom..."], "answer": 0 }
// response
0    // selected option index
```

- Validation: both assertion and reason required; custom options need at least 2 entries; answer index within range.
- Grading: exact, like `mcq`.

### `caseset` - Case-based set

A shared clinical/business scenario followed by several linked items. This is a **container**: it is never graded itself (its `grade()` always returns blank, and `isAutoGraded()` is `false`); the child questions are regular types scored individually. Child linkage is modelled by the `case` section type in the quiz builder.

```jsonc
// content
{ "stimulus": "A 45-year-old patient presents with...", "exhibits": ["images/xray.png", "labs.pdf"] }
```

### `reading` - Reading comprehension

A passage followed by linked items. Same container semantics as `caseset` (not graded itself; children scored individually via the `case` section).

```jsonc
// content
{ "passage": "Full reading passage text..." }
```

### `observation` - Observation checklist

Workplace / clinical / field assessment where an assessor marks criteria. Manually graded.

```jsonc
// content
{ "criteria": ["Greets the client", "Verifies identity", "Follows safety protocol"] }
```

- Validation: at least 1 non-blank criterion.
- Grading: `awaiting()` when answered, `blank()` otherwise.

### `osce` - OSCE station

Objective Structured Clinical Examination station: an examiner scores station checklist items. Manually graded.

```jsonc
// content
{ "station": "Station 3: Cardiovascular exam", "criteria": ["Washes hands", "Palpates pulse", "..."] }
```

- Validation: at least 1 non-blank criterion; station name optional.
- Grading: `awaiting()` when answered, `blank()` otherwise.

### `survey` - Survey item

Opinion/feedback item with no right answer, captured for analytics only. Carries zero points; the scoring engine excludes it from totals.

```jsonc
// content
{ "options": ["Daily", "Weekly", "Monthly"], "multiple": false }   // options optional (free response without)
```

- Grading: `unscored()` when answered, `blank()` otherwise.

### `psych` - Psychometric

Likert-style scale item with subscale assignment and reverse scoring, for personality/aptitude profiles. Not right/wrong: the raw response feeds subscale/profile computation in the psychometric reporting layer. Carries zero points in attempt scoring.

```jsonc
// content
{ "scale": 5, "reverse": false, "subscale": "conscientiousness", "labels": ["Strongly disagree", "...", "Strongly agree"] }
// response
4    // selected scale point
```

- Validation: scale must have at least 2 points.
- Grading: `unscored()` when answered, `blank()` otherwise.

### `confidence` - Confidence-based

Single choice where the candidate also states how confident they are. This grader returns base correctness only; the confidence weighting/penalty is applied by the scoring engine from the stored confidence value.

```jsonc
// content
{ "options": ["string", "..."], "answer": 1 }
// response
{ "choice": 1, "confidence": "high" }    // or a bare option index
```

- Validation: same as `mcq`.
- Grading: exact on `choice` (accepts a bare index as the response too).

## How scoring consumes these results

`ScoringService::gradeAttempt()` walks the attempt's frozen item snapshots, resolves each item's type from the registry, and calls `grade()` with the frozen content and the stored response:

- `awarded = round(fraction * points, 2)` and `partial = round(fraction, 4)` are written to the response row.
- `pending` results queue a task in `#__cq_grading_tasks` and leave the attempt in `submitted` status; once every pending item is graded the attempt moves to `graded`.
- Unscored items (survey/psych, keyless matrix) award nothing and are excluded from pass/fail math; a quiz consisting only of such items is treated as a survey with no pass evaluation.

## Adding a new question type

1. Create one class per type (PSR-4) extending `AbstractQuestionType` (or implementing `QuestionTypeInterface` directly for manual/unscored exotic cases).
2. Pick a short, stable `key()`: it is persisted on `#__cq_questions.type` and must never change once data exists.
3. Choose a `group()` from the palette groups (or extend `GROUP_LABELS` in the registry for a new group).
4. Implement `validateContent()` to normalize and strictly validate the authoring payload; throw `ApiException::validation()` with a clear message for each failure mode.
5. Implement `grade()` using the shared constructors (`exact`, `scored`, `blank`, `awaiting`, `unscored`). Always check `isAnswered()` first and return `blank()` for empty responses.
6. Built-ins: add the class to `QuestionTypeRegistry::withBuiltins()`. Plugins: resolve the shared `QuestionTypeRegistry` from the container and call `register($type)` (replacing an existing key overrides the built-in).
7. Add the matching authoring editor and player renderer in the React apps; the builder palette picks the new type up automatically via `palette()`.
