import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installation',
        'quick-start-guide',
        'configuration',
      ],
    },

    {
      type: 'category',
      label: 'User Guide',
      items: [
        'track-management',
        'maps-and-charts',
      ],
    },

    {
      type: 'category',
      label: 'Extensions',
      items: [
        'modules',
        'content-plugin',
      ],
    },

    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'plugin-events',
        'api-reference',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'troubleshooting',
        'gps-tools-changelog',
      ],
    },
  ],
};

export default sidebars;
