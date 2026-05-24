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
        'admin-tour',
        'community-surveys-end-user-documentation',
      ],
    },

    {
      type: 'category',
      label: 'Creating Surveys',
      items: [
        'survey-builder',
        'themes-and-customization',
        'survey-types-explained',
        'translating-surveys',
        'importexport-surveys',
      ],
    },

    {
      type: 'category',
      label: 'Rules & Logic',
      items: [
        'conditional-rules-explained',
        'rules-answer-manipulation',
        'rules-routing',
        'rules-scoring',
        'rules-validation',
        'rules-side-effects',
        'rules-context-fields',
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
      label: 'Distribution',
      items: [
        'display-surveys-in-joomla-articles',
        'inviting-users-to-take-the-survey',
        'invitations-campaigns',
        'contacts-and-groups',
        'restricting-users-from-taking-the-survey-multiple-times',
      ],
    },

    {
      type: 'category',
      label: 'Email',
      items: [
        'email-templates',
        'survey-email-notifications',
        'sending-survey-through-acymailing-newsletters',
      ],
    },

    {
      type: 'category',
      label: 'Results & Reporting',
      items: [
        'analytics-and-reports',
        'enabling-and-showing-consolidated-report',
        'showing-consolidated-report-to-users',
      ],
    },

    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations-overview',
        'integration-webhook',
        'integration-slack',
        'integrating-survey-with-google-sheets',
        'integration-acymailing',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'settings-reference',
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
