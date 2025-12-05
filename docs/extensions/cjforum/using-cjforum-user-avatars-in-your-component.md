---
id: using-cjforum-user-avatars-in-your-component
title: Using CjForum user avatars in your component
sidebar_label: Using CjForum user avatars in your component
sidebar_position: 3
---

:::danger DEPRECATED - Legacy API
This documentation describes the **legacy API (CjForum 5.x and earlier)** which is deprecated and will be removed in a future version.

**Please use the new modern SDK for CjForum 6.0+:**
- [CjForum SDK Overview](sdk-overview)
- [Profile System SDK Quick Start](sdk-profile-quick-start)
- [Complete SDK Integration Guide](sdk-integration-guide)

The new SDK provides better performance, type safety, and follows modern Joomla best practices.
:::

If you would like to display CjForum user avatars in your custom Joomla component, you can easily do so using the CjForum Profile API.

Add the required CjForum API library:

require_once JPATH_ROOT.'/components/com_cjforum/lib/api.php';

Now get the profile API:

```php
$profileApi = CjForumApi::getProfileApi();

```

## Syntax: getUserAvatar

Syntax of the getUserAvatar API call to get full HTML image tag linked to CjForum profile page of the user:

getUserAvatar($identifiers, $size = 48, $username = 'name', array $attribs = array(), array $image_attribs = array())

$identifiers &#8211; int/array or intsSingle user id or array of user ids for which the user avatars need to be fetched. If array of user ids given, the function will return associative array of user profile urls/links with user id as key. Required parameter.$size &#8211; intSize of the avatar image in pixels. Default 48, optional parameter.$username &#8211; stringType of user name to be used as alt text. Possible values are name and username. Default: name. Optional parameter.$attribs &#8211; arrayAssociative array of key value pairs used for building HTML link attributes. Default: array(). Optional parameter.$image_attribs &#8211; arrayAssociative array of key value pairs used for building HTML image attributes. Default: array(). Optional parameter.

### Examples:

Get avatar of the user with full html markup, linked to user profile page.

```php
$avatarLink = $profileApi->getUserAvatar($userId, 48, 'username');

```

Get avatar of the user with full html markup, linked to user profile page, with user&#8217;s original name as display name:

```php
$avatarLink = $profileApi->getUserAvatar($userId, 64, 'name');

```

Get user avatar with some attributes to the html link and image of the markup produced by function call:

```php
$avatarLink = $profileApi->getUserAvatar($userId, 48, 'name', array('class'=>'avatarlink'), array('class'=>'avatar', 'style'=>'border: 1px solid #ccc'));

```

## Syntax: getUserAvatarImage

Syntax of the getUserAvatarImage API call to get location of the user avatar image:

getUserAvatarImage($identifiers, $size = 48, $force_reload = false)

$identifiers &#8211; int/array or intsSingle user id or array of user ids for which the user avatar images need to be fetched. If array of user ids given, the function will return associative array of user profile urls/links with user id as key. Required parameter.$size &#8211; intSize of the avatar image in pixels. Default 48, optional parameter.$force_reload &#8211; booleanif true, the user avatar name will be fetched from database even if it exists in cache. Optional parameter.

### Examples:

Get location of the user avatar with size 48 pixels.

```php
$url = $profileApi->getUserAvatarImage($userId, 48);

```

Get avatar images of set of users:

```php
$url = $profileApi->getUserAvatarImage($userIds, 64);
```
