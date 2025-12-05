---
id: sdk-profile-quick-start
title: Profile System SDK Quick Start
sidebar_label: Profile SDK Quick Start
sidebar_position: 2
---

# Profile System SDK Quick Start

Learn how to integrate CjForum user profiles, avatars, and profile links into your Joomla extension in just a few minutes.

## Prerequisites

- CjForum 6.0+ installed
- Joomla 4.0+ 
- PHP 7.4+

## Basic Usage

### 1. Check if CjForum is Available

Always check if CjForum is installed before using the API:

```php
use Joomla\Component\CjForum\Site\CjForum;

if (CjForum::isAvailable()) {
    // CjForum is installed and ready
}
```

### 2. Get User Avatar

Display user avatars in your component:

```php
use Joomla\Component\CjForum\Site\CjForum;

$profileApi = CjForum::profile();

// Avatar with link to profile (default size: 48px)
echo $profileApi->getAvatar($userId);

// Custom size avatar
echo $profileApi->getAvatar($userId, 128);

// Avatar without profile link
echo $profileApi->getAvatar($userId, 64, [], false);

// Avatar with custom CSS class
echo $profileApi->getAvatar($userId, 64, ['class' => 'rounded-circle']);
```

### 3. Get Profile Link

Create clickable links to user profiles:

```php
// Link with username
echo $profileApi->getProfileLink($userId);

// Link with custom text
echo $profileApi->getProfileLink($userId, 'View Profile');

// Link with custom CSS class
echo $profileApi->getProfileLink($userId, null, ['class' => 'btn btn-primary']);
```

### 4. Get User Profile Data

Retrieve complete user profile information:

```php
// Get single user profile
$profile = $profileApi->getProfile($userId);

echo $profile['name'];      // Display name
echo $profile['username'];  // Username
echo $profile['avatar'];    // Avatar filename
echo $profile['points'];    // Total points
echo $profile['about'];     // About/bio
```

### 5. Get Avatar URL Only

Get just the avatar URL without HTML:

```php
$avatarUrl = $profileApi->getAvatarUrl($userId, 128);

// Use in your own HTML
echo '<img src="' . $avatarUrl . '" alt="User Avatar" class="my-avatar">';
```

### 6. Get Profile URL Only

Get just the profile URL without HTML:

```php
$profileUrl = $profileApi->getProfileUrl($userId);

// Use in your own HTML
echo '<a href="' . $profileUrl . '">View Profile</a>';
```

## Batch Operations (Performance)

When displaying lists of users, use batch operations for better performance:

### Prefetch Profiles

```php
// Get all user IDs from your data
$userIds = array_column($items, 'created_by');

// Prefetch all profiles at once (1 query instead of N queries)
$profileApi->prefetchProfiles($userIds);

// Now these calls are instant (using cached data)
foreach ($items as $item) {
    echo $profileApi->getAvatar($item->created_by, 48);
    echo $profileApi->getProfileLink($item->created_by);
}
```

### Get Multiple Profiles

```php
// Get profiles for multiple users at once
$userIds = [42, 43, 44, 45];
$profiles = $profileApi->getProfile($userIds);

// Access individual profiles
echo $profiles[42]['name'];
echo $profiles[43]['name'];
```

### Get Multiple Avatars

```php
// Get avatars for multiple users
$avatars = $profileApi->getAvatar([42, 43, 44], 64);

// Display them
echo $avatars[42];  // Avatar HTML for user 42
echo $avatars[43];  // Avatar HTML for user 43
echo $avatars[44];  // Avatar HTML for user 44
```

## Search Users

Search for users by name or username:

```php
// Search for users
$users = $profileApi->searchUsers('john', 10);

foreach ($users as $user) {
    echo $user['name'] . ' (' . $user['username'] . ')';
}
```

## Get User Statistics

Retrieve user statistics (topics, replies, points, etc.):

```php
$stats = $profileApi->getUserStats($userId);

echo 'Topics: ' . $stats['topics'];
echo 'Replies: ' . $stats['replies'];
echo 'Points: ' . $stats['points'];
echo 'Reputation: ' . $stats['reputation'];
```

## Real-World Examples

### Example 1: Display User List in Component

```php
<?php
// In your view file (tmpl/items/default.php)
use Joomla\Component\CjForum\Site\CjForum;

$profileApi = CjForum::isAvailable() ? CjForum::profile() : null;

if ($profileApi) {
    // Prefetch all user profiles for better performance
    $userIds = array_unique(array_column($this->items, 'created_by'));
    $profileApi->prefetchProfiles($userIds);
}
?>

<div class="user-list">
    <?php foreach ($this->items as $item): ?>
        <div class="user-item">
            <?php if ($profileApi): ?>
                <?php echo $profileApi->getAvatar($item->created_by, 64); ?>
                <div class="user-info">
                    <h3><?php echo $profileApi->getProfileLink($item->created_by); ?></h3>
                    <p><?php echo $this->escape($item->title); ?></p>
                </div>
            <?php else: ?>
                <span><?php echo $this->escape($item->author_name); ?></span>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>
```

### Example 2: Add Author Info in Plugin

```php
<?php
namespace Joomla\Plugin\Content\Authorinfo\Extension;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\CjForum\Site\CjForum;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

class Authorinfo extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return ['onContentAfterTitle' => 'onContentAfterTitle'];
    }
    
    public function onContentAfterTitle(Event $event)
    {
        if (!CjForum::isAvailable()) {
            return '';
        }
        
        [$context, $article] = $event->getArguments();
        
        if ($context !== 'com_content.article') {
            return '';
        }
        
        $profileApi = CjForum::profile();
        $profile = $profileApi->getProfile($article->created_by);
        $stats = $profileApi->getUserStats($article->created_by);
        
        if (!$profile) {
            return '';
        }
        
        $html = '<div class="author-info">';
        $html .= $profileApi->getAvatar($article->created_by, 80);
        $html .= '<div class="author-details">';
        $html .= '<h4>' . $profileApi->getProfileLink($article->created_by) . '</h4>';
        $html .= '<p>' . $this->escape($profile['about']) . '</p>';
        
        if ($stats) {
            $html .= '<p><small>';
            $html .= 'Forum Activity: ' . $stats['topics'] . ' topics, ';
            $html .= $stats['replies'] . ' replies';
            $html .= '</small></p>';
        }
        
        $html .= '</div></div>';
        
        return $html;
    }
}
```

### Example 3: Module Helper

```php
<?php
namespace Joomla\Module\Topauthors\Site\Helper;

use Joomla\CMS\Factory;
use Joomla\Component\CjForum\Site\CjForum;

class TopauthorsHelper
{
    public static function getTopAuthors($params)
    {
        $db = Factory::getDbo();
        $limit = (int) $params->get('count', 5);
        
        // Get top authors from your component
        $query = $db->getQuery(true)
            ->select('created_by, COUNT(*) as article_count')
            ->from('#__content')
            ->where('state = 1')
            ->group('created_by')
            ->order('article_count DESC')
            ->setLimit($limit);
        
        $db->setQuery($query);
        $authors = $db->loadObjectList();
        
        // Enhance with CjForum data if available
        if (CjForum::isAvailable()) {
            $profileApi = CjForum::profile();
            
            // Prefetch all author profiles
            $userIds = array_column($authors, 'created_by');
            $profileApi->prefetchProfiles($userIds);
            
            // Add profile data
            foreach ($authors as $author) {
                $author->profile = $profileApi->getProfile($author->created_by);
                $author->avatar = $profileApi->getAvatar($author->created_by, 48);
                $author->profile_link = $profileApi->getProfileLink($author->created_by);
            }
        }
        
        return $authors;
    }
}
```

### Example 4: User Autocomplete (AJAX)

```php
<?php
namespace Joomla\Component\Myblog\Site\Controller;

use Joomla\CMS\MVC\Controller\BaseController;
use Joomla\CMS\Response\JsonResponse;
use Joomla\Component\CjForum\Site\CjForum;

class SearchController extends BaseController
{
    public function users()
    {
        $query = $this->input->getString('q', '');
        
        if (!CjForum::isAvailable()) {
            echo new JsonResponse(['error' => 'CjForum not available'], 'error');
            $this->app->close();
        }
        
        try {
            $profileApi = CjForum::profile();
            $users = $profileApi->searchUsers($query, 10);
            
            // Format for autocomplete
            $results = array_map(function($user) use ($profileApi) {
                return [
                    'id' => $user['id'],
                    'label' => $user['name'] . ' (' . $user['username'] . ')',
                    'name' => $user['name'],
                    'username' => $user['username'],
                    'avatar' => $profileApi->getAvatarUrl($user['id'], 32),
                    'url' => $profileApi->getProfileUrl($user['id'])
                ];
            }, $users);
            
            echo new JsonResponse($results);
        } catch (\Exception $e) {
            echo new JsonResponse(['error' => $e->getMessage()], 'error');
        }
        
        $this->app->close();
    }
}
```

## Performance Best Practices

### ✅ DO: Prefetch for Lists

```php
// Prefetch all profiles at once
$userIds = array_column($items, 'user_id');
$profileApi->prefetchProfiles($userIds);

foreach ($items as $item) {
    echo $profileApi->getAvatar($item->user_id);
}
```

### ✅ DO: Request Multiple Users at Once

```php
// Get avatars for multiple users
$avatars = $profileApi->getAvatar([42, 43, 44], 64);
```

### ❌ DON'T: Make Individual Calls in Loops

```php
// This makes N queries - BAD!
foreach ($items as $item) {
    $profile = $profileApi->getProfile($item->user_id);
}
```

### ✅ DO: Check Availability Once

```php
if (CjForum::isAvailable()) {
    $profileApi = CjForum::profile();
    
    // Multiple operations
    $avatar = $profileApi->getAvatar($userId);
    $link = $profileApi->getProfileLink($userId);
}
```

## Common Patterns

### Pattern 1: User Card

```php
<?php if (CjForum::isAvailable()): 
    $profileApi = CjForum::profile();
    $profile = $profileApi->getProfile($userId);
    $stats = $profileApi->getUserStats($userId);
?>
    <div class="user-card">
        <?php echo $profileApi->getAvatar($userId, 96); ?>
        <h3><?php echo $profileApi->getProfileLink($userId); ?></h3>
        <?php if ($profile): ?>
            <p><?php echo $this->escape($profile['about']); ?></p>
            <ul class="stats">
                <li>Topics: <?php echo $stats['topics']; ?></li>
                <li>Replies: <?php echo $stats['replies']; ?></li>
                <li>Points: <?php echo $profile['points']; ?></li>
            </ul>
        <?php endif; ?>
    </div>
<?php endif; ?>
```

### Pattern 2: User Mention/Tag

```php
<?php
$query = $input->getString('search');
$users = $profileApi->searchUsers($query, 5);

foreach ($users as $user) {
    echo '<div class="user-mention" data-id="' . $user['id'] . '">';
    echo $profileApi->getAvatar($user['id'], 32, [], false);
    echo '<span>' . $user['name'] . ' (@' . $user['username'] . ')</span>';
    echo '</div>';
}
?>
```

## Error Handling

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
    
    // Display profile
    echo $profileApi->getAvatar($userId, 64);
    
} catch (\RuntimeException $e) {
    // CjForum not available
    echo '<span>' . $username . '</span>';
} catch (\Exception $e) {
    // Other errors
    error_log('Profile API error: ' . $e->getMessage());
    echo '<span>' . $username . '</span>';
}
```

## Next Steps

- **[Points System SDK](sdk-points-quick-start)** - Award points and create leaderboards
- **[Activity Stream SDK](sdk-stream-quick-start)** - Push activities to the stream
- **[Complete API Reference](sdk-integration-guide)** - Detailed documentation
- **[Migration Guide](sdk-migration-guide)** - Upgrade from legacy API

## API Reference Quick Links

| Method | Description |
|--------|-------------|
| `getProfile()` | Get user profile data |
| `getAvatar()` | Get avatar HTML |
| `getAvatarUrl()` | Get avatar URL only |
| `getProfileLink()` | Get profile link HTML |
| `getProfileUrl()` | Get profile URL only |
| `searchUsers()` | Search for users |
| `getUserStats()` | Get user statistics |
| `prefetchProfiles()` | Batch load profiles |

See the [Complete Integration Guide](sdk-integration-guide#profile-api) for full API reference.

