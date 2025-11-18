---
id: frequently-asked-questions
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions
sidebar_position: 7
---

### I got PHP error after installing the extension

Please make sure you have php-sockets and php-zip extensions enabled in your php.ini

### I have installed the component but I could not access it on the front end, it gives me a 401 error. What am I missing?

You need to set permission settings. All Shondalai components come with permission settings, which give you immense control over various functionalities of the component such as component access, create, view, manage, etc. The permission settings can be configured on a user group level, so you can easily set permissions for your user groups.

### How do I set permission settings?

For Joomla 3 powered websites, you can find the permissions under Components->COMPONENT_NAME->Configuration->Permission Settings tab.

For Joomla 4 and above, you can find them under Components->COMPONENT_NAME->Configuration->Options button on the toolbar. Where COMPONENT_NAME is the name of the component you are using.

### Can I set permission settings per user level?

No. Only user group-level permission settings are possible.

### I have installed the component but the front-end does not look like the demo on corejoomla.com. The links are not working. What am I missing?

All our extensions use the CjLib component, please install it first.

### I have installed the CoreJoomla CjLib component, but still could not see the buttons, what am I missing?

There might be a conflicting jQuery library being loaded by other modules/plugins loaded on the page. Please check the browser console for any JavaScript errors. To debug which extension is in conflict, disable all modules on the page and enable them one by one. It is recommended to use extensions that uses jQuery/Bootstrap libraries provided by Joomla! itself. Third-party implementations are error-prone and may cause issues. We do not provide support for such issues.

### I get no emails from the component for any activity, what is missing?

Please check the core plugin of the component is enabled. For example, &#8220;Community Answers&#8221; has the &#8220;Community Answers &#8211; Questions&#8221; plugin, and Community Surveys has a &#8220;Community Surveys &#8211; Surveys&#8221; plugin which sends all emails.

### I get a Fatal error: error traversing database &#8211; perhaps it is corrupt? in components\com_cjlib\framework\geoip.inc on line xxx

The above error occurs when your GeoIP database is corrupt. Please follow the below procedure to restore it manually.

- Download the GeoIP City binary database file from MaxMind site. (GeoLite2 City &#8211; GeoIP2 Binary) [https://www.maxmind.com/en/accounts/current/geoip/downloads](https://www.maxmind.com/en/accounts/current/geoip/downloads)

- Extract the file to your local computer and you should get GeoLite2-City.mmdb upon extraction. If the file name is different, rename to GeoLite2-City.mmdb

- Upload the GeoLite2-City.mmdb file to media/com_cjlib/geoip/GeoLite2-City.mmdb on your server

The extracted data file should be around 36.5 MB in size

Please note that due to a change in policies of MaxMind free city database access, you need to create a license key on your MaxMind account page and update it in the CjLib component settings.

- Create a license key at [https://www.maxmind.com/en/accounts/current/license-key](https://www.maxmind.com/en/accounts/current/license-key)

- Update it in the CjLib component settings. Go to Components -> CjLib API -> Click on the Options button on the toolbar.

### My extension could not record country and city information, how do I fix the corrupt GeoIP database?

- Delete the files in media/com_cjlib/geoip

- Download the GeoLite2 City binary databases from [https://www.maxmind.com/en/accounts/current/geoip/downloads](https://www.maxmind.com/en/accounts/current/geoip/downloads) to your server

- Extract the file to media/com_cjlib/geoip/GeoLite2-City.mmdb. If the extracted file has a different name than GeoLite2-City.mmdb, rename it. The extracted file should be around 37MB.

### I cannot update extensions using one-click auto updates. I am getting the error &#8220;COM_INSTALLER_TYPE_TYPE_&#8221;

Make sure the following:

- Your license is updated in the CjLib component dashboard page. If not, you can get your license key from [https://shondalai.com/my-account/lost-license](https://shondalai.com/my-account/lost-license)

- plg_installer_cjupdater plugin is enabled.