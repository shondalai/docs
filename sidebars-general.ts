import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Installation & Updates',
      collapsed: false,
      items: [
        'setup-automatic-updates-for-extensions',
        'how-to-uninstall-a-package',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'setup-cronjob-to-trigger-emails-automatically',
        'update-geoip-database',
        'how-to-translate-date-strings',
      ],
    },

    {
      type: 'category',
      label: 'Email Templates',
      items: [
        'tags-which-can-be-used-in-email-templates',
      ],
    },

    {
      type: 'category',
      label: 'Development',
      items: [
        'extending-component-shareable-layouts',
        'debug-ajax-requests-using-chrome-developer-tools',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'frequently-asked-questions',
      ],
    },
  ],
};

export default sidebars;

