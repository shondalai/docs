---
id: sdk-overview
title: CjForum SDK Overview
sidebar_label: SDK Overview
sidebar_position: 1
---

# CjForum SDK for Third-Party Developers

Modern, type-safe APIs for integrating CjForum features into your Joomla extensions.

## Introduction

The CjForum SDK (version 6.0+) provides a comprehensive set of modern, namespace-based APIs that allow third-party developers to easily integrate CjForum features into their Joomla extensions. Built with Joomla 4/5/6 best practices, the SDK offers:

- ✅ **Modern PHP 7.4+ with full type hints**
- ✅ **Joomla 4/5/6 compatible**
- ✅ **Dependency Injection ready**
- ✅ **Simple static facade for quick access**
- ✅ **Type-safe interfaces for IDE autocomplete**
- ✅ **Performance optimized with batch operations and caching**
- ✅ **Comprehensive documentation and examples**
- ✅ **Backward compatible with legacy API**

## Available SDKs

The CjForum SDK consists of three main APIs:

### 1. Profile System API

Access user profiles, avatars, and profile links.

```php
use Joomla\Component\CjForum\Site\CjForum;

$profileApi = CjForum::profile();

// Get user profile
$profile = $profileApi->getProfile($userId);

// Get avatar HTML
echo $profileApi->getAvatar($userId, 64);

// Get profile link
echo $profileApi->getProfileLink($userId);
```

**Learn more:** [Profile System SDK Quick Start](sdk-profile-quick-start)

### 2. Points System API

Award points, get leaderboards, and manage user points.

```php
use Joomla\Component\CjForum\Site\CjForum;

$pointsApi = CjForum::points();

// Award points
$pointsApi->awardPoints('com_myblog.new_article', $userId, 10);

// Get user points
$total = $pointsApi->getUserPoints($userId);

// Get top users
$topUsers = $pointsApi->getTopUsers(10);
```

**Learn more:** [Points System SDK Quick Start](sdk-points-quick-start)

### 3. Activity Stream API

Push activities to the stream, manage likes and comments.

```php
use Joomla\Component\CjForum\Site\CjForum;

$streamApi = CjForum::stream();

// Push activity
$activity = (object) [
    'type' => 'com_myblog.new_article',
    'title' => 'New Article Published',
    'description' => 'User created a new article'
];
$streamApi->push($activity);

// Get stream
$activities = $streamApi->getStream([], 20);
```

**Learn more:** [Activity Stream SDK Quick Start](sdk-stream-quick-start)

## Quick Start

### Installation

The SDK is automatically available when CjForum 6.0+ is installed. No additional setup needed!

### Basic Usage

```php
use Joomla\Component\CjForum\Site\CjForum;

// Check if CjForum is available
if (CjForum::isAvailable()) {
    // Use Profile API
    $avatar = CjForum::profile()->getAvatar($userId, 48);
    
    // Use Points API
    CjForum::points()->awardPoints('com_myext.action', $userId, 10);
    
    // Use Stream API
    $activity = (object) [
        'type' => 'com_myext.new_item',
        'title' => 'New Item Created'
    ];
    CjForum::stream()->push($activity);
}
```

## Integration Methods

The SDK supports three integration methods to suit different development styles:

### Method 1: Static Facade (Simplest)

Perfect for quick integrations and simple use cases.

```php
use Joomla\Component\CjForum\Site\CjForum;

$profileApi = CjForum::profile();
$pointsApi = CjForum::points();
$streamApi = CjForum::stream();
```

### Method 2: Dependency Injection (Best Practice)

Recommended for modern components following Joomla best practices.

```php
// In services/provider.php
use Joomla\Component\CjForum\Site\Service\CjForumSdkProvider;

$container->registerServiceProvider(new CjForumSdkProvider());

// In your class
use Joomla\Component\CjForum\Site\Api\ProfileApiInterface;

public function __construct(ProfileApiInterface $profileApi) {
    $this->profileApi = $profileApi;
}
```

### Method 3: Direct Instantiation (Fallback)

When DI container is not available.

```php
use Joomla\Component\CjForum\Site\Api\ProfileApi;
use Joomla\Component\CjForum\Site\Api\PointsApi;
use Joomla\Component\CjForum\Site\Api\StreamApi;

$profileApi = ProfileApi::getInstance();
$pointsApi = PointsApi::getInstance();
$streamApi = StreamApi::getInstance();
```

## Complete Example

Here's a complete example integrating all three APIs in a blog component:

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
            
            // Award points for creating article
            CjForum::points()->awardPoints(
                'com_myblog.create_article',
                $userId,
                10,
                $articleId  // Prevents duplicate awards
            );
            
            // Push to activity stream
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

## Features Comparison

| Feature | Legacy API (5.x) | Modern SDK (6.0+) |
|---------|-----------------|-------------------|
| **Autoloading** | Manual `require_once` | ✅ Automatic via namespace |
| **Type Safety** | No type hints | ✅ Full type hints |
| **IDE Support** | Limited | ✅ Full autocomplete |
| **DI Support** | No | ✅ Service providers |
| **Performance** | Basic | ✅ Optimized with caching |
| **Batch Operations** | No | ✅ Yes |
| **Documentation** | Basic | ✅ Comprehensive |

## Performance Tips

### 1. Prefetch for Lists

```php
// ❌ Bad - N queries
foreach ($items as $item) {
    $avatar = CjForum::profile()->getAvatar($item->user_id);
}

// ✅ Good - 1 query
$userIds = array_column($items, 'user_id');
CjForum::profile()->prefetchProfiles($userIds);
CjForum::points()->prefetchUserPoints($userIds);

foreach ($items as $item) {
    $avatar = CjForum::profile()->getAvatar($item->user_id);
}
```

### 2. Check Availability Once

```php
// ✅ Good - Single check
if (CjForum::isAvailable()) {
    CjForum::profile()->getAvatar($userId);
    CjForum::points()->awardPoints(...);
    CjForum::stream()->push(...);
}
```

## Next Steps

Choose your starting point based on your needs:

1. **[Profile System SDK](sdk-profile-quick-start)** - User profiles, avatars, links
2. **[Points System SDK](sdk-points-quick-start)** - Award points, leaderboards, ranks
3. **[Activity Stream SDK](sdk-stream-quick-start)** - Activity feeds, likes, comments
4. **[Complete Integration Guide](sdk-integration-guide)** - Full API reference

## Migration from Legacy API

If you're upgrading from CjForum 5.x, see the [Migration Guide](sdk-migration-guide) for step-by-step instructions.

## Support

- **Documentation**: https://docs.shondalai.com/cjforum/overview
- **Support Forum**: https://shondalai.com/get-support/

## Requirements

- **CjForum**: 6.0.0 or higher
- **Joomla**: 4.0.0 or higher
- **PHP**: 7.4 or higher (PHP 8.0+ recommended)

## License

GNU General Public License version 2 or later

