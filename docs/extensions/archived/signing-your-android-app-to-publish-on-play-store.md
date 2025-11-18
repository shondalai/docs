---
id: signing-your-android-app-to-publish-on-play-store
title: Signing your Android app to publish on Play Store
sidebar_label: Signing your Android app to publish on Play Store
sidebar_position: 1
---

## Prerequisites

To publish your app on Android Store, you need to digitally sign your app. For this, you need following tools.

- Private Key: This is the digital certificate through which you will sign your app everytime you will get new version. Never loose the key, otherwise you cannot update your app on Play Store.
- Java JDK: You need JDK 8 (not JRE) installed on your machine. You can get JDK from [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- jarsigner: This is the tool comes as part of JDK
- keytool: This is a tool to generate your key for signing.

## Generating Key

Please follow the below steps. It is assumed that you have already installed JDK on your machine.

1. Generate key store

keytool -genkey -v -keystore mysite.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

- mysite.keystore: this is the name of the keystore file which will be generated
- alias_name: this is the Alias name of the keystore. For example &#8220;My_Site_Key&#8221;. No spaces please.

It will ask for passwords. enter on interactive tool.

2. Get your key finger print

keytool -list -v -keystore mysite.keystore -alias alias_name -storepass  -keypass 

- mysite.keystore: path to the keystore file which you generated in previous step
- alias_name: alias name given to the keystore in previous step
- storepass: key store password that you entered
- keypass: key password that you entered.

This will generate fingerprint text which can be used to hook up services on Firebase. Note down this text.

## Signing App

Execute below command

jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore mysite.keystore -signedjar app-myapp-release-signed.apk app-myapp-release.apk alias_name

- mysite.keystore: path to the keystore file which you generated in previous step
- alias_name: alias name given to the keystore in previous step
- app-myapp-release.apk: path to the apk file downloaded from corejoomla.com

Your signed apk file will be generated with the name app-myapp-release-signed.apk

## Signing app using Android SDK

A second method to sign the app is using Android SDK. If you already have android SDK setup ready on your computer, please follow the below steps. Assuming

- SDK is installed at the location D:\Andoid\SDK\
- You have JDK 8 setup
- Your signing certificate is located at D:\LotusApp\lotus.jks
- Your app name is &#8220;appname&#8221;

then

### Create a bat file, e.g. D:\LotusApp\build.bat with the following content

set path=%PATH%;D:\Andoid\SDK\build-tools\25.0.0;
zipalign -v -p 4 app-appname-release-unsigned.apk app-appname-release-aligned.apk
apksigner sign --ks-pass stdin --key-pass stdin --min-sdk-version 19 --ks lotus.jks --ks-key-alias LotusApp --out app-appname-release.apk app-appname-release-aligned.apk
apksigner verify app-appname-release.apk

### Run it

Execute the batch file by double clicking it

More details about signing an apk file is described on the official documentation. See below URL.

[https://developer.android.com/studio/publish/app-signing](https://developer.android.com/studio/publish/app-signing)