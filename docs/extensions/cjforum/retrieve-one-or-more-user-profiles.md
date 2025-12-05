---
id: retrieve-one-or-more-user-profiles
title: Retrieve one or more user profiles
sidebar_label: Retrieve one or more user profiles
sidebar_position: 2
---

:::danger DEPRECATED - Legacy API
This documentation describes the **legacy API (CjForum 5.x and earlier)** which is deprecated and will be removed in a future version.

**Please use the new modern SDK for CjForum 6.0+:**
- [CjForum SDK Overview](sdk-overview)
- [Profile System SDK Quick Start](sdk-profile-quick-start)
- [Complete SDK Integration Guide](sdk-integration-guide)

The new SDK provides better performance, type safety, and follows modern Joomla best practices.
:::

This guide shows you how to retrieve user profile information from CjForum in your custom Joomla extensions.

Add the required CjForum API library:

require_once JPATH_ROOT.'/components/com_cjforum/lib/api.php';

Now get the profile API:

```php
$profileApi = CjForumApi::getProfileApi();
```

## Syntax:

Full Syntax of the getUserProfileAPI call:

```php
getUserProfile($identifiers, $force_reload = false)
$identifiers &#8211; int/array or intsSingle user id or array of user ids for which the user profiles need to be fetched. If array of user ids given, the function will return associative array of user profiles with user id as key. Required parameter.
$force_reload &#8211; booleanIf true, the function will force reload the users from the database even if they are present in cache.
```

## Examples:

Get profile of given user id:

```php
$profile = $profileApi->getUserProfile($userId);
```

Get profile of multiple user ids:

```php
$userIds = array(62,63,64);
$profiles = $profileApi->getUserProfile($userIds);
```

## Returned profile object

The API will return associative array of the profile fields or array of profiles. Below is the list of fields in profile that will be returned.

```javascript
 array (size=40)
 'id' => string '62'
 'name' => string 'Administrator'
 'username' => string 'admin'
 'email' => string 'user@me.com'
 'avatar' => string 
 'about' => 'Something about the author'
 'hits' => string '0'
 'birthday' => string '0000-00-00'
 'last_post_time' => string '0000-00-00 00:00:00'
 'points' => string '0'
 'topics' => string '0'
 'replies' => string '0'
 'fans' => string '0'
 'thankyou' => string '0'
 'signature' => null
 'banned' => string '0000-00-00 00:00:00'
 'last_access_date' => null
 'current_access_date' => null
 'block' => string '0'
 'registerDate' => string '2009-09-09 06:34:33'
 'lastvisitDate' => string '2015-08-29 09:47:56'
 'params' => string '{"admin_language":"","language":"","editor":"","helpsite":"","timezone":"","admin_style":""}'
 'rank_id' => string '0'
 'rank_title' => string 'Moderators'
 'rank_type' => 0 for standard, 1 for special
 'min_posts' => string '0'
 'rank_image' => null
 'rank_class' => string 'fa fa-favorite'
 'catid' => string '0'
 'handle' => string 'admin'
 'gender' => string '0'
 'location' => null
 'twitter' => null
 'facebook' => null
 'gplus' => null
 'linkedin' => null
 'flickr' => null
 'bebo' => null
 'skype' => null
```