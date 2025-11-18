import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installing-and-configuring-cjforum',
        'configure-search-engine-friendly-urls-for-cjforum',
      ],
    },

    {
      type: 'category',
      label: 'User Management',
      items: [
        'configuring-user-ranks',
        'extending-cjforum-user-profiles-with-custom-profile-fields',
        'enable-social-login-in-cjforum',
      ],
    },

    {
      type: 'category',
      label: 'Features',
      items: [
        'configure-cjforum-personal-messaging-pm-system',
        'reportingflagging-posts-in-cjforum',
        'moderating-posts-in-cjforum',
        'cjforum-joomla-articles-integration',
        'using-cjforum-activity-stream',
      ],
    },

    {
      type: 'category',
      label: 'Gamification',
      items: [
        'award-points-to-users-using-cjforum-points-system',
        'setting-up-user-points-for-various-activities',
      ],
    },

    {
      type: 'category',
      label: 'Customization',
      items: [
        'customizing-category-image-and-icon',
        'custom-module-positions-in-cjforum',
        'overriding-cjforum-layouts',
        'tags-which-can-be-used-in-cjforum-email-templates',
      ],
    },

    {
      type: 'category',
      label: 'Integration & API',
      items: [
        'retrieve-one-or-more-user-profiles',
        'link-user-names-to-cjforum-user-profile-in-your-component',
        'using-cjforum-user-avatars-in-your-component',
        'extending-cjforum-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Migration',
      items: [
        'migrating-from-kunena',
        'migrating-from-cjblog',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'cjforum-changelog',
      ],
    },
  ],
};

export default sidebars;
