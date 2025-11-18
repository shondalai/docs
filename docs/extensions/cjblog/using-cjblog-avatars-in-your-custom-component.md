---
id: using-cjblog-avatars-in-your-custom-component
title: Using CjBlog avatars in your custom component
sidebar_label: Using CjBlog avatars in your custom component
sidebar_position: 2
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

If you are loading multiple user avatars at a time, it is good idea to pre-fetch all such user profiles at once which will save some DB calls and thereby improves performance.
[Pre-fetching CjBlog user profiles](https://docs.corejoomla.com/Pre-fetching_CjBlog_user_profiles)

## Loading Single User Avatar

If you are loading an avatar of a single user, you can use the following code to load the avatar. This will output the user avatar linked to the profile of the CjBlog user profile.

echo CjBlogApi::get_user_avatar($userid, $height, $displayname, $attribs, $img_attribs);

- $userid &#8211; number &#8211; ID of the user
- $height &#8211; number &#8211; optional &#8211; Image height. Recommended values are 16, 32, 48, 64, 96, 128, 160, 192, 256. default is 48
- $displayname &#8211; string &#8211; optional &#8211; valid values are name and username. default is name
- $attribs &#8211; array &#8211; optional &#8211; an associative array of attributes for the user profile link. ex: array(&#8216;class&#8217;=>&#8217;thumbnail&#8217;)
- $img_attribs &#8211; array &#8211; optional &#8211; an associative array of attributes for the image. ex. array(&#8216;title&#8217;=>&#8217;Test User&#8217;)

## Loading Multiple User Avatars

If you are loading multiple user avatars, for example on a listing page, loading all user avatars at a time will reduces number of calls to the database and increase performance. You can simply pass an array of user ids to the avatar API as if you are loading single user avatar.

```php
$avatars = CjBlogApi::get_user_avatar($userids, $height, $displayname, $attribs, $img_attribs);

```

- $userids is an array of user ids.
- Rrturns &#8211; An associative array with index as user id and value as user avatar linked with CjBlog user profile.