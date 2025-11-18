---
id: sociable-activity-stream-api
title: Sociable Activity Stream API
sidebar_label: Sociable Activity Stream API
sidebar_position: 8
---

## Prerequisites:

Add the required Sociable API library:

require_once JPATH_ROOT.'/components/com_sociable/lib/api.php';

Now get the Stream API:

```php
$streamApi = SociableApi::getStreamApi();
```

## Creating rules XML file

A rules xml file needs to be created with all rules which you would like to provide with your component. An example of the rules xml file is:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sociable>
	<activity_rule>
		<name>com_mycompopnent.eventname</name>
		<asset_name>com_mycomponent</asset_name>
		<title>My event name</title>
		<description>Activity of user status post.</description>
		<ui_layout>activity.layouts.status</ui_layout>
		<state>1</state>
		<access>1</access>
		<language>*</language>
	</activity_rule>
</sociable>
```
Save this file as **administrator/components/com_mycomponentname/sociable_rules.xml**. You can package the xml file with your component so that it will be automatically installed along with your component. After installing the file, users can scan for rules and the rules will automatically gets installed. The same xml file may contain multiple activity rules as well as points rules.

### Explanation
```markdown
- <name> &#8211; A unique name to your rule
- <asset_name> &#8211; extension name, e.g. com_cjforum
- <title> &#8211; title shown for activity detail
- <description> &#8211; brief description of the activity rule
- <ui_layout> &#8211; to render complex html for on the wall, use JLayouts. Ex. for value &#8220;activity.layouts.status&#8221; &#8211; file should be in components/com_mycomponent/layouts/activity/layouts/status
- <state> &#8211; default state of the rule when it is installed. set 1 to publish state, 0 for unpublished state
- <access> &#8211; access level of this rule, awarded to users only if his access level satisfies. 1 for public user.
- <language> &#8211; default language of this activity, set to * for all languages.
```
## Syntax: push

Full Syntax of the push API call:

```php
push($activity)

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