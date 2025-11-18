---
id: extending-community-answers-using-plugin-events
title: Extending Community Answers using plugin events
sidebar_label: Extending Community Answers using plugin events
sidebar_position: 4
---

Community Answers is not just full featured but also extendible. There are many plugin events the component triggers which you can use to extend the functionality provided by the component.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

The best way to get started on creating the plugin is to refer to the default Questions plugin provided with the Community Answers package. It is the full featured implementation of most of the plugin events.

Following is the sample class without any plugin events declared. The plugin name is Questions, and the class name is prefixed with PlgCommunityanswers.

```php
<?php
```php
/**
 * @package     corejoomla.administrator
 * @subpackage  com_communityanswers
 *
 * @copyright   Copyright (C) 2009 - 2015 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;
```
 
```

require_once JPATH_ROOT.'/components/com_cjlib/framework/api.php';
require_once JPATH_ROOT.'/components/com_communityanswers/router.php';
require_once JPATH_ROOT.'/components/com_communityanswers/helpers/route.php';
 
```php
class PlgCommunityanswersQuestions extends JPlugin
{
	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		$this->loadLanguage();
		$this->loadLanguage('com_communityanswers', JPATH_ROOT);
	}
}
```

## Plugin Events

Community Answers defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onQuestionBeforeSave

This event will be triggered before saving the question to database. Return false from this event will stops saving the question.

```php
public function onQuestionBeforeSave($context, $question, $isNew)
{
   // do your stuff
   return true;
}
```

### onReplyBeforeSave

This event will be triggered before saving the answer to database. Return false from this event will stops saving the answer.

```php
public function onReplyBeforeSave($context, $reply, $isNew)
{
   // do your stuff
   return true;
}
```

### onQuestionBeforeDelete

This event will be fired before deleting a question.

```php
public function onQuestionBeforeDelete($context, $question)
{
   // do your stuff
   return true;
}
```

### onReplyBeforeDelete

This event will be fired before deleting an answer.

```php
public function onReplyBeforeDelete($context, $answer)
{
   // do your stuff
   return true;
}
```

### onQuestionChangeState

This event will be triggered before any change of the state of a question(s) such as unpublishing, trashing or deleting.

```php
public function onQuestionChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onReplyChangeState

This event will be triggered before any change of the state of answers such as unpublishing, trashing or deleting.

```php
public function onReplyChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onQuestionAfterSave

This event will be fired after saving the question to database.

```php
public function onQuestionAfterSave($context, $question, $isNew)
{
  // do your stuff
}
```

### onReplyAfterSave

This event will be fired after saving the answer to database.

```php
public function onReplyAfterSave($context, $reply, $isNew)
{
  // do your stuff
}
```

### onQuestionAfterLike

This event will be fired after a user likes a question

```php
public function onQuestionAfterLike($context, $rating)
{
  // do your stuff
}
```

### onReplyAfterLike

This event will be fired after a user likes an answer

```php
public function onReplyAfterLike($context, $rating)
{
  // do your stuff
}
```

### onReplyAfterAccepted

This event will be fired after the owner of the question accepted an answer as best answer.

```php
public function onReplyAfterAccepted($context, $reply)
  // do your stuff
}
```

### onQuestionAfterComment

This event fires after a user adds a new comment on a question. Please note that this is a comment not the answer.

```php
public function onQuestionAfterComment($context, $comment)
  // do your stuff
}
```

### onReplyAfterComment

This event fires after a user adds a new comment on an answer.

```php
public function onReplyAfterComment($context, $comment)
  // do your stuff
}
```

### onQuestionAfterDelete

This event will be fired after deleting one or more questions.

```php
public function onQuestionAfterDelete($context, $question)
{
  // do your stuff
}
```

### onReplyAfterDelete

This event will be fired after deleting one or more answers.

```php
public function onReplyAfterDelete($context, $reply)
{
  // do your stuff
}
```

## Plugin installer

Finally you need to have your plugin installer xml file as shown below.
```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="communityanswers" method="upgrade">
    <name>CoreJoomla - YourPlugin</name>
    <creationDate>21-06-2016</creationDate/>/
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