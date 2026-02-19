---
id: sociable-sdk-rule-engine
title: Rule Engine
sidebar_label: Rule Engine
sidebar_position: 21
---

# Rule Engine

The Rule Engine evaluates points and badge conditions using JSON structures.

## Condition Format

```json
{
  "condition": "AND",
  "rules": [
    {"field": "posts", "operator": "greater_or_equal", "value": 10},
    {"field": "comments", "operator": "greater", "value": 5}
  ]
}
```

## Supported Operators

`equal`, `not_equal`, `less`, `less_or_equal`, `greater`, `greater_or_equal`, `between`, `not_between`, `in`, `not_in`, `contains`, `not_contains`, `starts_with`, `ends_with`, `is_empty`, `is_not_empty`, `regex`.

## Nested Conditions

```json
{
  "condition": "AND",
  "rules": [
    {"field": "posts", "operator": "gte", "value": 10},
    {
      "condition": "OR",
      "rules": [
        {"field": "likes_received", "operator": "gte", "value": 100},
        {"field": "comments_received", "operator": "gte", "value": 50}
      ]
    }
  ]
}
```

## Evaluate Conditions

```php
$conditions = [
    'condition' => 'AND',
    'rules' => [
        ['field' => 'posts', 'operator' => 'gte', 'value' => 10],
        ['field' => 'followers', 'operator' => 'gte', 'value' => 100],
    ],
];

$userValues = ['posts' => 25, 'followers' => 150];

if ($sociable->ruleEngine()->evaluate($conditions, $userValues)) {
    // Conditions are met
}
```

## Get Rules

```php
$pointRule = $sociable->ruleEngine()->getPointsRule('com_myextension.post.create');
$pointRules = $sociable->ruleEngine()->getPointsRules();
$badgeRules = $sociable->ruleEngine()->getBadgeRules('com_myextension.milestone');
$allBadgeRules = $sociable->ruleEngine()->getAllBadgeRules();
```
