import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',
    'gps-tools-quick-stater-guide',
    'using-gps-tools-content-plugin-to-display-track-in-articles',
    'custom-module-positions-in-gps-tools',

    {
      type: 'category',
      label: 'Advanced',
      items: [
        'extending-gps-tools-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'gps-tools-changelog',
      ],
    },
  ],
};

export default sidebars;
