---
id: installing-and-configuring-crosswords
title: Installing and configuring Crosswords
sidebar_label: Installing and configuring Crosswords
sidebar_position: 2
---

## Installation

Installing the extension is straigtfoward just like any other Joomla extension. Read the installation instructions here:

[http://docs.joomla.org/Installing_an_extension](http://docs.joomla.org/Installing_an_extension)

## Prerequisites

Download and install the CjLib component which is available on Required Extensions category on downloads section.

## Configuration

Once the extension is installed, you need to setup the component options to suite your requirements.
Go to Components->Community Crosswords->Click on Options button on toolbar. Each option is documented on its label. Move mouse over the option to read the documentation about it. Make sure you have given appropriate permissions to the user groups in Permission Settings tab.

## Creating Categories

Before start creation of crosswords, you need to have categories for your crosswords. You can created unlimited, multi-level categories and add crossword questions in appropriate categories. Creating categories is similar to Joomla Article categories. You can find more about it at the following Joomla documentation:

[http://docs.joomla.org/J2.5:Design_the_content:_Categories_in_Joomla!_2.5](http://docs.joomla.org/J2.5:Design_the_content:_Categories_in_Joomla!_2.5)

Categories in Community Crosswords are little different from Joomla article categories. Here the categories will hold the set of keywords/questions that actually create the crosswords. A crossword can be created from set of questions of a same category only. The categories are displayed in a 3/4 column list format unlike Joolmla category blog. So not all options are being used which are provided on the categories options.

## Adding Content

Once the categories are created, you need to add number of questions (or keywords) to each category so that the Crosswords can be created out of them. Crossword creation is presently available only from front-end, however you can add keywords from the administrator site itself. It is recommended to add as many keywords as possible for each category. Please see the below documentation for more details.

[Crosswords FAQs](https://docs.corejoomla.com/Crosswords_FAQs)

### Adding KeyWords

- Go to Components->Community Crosswords->Keywords page.
- Click on New button to start creating the keyword
- Enter the Keyword and Question. The question should ideally gives hint to the users to find the keyword. So it should not reveal the entire keyword and at the same time it should not be confusing and too complex to guess the keyword. Otherwise users may not be able to solve that keyword and they may simply avoid solving crossword.
- Keyword should not contain any spaces or special characters unless they can be input by the user. You can have any language character as the characters are encoded with utf-8 encoding.
- Select the category and status and click save and close button.
- Add as many keywords as possible with the same procedure as above.

## Create Menus

The next and important step is to create menu items to access the component from front-end. Go to Menus->Main Menu->Add New Menu Item. Select the menu item type as Crosswords->Crosswords Layout, enter title and other information and save the menu item. Make sure the access level is set to user level which needs to view the crosswords.

Now you can access the component from front-end.

## Creating Crosswords

- Go to the front-end component using the menu item you have created in the above step.
- You will be shown the Create dropdown menu on the toolbar if you are logged in with a user who has create permissions given.
- Click on it and you will be shown with two submenu items &#8211; Create Crossword and Create Keyword.
- Click on the create crossword link
- Now the crossword form page will be shown with basic setup details which you need to enter.

### Basic setup

In this, you need to enter title, description (optional), select the difficulty level and category. Then click on the submit button. The system will automatically pick up the keywords available in the selected category and build the crossword based on the difficulty level selected. Please see below documentation about how the difficultly levels affect crossword keywords selection:

[Crosswords FAQs](https://docs.corejoomla.com/Crosswords_FAQs)

### Advanced Setup

Instead of the system automatically select the keywords, you can instruct the system to use only keywords you need.

- Click on Advanced Setup link on the form page to reveal the keyword selection boxes.
- The keywords are automatically populated when you change/select the category. Select as many keywords as you want on the left side list box and click on the right arrow button to move the selected keywords to the right side list box.
- Keywords added to right side list box are used to build the crossword.
- Make sure to select minimum number of keywords as mentioned above the list boxes to let the system build crossword.
- The crossword creation is purely based on best effort basis. If the crossword creation not possible using selected keywords or insufficient number of keywords, the system will throw an error message.

## Solving Crosswords

If you are logged as a user with solve crossword access permissions, you will be shown the buttons to solve keyword/crossword on crossword details page. All crossword that you have created in above step will be shown on the home page which you can click and access.

There are three buttons used to solve the crossword after you enter your answers.

- Check Result: If you have entered all answers, you can use this button to check your result. If any wrong answers entered, it will highlight them and you can retry it.
- Solve Question: If it is too difficult for you to solve a question, you can use this button to solve a particular question automatically by the system. Click on the keyword input boxes of the question on the grid and use this button.
- Solve Crossword: If you have entered/solved 75% of the questions but not able to solve others (or you give up), then you can use this button to solve the remaining questions automatically by the system.