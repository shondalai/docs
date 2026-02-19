---
id: sociable-sdk-legacy-migration
title: Legacy API Migration
sidebar_label: Legacy API Migration
sidebar_position: 23
---

# Legacy API Migration

Use `legacy()` for gradual migration from old Sociable APIs.

## Legacy to Modern Mapping

| Legacy Method | Modern Equivalent |
|---------------|-------------------|
| `SociableApi::getPointsApi()->awardPoints()` | `$sociable->points()->awardByRule()` |
| `SociableApi::getProfileApi()->getUserAvatar()` | `$sociable->avatars()->url()` |
| `SociableApi::getBadgesApi()->trigger()` | `$sociable->badges()->triggerByRule()` |
| `SociableApi::getStreamApi()->push()` | `$sociable->activities()->push()` |
| `SociableApi::getNotificationsApi()->push()` | `$sociable->notifications()->send()` |

## Using Legacy Bridge

```php
$bridge = $sociable->legacy();

$bridge->getPointsApi()->awardPoints('rule.name', $userId);
$bridge->getProfileApi()->getUserAvatar($userId);
$bridge->getBadgesApi()->trigger('rule.name', $userId, $values);
$bridge->getStreamApi()->push($userId, 'post', 'create', 'Description');
$bridge->getNotificationsApi()->push($userId, $actorId, 'type');
```

> Legacy methods trigger deprecation warnings. Migrate to modern methods when possible.
