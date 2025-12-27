---
id: installing-and-configuring-community-quiz
title: Installing and Configuring Community Quiz
sidebar_label: Installation & Configuration
sidebar_position: 4
---

This comprehensive guide covers everything you need to know to install, configure, and get started with Community Quiz for Joomla 5.

## Package Contents

The Community Quiz package includes:

| Extension | Type | Description |
|-----------|------|-------------|
| `com_communityquiz` | Component | Main quiz component |
| `mod_communityquiz` | Module | Display quizzes in module positions |
| `mod_cqcategories` | Module | Display quiz categories |
| `mod_quizform` | Module | Display quiz submission form |
| `mod_topscorers` | Module | Display top quiz scorers |
| `plg_communityquiz_quizzes` | Plugin | Core plugin for notifications, points & activity streams |
| `plg_finder_quizzes` | Plugin | Smart Search integration |
| `plg_user_quizzes` | Plugin | User event handling |
| `plg_content_quizzes` | Plugin | Content plugin for embedding quizzes |
| `plg_content_quizfields` | Plugin | Quiz fields in content |
| `plg_privacy_quizzes` | Plugin | GDPR/Privacy compliance |
| `plg_editor_maths` | Plugin | Mathematical formula editor button |

## System Requirements

- **Joomla**: 4.0 or later (including Joomla 5.x)
- **PHP**: 8.0 or later
- **Database**: MySQL 5.7+ or MariaDB 10.2+

## Installation

Installing Community Quiz follows the standard Joomla extension installation process:

1. Download the package file (`pkg_communityquiz.zip`)
2. Go to **System → Install → Extensions**
3. Upload and install the package file
4. The component menu will appear under **Components → Community Quiz**

> [!TIP]
> If menu items don't appear after installation, go to **Menus → Menu Manager** and click **Rebuild**. If issues persist, execute this database query (replace `xxx` with your table prefix):
>
> ```sql
> DELETE FROM xxx_menu WHERE link LIKE '%com_communityquiz%';
> ```
>
> Then rebuild menus and reinstall the component.

## Admin Dashboard Overview

After installation, navigate to **Components → Community Quiz** to access these areas:

| Section | Description |
|---------|-------------|
| **Dashboard** | Overview and quick access to all features |
| **Quizzes** | Create and manage quizzes |
| **Courses** | Group quizzes into learning paths |
| **Question Banks** | Reusable question pools |
| **Difficulty Levels** | Categorize quiz/question difficulty |
| **Certificates** | Design completion certificates |
| **Categories** | Organize quizzes hierarchically |
| **Responses** | View and manage user responses |
| **Email Templates** | Customize notification emails |
| **Migrate** | Import from other quiz components |

## Quiz Types

Community Quiz supports three quiz types:

### Standard Quiz

The traditional quiz format where you create pages and add questions directly to each page. Best for structured exams with a fixed question set.

### Category Quiz

Questions are pulled dynamically from Joomla categories. Configure:

- **Max Questions**: Limit total questions displayed
- **Questions Per Page**: Control pagination
- **Question Ordering**: Sequential or random

### Question Bank Quiz

Draw questions from one or more question banks. Perfect for:

- Randomized assessments
- Large question pools
- Reusing questions across multiple quizzes

## Question Types

Community Quiz supports 15 question types organized into categories:

### Multiple Choice

| Type | Description |
|------|-------------|
| **Radio** | Single answer selection |
| **Checkbox** | Multiple answer selection |
| **Select** | Dropdown single selection |

### Grid Questions

| Type | Description |
|------|-------------|
| **Grid Radio** | Matrix with single selection per row |
| **Grid Checkbox** | Matrix with multiple selections per row |
| **Matching** | Connect items from two columns |

### Free Text

| Type | Description |
|------|-------------|
| **Single Line** | Short text answer |
| **Multiline** | Paragraph text answer |
| **Password** | Hidden input (for codes/passwords) |
| **Rich Text** | Formatted text with editor |

### Image-Based

| Type | Description |
|------|-------------|
| **Image Choice (Single)** | Select one image |
| **Image Choice (Multiple)** | Select multiple images |
| **Hotspots** | Click on image hotspot areas |

### Other

| Type | Description |
|------|-------------|
| **File Upload** | Submit file attachments |
| **Page Header** | Section divider (not a question) |

## Component Configuration

Access global settings via **Components → Community Quiz → Options**.

### Quiz Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Theme | Color theme (Default, Primary, Success, Info, Warning, Danger) | Default |
| Enable Captcha | Spam protection on quiz forms | No |
| Enable Ratings | Allow users to rate quizzes | Yes |
| Randomize Pages | Shuffle page order | No |
| Randomize Answers | Shuffle answer choices | No |
| Allow Multiple Responses | Users can retake quizzes | No |
| Max Responses | Limit total attempts (0 = unlimited) | 0 |
| Allow Retry | Permit retaking after completion | Yes |
| Max Retries | Maximum retry attempts | 3 |
| Attach PDF Report | Email PDF results to users | No |
| Show Progress Bar | Display completion progress | Yes |
| Show Answers | Display correct answers after completion | Yes |
| Show Answers Early | Show answers immediately after each question | No |

### Results Display

| Setting | Description |
|---------|-------------|
| Show Report | Display results summary |
| Score Report Location | Above/below questions or both |
| Report Fields | Select which metrics to display (total marks, correct questions, percentage, etc.) |
| Scorewise Messages | Custom messages based on score ranges |
| Show Chart Labels | Display data labels on charts |
| Allow Export | Let users export their responses |

### Category Settings

| Setting | Description |
|---------|-------------|
| Category Layout | Choose display template |
| Show Category Title | Display category name |
| Show Description | Display category description |
| Show Image | Display category image |
| Maximum Category Levels | Subcategory depth (-1 = all) |
| Show Empty Categories | Include categories with no quizzes |

### List Layout Options

| Setting | Description | Default |
|---------|-------------|---------|
| Layout Style | Modern or Classic | Modern |
| Avatar Size | User avatar dimensions | 40px |
| List Limit | Items per page | 20 |
| Show Filter | Enable search/filter | Hide |
| Show Difficulty Level | Display quiz difficulty | Yes |
| Show Response Status | User's progress indicator | No |

### Shared Settings

| Setting | Description |
|---------|-------------|
| Cookie Key | Encryption key for session cookies (32 chars) |
| Default Editor | WYSIWYG editor for quiz creation |
| Show Toolbar | Display component toolbar |
| Load Math Library | Enable KaTeX for mathematical formulas |
| Capture User IP | Store respondent IP addresses |
| Skip Email Queue | Send emails immediately vs. queue |
| Allowed File Types | Permitted upload extensions |
| Max Attachment Size | Upload file size limit (KB) |

### Integration Settings

| Setting | Description |
|---------|-------------|
| SEF Remove IDs | Hide database IDs from URLs |
| Load Bootstrap CSS | For templates without Bootstrap |
| UI Layout | Bootstrap version (2, 3, 4, or 5) |
| Google Sheets | Enable spreadsheet integration |
| Show Feed Link | Display RSS feed |
| Profile Component | User profile integration source |
| Avatar Component | Avatar image source |
| Points Component | Gamification points source |
| Stream Component | Activity stream integration |

## Third-Party Integrations

Community Quiz integrates with these extensions:

### Profile & Avatar Sources

- Sociable
- CjForum / CjBlog
- JomSocial
- EasySocial
- Community Builder
- Kunena
- Alpha User Points
- Gravatar

### Points Systems

- Rewardify
- Sociable
- CjForum / CjBlog
- JomSocial
- EasySocial
- AltaUserPoints
- Alpha User Points

### Activity Streams

- Sociable
- CjForum
- JomSocial
- EasySocial
- Community Builder

## Courses & Learning Paths

Courses group multiple quizzes into structured learning paths.

### Creating a Course

1. Go to **Components → Community Quiz → Courses**
2. Click **New**
3. Configure:
   - **Title & Alias**: Course name and URL slug
   - **Intro Text**: Brief description shown in listings
   - **Description**: Full course content
   - **Quizzes**: Add quizzes to the course
   - **Learning Path**: Require sequential completion

### Learning Path Mode

When enabled, users must:

- Complete quizzes in order
- Pass each quiz before accessing the next
- Progress is tracked per user

### Course Certificates

Like quizzes, courses support:

- Score-based certificate rules
- Custom messages based on overall performance

## Question Banks

Question banks allow you to create reusable question pools.

### Creating a Question Bank

1. Go to **Components → Community Quiz → Question Banks**
2. Click **New**
3. Add a title and description
4. Save, then add questions

### Using Banks in Quizzes

1. When creating/editing a quiz, select **Question Bank Quiz** type
2. Choose one or more question banks
3. Set **Max Questions** to limit how many are pulled
4. Configure **Question Ordering** (sequential or random)

### Benefits

- Reuse questions across multiple quizzes
- Randomize assessments for each user
- Maintain a central question repository

## Certificates

Create custom completion certificates with dynamic content.

### Creating a Certificate Template

1. Go to **Components → Community Quiz → Certificates**
2. Click **New**
3. Design using the HTML editor
4. Use placeholders for dynamic content:

| Placeholder | Description |
|-------------|-------------|
| `{USER_NAME}` | Respondent's name |
| `{QUIZ_TITLE}` | Quiz name |
| `{SCORE}` | Achieved score |
| `{DATE}` | Completion date |
| `{SITENAME}` | Website name |

### Assigning Certificates to Quizzes

1. Edit a quiz
2. In **Certificate Rules**, add conditions:
   - **Min Score**: Minimum required percentage
   - **Max Score**: Maximum percentage threshold
   - **Certificate**: Template to award

## Difficulty Levels

Categorize quizzes by difficulty for better organization.

### Default Levels

The component comes with three preset levels:

- Easy
- Medium
- Hard

### Managing Levels

1. Go to **Components → Community Quiz → Difficulty Levels**
2. Add, edit, or remove levels
3. Assign levels when creating quizzes

## Email Templates

Customize all notification emails sent by Community Quiz.

### Available Templates

| Template | Trigger |
|----------|---------|
| New Quiz | When a quiz is published |
| New Response | When someone completes a quiz |
| Passed Quiz | When user passes (meets cutoff) |
| Failed Quiz | When user fails (below cutoff) |
| Email Results | Quiz results sent to respondent |

### Template Variables

Use these placeholders in email templates:

| Variable | Description |
|----------|-------------|
| `{NAME}` | Recipient's name |
| `{AUTHOR_NAME}` | Quiz creator's name |
| `{QUIZ_TITLE}` | Quiz title |
| `{QUIZ_URL}` | Link to the quiz |
| `{SITENAME}` | Website name |

## Access Control & Permissions

Community Quiz uses Joomla's ACL at three levels:

### Component Permissions

Set in **Options → Permissions**:

| Permission | Description |
|------------|-------------|
| Configure ACL | Full administrative access |
| Access Administration | Access backend |
| Create | Create new quizzes |
| Edit | Edit any quiz |
| Edit Own | Edit own quizzes only |
| Edit State | Publish/unpublish quizzes |
| Edit Own State | Publish/unpublish own quizzes |
| Delete | Delete any quiz |
| Delete Own | Delete own quizzes only |
| Auto-Approve | Quizzes publish without moderation |
| Respond | Take quizzes |
| View Results | See quiz results/reports |
| Use WYSIWYG | Access rich text editor |
| Rate | Rate quizzes |
| Subscribe to Category | Get category notifications |

### Category Permissions

Override component permissions per category for granular control.

### Quiz Permissions

Individual quizzes can have specific permission overrides.

## Plugin Configuration

The core plugin (**Community Quiz - Quizzes**) manages notifications:

### Activity Stream Events

- New Quiz Posted
- New Response Submitted
- Quiz Passed
- Quiz Failed

### Email Notifications

- Admin group selection for notifications
- Toggle each email type on/off

### Points Integration

- Award points for new quizzes
- Award points for responses
- Bonus points for passing
- Penalty for failing (optional)

## Creating Menu Items

For SEF URLs and better navigation, create menu items:

| Menu Item Type | Purpose |
|----------------|---------|
| **Quizzes Layout** | Display quiz listings with categories |
| **Categories List** | Show category hierarchy |
| **Category** | List quizzes in a specific category |
| **Quiz Search** | Advanced search page |
| **Quiz Form** | Quiz creation/submission form |
| **Single Quiz** | Direct link to a specific quiz |
| **Courses** | Display course listings |
| **Single Course** | Direct link to a specific course |
| **My Quizzes** | User's created quizzes |
| **My Responses** | User's quiz responses |

## Migration Tools

Import quizzes from other components:

### Supported Sources

- **BFQuiz**: Migrate quizzes and questions
- **JQuizDeluxe**: Full import with responses

### Migration Process

1. Go to **Components → Community Quiz → Migrate**
2. Select source component
3. Follow the migration wizard
4. Review imported content

> [!WARNING]
> Always backup your database before migration. Test imported quizzes thoroughly.

## Quick Start Checklist

1. ✅ Install the package
2. ✅ Create categories for organizing quizzes
3. ✅ Configure global options
4. ✅ Set up permissions for user groups
5. ✅ Create menu items for frontend access
6. ✅ Enable and configure the Quizzes plugin
7. ✅ Create your first quiz
8. ✅ Test quiz taking as a frontend user

## Getting Help

- **Documentation**: Browse other articles in this section
- **Support**: [Get Support](https://shondalai.com/get-support/)
- **Updates**: Check for updates in **System → Update → Extensions**
