---
id: overview
title: EasyCommerce Documentation
sidebar_label: Overview
sidebar_position: 1
---

# EasyCommerce

A complete e-commerce solution for Joomla 5 and 6 with modern React-powered interfaces, multiple payment gateways, real-time shipping rates, subscription management, software licensing, and project milestone billing.

## What is EasyCommerce?

EasyCommerce turns Joomla into a full online store. It ships with everything a typical storefront needs already wired together: catalog, cart, checkout, customer accounts, orders, and post-sale operations all share one data model and one admin surface.

It is built as a modern Joomla component with a React admin and storefront, and exposes payments, shipping, tax, and email as plugins so the platform can be extended instead of replaced.

## Key Features

| Feature | Description |
|---------|-------------|
| Products | Simple, variable, digital, subscription, grouped, and bundle products |
| Orders | Full lifecycle with statuses, payments, refunds, notes, and notifications |
| Payments | PayPal, Stripe, manual offline methods, plugin-based gateway extensions |
| Shipping | DHL Express, UPS, FedEx, manual methods, plugin-based shipping extensions |
| Subscriptions | Recurring billing, trials, pause / switch / cancel self-service |
| Customers | Account management, order history, address book, subscription dashboard |
| Coupons | Percentage, fixed, free-shipping discounts with usage rules |
| Reports | Sales, orders, products, and customer analytics |
| Licensing | License key generation, activation slots, Joomla update XML feed |
| Project Billing | Milestone-based invoicing for agencies and service businesses |

## Architecture at a Glance

- Joomla 5 / 6 component, PHP 8.1+
- React 19 + TypeScript admin and storefront
- Plugin-based payments, shipping, tax, email, and theming
- React Query for data, Zustand for UI state, Tailwind for styling
- Standard Joomla ACL, language strings, and update server

## Quick Navigation

### Getting Started

- [Installation Guide](getting-started/installation.md)
- [Quick Setup](getting-started/quick-setup.md)
- [Menu Configuration](getting-started/menu-setup.md)

### Configuration

- [Settings Overview](configuration/index.md)
- [General Settings](configuration/general-settings.md)
- [Product Settings](configuration/product-settings.md)
- [Payment Settings](configuration/payment-settings.md)
- [Shipping Settings](configuration/shipping-settings.md)
- [Tax Settings](configuration/tax-settings.md)
- [Subscription Settings](configuration/subscription-settings.md)

### Payment Plugins

- [PayPal Setup](payment-plugins/paypal.md)
- [Stripe Setup](payment-plugins/stripe.md)

### Shipping Plugins

- [Manual Shipping](shipping-plugins/manual-shipping.md)
- [FedEx Setup](shipping-plugins/fedex.md)
- [UPS Setup](shipping-plugins/ups.md)
- [DHL Express Setup](shipping-plugins/dhl.md)

### Backend Guide

- [Dashboard](backend-guide/dashboard.md)
- [Managing Products](backend-guide/products.md)
- [Managing Orders](backend-guide/orders.md)
- [Managing Customers](backend-guide/customers.md)
- [Coupons](backend-guide/coupons.md)
- [Subscriptions](backend-guide/subscriptions.md)
- [Reviews](backend-guide/reviews.md)
- [Reports](backend-guide/reports.md)

### Downloads & Licensing Plugin

- [Overview](downloads-plugin/index.md)
- [Installation](downloads-plugin/installation.md)
- [License Management](downloads-plugin/license-management.md)
- [Customer Portal](downloads-plugin/customer-portal.md)
- [Update Server](downloads-plugin/update-server.md)

## System Requirements

| Requirement | Minimum |
|-------------|---------|
| Joomla | 5.0+ (6.x supported) |
| PHP | 8.1+ |
| MySQL | 5.7+ or MariaDB 10.3+ |
| HTTPS | Required for live payment gateways |

## Getting Help

- Documentation: browse this user guide
- Support email: support@shondalai.com
- Website: [shondalai.com](https://shondalai.com)

*EasyCommerce by BulaSikku Technologies Private Limited.*
