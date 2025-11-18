---
id: setup-cronjob-to-trigger-emails-automatically
title: Setup cronjob to trigger emails automatically
sidebar_label: Setup cronjob to trigger emails automatically
sidebar_position: 3
---

This guide explains setting up cronjob to trigger emails automatically without need for any page loads. Most of corejoomla extensions adds emails to the queue in CjLib component and needs a trigger to send the emails at regular intervals. There are two ways to trigger emails:

## Types of scheduled jobs

- Manual triggering: In this method the email job will be triggered when a front-end user access any page of the component. The component understand the last triggered time and will invoke the job only after the designated amount of time passed. This is little uncomfortable as it needs consistent traffic to your website pages.
- Automatic cronjob: In this method no manual intervention needed. You need to have access to setup a cronjob on your system. Please consult your webhost to know more about your permissions on your system.

This guide will help you setup the automatic cron task using the linux cronjob. Windows servers have the feature of scheduled jobs which you can use to do the same thing.

## Understanding linux cronjobs

Syntax:

 # * * * * *  command to execute
 # │ │ │ │ │
 # │ │ │ │ │
 # │ │ │ │ └───── day of week (0 - 6) (0 to 6 are Sunday to Saturday, or use names; 7 is Sunday, the same as 0)
 # │ │ │ └────────── month (1 - 12)
 # │ │ └─────────────── day of month (1 - 31)
 # │ └──────────────────── hour (0 - 23)
 # └───────────────────────── min (0 - 59)

So if you want to run a command every hour, setup the below cronjob

0 * * * * command

The following command will execute every day at 6am

* 6 * * * command

## Setup cronjob to execute CjLib email queue

Since the linux cronjob understands linux commands only you need some third party linux command to invoke a url. cUrl is one such utility which you can use to load any url. So here is the way to invoke your scheduled cronjob every 10 minutes:

5,15,25,35,45,55 * * * * curl "https://YOUR_WEBSITE_NAME/index.php?option=com_cjlib&task=process&secret=YOUR_SECRET_KEY_HERE" >/dev/null 2>&1

In case your server do not have cUrl installed, you can use wget command as well to do the same. However a disadvantage is it will create temporary files.

5,15,25,35,45,55 * * * * /bin/wget -O /dev/null "https://YOUR_WEBSITE_NAME/index.php?option=com_cjlib&task=process&secret=YOUR_SECRET_KEY_HERE" >/dev/null 2>&1

You can find your cron job secret URL on your CjLib component options. Go to Components -> CjLib API -> Options to access them. Replace **YOUR_SECRET_KEY_HERE** with the key from your CjLib component options.

**Note:** If the Cron Secret Key field is empty in the CjLib options, enter your own custom secret key (letters and numbers are allowed) and use it in the above URL.

## Using WebCron to trigger the emails automatically

Most of the webhosts provide access to cron, however if you are using shared hosting or you are not comfortable with setting up crons, webcrons are the easiest method to this. EasyCron is one of the WebCron service which can do this task in case you do not have access to cronjobs of your server. A simple quick start guide is available at the following location:

[https://www.easycron.com/cron-job-tutorials/how-to-set-up-cron-job-for-corejoomla](https://www.easycron.com/cron-job-tutorials/how-to-set-up-cron-job-for-corejoomla)