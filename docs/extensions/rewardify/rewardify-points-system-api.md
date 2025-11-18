---
id: rewardify-points-system-api
title: Rewardify Points System API
sidebar_label: Rewardify Points System API
sidebar_position: 1
---

Rewardify&#8217;s Points System API is designed to provide developers with a versatile and scalable solution to implement a points-based reward system within their applications. With just a few API calls, developers can seamlessly integrate the Rewardify Points System into their extensions, fostering user engagement and loyalty.

## Earning Points

One of the key functionalities of the Rewardify Points System API is the ability to reward users for specific actions or achievements within an application. Developers can easily implement point rewards for actions such as posting content, completing a level, referring friends, and so on. 

**Step 1:** To initiate the Rewardify integration process, the initial step involves informing Rewardify about the various types of activities supported by your extension and how to assign points for each activity. This is achieved by creating a JSON file named rewardify_rules.json in your administrator component folder. Below is an example of the file&#8217;s content.

*File Name:* administrator/components/com_mycomponent/rewardify_rules.json

```
{
  "points": &#91;
    {
      "title": "My activity title 1",
      "description": "Points awarded for doing something on xxx extension.",
      "rule_name": "com_mycomponent.mysection.myactivity1",
      "extension": "com_mycomponent",
      "group_name": "article",
      "points": "1",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    },
    {
      "title": "My activity title 2",
      "description": "Points awarded for doing some other on xxx extension.",
      "rule_name": "com_mycomponent.mysection.myactivit2",
      "extension": "com_mycomponent",
      "group_name": "forum",
      "points": "1",
      "published": "1",
      "auto_approve": "1",
      "params": {},
      "access": "1"
    }
  ]
}
```

The group_name accept any string value but choose the relevant category for your application such as forum, community, survey, form etc.

The rule_name parameter accept and name as per your choice, however it is recommended to prefix your extension name so that it will not conflict with other rules.

Your users can install the above rules by going to the Rewardify Points Rules page and scanning for rules.

**Step 2:** Get the User Points Service from the container.

```
$userPoints = Factory::getApplication()->bootComponent( 'com_rewardify' )->getUserPoints()
```

**Step 3:** Assign points to the user by calling the `assign` API on the User Points Service

```
$userPoints->assign(
	&#91;
		'rule'        => 'com_mycomponent.section.action',
		'userid'      => $user->id,
		'ref'         => $record->id,
		'title'       => $title,
		'description' => $description,
	]
);
```

- rule &#8211; The unique rule name that you have given in your rules JSON file

- userid &#8211; The user to whom you are assigning the points

- ref &#8211; Give a unique ID/name of this activity, such as article ID, if you want to restrict users from scoring points multiple times from the same record.

- title &#8211; The title of the points activity and why you are assigning the points (shown to the user)

- description &#8211; The description of the activity

That&#8217;s all and you are good to go.

## Assigning Custom Points

When you send the points parameter to the API, the defined value with the rule will be overridden and use the value that you send.

```
$userPoints->assign(
	&#91;
		'rule'        => 'com_mycomponent.section.action',
		'userid'      => $user->id,
		'ref'         => $record->id,
		'title'       => $title,
		'description' => $description,
                'points' => 100
	]
);
```

## Fetch User Points

If you want to show the points the user has earned, like in the user profile, you can use the `getUserProfile` API to get the information.

```
$rewardify = Factory::getApplication()->bootComponent( 'com_rewardify' );
$profile = $rewardify->getUserPoints()->getUserProfile( $userId );
echo $profile->points;
```