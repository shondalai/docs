---
id: sociable-sdk-notification-api
title: Notification API
sidebar_label: Notification API
sidebar_position: 17
---

# Notification API

Send notifications and manage read status and preferences.

## Send Notification

```php
$notificationId = $sociable->notifications()->send($recipientId, 'new_comment', [
    'actor_id' => $commenterId,
    'message' => 'John commented on your post',
    'url' => '/posts/123#comment-456',
    'context' => 'posts',
    'context_id' => 123,
    'image' => '/path/to/image.jpg',
]);
```

## Send in Bulk

```php
$results = $sociable->notifications()->sendBulk([1, 2, 3], 'announcement', [
    'message' => 'New feature available!',
    'url' => '/announcements/1',
]);
```

## Get and Mark as Read

```php
$items = $sociable->notifications()->getForUser($userId, [
    'limit' => 20,
    'offset' => 0,
    'unread_only' => false,
    'type' => null,
]);

$sociable->notifications()->markAsRead($notificationId);
$sociable->notifications()->markAsRead([1, 2, 3]);
$sociable->notifications()->markAllAsRead($userId);
```

## Count, Delete, Preferences

```php
$count = $sociable->notifications()->getUnreadCount($userId);
$sociable->notifications()->delete($notificationId);

$prefs = $sociable->notifications()->getPreferences($userId);
$sociable->notifications()->updatePreferences($userId, [
    'email_enabled' => true,
    'push_enabled' => false,
]);
```
