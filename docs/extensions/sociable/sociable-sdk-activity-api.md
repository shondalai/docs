---
id: sociable-sdk-activity-api
title: Activity API
sidebar_label: Activity API
sidebar_position: 16
---

# Activity API

Push activities and manage feeds, reactions, and comments.

## Push Activity

```php
$activityId = $sociable->activities()->push('post.create', $userId, [
    'title' => 'John created a new post',
    'content' => 'Post content preview...',
    'context' => 'posts',
    'context_id' => $postId,
    'privacy' => 'public',
    'group_id' => null,
    'metadata' => ['category' => 'tech'],
]);
```

## Get Feed

```php
$feed = $sociable->activities()->getFeed([
    'user_id' => null,
    'group_id' => null,
    'type' => null,
    'limit' => 20,
    'offset' => 0,
]);

$personalFeed = $sociable->activities()->getFeedForUser($userId, ['limit' => 20]);
```

## Reactions and Comments

```php
$sociable->activities()->addReaction($activityId, $userId, 'like');
$sociable->activities()->removeReaction($activityId, $userId, 'like');

$commentId = $sociable->activities()->addComment($activityId, $userId, 'Great post!');
$comments = $sociable->activities()->getComments($activityId, ['limit' => 20, 'offset' => 0]);
```

## Get and Remove

```php
$activity = $sociable->activities()->get($activityId);
$sociable->activities()->remove($activityId);
```
