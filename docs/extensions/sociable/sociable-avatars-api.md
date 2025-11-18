---
id: sociable-avatars-api
title: Sociable Avatars API
sidebar_label: Sociable Avatars API
sidebar_position: 7
---

## Prerequisites:

Add the required Sociable API library:

require_once JPATH_ROOT.'/components/com_sociable/lib/api.php';

Now get the profile API:

```php
$profileApi = SociableApi::getProfileApi();

```

## Syntax: getUserAvatar

Syntax of the getUserAvatar API call to get full HTML image tag linked to Sociable profile page of the user:

getUserAvatar($identifiers, $size = 48, $username = 'name', array $attribs = array(), array $image_attribs = array())

- $identifiers &#8211; int/array or int Single user id or array of user ids for which the user avatars need to be fetched. If an array of user ids are given, the function will return an associative array of user profile URLs/links with user id as a key. Required parameter.

- $size &#8211; int Size of the avatar image in pixels. Default 48, optional parameter.

- $username &#8211; string Type of the user name to be used as alt text. Possible values are name and username. Default: name. Optional parameter.

- $attribs &#8211; array Associative array of key-value pairs used for building HTML link attributes. Default: array(). Optional parameter.

- $image_attribs &#8211; array Associative array of key-value pairs used for building HTML image attributes. Default: array(). Optional parameter.

### Examples:

Get an avatar of the user with full HTML markup, linked to the user profile page.

```php
$avatarLink = $profileApi->getUserAvatar($userId, 48, 'username');

```

Get avatar of the user with full HTML markup, linked to the user profile page, with the user&#8217;s original name as display name:

```php
$avatarLink = $profileApi->getUserAvatar($userId, 64, 'name');

```

Get user avatar with some attributes to the HTML link and image of the markup produced by function call:

```php
$avatarLink = $profileApi->getUserAvatar($userId, 48, 'name', array('class'=>'avatarlink'), array('class'=>'avatar', 'style'=>'border: 1px solid #ccc'));

```

## Syntax: getUserAvatarImage

Syntax of the getUserAvatarImage API call to get the location of the user avatar image:

getUserAvatarImage($identifiers, $size = 48, $force_reload = false)

- $identifiers &#8211; int/array or int Single user id or array of user ids for which the user avatar images need to be fetched. If an array of user ids are given, the function will return an associative array of user profile URLs/links with user id as a key. Required parameter.

- $size &#8211; int Size of the avatar image in pixels. Default 48, optional parameter.

- $force_reload &#8211; boolean If true, the user avatar name will be fetched from the database even if it exists in the cache. Optional parameter.

### Examples:

Get location of the user avatar with size 48 pixels.

```php
$url = $profileApi->getUserAvatarImage($userId, 48);

```

Get avatar images of a set of users:

```php
$url = $profileApi->getUserAvatarImage($userIds, 64);
```
