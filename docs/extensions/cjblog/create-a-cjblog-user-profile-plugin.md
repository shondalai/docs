---
id: create-a-cjblog-user-profile-plugin
title: Create a CjBlog user profile plugin
sidebar_label: Create a CjBlog user profile plugin
sidebar_position: 6
---

CjBlog profile can be added with your custom output using CjBlog plugins. Please take a look at the CjBlog plugins for articles to get better understanding of how it works. Here is the brief explanation of how you can create a plugin with simple steps.
CjBlog plugin is a standard Joomla plugin with the group cjblog. The plugin package should contain at least two files

- pluginname.xml
- pluginname.php

The xml file is standard Joomla plugin xml installer. The example xml file shown below:

<?xml version="1.0" encoding="utf-8"?>
  <extension version="2.5" type="plugin" group="cjblog" method="upgrade">
   <name>CjBlog - Plugin for Articles</name>
   <creationDate>07-Nov-2012</creationDate>
   <author>Maverick</author>
   <authorEmail>your email id</authorEmail>
   <authorUrl>http://www.corejoomla.com</authorUrl>
   <copyright>All rights reserved by www.corejoomla.com 2009-12.</copyright>
   <license>http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL</license>
   <version>1.0.0</version>
   <description>Displays latest 5 articles of a user in his profile.</description>
   <files>
     <filename>pluginname.xml</filename>
     <filename plugin="pluginname">pluginname.php</filename>
     <filename>index.html</filename>
   </files>
</extension>

Please make a note of the filename element with attribute plugin. the value of the plugin attribute should be same as your plugin name as well as the file names.
Here is the stripped php file code for cjblog articles plugin

```php
<?php
/**
 * @version $Id: articles.php 01 2012-11-07 11:37:09Z maverick $
 * @package CoreJoomla.CjBlog
 * @subpackage Components.plugins
 * @copyright Copyright (C) 2009 - 2012 corejoomla.com, Inc. All rights reserved.
 * @author Maverick
 * @link http://www.corejoomla.com/
 * @license License GNU General Public License version 2 or later
 */
// no direct access
defined('_JEXEC') or die('Restricted access');
 
```

jimport( 'joomla.plugin.plugin' );
jimport( 'joomla.html.parameter' );
 
defined('DS') or define('DS', DIRECTORY_SEPARATOR);
defined('CJBLOG') or define('CJBLOG', 'com_cjblog');
 
require_once JPATH_SITE.DS.'components'.DS.'com_content'.DS.'helpers'.DS.'route.php';
 
```php
class plgCjBlogArticles extends JPlugin{
 
  function plgCjBlogArticles( &$subject, $params ){
 
```

    parent::__construct( $subject, $params );
  }
 
```php
  public function onAfterCjBlogProfileDisplay($profile){
 
     $return = '<p>This is my sample output to the user profile</p>';
 
```

     return $return;
 }
}

please make a note of the class name which should be plgCjBlogPluginname format, i.e. the class name should be your camel cased plugin name prefixed with plgCjBlog. And of course the same name is used for constructor function.

The event **onAfterCjBlogProfileDisplay** is triggered on each user profile page, this function should return your custom html code. It can return anything like a list of articles formatted in html etc. The parameter for this function is an associative array of the user profile fields.

The profile array contains following elements:

- &#8216;id&#8217; => user id
- &#8216;avatar&#8217; => url of the avatar image
- &#8216;about&#8217; => about description added by user
- &#8216;points&#8217; => number of points earned by the user (if cjblog points system is used)
- &#8216;num_articles&#8217; => number articles submitted
- &#8216;num_badges&#8217; => number of badges owned
- &#8216;country&#8217; => country
- &#8216;profile_views&#8217; => number of profile views
- &#8216;name&#8217; => actual name of the user
- &#8216;username&#8217; => joomla user name used for logging in
- &#8217;email&#8217; => email id
- &#8216;block&#8217; => 0 if user is not blocked, 1 if blocked
- &#8216;registerDate&#8217; => registered date e.g. &#8216;2009-09-09 06:34:33&#8217;
- &#8216;lastvisitDate&#8217; => last visited date
- &#8216;params&#8217; => user parameters on Joomla user table