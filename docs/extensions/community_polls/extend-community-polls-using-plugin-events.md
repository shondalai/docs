---
id: extend-community-polls-using-plugin-events
title: Extend Community Polls using plugin events
sidebar_label: Extend Community Polls using plugin events
sidebar_position: 4
---

Community Polls triggers following events on different actions. You can use these events to do additional tasks by developing your own plugins. You need to have basic idea of creating Joomla plugins. Please see Joomla plugins developer documentation of Joomla docs website before proceeding further.

## Creating a plugin

Please read the following documentation to know about creating a Joomla! plugin. The process is same for any plugin.
[https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla](https://docs.joomla.org/J2.5:Creating_a_Plugin_for_Joomla)

## Plugin Events

Community Polls defines a set of plugin events which you can listen to extend the functionality. The following are the plugin events:

### onBeforeSavePoll

This event is triggered just before updating or creating the poll. The function takes two arguments, the poll object which has the details about the poll being saved and params object which has the options of the component.

```php
public function onBeforeSavePoll(&$poll, &$params)
{
    if($poll->isnew)
    {
        // do your stuff here if the poll is new one. Poll is not yet saved
    }
    else
    {
        // Poll already exists and is being updated
    }
}
```

### onAfterSavePoll

This event is triggered after creating the poll. The function takes two arguments, the poll object which has the details about the poll being saved and params object which has the options of the component.

```php
public function onBeforeSavePoll(&$poll, &$params)
{
    if($poll->isnew)
    {
        // do your stuff here if the poll is new one. Poll is already saved
    }
    else
    {
        // Poll already exists and is updated
    }
}
```

### onAfterVote

This event is triggered after user vote is registers. The function takes single argument $poll which contains data about the poll itself.

```php
public function onAfterVote ($poll)
{
    // do your stuff here
}
```

## Plugin installer

Finally you need to have your plugin installer xml file as shown below.

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="plugin" group="communitypolls" method="upgrade">
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
## The Poll Object

The $poll object will contain the following field structure (sample)

object(stdClass)
```php
  public 'error' => null
  public 'id' => int 0
  public 'title' => string 'The poll title' (length=9)
  public 'alias' => string 'the-poll-title' (length=9)
  public 'description' => string '' (length=0)
  public 'type' => string 'radio' (length=5)
  public 'catid' => int 3
  public 'close_date' => string '' (length=0)
  public 'results_up' => string '' (length=0)
  public 'featured' => int 1
  public 'custom_answer' => int 2
  public 'anywhere' => int 1
  public 'pallete' => string 'default' (length=7)
  public 'chart_type' => string 'sbar' (length=4)
  public 'anonymous' => int 1
  public 'private' => int 0
  public 'answers_order' => string 'order' (length=5)
  public 'answers' => 
    array (size=2)
      0 => 
        object(stdClass)
          public 'id' => string '0' (length=1)
          public 'title' => string 'Answer 1 Title' (length=7)
          public 'order' => int 1
          public 'images' => 
            array (size=0)
              ...
          public 'resources' => 
            array (size=0)
              ...
          public 'type' => string 'x' (length=1)
      1 => &
        object(stdClass)
          public 'id' => string '0' (length=1)
          public 'title' => string 'Answer 2 Title' (length=11)
          public 'order' => int 2
          public 'images' => 
            array (size=0)
              ...
          public 'resources' => 
            array (size=0)
              ...
          public 'type' => string 'x' (length=1)
  public 'columns' => 
    array (size=0)
      empty
  public 'isnew' => boolean true
  public 'images' => boolean false
```