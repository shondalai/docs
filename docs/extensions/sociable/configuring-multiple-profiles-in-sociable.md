---
id: configuring-multiple-profiles-in-sociable
title: Configuring multiple profiles in Sociable
sidebar_label: Configuring multiple profiles in Sociable
sidebar_position: 17
---

Sociable allows you to set up different profiles for a different set of users. For example, if you have Teachers in one group and Students in another. Then you would like to have different content for these two groups, you can set up profiles for the same. So let&#8217;s get started.

## Plan

Step 1. First plan for what are the different sets of users on your site and what type of content you would like to capture from your users.

## Set up field groups

Field groups are the glue between your content shown on the profile dashboard and the profile.
Step 2: Log in to your site and go to Components -> Sociable -> Field Groups
Step 3: Add a few field groups. For example, teachers may have a bio, experience, qualifications, etc. Students may have education details, interests, hobbies, etc. The field group titles will be shown on the front end as headers.

## Set up fields

Fields are the building blocks of the profile. This feature makes use of Joomla! custom fields. There are several types of default fields available such as textboxes, radios, checkboxes, list boxes, combo boxes, calendars, images, and so on. You can install third-party fields available on the Joomla Extension Directory.
Step 4: Go to Components -> Sociable -> Fields and add your fields for each field group. You can add several fields in each field group depending on your requirements.

## Create Profiles

Now we have fields and field groups. We need to glue them to the profile.
Step 5: Go to Components -> Sociable -> Profiles and click on New button
Step 6: In the profile creation page, make sure to add at least one of the field groups that you have created in earlier steps.
Step 7: Select the Featured option for the profile which will be added to the user by default when the user registers on your site.

## Enable Fields Plugin

Go to Extensions -> Plugins -> Filter &#8220;Sociable &#8211; Fields&#8221; plugin and enable it.

#### Using Joomla Users Fields

Sociable can also use Fields from the Joomla Users component. If you would like to use them instead, go to Extensions -> Sociable -> Options -> Shared Options tab -> Set &#8220;Fields Provider&#8221; to Joomla Users.