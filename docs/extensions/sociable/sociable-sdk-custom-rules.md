---
id: sociable-sdk-custom-rules
title: Registering Custom Rules
sidebar_label: Registering Custom Rules
sidebar_position: 22
---

# Registering Custom Rules

Third-party extensions can register **points rules**, **badge rules**, and
**activity rules** with Sociable. There are two ways to do it: shipping a
`sociable_rules.json` file (recommended), or registering programmatically
via the Rule Engine.

## Recommended: `sociable_rules.json`

Drop a file called `sociable_rules.json` in any of these locations and it
will be discovered automatically:

| Location | Owner |
|----------|-------|
| `administrator/components/com_yourext/rules/sociable_rules.json` | Backend component |
| `components/com_yourext/rules/sociable_rules.json` | Frontend component |
| `plugins/sociable/yourplugin/rules/sociable_rules.json` | Sociable plugin |

Sociable runs the sync automatically on component install/update. Admins can
also re-run it any time from **Components → Sociable → Badges → Sync Rules**.
The sync is idempotent — new rules are inserted, existing rules (matched on
`asset_name` + `name`) are updated in place.

Plugins outside the `sociable` group can register additional rule files by
listening to the `onSociableDiscoverRulesFiles` event:

```php
public function onSociableDiscoverRulesFiles(GenericEvent $event): void
{
    $files = &$event->getArguments()['files'];
    $files['plg_user_myauth'] = [
        'path'      => __DIR__ . '/rules/sociable_rules.json',
        'component' => 'plg_user_myauth',
        'type'      => 'plugin',
    ];
}
```

### File Format

```json
{
  "$schema": "./rules-schema.json",
  "version": "1.0",
  "component": "com_myext",
  "pointsRules":  [ ... ],
  "badgeRules":   [ ... ],
  "activityRules":[ ... ]
}
```

Both `camelCase` (`assetName`, `ruleContent`, `autoApprove`) and
`snake_case` (`asset_name`, `rule_content`, `auto_approve`) keys are
accepted on input — the sync normalizes them.

### Points Rule Entry

```json
{
  "name": "com_myext.article.publish",
  "assetName": "com_myext",
  "title": "Publish Article",
  "description": "Points awarded when a user publishes an article.",
  "icon": "file-text",
  "type": "earn",
  "points": 10,
  "autoApprove": true,
  "state": 1,
  "access": 1
}
```

### Badge Rule Entry

`ruleContent` follows the [Rule Engine](sociable-sdk-rule-engine) condition
format. Pass it inline as an object — the sync will JSON-encode it for
storage.

```json
{
  "name": "com_myext.author.prolific",
  "assetName": "com_myext",
  "title": "Prolific Author",
  "introtext": "Publish 50 articles",
  "description": "Awarded when a user has published 50 or more articles.",
  "ruleContent": {
    "condition": "AND",
    "rules": [
      {"id": "articles", "field": "articles", "type": "integer", "operator": "greater_or_equal", "value": 50}
    ],
    "valid": true
  },
  "icon": "fa fa-trophy",
  "isAutomatic": true,
  "state": 1,
  "access": 1
}
```

### Activity Rule Entry

Activity rules tell Sociable that a given event name is allowed to push
items into the activity stream and which layout to render them with.
Without a rule, calls to `activities()->push('com_myext.action', ...)`
silently fail.

```json
{
  "name": "com_myext.article.create",
  "assetName": "com_myext",
  "title": "New Article",
  "description": "Activity emitted when a user publishes an article.",
  "uiLayout": "activity.layouts.article",
  "state": 1,
  "access": 1,
  "language": "*"
}
```

## Programmatic Registration

If you can't ship a JSON file (e.g. you're generating rules at runtime),
register them directly through the Rule Engine. These calls are also
idempotent — registering an existing rule updates it.

```php
$sociable = \Joomla\Component\Sociable\Administrator\SDK\Sociable::getInstance();
$engine   = $sociable->ruleEngine();

$engine->registerPointsRule([
    'name'         => 'com_myext.article.publish',
    'asset_name'   => 'com_myext',
    'title'        => 'Publish Article',
    'description'  => 'Points awarded when user publishes an article.',
    'points'       => 10,
    'type'         => 'earn',
    'state'        => 1,
    'auto_approve' => 1,
    'access'       => 1,
]);

$engine->registerBadgeRule([
    'name'         => 'com_myext.author.prolific',
    'asset_name'   => 'com_myext',
    'title'        => 'Prolific Author',
    'description'  => 'Awarded for publishing 50 articles.',
    'rule_content' => [
        'condition' => 'AND',
        'rules' => [
            ['field' => 'articles', 'operator' => 'greater_or_equal', 'value' => 50],
        ],
    ],
    'image_path'   => 'media/com_myext/badges/prolific.png',
    'state'        => 1,
    'access'       => 1,
]);
```

## Triggering Rules at Runtime

Once rules are registered, fire them from your plugin event handlers:

```php
$sociable = \Joomla\Component\Sociable\Administrator\SDK\Sociable::getInstance();

// Award points (uses limits/cooldown from the rule).
$sociable->points()->award('com_myext.article.publish', $userId, [
    'reference'   => 'article_' . $articleId,
    'description' => 'Published "' . $article->title . '"',
]);

// Evaluate a badge against current user values.
$sociable->badges()->trigger('com_myext.author.prolific', [
    'articles' => $userArticleCount,
], $userId);

// Push an activity into the stream.
$sociable->activities()->push(
    'com_myext.article.create',
    $article->title,
    mb_substr(strip_tags($article->introtext), 0, 280),
    $userId,
    ['item_id' => (int) $article->id, 'visibility' => 'public']
);
```

## Legacy XML Import

The historical XML format is still supported for importing existing rule
catalogs. New extensions should use `sociable_rules.json` instead.

```php
$result = $sociable->ruleEngine()->importFromXml(
    JPATH_PLUGINS . '/sociable/myextension/rules.xml'
);
// $result === ['points' => N, 'badges' => N]
```

XML supports `<points_rule>`, `<badge_rule>`, and `<activity_rule>` nodes
matching the JSON entries above.
