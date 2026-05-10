---
id: rewardify-points-system-api
title: Developer API Documentation
sidebar_label: Developer API
sidebar_position: 7
---

# Rewardify Developer API

Comprehensive guide for integrating the Rewardify points system into your custom Joomla extensions.

> **Compatibility note (Rewardify 2.0+).** Rewardify 2.0 ships **two** developer APIs:
>
> - **Legacy SDK** (`UserPointsFactoryInterface` / `getUserPoints()->assign()`) — preserved byte-for-byte from Rewardify 1.x. Existing third-party plugins continue to work without any code change.
> - **Modern SDK facade** (`Rewardify::points()->award(...)`) — introduced in 2.0, recommended for new integrations. Cleaner, typed, gracefully degrades when Rewardify isn't installed, and exposes the full feature set (badges, profile, expiry, anti-abuse, rule sync).
>
> Both APIs talk to the same service layer, so anti-abuse caps, badge progression, expiry, activity logging and email notifications are applied identically — pick whichever shape fits your code.

---

## Overview

The Rewardify Points System API lets developers add gamification to any Joomla extension with a few lines of code: award points for activities, deduct for penalties, track history, retrieve user statistics, and award badges.

### What you can do

- ✅ Award points for custom actions
- ✅ Deduct points for penalties
- ✅ Award badges (idempotent, with bonus points)
- ✅ Create custom point rules
- ✅ Retrieve user profile (points, tier, streak, badges, rank)
- ✅ Read the activity stream
- ✅ Integrate with any Joomla extension

### Prerequisites

- Joomla 6.0+
- PHP 8.1+
- Rewardify component **2.0** or later installed
- Basic understanding of Joomla MVC

---

## Quick start (Modern SDK — recommended)

The shortest path to integration in Rewardify 2.0:

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

if (Rewardify::isAvailable()) {
    Rewardify::points()->award($userId, 'com_myforum.topic.create', $topicId, 'Created topic: ' . $title);
}
```

That's it. Every anti-abuse check (rate limit, frequency cap, duplicate-assignment cap, daily user cap, cooldown, suspicious throttle) runs automatically; the activity stream, user total, badge progression, and any per-rule email notification follow.

### Quick start (Legacy SDK — still supported)

```php
use Joomla\CMS\Factory;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

$component = Factory::getApplication()->bootComponent('com_rewardify');

if ($component instanceof UserPointsFactoryInterface) {
    $component->getUserPoints()->assign([
        'rule'        => 'com_myforum.topic.create',
        'userid'      => $userId,
        'ref'         => $topicId,
        'title'       => 'Created topic',
        'description' => 'User started a new forum topic',
    ]);
}
```

This calls into the same service layer as the modern SDK. The interfaces (`UserPointsFactoryInterface`, `UserPointsInterface`, `UserPointsServiceTrait`) live in `Rewardify\Component\Rewardify\Administrator\Points` exactly where 1.x put them.

---

## Step-by-step integration guide

### Step 1 — Define your point rules

Create a JSON file describing the activities your extension supports.

**Path:** `administrator/components/com_myextension/rewardify_rules.json`

```json
{
  "points": [
    {
      "title": "Create New Topic",
      "description": "Points awarded for creating a new forum topic",
      "rule_name": "com_myforum.topic.create",
      "extension": "com_myforum",
      "group_name": "forum",
      "points": "5",
      "published": "1",
      "auto_approve": "1",
      "params": {
        "cap": "5/day",
        "duplicate_max": "0",
        "expires_in_days": "0",
        "expires_on": "",
        "show_message": "1",
        "custom_message": "You earned {points} for starting a new topic!",
        "email_notify": "0"
      },
      "access": "1"
    },
    {
      "title": "Reply to Topic",
      "description": "Points awarded for posting a reply",
      "rule_name": "com_myforum.post.create",
      "extension": "com_myforum",
      "group_name": "forum",
      "points": "2",
      "published": "1",
      "auto_approve": "1",
      "params": { "cap": "20/day" },
      "access": "1"
    },
    {
      "title": "Best Answer",
      "description": "Points awarded when your answer is marked best",
      "rule_name": "com_myforum.answer.best",
      "extension": "com_myforum",
      "group_name": "forum",
      "points": "10",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    }
  ]
}
```

#### Field reference

| Field           | Required | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| `title`         | Yes      | Display name of the activity                                 |
| `description`   | Yes      | What this rule does                                          |
| `rule_name`     | Yes      | Unique dotted id, e.g. `com_myext.entity.action`             |
| `extension`     | Yes      | Component element, e.g. `com_myforum`                        |
| `group_name`    | Yes      | UI grouping (`forum`, `community`, `articles`, `commerce`, …) |
| `points`        | Yes      | Default points (negative to deduct)                          |
| `published`     | Yes      | `"1"` enabled, `"0"` disabled                                |
| `auto_approve`  | Yes      | `"1"` award immediately, `"0"` admin must approve            |
| `access`        | Yes      | Joomla access-level id (`1` Public, `2` Registered, …)       |
| `params`        | No       | Extra options (see below)                                    |

#### `params` object (Rewardify 2.0)

| Key                | Type   | Effect                                                              |
| ------------------ | ------ | ------------------------------------------------------------------- |
| `cap`              | string | Frequency cap: `none`, `once`, `5/day`, `1/year`                    |
| `duplicate_max`    | int    | Max awards per `(user, ref_id)` tuple                               |
| `expires_in_days`  | int    | Awarded points expire after N days                                  |
| `expires_on`       | string | Hard expiry date (`YYYY-MM-DD`)                                     |
| `show_message`     | bool   | Render a toast in the user's UI on award                            |
| `custom_message`   | string | Toast template, supports `{points}` placeholder                     |
| `email_notify`     | bool   | Email the user every time this rule fires                           |

The legacy 1.x `params.duplicate_assignments` / `params.expires_in` keys are still readable for backward compatibility — Rewardify maps them onto the 2.0 keys above when it sees them.

#### Installing rules

Two paths — pick whichever fits your release flow.

**1. From your component's install/postflight script (recommended for Rewardify 2.0):**

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

public function postflight(string $type, InstallerAdapter $adapter): bool
{
    if (Rewardify::isAvailable()) {
        Rewardify::rules()->syncFromComponent('com_myforum');
        // Or: Rewardify::rules()->syncFromJson($absolutePath);
    }

    return true;
}
```

**2. From the Rewardify admin (legacy, still supported):**

1. Components → Rewardify → Point rules → **Import**
2. Pick your component's `rewardify_rules.json`
3. Save

`syncFromJson()` is **upsert-safe**: new rules are inserted, existing rules keep the admin's points/published/cap settings. You can call it on every plugin update without overwriting site customisations.

---

### Step 2 — Award points

Pick the API shape that fits the rest of your code.

#### Option A — Modern SDK facade

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

// Plain rule-driven award
Rewardify::points()->award($userId, 'com_myforum.topic.create', $topicId);

// With a custom subject for the activity feed
Rewardify::points()->award(
    $userId,
    'com_myforum.topic.create',
    $topicId,
    'Created topic: ' . $title
);

// Award outside of a rule (admin override / dynamic point amount)
Rewardify::points()->awardCustom(
    userId: $userId,
    points: 100,
    reason: 'Order #' . $order->id,
    refId: 'order:' . $order->id
);

// Spend points
$ok = Rewardify::points()->redeem($userId, 2000, 'Newsletter feature');

// Read balance
$pts = Rewardify::points()->balance($userId);
```

Every facade call returns gracefully when Rewardify isn't installed:

- `award()`, `awardCustom()`, `balance()` return `0.0`
- `redeem()` returns `false`

You generally don't need a separate `if (Rewardify::isAvailable())` guard around award calls, but it's useful when you want to avoid building expensive arguments unnecessarily.

#### Option B — Legacy SDK (1.x style)

```php
use Joomla\CMS\Factory;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

$component = Factory::getApplication()->bootComponent('com_rewardify');

if ($component instanceof UserPointsFactoryInterface) {
    $component->getUserPoints()->assign([
        'rule'        => 'com_myforum.topic.create',
        'userid'      => $userId,
        'ref'         => $topicId,
        'title'       => 'Created topic: ' . $title,
        'description' => 'User started a new forum topic',
        // 'points' => 50,  // optional explicit override
    ]);
}
```

The translation table from 1.x options to 2.0 service calls:

| Legacy option   | Modern equivalent                                  |
| --------------- | -------------------------------------------------- |
| `rule`          | `$ruleName` argument to `award()`                  |
| `userid`        | `$userId` argument                                 |
| `ref`           | `$refId` argument                                  |
| `title`         | `$subject` argument                                |
| `description`   | (rule's own description, set in JSON)              |
| `points` (set)  | Routed to `awardCustom()` with the explicit amount |

---

### Step 3 — Award badges

The badge engine is **pluggable**. Built-in criterion types (`points`,
`rule_count`, `streak`, `login_count`, `badge`, `manual`, `all`, `any`)
cover most use cases, and third-party components can register their own
evaluator types — any badge whose `criteria.type` matches will use it.

#### Awarding directly

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

// Award by stable key (idempotent — already-earned badges are skipped).
Rewardify::badges()->awardByKey($userId, 'first-post');

// Or by id.
Rewardify::badges()->awardById($userId, 42);

// Manual progress nudge (0.0 - 1.0). Reaches 1.0 → award fires automatically.
Rewardify::badges()->updateProgress($userId, $badgeId, 0.73);

// Was it earned?
$has = Rewardify::badges()->hasBadge($userId, $badgeId);

// Re-evaluate every published badge for a user (auto-fires after points
// awards / streak advances; call this after your own state changes for
// instant evaluation).
$awarded = Rewardify::badges()->reevaluate($userId);
```

`awardById()` writes a `kind=badge` activity row, awards the bonus points,
queues the celebration overlay for the member's next page tick, and emails
the user via the Shondalai Core library.

#### Shipping badges with your component (JSON sync)

Drop a `rewardify_badges.json` next to your existing `rewardify_rules.json`:

```jsonc
{
  "badges": [
    {
      "key":           "myforum.first-topic",
      "name":          "First Topic",
      "description":   "Started your first forum topic.",
      "tier":          "bronze",
      "icon":          "spark",
      "rarity":        "common",
      "category":      "forum",
      "secret":        false,
      "points_reward": 50,
      "extension":     "com_myforum",
      "criteria":      { "type": "rule_count", "rule": "com_myforum.topic.create", "count": 1 }
    },
    {
      "key":           "myforum.expert",
      "name":          "Forum Expert",
      "description":   "Earned both Wordsmith and Mentor.",
      "tier":          "platinum",
      "icon":          "compass",
      "rarity":        "epic",
      "category":      "forum",
      "points_reward": 1000,
      "criteria":      {
        "type": "all",
        "criteria": [
          { "type": "rule_count", "rule": "com_myforum.answer.best", "count": 50 },
          { "type": "streak",     "days": 30 }
        ]
      }
    }
  ]
}
```

Sync from your install/postflight script:

```php
public function postflight(string $type, InstallerAdapter $adapter): bool
{
    if (Rewardify::isAvailable()) {
        Rewardify::rules()->syncFromComponent('com_myforum');
        Rewardify::badges()->syncFromComponent('com_myforum');
    }
    return true;
}
```

`syncFromJson()` is upsert-safe: new badges insert, existing ones keep
the admin's tweaks.

#### Built-in criterion types

| `type`        | Required fields                              | Optional                       |
| ------------- | -------------------------------------------- | ------------------------------ |
| `manual`      | (none)                                       | (none)                         |
| `points`      | `min: int`                                   | (none)                         |
| `rule_count`  | `rule: string`, `count: int`                 | `since_days: int`              |
| `streak`      | `days: int`                                  | `metric: 'current'\|'longest'` |
| `login_count` | `count: int`                                 | (none)                         |
| `badge`       | `keys: string[]` *or* `ids: int[]`           | (none)                         |
| `all`         | `criteria: Criterion[]` (every must hit 1.0) | (none)                         |
| `any`         | `criteria: Criterion[]` (best of nested)     | (none)                         |

Compound types nest freely.

#### Registering a custom criterion type

For domain-specific criteria, implement `CriterionEvaluatorInterface` and
register it from your plugin:

```php
namespace Joomla\Plugin\System\MyforumRewardify\Badge;

use Joomla\Database\ParameterType;
use Rewardify\Component\Rewardify\Administrator\Badge\CriteriaContextInterface;
use Rewardify\Component\Rewardify\Administrator\Badge\CriterionEvaluatorInterface;

final class SolvedCountEvaluator implements CriterionEvaluatorInterface
{
    public function evaluate(int $userId, array $config, CriteriaContextInterface $ctx): float
    {
        $target = (int) ($config['count'] ?? 0);
        if ($target <= 0) {
            return 0.0;
        }

        $db    = $ctx->db();
        $query = $db->getQuery(true)
            ->select('COUNT(*)')
            ->from($db->quoteName('#__myforum_replies'))
            ->where($db->quoteName('user_id') . ' = :u')
            ->where($db->quoteName('marked_solution') . ' = 1')
            ->bind(':u', $userId, ParameterType::INTEGER);

        return (int) $db->setQuery($query)->loadResult() / $target;
    }
}
```

Register once at boot:

```php
public function onAfterInitialise(): void
{
    if (Rewardify::isAvailable()) {
        Rewardify::badges()->registerEvaluator(
            'com_myforum.solved_count',
            new SolvedCountEvaluator()
        );
    }
}
```

Any badge with `"criteria": {"type": "com_myforum.solved_count", "count": 100}`
now uses your evaluator. The engine is shared site-wide — register once,
use everywhere. Auto-evaluation fires after points awards and streak
advances; for events your component owns, call
`Rewardify::badges()->reevaluate($userId)` after your own state changes.

#### Bulk awarding & revoking

```php
$result = Rewardify::badges()->bulkAward($badgeId, [42, 91, 105]);
// $result === ['success' => 2, 'skipped' => 1]

Rewardify::badges()->revoke($userId, $badgeId);
```

`award()` writes a `kind=badge` activity row, awards the bonus points configured on the badge, and sends the badge-earned email if the Core library is available.

---

### Step 4 — Read user data

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

$user = Rewardify::user($userId);

$profile = $user->profile();   // points, tier_slug, tier_name, streak_current, rank, …
$balance = $user->balance();   // float
$badges  = $user->badges();    // earned + in-progress
$rank    = $user->rank();      // 1-indexed
```

The legacy `getUserProfile()` shape is fully preserved for backward compat:

```php
$profile = $component->getUserPoints()->getUserProfile($userId);
echo $profile->points;
echo $profile->referrals;
echo $profile->referral_id;
```

The object also carries the new fields (`tier_slug`, `tier_name`, `streak_current`, `streak_longest`, `next_tier_*`, `badge_count`) — extra named properties are safe to ignore for legacy callers.

---

### Step 5 — Read the activity stream

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

$recent = Rewardify::activity()->recent(20);                 // last 20 events globally
$mine   = Rewardify::activity()->recent(20, $userId);        // last 20 for one user
```

Each row carries `kind` (`points|badge|streak|system|redeem`), `subject`, `points_delta`, `rule_name`, `created`, plus `user_name`/`user_handle` joined from `#__users`.

---

## Recommended integration shape

The cleanest pattern is a **system plugin** (or a built-in plugin in your component) that subscribes to your component's events and routes them through the Rewardify SDK.

### Plugin manifest (`myforum_rewardify.xml`)

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="system" method="upgrade" version="6.0">
    <name>System - MyForum Rewardify Integration</name>
    <author>Your Name</author>
    <creationDate>2026-04-28</creationDate>
    <license>GNU General Public License version 2 or later</license>
    <version>1.0.0</version>
    <description>Awards Rewardify points for MyForum activities.</description>
    <namespace path="src">Joomla\Plugin\System\MyforumRewardify</namespace>

    <files>
        <folder plugin="myforum_rewardify">services</folder>
        <folder>src</folder>
    </files>
</extension>
```

### Service provider (`services/provider.php`)

```php
<?php
defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Joomla\Plugin\System\MyforumRewardify\Extension\MyforumRewardify;

return new class implements ServiceProviderInterface {
    public function register(Container $container): void
    {
        $container->set(PluginInterface::class, function (Container $c) {
            $plugin = new MyforumRewardify(
                $c->get(DispatcherInterface::class),
                (array) PluginHelper::getPlugin('system', 'myforum_rewardify')
            );
            $plugin->setApplication(Factory::getApplication());
            return $plugin;
        });
    }
};
```

### Plugin class (`src/Extension/MyforumRewardify.php`)

```php
<?php
namespace Joomla\Plugin\System\MyforumRewardify\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

final class MyforumRewardify extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onMyForumAfterTopicCreate'  => 'onTopicCreate',
            'onMyForumAfterPostCreate'   => 'onPostCreate',
            'onMyForumAfterBestAnswer'   => 'onBestAnswer',
            'onMyForumBeforeTopicDelete' => 'onTopicDelete',
        ];
    }

    public function onTopicCreate(Event $event): void
    {
        if (!Rewardify::isAvailable()) {
            return;
        }

        $topic  = $event->getArgument('topic');
        $userId = (int) $event->getArgument('userId');

        Rewardify::points()->award(
            $userId,
            'com_myforum.topic.create',
            (string) $topic->id,
            'Created topic: ' . $topic->title
        );
    }

    public function onPostCreate(Event $event): void
    {
        if (!Rewardify::isAvailable()) {
            return;
        }

        $post = $event->getArgument('post');
        Rewardify::points()->award(
            (int) $post->created_by,
            'com_myforum.post.create',
            (string) $post->id
        );
    }

    public function onBestAnswer(Event $event): void
    {
        if (!Rewardify::isAvailable()) {
            return;
        }

        Rewardify::points()->award(
            (int) $event->getArgument('userId'),
            'com_myforum.answer.best',
            (string) $event->getArgument('postId'),
            'Best answer'
        );
    }

    public function onTopicDelete(Event $event): void
    {
        if (!Rewardify::isAvailable()) {
            return;
        }

        $topic = $event->getArgument('topic');
        Rewardify::points()->award(
            (int) $topic->created_by,
            'com_myforum.topic.delete',
            (string) $topic->id
        );
    }
}
```

The `Rewardify::isAvailable()` guard makes the plugin a no-op when Rewardify isn't installed, so users can install your component standalone without errors.

---

## API Reference

### Modern SDK

Namespace: `Rewardify\Component\Rewardify\Administrator\Sdk`

| Entry point              | Returns       | Purpose                                                          |
| ------------------------ | ------------- | ---------------------------------------------------------------- |
| `Rewardify::isAvailable()`| `bool`        | Component installed and services bootable                        |
| `Rewardify::points()`    | `PointsApi`   | `award`, `awardCustom`, `redeem`, `balance`                      |
| `Rewardify::badges()`    | `BadgesApi`   | `awardByKey`, `awardById`, `hasBadge`, `updateProgress`, `listAll` |
| `Rewardify::user($id)`   | `UserApi`     | `profile`, `balance`, `badges`, `rank`                           |
| `Rewardify::rules()`     | `RulesApi`    | `find`, `syncFromJson`, `syncFromComponent`                      |
| `Rewardify::activity()`  | `ActivityApi` | `recent($limit, $userId = null)`                                 |

#### `PointsApi`

```php
public function award(int $userId, string $ruleName, ?string $refId = null, ?string $subject = null): float
public function awardCustom(int $userId, float $points, string $reason, ?string $refId = null): float
public function redeem(int $userId, float $amount, string $reason, ?string $refId = null): bool
public function balance(int $userId): float
```

#### `BadgesApi`

```php
public function awardByKey(int $userId, string $key): bool
public function awardById(int $userId, int $badgeId): bool
public function hasBadge(int $userId, int $badgeId): bool
public function updateProgress(int $userId, int $badgeId, float $progress): void
public function listAll(array $filters = []): array
```

#### `UserApi`

```php
public function profile(): ?object       // points, tier, streak, rank, …
public function balance(): float
public function badges(): array          // earned + in-progress
public function rank(): int              // 1-indexed
```

#### `RulesApi`

```php
public function find(string $ruleName): ?object
public function syncFromJson(string $absolutePath): array          // {inserted, skipped}
public function syncFromComponent(string $extensionElement): array // {inserted, skipped}
```

#### `ActivityApi`

```php
public function recent(int $limit = 20, ?int $userId = null): array
```

### Legacy SDK (1.x — still supported)

Namespace: `Rewardify\Component\Rewardify\Administrator\Points`

```php
interface UserPointsFactoryInterface
{
    public function getUserPoints(array $options = []): UserPointsInterface;
}

interface UserPointsInterface
{
    public function assign(array $options = []): bool;
    public function getUserProfile(int $userId);
}
```

`assign()` accepts the same `{rule, userid, ref, title, description, points}` keys it always has. Internally, the call is routed to `Rewardify::points()->award()` (or `awardCustom()` when `points` is explicitly set), so all 2.0 features apply.

---

## Best practices

### Always check availability

```php
use Rewardify\Component\Rewardify\Administrator\Sdk\Rewardify;

if (!Rewardify::isAvailable()) {
    return;
}
```

The facade does this internally for every method, but checking up front lets you skip building expensive arguments.

### Use stable, prefixed rule names

```
✅ com_myforum.topic.create
❌ topic.create   (collides with other components)
```

### Always pass a `refId`

It enables the `duplicate_max` cap and lets admins trace awards back to your domain objects.

### Log errors, don't surface them

```php
try {
    Rewardify::points()->award($userId, $rule, $refId);
} catch (\Throwable $e) {
    Factory::getApplication()->getLogger()->error('Rewardify: ' . $e->getMessage());
}
```

The facade itself never throws, but defensive try/catch lets you fail closed if a future version starts surfacing exceptions.

### Don't award points to guests

```php
$user = Factory::getApplication()->getIdentity();
if (!$user || $user->guest) {
    return;
}
```

### Sync rules in postflight, not on every page load

```php
public function postflight(string $type, InstallerAdapter $adapter): bool
{
    if (Rewardify::isAvailable()) {
        Rewardify::rules()->syncFromComponent('com_myforum');
    }
    return true;
}
```

---

## Migration from Rewardify 1.x integrations

**You don't have to migrate** — every 1.x integration continues to work unchanged. The legacy interfaces, namespaces, method names and return shapes are preserved.

That said, here's the side-by-side equivalence so you can modernise at your own pace:

| Task                 | Rewardify 1.x                                          | Rewardify 2.0 (recommended)                              |
| -------------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| Award points         | `$component->getUserPoints()->assign([...])`           | `Rewardify::points()->award($id, $rule, $ref, $title)`   |
| Award custom amount  | `assign(['rule'=>'…','points'=>100,…])`                | `Rewardify::points()->awardCustom($id, 100, $reason)`    |
| Get profile          | `$component->getUserPoints()->getUserProfile($id)`     | `Rewardify::user($id)->profile()`                        |
| Award a badge        | n/a                                                    | `Rewardify::badges()->awardByKey($id, 'first-post')`     |
| Sync rules JSON      | manual via admin UI                                    | `Rewardify::rules()->syncFromComponent('com_myext')`     |
| Read activity stream | direct DB query                                        | `Rewardify::activity()->recent(20, $userId)`             |
| Redeem points        | direct DB write                                        | `Rewardify::points()->redeem($id, 2000, $reason)`        |

---

## Troubleshooting

### Points not being awarded

**Checklist:**
- [ ] Rewardify component is installed and enabled (`Rewardify::isAvailable()` returns `true`)
- [ ] Rule exists, is published, and has positive `points`
- [ ] Plugin is enabled (if using the plugin pattern)
- [ ] User is not a guest
- [ ] Rule's frequency cap / rate-limit / cooldown / daily cap not exceeded
- [ ] No PHP errors in `administrator/logs/rewardify.log.php`

### Component not found

```php
use Joomla\CMS\Component\ComponentHelper;

if (!ComponentHelper::isEnabled('com_rewardify')) {
    // Rewardify not installed or disabled
    return;
}
```

### Rule not found

Verify it's installed:

1. **Components → Rewardify → Point rules**
2. Filter by your `extension_name`
3. If missing, run `Rewardify::rules()->syncFromComponent('com_myext')` from your component's postflight or call admin **Import**.

---

## Support & resources

- 📖 [Complete Rewardify docs](overview.md)
- 💬 [Forum](https://shondalai.com/forums/)
- 📧 [Support](https://shondalai.com/get-support/)

### Reference plugins (shipped with Rewardify)

- `plg_user_rewardify` — user registration & login
- `plg_content_rewardify` — article activities
- `plg_communitybuilder_rewardify` — Community Builder integration
- `plg_sociable_rewardify` — Sociable integration
- `plg_kunena_rewardify` — Kunena forum integration

---

**API version:** 2.0.0
**Last updated:** April 2026
**Joomla compatibility:** 6.0+
