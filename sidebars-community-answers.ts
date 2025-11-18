import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installing-and-configuring-community-answers',
      ],
    },

    {
      type: 'category',
      label: 'Features',
      items: [
        'setting-up-the-community-answers-bounty-system',
        'community-answers-built-in-module-positions',
      ],
    },

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extending-community-answers-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting-guide-for-community-answers',
        'community-answers-changelog',
      ],
    },
  ],
};

export default sidebars;
