---
id: question-types-supported-by-community-quiz
title: Question Types Supported by Community Quiz
sidebar_label: Question Types
sidebar_position: 3
---

Community Quiz supports 15 different question types to help you create engaging and effective assessments. This guide explains each question type, when to use it, and provides tips for getting the best results.

## Overview

| Category | Question Types |
|----------|----------------|
| **Multiple Choice** | Radio Buttons, Checkboxes, Dropdown Select |
| **Grid/Matrix** | Radio Grid, Checkbox Grid, Matching |
| **Image-Based** | Single Image Selection, Multiple Image Selection, Hotspots |
| **Free Text** | Single Line, Multi Line, Rich Text, Password |
| **Other** | File Upload, Page Header |

---

## Multiple Choice Questions

### Single Selection (Radio Buttons)

**Best for:** Questions with only one correct answer.

Users see a list of options and can select exactly one answer. This is the most common question type for quizzes and exams.

**Configuration Options:**

- **Answers**: Add as many answer options as needed
- **Correct Answer**: Mark one answer as correct
- **Answer Explanation**: Optional text shown after submission
- **Marks**: Points awarded for correct answer
- **Randomize Answers**: Shuffle answer order for each user

**Example Use Cases:**

- "What is the capital of France?" (Paris, London, Berlin, Madrid)
- "Which planet is closest to the sun?" (Mercury, Venus, Earth, Mars)
- True/False questions

> [!TIP]
> Add 4-5 answer options for a good balance. Too few makes it easy to guess; too many can overwhelm users.

---

### Multiple Selection (Checkboxes)

**Best for:** Questions where multiple answers are correct.

Users can select one or more answers from the list. Useful for "select all that apply" type questions.

**Configuration Options:**

- **Answers**: Add multiple answer options
- **Correct Answers**: Mark all correct answers
- **Min/Max Selections**: Optionally limit how many answers users can select
- **Partial Scoring**: Award partial marks for partially correct answers

**Example Use Cases:**

- "Which of the following are programming languages?" (Python ✓, HTML, Java ✓, CSS)
- "Select all prime numbers" (2 ✓, 3 ✓, 4, 5 ✓, 6)

> [!NOTE]
> Consider whether you want to award partial credit. A user selecting 3 out of 4 correct answers may deserve some points.

---

### Dropdown Select

**Best for:** Space-efficient single-answer questions or when you have many options.

Similar to radio buttons but displays as a dropdown menu. Useful when you have many answer options or want a cleaner interface.

**Configuration Options:**

- Same as Radio Buttons
- Options appear in a compact dropdown list

**Example Use Cases:**

- Selecting a country from a long list
- Choosing a year or date range
- Selecting a category or classification

---

## Grid/Matrix Questions

### Radio Grid (Matrix - Single Selection per Row)

**Best for:** Rating scales, Likert surveys, or comparing multiple items.

Displays a table where rows are questions and columns are answer options. Users select one answer per row.

**Configuration Options:**

- **Row Questions**: Each row represents a separate question
- **Column Answers**: Shared answer options (e.g., Strongly Agree → Strongly Disagree)
- **Marks per Row**: Points for each correct answer

**Example Use Cases:**

- "Rate your satisfaction with the following:" (Product, Service, Support) × (Very Poor → Excellent)
- "Match the correct dates:" (Event A, Event B, Event C) × (1990, 1995, 2000)

**Sample Layout:**

| Statement | Strongly Disagree | Disagree | Neutral | Agree | Strongly Agree |
|-----------|:-----------------:|:--------:|:-------:|:-----:|:--------------:|
| The course was informative | ○ | ○ | ○ | ● | ○ |
| The instructor was helpful | ○ | ○ | ○ | ○ | ● |

---

### Checkbox Grid (Matrix - Multiple Selections per Row)

**Best for:** Questions where users need to select multiple options for each row.

Similar to Radio Grid, but users can select multiple answers per row.

**Configuration Options:**

- **Row Questions**: Each row represents a category
- **Column Answers**: Options that can be selected
- **Min/Max per Row**: Limit selections per row

**Example Use Cases:**

- "Which skills does each team member have?" (Member A, B, C) × (JavaScript, Python, SQL, Design)
- "Select applicable features for each product:" (Product X, Y, Z) × (Feature 1, 2, 3, 4)

---

### Matching (Connect Items)

**Best for:** Testing associations between related items.

Users match items from the left column with corresponding items from the right column using dropdown selectors.

**Configuration Options:**

- **Left Column**: Questions or terms to match
- **Right Column**: Answers or definitions
- **Distractors**: Add extra wrong answers in the right column

**Example Use Cases:**

- Match countries with their capitals
- Match vocabulary words with definitions
- Match historical events with dates
- Match formulas with their names

**Sample Layout:**

| Term | Match with... |
|------|---------------|
| H2O | [Water ▼] |
| NaCl | [Salt ▼] |
| CO2 | [Carbon Dioxide ▼] |

> [!TIP]
> Add 1-2 distractor answers in the right column to prevent process of elimination from making it too easy.

---

## Image-Based Questions

### Single Image Selection

**Best for:** Visual recognition, identifying objects, or art/design quizzes.

Displays images as answer options. Users click on the correct image to select it.

**Configuration Options:**

- **Images**: Upload images for each answer option
- **Image Labels**: Optional text labels below images
- **Image Dimensions**: Control min/max height/width
- **Correct Answer**: Mark one image as correct

**Example Use Cases:**

- "Which painting is by Van Gogh?" (Show 4 paintings)
- "Identify the correct road sign" (Show traffic signs)
- "Select the healthy food option" (Show food images)

---

### Multiple Image Selection

**Best for:** Questions where multiple images are correct answers.

Same as Single Image Selection, but users can select multiple images.

**Configuration Options:**

- **Min/Max Selections**: Control how many images users must select
- **Show Labels**: Toggle image labels on/off

**Example Use Cases:**

- "Select all images showing mammals" (Show various animals)
- "Choose all the fruits" (Show fruits and vegetables)
- "Select the images with errors" (Show design mockups)

---

### Hotspots

**Best for:** Interactive image-based questions requiring precise location identification.

Display an image and define clickable hotspot regions. Users must click on the correct area(s) of the image.

**Configuration Options:**

- **Background Image**: The main image to display
- **Hotspot Regions**: Define clickable areas (rectangles or circles)
- **Multiple Hotspots**: Allow multiple correct regions

**Example Use Cases:**

- "Click on the heart in this anatomy diagram"
- "Identify the capital city on this map"
- "Find the error in this UI design"
- "Click on the safety hazard in this image"

> [!NOTE]
> Hotspots work best on larger images where the target area is clearly visible.

---

## Free Text Questions

### Single Line Text

**Best for:** Short, specific answers like names, numbers, or single words.

Displays a text input field for short answers. Can be auto-graded if you specify correct answers.

**Configuration Options:**

- **Correct Answers**: Enter acceptable answers (can specify multiple)
- **Case Sensitive**: Toggle whether capitalization matters
- **Validation**: Require specific format (numbers only, email, etc.)

**Example Use Cases:**

- "What is 5 + 7?" (Answer: 12)
- "Name the first president of the United States" (Answer: George Washington)
- "Enter your employee ID"

> [!TIP]
> Specify multiple acceptable answers for questions with synonyms or alternative spellings.

---

### Multi Line Text (Textarea)

**Best for:** Essay questions, detailed explanations, or open-ended responses.

Displays a larger text area for longer responses. Typically requires manual grading.

**Configuration Options:**

- **Placeholder Text**: Guide text for users
- **Character Limit**: Optional max character count
- **Rows**: Height of the text area

**Example Use Cases:**

- "Explain the causes of World War I in 200 words"
- "Describe your experience with our product"
- "Provide a code sample that solves this problem"

> [!NOTE]
> Multi-line questions usually require manual review and grading through the Responses section.

---

### Rich Text (WYSIWYG Editor)

**Best for:** Formatted responses with bold, italic, lists, or embedded media.

Displays your configured Joomla editor (TinyMCE, JCE, etc.) for formatted text entry.

**Configuration Options:**

- **Editor**: Uses your component's default editor setting
- **Allowed Formatting**: Depends on editor configuration

**Example Use Cases:**

- "Write a formatted business letter"
- "Create a bulleted list of your top 5 recommendations"
- "Submit your article draft with proper formatting"

---

### Password Field

**Best for:** Secret codes, access keys, or confidential information entry.

Displays a password-style input where characters are hidden (shown as dots).

**Configuration Options:**

- **Correct Answer**: The expected password/code
- **Case Sensitive**: Toggle case matching

**Example Use Cases:**

- Entry code verification for exclusive quizzes
- Security question responses
- Certification exam access codes

> [!WARNING]
> Password fields are for simple code verification. Do not use for actual security-sensitive authentication.

---

## Other Question Types

### File Upload

**Best for:** Collecting documents, images, or other files as responses.

Allows users to upload files as their answer. You can access uploaded files in the Responses section.

**Configuration Options:**

- **Allowed File Types**: Restrict to specific extensions (pdf, doc, jpg, etc.)
- **Max File Size**: Limit upload size in KB
- **Required**: Make upload mandatory

**Example Use Cases:**

- "Upload your completed assignment (PDF only)"
- "Submit a photo of your project"
- "Attach your resume"
- "Upload your certificate for verification"

> [!TIP]
> Configure allowed file types in Component Options → Shared Settings → Allowed File Types.

---

### Page Header

**Best for:** Adding instructions, context, or section dividers between questions.

Not actually a question—displays formatted text/HTML at the top of a page. Use it to provide instructions or break your quiz into sections.

**Configuration Options:**

- **Title**: Header title (optional)
- **Description**: Rich text content to display
- **No Point Value**: Page headers don't contribute to scoring

**Example Use Cases:**

- "Section 2: Advanced Topics - The following questions are worth 5 points each"
- Instructions before a timed section
- Providing context or a reading passage before comprehension questions
- Breaking a long quiz into logical sections

---

## Quick Reference: Choosing the Right Question Type

| If you need to... | Use this question type |
|-------------------|------------------------|
| Test single correct answer | Radio Buttons or Dropdown |
| Allow multiple correct answers | Checkboxes |
| Create a rating scale | Radio Grid |
| Test vocabulary/matching | Matching |
| Show visual options | Single/Multiple Image Selection |
| Test location on image | Hotspots |
| Collect short text answer | Single Line Text |
| Collect essay/detailed answer | Multi Line Text or Rich Text |
| Collect file submissions | File Upload |
| Add instructions/sections | Page Header |

---

## Tips for Creating Effective Questions

1. **Keep questions clear and concise** - Avoid ambiguous wording
2. **Use appropriate question types** - Match the type to what you're testing
3. **Provide answer explanations** - Help users learn from their mistakes
4. **Test your quiz** - Take it yourself before publishing
5. **Consider mobile users** - Image and grid questions should work on smaller screens
6. **Use randomization** - Shuffle questions and answers to prevent cheating
7. **Set reasonable time limits** - Give users enough time without making it too easy
