---
sidebar_position: 100
---

# EasyCommerce Changelog

All notable changes to EasyCommerce will be documented in this file.

## [1.1.2] - 2026-07-18

### 🐛 Fixed
- Resolved issue where subscription renewal URLs did not display the form

## [1.1.1] - 2026-07-16

### 🐛 Fixed
- Hardened security and authorization checks

## [1.1.0] - 2026-07-14

### 🚀 Added
- Enabled production selection modal in single product menu
- Allowed bundling child products in variable subscriptions
- Enabled full-product portability for lossless export/import bundles
- Enabled full-product portability for lossless export/import bundles
- Re-pointed to new IDs on import
- Routed Products list Export/Import buttons via new process
- Enabled multipackage download support
- Supported subdirectory Joomla installs
- Enabled demo category featured images
- Made storefront SPA native to the component
- Enabled load to skip checkout view's server-side redirect with `spa_storefront`
- Added named `z-overlay` (10000) for all required surfaces
- Enabled skeleton loader for product page
- Enabled skeleton loader for product grids
- Allowed host chrome to route storefront through SPA
- Added host-navigation contract for chrome outside React tree
- Enabled client-side checkout flow and fixed storefront "Home" breadcrumb
- Enabled clean-URL BrowserRouter storefront SPA with flag
- Enabled add-to-cart/buy-now controls and separate pricing-purchase card
- Supported EasyCommerce Store Manager mobile app

### 🐛 Fixed
- Resolved product layout issues
- Ensured target resolves or creates by natural key and cross-product
- Prevented shop search icon from overlaying template mega menu
- Redirected category page to shop page
- Resolved issue with multi-level nested categories display
- Enabled toggle under Layout and Appearance tab for unresolved cases
- Improved floating cart button contrast in dark mode
- Corrected foreground reading for both light and dark modes
- Ensured modal overlays render above site header
- Made checkout controls follow active template theme
- Resolved token-backed utilities everywhere and retained `!`
- StoreRoot rendered SEF views from resolved storefront
- Routed Shopping / Go Home through storefront resolver in browser
- Corrected storefront "Home" breadcrumb to use shop route as home URL
- StoreRoot resolved active view from history state on client navigation
- Addressed issues from SPA fetch path rendering views
- Removed duplicate pricing block from default product layout
- Returned 404-not-500 for missing items and improved category menu picker
- Prevented Stripe plugin from applying discount on final checkout
- Fixed failing subscription renewal reminder task

## [1.0.9] - 2026-07-07

### 🚀 Added
- Added mobile app pairing card to admin settings
- Displayed one-time token and QR pairing code in admin settings
- Added mobile app companion API with bearer token authentication
- Allowed generating invoice only for paid orders
- Removed Joomla toolbar in admin and moved permissions button to settings page

### 🐛 Fixed
- Fixed issue with page returned from cancelled payment in PayPal

## [1.0.8] - 2026-06-28

### 🚀 Added
- Supported listing of free products
- Supported 1x1, 4x3, 16x9 layouts for product hero image frame
- Enabled export and import of product layouts

### 🐛 Fixed
- Resolved error in product view menu item form
- Stretched wide feature images to fit store product listing thumbnails
- Fixed UI issues in several product layout blocks
- Allowed manual discount application from admin
- Prevented select media modal header from being clipped by Joomla toolbar

## [1.0.7] - 2026-06-27

### 🚀 Added
- Added Rewardify adapter plugin

### 🐛 Fixed
- Handled invoice events from Stripe
- Fixed plugins manifest not showing on account page after payment until refresh
- Recovered payment succeeded event from migrated custom subscription orders

## [1.0.6] - 2026-06-03

### 🚀 Added
- Enhanced AI services using new AI assistant

### 🐛 Fixed
- Language selector styling is distorted in the translation modal
- Stripe payment is not recorded when autorenewed the order
- Downloads shows as expired after a trial subscription is activated manually
- Refunded orders are not consired in the consolidated sales report

## [1.0.5] - 2026-06-01

### 🚀 Added
- Show customer downloads on customer details page
- Add support to attach an order to a subscription
- Show plugin integration title on the header instead of body
- Show production variation on orders/subscriptions
- Add subscription details to activation details modal
- Add global refresh button to refresh admin pages
- Improve new subscription modal UX

### 🐛 Fixed
- Subscription with failed order showing as active
- Subscription paid with paypal is marked as renewal
- Subscription shows pending activation when there exists a previous pending order
- Invalid urls in the order confirmation emails

## [1.0.4] - 2026-05-29

### 🚀 Added
- Automatically create required scheduled tasks when installing first time
- Generate product thumbnails when uploading product image

### 🐛 Fixed
- Support all webhook events from PayPal
- All time filter is applied as YTD filter
- Export report is not creating jobs to download selected report
- Search box on admin toolbar do not show search results
- Subscription pause/cancel toggles not  enforced

## [1.0.3] - 2026-05-27

### 🐛 Fixed
- Downloads page shows empty results

## [1.0.2] - 2026-05-27

### 🚀 Added
- Improve admin user experience
- Use rich text editor for editing product layout blocks

### 🐛 Fixed
- Country dropdown in checkout is not selectable
- Adding missing language strings
- Edit license window do not show when clicking view button
- Do not fail subscription when next subscription id number exists
- Duplicate license key created for new orders using PayPal

## [1.0.1] - 2026-05-24

### 🚀 Added
- Initial release