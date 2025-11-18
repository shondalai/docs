---
id: creating-sociable-profile-app
title: Creating Sociable Profile App
sidebar_label: Creating Sociable Profile App
sidebar_position: 16
---

## Introduction

The following documentation guides you through the development of a Sociable plugin to display your extension content inside the Sociable profiles.

## Plugin Contract

A Sociable profile plugin is a standard Joomla plugin with a set of hooks that you can make use of to push your content. To know more about the basics of how to create the Joomla plugin, see ].

In a regular Joomla plugin, you would extend **JPlugin** in your class. However, in Sociable plugin you need to extend **SociablePlugin** class which defines the basic contract of the plugin.

Following is the contract defined by SociablePlugin abstract class.

```php
abstract class SociablePlugin extends JPlugin
{
    public function __construct(& $subject, $config)
    {
        parent::__construct($subject, $config);

		CJLib::import('corejoomla.framework.core');
		CjScript::_('pagination');
		JFactory::getLanguage()->load('com_sociable');
    }

    /**
     * Shows the tab on profile page.
     * 
     * @param string $context shall be com_sociable.profile
     * @param stdClass $profile profile object
     * @param JRegistry $params component options
     * 
     * @return array an array containing id and title of the tab
     */
    abstract public function onSociableProfileDisplay($context, &$profile, &$params);
   
    /**
     * Shows the content of the application tab when it is clicked.
     * 
     * @param string $appName application name being displayed
     * @param integer $userId user id of the profile being displayed
     * @param integer $pageNum the current page number being displayed
     * @param integer $limit number of items per page
     * 
     * @return array an associative array containing two elements, html and pagination. html being the free text content, pagination object should at least contain total field. 
     */
    abstract public function onLoadSociableApplication($appName, $userId, $start, $limit);
}
```

So you need to extend the above class and develop your Joomla plugin. You would need a minimum of two files for your plugin &#8211; xml file and a php file.

## Plugin XML file

This is a standard Joomla plugin file and nothing different from any Joomla plugin xml file. However only difference you see in this file is the group parameter of the extension tag which should be &#8220;sociable&#8221;. Example:
```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>

<extension group="sociable" method="upgrade" type="plugin" version="3.3">
    <name>Sociable - Joomla! Articles</name>
    <creationDate>2020-Mar-25</creationDate>
    <author>Maverick</author>
    <authorEmail>support@corejoomla.com</authorEmail>
    <authorUrl>https://www.corejoomla.com</authorUrl>
    <copyright>All rights reserved by www.corejoomla.com 2009 - 2019.</copyright>
    <license>http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL</license>
    <version>1.0.6</version>
    <description>Adds profile tab to show Joomla Articles.</description>
    <files>
        <filename>articles.xml</filename>
        <filename plugin="articles">articles.php</filename>
        <filename>index.html</filename>
    </files>
</extension>
```
## Main plugin file

This is a PHP file you need to fetch your extension content and return it in the desired format to show inside the user profile. Example:

```php
<?php
/**
 * @package     corejoomla.site
 * @subpackage  com_sociable
 *
 * @copyright   Copyright (C) 2009 - 2019 corejoomla.com. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('JPATH_BASE') or die;


use Joomla\CMS\Helper\ModuleHelper;
use Joomla\Module\ArticlesLatest\Site\Helper\ArticlesLatestHelper;

require_once JPATH_ROOT.'/components/com_sociable/lib/plugin.php';

class plgSociableArticles extends SociablePlugin
{
	protected $autoloadLanguage = true;
	protected $appName = 'articles';

	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
	}

	public function onSociableProfileDisplay($context, &$profile, &$params)
	{
	    if ($context != 'com_sociable.profile')
	    {
	        return null;
	    }
	    
	    return array('id' => $this->appName, 'title' => JText::_('COM_SOCIABLE_LABEL_ARTICLES'), 'icon' => 'fa fa-file');
	}

	public function onLoadSociableApplication($appName, $userId, $start, $limit)
	{
	    if($appName != $this->appName)
	    {
	        return false;
	    }

	    // Write your logic to fetch the HTML content of whatever your extension data
        // You need two variables here, $html and $pagination
        // $html - this is the content that you will display on your app in Sociable profile,. for example list of your extension items belongs to the $userId
       // $pagination - if your content is a list, you need to return JPagination object

	    return array('html' => array($html), 'pagination' => $pagination);
	}
}
```

Pack your plugin in a zip file and distribute it as an installable Joomla plugin.