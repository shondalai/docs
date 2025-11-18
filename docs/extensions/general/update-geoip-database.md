---
id: update-geoip-database
title: Update GeoIP Database
sidebar_label: Update GeoIP Database
sidebar_position: 1
---

All our extensions use the MaxMind GeoIP City database to find the user location and other Geographical information of the users while saving the user data to your site. This information is used for reporting purposes in some places such as Community Surveys reporting and used for logging purposes in all extensions.

Please note that due to the change in policies of MaxMind free city database access, you need to create a license key on your MaxMind account page and update it in the CjLib component settings.

- Sign up for GeoLite2 at [https://www.maxmind.com/en/geolite2/signup](https://www.maxmind.com/en/geolite2/signup) and log in.

- Create a license key at [https://www.maxmind.com/en/accounts/current/license-key](https://www.maxmind.com/en/accounts/current/license-key)

- Update it in the CjLib component settings. Go to Components -> CjLib API -> Click on the Options button on the toolbar.

- Click on the &#8220;Update GeoIP Database&#8221; button on the CjLib component dashboard page to update the database