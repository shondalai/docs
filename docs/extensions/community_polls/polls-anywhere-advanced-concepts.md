---
id: polls-anywhere-advanced-concepts
title: Polls Anywhere Advanced Concepts
sidebar_label: Polls Anywhere Advanced Concepts
sidebar_position: 3
---

Community Polls now takes Joomla CMS to a new level by introducting Poll Sharing feature for the first time. It not only allow you to share the polls on your website but also let your users share the polls on your website on any website which need not be a Joomla website. So next time you see your poll on one of your user&#8217;s personal blog, don&#8217;t be surprised.

## Code to embed

The basic code for embedding a poll using Polls Anywhere is as follows:
```javascript
<script type="text/javascript" src="http://YOURWEBSITE/media/com_communitypolls/anywhere/anywhere.js"></script>
<div class="cjpollsanywhere"><input type="hidden" /></div>
<script type="text/javascript">PollsAnywhere({id:38, anywhere: true});</script>
```

## Explanation

As you can see in above code, the first line includes the PollsAnywhere script from your website. The second line is acts as a container for the poll to display. The class name of the container should be unique in a page so that only one instance of the poll is loaded.The last line of the above code will load the poll with id passed as parameter to the PollsAnywhere API.

You can override some settings of the poll by passing additional parameters in the last line of the code. The parameters should be passed as array of key-value parameters. Each parameter has a key and value. Below are the list of parameters that you can override. Please note that all of these parameters are optional and only id is required to show the poll.

## Parameters

- &#8220;anywhere&#8221;: A flag to indicate the poll is loading from an external site. i.e. the poll is being embedded on website other than where the community polls is installed.
- &#8220;container&#8221; : You can override the container by passing the classname of any DIV element to this parameter. The poll will load in the element specified by this parameter. Default value is &#8220;cjpollsanywhere&#8221;
- &#8220;template&#8221; The template should be used to display the poll. (TODO: Documentation on developing custom templates)
- &#8220;chart&#8221;: You can override the chart type provided the chart type is enabled in component configuration. The available chart types are as follows
- &#8220;bar&#8221;: Locally rendered bar chart
- &#8220;pie&#8221; : Locally rendered pie chart along with bar chart legend
- &#8220;gpie&#8221; : Interactive pie chart rendered by Google charts along with bar chart legend
- &#8220;width&#8221;: Width of the chart
- &#8220;height&#8221; : Height of the chart (applied only to pie chart)
- &#8220;bgcolor&#8221; : Background color of the Google chart