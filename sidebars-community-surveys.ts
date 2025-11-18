import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installing-and-configuring-community-surveys',
        'quick-get-started-guide-for-community-surveys',
        'community-surveys-end-user-documentation',
      ],
    },

    {
      type: 'category',
      label: 'Creating Surveys',
      items: [
        'survey-types-explained',
        'conditional-rules-explained',
        'translating-surveys',
        'importexport-surveys',
      ],
    },

    {
      type: 'category',
      label: 'Question Types',
      items: [
        'creating-map-location-question',
        'ranking-questions-in-community-surveys',
        'how-url-parameter-questions-work-in-community-surveys',
        'setup-regular-expression-validation-on-textbox-questions',
        'show-the-answers-given-for-a-question-in-another-question-title-in-a-survey',
      ],
    },

    {
      type: 'category',
      label: 'Survey Distribution',
      items: [
        'display-surveys-in-joomla-articles',
        'inviting-users-to-take-the-survey',
        'sending-survey-through-acymailing-newsletters',
        'restricting-users-from-taking-the-survey-multiple-times',
      ],
    },

    {
      type: 'category',
      label: 'Results & Reporting',
      items: [
        'enabling-and-showing-consolidated-report',
        'showing-consolidated-report-to-users',
        'integrating-survey-with-google-sheets',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'survey-email-notifications',
        'custom-module-positions-in-community-surveys',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extending-community-surveys-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'community-surveys-faqs',
        'community-surveys-changelog',
      ],
    },
  ],
};

export default sidebars;
