---
id: extending-community-quiz-using-plugin-events
title: Extending Community Quiz using plugin events
sidebar_label: Extending Community Quiz using plugin events
sidebar_position: 5
---

Community Quiz is not just full featured but also extendable. There are many plugin events the component triggers which you can use to extend the functionality provided by the component. Plugin events are supported in CQ v4 and above only.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

The best way to get started on creating the plugin is to refer to the default &#8220;Community Quiz &#8211; Quizzes&#8221; plugin provided with the Community Quiz package. It is the full featured implementation of most of the plugin events.

Following is the sample class without any plugin events declared. The plugin name is Quiz, and the class name is prefixed with PlgCommunityquiz.

```php
<?php
```php
/**
 * @package     corejoomla.administrator
 * @subpackage  com_communityquiz
 *
 * @copyright   Copyright (C) 2009 - 2015 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;
```
 
```

require_once JPATH_ROOT.'/components/com_cjlib/framework/api.php';
require_once JPATH_ROOT.'/components/com_communityquiz/router.php';
require_once JPATH_ROOT.'/components/com_communityquiz/helpers/route.php';
 
```php
class PlgCommunityquizQuiz extends JPlugin
{
	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		$this->loadLanguage();
		$this->loadLanguage('com_communityquiz', JPATH_ROOT);
	}
}
```

## Plugin Events

Community Quiz defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onQuizBeforeSave

This event will be triggered before saving the quiz to database. Return false from this event will stops saving the quiz.

```php
public function onQuizBeforeSave($context, $quiz, $isNew)
{
   // do your stuff
   return true;
}
```

### onQuizBeforeDelete

This event will be fired before deleting a quiz.

```php
public function onQuizBeforeDelete($context, $quiz)
{
   // do your stuff
   return true;
}
```

### onQuizChangeState

This event will be triggered before any change of the state of a quiz(s) such as unpublishing, trashing or deleting.

```php
public function onQuizChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onQuizAfterPublished

This event will be fired when the quiz is published, i.e. add questions are added and quiz is made online to public.

```php
public function onQuizChangeState($context, $quiz, $isPublished) { 
   // do your stuff return true; 
}
```

### onQuizAfterSave

This event will be fired after saving the quiz to database.

```php
public function onQuizAfterSave($context, $quiz, $isNew)
{
  // do your stuff
}
```

### onQuizAfterDelete

This event will be fired after deleting one or more quizzes.

```php
public function onQuizAfterDelete($context, $quiz)
{
  // do your stuff
}
```

### onQuizAfterPassed

This event will be fired after user completed response and result is pass. Response ID can be accessed with the variable $quiz->response_id.

```php
public function onQuizAfterPassed($context, $quiz, $isNew)
{
  // do your stuff
}
```

### onQuizAfterFailed

This event will be fired after user completed response and result is fail. Response ID can be accessed with the variable $quiz->response_id.

```php
public function onQuizAfterFailed($context, $quiz, $isNew)
{
  // do your stuff
}
```

### onResponseBeforeSave

This event will be triggered before saving the quiz response to database. Return false from this event will stops saving the response.

```php
public function onResponseBeforeSave($context, $response, $isNew)
{
   // do your stuff
   return true;
}
```

### onResponseBeforeDelete

This event will be fired before deleting a quiz response.

```php
public function onResponseBeforeDelete($context, $data)
{
   // do your stuff
   return true;
}
```

### onResponseChangeState

This event will be triggered before any change of the state of a response(s) such as unpublishing, trashing or deleting.

```php
public function onResponseChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onResponseAfterSave

This event will be fired after saving the response to database.

```php
public function onResponseAfterSave($context, $data, $isNew)
{
  // do your stuff
}
```

### onResponseAfterDelete

This event will be fired after deleting one or more responses.

```php
public function onResponseAfterDelete($context, $data)
{
  // do your stuff
}
```

## Plugin installer

Finally you need to have your plugin installer xml file as shown below.
```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="communityquiz" method="upgrade">
    <name>Community Quiz - YourPlugin</name>
    <creationDate>15-10-2015</creationDate/>/
    <author>Your Name</author>
    <authorEmail>Your email</authorEmail>
    <authorUrl>Your email</authorUrl>
    <copyright>All rights reserved by your company 2003-15.</copyright>
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