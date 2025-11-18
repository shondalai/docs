---
id: gps-tools-quick-stater-guide
title: GPS Tools Quick Stater Guide
sidebar_label: GPS Tools Quick Stater Guide
sidebar_position: 2
---

## Install GPS Tools package

GPS Tools package comes as a single installable package which includes the GPS Tools component and all addon modules and plugins. [https://docs.joomla.org/Installing_an_extension](https://docs.joomla.org/Installing_an_extension)

## Configure options

After installing the component, Joomla! will create a menu item under your admin menus. Go to components->GPS Tools->options button on toolbar. All options are documented over their labels.

## Google Maps API Key

Make sure to enter Google Maps API key if you want elevation data captured. If your GPX files already have elevation data, this API call will not be used, instead your GPX file data will be used.

[https://developers.google.com/maps/documentation/elevation/get-api-key](https://developers.google.com/maps/documentation/elevation/get-api-key)

Enable following APIs for your project:

- Google Maps JavaScript API
- Google Maps Elevation API
- Google Maps Directions API
- Google Places API Web Service

Once you get the API key, update it in GPS Tools Options.

## Permission Settings

Go to components->GPS Tools->options button on toolbar->Permission settings tab Configure permission settings and allow create permissions to required user groups

## Create Categories

Go to components->gps tools->categories page and create categories as per your needs

## Create Menu Items

Create menu items to access the component on front-end

[https://docs.joomla.org/Adding_a_new_menu_item](https://docs.joomla.org/Adding_a_new_menu_item)

You are now good to go. Just add your tracks from frontend. You can draw points on map and ask google to chart them or upload gpx files.