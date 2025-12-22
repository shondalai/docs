---
id: point-rules
title: Point Rules Configuration
sidebar_label: Point Rules
sidebar_position: 3
---

# Point Rules Configuration

Point rules define when and how points are awarded to users. This guide covers everything you need to know about creating and managing point rules.

## Understanding Point Rules

A point rule consists of:

- **Title** - Display name of the rule
- **Description** - What the rule does
- **Rule Name** - Unique identifier (e.g., `com_users.login`)
- **Extension** - Which component triggers this rule
- **Points** - How many points to award (positive or negative)
- **Published** - Whether the rule is active
- **Auto-Approve** - Award points immediately or require approval
- **Access Level** - Which user groups can earn these points
- **Rate Limiting** - Prevent duplicate awards within a timeframe

## Accessing Point Rules

1. Navigate to **Components → Rewardify → Point Rules**
2. You'll see a list of all available point rules
3. Use filters to find specific rules by extension or status

## Default Point Rules

Rewardify comes with pre-configured rules for common activities:

### User Activity Rules

| Rule | Description | Default Points | Status |
|------|-------------|----------------|--------|
| Joined the site | User registration | 1 | ✅ Enabled |
| Daily login | User logs in | 1 | ✅ Enabled |
| 7-day login streak | Consecutive 7-day login | 10 | ✅ Enabled |

### Content Activity Rules

| Rule | Description | Default Points | Status |
|------|-------------|----------------|--------|
| Posting an article | Create new article | 5 | ❌ Disabled |
| Reading an article | View an article | 1 | ❌ Disabled |
| Deleting an article | Delete article (negative) | -5 | ❌ Disabled |

### Community Builder Rules

| Rule | Description | Default Points | Status |
|------|-------------|----------------|--------|
| Profile update | Update profile | 2 | ❌ Disabled |
| Avatar upload | Upload avatar | 5 | ❌ Disabled |
| Profile complete | 100% profile completion | 10 | ❌ Disabled |
| Connection made | New friend connection | 3 | ❌ Disabled |
| Wall post | Post on wall | 2 | ❌ Disabled |

### HikaShop Rules

| Rule | Description | Default Points | Status |
|------|-------------|----------------|--------|
| Product purchase | Buy product | Varies | ❌ Disabled |
| Product review | Write review | 5 | ❌ Disabled |
| Order complete | Complete order | 10 | ❌ Disabled |

### Kunena Forum Rules

| Rule | Description | Default Points | Status |
|------|-------------|----------------|--------|
| Create topic | New forum topic | 5 | ❌ Disabled |
| Reply to topic | Post reply | 2 | ❌ Disabled |
| Best answer | Answer marked as best | 10 | ❌ Disabled |

## Creating a Custom Point Rule

### Step 1: Add New Rule

1. Go to **Components → Rewardify → Point Rules**
2. Click **New** button (top-left)
3. Fill in the required fields:

### Step 2: Configure Basic Information

**Title** (Required)
```
Example: "Comment on Blog Post"
```

**Description** (Optional)
```
Example: "Points awarded when a user posts a comment on a blog article"
```

**Rule Name** (Required)
- Must be unique
- Use format: `extension.action.subaction`
- Example: `com_content.comment.create`

**Extension**
- Select the component that triggers this rule
- Example: `com_content` for articles

### Step 3: Configure Points Settings

**Points** (Required)
- Enter positive number to award points
- Enter negative number to deduct points
- Example: `5` for awarding 5 points
- Example: `-5` for deducting 5 points

**Published**
- ✅ Yes - Rule is active
- ❌ No - Rule is disabled

**Auto-Approve**
- ✅ Yes - Points awarded immediately (recommended)
- ❌ No - Points require admin approval

### Step 4: Set Access Level

**Access Level**
Choose which user groups can earn these points:
- **Public** - Everyone including guests
- **Registered** - Logged-in users only
- **Special** - Author, Editor, Publisher
- **Custom** - Your custom access levels

:::tip Recommended
For most rules, use **Registered** to prevent abuse from guest users.
:::

### Step 5: Configure Rate Limiting

Rate limiting prevents users from repeatedly earning points for the same action.

**Rate Limit Days**
- Leave empty (0) for no limit
- Enter number of days before same action can earn points again
- Example: `1` = Once per day
- Example: `7` = Once per week
- Example: `30` = Once per month

**Use Cases:**
- Daily login: `1` day (user can earn once per day)
- Article posting: `0` days (no limit, earn for each article)
- Profile update: `7` days (once per week maximum)

### Step 6: Advanced Options

Click the **Options** tab for advanced settings:

**Duplicate Assignments**
- Number of times the same reference can earn points
- Example: `1` = User can only earn once for article ID #5
- Example: `0` = No duplicates allowed

**Expires In (Days)**
- Points expire after X days
- Leave empty for permanent points
- Example: `365` = Points expire after 1 year

**Expires On (Date)**
- Specific expiration date
- Format: `YYYY-MM-DD`
- Example: `2026-12-31`

### Step 7: Save the Rule

1. Click **Save & Close** to create the rule
2. The rule is now active (if published)

## Editing Existing Rules

1. Go to **Components → Rewardify → Point Rules**
2. Click on the rule title to edit
3. Make your changes
4. Click **Save & Close**

## Common Point Rule Examples

### Example 1: Forum Post Points

```
Title: Create Forum Topic
Rule Name: com_kunena.topic.create
Extension: com_kunena
Points: 5
Published: Yes
Auto-Approve: Yes
Access: Registered
Rate Limit: 0 days (unlimited posts)
```

### Example 2: Weekly Profile View

```
Title: View User Profile
Rule Name: com_rewardify.profile.view
Extension: com_rewardify
Points: 1
Published: Yes
Auto-Approve: Yes
Access: Registered
Rate Limit: 7 days (once per week)
```

### Example 3: Limited Product Review

```
Title: Write Product Review
Rule Name: com_hikashop.review.create
Extension: com_hikashop
Points: 5
Published: Yes
Auto-Approve: No (review spam protection)
Access: Registered
Rate Limit: 0 days
Duplicate Assignments: 1 (one review per product)
```

### Example 4: Temporary Bonus Points

```
Title: Holiday Bonus
Rule Name: com_rewardify.holiday_2025
Extension: com_rewardify
Points: 50
Published: Yes
Auto-Approve: Yes
Access: Registered
Expires On: 2025-12-31
```

## Managing Multiple Rules

### Bulk Actions

Select multiple rules and use the toolbar actions:

- **Publish** - Activate selected rules
- **Unpublish** - Deactivate selected rules
- **Delete** - Remove selected rules (moves to trash)
- **Check-In** - Release locked rules

### Filtering Rules

Use filters to find specific rules:

- **Search** - Search by title or rule name
- **Select Status** - Published, Unpublished, All
- **Select Extension** - Filter by component
- **Select Access** - Filter by access level

### Ordering Rules

Rules display in order:
1. By extension name
2. By rule name alphabetically

This helps keep related rules grouped together.

## Point Rule Best Practices

### 1. Start Conservative

Begin with lower point values and adjust based on user behavior:
```
✅ Good: Registration = 1 point, Login = 1 point
❌ Too Much: Registration = 100 points, Login = 50 points
```

### 2. Use Rate Limiting Wisely

Prevent abuse while encouraging engagement:
```
✅ Daily activities: 1 day rate limit
✅ Content creation: No limit (encourage more content)
✅ Profile updates: 7 day limit (prevent spam)
```

### 3. Balance Point Economy

Consider the ratio between earning and spending:
```
Example Site:
- Registration: 1 point
- Daily login: 1 point
- Write article: 5 points
- Comment: 2 points
- 7-day streak: 10 points

Average user earns: ~10-20 points per week
```

### 4. Use Descriptive Names

Make rules easy to understand:
```
✅ Good: "Post Comment on Article"
❌ Bad: "Comment"
```

### 5. Document Custom Rules

Add clear descriptions:
```
Description: "Points awarded when user posts a comment on blog 
articles. Limited to 5 comments per day to prevent spam."
```

## Troubleshooting Point Rules

### Rule Not Working

**Check these items:**

1. ✅ Rule is **Published**
2. ✅ Points value is **not zero**
3. ✅ Plugin is **enabled** (System → Plugins)
4. ✅ User has correct **access level**
5. ✅ **Rate limit** not preventing award
6. ✅ **Rule name** matches the triggered action

### Points Awarded Twice

**Solutions:**
- Set rate limit to prevent duplicates
- Use duplicate assignments = 1
- Check if multiple plugins are triggering the same rule

### Points Not Appearing Immediately

**Possible causes:**
- Auto-approve is **No** (requires admin approval)
- Caching is enabled (clear Joomla cache)
- Points are set to expire immediately

## Integration with Plugins

Different plugins trigger different rule names:

### User Plugin
- `com_users.register` - User registration
- `com_users.login` - User login
- `com_users.login.streak_7` - 7-day streak

### Content Plugin
- `com_content.article.create` - Create article
- `com_content.article.read` - Read article
- `com_content.article.delete` - Delete article

### Community Builder Plugin
- `com_communitybuilder.profile.update` - Profile update
- `com_communitybuilder.connection.create` - New connection
- `com_communitybuilder.wall.post` - Wall post

:::tip Developer Note
When creating custom triggers, use the Developer API to fire point rules programmatically.
:::

## Advanced: Custom Rule Names

For custom extensions, follow this naming convention:

```
Format: com_extension.entity.action
Examples:
- com_myextension.item.create
- com_myextension.item.update
- com_myextension.item.delete
- com_myextension.comment.create
```

---

**Next:** [Managing User Points →](managing-points.md)

