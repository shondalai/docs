---
id: sociable-points-system-api
title: Sociable Points System API
sidebar_label: Sociable Points System API
sidebar_position: 3
---

## Prerequisites:

Add the required Sociable API library:

require_once JPATH_ROOT.'/components/com_sociable/lib/api.php';

Now get the Points API:

```php
$pointsApi = SociableApi::getPointsApi();
```

## Creating rules XML file

A rules xml file needs to be created with all rules which you would like to provide with your component. An example of the rules xml file is:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sociable>
	<points_rule>
		<name>com_mycomponent.eventname</name>
		<asset_name>com_mycomponent</asset_name>
		<title>Some title</title>
		<description>Points awarded for something</description>
		<points>0</points>
		<type>articles</type>
		<state>1</state>
		<auto_approve>1</auto_approve>
		<access>1</access>
	</points_rule>
</sociable>
```

Save this file as **administrator/components/com_mycomponentname/sociable_rules.xml**. You can package the xml file with your component so that it will be automatically installed along with your component. After installing the file, users can scan for rules and the rules will automatically gets installed. You may want to add as many points_rule elements as you need for your component.

### Explanation
```markdown
**<name>** &#8211; A unique name to your rule
**<asset_name>** &#8211; extension name, e.g. com_cjforum
**<title>** &#8211; title shown for points detail
**<description>** &#8211; brief description of the points rule
**<type>** &#8211; Type such as article, poll, media, custom **<points>** &#8211; default amount of points awarded in case site administrator do not configure this
**<auto_approve>** &#8211; if set to 1, points will be published automatically without administrator approval
**<access>** &#8211; access level of this rule, awarded to users only if his access level satisfies. 1 for public user.
```

## Syntax: awardPoints

Full Syntax of the awardPoints API call:

awardPoints($ruleId, $userId = 0, $points = 0, $reference = null, $title = null, $description = null)

```php
$ruleId &#8211; stringname of the rule for which you are triggering the points rule.$userId &#8211; intid of the user to whom points will be awarded. If not provided or provided 0 as value, logged in user id will be taken. Optional parameter.$points &#8211; intamount of points need to be awarded. If not provided or provided 0 as value, points set by the administrator in rule configuration will be taken. Optional parameter.$reference &#8211; anyprimary key value used for restricting multiple points awarded for the same asset. For example, to restrict awarding multiple points when an article is read, give article id as reference number.$title &#8211; stringtitle to be shown about this award. If not given/null, the title from the rule configuration will be taken. Optional parameter.$description &#8211; stringdescription to be shown about this award. If not given/null, the description from the rule configuration will be taken. Optional parameter.
```

### Examples:

Award points to the logged in user when a user submitted an article (example rule id com_content.create_article)

```php
$pointsApi->awardPoints('com_content.create_article');
```

Award points to the logged in user when a user submitted an article (example rule id com_content.read_article) and restrict awarding points one time for this article.

```php
$pointsApi->awardPoints('com_content.read_article', 0, 0, $articleId);
```

Award 10 points to user when user with id 92 do some task on your component (example rule name: com_mycomponent.my_rule_name):

```php
$pointsApi->awardPoints('com_mycomponent.my_rule_name', 92, 10);
```