---
id: sociable-sdk-points-api
title: Points API
sidebar_label: Points API
sidebar_position: 14
---

# Points API

Award points and manage user balances.

## Award by Rule

```php
$sociable->points()->awardByRule('com_myextension.post.create', $userId);
```

## Award Custom Points

```php
$sociable->points()->awardCustom($userId, 50, 'Bonus points', 'bonus', $refId, 'bonuses');
```

## Balance and History

```php
$balance = $sociable->points()->getBalance($userId);
$history = $sociable->points()->getHistory($userId, ['limit' => 20, 'offset' => 0]);
```

## Leaderboard

```php
$leaderboard = $sociable->points()->getLeaderboard([
    'limit' => 10,
    'period' => 'all',
]);
```

## Transfer and Limits

```php
$sociable->points()->transfer($fromUserId, $toUserId, 100, 'Gift transfer');

if ($sociable->points()->canEarnMore($userId, 'com_myextension.post.create')) {
    // User can earn more points today
}
```
