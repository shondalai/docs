---
id: sociable-sdk-avatar-api
title: Avatar API
sidebar_label: Avatar API
sidebar_position: 13
---

# Avatar API

Handle user avatars with various sizes and formats.

## Available Sizes

| Size Key | Typical Dimension |
|----------|------------------|
| `xs` | 24x24 |
| `sm` | 32x32 |
| `md` | 50x50 (default) |
| `lg` | 100x100 |
| `xl` | 200x200 |

## Get Avatar URL

```php
$url = $sociable->avatars()->url($userId);
$url = $sociable->avatars()->url($userId, 'lg');
```

## Get Avatar Image Tag

```php
$img = $sociable->avatars()->image($userId, 'lg', [
    'class' => 'rounded-circle',
    'loading' => 'lazy',
]);
```

## Get Linked Avatar

```php
$linkedAvatar = $sociable->avatars()->linked($userId, 'lg', [
    'class' => 'avatar-img',
], [
    'class' => 'avatar-link',
]);
```

## Check and Delete

```php
if ($sociable->avatars()->hasAvatar($userId)) {
    $sociable->avatars()->delete($userId);
}
```
