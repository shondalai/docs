---
id: sociable-sdk-instance
title: SDK Instance
sidebar_label: SDK Instance
sidebar_position: 11
---

# SDK Instance

The `Sociable` class is the main entry point for all SDK functionality.

## Getting the Instance

```php
use Joomla\Component\Sociable\Administrator\SDK\Sociable;

$sociable = Sociable::getInstance();
```

## Available API Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `profiles()` | ProfileApi | User profile management |
| `avatars()` | AvatarApi | Avatar image handling |
| `points()` | PointsApi | Points/rewards system |
| `badges()` | BadgeApi | Badge/achievement system |
| `activities()` | ActivityApi | Activity stream |
| `notifications()` | NotificationApi | Notification system |
| `connections()` | ConnectionApi | User relationships |
| `events()` | EventApi | Event management |
| `groups()` | GroupApi | Group/community management |
| `ruleEngine()` | RuleEngine | Rule evaluation and management |
| `legacy()` | LegacyBridge | Backward compatibility layer |

## Quick Shortcut Methods

```php
$sociable->awardPoints('com_extension.rule.name', $userId);
$sociable->triggerBadge('com_extension.badge.rule', $userId, ['posts' => 10]);
$sociable->pushActivity('post.create', $userId, ['title' => 'New Post']);
$sociable->notify($recipientId, 'new_comment', ['actor_id' => $commenterId]);
```
