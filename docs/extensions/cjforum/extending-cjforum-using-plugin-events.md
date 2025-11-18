---
id: extending-cjforum-using-plugin-events
title: Extending CjForum using plugin events
sidebar_label: Extending CjForum using plugin events
sidebar_position: 13
---

CjForum is not just full featured but also extendable. There are many plugin events the component triggers which you can use to extend the functionality provided by the component.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

The best way to get started on creating the plugin is to refer to the default Topics plugin provided with the CjForum package. It is the full featured implementation of most of the plugin events.

Following is the sample class without any plugin events declared. The plugin name is Topics, and the class name is prefixed with PlgCjForum.

```php
<?php
```php
/**
 * @package     corejoomla.administrator
 * @subpackage  com_cjforum
 *
 * @copyright   Copyright (C) 2009 - 2014 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;

require_once JPATH_ROOT.'/components/com_cjlib/framework/api.php';
require_once JPATH_ROOT.'/components/com_cjforum/router.php';
require_once JPATH_ROOT.'/components/com_cjforum/helpers/route.php';
 
class PlgCjForumTopics extends JPlugin
{
	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		$this->loadLanguage();
		$this->loadLanguage('com_cjforum', JPATH_ROOT);
	}
	// your plugin events declaration goes here..
}
```

## Plugin Events

CjForum defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onTopicBeforeSave

This event will be triggered before saving the topic to database. Return false from this event will stops saving the topic.

```php
public function onTopicBeforeSave($context, $topic, $isNew)
{
   // do your stuff
   return true;
}
```

### onReplyBeforeSave

This event will be triggered before saving the reply to database. Return false from this event will stops saving the reply.

```php
public function onReplyBeforeSave($context, $topic, $isNew)
{
   // do your stuff
   return true;
}
```

### onTopicBeforeDelete

This event will be triggered before deleting a topic from database. Return false from this event will stops deleting the topic.

```php
public function onTopicBeforeDelete($context, $topic)
{
   // do your stuff
   return true;
}
```

### onReplyBeforeDelete

This event will be triggered before deleting a reply from database. Return false from this event will stops deleting the reply.

```php
public function onReplyBeforeDelete($context, $reply)
{
   // do your stuff
   return true;
}
```

### onTopicChangeState

This event will be triggered before change of one or more topics state, i.e. unpublished, trash etc. Return false from this event will stops changing state.

```php
public function onTopicChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onReplyChangeState

This event will be triggered before change of one or more replies state, i.e. unpublished, trash etc. Return false from this event will stops changing state.

```php
public function onReplyChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onTopicAfterSave

This event will be triggered after saving the topic to database.

```php
public function onTopicAfterSave($context, $topic, $isNew)
{
   // do your stuff
}
```

### onReplyAfterSave

This event will be triggered after saving the reply to database.

```php
public function onReplyAfterSave($context, $reply, $isNew)
{
   // do your stuff
}
```

### onTopicAfterLike

This event will be triggered after a user likes the topic.

```php
public function onTopicAfterLike($context, $rating)
{
   // do your stuff
}
```

### onReplyAfterLike

This event will be triggered after a user likes the reply.

```php
public function onReplyAfterLike($context, $rating)
{
   // do your stuff
}
```

### onReplyAfterThankyou

This event will be triggered after a user said thank you for the reply.

```php
public function onReplyAfterThankyou($context, $thankyou)
{
   // do your stuff
}
```

## Plugin installer

Finally you need to have your plugin installer xml file as shown below.
```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="cjforum" method="upgrade">
    <name>CoreJoomla - YourPlugin</name>
    <creationDate>14-01-2014</creationDate/>/
    <author>Your Name</author>
    <authorEmail>Your email</authorEmail>
    <authorUrl>Your email</authorUrl>
    <copyright>All rights reserved by your company 2003-14.</copyright>
    <license>http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL</license>
    <version>1.0.0</version>
    <description>Some description</description>
    <files>
        <filename>pluginname.xml</filename>
        <filename plugin="pluginname">pluginname.php</filename>
    </files>
 
    <config>
        <fields name="params">
            <fieldset name="basic">
            </fieldset>
        </fields>
    </config>
</extension>
```