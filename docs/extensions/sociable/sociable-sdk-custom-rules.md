---
id: sociable-sdk-custom-rules
title: Registering Custom Rules
sidebar_label: Registering Custom Rules
sidebar_position: 22
---

# Registering Custom Rules

Third-party extensions can register points and badge rules.

## Register Points Rule

```php
$sociable->ruleEngine()->registerPointsRule([
    'name' => 'com_myextension.article.publish',
    'asset_name' => 'com_myextension',
    'title' => 'Publish Article',
    'description' => 'Points awarded when user publishes an article',
    'points' => 10,
    'type' => 'custom',
    'state' => 1,
    'auto_approve' => 1,
    'access' => 1,
]);
```

## Register Badge Rule

```php
$sociable->ruleEngine()->registerBadgeRule([
    'name' => 'com_myextension.author.prolific',
    'asset_name' => 'com_myextension',
    'title' => 'Prolific Author',
    'description' => 'Awarded for publishing 50 articles',
    'rule_content' => [
        'condition' => 'AND',
        'rules' => [
            ['field' => 'articles', 'operator' => 'gte', 'value' => 50],
        ],
    ],
    'image_path' => 'media/com_myextension/badges/prolific.png',
    'state' => 1,
    'access' => 1,
]);
```

## Import from XML

```php
$result = $sociable->ruleEngine()->importFromXml(JPATH_PLUGINS . '/sociable/myextension/rules.xml');
```
