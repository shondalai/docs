import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started-guide-for-sociable',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuring-multiple-profiles-in-sociable',
        'setting-up-groups-in-sociable',
        'setting-up-activity-streams-system-for-sociable',
        'setting-up-the-points-system-for-sociable',
        'setting-up-the-badge-system-for-sociable',
        'setting-up-social-login-in-sociable',
        'enable-referrals-in-sociable',
      ],
    },

    {
      type: 'category',
      label: 'Customization',
      items: [
        'creating-sociable-profile-app',
        'overriding-sociable-layouts',
        'sociable-modules-and-plugins',
      ],
    },

    {
      type: 'category',
      label: 'API Reference',
      items: [
        'sociable-profile-api',
        'sociable-points-system-api',
        'sociable-badges-api',
        'sociable-avatars-api',
        'sociable-activity-stream-api',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'sociable-changelog',
      ],
    },
  ],
};

export default sidebars;
