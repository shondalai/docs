---
id: sociable-sdk-badge-api
title: Badge API
sidebar_label: Badge API
sidebar_position: 15
---

# Badge API

Trigger badge evaluation and manage achievements.

## Trigger by Rule

```php
$awardedBadges = $sociable->badges()->triggerByRule(
    'com_myextension.posts.milestone',
    $userId,
    ['posts' => 100]
);
```

## Award Badge

```php
$sociable->badges()->award($userId, $badgeId, [
    'source' => 'promotion',
    'campaign_id' => 123,
], 'Won the monthly writing challenge');
```

## Revoke and Check

```php
$sociable->badges()->revoke($userId, $badgeId);

if ($sociable->badges()->userHasBadge($userId, $badgeId)) {
    // User has this badge
}
```

## User and Catalog Badges

```php
$userBadges = $sociable->badges()->getUserBadges($userId);
$allBadges = $sociable->badges()->getAll(['published' => true]);
```
