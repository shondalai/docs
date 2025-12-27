---
id: getting-started-with-community-quiz
title: Getting Started with Community Quiz
sidebar_label: Getting Started
sidebar_position: 3
---

This step-by-step guide walks you through setting up Community Quiz from installation to your first fully functional quiz.

## Step 1: Install the Package

### Download and Install

1. Download the `pkg_communityquiz.zip` package file from your account
2. Log in to your Joomla Administrator panel
3. Navigate to **System → Install → Extensions**
4. Click the **Upload Package File** tab
5. Drag and drop the package file, or click **Browse** to select it
6. Click **Upload & Install**
7. Wait for the success message confirming all extensions installed

### Verify Installation

After installation, verify everything is working:

1. Go to **Components** menu
2. Confirm **Community Quiz** appears in the list
3. Click on it to open the dashboard

> [!TIP]
> If the menu doesn't appear, go to **Menus → Manage** and click the **Rebuild** button in the toolbar.

---

## Step 2: Create Categories for Organizing Quizzes

Categories help organize your quizzes into logical groups.

### Create Your First Category

1. Go to **Components → Community Quiz**
2. Click **Categories** in the submenu (or sidebar)
3. Click the **New** button in the toolbar
4. Fill in the category details:
   - **Title**: Enter a descriptive name (e.g., "General Knowledge")
   - **Alias**: Leave blank to auto-generate from title
   - **Description**: Optional description shown on category pages
   - **Parent**: Select "No parent" for top-level, or choose a parent for subcategories
   - **Status**: Set to **Published**
   - **Access**: Choose who can view (usually "Public")
   - **Language**: Select language or "All" for multilingual sites
5. Click **Save & Close**

### Suggested Category Structure

```
├── Academic
│   ├── Mathematics
│   ├── Science
│   └── History
├── Training
│   ├── Onboarding
│   └── Compliance
└── Fun & Trivia
    ├── Pop Culture
    └── Sports
```

### Create Multiple Categories

Repeat the process to create additional categories. You can:

- Create **nested categories** by selecting a parent
- Set **category images** in the Options tab
- Configure **category permissions** for restricted access

---

## Step 3: Configure Global Options

Set up component-wide settings before creating quizzes.

### Access Global Options

1. Go to **Components → Community Quiz**
2. Click the **Options** button in the toolbar

### Essential Settings to Configure

#### Quiz Settings Tab

| Setting | Recommended Value | Why |
|---------|-------------------|-----|
| Enable Ratings | Yes | Let users rate quizzes |
| Allow Multiple Responses | Based on need | For practice quizzes: Yes |
| Allow Retry | Yes | Users can retake quizzes |
| Max Retries | 3 | Limit retakes if needed |
| Show Progress Bar | Yes | Users see completion progress |
| Show Answers | Yes | Display results after completion |

#### Shared Settings Tab

| Setting | Recommended Value | Why |
|---------|-------------------|-----|
| Default Editor | TinyMCE | Best for rich content |
| Show Toolbar | Yes | Enable frontend toolbar |
| Load Math Library | Yes (if needed) | For mathematical formulas |
| User Display Name | Name | Show full names |

#### Integration Tab

| Setting | Recommended Value | Why |
|---------|-------------------|-----|
| UI Layout | Bootstrap 5 | For Joomla 4/5 templates |
| Profile Component | Gravatar or your choice | User avatars |

### Save Your Settings

1. Review all tabs and adjust as needed
2. Click **Save & Close**

---

## Step 4: Set Up Permissions for User Groups

Configure who can do what with your quizzes.

### Access Permissions

1. Go to **Components → Community Quiz → Options**
2. Click the **Permissions** tab

### Recommended Permission Setup

#### For Registered Users

| Permission | Setting |
|------------|---------|
| Access Administration Interface | Denied |
| Create | Denied (unless user-submitted quizzes) |
| Edit | Denied |
| Edit Own | Allowed (if users create quizzes) |
| Delete | Denied |
| Respond | **Allowed** |
| View Results | **Allowed** |

#### For Authors/Editors (Quiz Creators)

| Permission | Setting |
|------------|---------|
| Access Administration Interface | Allowed |
| Create | **Allowed** |
| Edit | Denied |
| Edit Own | **Allowed** |
| Edit State Own | **Allowed** |
| Delete Own | Allowed |
| Respond | Allowed |
| View Results | Allowed |

#### For Administrators/Super Users

| Permission | Setting |
|------------|---------|
| Configure ACL & Options | **Allowed** |
| All other permissions | **Allowed** |

### Category-Level Permissions (Optional)

For more granular control:

1. Go to **Components → Community Quiz → Categories**
2. Edit a category
3. Click the **Permissions** tab
4. Override component permissions as needed

---

## Step 5: Create Menu Items for Frontend Access

Menu items provide frontend URLs and navigation.

### Create Main Quizzes Page

1. Go to **Menus → [Your Main Menu] → Add New Menu Item**
2. Click **Select** next to Menu Item Type
3. Choose **Community Quiz → Quizzes Layout**
4. Configure:
   - **Menu Title**: "Quizzes" or "Take a Quiz"
   - **Alias**: quizzes
   - **Status**: Published
5. Click **Save & Close**

### Create Category Menu Items (Recommended)

For each top-level category:

1. Add a new menu item
2. Select **Community Quiz → Category**
3. In **Required Settings**, choose the category
4. Set parent to your main Quizzes menu item (for submenu)
5. Save

### Additional Useful Menu Items

| Menu Item Type | Purpose | Suggested Title |
|----------------|---------|----------------|
| Categories List | Browse all categories | "Quiz Categories" |
| Quiz Search | Advanced search page | "Search Quizzes" |
| My Quizzes | User's created quizzes | "My Quizzes" |
| My Responses | User's quiz history | "My Results" |

### Example Menu Structure

```
Quizzes (Quizzes Layout)
├── Quiz Categories (Categories List)
├── Academic (Category)
│   ├── Mathematics (Category)
│   └── Science (Category)
├── My Results (My Responses)
└── Search Quizzes (Quiz Search)
```

---

## Step 6: Enable and Configure the Quizzes Plugin

The core plugin handles notifications, points, and activity streams.

### Enable the Plugin

1. Go to **System → Manage → Plugins**
2. Search for "Community Quiz"
3. Find **Community Quiz - Quizzes**
4. Click on it to open settings
5. Set **Status** to **Enabled**

### Configure Plugin Settings

#### Activity Stream Tab

Enable/disable activity notifications for:

- ✅ New Quiz Posted
- ✅ New Response Submitted
- ✅ Quiz Passed
- ✅ Quiz Failed

#### Emails Tab

1. **Admin User Groups**: Select groups to receive admin notifications
2. Enable/disable email notifications for:
   - ✅ New Quiz notification to admins
   - ✅ New Response to quiz author
   - ✅ Passed Quiz notification
   - ✅ Failed Quiz notification

#### Points System Tab

If using a points system, enable:

- ✅ Points for creating quizzes
- ✅ Points for quiz responses
- ✅ Bonus points for passing
- ✅ Points deduction for failing (optional)

### Save Plugin Settings

1. Click **Save & Close**
2. Enable other Community Quiz plugins as needed:
   - **Smart Search - Quizzes**: For search integration
   - **Content - Quizzes**: For embedding in articles
   - **Maths Editor**: For mathematical formulas

---

## Step 7: Create Your First Quiz

Now let's create a fully functional quiz!

### Start Creating

1. Go to **Components → Community Quiz → Quizzes**
2. Click **New**

### Basic Information

Fill in the main details:

| Field | Example Value |
|-------|---------------|
| Title | "General Knowledge Quiz" |
| Alias | general-knowledge-quiz |
| Category | Select your category |
| Status | Published |
| Description | Brief quiz introduction |

### Quiz Options

Configure quiz behavior:

| Setting | Recommended for First Quiz |
|---------|---------------------------|
| Duration | 0 (no time limit) or 10 (minutes) |
| Cutoff | 60 (passing score percentage) |
| Cutoff Type | Percentage |
| Difficulty Level | Easy |

### Save the Quiz

1. Click **Save** (not Save & Close)
2. The quiz is created but has no questions yet

### Add Questions

After saving, the question editor appears:

1. Click **Add Page** to create the first page
2. Give the page a title (e.g., "Round 1") or leave blank
3. Click **Add Question**
4. Choose a question type (start with **Multiple Choice - Radio**)

### Create a Multiple Choice Question

1. **Question Text**: "What is the capital of France?"
2. Click **Add Answer** to add choices:
   - "London" - Mark as incorrect
   - "Paris" - Mark as **correct** ✓
   - "Berlin" - Mark as incorrect
   - "Madrid" - Mark as incorrect
3. Set **Marks**: 1
4. Optional: Add **Answer Explanation**
5. Click **Save Question**

### Add More Questions

Repeat to add 5-10 questions for a good first quiz:

1. Mix different question types
2. Add multiple pages for organization
3. Set appropriate marks for each question

### Configure Score Messages (Optional)

1. In quiz settings, find **Scorewise Messages**
2. Add custom messages:
   - 0-40%: "Keep practicing! Try again soon."
   - 41-70%: "Good effort! You're getting there."
   - 71-100%: "Excellent work! You're a quiz master!"

### Finalize and Publish

1. Review all questions
2. Set **Status** to **Published**
3. Ensure **Publish Up** date is current or past
4. Click **Save & Close**

---

## Step 8: Test Quiz Taking as a Frontend User

Verify everything works from a user's perspective.

### Test as Guest (If Allowed)

1. Open a new browser or incognito window
2. Navigate to your Quizzes menu item
3. Find and click your quiz
4. Verify:
   - ✅ Quiz introduction displays correctly
   - ✅ Questions render properly
   - ✅ All answer options are clickable
   - ✅ Navigation between pages works

### Test as Registered User

1. Create a test user account (or use existing)
2. Log in to the frontend
3. Take the quiz completely:
   - Answer all questions
   - Click **Submit** or **Finish**
4. Verify results page:
   - ✅ Score displays correctly
   - ✅ Correct/incorrect answers shown
   - ✅ Scorewise message appears
   - ✅ Certificate offered (if configured)

### Check Admin Reports

1. Go back to **Components → Community Quiz → Responses**
2. Verify your test response appears
3. Click to view details:
   - ✅ Response recorded correctly
   - ✅ Score calculated properly
   - ✅ Individual answers saved

### Test Edge Cases

- ⬜ Incomplete quiz (leave and return)
- ⬜ Timer expiration (if enabled)
- ⬜ Retry functionality
- ⬜ Multiple response restrictions

---

## Troubleshooting Common Issues

### Quiz Not Appearing on Frontend

1. Check quiz is **Published**
2. Verify **Publish Up** date is in the past
3. Ensure category is published
4. Check **Access** level permissions

### Questions Not Saving

1. Ensure you clicked **Save** before adding questions
2. Verify quiz type supports direct question adding
3. Check for JavaScript errors in browser console

### Users Can't Take Quiz

1. Verify **Respond** permission is allowed for user group
2. Check category-level permissions
3. Ensure quiz access level includes the user

### Results Not Displaying

1. Check **Show Answers** is enabled in options
2. Verify **Show Report** is enabled
3. Ensure user has **View Results** permission

---

## Next Steps

🎉 **Congratulations!** Your Community Quiz is now fully set up and working!

### Explore More Features

- **[Question Types](./question-types-supported-by-community-quiz.md)**: Learn all 15 question types
- **[Certificates](./shortcodes-supported-by-community-quiz-certificates.md)**: Create completion certificates
- **[Email Templates](./customizing-emails-sent-from-community-quiz.md)**: Customize notifications
- **[Embedding Quizzes](./display-quiz-in-joomla-article.md)**: Add quizzes to articles
- **[Math Formulas](./adding-mathematical-formulas-in-quizzes.md)**: Add equations
- **[Plugin Events](./extending-community-quiz-using-plugin-events.md)**: Extend functionality

### Build More Quizzes

- Create quizzes for different categories
- Experiment with different question types
- Set up courses with learning paths
- Build question banks for randomized tests
