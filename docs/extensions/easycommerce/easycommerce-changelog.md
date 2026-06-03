---
sidebar_position: 100
---

# EasyCommerce Changelog

All notable changes to EasyCommerce will be documented in this file.

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