import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

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
        'rewardify-changelog',
      ],
    },
  ],
};

export default sidebars;
