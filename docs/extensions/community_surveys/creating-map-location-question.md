---
id: creating-map-location-question
title: Creating Map Location question
sidebar_label: Creating Map Location question
sidebar_position: 20
---

Map Location question type will allow you to capture the coordinates (latitude and longitude) of the user location or the location entered by the user. To use this question type, an additional setup is required. Following are the typical steps, the first two steps are a one-time process.

- Create the Google Maps API Key
- Setup the key in Community Surveys options
- Add Maps Location question to your survey

Maps Location question uses Google Maps Javascript API to show the map. For this, you need to have a valid Maps API key. The steps to get the key are available at the following documentation:

[https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

The following features/apis should be enabled for your key.

- Google Maps JavaScript API
- Geocoding API
- Google Maps Places API

Once you have your key, enter it in Community Surveys Options (Components -> Community Surveys -> Options -> Shared tab)

Now you can add the Maps Location question in your survey. The consolidated report will be shown as clustered locations of up to 1000 responses at a time.