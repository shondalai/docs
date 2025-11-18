---
id: assign-badges-to-users-from-your-extension
title: Assign badges to users from your extension
sidebar_label: Assign badges to users from your extension
sidebar_position: 11
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

## Understanding Badges

Badges are much like ranks however a user can have multiple badges at a time. For example, a user can have a badge for writing 10 articles, another for 100 articles and another for writing an article with 1000 hits received.

## Creating XML rules file

Similar to points system, badges also require rules xml file along with triggering badge from the component. Here is the sample badge rule file.

<?xml version="1.0" encoding="UTF-8"?>
<extension name="com_content" type="cjblog_badges" method="upgrade" title="COM_CJBLOG_ARTICLES">
  <extension_rule>
    <rule_name>com_content.num_articles</rule_name>
    <rule_description>Assign a badge when user submits N number of articles.</rule_description>
    <rules join="and" method="assign" multiple="0">
      <rule label="COM_CJBLOG_NUM_ARTICLES" name="num_articles" type="text" dataType="int" compare="ge"></rule>
    </rules>
  </extension_rule>
 
 <extension_rule>
   <rule_name>com_content.num_hits</rule_name>
   <rule_description>Assign a badge when an article submitted by the user got N number of hits.</rule_description>
   <rules join="and" method="assign" ref_id="cid" multiple="1">
     <rule label="COM_CJBLOG_NUM_HITS" name="num_hits" type="text" dataType="int" compare="ge"></rule>
   </rules>
 </extension_rule>
</extension>

The administrators can create as many badge rules as they want from the the above rule. Each rule may be used to assign a different badge. For example the above rule file has two extension rules. one for when an article gets n number of views and other for when user writes n number of articles. So administrator can create one badge rule to assign a badge when article gets 100 views, another for when it gets 200 views etc. As a developer you will never define the number of views/hits/articles/questions/items etc rather it is defined by site administrator. You will just define how the administrator can enter that value and what name should be used so that you can tell the badge system to look for that name while triggering the rules. read below to understand it better.
The different elements of the xml file are:

### extension

root element of the rule plugin
attributes:

- name: name of your component
- type: keep cjblog_badges for now
- method: upgrade
- title: Title of the extension for example &#8220;Community Answers&#8221;

### extension_rule

each rule file may contain as many extension_rule elements as you want. each one corresponds to one badge rule. each extension_rule element contain the following sub elements.

#### rule_name

Unique name of the badge rule. please keep prefixed with your component name to avoid collisions. for example com_componentname.action

#### rule_description

Description shown to your users so that they know what this rule is for and can create badges from this rule.

#### rules

This element holds set of rules that describe when to apply this badge. for example user submit n number of articles where n is controlled by the user
attributes:

- join: how to validate the rules &#8211; valid values are &#8220;and&#8221; or &#8220;or&#8221;. and means all rules should satisfy, &#8220;or&#8221; means minimum one of the rule should satisfy. for example a user may get a badge when he submit 10 articles and also has an article with 10k views
- method: assign &#8211; do not change this for now
- ref_id: not used
- multiple: tells if this badge can be assigned multiple times to the user. for example : user should be assigned a badge for writing an article with 10k hits. so he may write many other articles with 10k hits. in this case the same badge can be assigned multiple times. where as consider a badge is assigned for writing 100 articles, but in this case the badge cannot be assigned multiple times. You need to pass unique reference id such as article id if multiple is set.

##### rule

rule validated before applying the badge. you can have any number of rule elements inside rules element. based on join attribute value of rules tag, these rules are validated.
Each rule has an input taken from the administrator of the site. for example article gets n number of views then assign the rule &#8211; in this case n can be configurable value which will be entered by site administrator while creating badges.
attributes:

- label: label shown to the administrator for taking input of the rule value. for example &#8220;Number of article hits&#8221;
- name: name of the input element as well as the value you will pass while triggering the badge. for example you may trigger badge each time an article is viewed by passing a parameter with name num_hits and value as number of hits. based on the administrator input value, this rule will be validated against the number of hits and badge is applied or rejected.
- type: the input element type shown to administrator. use text for now.
- dataType: type of the data accepted from the administrator. valid values are int, string, and date
compare: comparison method to use. for example administrator entered 100 as num_hits value, and you send number of actual hits while triggering rule. so if exactly 100 article views required to assign the badge, compare method should be eq. valid values are
- eq &#8211; equals
- ne &#8211; not equals
- ge &#8211; greater than or equal
- gt &#8211; greater than
- le &#8211; less than or equal
- lt &#8211; less than

## Triggering the rule

Once the administrator installs this rule file, he can create as many badge rules as he want from the rules installed. For example in the code example above, the administrator can create one rule for 100 article hits, another for 200 hits and so on.

CjBlogApi::trigger_badge_rule($rulename, array $parameters, $userid);

- $rulename &#8211; name of the rule to trigger that you define in rules xml file
$params &#8211; array of (name, value) pairs e.g.
- rule element name attribute and corresponding value. e.g. &#8216;num_hits&#8217;=>$article->hits
- ref_id and the value of the reference id e.g. &#8216;ref_id&#8217;=$article->id

- $userid &#8211; id of the user to whom this badge should be applied. for example to assign badge to the user who writes article when article gets 10k views. here the article is viewed by a guest or some other user but the badge is assigned to the writer for writing the article. So this id may not be a logged in user id. if 0 is passed, the logged in user id is taken.
- Here is the sameple code to trigger the rule.

CjBlogApi::trigger_badge_rule('com_content.num_hits', array('num_hits'=>$article->hits, 'ref_id'=>$article->id), $user->id);