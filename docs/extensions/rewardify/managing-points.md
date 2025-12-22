---
id: managing-points
title: Managing User Points
sidebar_label: Managing Points
sidebar_position: 4
---

# Managing User Points

This guide explains how to view, award, and manage points for individual users and track point history.

## Viewing User Points

### From Backend Dashboard

1. Navigate to **Components → Rewardify → Dashboard**
2. You'll see an overview of:
   - Total points awarded
   - Active users
   - Recent point activities
   - Top point earners

### User Points List

1. Go to **Components → Rewardify → User Points**
2. View all users with their:
   - Total points
   - Number of referrals
   - Profile hits/views
   - Registration date

### Filtering Users

Use the built-in filters:
- **Search** - Find users by name or email
- **Sort by Points** - View highest/lowest point earners
- **Access Level** - Filter by user group

## Viewing Individual Point History

### Step 1: Access Point History

1. Go to **Components → Rewardify → Points**
2. Search for a specific user
3. Click on any point entry to view details

### Step 2: Review Point Details

Each point entry shows:
- **Title** - Activity description
- **Points** - Amount awarded/deducted
- **Rule** - Which point rule triggered it
- **Reference ID** - Related content ID (article, post, etc.)
- **Date Awarded** - When points were earned
- **Status** - Pending, Approved, Expired
- **Created By** - Who awarded the points
- **Expires On** - If points have expiration date

## Awarding Points Manually

You can award points to users manually for special circumstances.

### Method 1: From User Points List

1. Go to **Components → Rewardify → User Points**
2. Click on a user to view their profile
3. Click **Award Points** button
4. Enter:
   - **Points** - Amount to award (positive or negative)
   - **Title** - Reason for award
   - **Description** - Additional details
5. Click **Save**

### Method 2: Create Custom Point Entry

1. Go to **Components → Rewardify → Points**
2. Click **New** button
3. Fill in the form:

**Awarded To** (Required)
- Select the user from dropdown
- Or start typing their name/email

**Title** (Required)
```
Example: "Contest Winner - December 2025"
```

**Description** (Optional)
```
Example: "First place in our monthly photo contest"
```

**Points** (Required)
- Positive number awards points
- Negative number deducts points
- Example: `100` or `-50`

**Rule** (Required)
- Select `com_rewardify.custom` for manual awards
- Or select relevant rule

**Reference ID** (Optional)
- Leave empty for manual awards
- Or enter related content ID

**Status**
- **Published** - Points are active
- **Pending** - Awaiting approval
- **Unpublished** - Points deactivated

**Publish Up** (Optional)
- Date when points become active
- Leave empty for immediate

**Publish Down** (Optional)
- Date when points expire
- Leave empty for permanent

4. Click **Save & Close**

## Deducting Points

To deduct points from a user:

### Option 1: Award Negative Points

1. Follow the manual award process above
2. Enter a negative number for points
3. Example: `-25` will deduct 25 points
4. Add reason in title/description

### Option 2: Delete Point Entry

1. Go to **Components → Rewardify → Points**
2. Find the specific point entry to remove
3. Check the box next to it
4. Click **Delete** (moves to trash)
5. The points will be recalculated automatically

:::warning Important
Deleting point entries is permanent. Consider unpublishing instead if you might need to restore them later.
:::

## Bulk Point Management

### Award Points to Multiple Users

1. Go to **Components → Rewardify → User Points**
2. Select multiple users (checkboxes)
3. Unfortunately, bulk awarding is not available in UI
4. Use the [Developer API](rewardify-points-system-api.md) for bulk operations

### Export User Points

1. Go to **Components → Rewardify → User Points**
2. Use Joomla's built-in export feature
3. Or use a third-party export extension

## Approving Pending Points

When point rules have "Auto-Approve" set to **No**, points require manual approval.

### View Pending Points

1. Go to **Components → Rewardify → Points**
2. Filter by **Status → Pending**
3. Review each pending entry

### Approve Points

1. Select point entries to approve
2. Click **Publish** button (top toolbar)
3. Points become active immediately

### Reject Points

1. Select point entries to reject
2. Click **Unpublish** button
3. Or **Delete** to remove completely

## Point History Reports

### Recent Activity Report

1. Go to **Components → Rewardify → Points**
2. Sort by **Date** (newest first)
3. See most recent point activities

### User Activity Report

1. Go to **Components → Rewardify → Points**
2. Filter by specific user
3. View complete point history

### Rule Performance Report

1. Go to **Components → Rewardify → Points**
2. Filter by specific rule
3. See how many times rule triggered
4. Total points awarded via this rule

## Point Expiration

### Setting Expiration

Points can expire based on:

**Individual Point Entry:**
- Set "Publish Down" date when awarding points
- Points automatically deactivate on that date

**Point Rule Configuration:**
- Configure "Expires In" days in rule settings
- Or "Expires On" specific date
- Applies to all points from that rule

### Managing Expired Points

**Finding Expired Points:**
1. Go to **Components → Rewardify → Points**
2. Filter by status or date range
3. Expired points show as unpublished

**Extending Expiration:**
1. Edit the point entry
2. Update "Publish Down" date
3. Save changes

**Removing Expired Points:**
1. Filter expired points
2. Select all
3. Click **Delete**

## Point Balance Calculation

User's total points are calculated from:

```
Total Points = Sum of all Published point entries
```

**Included:**
- ✅ Published points
- ✅ Approved points
- ✅ Points within valid date range

**Excluded:**
- ❌ Unpublished points
- ❌ Pending approval points
- ❌ Expired points
- ❌ Points with future "Publish Up" date

### Recalculating Points

If point totals seem incorrect:

1. Go to **Components → Rewardify → User Points**
2. Click **Tools** → **Recalculate Points** (if available)
3. Or manually check point history for discrepancies

## User Profile Integration

### Viewing Points on Frontend

Users can view their own points:
1. User logs in
2. Goes to their profile page
3. Points display automatically (if profile integration is configured)

### Profile Component Integration

Configure in component options:
- **Components → Rewardify → Options**
- Select Profile Component (CB, Sociable, etc.)
- Points integrate with that profile system

## Point Notifications

### Email Notifications

Currently, manual email notifications are required. Future versions may include:
- Point award notifications
- Milestone achievements
- Expiring points warnings

### On-Screen Messages

Users see system messages when:
- Points are awarded
- Points are deducted
- Milestones are reached

## Common Management Tasks

### Task 1: Reward Contest Winners

```
Steps:
1. Components → Rewardify → Points → New
2. Select user
3. Title: "Contest Winner - [Contest Name]"
4. Points: [Prize amount]
5. Rule: com_rewardify.custom
6. Save & Close
```

### Task 2: Deduct Points for Violation

```
Steps:
1. Components → Rewardify → Points → New
2. Select user
3. Title: "Policy Violation - [Reason]"
4. Points: -[Penalty amount]
5. Description: [Details of violation]
6. Rule: com_rewardify.custom
7. Save & Close
```

### Task 3: Bonus Points for All Active Users

```
Use Developer API (see API documentation):
$pointService = $app->bootComponent('com_rewardify')->getUserPoints();
foreach ($activeUsers as $user) {
    $pointService->assign([
        'rule' => 'com_rewardify.custom',
        'userid' => $user->id,
        'points' => 100,
        'title' => 'Anniversary Bonus',
    ]);
}
```

### Task 4: Monthly Point Reset

If you want to reset points monthly:

```
Steps:
1. Backup point history (export to CSV)
2. Components → Rewardify → Points
3. Select all points
4. Delete (or unpublish)
5. Or use point expiration feature
```

## Troubleshooting

### User Points Not Updating

**Check:**
1. ✅ Point entries are **Published**
2. ✅ Cache is cleared
3. ✅ Database is not corrupted
4. ✅ No date restrictions on points

### Points Display Incorrect Total

**Solutions:**
1. Check point history for unpublished entries
2. Check for expired points
3. Recalculate point totals
4. Review pending approvals

### Cannot Award Negative Points

**Possible causes:**
- Form validation preventing negative values
- Enter negative number with minus sign: `-25`
- Check permissions

## Best Practices

### 1. Document Manual Awards

Always add clear titles and descriptions:
```
✅ Good: "Holiday Bonus - December 2025 Campaign"
❌ Bad: "Bonus"
```

### 2. Keep Point History

Don't delete point history unless necessary:
- Provides accountability
- Helps identify patterns
- Useful for disputes

### 3. Regular Audits

Monthly review:
- Check for unusual point activity
- Review pending approvals
- Clean up expired points
- Verify top earners

### 4. Fair Deductions

When deducting points:
- Clearly state reason
- Follow your site policies
- Be consistent across users
- Document violations

### 5. Backup Point Data

Regularly export point data:
- User safety net
- Helps with migrations
- Useful for analytics

## Security Considerations

### Preventing Point Abuse

1. **Enable rate limiting** on rules
2. **Require approval** for high-value activities
3. **Monitor unusual patterns** in point history
4. **Set access levels** appropriately
5. **Use duplicate prevention** settings

### Audit Trail

Every point entry records:
- Who created it
- When it was created
- What triggered it
- Reference to source content

This helps track any suspicious activity.

---

**Next:** [Leaderboard Setup →](leaderboard.md)

