---
id: sdk-stream-quick-start
title: Activity Stream SDK Quick Start
sidebar_label: Stream SDK Quick Start
sidebar_position: 4
---

# Activity Stream SDK Quick Start

Learn how to integrate CjForum Activity Stream into your Joomla extension to push activities, manage likes and comments, and display activity feeds.

## Prerequisites

- CjForum 6.0+ installed
- Joomla 4.0+ 
- PHP 7.4+

## Basic Usage

### 1. Push Activity to Stream

Push activities to the stream when events occur in your extension:

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

Retrieve the latest activities:

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

Get activities for a specific user:

```php
// Get activities by specific user
$userActivities = CjForum::stream()->getUserStream($userId, 20);
```

### 4. Get Featured Activities

Display featured activities:

```php
// Get featured activities only
$featured = CjForum::stream()->getFeaturedStream(10);
```

### 5. Filter Activity Stream

Filter activities using various criteria:

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

Manage activity likes:

```php
// Like an activity
CjForum::stream()->likeActivity($activityId);

// Unlike an activity
CjForum::stream()->unlikeActivity($activityId);

// Get activity to check likes
$activity = CjForum::stream()->getActivity($activityId);
echo $activity['likes'] . ' likes';
```

### 7. Add Comments

Manage comments on activities:

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

## Advanced Usage

### Register Activity Types from XML

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
    
    <activity_type>
        <name>com_mycomponent.article_updated</name>
        <appname>com_mycomponent</appname>
        <title>Article Updated</title>
        <alias>article-updated</alias>
        <description>User updated an existing article</description>
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

### Delete Activity

Remove an activity and all its comments:

```php
// Delete an activity (and all its comments)
CjForum::stream()->deleteActivity($activityId);
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
            $title = $this->input->getString('title');
            
            // Push to activity stream
            $activity = (object) [
                'type' => 'com_myblog.new_article',
                'title' => 'New Article Published',
                'description' => 'User published: ' . $title,
                'item_id' => $articleId,
                'length' => 200
            ];
            CjForum::stream()->push($activity);
        }
        
        return $result;
    }
    
    public function delete()
    {
        $result = parent::delete();
        
        if ($result && CjForum::isAvailable())
        {
            $streamApi = CjForum::stream();
            
            // Find and delete related activities
            $articleId = $this->input->getInt('id');
            $activities = $streamApi->getStream([
                'type' => 'com_myblog.new_article',
                'item_id' => $articleId
            ], 1);
            
            if (!empty($activities)) {
                $streamApi->deleteActivity($activities[0]['id']);
            }
        }
        
        return $result;
    }
}
```

### Example 2: Display Activity Feed

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $streamApi = CjForum::stream();
    $profileApi = CjForum::profile();
    
    $activities = $streamApi->getStream([], 10);
    
    // Prefetch author profiles for better performance
    $userIds = array_unique(array_column($activities, 'created_by'));
    $profileApi->prefetchProfiles($userIds);
?>
    <div class="activity-feed">
        <?php foreach ($activities as $activity): ?>
            <div class="activity-item">
                <div class="activity-avatar">
                    <?php echo $profileApi->getAvatar($activity['created_by'], 48); ?>
                </div>
                <div class="activity-content">
                    <h4><?php echo $this->escape($activity['title']); ?></h4>
                    <p><?php echo $this->escape($activity['description']); ?></p>
                    <div class="activity-meta">
                        <span class="author">
                            <?php echo $profileApi->getProfileLink($activity['created_by']); ?>
                        </span>
                        <span class="likes">
                            <?php echo $activity['likes']; ?> likes
                        </span>
                        <span class="date">
                            <?php echo JHtml::_('date', $activity['created'], 'DATE_FORMAT_LC3'); ?>
                        </span>
                    </div>
                    
                    <!-- Comments -->
                    <?php
                    $comments = $streamApi->getComments($activity['id'], 3);
                    if (!empty($comments)):
                    ?>
                        <div class="activity-comments">
                            <?php foreach ($comments as $comment): ?>
                                <div class="comment">
                                    <strong><?php echo $comment['author_name']; ?>:</strong>
                                    <?php echo $this->escape($comment['description']); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
```

### Example 3: Activity Feed Module

```php
<?php
namespace Joomla\Module\Activityfeed\Site\Helper;

use Joomla\CMS\Factory;
use Joomla\Component\CjForum\Site\CjForum;

class ActivityfeedHelper
{
    public static function getActivities($params)
    {
        if (!CjForum::isAvailable()) {
            return [];
        }
        
        $streamApi = CjForum::stream();
        $profileApi = CjForum::profile();
        
        $limit = (int) $params->get('limit', 10);
        $typeFilter = $params->get('type_filter', '');
        $featuredOnly = $params->get('featured_only', 0);
        
        // Build filters
        $filters = [];
        if ($typeFilter) {
            $filters['type'] = $typeFilter;
        }
        if ($featuredOnly) {
            $filters['featured'] = true;
        }
        
        // Get activities
        $activities = $streamApi->getStream($filters, $limit);
        
        // Prefetch profiles
        $userIds = array_unique(array_column($activities, 'created_by'));
        $profileApi->prefetchProfiles($userIds);
        
        // Enhance with profile data
        foreach ($activities as &$activity) {
            $activity['author_avatar'] = $profileApi->getAvatar($activity['created_by'], 32);
            $activity['author_link'] = $profileApi->getProfileLink($activity['created_by']);
        }
        
        return $activities;
    }
}
```

### Example 4: Social Interaction Plugin

```php
<?php
namespace Joomla\Plugin\Content\Socialshare\Extension;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\CjForum\Site\CjForum;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

class Socialshare extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onContentAfterDisplay' => 'onContentAfterDisplay',
        ];
    }
    
    public function onContentAfterDisplay(Event $event)
    {
        if (!CjForum::isAvailable()) {
            return '';
        }
        
        [$context, $article] = $event->getArguments();
        
        if ($context !== 'com_content.article') {
            return '';
        }
        
        $streamApi = CjForum::stream();
        
        // Find related activity
        $activities = $streamApi->getStream([
            'type' => 'com_content.publish_article',
            'item_id' => $article->id
        ], 1);
        
        if (empty($activities)) {
            return '';
        }
        
        $activity = $activities[0];
        $comments = $streamApi->getComments($activity['id'], 5);
        
        // Build social interaction HTML
        $html = '<div class="social-interactions">';
        $html .= '<button onclick="likeActivity(' . $activity['id'] . ')">';
        $html .= 'Like (' . $activity['likes'] . ')';
        $html .= '</button>';
        $html .= '<span>' . count($comments) . ' comments</span>';
        $html .= '</div>';
        
        return $html;
    }
}
```

### Example 5: User Profile Activity Timeline

```php
<?php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()):
    $streamApi = CjForum::stream();
    $profileApi = CjForum::profile();
    
    // Get user's activities
    $activities = $streamApi->getUserStream($userId, 20);
?>
    <div class="user-timeline">
        <h3>Activity Timeline</h3>
        
        <?php if (empty($activities)): ?>
            <p class="no-activities">No activities yet.</p>
        <?php else: ?>
            <div class="timeline">
                <?php foreach ($activities as $activity): ?>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">
                                <?php echo JHtml::_('date', $activity['created'], 'DATE_FORMAT_LC3'); ?>
                            </span>
                            <h4><?php echo $this->escape($activity['title']); ?></h4>
                            <p><?php echo $this->escape($activity['description']); ?></p>
                            <?php if ($activity['likes'] > 0): ?>
                                <span class="likes">
                                    <i class="icon-thumbs-up"></i> <?php echo $activity['likes']; ?>
                                </span>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
<?php endif; ?>
```

### Example 6: AJAX Like Handler

```php
<?php
namespace Joomla\Component\Myblog\Site\Controller;

use Joomla\CMS\MVC\Controller\BaseController;
use Joomla\CMS\Response\JsonResponse;
use Joomla\Component\CjForum\Site\CjForum;

class ActivityController extends BaseController
{
    public function like()
    {
        if (!CjForum::isAvailable()) {
            echo new JsonResponse(['error' => 'Activity stream not available'], 'error');
            $this->app->close();
        }
        
        $activityId = $this->input->getInt('activity_id');
        $userId = $this->app->getIdentity()->id;
        
        if ($userId === 0) {
            echo new JsonResponse(['error' => 'Please login'], 'error');
            $this->app->close();
        }
        
        try {
            $streamApi = CjForum::stream();
            $success = $streamApi->likeActivity($activityId, $userId);
            
            if ($success) {
                $activity = $streamApi->getActivity($activityId);
                echo new JsonResponse([
                    'success' => true,
                    'likes' => $activity['likes']
                ]);
            } else {
                echo new JsonResponse(['error' => 'Failed to like'], 'error');
            }
        } catch (\Exception $e) {
            echo new JsonResponse(['error' => $e->getMessage()], 'error');
        }
        
        $this->app->close();
    }
}
```

## Performance Best Practices

### ✅ DO: Prefetch Author Profiles

```php
// Get activities
$activities = $streamApi->getStream([], 20);

// Prefetch all author profiles
$userIds = array_unique(array_column($activities, 'created_by'));
$profileApi->prefetchProfiles($userIds);

// Now author data is cached
foreach ($activities as $activity) {
    echo $profileApi->getAvatar($activity['created_by']);
}
```

### ✅ DO: Filter Activities

```php
// Use filters to get only what you need
$filters = ['type' => 'com_myblog.new_article', 'language' => 'en-GB'];
$activities = $streamApi->getStream($filters, 10);
```

### ❌ DON'T: Load All Comments for Each Activity

```php
// BAD - Loads comments for every activity
foreach ($activities as $activity) {
    $comments = $streamApi->getComments($activity['id'], 100);
}

// GOOD - Load only preview comments or on demand
foreach ($activities as $activity) {
    $comments = $streamApi->getComments($activity['id'], 3);  // Preview only
}
```

### ✅ DO: Check Availability Once

```php
if (CjForum::isAvailable()) {
    $streamApi = CjForum::stream();
    
    // Multiple operations
    $streamApi->push($activity);
    $activities = $streamApi->getStream([], 10);
}
```

## Common Patterns

### Pattern 1: Combined Create & Stream

```php
// When creating content, push to stream
public function save()
{
    $result = parent::save();
    
    if ($result && CjForum::isAvailable()) {
        $streamApi = CjForum::stream();
        
        $activity = (object) [
            'type' => 'com_myext.new_item',
            'title' => 'New Item Created',
            'description' => $this->input->getString('title'),
            'item_id' => $this->input->getInt('id')
        ];
        
        $streamApi->push($activity);
    }
    
    return $result;
}
```

### Pattern 2: Activity Widget

```php
// Small activity widget for sidebar
function renderActivityWidget() {
    if (!CjForum::isAvailable()) {
        return '';
    }
    
    $streamApi = CjForum::stream();
    $activities = $streamApi->getStream([], 5);
    
    $html = '<div class="activity-widget">';
    $html .= '<h4>Recent Activity</h4>';
    
    foreach ($activities as $activity) {
        $html .= '<div class="activity-item">';
        $html .= '<span class="activity-title">' . $activity['title'] . '</span>';
        $html .= '<span class="activity-time">' . $activity['created'] . '</span>';
        $html .= '</div>';
    }
    
    $html .= '</div>';
    return $html;
}
```

### Pattern 3: Type-Specific Feeds

```php
// Get different activity feeds
$articleActivities = $streamApi->getStream(['type' => 'com_myblog.new_article'], 10);
$commentActivities = $streamApi->getStream(['type' => 'com_myblog.new_comment'], 10);
$likeActivities = $streamApi->getStream(['type' => 'com_myblog.article_liked'], 10);
```

## Error Handling

```php
try {
    if (!CjForum::isAvailable()) {
        // CjForum not installed - skip activity stream
        return;
    }
    
    $streamApi = CjForum::stream();
    
    // Check if activity type exists
    $activityType = $streamApi->getActivityType('com_myext.action');
    if (!$activityType) {
        error_log('Activity type not registered: com_myext.action');
        return;
    }
    
    // Push activity
    $activity = (object) [
        'type' => 'com_myext.action',
        'title' => 'Action Title',
        'description' => 'Action description'
    ];
    
    $success = $streamApi->push($activity);
    
    if (!$success) {
        error_log('Failed to push activity');
    }
    
} catch (\RuntimeException $e) {
    error_log('CjForum SDK error: ' . $e->getMessage());
} catch (\Exception $e) {
    error_log('Unexpected error: ' . $e->getMessage());
}
```

## Next Steps

- **[Points System SDK](sdk-points-quick-start)** - Award points and create leaderboards
- **[Profile System SDK](sdk-profile-quick-start)** - User profiles and avatars
- **[Complete API Reference](sdk-integration-guide)** - Detailed documentation
- **[Migration Guide](sdk-migration-guide)** - Upgrade from legacy API

## API Reference Quick Links

| Method | Description |
|--------|-------------|
| `push()` | Push activity to stream |
| `getStream()` | Get activities with filters |
| `getActivity()` | Get single activity |
| `deleteActivity()` | Delete activity |
| `likeActivity()` | Like an activity |
| `unlikeActivity()` | Unlike an activity |
| `addComment()` | Add comment to activity |
| `getComments()` | Get activity comments |
| `deleteComment()` | Delete comment |
| `getUserStream()` | Get user's activities |
| `getFeaturedStream()` | Get featured activities |
| `registerActivityTypesFromXml()` | Register types from XML |

See the [Complete Integration Guide](sdk-integration-guide#activity-stream-api) for full API reference.

## Support

- **Documentation**: https://docs.shondalai.com/cjforum/overview
- **Forum**: https://shondalai.com/get-support/

