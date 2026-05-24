import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    'quick-get-started-guide-for-community-polls',

    {
      type: 'category',
      label: 'Features',
      items: [
        'email-templates',
        'ai-helpers',
        'weighted-voting',
        'display-polls-in-joomla-articles',
        'custom-module-positions-in-community-polls',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extend-community-polls-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting-tips-for-community-polls',
        'community-polls-changelog',
      ],
    },

    {
      type: 'category',
      label: 'Removed in v7',
      collapsed: true,
      items: [
        'polls-anywhere-advanced-concepts',
      ],
    },
  ],
};

export default sidebars;
