import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installing-and-configuring-community-quiz',
      ],
    },

    {
      type: 'category',
      label: 'Creating Quizzes',
      items: [
        'question-types-supported-by-community-quiz',
        'adding-mathematical-formulas-in-quizzes',
        'display-quiz-in-joomla-article',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'customizing-emails-sent-from-community-quiz',
        'shortcodes-supported-by-community-quiz-certificates',
        'community-quiz-built-in-module-positions',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extending-community-quiz-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'community-quiz-changelog',
      ],
    },
  ],
};

export default sidebars;
