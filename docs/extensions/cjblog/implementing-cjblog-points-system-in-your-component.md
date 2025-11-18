---
id: implementing-cjblog-points-system-in-your-component
title: Implementing CjBlog points system in your component
sidebar_label: Implementing CjBlog points system in your component
sidebar_position: 5
---

## Prerequisites

```php
$api = JPATH_ROOT.'/components/com_cjblog/api.php';
if(file_exists($api))
{
  include_once $api;
  //rest of integration code here
}

```

## Creating XML rules file

CjBlog points system requires plugin rule file for users to install on their websites and the respective rule should be triggered from your extension. An example rule file looks like below:

<?xml version="1.0" encoding="UTF-8"?>
<extension name="com_communityanswers" type="cjblog_points" method="upgrade">
  <extension_rule>
    <rule_name>com_communityanswers.newquestion</rule_name>
    <rule_title>New Question</rule_title>
    <rule_description>Points awarded for posting a question.</rule_description>
    <auto_approve>1</auto_approve>
    <asset_name>com_communityanswers</asset_name>
    <access_level>1</access_level>
  </extension_rule>
</extension>

One rule file may contain as many extension_rule rules as you wish. You can bundle all available point system events in a single file.

## Trigger points rule from your extension code

Now inside your component, you may want to trigger the rule by using following code.

```php
$rulename = 'com_communityanswers.newquestion';
$reference = 102; //some unique reference for this rule for example id of your content;
$description = 'some description of awarding this point';
 
```

CjBlogApi::award_points($rulename, $userid, 0, $reference, $description);

- $rulename: name of the rule you defined in extension_rule section of the xml file
- $userid: to whom this point should be awarded. leave it as 0 to assign to logged in user
- $reference: unique id of the content for this rule to avoid any duplicate points (optional, default null)
- $description: some description of this point. for example &#8220;Awarded points to view an article A test article&#8221;