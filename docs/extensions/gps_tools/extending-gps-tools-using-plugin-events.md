---
id: extending-gps-tools-using-plugin-events
title: Extending GPS Tools using plugin events
sidebar_label: Extending GPS Tools using plugin events
sidebar_position: 4
---

Gps Tools is not just full featured but also extendable. There are many plugin events the component triggers which you can use to extend the functionality provided by the component. Plugin events are supported in CS v4 and above only.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

The best way to get started on creating the plugin is to refer to the default &#8220;Gps Tools &#8211; Tracks&#8221; plugin provided with the Gps Tools package. It is the full featured implementation of most of the plugin events.

Following is the sample class without any plugin events declared. The plugin name is &#8220;**Pluginname**&#8220;, and the class name is prefixed with PlgGpsTools. Create the php file with the name pluginname.php where pluginname is name of your plugin (for example tracksoverride.php)

```php
<?php
```php
/**
 * @package     corejoomla.administrator
 * @subpackage  com_gpstools
 *
 * @copyright   Copyright (C) 2009 - 2015 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;

require_once JPATH_ROOT.'/components/com_cjlib/framework/api.php';
require_once JPATH_ROOT.'/components/com_gpstools/router.php';
require_once JPATH_ROOT.'/components/com_gpstools/helpers/route.php';
 
class PlgGpstoolsPluginname extends JPlugin
{
	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		$this->loadLanguage();
		$this->loadLanguage('com_gpstools', JPATH_ROOT);
	}
}
```

## Plugin Events

Gps Tools defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onTrackBeforeSave

This event will be triggered before saving the track to database. Return false from this event will stops saving the track.

```php
public function onTrackBeforeSave($context, $track, $isNew)
{
   // do your stuff
   return true;
}
```

### onTrackBeforeDelete

This event will be fired before deleting a track.

```php
public function onTrackBeforeDelete($context, $track)
{
   // do your stuff
   return true;
}
```

### onTrackChangeState

This event will be triggered before any change of the state of a track(s) such as unpublishing, trashing or deleting.

```php
public function onTrackChangeState($context, $pks, $value)
{
   // do your stuff
   return true;
}
```

### onTrackAfterSave

This event will be fired after saving the track to database.

```php
public function onTrackAfterSave($context, $track, $isNew)
{
  // do your stuff
}
```

### onTrackAfterDelete

This event will be fired after deleting one or more tracks.

```php
public function onTrackAfterDelete($context, $track)
{
  // do your stuff
}
```

## Plugin installer

Finally you need to have your plugin installer xml file as shown below. Create the xml file with name pluginname.xml where pluginname is name of your plugin.

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="gpstools" method="upgrade">
    <name>Gps Tools - YourPlugin</name>
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