---
id: event-reference
title: EasyCommerce Event Reference
sidebar_label: Event Reference
description: Find typed EasyCommerce event names, payload methods, and dispatching services.
---

# Typed event reference

Use this reference with the [event guide](events.md). Subscribe to the exact event name, then type your handler with the corresponding PHP event class.

All classes below use the namespace `Joomla\Component\EasyCommerce\Administrator\Event`, followed by the group name and class name. For example, `Product\AfterProductSaveEvent`. Their files are under `com_easycommerce/admin/src/Event/`.

The tables list useful methods declared by each concrete class. They omit `getContext()` and the inherited `getData($key, $default)`, `addData($key, $value)`, and result/cancellation helpers. Methods marked as setters change an event; check its caller to confirm which changes are used. A callable method alone is not a guarantee that the caller persists its result.

“Caller” identifies where the current source creates and dispatches the event. A listener in a plugin is not a caller. These are source-level contracts, not separate HTTP endpoints.

## Declared contracts with no normal core dispatch

Do not depend on these firing during ordinary checkout or shipment creation:

| Event class | Exact event name | Current limitation |
| --- | --- | --- |
| `Payment\AfterOrderCreatePaymentEvent` | `onEasyCommerceAfterOrderCreatePayment` | No core dispatch call found. Listen to the documented order and payment workflow instead. |
| `Payment\CreateSubscriptionEvent` | `onEasyCommerceCreateSubscription` | No core dispatch call found. Existing gateways create subscriptions through their own payment flows. |
| `Shipping\CreateShipmentEvent` | `onEasyCommerceCreateShipment` | No core dispatch call found. Creating a local shipment record does not automatically buy a carrier label. |
| `Shipping\GetTrackingInfoEvent` | `onEasyCommerceGetTrackingInfo` | No core dispatch call found. A carrier handler alone does not provide automatic live tracking. |

See [payment plugins](payment-plugins.md) and [shipping plugins](shipping-plugins.md) for the integration work needed around these contracts.

## Cart

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterCartClearEvent`<br/>`onEasyCommerceAfterCartClear` | Use the named arguments via `getData()`. See the event constructor. | `CartService` |
| `AfterCartCouponApplyEvent`<br/>`onEasyCommerceAfterCartCouponApply` | `getCart()`, `setCart()`, `getCode()` | `CartService` |
| `AfterCartCouponRemoveEvent`<br/>`onEasyCommerceAfterCartCouponRemove` | `getCart()`, `setCart()`, `getCode()` | `CartService` |
| `AfterCartGetEvent`<br/>`onEasyCommerceAfterCartGet` | `getCart()`, `setCart()` | `CartService` |
| `AfterCartItemAddEvent`<br/>`onEasyCommerceAfterCartItemAdd` | `getItem()`, `getCart()` | `CartService` |
| `AfterCartItemRemoveEvent`<br/>`onEasyCommerceAfterCartItemRemove` | `getCart()` | `CartService` |
| `AfterCartItemUpdateEvent`<br/>`onEasyCommerceAfterCartItemUpdate` | `getCart()` | `CartService` |
| `AfterCartTotalsCalculatedEvent`<br/>`onEasyCommerceAfterCartTotalsCalculated` | `getCart()`, `setCart()` | `CartService` |
| `BeforeCartClearEvent`<br/>`onEasyCommerceBeforeCartClear` | `isCancellable()` | `CartService` |
| `BeforeCartCouponApplyEvent`<br/>`onEasyCommerceBeforeCartCouponApply` | `isCancellable()`, `getCode()`, `getCart()` | `CartService` |
| `BeforeCartCouponRemoveEvent`<br/>`onEasyCommerceBeforeCartCouponRemove` | `isCancellable()`, `getCode()`, `getCart()` | `CartService` |
| `BeforeCartGetEvent`<br/>`onEasyCommerceBeforeCartGet` | `isCancellable()` | `CartService` |
| `BeforeCartItemAddEvent`<br/>`onEasyCommerceBeforeCartItemAdd` | `isCancellable()`, `getProductId()`, `getQuantity()`, `setQuantity()`, `getOptions()`, `getCart()` | `CartService` |
| `BeforeCartItemRemoveEvent`<br/>`onEasyCommerceBeforeCartItemRemove` | `isCancellable()`, `getCartKey()` | `CartService` |
| `BeforeCartItemUpdateEvent`<br/>`onEasyCommerceBeforeCartItemUpdate` | `isCancellable()`, `getCartKey()`, `getQuantity()` | `CartService` |

## Category

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterCategoryDeleteEvent`<br/>`onEasyCommerceAfterCategoryDelete` | `getCategoryId()` | `CategoryModel` |
| `AfterCategoryGetEvent`<br/>`onEasyCommerceAfterCategoryGet` | `getCategory()` | `CategoryModel`, `CategoriesModel` |
| `AfterCategoryListEvent`<br/>`onEasyCommerceAfterCategoryList` | `getItems()`, `setItems()` | `CategoriesModel` |
| `AfterCategorySaveEvent`<br/>`onEasyCommerceAfterCategorySave` | `getCategory()`, `isNew()` | `CategoryModel` |
| `BeforeCategoryDeleteEvent`<br/>`onEasyCommerceBeforeCategoryDelete` | `isCancellable()`, `getCategoryId()` | `CategoryModel` |
| `BeforeCategorySaveEvent`<br/>`onEasyCommerceBeforeCategorySave` | `isCancellable()`, `isNew()` | `CategoryModel` |

## Checkout

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterCheckoutValidateEvent`<br/>`onEasyCommerceAfterCheckoutValidate` | `getErrors()`, `setErrors()`, `getCart()` | `CartService` |
| `BeforeCheckoutOrderCreateEvent`<br/>`onEasyCommerceBeforeCheckoutOrderCreate` | `isCancellable()` | `OrderService` |

## Coupon

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterCouponDeleteEvent`<br/>`onEasyCommerceAfterCouponDelete` | `getCouponId()` | `CouponService` |
| `AfterCouponGetEvent`<br/>`onEasyCommerceAfterCouponGet` | `getCoupon()` | `CouponService` |
| `AfterCouponListEvent`<br/>`onEasyCommerceAfterCouponList` | `getItems()`, `setItems()` | `CouponService` |
| `AfterCouponSaveEvent`<br/>`onEasyCommerceAfterCouponSave` | `getCoupon()`, `isNew()` | `CouponService` |
| `BeforeCouponDeleteEvent`<br/>`onEasyCommerceBeforeCouponDelete` | `isCancellable()`, `getCouponId()` | `CouponService` |
| `BeforeCouponSaveEvent`<br/>`onEasyCommerceBeforeCouponSave` | `isCancellable()`, `isNew()` | `CouponService` |

## Customer

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterCustomerDeleteEvent`<br/>`onEasyCommerceAfterCustomerDelete` | `getCustomerId()` | `CustomerService` |
| `AfterCustomerGetEvent`<br/>`onEasyCommerceAfterCustomerGet` | `getCustomer()` | `CustomerService` |
| `AfterCustomerListEvent`<br/>`onEasyCommerceAfterCustomerList` | `getItems()`, `setItems()` | `CustomerService` |
| `AfterCustomerSaveEvent`<br/>`onEasyCommerceAfterCustomerSave` | `getCustomer()`, `isNew()` | `CustomerService` |
| `BeforeCustomerDeleteEvent`<br/>`onEasyCommerceBeforeCustomerDelete` | `isCancellable()`, `getCustomerId()` | `CustomerService` |
| `BeforeCustomerSaveEvent`<br/>`onEasyCommerceBeforeCustomerSave` | `isCancellable()`, `isNew()` | `CustomerService` |

## Email

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterEmailSendEvent`<br/>`onEasyCommerceAfterEmailSend` | `getType()`, `getRecipient()`, `getVariables()` | `EmailService` |
| `BeforeEmailSendEvent`<br/>`onEasyCommerceBeforeEmailSend` | `isCancellable()`, `getType()`, `getVariables()`, `getTemplate()` | `EmailService` |
| `EmailTemplateRegisterEvent`<br/>`onEasyCommerceEmailTemplateRegister` | `addTemplate()`, `hasTemplate()`, `getTemplates()`, `getTemplate()`, `getTemplatesByCategory()` | `EmailService` |

## Invoice

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterInvoiceEmailSentEvent`<br/>`onEasyCommerceAfterInvoiceEmailSent` | `getOrderId()`, `getInvoiceNumber()`, `getRecipient()`, `isSuccess()` | `InvoiceService` |
| `AfterInvoiceGenerateEvent`<br/>`onEasyCommerceAfterInvoiceGenerate` | `getOrderId()`, `getType()`, `getFilepath()` | `InvoiceService` |
| `BeforeInvoiceGenerateEvent`<br/>`onEasyCommerceBeforeInvoiceGenerate` | `isCancellable()`, `getOrderId()`, `getType()` | `InvoiceService` |

## Order

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterOrderCancelEvent`<br/>`onEasyCommerceAfterOrderCancel` | `getOrder()` | `OrderService` |
| `AfterOrderCreateEvent`<br/>`onEasyCommerceAfterOrderCreate` | `getOrder()` | `OrderService` |
| `AfterOrderDeleteEvent`<br/>`onEasyCommerceAfterOrderDelete` | `getOrder()`, `getOrderId()` | `OrderService` |
| `AfterOrderGetEvent`<br/>`onEasyCommerceAfterOrderGet` | `getOrder()` | `OrderService` |
| `AfterOrderListEvent`<br/>`onEasyCommerceAfterOrderList` | `getItems()`, `setItems()` | `OrderService` |
| `AfterOrderPaymentEvent`<br/>`onEasyCommerceAfterOrderPayment` | `getOrder()`, `getPaymentStatus()` | `OrderService` |
| `AfterOrderRefundEvent`<br/>`onEasyCommerceAfterOrderRefund` | `getOrder()`, `getAmount()` | `OrderService` |
| `AfterOrderStatusChangeEvent`<br/>`onEasyCommerceAfterOrderStatusChange` | `getOrder()`, `getOrderId()`, `getOldStatus()`, `getNewStatus()` | `OrderService` |
| `BeforeOrderCancelEvent`<br/>`onEasyCommerceBeforeOrderCancel` | `isCancellable()`, `getOrderId()`, `getReason()` | `OrderService` |
| `BeforeOrderCreateEvent`<br/>`onEasyCommerceBeforeOrderCreate` | `isCancellable()` | `OrderService` |
| `BeforeOrderDeleteEvent`<br/>`onEasyCommerceBeforeOrderDelete` | `isCancellable()`, `getOrder()`, `getOrderId()` | `OrderService` |
| `BeforeOrderRefundEvent`<br/>`onEasyCommerceBeforeOrderRefund` | `isCancellable()`, `getOrderId()`, `getAmount()`, `getReason()` | `OrderService` |
| `BeforeOrderStatusChangeEvent`<br/>`onEasyCommerceBeforeOrderStatusChange` | `isCancellable()`, `getOrder()`, `getOrderId()`, `getOldStatus()`, `getNewStatus()`, `setNewStatus()` | `OrderService` |

## Order totals

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterFeesCalculateEvent`<br/>`onEasyCommerceAfterFeesCalculate` | `getCart()`, `getFees()`, `setFees()` | `OrderTotalsService` |
| `AfterTotalsCalculateEvent`<br/>`onEasyCommerceAfterTotalsCalculate` | `getTotals()`, `setTotals()` | `OrderTotalsService` |

## Payment

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `CancelSubscriptionEvent`<br/>`onEasyCommerceCancelSubscription` | `getSubscriptionId()`, `getReason()`, `getPaymentMethod()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getError()` | `SubscriptionService` |
| `CapturePaymentEvent`<br/>`onEasyCommerceCapturePayment` | `getOrderId()`, `getTransactionId()`, `getPaymentMethod()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getCaptureId()`, `getCapturedAmount()`, `getError()` | `OrdersController` |
| `ConfirmPaymentEvent`<br/>`onEasyCommerceConfirmPayment` | `getPaymentIntentId()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getOrderNumber()`, `getStatus()`, `getError()` | `PaymentController` |
| `CreatePaymentOrderEvent`<br/>`onEasyCommerceCreatePaymentOrder` | `getOrder()`, `getPaymentMethod()`, `setOrderId()`, `getOrderId()`, `setApproveUrl()`, `getApproveUrl()`, `isSuccessful()`, `setError()`, `getError()` | `PaymentController` |
| `GetPaymentMethodsEvent`<br/>`onEasyCommerceGetPaymentMethods` | `getMethods()`, `addMethod()`, `setMethods()` | `MobileOrdersService`, `PaymentController` |
| `GetPaymentTransactionUrlEvent`<br/>`onEasyCommerceGetPaymentTransactionUrl` | `getPaymentMethod()`, `getTransactionId()`, `getOrderId()`, `getUrl()`, `setUrl()`, `getLabel()`, `setLabel()`, `hasUrl()` | `OrdersController` |
| `HandleWebhookEvent`<br/>`onEasyCommerceHandleWebhook` | `getPayload()`, `getHeaders()`, `getGateway()`, `isSuccessful()`, `setErrorResult()`, `getError()` | `WebhookController` |
| `InitializePaymentEvent`<br/>`onEasyCommerceInitializePayment` | `getOrder()`, `getPaymentMethod()`, `isSuccessful()`, `setInitializationResult()`, `setError()`, `setSuccess()`, `getClientSecret()`, `getPublishableKey()`, `getPaymentIntentId()`, `getError()` | `PaymentController` |
| `ProcessPaymentEvent`<br/>`onEasyCommerceProcessPayment` | `getOrder()`, `getPaymentData()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getTransactionId()`, `getStatus()`, `getRedirectUrl()`, `getError()`, `getErrorCode()` | `PaymentController` |
| `RefundPaymentEvent`<br/>`onEasyCommerceRefundPayment` | `getTransactionId()`, `getAmount()`, `getReason()`, `getPaymentMethod()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getRefundId()`, `getRefundedAmount()`, `getError()` | `OrderService` |
| `UpdateSubscriptionEvent`<br/>`onEasyCommerceUpdateSubscription` | `getSubscriptionId()`, `getUpdateData()`, `getPaymentMethod()`, `isSuccessful()`, `setSuccessResult()`, `setErrorResult()`, `getError()`, `getRedirectUrl()`, `setUserActionRequired()`, `getMessage()`, `setGatewayReference()`, `getGatewayReference()` | `SubscriptionPlanChangeService`, `SubscriptionService` |
| `VerifyDuplicateRenewalEvent`<br/>`onEasyCommerceVerifyDuplicateRenewal` | `getDuplicate()`, `getRetained()`, `getSubscription()`, `getDateAction()` | `EasyCommerceServiceProvider` |

## Pricing

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterPriceCalculateEvent`<br/>`onEasyCommerceAfterPriceCalculate` | `getResult()`, `getProduct()`, `getQuantity()`, `getOptions()` | `PricingService` |

## Product

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterProductDeleteEvent`<br/>`onEasyCommerceAfterProductDelete` | `getProductId()` | `ProductService` |
| `AfterProductGetEvent`<br/>`onEasyCommerceAfterProductGet` | `getProduct()`, `setProduct()` | `ProductService` |
| `AfterProductListEvent`<br/>`onEasyCommerceAfterProductList` | `getItems()`, `setItems()` | `ProductService` |
| `AfterProductSaveEvent`<br/>`onEasyCommerceAfterProductSave` | `getProductId()`, `isNew()` | `ProductService` |
| `BeforeProductDeleteEvent`<br/>`onEasyCommerceBeforeProductDelete` | `isCancellable()`, `getProductId()`, `getProduct()` | `ProductService` |
| `BeforeProductGetEvent`<br/>`onEasyCommerceBeforeProductGet` | `isCancellable()`, `getProductId()` | `ProductService` |
| `BeforeProductListEvent`<br/>`onEasyCommerceBeforeProductList` | `getFilters()`, `setFilters()` | `ProductService` |
| `BeforeProductSaveEvent`<br/>`onEasyCommerceBeforeProductSave` | `isCancellable()`, `isNew()`, `getProductId()` | `ProductService` |

## Shipping

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterShippingRatesEvent`<br/>`onEasyCommerceAfterShippingRates` | `getRates()`, `setRates()`, `getCart()`, `getAddress()` | `ShippingService` |
| `AfterShippingTrackingEvent`<br/>`onEasyCommerceAfterShippingTracking` | `getTrackingInfo()`, `setTrackingInfo()`, `getTrackingNumber()` | `ShippingService` |
| `AfterShippingZonesEvent`<br/>`onEasyCommerceAfterShippingZones` | `getZones()`, `setZones()` | `ShippingService` |
| `CalculateCarrierRateEvent`<br/>`onEasyCommerceCalculateCarrierRate` | `getCarrier()`, `getCart()`, `getZone()`, `getRates()`, `addRate()`, `setRates()` | `ShippingService` |

## Subscription

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterSubscriptionExpiredEvent`<br/>`onEasyCommerceAfterSubscriptionExpired` | `getSubscription()`, `getSubscriptionId()`, `getReason()`, `getNotes()`, `getProductId()`, `getCustomerId()` | `SubscriptionService` |
| `AfterSubscriptionPausedEvent`<br/>`onEasyCommerceAfterSubscriptionPaused` | `getSubscription()`, `getSubscriptionId()`, `getProductId()`, `getCustomerId()`, `getPaidUntilDate()`, `getReason()`, `isPaidPeriodEnded()` | `SubscriptionService` |
| `AfterSubscriptionPlanChangedEvent`<br/>`onEasyCommerceAfterSubscriptionPlanChanged` | `getSubscription()`, `getSubscriptionId()`, `getCustomerId()`, `getChange()`, `getChangeId()`, `getDirection()`, `getEffective()`, `getFrom()`, `getTo()`, `getAmountCharged()`, `getCurrency()`, `getOrderId()`, `getNextPaymentDate()` | `SubscriptionPlanChangeService` |
| `AfterSubscriptionRenewalEvent`<br/>`onEasyCommerceAfterSubscriptionRenewal` | `getSubscription()`, `getSubscriptionId()`, `getOrderId()`, `getNextPaymentDate()`, `getPaymentMethod()`, `getProductId()`, `getCustomerId()` | `SubscriptionService` |
| `AfterSubscriptionResumedEvent`<br/>`onEasyCommerceAfterSubscriptionResumed` | `getSubscription()`, `getSubscriptionId()`, `getProductId()`, `getCustomerId()`, `getNextPaymentDate()` | `SubscriptionService` |
| `BeforeSubscriptionPlanChangeEvent`<br/>`onEasyCommerceBeforeSubscriptionPlanChange` | `isCancellable()`, `isBlocked()`, `getBlockReason()`, `getSubscription()`, `getSubscriptionId()`, `getChange()`, `getChangeId()`, `getStage()`, `getDirection()`, `getEffective()`, `getFrom()`, `getTo()`, `getAmountDue()`, `getEffectiveDate()` | `SubscriptionPlanChangeService` |
| `GetSubscriptionStatusEvent`<br/>`onEasyCommerceGetSubscriptionStatus` | `getGateway()`, `getGatewaySubscriptionId()` | `SubscriptionService` |
| `MigrateToGatewaySubscriptionEvent`<br/>`onEasyCommerceMigrateToGatewaySubscription` | `getSubscription()`, `getGatewayCustomerId()`, `getPaymentMethodId()`, `getBillingCycleAnchor()`, `getProductId()`, `getAmount()`, `getCurrency()`, `getInterval()`, `getIntervalCount()` | `MigrationService`, `SubscriptionService` |

## Tag

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterTagDeleteEvent`<br/>`onEasyCommerceAfterTagDelete` | `getTagIds()` | `TagService` |
| `AfterTagGetEvent`<br/>`onEasyCommerceAfterTagGet` | `getTag()` | `TagService` |
| `AfterTagListEvent`<br/>`onEasyCommerceAfterTagList` | `getItems()`, `setItems()` | `TagService` |
| `AfterTagSaveEvent`<br/>`onEasyCommerceAfterTagSave` | `getTag()`, `isNew()` | `TagService` |
| `BeforeTagDeleteEvent`<br/>`onEasyCommerceBeforeTagDelete` | `isCancellable()`, `getTagIds()` | `TagService` |
| `BeforeTagSaveEvent`<br/>`onEasyCommerceBeforeTagSave` | `isCancellable()`, `isNew()` | `TagService` |

## Tax

| Event class and exact event name | Payload methods | Caller |
| --- | --- | --- |
| `AfterTaxRateSaveEvent`<br/>`onEasyCommerceAfterTaxRateSave` | `getRate()`, `isNew()` | `TaxService` |
| `AfterTaxRatesEvent`<br/>`onEasyCommerceAfterTaxRates` | `getRates()`, `setRates()`, `getZoneId()`, `getFilters()` | `TaxService` |
| `AfterTaxZonesEvent`<br/>`onEasyCommerceAfterTaxZones` | `getZones()`, `setZones()` | `TaxService` |
| `BeforeTaxRateSaveEvent`<br/>`onEasyCommerceBeforeTaxRateSave` | `isCancellable()`, `getRateData()`, `setRateData()`, `isNew()` | `TaxService` |
| `CalculateTaxEvent`<br/>`onEasyCommerceCalculateTax` | `getAmount()`, `getTaxClassId()`, `getAddress()`, `getBreakdown()`, `setBreakdown()`, `addTax()` | `TaxService` |
| `FindTaxZoneEvent`<br/>`onEasyCommerceFindTaxZone` | `getAddress()`, `getZone()`, `setZone()` | `TaxService` |

## Extension metadata is a separate contract

Settings schemas, product tabs, account tabs, routes, and plugin JSON actions are collected from interfaces. They do not use invented registration events. See [configuration](configuration.md), [UI extensions](ui-extensions.md), and [plugin endpoints](plugin-endpoints.md).

## Checking a different release

Search for the event class, inspect its constructor and public methods, then find the code that instantiates and dispatches it. Confirm whether the caller uses its result, honours cancellation, and runs before or after a database commit. Test the real workflow you intend to extend; some services have more than one entry point.
