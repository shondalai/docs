---
id: enable-referrals-in-sociable
title: Setting Up Referrals
sidebar_label: Referrals
sidebar_position: 9
---

## Overview

Sociable includes a built-in referral system that allows users to invite others and earn points for successful referrals. Each user receives a unique referral code that can be shared.

## How Referrals Work

1. **Referral Code Generation**: Each user receives a unique 8-character referral code when their profile is created
2. **Sharing**: Users share their referral code or personalized referral link
3. **Registration**: New users register using the referral code
4. **Tracking**: The system links the new user to their referrer
5. **Rewards**: Points are awarded to the referrer

## User Referral Codes

### Automatic Code Generation

When a user profile is created, Sociable automatically generates a unique 8-character referral code:

| Field | Description |
|-------|-------------|
| referral_code | Unique uppercase alphanumeric code (e.g., A1B2C3D4) |
| referred_by | User ID of the person who referred them |

### Finding Your Referral Code

Users can find their referral code in their profile:

1. Go to Profile
2. Navigate to Settings or Referrals section
3. Copy the referral code or link

### Referral Link Format

The referral link format:
```
https://yoursite.com/register?ref=CODE
```

Where `CODE` is the user's 8-character referral code.

## Referral Points

### Setting Up Referral Points

Configure points rewards for successful referrals:

1. Go to **Components → Sociable → Points Rules**
2. Click **Sync Rules** to import default rules
3. Find or create the `referral` rule
4. Configure:

| Field | Recommended Value |
|-------|-------------------|
| Rule Name | com_sociable.referral |
| Title | Successful Referral |
| Points | 20-50 (your preference) |
| Daily Limit | 0 (unlimited) or set limit |

### Points Triggers

| Event | Who Earns | Typical Points |
|-------|-----------|----------------|
| User registers via referral | Referrer | 20 |
| Referred user completes profile | Referrer | 10 (bonus) |

## Tracking Referrals

### Admin View

View referral statistics:

1. Go to **Components → Sociable → Users**
2. View the **Referred By** column
3. Click on a user to see who they referred

### User Statistics

Users can track their referral stats:

- Total referrals made
- Points earned from referrals
- Recent referral activity

## Enabling the Referral System

### Step 1: Enable User Plugin

The User plugin processes referral codes during registration:

1. Go to **System → Manage → Plugins**
2. Enable **User - Sociable**
3. Ensure "Auto Create Profile" is enabled

### Step 2: Configure Points

Set up points rewards:

1. Go to **Components → Sociable → Settings → Gamification**
2. Enable **Points System**
3. Go to **Points Rules**
4. Configure the referral rule with desired points

### Step 3: Enable Registration

Ensure registrations are allowed:

1. Go to **Components → Sociable → Settings → Profiles**
2. Enable **Allow Registration**

## SDK Integration

Award referral points programmatically:

```php
$sociable = Sociable::getInstance();

// Award referral points to the referrer
$sociable->points()->award('com_sociable.referral', $referrerId, [
    'target_type' => 'user',
    'target_id' => $newUserId,
    'description' => 'Referred a new user',
]);
```

## Database Structure

Referral data is stored in the `#__sociable_users` table:

| Column | Type | Description |
|--------|------|-------------|
| referral_code | CHAR(8) | Unique referral code |
| referred_by | INT | User ID of referrer |

## Best Practices

### Promotion

- Display referral codes prominently in user profiles
- Create a dedicated referral page
- Include referral links in email signatures

### Incentives

- Offer meaningful point rewards
- Consider tiered bonuses for multiple referrals
- Create referral-based badges

### Preventing Abuse

- Monitor for self-referral attempts
- Set reasonable daily limits if needed
- Verify new user accounts are legitimate

## Badges for Referrals

Create badges to reward top referrers:

| Badge | Criteria |
|-------|----------|
| First Referral | 1 successful referral |
| Growing Network | 5 referrals |
| Community Builder | 25 referrals |
| Ambassador | 100 referrals |

Create rules in **Components → Sociable → Badge Rules** using the `referrals` metric.

## Troubleshooting

### Referral Code Not Working

- Verify the code exists and is valid
- Check user hasn't already registered
- Ensure registration is enabled

### Points Not Awarded

- Confirm referral points rule is published
- Check User plugin is enabled
- Verify Points system is enabled

### Missing Referral Link

- User profile may not be created yet
- Check user has a valid referral_code in database

## Next Steps

- [Points System](setting-up-the-points-system-for-sociable) - Configure referral rewards
- [Badge System](setting-up-the-badge-system-for-sociable) - Create referral badges
- [Getting Started](getting-started-guide-for-sociable) - Initial setup
