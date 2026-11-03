# Payment Settings

Configure payment methods and gateways for your store.

**Location:** Settings → Payments

---

## General Options

| Setting | Description | Default |
|---------|-------------|---------|
| **Enable Checkout** | Allow customers to complete purchases | Yes |

---

## Offline Payment Methods

Built-in methods that don't require a payment gateway:

### Cash on Delivery

| Setting | Description |
|---------|-------------|
| **Enable** | Accept payment on delivery |
| **Title** | Display name |
| **Instructions** | Notes shown at checkout |

### Bank Transfer

| Setting | Description |
|---------|-------------|
| **Enable** | Accept direct bank transfers |
| **Title** | Display name |
| **Bank Details** | Account information |
| **Instructions** | Payment instructions |

### Check Payment

| Setting | Description |
|---------|-------------|
| **Enable** | Accept check payments |
| **Title** | Display name |
| **Payee Name** | Make checks payable to |
| **Instructions** | Where to send checks |

---

## Payment Gateway Plugins

Real-time payment processing:

| Gateway | Features | Documentation |
|---------|----------|---------------|
| **PayPal** | PayPal, Cards, Venmo, Subscriptions | [PayPal Setup](../payment-plugins/paypal.md) |
| **Stripe** | Cards, Apple Pay, Google Pay, Subscriptions | [Stripe Setup](../payment-plugins/stripe.md) |

### Installing a Gateway

1. Download the plugin package
2. Install via **System → Extensions**
3. Enable in **System → Plugins**
4. Configure in EasyCommerce Settings → Payments

### Configuring a Gateway

1. Find the gateway in Payment Methods list
2. Click **Configure** button
3. Enter API credentials
4. Set preferences
5. Click **Save**

### Limit a gateway to selected countries

Each payment plugin's **Configure** form includes **Country availability**:

- **All countries** keeps the gateway available everywhere.
- **Only selected countries** offers it only for the countries you select.
- **All except selected countries** excludes the selected countries.

For example, to offer Razorpay only to customers with an Indian billing address, configure Razorpay, choose **Only selected countries**, select **India**, and save. Other gateways keep their own independent rules.

Payment availability uses the customer's **billing country**, not their IP address, language or nationality. Checkout requests a billing country even if the rest of the billing address is hidden. Changing the country clears any payment method that is no longer available. EasyCommerce also checks the saved order's billing country before starting payment, including when paying an existing unpaid order.

These rules control new payment attempts. They do not prevent confirmation or refunds of an existing payment.

### Set product prices for a gateway's currency

You can sell the same product at independent prices in different currencies, such as **USD 20.00** and **INR 1,999.00**. These are prices you choose, not exchange rates.

1. Keep your main currency in **Settings → General → Currency**.
2. Open the product's **Pricing** tab and add an INR entry under **Prices in other currencies**. Enter its regular price and, optionally, its sale price. For a variable product, add prices to each purchasable variation.
3. Open **Settings → Payments → Razorpay → Configure** and set **Checkout currency** to **INR**. Leave gateways such as Stripe at **Store currency** if they should continue charging USD.
4. Optionally restrict Razorpay to **India** using its country availability settings.
5. Test both payment methods before accepting live payments.

The shop and cart show the store currency. Selecting Razorpay recalculates the checkout using the saved INR product prices and displays the INR total before the customer places the order. Selecting a store-currency gateway restores the USD prices. Each order and invoice uses its actual checkout currency throughout.

Every item must have a price in the gateway's currency. A variation needs its own entry; it does not inherit the parent product's alternate price. If a price is missing, EasyCommerce returns the checkout to the store currency and asks the customer to choose another eligible gateway. It never treats a USD price as an INR amount or estimates a conversion. Keep another payment gateway available for this fallback.

Alternate-currency checkout currently supports one-time virtual and digital purchases. Physical shipping, subscription billing, fixed-amount coupons, coupon monetary limits, and fees without an explicit matching currency require the store-currency checkout. Percentage discounts without monetary limits and percentage taxes are calculated from the selected currency's prices. If a cart cannot be priced completely in that currency, the same fallback applies.

Refunds use the currency and amounts saved on the order. Changing a product price or gateway currency does not change existing orders or accepted payments. Previously accepted converted payments retain their original payment amounts for settlement and refunds.

In **Reports**, select a currency to see its sales, fees and net proceeds separately. Exports include that currency. USD and INR sales are not added together, and product price ratios are not used as accounting exchange rates. Inventory valuation and the dashboard's monetary summaries use the store currency.

---

## Payment Method Order

Drag and drop to reorder how payment methods appear at checkout.

```
1. Credit Card (Stripe) ← Shown first
2. PayPal
3. Bank Transfer
4. Cash on Delivery ← Shown last
```

---

## Test Mode vs Live Mode

Most gateways support testing:

| Mode | Purpose |
|------|---------|
| **Test/Sandbox** | Use test credentials, no real charges |
| **Live/Production** | Real payments with live credentials |

> **Always test thoroughly before going live!**

---

## Best Practices

1. **Offer multiple options** - Customers prefer choices
2. **Put preferred method first** - Higher conversion
3. **Use test mode** - Verify before accepting real payments
4. **Enable 3D Secure** - Reduce fraud with Stripe
5. **Configure webhooks** - Reliable payment confirmations

---

## Troubleshooting

### Payment Failed

- Check API credentials
- Verify test/live mode matches credentials
- Check error logs

### Gateway Not Showing

- Plugin must be installed AND enabled
- Configure in EasyCommerce settings

---

## Related

- [PayPal Configuration](../payment-plugins/paypal.md)
- [Stripe Configuration](../payment-plugins/stripe.md)
