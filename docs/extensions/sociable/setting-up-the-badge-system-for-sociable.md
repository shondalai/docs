---
id: setting-up-the-badge-system-for-sociable
title: Setting Up the Badge System
sidebar_label: Badge System
sidebar_position: 6
---

## Overview

Badges are achievements that recognize user milestones and activities. The badge system in Sociable motivates engagement by rewarding users for reaching specific goals like posting content, gaining followers, or staying active.

## Badge Settings Configuration

Configure badges in **Components → Sociable → Settings → Gamification**:

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Badges | Master toggle for badge system | Yes |
| Badge Tiers | Number of badge tiers available | 5 |

## Badge Metrics

Badges evaluate user statistics to determine eligibility. Available metrics tracked by the system:

| Metric | Description |
|--------|-------------|
| activities_count | Total posts/activities created |
| comments_count | Total comments made |
| reactions_count | Total reactions given |
| friends_count | Number of mutual connections |
| followers_count | Number of followers |
| following_count | Number of users following |
| groups_count | Number of groups joined |
| badges_count | Number of badges earned |
| points_total | Total points accumulated |
| profile_views | Times profile was viewed |
| login_streak | Consecutive daily logins |
| days_registered | Days since registration |

## Rule Operators

Badge rules use operators to compare metric values:

| Operator | Code | Description |
|----------|------|-------------|
| Equals | eq | Exact match |
| Greater Than | gt | Must exceed value |
| Greater or Equal | gte | Must meet or exceed value |
| Less Than | lt | Must be below value |
| Less or Equal | lte | Must be at or below value |

## Setting Up Badge Rules

### Step 1: Enable Badge System

1. Go to **Components → Sociable → Settings**
2. Navigate to the **Gamification** tab
3. Enable **Badge System**
4. Save settings

### Step 2: Sync Badge Rules

Import available badge rules from installed extensions:

1. Go to **Components → Sociable → Badge Rules**
2. Click **Sync Rules** in the toolbar
3. Extension-provided rules are imported

### Step 3: Configure Rules

Edit each badge rule:

| Field | Description |
|-------|-------------|
| Title | Badge display name |
| Description | What the badge represents |
| Icon | FontAwesome icon class or uploaded image |
| Color | Badge color theme |
| Tier | Badge tier level (1-5) |
| Metric | User stat to evaluate |
| Operator | Comparison operator |
| Value | Required threshold |
| Points Required | Minimum points needed |
| Auto Award | Automatically award when criteria met |
| Published | Enable/disable the rule |

### Step 4: Enable Required Plugins

For badge awarding from other extensions:

1. Go to **System → Manage → Plugins**
2. Enable **User - Sociable** - User-related badges
3. Enable **Content - Sociable** - Content-related badges

## Badge Tier System

Organize badges into tiers for progression:

| Tier | Typical Use |
|------|-------------|
| 1 | Beginner badges (easy to earn) |
| 2 | Regular user achievements |
| 3 | Active contributor |
| 4 | Power user |
| 5 | Elite/legendary status |

### Example Badge Progression

**Activity Badges:**
- Tier 1: First Post (activities_count >= 1)
- Tier 2: Content Creator (activities_count >= 10)
- Tier 3: Prolific Poster (activities_count >= 50)
- Tier 4: Content Champion (activities_count >= 200)
- Tier 5: Legend (activities_count >= 1000)

## Managing Badges

### Creating Custom Badges

1. Go to **Components → Sociable → Badge Rules**
2. Click **New**
3. Configure:
   - **Title** - Badge name
   - **Description** - Achievement description
   - **Asset Name** - Extension identifier (com_sociable)
   - **Rule Name** - Unique rule identifier
   - **Metric** - User statistic to check
   - **Operator** - Comparison operator
   - **Value** - Threshold value
   - **Image/Icon** - Badge visual
   - **Tier** - Achievement tier
   - **Auto Award** - Enable automatic awarding
4. Save

### Editing Badges

1. Click on a badge in the list
2. Modify settings
3. Save changes

### Badge Display Options

| Option | Description |
|--------|-------------|
| Icon | FontAwesome icon class (e.g., fa-trophy) |
| Image Path | Custom badge image URL |
| Color | Badge background color |

## User Badge Management

### Viewing User Badges

**Admin View:**
1. Go to **Components → Sociable → Users**
2. Click on a user
3. Select the **Badges** tab

**Frontend:**
- Profile page displays earned badges
- Badge collection page shows all achievements
- Badge progress indicators for near-complete

### Manual Badge Award

Award badges directly to users:

1. Go to **Components → Sociable → Users**
2. Select a user
3. Click **Award Badge**
4. Select the badge
5. Enter optional reason
6. Award

### Revoking Badges

Remove a badge from a user:

1. Go to **Components → Sociable → Badges**
2. Find the user badge entry
3. Click **Revoke** or delete

## Automatic Badge Checking

The system automatically checks badge eligibility:

- When user statistics update (posts, followers, etc.)
- After points are awarded
- During daily cron tasks
- When triggered programmatically

## Notifications

Users receive notifications when earning badges:

| Channel | Triggered |
|---------|-----------|
| In-app | Always |
| Email | Configurable |
| Push | Configurable |

Notification includes:
- Badge name
- Badge icon/image
- Badge description

Configure in **Settings → Notifications**.

## SDK Integration

Award badges from custom extensions using the SDK:

### Basic Usage

```php
$sociable = Sociable::getInstance();

// Trigger a badge rule with values
$sociable->badges()->trigger('com_myext.milestone', [
    'posts' => 100,
    'comments' => 50,
]);

// Award a badge directly by badge ID
$sociable->badges()->award($userId, $badgeId);

// Get user's badges
$badges = $sociable->badges()->getUserBadges($userId);

// Check if user has a badge
$hasBadge = $sociable->badges()->userHas($userId, $badgeId);
```

### Rule-Based Triggering

```php
// Trigger evaluates conditions automatically
$sociable->badges()->trigger('com_myext.photos.create', [
    'photos' => 10,  // Value checked against rule
], $userId, [
    'ref_id' => 'photo_' . $photoId,  // Reference tracking
]);
```

### Defining Badge Rules

Create a JSON file in your extension: `administrator/components/com_yourext/sociable_rules.json`

```json
{
  "badge_rules": [
    {
      "asset_name": "com_yourext",
      "rule_name": "content.champion",
      "title": "Content Champion",
      "description": "Created 100 items",
      "icon": "fa-trophy",
      "tier": 3,
      "metric": "items_created",
      "operator": "gte",
      "value": 100,
      "is_automatic": true
    }
  ]
}
```

### Programmatic Badge Creation

```php
$sociable = Sociable::getInstance();

// Create a badge rule
$badgeId = $sociable->badges()->create([
    'title' => 'Super Creator',
    'description' => 'Created 500 items',
    'icon' => 'fa-star',
    'tier' => 4,
    'asset_name' => 'com_myext',
    'rule_name' => 'super.creator',
    'is_automatic' => true,
]);
```

## Badge Display Examples

### Profile Badge Showcase

Users can showcase badges on their profile:
- Featured badge (primary display)
- Recent badges earned
- Total badge count

### Badge Collection

Full badge collection view shows:
- All available badges
- Earned vs locked status
- Progress toward next badge
- Earning date for achieved badges

## Best Practices

### Badge Design

- Use clear, descriptive names
- Progressive difficulty across tiers
- Mix achievement types (activity, social, milestones)
- Include easy early badges for new users

### Avoiding Abuse

- Set reasonable thresholds
- Monitor for gaming behaviors
- Consider rate limiting for rapid actions

### Engagement Tips

- Announce new badges prominently
- Celebrate first-time earners
- Create seasonal or event badges
- Link badges to leaderboards

## Database Tables

| Table | Purpose |
|-------|---------|
| #__sociable_badge_rules | Badge definitions and rules |
| #__sociable_badges | User-earned badges |

## Next Steps

- [Points System](setting-up-the-points-system-for-sociable) - Prerequisite for points-based badges
- [Modules](sociable-modules-and-plugins) - Display badges in modules
- [SDK Guide](sociable-sdk-developer-guide) - Developer integration
