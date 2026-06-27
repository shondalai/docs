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
        'how-rewardify-works',
      ],
    },

    {
      type: 'category',
      label: 'Rewards & Rules',
      collapsed: false,
      items: [
        'rules',
        'badges',
        'levels',
        'currencies',
        'redemptions',
      ],
    },

    {
      type: 'category',
      label: 'Operations',
      items: [
        'members-and-ledger',
        'events-and-evaluation',
        'scheduled-tasks',
      ],
    },

    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations',
        'leaderboard',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'settings',
        'emails',
        'privacy',
      ],
    },

    {
      type: 'category',
      label: 'Upgrading & Help',
      items: [
        'migrating-from-v1',
        'troubleshooting',
        'faq',
        'rewardify-changelog',
      ],
    },

    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer/overview',
        'developer/concepts',
        'developer/sdk',
        'developer/adapters',
      ],
    },
  ],
};

export default sidebars;
