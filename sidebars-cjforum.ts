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
      label: 'SDK Documentation (v6.0+)',
      collapsed: false,
      items: [
        'sdk-overview',
        'sdk-profile-quick-start',
        'sdk-points-stream-quick-start',
        'sdk-migration-guide',
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
        'reportingflagging-posts-in-cjforum',
        'moderating-posts-in-cjforum',
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
      label: 'Advanced',
      items: [
        'extending-cjforum-using-plugin-events',
      ],
    },

    {
      type: 'category',
      label: 'Legacy API (Deprecated)',
      collapsed: true,
      items: [
        'retrieve-one-or-more-user-profiles',
        'link-user-names-to-cjforum-user-profile-in-your-component',
        'using-cjforum-user-avatars-in-your-component',
        'award-points-to-users-using-cjforum-points-system',
        'using-cjforum-activity-stream',
        'configure-cjforum-personal-messaging-pm-system',
        'cjforum-joomla-articles-integration',
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
