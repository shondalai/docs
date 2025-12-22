---
id: rewardify-points-system-api
title: Developer API Documentation
sidebar_label: Developer API
sidebar_position: 7
---

# Rewardify Developer API

Comprehensive guide for integrating Rewardify points system into your custom Joomla extensions.

## Overview

The Rewardify Points System API provides developers with a robust solution to implement gamification features. With just a few API calls, you can award points for user activities, track point history, and retrieve user statistics.

### What You Can Do

- ✅ Award points for custom actions
- ✅ Deduct points for penalties
- ✅ Create custom point rules
- ✅ Retrieve user point data
- ✅ Track point history
- ✅ Integrate with any Joomla extension

### Prerequisites

- Joomla 6.0+
- PHP 8.1+
- Rewardify component installed
- Basic understanding of Joomla MVC

## Quick Start

### 5-Minute Integration

Here's the minimal code to award points:

```php
use Joomla\CMS\Factory;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

// Get the component
$component = Factory::getApplication()->bootComponent('com_rewardify');

// Check if component supports points
if ($component instanceof UserPointsFactoryInterface) {
    // Award points
    $component->getUserPoints()->assign([
        'rule'        => 'com_myextension.action.create',
        'userid'      => $userId,
        'ref'         => $itemId,
        'title'       => 'Created New Item',
        'description' => 'User created a new item',
    ]);
}
```

That's it! Points are now awarded.

---

## Step-by-Step Integration Guide

### Step 1: Define Your Point Rules

Create a JSON file defining the activities your extension supports and how many points each activity should award.

**File Location:**
```
administrator/components/com_myextension/rewardify_rules.json
```

**Example Content:**

```json
{
  "points": [
    {
      "title": "Create New Topic",
      "description": "Points awarded for creating a new forum topic",
      "rule_name": "com_myextension.topic.create",
      "extension": "com_myextension",
      "group_name": "forum",
      "points": "5",
      "published": "1",
      "auto_approve": "1",
      "params": {
        "duplicate_assignments": "0",
        "expires_in": "",
        "expires_on": ""
      },
      "access": "1"
    },
    {
      "title": "Reply to Topic",
      "description": "Points awarded for posting a reply",
      "rule_name": "com_myextension.post.create",
      "extension": "com_myextension",
      "group_name": "forum",
      "points": "2",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    },
    {
      "title": "Best Answer",
      "description": "Points awarded when your answer is marked as best",
      "rule_name": "com_myextension.answer.best",
      "extension": "com_myextension",
      "group_name": "forum",
      "points": "10",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    },
    {
      "title": "Delete Topic",
      "description": "Points deducted when user deletes their topic",
      "rule_name": "com_myextension.topic.delete",
      "extension": "com_myextension",
      "group_name": "forum",
      "points": "-5",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    }
  ]
}
```

#### Field Definitions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Display name of the activity | "Create New Topic" |
| `description` | Yes | What this rule does | "Points awarded for..." |
| `rule_name` | Yes | Unique identifier | "com_myextension.topic.create" |
| `extension` | Yes | Your component name | "com_myextension" |
| `group_name` | Yes | Category for organization | "forum", "community", "article" |
| `points` | Yes | Points to award (negative to deduct) | "5" or "-5" |
| `published` | Yes | Is rule active? | "1" (yes) or "0" (no) |
| `auto_approve` | Yes | Award immediately? | "1" (yes) or "0" (no) |
| `params` | No | Advanced options (JSON) | `{}` |
| `access` | Yes | Joomla access level ID | "1" (Public), "2" (Registered) |

#### Rule Naming Convention

**Format:** `com_extension.entity.action`

**Examples:**
```
com_forum.topic.create
com_forum.post.create
com_forum.post.edit
com_forum.post.delete
com_gallery.photo.upload
com_gallery.photo.comment
com_shop.product.review
com_shop.order.complete
```

#### Group Names

Choose relevant categories:
- `forum` - Forum activities
- `community` - Social networking
- `article` - Content creation
- `commerce` - E-commerce
- `survey` - Surveys and polls
- `quiz` - Quizzes and tests
- `custom` - Custom activities

#### Advanced Parameters

```json
"params": {
  "duplicate_assignments": "1",
  "expires_in": "365",
  "expires_on": "2026-12-31"
}
```

- **duplicate_assignments**: How many times the same ref can earn points (0 = unlimited)
- **expires_in**: Points expire after X days
- **expires_on**: Specific expiration date (YYYY-MM-DD)

#### Installing Rules

Users install your rules by:
1. Going to **Components → Rewardify → Point Rules**
2. Clicking **Scan for Rules**
3. Selecting your extension's rules
4. Clicking **Install**

---

### Step 2: Create a Plugin (Recommended Approach)

The best way to integrate Rewardify is through a plugin using the modern Joomla 6 event system.

#### Plugin Structure

```
plg_system_myextension_rewardify/
├── myextension_rewardify.xml
├── services/
│   └── provider.php
└── src/
    └── Extension/
        └── MyextensionRewardify.php
```

#### Plugin Manifest (myextension_rewardify.xml)

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension group="system" method="upgrade" type="plugin">
    <name>System - MyExtension Rewardify Integration</name>
    <author>Your Name</author>
    <creationDate>2025-12-22</creationDate>
    <copyright>Copyright (C) 2025 Your Company</copyright>
    <license>GNU General Public License version 2 or later</license>
    <version>1.0.0</version>
    <description>Integrates MyExtension with Rewardify points system</description>
    <namespace path="src">Joomla\Plugin\System\MyextensionRewardify</namespace>
    <files>
        <folder plugin="myextension_rewardify">services</folder>
        <folder>src</folder>
    </files>
</extension>
```

#### Service Provider (services/provider.php)

```php
<?php
defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\Database\DatabaseInterface;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Joomla\Plugin\System\MyextensionRewardify\Extension\MyextensionRewardify;

return new class implements ServiceProviderInterface {
    public function register(Container $container): void {
        $container->set(
            PluginInterface::class,
            function (Container $container) {
                $dispatcher = $container->get(DispatcherInterface::class);
                $plugin = new MyextensionRewardify(
                    $dispatcher,
                    (array) PluginHelper::getPlugin('system', 'myextension_rewardify')
                );
                $plugin->setApplication(Factory::getApplication());
                $plugin->setDatabase($container->get(DatabaseInterface::class));
                
                return $plugin;
            }
        );
    }
};
```

#### Plugin Class (src/Extension/MyextensionRewardify.php)

```php
<?php
namespace Joomla\Plugin\System\MyextensionRewardify\Extension;

use Exception;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Database\DatabaseAwareTrait;
use Joomla\Event\DispatcherInterface;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

defined('_JEXEC') or die;

/**
 * MyExtension Rewardify Integration Plugin
 *
 * @since  1.0.0
 */
final class MyextensionRewardify extends CMSPlugin implements SubscriberInterface {
    
    use DatabaseAwareTrait;
    
    /**
     * Load the language file on instantiation.
     *
     * @var    boolean
     */
    protected $autoloadLanguage = true;
    
    /**
     * Constructor.
     *
     * @param   DispatcherInterface  $dispatcher  The event dispatcher
     * @param   array                $config      Plugin configuration
     */
    public function __construct(DispatcherInterface $dispatcher, array $config = []) {
        parent::__construct($dispatcher, $config);
    }
    
    /**
     * Returns an array of events this subscriber will listen to.
     *
     * @return  array
     */
    public static function getSubscribedEvents(): array {
        return [
            'onMyExtensionAfterTopicCreate' => 'onTopicCreate',
            'onMyExtensionAfterPostCreate'  => 'onPostCreate',
            'onMyExtensionAfterBestAnswer'  => 'onBestAnswer',
            'onMyExtensionBeforeTopicDelete' => 'onTopicDelete',
        ];
    }
    
    /**
     * Award points when topic is created
     *
     * @param   Event  $event  The event object
     *
     * @return  void
     */
    public function onTopicCreate(Event $event): void {
        // Get topic data from event
        $topic = $event->getArgument('topic');
        $userId = $event->getArgument('userId');
        
        // Award points
        $this->assignPoints([
            'rule'        => 'com_myextension.topic.create',
            'userid'      => $userId,
            'ref'         => $topic->id,
            'title'       => 'Created Topic: ' . $topic->title,
            'description' => 'User created a new forum topic',
        ]);
    }
    
    /**
     * Award points when post is created
     *
     * @param   Event  $event  The event object
     *
     * @return  void
     */
    public function onPostCreate(Event $event): void {
        $post = $event->getArgument('post');
        $userId = $event->getArgument('userId');
        
        $this->assignPoints([
            'rule'        => 'com_myextension.post.create',
            'userid'      => $userId,
            'ref'         => $post->id,
            'title'       => 'Posted Reply',
            'description' => 'User posted a reply to a topic',
        ]);
    }
    
    /**
     * Award points for best answer
     *
     * @param   Event  $event  The event object
     *
     * @return  void
     */
    public function onBestAnswer(Event $event): void {
        $answerId = $event->getArgument('answerId');
        $userId = $event->getArgument('userId');
        
        $this->assignPoints([
            'rule'        => 'com_myextension.answer.best',
            'userid'      => $userId,
            'ref'         => $answerId,
            'title'       => 'Best Answer',
            'description' => 'Answer was marked as best',
        ]);
    }
    
    /**
     * Deduct points when topic is deleted
     *
     * @param   Event  $event  The event object
     *
     * @return  void
     */
    public function onTopicDelete(Event $event): void {
        $topic = $event->getArgument('topic');
        $userId = $topic->created_by;
        
        $this->assignPoints([
            'rule'        => 'com_myextension.topic.delete',
            'userid'      => $userId,
            'ref'         => $topic->id,
            'title'       => 'Deleted Topic',
            'description' => 'Topic was deleted',
        ]);
    }
    
    /**
     * Helper method to assign points
     *
     * @param   array  $options  Point assignment options
     *
     * @return  void
     */
    private function assignPoints(array $options): void {
        try {
            $component = $this->getApplication()->bootComponent('com_rewardify');
            
            if ($component instanceof UserPointsFactoryInterface) {
                $component->getUserPoints()->assign($options);
            }
        } catch (Exception $e) {
            // Log error silently
            $this->getApplication()->getLogger()->error(
                'Rewardify Integration Error: ' . $e->getMessage()
            );
        }
    }
}
```

---

### Step 3: Award Points from Your Component

If you prefer not to use a plugin, you can award points directly from your component.

#### In Your Model

```php
<?php
namespace MyCompany\Component\MyExtension\Site\Model;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Model\BaseDatabaseModel;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

class TopicModel extends BaseDatabaseModel {
    
    public function save($data) {
        // Your save logic here
        $table = $this->getTable();
        
        if ($table->save($data)) {
            // Award points after successful save
            $this->awardPoints($table);
            return true;
        }
        
        return false;
    }
    
    protected function awardPoints($topic) {
        $app = Factory::getApplication();
        $user = $app->getIdentity();
        
        try {
            $component = $app->bootComponent('com_rewardify');
            
            if ($component instanceof UserPointsFactoryInterface) {
                $component->getUserPoints()->assign([
                    'rule'        => 'com_myextension.topic.create',
                    'userid'      => $user->id,
                    'ref'         => $topic->id,
                    'title'       => 'Created Topic: ' . $topic->title,
                    'description' => 'User created a new forum topic',
                ]);
            }
        } catch (\Exception $e) {
            // Log error but don't break the save operation
            $app->getLogger()->error('Rewardify Error: ' . $e->getMessage());
        }
    }
}
```

#### In Your Controller

```php
<?php
namespace MyCompany\Component\MyExtension\Site\Controller;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\FormController;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

class TopicController extends FormController {
    
    public function save($key = null, $urlVar = null) {
        // Call parent save
        $result = parent::save($key, $urlVar);
        
        if ($result) {
            // Get the saved item ID
            $model = $this->getModel();
            $itemId = $model->getState('topic.id');
            
            // Award points
            $this->awardTopicPoints($itemId);
        }
        
        return $result;
    }
    
    protected function awardTopicPoints($topicId) {
        $app = Factory::getApplication();
        $user = $app->getIdentity();
        
        // Don't award points to guests
        if ($user->guest) {
            return;
        }
        
        try {
            $component = $app->bootComponent('com_rewardify');
            
            if ($component instanceof UserPointsFactoryInterface) {
                $component->getUserPoints()->assign([
                    'rule'        => 'com_myextension.topic.create',
                    'userid'      => $user->id,
                    'ref'         => $topicId,
                    'title'       => 'Created New Topic',
                    'description' => 'User created a forum topic',
                ]);
            }
        } catch (\Exception $e) {
            // Silently log the error
            $app->getLogger()->error('Rewardify: ' . $e->getMessage());
        }
    }
}
```

---

## API Reference

### getUserPoints() Method

Returns the User Points Service for point operations.

**Syntax:**
```php
$userPoints = $component->getUserPoints(array $options = []);
```

**Parameters:**
- `$options` (array) - Optional configuration (usually empty)

**Returns:** `UserPointsInterface`

**Example:**
```php
$component = Factory::getApplication()->bootComponent('com_rewardify');
$userPoints = $component->getUserPoints();
```

---

### assign() Method

Awards or deducts points for a user activity.

**Syntax:**
```php
$userPoints->assign(array $options);
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule` | string | Yes | Unique rule name (e.g., 'com_myext.action.create') |
| `userid` | int | Yes | User ID to award points to |
| `ref` | mixed | Optional | Reference ID to prevent duplicates (e.g., item ID) |
| `title` | string | Optional | Activity title shown to user |
| `description` | string | Optional | Activity description |
| `points` | int | Optional | Override rule points (positive or negative) |

**Returns:** `bool` - True on success, false on failure

**Example - Basic Usage:**
```php
$userPoints->assign([
    'rule'        => 'com_myextension.item.create',
    'userid'      => 123,
    'ref'         => 456,
    'title'       => 'Created New Item',
    'description' => 'User created item #456',
]);
```

**Example - Override Points:**
```php
$userPoints->assign([
    'rule'        => 'com_myextension.purchase.complete',
    'userid'      => $userId,
    'ref'         => $orderId,
    'title'       => 'Completed Purchase',
    'description' => 'Order #' . $orderId,
    'points'      => 100, // Override rule's default points
]);
```

**Example - Deduct Points:**
```php
$userPoints->assign([
    'rule'        => 'com_myextension.violation.spam',
    'userid'      => $userId,
    'ref'         => $reportId,
    'title'       => 'Spam Violation',
    'description' => 'Spamming detected',
    'points'      => -50, // Negative points deduct
]);
```

---

### getUserProfile() Method

Retrieves user's point statistics and profile information.

**Syntax:**
```php
$profile = $userPoints->getUserProfile(int $userId);
```

**Parameters:**
- `$userId` (int) - User ID to fetch profile for

**Returns:** `object` with properties:
- `id` - User ID
- `points` - Total points
- `referrals` - Number of referrals
- `hits` - Profile views
- `referral_id` - Unique referral code

**Example:**
```php
$component = Factory::getApplication()->bootComponent('com_rewardify');
$profile = $component->getUserPoints()->getUserProfile($userId);

echo "User Points: " . $profile->points;
echo "Referrals: " . $profile->referrals;
echo "Referral Code: " . $profile->referral_id;
```

**Example - Display in Template:**
```php
<?php
$app = Factory::getApplication();
$user = $app->getIdentity();

if (!$user->guest) {
    $component = $app->bootComponent('com_rewardify');
    $profile = $component->getUserPoints()->getUserProfile($user->id);
    ?>
    <div class="user-points">
        <span class="points-badge"><?php echo $profile->points; ?> Points</span>
    </div>
    <?php
}
?>
```

---

## Complete Integration Examples

### Example 1: Forum Extension

Complete integration for a forum extension with topics and posts.

```php
<?php
namespace Joomla\Plugin\System\ForumRewardify\Extension;

use Exception;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Database\DatabaseAwareTrait;
use Joomla\Event\DispatcherInterface;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;
use Rewardify\Component\Rewardify\Administrator\Points\UserPointsFactoryInterface;

final class ForumRewardify extends CMSPlugin implements SubscriberInterface {
    
    use DatabaseAwareTrait;
    
    protected $autoloadLanguage = true;
    
    public function __construct(DispatcherInterface $dispatcher, array $config = []) {
        parent::__construct($dispatcher, $config);
    }
    
    public static function getSubscribedEvents(): array {
        return [
            'onForumAfterTopicSave'   => 'handleTopicSave',
            'onForumAfterPostSave'    => 'handlePostSave',
            'onForumAfterBestAnswer'  => 'handleBestAnswer',
            'onForumBeforeTopicDelete' => 'handleTopicDelete',
            'onForumAfterLike'        => 'handleLike',
        ];
    }
    
    public function handleTopicSave(Event $event): void {
        $context = $event->getArgument('context');
        $topic = $event->getArgument('subject');
        $isNew = $event->getArgument('isNew');
        
        // Only award for new topics
        if (!$isNew) {
            return;
        }
        
        $this->awardPoints([
            'rule'        => 'com_forum.topic.create',
            'userid'      => $topic->created_by,
            'ref'         => $topic->id,
            'title'       => 'Created Topic: ' . $topic->title,
            'description' => 'Created a new forum topic',
        ]);
    }
    
    public function handlePostSave(Event $event): void {
        $post = $event->getArgument('post');
        $isNew = $event->getArgument('isNew');
        
        if (!$isNew) {
            return;
        }
        
        $this->awardPoints([
            'rule'        => 'com_forum.post.create',
            'userid'      => $post->created_by,
            'ref'         => $post->id,
            'title'       => 'Posted Reply',
            'description' => 'Replied to a forum topic',
        ]);
    }
    
    public function handleBestAnswer(Event $event): void {
        $postId = $event->getArgument('postId');
        $userId = $event->getArgument('userId');
        
        $this->awardPoints([
            'rule'        => 'com_forum.answer.best',
            'userid'      => $userId,
            'ref'         => $postId,
            'title'       => 'Best Answer',
            'description' => 'Your answer was marked as best',
        ]);
    }
    
    public function handleTopicDelete(Event $event): void {
        $topic = $event->getArgument('topic');
        
        // Deduct points when user deletes their topic
        $this->awardPoints([
            'rule'        => 'com_forum.topic.delete',
            'userid'      => $topic->created_by,
            'ref'         => $topic->id,
            'title'       => 'Deleted Topic',
            'description' => 'Topic was deleted',
        ]);
    }
    
    public function handleLike(Event $event): void {
        $postId = $event->getArgument('postId');
        $postOwnerId = $event->getArgument('postOwnerId');
        
        $this->awardPoints([
            'rule'        => 'com_forum.post.liked',
            'userid'      => $postOwnerId,
            'ref'         => $postId,
            'title'       => 'Post Liked',
            'description' => 'Someone liked your post',
        ]);
    }
    
    private function awardPoints(array $options): void {
        try {
            $component = $this->getApplication()->bootComponent('com_rewardify');
            
            if ($component instanceof UserPointsFactoryInterface) {
                $component->getUserPoints()->assign($options);
            }
        } catch (Exception $e) {
            $this->getApplication()->getLogger()->error(
                'Forum Rewardify Error: ' . $e->getMessage()
            );
        }
    }
}
```

### Example 2: E-commerce Integration

Award points based on purchase amounts.

```php
public function onAfterOrderComplete(Event $event): void {
    $order = $event->getArgument('order');
    
    // Calculate points based on order total
    // Example: 1 point per dollar
    $pointsToAward = floor($order->total);
    
    $this->awardPoints([
        'rule'        => 'com_shop.order.complete',
        'userid'      => $order->user_id,
        'ref'         => $order->id,
        'title'       => 'Purchase Completed',
        'description' => 'Order #' . $order->id . ' - $' . $order->total,
        'points'      => $pointsToAward, // Dynamic points
    ]);
}
```

### Example 3: Quiz/Survey Extension

Award points for completing quizzes.

```php
public function onQuizComplete(Event $event): void {
    $quiz = $event->getArgument('quiz');
    $userId = $event->getArgument('userId');
    $score = $event->getArgument('score');
    
    // Base points plus bonus for high scores
    $basePoints = 10;
    $bonusPoints = $score >= 90 ? 20 : 0;
    $totalPoints = $basePoints + $bonusPoints;
    
    $this->awardPoints([
        'rule'        => 'com_quiz.quiz.complete',
        'userid'      => $userId,
        'ref'         => $quiz->id,
        'title'       => 'Completed Quiz: ' . $quiz->title,
        'description' => 'Score: ' . $score . '%',
        'points'      => $totalPoints,
    ]);
}
```

---

## Best Practices

### 1. Always Use Try-Catch

Wrap Rewardify calls in try-catch to prevent breaking your extension:

```php
try {
    $component = $app->bootComponent('com_rewardify');
    if ($component instanceof UserPointsFactoryInterface) {
        $component->getUserPoints()->assign($options);
    }
} catch (Exception $e) {
    // Log but don't break functionality
    $app->getLogger()->error('Rewardify: ' . $e->getMessage());
}
```

### 2. Check instanceof

Always verify the component supports the interface:

```php
if ($component instanceof UserPointsFactoryInterface) {
    // Safe to call getUserPoints()
}
```

### 3. Use Unique Rule Names

Prefix with your extension name:

```php
✅ Good: 'com_myextension.action.create'
❌ Bad: 'create' (conflicts with other extensions)
```

### 4. Provide Meaningful Titles

Help users understand why they earned points:

```php
✅ Good: 'Created Topic: How to Install Joomla'
❌ Bad: 'Topic Created'
```

### 5. Use Reference IDs

Prevent duplicate awards for the same activity:

```php
$userPoints->assign([
    'rule'   => 'com_myext.item.create',
    'userid' => $userId,
    'ref'    => $itemId, // Prevents duplicate awards for same item
]);
```

### 6. Don't Award Points to Guests

Always check user is logged in:

```php
$user = Factory::getApplication()->getIdentity();
if ($user->guest) {
    return; // No points for guests
}
```

### 7. Log Errors Appropriately

Use Joomla's logger, don't show errors to users:

```php
catch (Exception $e) {
    $app->getLogger()->error('Rewardify: ' . $e->getMessage());
    // Don't throw or display error
}
```

### 8. Use Appropriate Point Values

Start conservative and adjust:

```php
Low-value actions: 1-2 points (likes, views)
Medium-value actions: 5-10 points (posts, comments)
High-value actions: 20-50 points (best answers, achievements)
Very high-value: 100+ points (purchases, contests)
```

---

## Advanced Techniques

### Conditional Points

Award different points based on conditions:

```php
public function awardPostPoints($post) {
    // Base points
    $points = 2;
    
    // Bonus for long posts
    if (strlen($post->text) > 500) {
        $points += 3;
    }
    
    // Bonus for posts with images
    if ($post->has_images) {
        $points += 2;
    }
    
    $this->assignPoints([
        'rule'   => 'com_forum.post.create',
        'userid' => $post->user_id,
        'ref'    => $post->id,
        'title'  => 'Posted Reply',
        'points' => $points, // Dynamic calculation
    ]);
}
```

### Multiplier System

Award multipliers for special events:

```php
public function awardWithMultiplier($basePoints, $userId, $options) {
    // Check for active promotions
    $multiplier = $this->getActiveMultiplier(); // e.g., 2x points weekend
    
    $finalPoints = $basePoints * $multiplier;
    
    $options['points'] = $finalPoints;
    $this->assignPoints($options);
}
```

### Bulk Point Awards

Award points to multiple users:

```php
public function awardContestWinners($winners) {
    $component = $this->getApplication()->bootComponent('com_rewardify');
    
    if (!$component instanceof UserPointsFactoryInterface) {
        return;
    }
    
    $userPoints = $component->getUserPoints();
    
    foreach ($winners as $position => $userId) {
        $points = match($position) {
            1 => 100, // First place
            2 => 50,  // Second place
            3 => 25,  // Third place
            default => 10 // Participation
        };
        
        try {
            $userPoints->assign([
                'rule'        => 'com_contest.winner',
                'userid'      => $userId,
                'ref'         => $position,
                'title'       => "Contest Winner - Position #{$position}",
                'description' => 'Monthly contest results',
                'points'      => $points,
            ]);
        } catch (Exception $e) {
            // Log and continue with next user
            $this->getApplication()->getLogger()->error(
                "Failed to award points to user {$userId}: " . $e->getMessage()
            );
        }
    }
}
```

### Point Expiration

Set expiring points for limited-time offers:

```php
// Points expire in 30 days
$expiresIn = 30;

// Or specific date
$expiresOn = '2026-12-31';

// Configure in rule's params
"params": {
    "expires_in": "30",
    "expires_on": "2026-12-31"
}
```

---

## Debugging

### Enable Logging

```php
use Joomla\CMS\Log\Log;

// Add to your plugin/component
Log::add('Attempting to award points...', Log::DEBUG, 'rewardify');
Log::add('Rule: ' . $rule, Log::DEBUG, 'rewardify');
Log::add('User ID: ' . $userId, Log::DEBUG, 'rewardify');

try {
    $result = $userPoints->assign($options);
    Log::add('Points awarded successfully: ' . ($result ? 'true' : 'false'), Log::DEBUG, 'rewardify');
} catch (Exception $e) {
    Log::add('Error: ' . $e->getMessage(), Log::ERROR, 'rewardify');
}
```

### Check if Rewardify is Installed

```php
if (!file_exists(JPATH_ADMINISTRATOR . '/components/com_rewardify')) {
    // Rewardify not installed
    return;
}

// Or check if component can be loaded
try {
    $component = $app->bootComponent('com_rewardify');
} catch (Exception $e) {
    // Component not available
    return;
}
```

### Verify Point Rules Exist

```php
$db = Factory::getContainer()->get('DatabaseDriver');
$query = $db->getQuery(true)
    ->select('COUNT(*)')
    ->from($db->quoteName('#__rewardify_points_rules'))
    ->where($db->quoteName('rule_name') . ' = :rule')
    ->bind(':rule', $ruleName);

$db->setQuery($query);
$exists = (int) $db->loadResult();

if (!$exists) {
    Log::add("Rule '{$ruleName}' does not exist", Log::WARNING, 'rewardify');
}
```

---

## Testing Your Integration

### Manual Testing

1. **Install your rules**
   - Go to Components → Rewardify → Point Rules
   - Click "Scan for Rules"
   - Install your extension's rules

2. **Enable your plugin** (if using plugin approach)
   - Go to System → Plugins
   - Find and enable your Rewardify plugin

3. **Perform the action**
   - Execute the activity that should award points
   - Example: Create a forum topic

4. **Verify points awarded**
   - Go to Components → Rewardify → Points
   - Filter by user
   - Check for new point entry

5. **Check point total**
   - Go to Components → Rewardify → User Points
   - Verify user's total points increased

### Automated Testing

```php
use PHPUnit\Framework\TestCase;

class RewardifyIntegrationTest extends TestCase {
    
    public function testPointsAwardedOnTopicCreate() {
        // Get user's initial points
        $component = Factory::getApplication()->bootComponent('com_rewardify');
        $profile = $component->getUserPoints()->getUserProfile($userId);
        $initialPoints = $profile->points;
        
        // Create a topic (triggers point award)
        $topic = $this->createTestTopic();
        
        // Get updated points
        $profile = $component->getUserPoints()->getUserProfile($userId);
        $newPoints = $profile->points;
        
        // Assert points increased
        $this->assertGreaterThan($initialPoints, $newPoints);
        $this->assertEquals($initialPoints + 5, $newPoints); // Assuming 5 points for topic
    }
}
```

---

## Troubleshooting

### Points Not Being Awarded

**Checklist:**
- [ ] Rewardify component is installed
- [ ] Point rule exists and is published
- [ ] Plugin is enabled (if using plugin)
- [ ] User is not a guest
- [ ] User has correct access level
- [ ] Rule name matches exactly
- [ ] No PHP errors in log
- [ ] instanceof check passes

**Debug Code:**
```php
// Add debugging
$app = Factory::getApplication();
$app->enqueueMessage('Attempting to award points...', 'info');

try {
    $component = $app->bootComponent('com_rewardify');
    $app->enqueueMessage('Component loaded', 'success');
    
    if ($component instanceof UserPointsFactoryInterface) {
        $app->enqueueMessage('Interface check passed', 'success');
        
        $result = $component->getUserPoints()->assign($options);
        $app->enqueueMessage('Points awarded: ' . ($result ? 'YES' : 'NO'), 
            $result ? 'success' : 'error');
    } else {
        $app->enqueueMessage('Component does not implement interface', 'error');
    }
} catch (Exception $e) {
    $app->enqueueMessage('Error: ' . $e->getMessage(), 'error');
}
```

### Component Not Found

```php
// Check if Rewardify is installed
if (!ComponentHelper::isEnabled('com_rewardify')) {
    // Rewardify is not installed or disabled
    return;
}
```

### Rule Not Found

Verify rule is installed:
1. Go to Components → Rewardify → Point Rules
2. Search for your rule name
3. Check if it's published
4. Verify rule name matches exactly (case-sensitive)

---

## Migration from Older Versions

If you're updating from older Rewardify integration code:

### Old Code (Pre-Joomla 6)
```php
// Old approach
$app->triggerEvent('onRewardifyAwardPoints', [$options]);
```

### New Code (Joomla 6)
```php
// New approach
$component = $app->bootComponent('com_rewardify');
if ($component instanceof UserPointsFactoryInterface) {
    $component->getUserPoints()->assign($options);
}
```

---

## Support & Resources

### Getting Help

- 📖 **Documentation:** [Complete Rewardify docs](overview.md)
- 💬 **Forum:** https://shondalai.com/forums/
- 📧 **Email:** https://shondalai.com/get-support/

### Example Plugins

Reference these official Rewardify plugins:
- `plg_user_rewardify` - User registration and login
- `plg_content_rewardify` - Article activities
- `plg_communitybuilder_rewardify` - Community Builder integration

### Contributing

Have a great integration example? Share it with the community!

---

**API Version:** 1.2.0  
**Last Updated:** December 2025  
**Joomla Compatibility:** 6.0+
