---
id: sociable-badges-api
title: Sociable Badges API
sidebar_label: Sociable Badges API
sidebar_position: 6
---

## Prerequisites:

Add the required Sociable API library:

require_once JPATH_ROOT.'/components/com_sociable/lib/api.php';

Now get the profile API:

```php
$badgeApi = SociableApi::getBadgesApi();
```

## Rules XML File

Create sociable_rules.xml either in your component administrator folder or site folder (e.g. administrator/components/com_sociable) with the content like below.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sociable>
	<badge_rule>
		<name>{rule name}</name>
		<asset_name>{asset name}</asset_name>
		<title>{title}</title>
		<introtext>{brief intro}</introtext>
		<description>{badge description}</description>
		<rule_content>{rule conditions}</rule_content>
		<image_path>{image}</image_path>
		<class_name>{icon font}</class_name>
		<state>{state}</state>
		<access>{access}</access>
	</badge_rule>
</sociable>
```

```markdown
- {rule name} &#8211; the rule namee.g. com_sociable.photos.create
- {asset name} &#8211; your component namee.g. com_sociable
- {title} &#8211; title of the badgee.g. Post Photos
- {brief intro} &#8211; small intro about the badgee.g. Submit N Photos
- {badge description} &#8211; badge descriptiondescription shown below the title of the badge e.g. To unlock this badge, submit 10 photos.
- {rule conditions} &#8211; json formated rulese.g. {&#8220;condition&#8221;: &#8220;AND&#8221;, &#8220;rules&#8221;: , &#8220;valid&#8221;: true}
- {image} &#8211; badge imageif you want to use image shown for the badge, use this. absolute url of the image or url relative to the site root.
- {icon font} &#8211; badge icon for badge image you can use icon fonts instead of the image above. for example, fa fa-camera
- {state} &#8211; published state default state of the rule when published, for example, 1
- {access} &#8211; user access level default access level, for example, 1
```
## Syntax: getUserProfile

Syntax of the getBadgesApi API call to award a badge to the user:

getBadgesApi($ruleName, $values, $options)

```php
$ruleName &#8211; rule namethe rulename that you defined in your rules xml file. For example, &#8216;com_sociable.photos.create&#8217;$values &#8211; arrayAssociative array of values that are validated to award the badge. For example, in your rule, you defined 10 photos to get this award, the values can be something like array(&#8216;photos&#8217; => $photosCount) where photos is the &#8220;field&#8221; attribute defined in your rules conditions$options &#8211; arrayArray of options, for example to restrict the badge to be awarded only once to the user; pass array(&#8216;ref_id&#8217; => $user->id)
```

## Award Badges

Now once the rules XML file is available, you can scan for rules from Badges Rules page of Sociable and the rules will be auto-detected.

To award, a badge to the user, use the following example syntax using the badges API object created in the Prerequisites section.

```php
$badgeApi->trigger('com_sociable.photos.create', array('photos' => $photosCount), array('ref_id' => $user->id));
```