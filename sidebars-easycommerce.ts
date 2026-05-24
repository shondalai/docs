import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'overview',

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-setup',
        'getting-started/menu-setup',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/index',
        'configuration/general-settings',
        'configuration/product-settings',
        'configuration/payment-settings',
        'configuration/shipping-settings',
        'configuration/tax-settings',
        'configuration/subscription-settings',
        'configuration/email-settings',
        'configuration/invoice-settings',
        'configuration/account-settings',
        'configuration/appearance-settings',
        'configuration/analytics-settings',
        'configuration/seo-settings',
        'configuration/advanced-settings',
      ],
    },

    {
      type: 'category',
      label: 'Backend Guide',
      collapsed: true,
      items: [
        'backend-guide/index',
        'backend-guide/dashboard',
        'backend-guide/products',
        'backend-guide/orders',
        'backend-guide/customers',
        'backend-guide/coupons',
        'backend-guide/subscriptions',
        'backend-guide/reviews',
        'backend-guide/reports',
      ],
    },

    {
      type: 'category',
      label: 'Payment Plugins',
      collapsed: true,
      items: [
        'payment-plugins/index',
        'payment-plugins/paypal',
        'payment-plugins/stripe',
      ],
    },

    {
      type: 'category',
      label: 'Shipping Plugins',
      collapsed: true,
      items: [
        'shipping-plugins/index',
        'shipping-plugins/manual-shipping',
        'shipping-plugins/fedex',
        'shipping-plugins/ups',
        'shipping-plugins/dhl',
      ],
    },

    {
      type: 'category',
      label: 'Downloads & Licensing',
      collapsed: true,
      items: [
        'downloads-plugin/index',
        'downloads-plugin/installation',
        'downloads-plugin/license-management',
        'downloads-plugin/customer-portal',
        'downloads-plugin/update-server',
      ],
    },
  ],
};

export default sidebars;
