---
id: link-user-names-to-cjforum-user-profile-in-your-component
title: Link user names to CjForum user profile in your component
sidebar_label: Link user names to CjForum user profile in your component
sidebar_position: 11
---

## Prerequisites:

Add the required CjForum API library:

require_once JPATH_ROOT.'/components/com_cjforum/lib/api.php';

Now get the profile API:

```php
$profileApi = CjForumApi::getProfileApi();

```

## Syntax:

Full Syntax of the getUserProfileLink API call:

getUserProfileLink($identifiers, $username = 'name', $path_only = false, $attribs = null, $xhtml = true, $ssl = null)

**$identifiers** &#8211; int/array or int Single user id or array of user ids for which the user profile links need to be fetched. If array of user ids given, the function will return associative array of user profile urls/links with user id as key. Required parameter.

**$path_only** &#8211; boolean If true, the function will return plain url of the user profile. Otherwise, it will return full HTML anchor link of the user profile page. Default: false. Optional parameter.

**$username** &#8211; string Type of user name to be retrieved. Applicable if $path_only is false. Possible values are name and username. Default: name. Optional parameter.

**$attribs** &#8211; array Associative array of key value pairs used for building HTML link attributes. Applicable only if $path_only is true. Default: null. Optional parameter.

**$xhtml** &#8211; boolean If true, gets the XHTML compatible code. Applicable only if $path_only is false. Default true. Optional parameter.

**$ssl **&#8211; int Secure state for the resolved URI. Default null. Optional parameter.

- null: (default) No change, use the protocol currently used in the request

- 1: Make URI secure using global secure site URI.

- 2: Make URI unsecure using the global unsecure site URI.

## Examples:

Get url for the profile page of given user id:

```
$url = $profileApi->getUserProfileLink($userId, 'name', true);
```

Get the full link of the user profile page with user&#8217;s original name as display name:

```
$url = $profileApi->getUserProfileLink($userId, 'name', false);
```

Get the full link of the user profile page with an attribute:

```
$url = $profileApi->getUserProfileLink($userId, 'name', false, array('class'=>'profilelink', 'style'=>'color: red'));
```