---
id: extending-community-surveys-using-plugin-events
title: Extending Community Surveys using plugin events
sidebar_label: Extending Community Surveys using plugin events
sidebar_position: 16
---

Community Surveys is not just full featured but also extendable. There are many plugin events the component triggers which you can use to extend the functionality provided by the component. Plugin events are supported in CS v4 and above only.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

The best way to get started on creating the plugin is to refer to the default &#8220;Community Surveys &#8211; Surveys&#8221; plugin provided with the Community Surveys package. It is the full featured implementation of most of the plugin events.

Following is the sample class without any plugin events declared. The plugin name is &#8220;**Pluginname**&#8220;, and the class name is prefixed with PlgCommunitysurveys. Create the php file with the name pluginname.php where pluginname is name of your plugin (for example surveyoverride.php)

```php
<?php
/**
 * @package     corejoomla.administrator
 * @subpackage  com_communitysurveys
 *
 * @copyright   Copyright (C) 2009 - 2015 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;
 
```

require_once JPATH_ROOT.'/components/com_cjlib/framework/api.php';
require_once JPATH_ROOT.'/components/com_communitysurveys/router.php';
require_once JPATH_ROOT.'/components/com_communitysurveys/helpers/route.php';
 
```php
class PlgCommunitysurveysPluginname extends JPlugin
{
	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		$this->loadLanguage();
		$this->loadLanguage('com_communitysurveys', JPATH_ROOT);
	}
}

```

## Plugin Events

Community Surveys defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onSurveyBeforeSave

This event will be triggered before saving the survey to database. Return false from this event will stops saving the survey.

```php
public function onSurveyBeforeSave($context, $survey, $isNew)
{
   // do your stuff
   return true;
}

```

### onSurveyBeforeDelete

This event will be fired before deleting a survey.

```php
public function onSurveyBeforeDelete($context, $survey)
{
   // do your stuff
   return true;
}

```

### onSurveyChangeState

This event will be triggered before any change of the state of a survey(s) such as unpublishing, trashing or deleting.

```php
public function onSurveyChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}

```

### onSurveyAfterSave

This event will be fired after saving the survey to database.

```php
public function onSurveyAfterSave($context, $survey, $isNew)
{
  // do your stuff
}

```

### onSurveyAfterDelete

This event will be fired after deleting one or more surveys.

```php
public function onSurveyAfterDelete($context, $survey)
{
  // do your stuff
}

```

### onResponseBeforeSave

This event will be triggered before saving the survey response to database. Return false from this event will stops saving the response.

```php
public function onResponseBeforeSave($context, $response, $isNew)
{
   // do your stuff
   return true;
}

```

### onResponseBeforeDelete

This event will be fired before deleting a survey response.

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

Finally you need to have your plugin installer xml file as shown below. Create the xml file with name pluginname.xml where pluginname is name of your plugin.
```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="communitysurveys" method="upgrade">
    <name>Community Surveys - YourPlugin</name>
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
## Packaging

Now zip both xml and php files into a zip file using your favorite archive tool such as winzip, 7-zip etc. You can now install the package using Joomla! installer.