---
id: setting-up-the-points-system-for-sociable
title: Setting Up the Points System
sidebar_label: Points System
sidebar_position: 5
---

## Overview

Sociable includes a powerful gamification system that rewards users with points for their activities. Points motivate engagement, acknowledge contributions, and can be used for leaderboards and achievement tracking.

## Points Settings Configuration

Configure points in **Components → Sociable → Settings → Gamification**:

| Setting | Description | Default |
|---------|-------------|---------|
| Enable Points | Master toggle for points system | Yes |
| Enable Leaderboard | Show public points leaderboard | Yes |
| Leaderboard Size | Number of users displayed | 100 |

## Point Transaction Types

Sociable tracks different types of point transactions:

| Type | Description |
|------|-------------|
| **earned** | Points earned through activities |
| **spent** | Points redeemed or used |
| **bonus** | Admin-awarded bonus points |
| **penalty** | Points deducted as penalty |
| **transfer** | Points transferred between users |
| **refund** | Refunded points |

## Built-in Point Actions

Sociable awards points for these activities by default:

| Action | Description | Typical Points |
|--------|-------------|----------------|
| post | Creating a new post | 5 |
| comment | Adding a comment | 2 |
| like | Adding a reaction | 1 |
| share | Sharing content | 3 |
| follow | Following a user | 2 |
| followed | Being followed | 1 |
| login | Daily login | 1 |
| login_streak | Consecutive login streak | 5 |
| profile_complete | Completing profile | 10 |
| invite | Sending invitation | 3 |
| referral | Successful referral | 20 |
| group_create | Creating a group | 10 |
| group_join | Joining a group | 2 |
| badge_earned | Earning a badge | varies |

## Setting Up Points Rules

### Step 1: Enable the Points System

1. Go to **Components → Sociable → Settings**
2. Navigate to the **Gamification** tab
3. Enable **Points System**
4. Save settings

### Step 2: Scan for Rules

Discover all available points rules from installed extensions:

1. Go to **Components → Sociable → Points Rules**
2. Click **Sync Rules** in the toolbar
3. The system scans all extensions for points rules
4. Found rules are imported and displayed

### Step 3: Configure Rules

For each rule, configure:

| Field | Description |
|-------|-------------|
| Title | Display name of the rule |
| Rule Name | Technical identifier (e.g., com_sociable.post.create) |
| Points | Points awarded for this action |
| Daily Limit | Maximum times per day (0 = unlimited) |
| Published | Enable/disable the rule |

### Step 4: Enable Required Plugins

For third-party integration:

1. Go to **System → Manage → Plugins**
2. Enable **User - Sociable** plugin
3. Enable **Content - Sociable** plugin
4. Enable any extension-specific plugins

## Managing Points Rules

### Creating Custom Rules

Create your own points rules:

1. Go to **Components → Sociable → Points Rules**
2. Click **New**
3. Configure the rule:
   - **Asset Name** - Extension identifier (e.g., com_myext)
   - **Rule Name** - Action name (e.g., custom_action)
   - **Title** - Human-readable title
   - **Points** - Points to award
   - **Rule Type** - earned, spent, or bonus
   - **Daily Limit** - Maximum daily awards
4. Save the rule

### Editing Rules

Modify existing rules:

1. Click on a rule in the list
2. Adjust points, limits, or status
3. Save changes

### Daily Limits

Prevent point farming with daily limits:

- **0** = No limit (unlimited awards)
- **1** = Once per day
- **5** = Maximum 5 times per day
- etc.

Daily limits reset at midnight (server time).

## User Points Balance

Each user has a points balance tracked in their profile:

| Balance Type | Description |
|--------------|-------------|
| **Total** | All points ever earned |
| **Available** | Current spendable balance |
| **Pending** | Points awaiting confirmation |

### Viewing User Points

**Admin View:**
1. Go to **Components → Sociable → Users**
2. Click on a user
3. View points in the **Gamification** tab

**Frontend:**
- Profile page shows points balance
- Leaderboard shows rankings
- History page shows transactions

## Points History

Users can view their points history:

1. Navigate to profile
2. Click **Points History**
3. View all transactions with:
   - Date/time
   - Points amount
   - Action description
   - Running balance

## Leaderboard

The points leaderboard shows top users:

### Configuration

| Setting | Description |
|---------|-------------|
| Enable Leaderboard | Show/hide the leaderboard |
| Leaderboard Size | Number of users shown |
| Display Period | All-time, monthly, weekly |

### Privacy

- Users can opt out of the leaderboard
- Only total points are displayed (not transaction details)

## Admin Management

### Manual Points Adjustment

Award or deduct points manually:

1. Go to **Components → Sociable → Users**
2. Select a user
3. Click **Adjust Points** or access via **Gamification** tab
4. Enter amount (positive to add, negative to deduct)
5. Enter reason
6. Submit

### Bulk Points Operations

Award points to multiple users:

1. Go to **Components → Sociable → Users**
2. Select multiple users
3. Choose **Award Points** from toolbar actions
4. Enter amount and reason
5. Apply

### Viewing All Transactions

Review all points activity:

1. Go to **Components → Sociable → Points History**
2. Filter by:
   - User
   - Transaction type
   - Date range
   - Rule

## SDK Integration

Award points from custom extensions using the Sociable SDK:

```php
$sociable = Sociable::getInstance();

// Award points using a rule
$sociable->points()->award('com_myext.create_item', $userId);

// Award custom bonus points
$sociable->points()->awardCustom($userId, 50, 'Special achievement bonus');

// Get user balance
$balance = $sociable->points()->getBalance($userId);
// Returns: ['total' => 500, 'available' => 450, 'pending' => 0]

// Deduct points
$sociable->points()->deduct($userId, 100, 'Redeemed for prize');

// Get points history
$history = $sociable->points()->getHistory($userId);
```

### Creating Rules Programmatically

Define points rules in your extension:

1. Create a JSON file: `administrator/components/com_yourext/sociable_rules.json`
2. Define your rules:

```json
{
  "points_rules": [
    {
      "asset_name": "com_yourext",
      "rule_name": "item.create",
      "title": "Create Item",
      "description": "Points for creating an item",
      "points": 5,
      "daily_limit": 10,
      "published": true
    }
  ]
}
```

3. Run **Sync Rules** to import

### Triggering Points in Code

```php
// Get SDK instance
$sociable = Sociable::getInstance();

// Award points when user creates content
$sociable->points()->award('com_yourext.item.create', $userId, [
    'target_type' => 'item',
    'target_id' => $itemId,
    'description' => 'Created item: ' . $itemTitle,
]);
```

## Notifications

Users receive notifications for points:

| Event | Notification |
|-------|-------------|
| Points earned (≥10) | In-app + email |
| Daily limit reached | In-app only |
| Bonus awarded | In-app + email |
| Points deducted | In-app + email |

Configure in **Settings → Notifications**.

## Best Practices

### Point Values

- **Low value (1-5)** - Common actions (likes, comments)
- **Medium value (5-20)** - Content creation (posts, uploads)
- **High value (20-100)** - Achievements (referrals, milestones)

### Preventing Abuse

- Set daily limits on common actions
- Monitor leaderboard for suspicious activity
- Review bulk transactions

### Engagement

- Publish point values so users know rewards
- Highlight leaderboard on homepage
- Create badges tied to point milestones

## Next Steps

- [Badge System](setting-up-the-badge-system-for-sociable) - Award badges based on points
- [Referrals](enable-referrals-in-sociable) - Points for referrals
- [SDK Guide](sociable-sdk-developer-guide) - Developer integration
