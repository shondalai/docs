---
id: sociable-sdk-group-api
title: Group API
sidebar_label: Group API
sidebar_position: 20
---

# Group API

Manage groups and memberships.

## Create Group

```php
$groupId = $sociable->groups()->create([
    'name' => 'Tech Enthusiasts',
    'description' => 'A group for technology discussions',
    'owner_id' => $userId,
    'privacy' => 'public',
    'category_id' => 5,
]);
```

## Read, Update, Delete

```php
$group = $sociable->groups()->get($groupId);
$sociable->groups()->update($groupId, ['name' => 'Updated Group Name']);
$sociable->groups()->delete($groupId);
```

## List and Membership

```php
$groups = $sociable->groups()->getList(['category_id' => null, 'search' => null, 'limit' => 20, 'offset' => 0]);

$sociable->groups()->join($groupId, $userId);
$sociable->groups()->leave($groupId, $userId);
```

## Members and Roles

```php
$members = $sociable->groups()->getMembers($groupId, ['role' => null, 'limit' => 50, 'offset' => 0]);
$sociable->groups()->updateMemberRole($groupId, $userId, 'moderator');
$role = $sociable->groups()->getMemberRole($groupId, $userId);
```

## Invitations

```php
$sociable->groups()->invite($groupId, $userId, $inviterId);
$sociable->groups()->acceptInvitation($groupId, $userId);
$sociable->groups()->declineInvitation($groupId, $userId);
$pending = $sociable->groups()->getPendingInvitations($userId);
```
