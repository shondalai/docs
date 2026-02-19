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
        'profile-assignment-rules',
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
        'sociable-modules-and-plugins',
      ],
    },

    {
      type: 'category',
      label: 'API Reference',
      items: [
        'sociable-sdk-developer-guide',
        'sociable-sdk-instance',
        'sociable-sdk-profile-api',
        'sociable-sdk-avatar-api',
        'sociable-sdk-points-api',
        'sociable-sdk-badge-api',
        'sociable-sdk-activity-api',
        'sociable-sdk-notification-api',
        'sociable-sdk-connection-api',
        'sociable-sdk-event-api',
        'sociable-sdk-group-api',
        'sociable-sdk-rule-engine',
        'sociable-sdk-custom-rules',
        'sociable-sdk-legacy-migration',
        'sociable-sdk-best-practices',
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
