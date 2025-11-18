---
id: pre-fetching-cjblog-user-profiles
title: Pre-fetching CjBlog user profiles
sidebar_label: Pre-fetching CjBlog user profiles
sidebar_position: 3
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

If you do not want to load all avatars at a time, you can prefetch the users so that you can get the user profile/avatar at any point of time during Joomla request life cycle. Note that getting multple avatars using get_user_avatar will automaically call this function.
Simply call the load_users api call

CjBlogApi::load_users($ids, false);

The second parameter tells the API to force reload the user even if the user is already loaded. Now you can get single user avatar or profile without worrying about loading users.