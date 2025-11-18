---
id: using-cjblog-profile-system
title: Using CjBlog profile system
sidebar_label: Using CjBlog profile system
sidebar_position: 1
---

## Prerequisites

```php
$api = JPATH_ROOT.'/components/com_cjblog/api.php';
if(file_exists($api))
{
  include_once $api;
  //rest of integration code here
}

```

## Prefetching Users

If you are loading multiple user profiles at a time, it is good idea to pre-fetch all such user profiles at once which will save some DB calls and thereby improves performance.
[Pre-fetching CjBlog user profiles](https://docs.corejoomla.com/Pre-fetching_CjBlog_user_profiles)

## Get User Profile Link

If you are displaying multiple user profile links on a page, prefetch the users before or load all user profile links as shown below. The same call can be used to fetch single user profile link when userid passed as an integer value.

```php
$links = CjBlogApi::get_user_profile_url($userids, $displayname, $path_only, $attribs, $xhtml, $ssl);

```

- $userids &#8211; mixed &#8211; user ids of one or more users. If numeric id of single user is passed, the API will return user profile link of that user. If array of multiple user ids is passerd, the API will return associative array of user profile links indexed on user id.
- $displayname &#8211; string &#8211; optional &#8211; valid values are name and username
- $path_only &#8211; boolean &#8211; optional &#8211; tells if API needs to load the URL of the user profile or full HTML markup of the user profile link.
- $attribs &#8211; array &#8211; optional &#8211; an associative array of HTML hyperlink attributes (name, value pairs)
- $xhtml &#8211; boolean &#8211; optional &#8211; tells if API needs to load xhtml valid link
- $ssl &#8211; boolean &#8211; optional &#8211; to load secure link

## Get just the user profile image

Sometimes, you want to integrate the CjBlog user avatar but not the user profile. In such cases, this function will help you get the user profile image instead of full hyperlinked image.

```php
$image = get_user_avatar_image($identifiers, $size, $force_reload);

```

- $identifiers &#8211; mixed &#8211; numeric value of user id in case single user needs to be loaded, array of ids otherwise. The output is single user avatar image in case numeric id is passed, otherwise returns associative array of user avatar images indexed on user id.
- $size &#8211; number &#8211; optional &#8211; size of the image to be loaded. Recommended values are 16, 32, 48, 64, 96, 128, 160, 192, 256. default is 48.
- $force_reload &#8211; boolean &#8211; optional &#8211; loads the user from database even if the user is already loaded. default is false.

## Getting user profile

Get the full user profile.

```php
$profile = CjBlogApi::get_user_profile($user_ids, $force);

```

- $user_ids &#8211; integer or array of integers &#8211; user ids
- $force &#8211; optional &#8211; forces the system to load profile from database even if it is already loaded. default is false.