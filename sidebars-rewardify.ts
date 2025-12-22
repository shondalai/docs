import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started',
        'point-rules',
        'managing-points',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'leaderboard',
        'plugins',
      ],
    },

    {
      type: 'category',
      label: 'API Reference',
      items: [
        'rewardify-points-system-api',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting',
        'faq',
        'rewardify-changelog',
      ],
    },
  ],
};

export default sidebars;
