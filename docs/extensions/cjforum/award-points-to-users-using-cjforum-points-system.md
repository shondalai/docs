---
id: award-points-to-users-using-cjforum-points-system
title: Award points to users using CjForum Points System
sidebar_label: Award points to users using CjForum Points System
sidebar_position: 23
---

:::danger DEPRECATED - Legacy API
This documentation describes the **legacy API (CjForum 5.x and earlier)** which is deprecated and will be removed in a future version.

**Please use the new modern SDK for CjForum 6.0+:**
- [CjForum SDK Overview](sdk-overview)
- [Points System SDK Quick Start](sdk-points-quick-start)
- [Complete SDK Integration Guide](sdk-integration-guide)

The new SDK provides better performance, type safety, and follows modern Joomla best practices.
:::

The CjForum Points System allows you to award points to users for various activities in your Joomla extensions. This guide explains how to integrate the points system into your custom components.

## Prerequisites

Add the required CjForum API library:

```php
require_once JPATH_ROOT . '/components/com_cjforum/lib/api.php';
```

Now get the Points API:

```php
$pointsApi = CjForumApi::getPointsApi();
```

## Creating rules XML file

To integrate your component with the CjForum Points System, you need to create a rules XML file that defines all the point-awarding rules for your component.

### Example Rules XML

Create a file with the following structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
	<points_rule>
		<name>com_cjforum.new_topic</name>
		<appname>com_cjforum</appname>
		<title>New topic</title>
		<description>Points awarded for posting a topic.</description>
		<points>1</points>
		<state>1</state>
		<auto_approve>1</auto_approve>
		<access>1</access>
	</points_rule>
</cjforum>
```

Save this file as `administrator/components/com_mycomponentname/cjforum_rules.xml`. 

You can package this XML file with your component so it will be automatically installed. After installation, users can scan for rules in the CjForum administration panel, and the rules will be automatically imported. You can add multiple `<points_rule>` elements as needed for your component.

### XML Element Reference

| Element | Description |
|---------|-------------|
| `<name>` | A unique identifier for your rule (e.g., `com_mycomponent.action_name`) |
| `<appname>` | The extension name (e.g., `com_cjforum`, `com_mycomponent`) |
| `<title>` | Display title shown in points details |
| `<description>` | Brief description of what the points rule rewards |
| `<points>` | Default points amount (used if administrator doesn't configure custom value) |
| `<state>` | Rule state: `1` for published, `0` for unpublished |
| `<auto_approve>` | Auto-approve points: `1` for automatic, `0` requires admin approval |
| `<access>` | Access level for the rule (`1` = Public, `2` = Registered, etc.) |
## Using the awardPoints API

### Method Signature

```php
awardPoints($ruleId, $userId = 0, $points = 0, $reference = null, $title = null, $description = null)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `$ruleId` | string | Yes | The unique name of the rule for which you are awarding points (e.g., `com_mycomponent.action_name`) |
| `$userId` | int | No | ID of the user to award points to. Defaults to `0` (current logged-in user) |
| `$points` | int | No | Amount of points to award. Defaults to `0` (uses value configured by administrator in rule settings) |
| `$reference` | mixed | No | Primary key value to prevent duplicate point awards for the same asset (e.g., article ID to prevent multiple awards for reading the same article) |
| `$title` | string | No | Custom title for this award. Defaults to `null` (uses title from rule configuration) |
| `$description` | string | No | Custom description for this award. Defaults to `null` (uses description from rule configuration) |

### Usage Examples

#### Example 1: Basic Usage

Award points to the logged-in user when they submit an article:

```php
$pointsApi->awardPoints('com_content.create_article');
```

#### Example 2: Preventing Duplicate Awards

Award points when a user reads an article, but only once per article:

```php
$pointsApi->awardPoints('com_content.read_article', 0, 0, $articleId);
```

The `$articleId` reference ensures the user can only earn points once for reading this specific article.

#### Example 3: Custom Points and User

Award 10 points to a specific user (ID: 92) when they complete a task:

```php
$pointsApi->awardPoints('com_mycomponent.my_rule_name', 92, 10);
```

#### Example 4: Custom Title and Description

Award points with custom messaging:

```php
$pointsApi->awardPoints(
    'com_mycomponent.special_achievement',
    0,
    50,
    null,
    'Special Achievement Unlocked!',
    'You have completed all beginner tutorials.'
);
```

## Advanced Usage

### Creating Multiple Rules

You can define multiple rules in a single XML file for different activities:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cjforum>
	<points_rule>
		<name>com_mycomponent.create_item</name>
		<appname>com_mycomponent</appname>
		<title>Create Item</title>
		<description>Points awarded for creating a new item.</description>
		<points>5</points>
		<state>1</state>
		<auto_approve>1</auto_approve>
		<access>1</access>
	</points_rule>
	<points_rule>
		<name>com_mycomponent.edit_item</name>
		<appname>com_mycomponent</appname>
		<title>Edit Item</title>
		<description>Points awarded for editing an item.</description>
		<points>2</points>
		<state>1</state>
		<auto_approve>1</auto_approve>
		<access>1</access>
	</points_rule>
	<points_rule>
		<name>com_mycomponent.delete_item</name>
		<appname>com_mycomponent</appname>
		<title>Delete Item</title>
		<description>Points deducted for deleting an item.</description>
		<points>-3</points>
		<state>1</state>
		<auto_approve>1</auto_approve>
		<access>1</access>
	</points_rule>
</cjforum>
```

### Using Negative Points

You can deduct points by setting a negative value in the `<points>` element or by passing a negative value when calling `awardPoints()`:

```php
// Deduct 5 points for rule violation
$pointsApi->awardPoints('com_mycomponent.rule_violation', 0, -5);
```

## Best Practices

1. **Use Descriptive Rule Names**: Follow the naming convention `com_componentname.action_name` for clarity and consistency.

2. **Prevent Duplicate Awards**: Always use the `$reference` parameter when awarding points for actions that should only be rewarded once per unique asset.

3. **Let Admins Control Points**: Use `0` for the points parameter in `awardPoints()` to allow site administrators to configure point values through the CjForum admin interface.

4. **Document Your Rules**: Provide clear titles and descriptions in your XML file so administrators understand what each rule does.

5. **Consider Access Levels**: Set appropriate access levels to ensure points are awarded only to users with proper permissions.

6. **Use Auto-Approve Wisely**: For critical actions, consider setting `<auto_approve>0</auto_approve>` to require admin approval before points are credited.

## Troubleshooting

### Rules Not Appearing

If your rules don't appear after installation:

1. Verify the XML file is located at `administrator/components/com_yourcomponent/cjforum_rules.xml`
2. Navigate to CjForum administration panel
3. Click "Scan for Rules" to import them
4. Check that the XML structure matches the required format

### Points Not Being Awarded

If points aren't being awarded:

1. Verify the rule name in your code matches the `<name>` in your XML file exactly
2. Check that the rule is published (`<state>1</state>`)
3. Ensure the user's access level satisfies the rule's access requirement
4. Verify CjForum is installed and the Points System is enabled
5. Check if `auto_approve` is set to `0` - points may be pending admin approval

### Duplicate Points Being Awarded

If users receive points multiple times for the same action:

1. Always use the `$reference` parameter with a unique identifier
2. Ensure the reference value is consistent for the same asset (e.g., always use the article ID, not a random value)

