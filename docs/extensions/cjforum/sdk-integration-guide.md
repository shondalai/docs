---
id: sdk-integration-guide
title: Complete SDK Integration Guide
sidebar_label: Complete Integration Guide
sidebar_position: 5
---

# Complete SDK Integration Guide

Comprehensive API reference and integration guide for all CjForum SDKs.

## Table of Contents

- [Profile System API](#profile-system-api)
- [Points System API](#points-system-api)
- [Activity Stream API](#activity-stream-api)
- [Integration Patterns](#integration-patterns)
- [Performance Optimization](#performance-optimization)
- [Error Handling](#error-handling)

## Profile System API

Complete reference for user profiles, avatars, and profile links.

### getProfile()

Get complete user profile data.

**Signature:**
```php
public function getProfile(
    int|array|null $userId = null,
    bool $forPublic = true,
    bool $forceReload = false
): array|null
```

**Parameters:**
- `$userId` - User ID (int), array of IDs, or null for current user
- `$forPublic` - Format for public display (default: true)
- `$forceReload` - Force reload from database (default: false)

**Returns:** Profile array or null if not found

**Example:**
```php
// Single user
$profile = $profileApi->getProfile(42);
// Returns: ['id' => 42, 'name' => 'John Doe', 'username' => 'john', ...]

// Multiple users
$profiles = $profileApi->getProfile([42, 43, 44]);
// Returns: [42 => [...], 43 => [...], 44 => [...]]

// Current user
$myProfile = $profileApi->getProfile();
```

### getAvatar()

Get avatar HTML with optional profile link.

**Signature:**
```php
public function getAvatar(
    int|array $userId,
    int $size = 48,
    array $attributes = [],
    bool $withLink = true
): string|array
```

**Parameters:**
- `$userId` - User ID or array of IDs
- `$size` - Avatar size in pixels (default: 48)
- `$attributes` - HTML attributes for avatar element
- `$withLink` - Include profile link wrapper (default: true)

**Returns:** Avatar HTML string or array of HTML strings

**Example:**
```php
// Basic usage
$avatar = $profileApi->getAvatar(42);
// Returns: <a href="..."><img src="..." alt="John Doe" /></a>

// Custom size
$avatar = $profileApi->getAvatar(42, 128);

// With custom CSS class
$avatar = $profileApi->getAvatar(42, 64, ['class' => 'rounded-circle']);

// Without link
$avatar = $profileApi->getAvatar(42, 48, [], false);

// Multiple users
$avatars = $profileApi->getAvatar([42, 43, 44], 64);
```

### getAvatarUrl()

Get avatar URL only (no HTML).

**Signature:**
```php
public function getAvatarUrl(int|array $userId, int $size = 48): string|array
```

**Example:**
```php
$url = $profileApi->getAvatarUrl(42, 128);
// Returns: "https://example.com/images/avatars/user-42.jpg"
```

### getProfileLink()

Get profile link HTML.

**Signature:**
```php
public function getProfileLink(
    int|array $userId,
    ?string $linkText = null,
    array $attributes = []
): string|array
```

**Parameters:**
- `$userId` - User ID or array of IDs
- `$linkText` - Link text (null = use username)
- `$attributes` - HTML attributes for link element

**Example:**
```php
// Default (uses username)
$link = $profileApi->getProfileLink(42);

// Custom text
$link = $profileApi->getProfileLink(42, 'View Profile');

// With attributes
$link = $profileApi->getProfileLink(42, null, ['class' => 'btn btn-primary']);
```

### searchUsers()

Search for users by name or username.

**Signature:**
```php
public function searchUsers(string $query, int $limit = 10, array $options = []): array
```

**Example:**
```php
$results = $profileApi->searchUsers('john', 5);
// Returns array of matching users
```

### getUserStats()

Get user statistics (topics, replies, points, etc.).

**Signature:**
```php
public function getUserStats(int $userId): ?array
```

**Example:**
```php
$stats = $profileApi->getUserStats(42);
// Returns: ['topics' => 150, 'replies' => 1250, 'points' => 5000, ...]
```

### prefetchProfiles()

Prefetch user profiles for batch operations (performance optimization).

**Signature:**
```php
public function prefetchProfiles(array $userIds): void
```

**Example:**
```php
$userIds = [42, 43, 44, 45];
$profileApi->prefetchProfiles($userIds);

// Now these calls are instant
foreach ($userIds as $userId) {
    $profile = $profileApi->getProfile($userId);
}
```

---

## Points System API

Complete reference for awarding points, leaderboards, and rankings.

### awardPoints()

Award points to a user for a specific rule.

**Signature:**
```php
public function awardPoints(
    string $ruleId,
    int $userId = 0,
    int $points = 0,
    $reference = null,
    ?string $title = null,
    ?string $description = null
): bool
```

**Parameters:**
- `$ruleId` - Unique rule identifier (e.g., 'com_myblog.new_article')
- `$userId` - User ID (0 = current user)
- `$points` - Points amount (0 = use rule default)
- `$reference` - Reference ID to prevent duplicates
- `$title` - Custom title (null = use rule title)
- `$description` - Custom description (null = use rule description)

**Example:**
```php
// Basic usage
$pointsApi->awardPoints('com_myblog.new_article', $userId, 10);

// Prevent duplicate awards
$pointsApi->awardPoints('com_myblog.read_article', $userId, 5, $articleId);

// Custom title and description
$pointsApi->awardPoints(
    'com_myblog.featured_article',
    $userId,
    50,
    null,
    'Featured Article',
    'Your article was featured on the homepage'
);
```

### getUserPoints()

Get user's total points.

**Signature:**
```php
public function getUserPoints(int|array|null $userId = null): int|array
```

**Example:**
```php
// Single user
$total = $pointsApi->getUserPoints(42);

// Multiple users
$points = $pointsApi->getUserPoints([42, 43, 44]);
// Returns: [42 => 150, 43 => 200, 44 => 75]

// Current user
$myPoints = $pointsApi->getUserPoints();
```

### getPointsHistory()

Get user's points history/transactions.

**Signature:**
```php
public function getPointsHistory(
    int $userId = 0,
    int $limit = 20,
    int $offset = 0
): array
```

**Example:**
```php
$history = $pointsApi->getPointsHistory($userId, 20);

foreach ($history as $transaction) {
    echo $transaction['title'] . ': ' . $transaction['points'] . ' points';
}
```

### getUserRank()

Get user's rank position.

**Signature:**
```php
public function getUserRank(int $userId = 0): int
```

**Example:**
```php
$rank = $pointsApi->getUserRank($userId);
echo "User rank: #{$rank}";
```

### getTopUsers()

Get top users by points.

**Signature:**
```php
public function getTopUsers(int $limit = 10): array
```

**Example:**
```php
$topUsers = $pointsApi->getTopUsers(10);

foreach ($topUsers as $user) {
    echo $user['name'] . ': ' . $user['points'] . ' points';
}
```

### registerRulesFromXml()

Register points rules from XML file.

**Signature:**
```php
public function registerRulesFromXml(string $xmlPath): bool
```

**Example XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
    <points_rule>
        <name>com_myblog.create_article</name>
        <appname>com_myblog</appname>
        <title>Create Article</title>
        <description>Points for creating a new article</description>
        <points>10</points>
        <state>1</state>
        <auto_approve>1</auto_approve>
        <access>1</access>
    </points_rule>
</cjforum>
```

**Example:**
```php
$xmlPath = JPATH_ADMINISTRATOR . '/components/com_myblog/cjforum_rules.xml';
$pointsApi->registerRulesFromXml($xmlPath);
```

### prefetchUserPoints()

Prefetch points for multiple users (performance optimization).

**Signature:**
```php
public function prefetchUserPoints(array $userIds): void
```

---

## Activity Stream API

Complete reference for activity feeds, likes, and comments.

### push()

Push an activity to the stream.

**Signature:**
```php
public function push(object $activity): bool
```

**Activity Object Properties:**
- `type` (required) - Activity type (e.g., 'com_myblog.new_article')
- `title` (required) - Activity title
- `description` (required) - Activity description
- `user_id` (optional) - User ID (default: current user)
- `item_id` (optional) - Related item ID
- `parent_id` (optional) - Parent item ID
- `featured` (optional) - Is featured? (default: 0)
- `language` (optional) - Language code (default: '*')
- `length` (optional) - Truncate description to length

**Example:**
```php
$activity = (object) [
    'type' => 'com_myblog.new_article',
    'title' => 'New Article Published',
    'description' => 'User published an article about Joomla',
    'user_id' => $userId,
    'item_id' => $articleId,
    'featured' => 0,
    'length' => 200
];

$streamApi->push($activity);
```

### getStream()

Get activity stream items with filters.

**Signature:**
```php
public function getStream(array $filters = [], int $limit = 20, int $offset = 0): array
```

**Filter Options:**
- `user_id` - Filter by user
- `type` - Filter by activity type
- `item_id` - Filter by item
- `parent_id` - Filter by parent
- `featured` - Show only featured
- `language` - Filter by language

**Example:**
```php
// Get latest activities
$activities = $streamApi->getStream([], 20);

// Filter by type
$articles = $streamApi->getStream(['type' => 'com_myblog.new_article'], 20);

// Filter by user
$userActivities = $streamApi->getStream(['user_id' => 42], 20);

// Multiple filters
$filters = [
    'type' => 'com_myblog.new_article',
    'featured' => true,
    'language' => 'en-GB'
];
$featured = $streamApi->getStream($filters, 10);
```

### likeActivity() / unlikeActivity()

Like or unlike an activity.

**Example:**
```php
// Like an activity
$streamApi->likeActivity($activityId, $userId);

// Unlike an activity
$streamApi->unlikeActivity($activityId, $userId);
```

### addComment()

Add a comment to an activity.

**Signature:**
```php
public function addComment(int $activityId, string $comment, int $userId = 0): int|bool
```

**Example:**
```php
$commentId = $streamApi->addComment($activityId, 'Great article!', $userId);
```

### getComments()

Get comments for an activity.

**Example:**
```php
$comments = $streamApi->getComments($activityId, 20);

foreach ($comments as $comment) {
    echo $comment['author_name'] . ': ' . $comment['description'];
}
```

### registerActivityTypesFromXml()

Register activity types from XML file.

**Example XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
    <activity_type>
        <name>com_myblog.new_article</name>
        <appname>com_myblog</appname>
        <title>New Article</title>
        <alias>new-article</alias>
        <description>User published a new article</description>
        <published>1</published>
        <access>1</access>
        <language>*</language>
    </activity_type>
</cjforum>
```

---

## Integration Patterns

### Pattern 1: Complete Blog Integration

```php
<?php
namespace Joomla\Component\Myblog\Site\Controller;

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
            $title = $this->input->getString('title');
            
            // Award points
            CjForum::points()->awardPoints(
                'com_myblog.create_article',
                $userId,
                10,
                $articleId
            );
            
            // Push to stream
            $activity = (object) [
                'type' => 'com_myblog.new_article',
                'title' => 'New Article Published',
                'description' => $title,
                'item_id' => $articleId
            ];
            CjForum::stream()->push($activity);
        }
        
        return $result;
    }
}
```

### Pattern 2: User Profile Card

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $profileApi = CjForum::profile();
    $pointsApi = CjForum::points();
    
    $profile = $profileApi->getProfile($userId);
    $points = $pointsApi->getUserPoints($userId);
    $rank = $pointsApi->getUserRank($userId);
    $stats = $profileApi->getUserStats($userId);
?>
    <div class="user-card">
        <?php echo $profileApi->getAvatar($userId, 96); ?>
        <h3><?php echo $profileApi->getProfileLink($userId); ?></h3>
        <p><?php echo $this->escape($profile['about']); ?></p>
        <ul class="stats">
            <li>Points: <?php echo $points; ?> (Rank #<?php echo $rank; ?>)</li>
            <li>Topics: <?php echo $stats['topics']; ?></li>
            <li>Replies: <?php echo $stats['replies']; ?></li>
        </ul>
    </div>
<?php endif; ?>
```

### Pattern 3: Activity Feed

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $streamApi = CjForum::stream();
    $profileApi = CjForum::profile();
    
    $activities = $streamApi->getStream([], 10);
    
    // Prefetch author profiles
    $userIds = array_unique(array_column($activities, 'created_by'));
    $profileApi->prefetchProfiles($userIds);
?>
    <div class="activity-feed">
        <?php foreach ($activities as $activity): ?>
            <div class="activity-item">
                <?php echo $profileApi->getAvatar($activity['created_by'], 48); ?>
                <div class="activity-content">
                    <h4><?php echo $activity['title']; ?></h4>
                    <p><?php echo $activity['description']; ?></p>
                    <div class="activity-meta">
                        <?php echo $profileApi->getProfileLink($activity['created_by']); ?>
                        • <?php echo $activity['likes']; ?> likes
                        • <?php echo JHtml::_('date', $activity['created']); ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
```

---

## Performance Optimization

### 1. Always Prefetch for Lists

```php
// ❌ BAD - N queries
foreach ($items as $item) {
    $avatar = $profileApi->getAvatar($item->user_id);
    $points = $pointsApi->getUserPoints($item->user_id);
}

// ✅ GOOD - 2 queries
$userIds = array_column($items, 'user_id');
$profileApi->prefetchProfiles($userIds);
$pointsApi->prefetchUserPoints($userIds);

foreach ($items as $item) {
    $avatar = $profileApi->getAvatar($item->user_id);
    $points = $pointsApi->getUserPoints($item->user_id);
}
```

### 2. Batch Operations

```php
// Get data for multiple users at once
$userIds = [42, 43, 44, 45];

$profiles = $profileApi->getProfile($userIds);
$points = $pointsApi->getUserPoints($userIds);
$avatars = $profileApi->getAvatar($userIds, 64);
```

### 3. Single Availability Check

```php
// Check once, use multiple times
if (CjForum::isAvailable()) {
    $profileApi = CjForum::profile();
    $pointsApi = CjForum::points();
    $streamApi = CjForum::stream();
    
    // Use all three APIs
}
```

---

## Error Handling

### Graceful Degradation

```php
try {
    if (!CjForum::isAvailable()) {
        // CjForum not installed - use fallback
        echo '<span>' . $username . '</span>';
        return;
    }
    
    $profileApi = CjForum::profile();
    $profile = $profileApi->getProfile($userId);
    
    if ($profile === null) {
        // User not found
        echo '<span>Unknown User</span>';
        return;
    }
    
    // Display with CjForum data
    echo $profileApi->getAvatar($userId, 64);
    
} catch (\RuntimeException $e) {
    // CjForum not available
    error_log('CjForum SDK error: ' . $e->getMessage());
    echo '<span>' . $username . '</span>';
    
} catch (\Exception $e) {
    // Other errors
    error_log('Unexpected error: ' . $e->getMessage());
    echo '<span>' . $username . '</span>';
}
```

### Check Before Use

```php
// Always check availability
if (CjForum::isAvailable()) {
    // Safe to use
    $profileApi = CjForum::profile();
} else {
    // Provide alternative
}
```

---

## See Also

- **[SDK Overview](sdk-overview)** - Introduction to the SDK
- **[Profile Quick Start](sdk-profile-quick-start)** - Profile API guide
- **[Points & Stream Quick Start](sdk-points-stream-quick-start)** - Points & Stream guide
- **[Migration Guide](sdk-migration-guide)** - Migrate from legacy API

## Support

- **Documentation**: https://docs.shondalai.com/cjforum/overview
- **Support Forum**: https://shondalai.com/get-support/

