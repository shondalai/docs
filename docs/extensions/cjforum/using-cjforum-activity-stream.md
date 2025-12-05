---
id: using-cjforum-activity-stream
title: Using CjForum activity stream
sidebar_label: Using CjForum activity stream
sidebar_position: 2
---

:::danger DEPRECATED - Legacy API
This documentation describes the **legacy API (CjForum 5.x and earlier)** which is deprecated and will be removed in a future version.

**Please use the new modern SDK for CjForum 6.0+:**
- [CjForum SDK Overview](sdk-overview)
- [Activity Stream SDK Quick Start](sdk-stream-quick-start)
- [Complete SDK Integration Guide](sdk-integration-guide)

The new SDK provides better performance, type safety, and follows modern Joomla best practices.
:::

## Prerequisites:

Add the required CjForum API library:

require_once JPATH_ROOT.'/components/com_cjforum/lib/api.php';

Now get the Stream API:

```php
$streamApi = CjForumApi::getStreamApi();
```

## Creating rules XML file

A rules xml file needs to be created with all rules which you would like to provide with your component. An example of the rules xml file is:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
	<activity_type>
		<name>com_cjforum.topic_reply</name>
		<appname>com_cjforum</appname>
		<title>Reply to a topic</title>
		<description>Activity about new topic reply.</description>
		<state>1</state>
		<access>1</access>
		<language>*</language>
	</activity_type>
</cjforum>
```
Save this file as **administrator/components/com_mycomponentname/cjforum_rules.xml**. You can package the xml file with your component so that it will be automatically installed along with your component. After installing the file, users can scan for rules and the rules will automatically gets installed. The same xml file may contain multiple activity rules as well as points rules.

### Explanation

```markdown
- <name> &#8211; A unique name to your rule
- <appname> &#8211; extension name, e.g. com_cjforum
- <title> &#8211; title shown for activity detail
- <description> &#8211; brief description of the activity rule
- <state> &#8211; default state of the rule when it is installed. set 1 to publish state, 0 for unpublished state
- <access> &#8211; access level of this rule, awarded to users only if his access level satisfies. 1 for public user.
- <language> &#8211; default language of this activity, set to * for all languages.
```
## Syntax: push

Full Syntax of the push API call:

push($activity)

```php
$activity &#8211; objectan object with following properties.
- $activity->type -> activity type, e.g. com_cjforum.newtopic
- $activity->title -> title of the activity
- $activity->description -> description of the activity
- $activity->userId -> optional, user who&#8217;s activity is being added.
- $activity->featured -> optional, is this featured?
- $activity->language -> optional, language
- $activity->itemId -> optional, activity attached to an item
- $activity->parentId -> optional, parent id of this item_id
- $activity->length -> optional, description length
```
### Examples:

An example function call to push an activity

```php
$streamApi->push($activity);
```