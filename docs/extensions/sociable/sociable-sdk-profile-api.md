---
id: sociable-sdk-profile-api
title: Profile API
sidebar_label: Profile API
sidebar_position: 12
---

# Profile API

Manage user profiles with full CRUD operations.

## Get a Profile

```php
$profile = $sociable->profiles()->get($userId);
```

## Get Profile by Handle

```php
$profile = $sociable->profiles()->getByHandle('johndoe');
```

## Get Multiple Profiles (Batch)

```php
$userIds = [1, 2, 3, 4, 5];
$profiles = $sociable->profiles()->getBatch($userIds);
```

## Update Profile

```php
$sociable->profiles()->update($userId, [
    'bio' => 'Updated bio text',
    'location' => 'San Francisco',
    'website' => 'https://newsite.com',
]);
```

## Check if Profile Exists

```php
if ($sociable->profiles()->exists($userId)) {
    // Profile exists
}
```

## Get Profile URL and Link

```php
$url = $sociable->profiles()->getUrl($userId);
$link = $sociable->profiles()->link($userId, [
    'class' => 'profile-link',
    'target' => '_blank',
]);
```
