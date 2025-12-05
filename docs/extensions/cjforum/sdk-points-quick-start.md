---
id: sdk-points-quick-start
title: Points System SDK Quick Start
sidebar_label: Points SDK Quick Start
sidebar_position: 3
---

# Points System SDK Quick Start

Learn how to integrate CjForum Points System into your Joomla extension to award points, create leaderboards, and track user achievements.

## Prerequisites

- CjForum 6.0+ installed
- Joomla 4.0+ 
- PHP 7.4+

## Basic Usage

### 1. Award Points to Users

Award points to users for specific actions in your extension:

```php
use Joomla\Component\CjForum\Site\CjForum;

// Award points for a specific action
CjForum::points()->awardPoints(
    'com_mycomponent.new_article',  // Rule ID
    $userId,                          // User ID (0 = current user)
    10                                // Points (0 = use rule default)
);
```

### 2. Get User Points

Retrieve total points for one or multiple users:

```php
// Get total points for a user
$total = CjForum::points()->getUserPoints($userId);

// Get points for multiple users (optimized)
$userIds = [42, 43, 44];
$points = CjForum::points()->getUserPoints($userIds);
// Returns: [42 => 150, 43 => 200, 44 => 75]
```

### 3. Get Points History

Retrieve transaction history for a user:

```php
// Get last 20 transactions
$history = CjForum::points()->getPointsHistory($userId, 20);

foreach ($history as $transaction) {
    echo $transaction['title'] . ': ' . $transaction['points'] . ' points';
}
```

### 4. Get Top Users

Display a leaderboard of top users by points:

```php
// Get top 10 users by points
$topUsers = CjForum::points()->getTopUsers(10);

foreach ($topUsers as $user) {
    echo $user['name'] . ': ' . $user['points'] . ' points';
}
```

### 5. Get User Rank

Find out a user's ranking position:

```php
// Get user's rank position
$rank = CjForum::points()->getUserRank($userId);
echo "User rank: #{$rank}";
```

### 6. Get Points Statistics

Retrieve detailed statistics about a user's points:

```php
$stats = CjForum::points()->getPointsStats($userId);

echo "Total Earned: " . $stats['total_earned'];
echo "Total Spent: " . $stats['total_spent'];
echo "Net Points: " . $stats['net_points'];
echo "Rank: #" . $stats['rank'];
```

## Advanced Usage

### Register Points Rules from XML

Create `administrator/components/com_mycomponent/cjforum_rules.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
    <points_rule>
        <name>com_mycomponent.create_item</name>
        <appname>com_mycomponent</appname>
        <title>Create Item</title>
        <description>Points for creating a new item</description>
        <points>10</points>
        <state>1</state>
        <auto_approve>1</auto_approve>
        <access>1</access>
    </points_rule>
    
    <points_rule>
        <name>com_mycomponent.featured_item</name>
        <appname>com_mycomponent</appname>
        <title>Featured Item</title>
        <description>Bonus points for featured items</description>
        <points>50</points>
        <state>1</state>
        <auto_approve>1</auto_approve>
        <access>1</access>
    </points_rule>
</cjforum>
```

Then register it in your component:

```php
$xmlPath = JPATH_ADMINISTRATOR . '/components/com_mycomponent/cjforum_rules.xml';
CjForum::points()->registerRulesFromXml($xmlPath);
```

### Prevent Duplicate Awards

Use a reference ID to ensure points are awarded only once:

```php
// Award points only once per article read
CjForum::points()->awardPoints(
    'com_mycomponent.read_article',
    $userId,
    5,
    $articleId  // Reference prevents duplicate awards
);

// Check if already awarded
if (CjForum::points()->hasReceivedPoints($userId, 'com_mycomponent.read_article', $articleId)) {
    echo 'Points already awarded for this article';
}
```

### Batch Prefetch (Performance)

When displaying lists with points, use prefetch for better performance:

```php
// When displaying a list
$userIds = array_column($items, 'user_id');
CjForum::points()->prefetchUserPoints($userIds);

// Now these calls are instant (cached)
foreach ($items as $item) {
    $points = CjForum::points()->getUserPoints($item->user_id);
}
```

## Real-World Examples

### Example 1: Blog Component Integration

```php
<?php
namespace Joomla\Component\MyBlog\Site\Controller;

use Joomla\CMS\MVC\Controller\FormController;
use Joomla\Component\CjForum\Site\CjForum;

class ArticleController extends FormController
{
    public function save($key = null, $urlVar = null)
    {
        $result = parent::save($key, $urlVar);
        
        if ($result && CjForum::isAvailable())
        {
            $articleId = $this->input->getInt('id');
            $userId = $this->app->getIdentity()->id;
            
            // Award points for creating article
            CjForum::points()->awardPoints(
                'com_myblog.create_article',
                $userId,
                10,  // 10 points
                $articleId  // Prevent duplicate awards
            );
            
            // Award bonus for featured articles
            if ($this->input->getBool('featured')) {
                CjForum::points()->awardPoints(
                    'com_myblog.featured_article',
                    $userId,
                    50,  // 50 bonus points
                    'featured_' . $articleId
                );
            }
        }
        
        return $result;
    }
}
```

### Example 2: Display User Card with Points

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $profileApi = CjForum::profile();
    $pointsApi = CjForum::points();
    
    $profile = $profileApi->getProfile($userId);
    $points = $pointsApi->getUserPoints($userId);
    $rank = $pointsApi->getUserRank($userId);
    $stats = $pointsApi->getPointsStats($userId);
?>
    <div class="user-card">
        <?php echo $profileApi->getAvatar($userId, 96); ?>
        <h3><?php echo $profileApi->getProfileLink($userId); ?></h3>
        <div class="user-stats">
            <div class="stat">
                <span class="label">Points</span>
                <span class="value"><?php echo number_format($points); ?></span>
            </div>
            <div class="stat">
                <span class="label">Rank</span>
                <span class="value">#<?php echo $rank; ?></span>
            </div>
            <div class="stat">
                <span class="label">Total Earned</span>
                <span class="value"><?php echo number_format($stats['total_earned']); ?></span>
            </div>
        </div>
    </div>
<?php endif; ?>
```

### Example 3: Leaderboard Module

```php
<?php
namespace Joomla\Module\Leaderboard\Site\Helper;

use Joomla\CMS\Factory;
use Joomla\Component\CjForum\Site\CjForum;

class LeaderboardHelper
{
    public static function getTopUsers($params)
    {
        if (!CjForum::isAvailable()) {
            return [];
        }
        
        $pointsApi = CjForum::points();
        $profileApi = CjForum::profile();
        
        $limit = (int) $params->get('limit', 10);
        $topUsers = $pointsApi->getTopUsers($limit);
        
        // Prefetch profiles for better performance
        $userIds = array_column($topUsers, 'id');
        $profileApi->prefetchProfiles($userIds);
        
        // Enhance with profile data
        foreach ($topUsers as &$user) {
            $profile = $profileApi->getProfile($user['id']);
            $user['avatar'] = $profileApi->getAvatar($user['id'], 48);
            $user['profile_link'] = $profileApi->getProfileLink($user['id']);
        }
        
        return $topUsers;
    }
}
```

### Example 4: Points History Display

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $pointsApi = CjForum::points();
    $history = $pointsApi->getPointsHistory($userId, 20);
?>
    <div class="points-history">
        <h3>Points History</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($history as $transaction): ?>
                    <tr>
                        <td><?php echo JHtml::_('date', $transaction['created'], 'DATE_FORMAT_LC3'); ?></td>
                        <td>
                            <strong><?php echo $transaction['title']; ?></strong>
                            <?php if (!empty($transaction['description'])): ?>
                                <br><small><?php echo $transaction['description']; ?></small>
                            <?php endif; ?>
                        </td>
                        <td class="<?php echo $transaction['points'] > 0 ? 'text-success' : 'text-danger'; ?>">
                            <?php echo $transaction['points'] > 0 ? '+' : ''; ?>
                            <?php echo $transaction['points']; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
<?php endif; ?>
```

### Example 5: Award Points in Plugin

```php
<?php
namespace Joomla\Plugin\Content\Pointsreward\Extension;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\CjForum\Site\CjForum;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

class Pointsreward extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onContentAfterSave' => 'onContentAfterSave',
        ];
    }
    
    public function onContentAfterSave(Event $event)
    {
        if (!CjForum::isAvailable()) {
            return;
        }
        
        [$context, $article, $isNew] = $event->getArguments();
        
        if ($context !== 'com_content.article' || !$isNew) {
            return;
        }
        
        $pointsApi = CjForum::points();
        
        // Award points for publishing article
        $pointsApi->awardPoints(
            'com_content.publish_article',
            $article->created_by,
            10,
            $article->id
        );
        
        // Award bonus for featured articles
        if ($article->featured) {
            $pointsApi->awardPoints(
                'com_content.featured_article',
                $article->created_by,
                25,
                'featured_' . $article->id
            );
        }
    }
}
```

## Performance Best Practices

### ✅ DO: Prefetch for Lists

```php
// Prefetch all points at once
$userIds = array_column($items, 'user_id');
$pointsApi->prefetchUserPoints($userIds);

foreach ($items as $item) {
    $points = $pointsApi->getUserPoints($item->user_id);
}
```

### ✅ DO: Request Multiple Users at Once

```php
// Get points for multiple users
$points = $pointsApi->getUserPoints([42, 43, 44]);
```

### ❌ DON'T: Make Individual Calls in Loops

```php
// This makes N queries - BAD!
foreach ($items as $item) {
    $points = $pointsApi->getUserPoints($item->user_id);
}
```

### ✅ DO: Use Reference IDs

```php
// Always use reference to prevent duplicate awards
$pointsApi->awardPoints(
    'com_mycomponent.action',
    $userId,
    10,
    $uniqueReference  // e.g., article ID, comment ID, etc.
);
```

### ✅ DO: Check Availability Once

```php
if (CjForum::isAvailable()) {
    $pointsApi = CjForum::points();
    
    // Multiple operations
    $pointsApi->awardPoints(...);
    $points = $pointsApi->getUserPoints($userId);
}
```

## Common Patterns

### Pattern 1: Reward System

```php
// Award points for various actions
$actions = [
    'read_article' => 1,
    'comment' => 3,
    'like' => 2,
    'share' => 5,
    'create_article' => 10,
];

foreach ($actions as $action => $points) {
    $pointsApi->awardPoints(
        "com_mycomponent.{$action}",
        $userId,
        $points,
        $referenceId
    );
}
```

### Pattern 2: Conditional Bonuses

```php
// Award bonus based on conditions
$basePoints = 10;
$bonusPoints = 0;

if ($quality === 'high') {
    $bonusPoints += 20;
}

if ($isFirstPost) {
    $bonusPoints += 50;
}

$pointsApi->awardPoints(
    'com_mycomponent.create_item',
    $userId,
    $basePoints + $bonusPoints,
    $itemId
);
```

### Pattern 3: Achievements

```php
// Check milestones and award achievements
$totalPoints = $pointsApi->getUserPoints($userId);

$milestones = [
    100 => 'Bronze',
    500 => 'Silver',
    1000 => 'Gold',
    5000 => 'Platinum',
];

foreach ($milestones as $threshold => $badge) {
    if ($totalPoints >= $threshold) {
        // Award achievement badge
        $pointsApi->awardPoints(
            "com_mycomponent.achievement_{$badge}",
            $userId,
            0,
            "badge_{$badge}_{$userId}"
        );
    }
}
```

## Error Handling

```php
try {
    if (!CjForum::isAvailable()) {
        // CjForum not installed - skip points
        return;
    }
    
    $pointsApi = CjForum::points();
    
    // Check if rule exists
    if (!$pointsApi->ruleExists('com_mycomponent.action')) {
        error_log('Points rule not found: com_mycomponent.action');
        return;
    }
    
    // Award points
    $success = $pointsApi->awardPoints(
        'com_mycomponent.action',
        $userId,
        10,
        $referenceId
    );
    
    if (!$success) {
        error_log('Failed to award points');
    }
    
} catch (\RuntimeException $e) {
    error_log('CjForum SDK error: ' . $e->getMessage());
} catch (\Exception $e) {
    error_log('Unexpected error: ' . $e->getMessage());
}
```

## Next Steps

- **[Activity Stream SDK](sdk-stream-quick-start)** - Push activities to the stream
- **[Profile System SDK](sdk-profile-quick-start)** - User profiles and avatars
- **[Complete API Reference](sdk-integration-guide)** - Detailed documentation
- **[Migration Guide](sdk-migration-guide)** - Upgrade from legacy API

## API Reference Quick Links

| Method | Description |
|--------|-------------|
| `awardPoints()` | Award points to a user |
| `getUserPoints()` | Get user's total points |
| `getPointsHistory()` | Get transaction history |
| `getUserRank()` | Get user's rank position |
| `getTopUsers()` | Get leaderboard |
| `getPointsStats()` | Get detailed statistics |
| `registerRulesFromXml()` | Register rules from XML |
| `hasReceivedPoints()` | Check if already awarded |
| `prefetchUserPoints()` | Batch load points |

See the [Complete Integration Guide](sdk-integration-guide#points-system-api) for full API reference.

## Support

- **Documentation**: https://docs.shondalai.com/cjforum/overview
- **Forum**: https://shondalai.com/get-support/

