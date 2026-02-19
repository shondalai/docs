---
id: sociable-sdk-best-practices
title: SDK Best Practices
sidebar_label: SDK Best Practices
sidebar_position: 24
---

# SDK Best Practices

## 1) Use Qualified Rule Names

```php
'com_myextension.article.publish';
'com_myextension.comment.create';
```

## 2) Handle Errors

```php
$activityId = $sociable->activities()->push($type, $userId, $data);
if ($activityId === false) {
    Log::error('Failed to push activity');
}
```

## 3) Prefer Batch Methods

```php
$profiles = $sociable->profiles()->getBatch([1, 2, 3, 4, 5]);
```

## 4) Use Clear Activity Types

```php
'post.create';
'comment.create';
'group.join';
```

## 5) Register Rules on Install

```php
$rulesFile = __DIR__ . '/sociable_rules.xml';
if (file_exists($rulesFile)) {
    Sociable::getInstance()->ruleEngine()->importFromXml($rulesFile);
}
```

## 6) Clean Up Rules on Uninstall

Remove extension-owned points and badge rules when your extension is uninstalled.
