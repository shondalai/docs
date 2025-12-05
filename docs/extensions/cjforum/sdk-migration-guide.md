---
id: sdk-migration-guide
title: SDK Migration Guide
sidebar_label: Migration Guide
sidebar_position: 4
---

# Migration Guide: Legacy API → Modern SDK

This guide helps you migrate from the legacy CjForum API (5.x and earlier) to the modern SDK (6.0+).

## Why Migrate?

The modern SDK provides:

- ✅ **Better Performance** - Batch operations and caching
- ✅ **Type Safety** - Full IDE autocomplete support
- ✅ **Modern Code** - No manual file includes, autoloaded
- ✅ **DI Ready** - Works with dependency injection
- ✅ **Better Documentation** - Comprehensive guides and examples
- ✅ **Maintainability** - Cleaner, more maintainable code

## Profile API Migration

### Old Way (Legacy 5.x)

```php
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
$api = CjForumApi::getProfileApi();

// Get avatar
$avatar = $api->getUserAvatar($userId, 48);

// Get profile link
$link = $api->getUserProfileLink($userId);

// Get profile
$profile = $api->getUserProfile($userId);
```

### New Way (Modern 6.0+)

```php
use Joomla\Component\CjForum\Site\CjForum;

$profileApi = CjForum::profile();

// Get avatar
$avatar = $profileApi->getAvatar($userId, 48);

// Get profile link
$link = $profileApi->getProfileLink($userId);

// Get profile
$profile = $profileApi->getProfile($userId);
```

### Method Name Changes

| Legacy Method | Modern Method | Notes |
|--------------|---------------|-------|
| `getUserAvatar()` | `getAvatar()` | Same parameters |
| `getUserAvatarUrl()` | `getAvatarUrl()` | Same parameters |
| `getUserProfileLink()` | `getProfileLink()` | Same parameters |
| `getUserProfileUrl()` | `getProfileUrl()` | Same parameters |
| `getUserProfile()` | `getProfile()` | Same parameters |
| `getUserProfiles()` | `getProfile($userIds)` | Pass array instead |
| - | `searchUsers()` | New method |
| - | `getUserStats()` | New method |
| - | `prefetchProfiles()` | New method |

## Points API Migration

### Old Way (Legacy 5.x)

```php
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
$api = CjForumApi::getPointsApi();

$api->awardPoints($ruleId, $userId, $points, $reference, $title, $description);
```

### New Way (Modern 6.0+)

```php
use Joomla\Component\CjForum\Site\CjForum;

$pointsApi = CjForum::points();

$pointsApi->awardPoints($ruleId, $userId, $points, $reference, $title, $description);
```

### Method Name Changes

| Legacy Method | Modern Method | Notes |
|--------------|---------------|-------|
| `awardPoints()` | `awardPoints()` | Same signature |
| `getUserPoints()` | `getUserPoints()` | Enhanced - supports arrays |
| `getPointsHistory()` | `getPointsHistory()` | Same parameters |
| `getTopUsers()` | `getTopUsers()` | Same parameters |
| `getRules()` | `getRules()` | Enhanced filtering |
| `getRule()` | `getRule()` | Same parameters |
| - | `getUserRank()` | New method |
| - | `getPointsStats()` | New method |
| - | `prefetchUserPoints()` | New method |
| - | `hasReceivedPoints()` | New method |

## Stream API Migration

### Old Way (Legacy 5.x)

```php
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
$api = CjForumApi::getStreamApi();

$stream = new stdClass();
$stream->type = 'com_myext.new_article';
$stream->title = 'New Article';
$stream->description = 'Description';
$stream->userId = $userId;

$api->push($stream);
```

### New Way (Modern 6.0+)

```php
use Joomla\Component\CjForum\Site\CjForum;

$streamApi = CjForum::stream();

$activity = (object) [
    'type' => 'com_myext.new_article',
    'title' => 'New Article',
    'description' => 'Description',
    'user_id' => $userId  // Note: user_id not userId
];

$streamApi->push($activity);
```

### Method Name Changes

| Legacy Method | Modern Method | Notes |
|--------------|---------------|-------|
| `push($stream)` | `push($activity)` | Property: `userId` → `user_id` |
| - | `getStream()` | New method with filters |
| - | `getActivity()` | New method |
| - | `deleteActivity()` | New method |
| - | `likeActivity()` | New method |
| - | `unlikeActivity()` | New method |
| - | `addComment()` | New method |
| - | `getComments()` | New method |
| - | `deleteComment()` | New method |
| - | `getUserStream()` | New method |
| - | `getFeaturedStream()` | New method |

## Step-by-Step Migration

### Step 1: Check CjForum Version

Ensure you have CjForum 6.0+ installed.

### Step 2: Update Imports

Replace all instances of:

```php
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
```

With:

```php
use Joomla\Component\CjForum\Site\CjForum;
```

### Step 3: Update API Calls

#### Profile API

```php
// OLD
$api = CjForumApi::getProfileApi();
$avatar = $api->getUserAvatar($userId, 48);

// NEW
$profileApi = CjForum::profile();
$avatar = $profileApi->getAvatar($userId, 48);
```

#### Points API

```php
// OLD
$api = CjForumApi::getPointsApi();
$api->awardPoints($ruleId, $userId, 10, $ref);

// NEW
$pointsApi = CjForum::points();
$pointsApi->awardPoints($ruleId, $userId, 10, $ref);
```

#### Stream API

```php
// OLD
$api = CjForumApi::getStreamApi();
$stream = new stdClass();
$stream->type = 'com_myext.action';
$stream->title = 'Title';
$stream->description = 'Description';
$stream->userId = $userId;
$api->push($stream);

// NEW
$streamApi = CjForum::stream();
$activity = (object) [
    'type' => 'com_myext.action',
    'title' => 'Title',
    'description' => 'Description',
    'user_id' => $userId  // Changed from userId
];
$streamApi->push($activity);
```

### Step 4: Add Availability Checks

Add availability checks for better error handling:

```php
if (CjForum::isAvailable()) {
    $profileApi = CjForum::profile();
    // Your code
} else {
    // Fallback behavior
}
```

### Step 5: Optimize with Batch Operations

Take advantage of new batch methods:

```php
// Before
foreach ($items as $item) {
    $avatar = $profileApi->getAvatar($item->user_id);
}

// After
$userIds = array_column($items, 'user_id');
$profileApi->prefetchProfiles($userIds);
foreach ($items as $item) {
    $avatar = $profileApi->getAvatar($item->user_id);
}
```

## Common Migration Patterns

### Pattern 1: Plugin Migration

```php
// OLD
class MyPlugin extends CMSPlugin
{
    public function onContentAfterDisplay($context, &$article, &$params)
    {
        require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
        $api = CjForumApi::getProfileApi();
        $avatar = $api->getUserAvatar($article->created_by, 48);
        return '<div>' . $avatar . '</div>';
    }
}

// NEW
use Joomla\Component\CjForum\Site\CjForum;

class MyPlugin extends CMSPlugin implements SubscriberInterface
{
    public function onContentAfterDisplay(Event $event)
    {
        if (!CjForum::isAvailable()) {
            return '';
        }
        
        [$context, $article] = $event->getArguments();
        $profileApi = CjForum::profile();
        $avatar = $profileApi->getAvatar($article->created_by, 48);
        
        return '<div>' . $avatar . '</div>';
    }
}
```

### Pattern 2: Module Migration

```php
// OLD
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
$api = CjForumApi::getPointsApi();
$topUsers = $api->getTopUsers(10);

// NEW
use Joomla\Component\CjForum\Site\CjForum;

$topUsers = [];
if (CjForum::isAvailable()) {
    $pointsApi = CjForum::points();
    $topUsers = $pointsApi->getTopUsers(10);
}
```

### Pattern 3: Component Controller Migration

```php
// OLD
class ArticleController extends FormController
{
    public function save()
    {
        $result = parent::save();
        
        if ($result) {
            require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
            $api = CjForumApi::getPointsApi();
            $api->awardPoints('com_myblog.article', $userId, 10);
        }
        
        return $result;
    }
}

// NEW
use Joomla\Component\CjForum\Site\CjForum;

class ArticleController extends FormController
{
    public function save()
    {
        $result = parent::save();
        
        if ($result && CjForum::isAvailable()) {
            $pointsApi = CjForum::points();
            $pointsApi->awardPoints('com_myblog.article', $userId, 10);
        }
        
        return $result;
    }
}
```

## Testing Your Migration

### 1. Test with CjForum Installed

Verify all functionality works:

```php
if (CjForum::isAvailable()) {
    // Test each API call
    $profileApi = CjForum::profile();
    $avatar = $profileApi->getAvatar($userId);
    // Verify output
}
```

### 2. Test without CjForum

Ensure graceful degradation:

```php
// Temporarily disable CjForum
// Verify your extension still works
```

### 3. Performance Testing

Compare before and after migration:

- Check database query count
- Measure page load times
- Test with large datasets

## Troubleshooting

### Issue: Class Not Found

**Error:** `Class 'Joomla\Component\CjForum\Site\CjForum' not found`

**Solution:** 
1. Verify CjForum 6.0+ is installed
2. Clear Joomla cache
3. Add availability check:

```php
if (class_exists('Joomla\Component\CjForum\Site\CjForum')) {
    // Use SDK
}
```

### Issue: Method Not Found

**Error:** `Call to undefined method`

**Solution:** Check method name changes in the tables above.

### Issue: Stream Activity Property Names

**Error:** Activity not being created

**Solution:** Change `userId` to `user_id` in activity object:

```php
// Wrong
$activity->userId = $userId;

// Correct
$activity->user_id = $userId;
```

## Backward Compatibility

The legacy API classes are still available in CjForum 6.0 for backward compatibility:

```php
// This still works (deprecated)
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
$api = CjForumApi::getProfileApi();
```

However, they will be removed in a future version. Migrate to the modern SDK as soon as possible.

## Benefits After Migration

After migrating, you'll enjoy:

1. **Cleaner Code** - No manual file includes
2. **Better Performance** - Built-in caching and batch operations
3. **Type Safety** - Full IDE autocomplete
4. **Modern Patterns** - DI support, namespaces
5. **Better Docs** - Comprehensive documentation
6. **Future-Proof** - Active development and support

## Need Help?

- **[SDK Overview](sdk-overview)** - Learn about the new SDK
- **[Quick Start Guides](sdk-profile-quick-start)** - Step-by-step tutorials
- **[Integration Guide](sdk-integration-guide)** - Complete API reference
- **[Support Forum](https://www.corejoomla.com/forum)** - Ask questions

## Checklist

Use this checklist to track your migration:

- [ ] CjForum 6.0+ installed
- [ ] Removed all `require_once` statements
- [ ] Added `use` statements
- [ ] Updated API class names
- [ ] Updated method names
- [ ] Changed `userId` to `user_id` in stream activities
- [ ] Added availability checks
- [ ] Implemented batch operations where applicable
- [ ] Tested with CjForum installed
- [ ] Tested without CjForum (graceful degradation)
- [ ] Cleared Joomla cache
- [ ] Tested in production environment
- [ ] Updated documentation

## Timeline

Recommended migration timeline:

1. **Week 1-2:** Review migration guide and plan changes
2. **Week 3-4:** Implement migration in development environment
3. **Week 5:** Test thoroughly
4. **Week 6:** Deploy to production
5. **Week 7+:** Monitor and optimize

Good luck with your migration! 🚀

