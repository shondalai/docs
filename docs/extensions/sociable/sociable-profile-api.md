---
id: sociable-profile-api
title: Sociable Profile API
sidebar_label: Sociable Profile API
sidebar_position: 2
---

## Prerequisites:

Add the required Sociable API library:
```php
require_once JPATH_ROOT.'/components/com_sociable/lib/api.php';
```
Now get the profile API:

```php
$profileApi = SociableApi::getProfileApi();
```

## Syntax: getUserProfile

Syntax of the getUserProfile API call to get full details of the user profile:

```php
getUserProfile($identifiers, $forceReload = false)

**$identifiers &#8211; int/array or ints **
```

Single user id or array of user ids for which the user profile needs to be fetched. If an array of user ids are given, the function will return an associative array of user-profiles with user id as a key. Required parameter.

```php
**$forceReload &#8211; boolean**
```

Force reload data from the database instead of using cache