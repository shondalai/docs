---
id: troubleshooting-guide-for-community-answers
title: Troubleshooting guide for Community Answers
sidebar_label: Troubleshooting guide for Community Answers
sidebar_position: 1
---

### My urls are not showing alias instead having &#8220;component/communityanswers&#8221; in their urls even through I have created the menu item

- It is recommended to create &#8220;Community Answers Category Layout&#8221; menu item for each of the top level category. This way the alias will be inherited to all questions under the category and its subcategories questions.
- Make sure your menu item is accessible to the users whom you allowed to access the component

### Guest users are not able to submit questions or answers even though I have given create permission to the guest users

- Check if you have disabled or enabled reCaptacha permission in Community Answers permissions settings for guest user group. If it is enabled, make sure you have enabled and configured the reCaptacha plugin.