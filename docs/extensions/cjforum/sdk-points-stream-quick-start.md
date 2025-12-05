---
id: sdk-points-stream-quick-start
title: Points & Stream SDK Quick Start
sidebar_label: Points & Stream Quick Start
sidebar_position: 3
---

# CjForum Points & Stream SDK Quick Start

## Points System SDK

### 1. Award Points to Users

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

```php
// Get total points for a user
$total = CjForum::points()->getUserPoints($userId);

// Get points for multiple users (optimized)
$userIds = [42, 43, 44];
$points = CjForum::points()->getUserPoints($userIds);
// Returns: [42 => 150, 43 => 200, 44 => 75]
```

### 3. Get Points History

```php
// Get last 20 transactions
$history = CjForum::points()->getPointsHistory($userId, 20);

foreach ($history as $transaction) {
    echo $transaction['title'] . ': ' . $transaction['points'] . ' points';
}
```

### 4. Get Top Users

```php
// Get top 10 users by points
$topUsers = CjForum::points()->getTopUsers(10);

foreach ($topUsers as $user) {
    echo $user['name'] . ': ' . $user['points'] . ' points';
}
```

### 5. Get User Rank

```php
// Get user's rank position
$rank = CjForum::points()->getUserRank($userId);
echo "User rank: #{$rank}";
```

### 6. Get Points Statistics

```php
$stats = CjForum::points()->getPointsStats($userId);

echo "Total Earned: " . $stats['total_earned'];
echo "Total Spent: " . $stats['total_spent'];
echo "Net Points: " . $stats['net_points'];
echo "Rank: #" . $stats['rank'];
```

### 7. Register Points Rules from XML

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
</cjforum>
```

Then register it:

```php
$xmlPath = JPATH_ADMINISTRATOR . '/components/com_mycomponent/cjforum_rules.xml';
CjForum::points()->registerRulesFromXml($xmlPath);
```

### 8. Prevent Duplicate Awards

```php
// Award points only once per article read
CjForum::points()->awardPoints(
    'com_mycomponent.read_article',
    $userId,
    5,
    $articleId  // Reference prevents duplicate awards
);
```

### 9. Batch Prefetch (Performance)

```php
// When displaying a list
$userIds = array_column($items, 'user_id');
CjForum::points()->prefetchUserPoints($userIds);

// Now these calls are instant (cached)
foreach ($items as $item) {
    $points = CjForum::points()->getUserPoints($item->user_id);
}
```

---

## Activity Stream SDK

### 1. Push Activity to Stream

```php
use Joomla\Component\CjForum\Site\CjForum;

$activity = (object) [
    'type' => 'com_mycomponent.new_article',
    'title' => 'New Article Published',
    'description' => 'John Doe published a new article about Joomla',
    'user_id' => $userId,      // Optional (default: current user)
    'item_id' => $articleId,   // Optional
    'parent_id' => 0,          // Optional
    'featured' => 0,           // Optional (1 for featured)
    'language' => '*',         // Optional
    'length' => 200            // Optional (truncate description)
];

CjForum::stream()->push($activity);
```

### 2. Get Activity Stream

```php
// Get latest activities
$activities = CjForum::stream()->getStream([], 20);

foreach ($activities as $activity) {
    echo $activity['title'];
    echo $activity['description'];
    echo $activity['author_name'];
}
```

### 3. Get User's Activity Stream

```php
// Get activities by specific user
$userActivities = CjForum::stream()->getUserStream($userId, 20);
```

### 4. Get Featured Activities

```php
// Get featured activities only
$featured = CjForum::stream()->getFeaturedStream(10);
```

### 5. Filter Activity Stream

```php
// Filter by type
$filters = ['type' => 'com_mycomponent.new_article'];
$activities = CjForum::stream()->getStream($filters, 20);

// Filter by item
$filters = ['item_id' => $articleId];
$activities = CjForum::stream()->getStream($filters, 20);

// Filter by user
$filters = ['user_id' => $userId];
$activities = CjForum::stream()->getStream($filters, 20);

// Multiple filters
$filters = [
    'type' => 'com_mycomponent.new_article',
    'featured' => true,
    'language' => 'en-GB'
];
$activities = CjForum::stream()->getStream($filters, 20);
```

### 6. Like/Unlike Activity

```php
// Like an activity
CjForum::stream()->likeActivity($activityId);

// Unlike an activity
CjForum::stream()->unlikeActivity($activityId);
```

### 7. Add Comments

```php
// Add a comment
$commentId = CjForum::stream()->addComment(
    $activityId,
    'Great article!',
    $userId  // Optional (0 = current user)
);

// Get comments
$comments = CjForum::stream()->getComments($activityId, 20);

foreach ($comments as $comment) {
    echo $comment['author_name'] . ': ' . $comment['description'];
}

// Delete a comment
CjForum::stream()->deleteComment($commentId);
```

### 8. Register Activity Types from XML

Create `administrator/components/com_mycomponent/cjforum_activity_types.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
    <activity_type>
        <name>com_mycomponent.new_article</name>
        <appname>com_mycomponent</appname>
        <title>New Article</title>
        <alias>new-article</alias>
        <description>User published a new article</description>
        <published>1</published>
        <access>1</access>
        <language>*</language>
    </activity_type>
</cjforum>
```

Then register it:

```php
$xmlPath = JPATH_ADMINISTRATOR . '/components/com_mycomponent/cjforum_activity_types.xml';
CjForum::stream()->registerActivityTypesFromXml($xmlPath);
```

### 9. Delete Activity

```php
// Delete an activity (and all its comments)
CjForum::stream()->deleteActivity($activityId);
```

---

## Complete Integration Example

### Example: Blog Component Integration

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
                0,  // Use rule default
                $articleId  // Prevent duplicate awards
            );
            
            // Push to activity stream
            $activity = (object) [
                'type' => 'com_myblog.new_article',
                'title' => 'New Article Published',
                'description' => 'User published: ' . $this->input->getString('title'),
                'item_id' => $articleId,
                'length' => 200
            ];
            CjForum::stream()->push($activity);
        }
        
        return $result;
    }
}
```

### Example: Display User Card with Points

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $profileApi = CjForum::profile();
    $pointsApi = CjForum::points();
    
    $profile = $profileApi->getProfile($userId);
    $points = $pointsApi->getUserPoints($userId);
    $rank = $pointsApi->getUserRank($userId);
?>
    <div class="user-card">
        <?php echo $profileApi->getAvatar($userId, 96); ?>
        <h3><?php echo $profileApi->getProfileLink($userId); ?></h3>
        <p>Points: <?php echo $points; ?> (Rank #<?php echo $rank; ?>)</p>
    </div>
<?php endif; ?>
```

### Example: Display Activity Feed

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $streamApi = CjForum::stream();
    $profileApi = CjForum::profile();
    
    $activities = $streamApi->getStream([], 10);
?>
    <div class="activity-feed">
        <?php foreach ($activities as $activity): ?>
            <div class="activity-item">
                <?php echo $profileApi->getAvatar($activity['created_by'], 48); ?>
                <div class="activity-content">
                    <h4><?php echo $activity['title']; ?></h4>
                    <p><?php echo $activity['description']; ?></p>
                    <small>
                        by <?php echo $profileApi->getProfileLink($activity['created_by']); ?>
                        • <?php echo $activity['likes']; ?> likes
                        • <?php echo JHtml::_('date', $activity['created'], 'DATE_FORMAT_LC3'); ?>
                    </small>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
```

---

## Performance Tips

### 1. Batch Operations

```php
// ❌ Bad - N queries
foreach ($items as $item) {
    $points = CjForum::points()->getUserPoints($item->user_id);
}

// ✅ Good - 1 query
$userIds = array_column($items, 'user_id');
CjForum::points()->prefetchUserPoints($userIds);
foreach ($items as $item) {
    $points = CjForum::points()->getUserPoints($item->user_id);
}
```

### 2. Check Availability Once

```php
// ❌ Bad - Multiple checks
if (CjForum::isAvailable()) {
    CjForum::points()->awardPoints(...);
}
if (CjForum::isAvailable()) {
    CjForum::stream()->push(...);
}

// ✅ Good - Single check
if (CjForum::isAvailable()) {
    CjForum::points()->awardPoints(...);
    CjForum::stream()->push(...);
}
```

### 3. Use Reference for Duplicate Prevention

```php
// Always use reference to prevent duplicate awards
CjForum::points()->awardPoints(
    'com_mycomponent.action',
    $userId,
    10,
    $uniqueReference  // e.g., article ID, comment ID, etc.
);
```

---

## See Also

- **[Profile SDK Quick Start](SDK_QUICK_START.md)** - User profile integration
- **[Complete SDK Guide](SDK_INTEGRATION_GUIDE.md)** - Full API reference
- **[Examples](examples/)** - Working code examples

## Support

- **Documentation**: https://docs.shondalai.com/cjforum/overview
- **Forum**: https://shondalai.com/get-support/


