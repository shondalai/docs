---
id: extending-cjforum-user-profiles-with-custom-profile-fields
title: Extending CjForum user profiles with custom profile fields
sidebar_label: Extending CjForum user profiles with custom profile fields
sidebar_position: 14
---

CjForum can support extending the profiles with custom profile fields. Available since v1.0.8.

## Creating CjForum Plugin

Please check out the below page to know how you can create CjForum plugin
[https://wiki.corejoomla.com/Extending_CjForum_using_plugin_events](https://docs.corejoomla.com/Extending_CjForum_using_plugin_events)

## onProfilePrepareForm event

CjForum triggers onProfilePrepareForm event before rendering the profile form. This event can be used to inject your own custom profile fields into the form. An example event code:

```php
public function onProfilePrepareForm($form, $data)
{
      if (!($form instanceof Form))
      {
         $this->_subject->setError('JERROR_NOT_A_FORM');
         return false;
      }
 
      // Add the extra fields to the form.
      Form::addFormPath(dirname(__FILE__) . '/forms');
      $form->loadFile('profile', false);
      return true;
}
```

## Create your form XML file

Add a new form xml file under **forms** folder in your plugin root folder, say for example plugins/cjforum/myplugin/forms/profile.xml
Please note that the name of the file **profile.xml** should match the name of the file you load in above code (profile).

Add your field descriptions in your form xml file. Below two rules you need to consider when creating your form.

- All your fields must go under attribs fields as shown below.
- Field names must start with **profile_field_**

```xml
<?xml version="1.0" encoding="utf-8"?>
   <form>
      <fields name="attribs">
         <fieldset name="basic" label="PLG_CJFORUM_PROFILE_FIELDS_BASIC_SETTINGS">
            <field
               name="profile_field_fieldname1"
               type="text"
               id="profile_field_fieldname1"
               description="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME1_DESC"
               label="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME1_LABEL"
               message="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME1_MESSAGE"
               size="30"
            />
            <field
               name="profile_field_fieldname2"
               type="text"
               id="profile_field_fieldname2"
               description="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME2_DESC"
               label="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME2_LABEL"
               message="PLG_CJFORUM_PROFILE_FIELD_FIELDNAME2_MESSAGE"
               size="30"
            />
         </fieldset>
      </fields>
   </form>
```

## Add language file

Create language file for your plugin (e.g. en-GB.plg_cjforum_myplugin.ini) and add your language strings. While displaying the profile fields on user profile, field label will be created based on field name. For example, for the field **profile_field_fieldname1** above, the label name **PLG_CJFORUM_PROFILE_FIELD_FIELDNAME1_LABEL** needs to be created in your language file.

PLG_CJFORUM_PROFILE_FIELDS_BASIC_SETTINGS="My Custom Fields"
PLG_CJFORUM_PROFILE_FIELD_FIELDNAME1_LABEL="Field 1"