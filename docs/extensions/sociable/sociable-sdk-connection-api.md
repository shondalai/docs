---
id: sociable-sdk-connection-api
title: Connection API
sidebar_label: Connection API
sidebar_position: 18
---

# Connection API

Manage follows, friend requests, and blocks.

## Follow and Unfollow

```php
$sociable->connections()->follow($followerId, $targetUserId);
$sociable->connections()->unfollow($followerId, $targetUserId);
```

## Friend Requests

```php
$sociable->connections()->sendFriendRequest($senderId, $recipientId);
$sociable->connections()->acceptFriendRequest($recipientId, $senderId);
$sociable->connections()->rejectFriendRequest($recipientId, $senderId);
$sociable->connections()->cancelFriendRequest($senderId, $recipientId);
```

## Block and Unblock

```php
$sociable->connections()->block($blockerId, $targetId);
$sociable->connections()->unblock($blockerId, $targetId);
```

## Lists and Counts

```php
$followers = $sociable->connections()->getFollowers($userId, ['limit' => 20, 'offset' => 0]);
$following = $sociable->connections()->getFollowing($userId, ['limit' => 20, 'offset' => 0]);
$friends = $sociable->connections()->getFriends($userId, ['limit' => 20, 'offset' => 0]);
$mutual = $sociable->connections()->getMutualFriends($userId1, $userId2);
$counts = $sociable->connections()->getCounts($userId);
```
