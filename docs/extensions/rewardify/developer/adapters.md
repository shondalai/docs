---
id: adapters
title: Building Adapters
sidebar_label: Building Adapters
sidebar_position: 4
---

# Building adapters

An **adapter** is a Joomla plugin in the `rewards` group that connects a host
extension to Rewardify. An adapter can play one or both of two roles:

- **Event source.** It reports facts ("a member published an article", "an order
  completed") as normalized Rewardify events. The admin's rules decide what each
  fact earns. An adapter in this role never writes the ledger, computes a reward
  amount, or reads balances.
- **Fulfilment provider.** It delivers a real reward when a member redeems a
  catalogue item for currency: issue a coupon, grant a product, unlock a course.
  Rewardify holds the member's points in a reservation while the provider does the
  external work, and returns them if anything fails.

A single plugin can do both. The bundled `plg_rewards_easycommerce` and
`plg_rewards_communityquiz` adapters are each an event source (purchases,
quiz attempts) and a fulfilment provider (coupons and products; course and quiz
access). That separation, facts in and rewards out, is what lets any one adapter
be disabled without harming the core, and lets admins decide what each fact earns
and what each catalogue item costs.

- [How an adapter connects](#how-an-adapter-connects)
- [The contracts](#the-contracts)
- [Describe your adapter (the Adapters screen)](#describe-your-adapter-the-adapters-screen)
- [Reporting events (the source role)](#reporting-events-the-source-role)
  - [The canonical example: plg_rewards_joomla](#the-canonical-example-plg_rewards_joomla)
  - [Build a new source adapter](#build-a-new-source-adapter)
  - [Declaring triggers](#declaring-triggers)
- [Fulfilling redemptions (the provider role)](#fulfilling-redemptions-the-provider-role)
  - [The redemption saga](#the-redemption-saga)
  - [Declare a provider](#declare-a-provider)
  - [Searchable config fields](#searchable-config-fields)
  - [Do the fulfilment work](#do-the-fulfilment-work)
  - [The RewardProviderInterface contract](#the-rewardproviderinterface-contract)
- [Trust, idempotency, and safety](#trust-idempotency-and-safety)
- [Checklist](#checklist)

---

## How an adapter connects

Everything an adapter does is driven by Joomla events that Rewardify dispatches to
the `rewards` plugin group. There is no boot-time registration to get wrong, and an
adapter referencing the Rewardify event classes is safe even when Rewardify is
absent, because those classes only load when Rewardify itself dispatches them.

| You want to | Subscribe to | Covered in |
|-------------|--------------|------------|
| Appear on the Adapters screen | `onRewardifyCollectAdapters` | [Describe your adapter](#describe-your-adapter-the-adapters-screen) |
| Make your events selectable in rules/badges | `onRewardifyCollectTriggers` | [Declaring triggers](#declaring-triggers) |
| Report that something happened | your host's own events | [Reporting events](#reporting-events-the-source-role) |
| Offer a catalogue fulfilment provider | `onRewardifyCollectProviders` | [Declare a provider](#declare-a-provider) |
| Fill a searchable provider config field | `onRewardifyProviderOptions` | [Searchable config fields](#searchable-config-fields) |
| Deliver a reward on redemption | `onRewardifyRedemptionFulfil` | [Do the fulfilment work](#do-the-fulfilment-work) |

You subscribe to whichever of these your adapter needs. A pure event source uses
the first three; a pure fulfilment provider uses the last three; an adapter that
does both subscribes to all of them in one `getSubscribedEvents()`.

---

## The contracts

The contracts live in `com_rewardify/admin/src/Contract/`. In practice you rarely
implement them directly, because the event path (above) is declarative and is the
correct way for a `rewards`-group plugin to register. The interfaces matter when
you want the server to enforce extra guarantees, or when your code is already
booted and is not a plugin.

### TriggerInterface

A trigger is a normalized event type the editors can bind to. Its payload spec is
the single source of truth for both ingestion validation and the editor's
condition-field list, so an admin only ever builds conditions over fields the
trigger actually carries.

```php
interface TriggerInterface
{
    public function id(): string;            // e.g. 'commerce.order.completed'
    public function label(): string;         // 'Order is completed'
    public function group(): string;         // editor group, e.g. 'Commerce'
    public function source(): string;        // component element, e.g. 'com_easycommerce'
    public function description(): string;   // one-line admin description
    public function schemaVersion(): int;

    /**
     * field name => { type, label?, required?, enum? }
     * type is one of: string | id | int | number | bool | enum | datetime
     *
     * @return array<string, array{type:string, label?:string, required?:bool, enum?:string[]}>
     */
    public function payloadSpec(?int $version = null): array;
}
```

You almost never implement this directly. `Engine/Trigger/DefinedTrigger.php` is a
data-driven implementation, so declaring a trigger is one array, not a class (see
[Declaring triggers](#declaring-triggers)).

### EventSourceInterface

`EventSourceInterface` describes an event source and lets the server clamp the
trust it is allowed to claim via `trustCeiling()`. You do not need it to emit
events or to appear on the Adapters screen (the `onRewardifyCollectAdapters` event
does that). Implement it and call `Rewardify::registerEventSource()` only from
already-booted, non-plugin code that wants the server-side trust ceiling enforced.

```php
interface EventSourceInterface
{
    public function key(): string;          // e.g. 'plg_rewards_easycommerce'
    public function name(): string;
    public function vendor(): string;
    public function trustCeiling(): TrustLevel;
    public function eventTypes(): array;     // event types this source emits
    public function context(): array;        // site, admin, api, cli (informational)
}
```

### RewardProviderInterface

`RewardProviderInterface` is the fulfilment contract: it drives a catalogue
redemption through the reservation saga. As with the source side, a plugin
normally fulfils by answering the `onRewardifyRedemptionFulfil` event rather than
implementing this interface. Implement it and call `Rewardify::registerProvider()`
only from already-booted code. It is documented in full under
[The RewardProviderInterface contract](#the-rewardproviderinterface-contract).

---

## Describe your adapter (the Adapters screen)

So your adapter appears on the admin Adapters screen (and the rule/badge editors
know which source an event came from), answer `onRewardifyCollectAdapters` and
describe yourself. Rewardify dispatches this whenever it builds the Adapters
screen, so a freshly installed adapter that has never fired a single event still
shows up.

```php
use Rewardify\Component\Rewardify\Administrator\Event\CollectAdaptersEvent;

public function onRewardifyCollectAdapters(CollectAdaptersEvent $event): void
{
    // Only advertise when your host component is actually present.
    if (!ComponentHelper::isEnabled('com_mycomponent')) {
        return;
    }

    $event->define([
        'key'         => 'plg_rewards_mycomponent',     // your plugin element
        'name'        => 'My Component',
        'vendor'      => 'Acme',
        'description' => 'Reports item saves from com_mycomponent.',
        'group'       => 'content',                     // grouping on the screen
        'kind'        => 'content',
        'trust'       => 'server_verified',             // the trust your reports claim
        'context'     => ['site', 'admin'],             // where it runs (informational)
        'eventTypes'  => ['mycomponent.item.saved'],    // the events you emit
    ]);
}
```

Recognised descriptor keys: `key` (required), `name`, `vendor`, `version`,
`description`, `group`, `release`, `kind`, `trust`, `eventTypes[]`, `context[]`.

The `ComponentHelper::isEnabled(...)` guard is the pattern every bundled adapter
uses: a host adapter advertises itself only while its host is installed, so the
Adapters screen can flag a missing host instead of offering a dead integration.

---

## Reporting events (the source role)

```
host event (onContentAfterSave) --> your adapter --> Rewardify::submit(normalized event)
```

The source role:

1. Subscribes to the host's events (Joomla core events, or your own component's
   events).
2. Extracts the subject member, a stable object id, and the payload fields rules
   will want to test.
3. Submits a normalized event through the SDK, with the right trust level and a
   well-chosen idempotency key.

That is the whole job. The rule engine, ledger, badges, and levels take it from
there. For the SDK calls themselves, see [sdk.md](sdk.md); for what happens after
submission, see [concepts.md](concepts.md).

### The canonical example: plg_rewards_joomla

`plugins/plg_rewards_joomla/` is the reference source adapter. It reports three
Joomla-core facts: `user.login`, `user.registered`, and
`content.article.published`. It also answers `onRewardifyCollectAdapters` and
`onRewardifyCollectTriggers` so it appears on the Adapters screen and its events
are bindable in the editors. Read it end to end; it demonstrates every pattern
below.

The `Extension` class subscribes to Joomla events and funnels each through one
private `report()` helper:

```php
final class Joomla extends CMSPlugin implements SubscriberInterface
{
    protected $autoloadLanguage = true;

    private const SOURCE = 'plg_rewards_joomla';

    public static function getSubscribedEvents(): array
    {
        return [
            'onUserAfterLogin'           => 'onUserAfterLogin',
            'onUserAfterSave'            => 'onUserAfterSave',
            'onContentAfterSave'         => 'onContentAfterSave',
            'onRewardifyCollectAdapters' => 'onRewardifyCollectAdapters',
            'onRewardifyCollectTriggers' => 'onRewardifyCollectTriggers',
        ];
    }

    public function onContentAfterSave($event): void
    {
        try {
            if ((string) $this->arg($event, 'context', 0) !== 'com_content.article') {
                return;
            }

            $item  = $this->arg($event, 'item', 1);
            $id    = (int) ($item->id ?? 0);
            $state = (int) ($item->state ?? $item->published ?? 0);

            if ($id <= 0 || $state !== 1) {
                return; // only published articles
            }

            $authorId = (int) ($item->created_by ?? 0);

            $this->report(
                'content.article.published',
                $authorId > 0 ? $authorId : $id,       // subject
                'article',                             // object type
                (string) $id,                          // object id
                'com_content:article:' . $id . ':published', // idempotency key
                [                                      // payload (matches the trigger schema)
                    'article_id'  => $id,
                    'author_id'   => $authorId,
                    'category_id' => $item->catid ?? null,
                    'word_count'  => isset($item->introtext)
                        ? str_word_count(strip_tags((string) $item->introtext . ' ' . (string) ($item->fulltext ?? '')))
                        : 0,
                    'featured'    => (int) ($item->featured ?? 0),
                ],
                $authorId
            );
        } catch (\Throwable) {
            // An adapter must never break the host action.
        }
    }

    private function report(string $eventType, int $subjectUserId, string $objectType, string $objectId, string $idempotencyKey, array $payload, int $actorUserId = 0): void
    {
        if (!\class_exists(Rewardify::class) || !Rewardify::isReady()) {
            return;
        }

        Rewardify::submit([
            'event_type'       => $eventType,
            'schema_version'   => 1,
            'source_extension' => self::SOURCE,
            'subject_user_id'  => $subjectUserId,
            'actor_user_id'    => $actorUserId > 0 ? $actorUserId : null,
            'object_type'      => $objectType,
            'object_id'        => $objectId,
            'idempotency_key'  => $idempotencyKey,
            'trust_level'      => 'server_verified',
            'payload'          => $payload,
        ]);
    }
}
```

Notice the patterns: a context guard (only `com_content.article`), a state guard
(only published), a stable per-object idempotency key, a payload that matches the
trigger's declared fields, the whole handler wrapped in `try/catch`, and the
`isReady()` guard so the plugin is harmless when Rewardify is absent. The login
handler keys on the day (`...:login:42:2026-06-23`) so a "daily login" rule fires
once per day.

> The bundled commerce and learning adapters use the fluent builder instead of the
> array. `Rewardify::event('communityquiz.attempt.passed')->source(self::SOURCE)->trust('server_verified')->subject($userId)->object('attempt', $id)->idempotency('...')->payload([...])->submit();`
> is equivalent and a little easier to read. Both are covered in [sdk.md](sdk.md).

### Build a new source adapter

A minimal source adapter is four files. Replace `mycomponent` / `MyComponent`
throughout.

```
plugins/plg_rewards_mycomponent/
├── rewardify.xml
├── services/
│   └── provider.php
├── src/
│   └── Extension/
│       └── MyComponent.php
└── language/
    └── en-GB/
        └── plg_rewards_mycomponent.sys.ini
```

The plugin group must be `rewards`, and the namespace is
`Rewardify\Plugin\Rewards\<Name>`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<extension type="plugin" group="rewards" method="upgrade">
    <name>PLG_REWARDS_MYCOMPONENT</name>
    <author>Your Name</author>
    <creationDate>2026</creationDate>
    <version>1.0.0</version>
    <description>PLG_REWARDS_MYCOMPONENT_XML_DESCRIPTION</description>
    <namespace path="src">Rewardify\Plugin\Rewards\MyComponent</namespace>

    <files>
        <folder plugin="mycomponent">services</folder>
        <folder>src</folder>
        <folder>language</folder>
    </files>

    <languages>
        <language tag="en-GB">language/en-GB/plg_rewards_mycomponent.sys.ini</language>
    </languages>
</extension>
```

`services/provider.php` is the standard Joomla 4+ plugin bootstrap:

```php
<?php
defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Rewardify\Plugin\Rewards\MyComponent\Extension\MyComponent;

return new class implements ServiceProviderInterface {
    public function register(Container $container): void
    {
        $container->set(PluginInterface::class, function (Container $container) {
            $plugin = new MyComponent(
                $container->get(DispatcherInterface::class),
                (array) PluginHelper::getPlugin('rewards', 'mycomponent')
            );
            $plugin->setApplication(Factory::getApplication());

            return $plugin;
        });
    }
};
```

The `Extension` class subscribes to host events and the two collect events, then
funnels each report through one guarded helper (the same `report()` shape as the
canonical adapter above). Install it, enable it under Extensions > Plugins (the
`rewards` group), and it starts reporting. Once a rule or badge binds to
`mycomponent.item.saved`, the events start awarding.

### Declaring triggers

For your events to be selectable in the rule and badge editors (with a proper
condition builder over their fields), the event types must be **declared
triggers**.

This is the heart of the decoupling: Rewardify does **not** know what your
component does. Your adapter is the authority on the events your component emits,
so your adapter declares them. Rewardify assembles the full catalogue from every
installed adapter at runtime.

You declare triggers by answering `onRewardifyCollectTriggers`. Rewardify
dispatches it to the `rewards` plugin group whenever it builds the catalogue (when
an admin opens the rule or badge editor). Subscribe to it in the same
`getSubscribedEvents()` your reporting handlers use, and declare each trigger with
`define()`:

```php
use Rewardify\Component\Rewardify\Administrator\Event\CollectTriggersEvent;

public function onRewardifyCollectTriggers(CollectTriggersEvent $event): void
{
    $event->define([
        'id'          => 'mycomponent.item.saved',
        'label'       => 'Item is saved',
        'group'       => 'My Component',
        'source'      => 'com_mycomponent',
        'description' => 'Fires when a member saves an item.',
        'fields'      => [
            'item_id' => ['type' => 'id', 'label' => 'Item ID'],
            'status'  => ['type' => 'enum', 'label' => 'Status', 'enum' => ['draft', 'published']],
        ],
    ]);
}
```

A trigger is pure data. The `fields` spec powers the editor's condition builder:
each field has a `type` (`string | id | int | number | bool | enum | datetime`),
an optional `label`, and for `enum` an `enum` list.

The `fields` you declare must line up with the `payload` your adapter sends. A
rule or badge can only test a field that is **both** declared here and carried in
the event.

**Why an event and not `registerTrigger()`?** The `rewards` plugin group is only
booted when its host events fire, so a plugin that merely called
`Rewardify::registerTrigger()` at its own boot would not have run by the time the
editor asks for the list, so its triggers would silently be missing. Dispatching
`onRewardifyCollectTriggers` forces the adapters to load exactly when their
declarations are needed. The same reasoning applies to
`onRewardifyCollectAdapters` and `onRewardifyCollectProviders`:
**the event is the correct path for a plugin**, and the matching `register*` SDK
method exists only for advanced code that is already booted.

---

## Fulfilling redemptions (the provider role)

A **fulfilment provider** delivers a real reward when a member spends currency on
a catalogue item. The admin builds a catalogue item, picks your provider, and
configures it (which coupon, which product, which course). When a member redeems
it, Rewardify runs a reservation saga and hands your adapter the work to do.

You never touch the ledger. Rewardify holds and releases the member's points for
you. Your provider only does the external thing: create the coupon, place the
order, grant the entitlement, and report back a code or reference.

### The redemption saga

A redemption is a small state machine (`Domain/Enum/RedemptionState.php`).
`RedemptionService` drives it, and the ledger holds the member's points the whole
time, so points are never lost if fulfilment fails.

```
Reserved  --> Issued --> Confirmed --> (Shipped)
   |            |
   v            v
Released     Released / Revoked
```

| State | Meaning |
|-------|---------|
| `reserved` | Points are held by a ledger `reserve` transaction. The redemption is open. |
| `issued` | Your provider issued the reward (a coupon code, a granted product). |
| `confirmed` | Finalised. The `reserve` hold is converted to a `deduct`, so the spend lands. |
| `shipped` | A physical reward was dispatched (carrier + tracking), after confirm. |
| `released` | Failed or cancelled before confirm. The hold is returned, points come back. |
| `revoked` | An already-issued reward was taken back; your provider unwinds it. |

The contract you fulfil against is one Joomla event per saga step, `op` being one
of `validate`, `issue`, `confirm`, `release`, `revoke`. The key safety rule:
**throwing from your handler signals failure**, and Rewardify releases the hold so
the member's points return. So if you cannot issue the reward, throw.

### Declare a provider

Answer `onRewardifyCollectProviders` so your provider appears in the catalogue
item editor with its own configuration fields. As with adapters, advertise it only
while your host is present.

```php
use Rewardify\Component\Rewardify\Administrator\Event\CollectProvidersEvent;

public function onRewardifyCollectProviders(CollectProvidersEvent $event): void
{
    if (!ComponentHelper::isEnabled('com_easycommerce')) {
        return;
    }

    $event->define([
        'key'         => 'easycommerce_coupon',          // provider key the item stores
        'plugin'      => 'plg_rewards_easycommerce',      // owning plugin
        'name'        => 'EasyCommerce coupon',
        'vendor'      => 'Shondalai',
        'description' => 'Issues a single-use EasyCommerce coupon on redemption.',
        'kinds'       => ['coupon'],                      // catalogue item kinds it serves
        'ops'         => ['issue', 'revoke'],             // saga ops it supports
        'instant'     => true,                            // completes immediately (no admin step)
        'config'      => [                                // per-item fields the admin fills
            ['key' => 'discount_type', 'label' => 'Discount type', 'type' => 'enum',
             'enum' => ['percent', 'fixed_cart', 'fixed_product']],
            ['key' => 'amount',       'label' => 'Amount',      'type' => 'number'],
            ['key' => 'expiry_days',  'label' => 'Expiry days', 'type' => 'int', 'placeholder' => '30'],
            ['key' => 'prefix',       'label' => 'Code prefix', 'type' => 'string', 'placeholder' => 'RW'],
        ],
    ]);
}
```

Recognised descriptor keys: `key` (required), `plugin`, `name`, `vendor`,
`description`, `kinds[]`, `ops[]`, `instant` (bool), and `config[]`. Each `config`
field is a `{key, label, type, enum?, placeholder?, help?}` descriptor; `type` is
one of `string | int | number | bool | enum | remote`.

`instant` tells the editor whether redemption finishes on the spot (a coupon) or
needs a later admin action such as shipping (a physical product the EasyCommerce
product provider declares with `'instant' => false`).

### Searchable config fields

A `remote`-typed config field renders as a searchable picker. The admin does not
type a raw id; they search your data and pick. Rewardify asks your provider for the
matching options through `onRewardifyProviderOptions` as the admin types.

```php
use Rewardify\Component\Rewardify\Administrator\Event\ProviderOptionsEvent;

public function onRewardifyProviderOptions(ProviderOptionsEvent $event): void
{
    // Answer only for your provider + field.
    if ($event->getProvider() !== 'easycommerce_product' || $event->getField() !== 'product_id') {
        return;
    }

    $options = [];
    foreach ($this->searchProducts($event->getQuery()) as $row) {
        $options[] = ['value' => (string) $row->id, 'label' => $row->title . ' (#' . $row->id . ')'];
    }

    $event->addOptions($options); // each: ['value' => string, 'label' => string]
}
```

`value` is what gets stored in the catalogue item's config; `label` is what the
picker shows. The Community Quiz provider uses this to let an admin pick any
published course, quiz, or exam, storing `"<kind>:<id>"` so fulfilment grants the
exact entitlement kind the player checks.

### Do the fulfilment work

Answer `onRewardifyRedemptionFulfil`. It fires once per saga step. Match your
provider key and the `op`, do the work, and report a result. The context carries
everything you need.

```php
use Rewardify\Component\Rewardify\Administrator\Event\RedemptionFulfilEvent;

public function onRewardifyRedemptionFulfil(RedemptionFulfilEvent $event): void
{
    if ($event->getProvider() !== 'easycommerce_coupon') {
        return;
    }

    if (!ComponentHelper::isEnabled('com_easycommerce')) {
        // Cannot fulfil -> throw -> Rewardify releases the hold, points return.
        throw new \RuntimeException('EasyCommerce is unavailable.');
    }

    $ctx = $event->getContext();   // redemptionId, userId, item{...}, config{...}, code, ref

    switch ($event->getOp()) {
        case 'issue':
            $code = $this->createCoupon($ctx);
            $event->setResult(['code' => $code, 'ref' => 'coupon:' . $code]);
            break;

        case 'revoke':
        case 'release':
            $this->disableCoupon($ctx);   // best-effort unwind
            break;
    }
}
```

The context array passed to each op:

| Key | What it holds |
|-----|---------------|
| `redemptionId` | The redemption's id (use it to build a stable provider reference). |
| `userId` | The redeeming member. |
| `item` | The catalogue item (name, kind, currency, cost). |
| `config` | The admin's per-item provider config (your declared `config` fields). |
| `code` / `ref` | On the unwind ops, whatever you returned from `issue`. |

`setResult()` reports output back to the saga; it merges, so multiple calls
accumulate. Recognised result keys are `code` (shown to the member, e.g. a coupon
code), `ref` (a provider reference you persist for the unwind), and `note` (an
admin-facing note). Whatever you put in `ref` comes back to you in the context on
`revoke` / `release`, which is how you address the same external object to undo it.

### The RewardProviderInterface contract

The event path above is what the bundled adapters use and what you should use from
a plugin. For already-booted, non-plugin code, there is an equivalent interface,
`Contract/RewardProviderInterface.php`, registered with
`Rewardify::registerProvider()`:

```php
interface RewardProviderInterface
{
    public function key(): string;
    public function name(): string;

    /** Supported ops: validate, reserve, issue, confirm, release, revoke, status. */
    public function operations(): array;

    public function validate(array $context): bool;
    public function reserve(array $context): array;   // returns provider refs to persist
    public function issue(array $context): array;
    public function confirm(array $context): array;
    public function release(array $context): array;
    public function revoke(array $context): array;
}
```

It models the same saga: declare the ops you support, and each method takes and
returns a context array. Throwing signals failure and triggers `release`. Unless
you have a specific reason to register a provider object at boot, prefer the event.

### Reference examples

Two bundled adapters are each a source **and** a fulfilment provider. Read them
end to end:

- **`easycommerce/plugins/plg_rewards_easycommerce`** declares two providers:
  `easycommerce_coupon` (issues a single-use coupon, `instant`) and
  `easycommerce_product` (grants a product as a zero-cost completed order, not
  `instant`). It also reports `commerce.order.completed` as a source.
- **`communityquiz/plugins/plg_rewards_communityquiz`** declares one provider,
  `communityquiz_access`, that grants a course, quiz, or exam entitlement through
  Community Quiz's `CommerceService::grantAccess()` (and `revokeAccess()` on the
  unwind). It also reports the quiz lifecycle (`communityquiz.attempt.passed`, and
  more) as a source.

Both resolve their host's services lazily after `bootComponent(...)`, advertise
only while the host is enabled, and throw on a fulfilment failure so the points
hold is released.

---

## Trust, idempotency, and safety

These decisions make an adapter correct. The full model is in
[concepts.md](concepts.md).

**Trust.** Server-side code that observes a real host event should report
`server_verified`. Use a lower level only when the fact is asserted by a less
trusted source (a client call, an unauthenticated webhook). A rule can require a
minimum trust, holding lower-trust events for moderation. If you implement
`EventSourceInterface`, your `trustCeiling()` caps what your events can claim.

**Idempotency.** The idempotency key is your control over both deduplication and
how often a rule fires:

- Per object, once ever: `com_mycomponent:item:99:saved`.
- Once per day (e.g. a daily login): include `gmdate('Y-m-d')`.
- Once per occurrence that can legitimately recur: include a timestamp or unique id.

Pick the granularity deliberately. Too coarse and you under-reward; too fine and a
"once" rule fires every time.

**Safety.** An adapter must never break the host. Wrap each reporting handler in
`try { ... } catch (\Throwable) {}`, and guard every SDK call with
`class_exists(Rewardify::class) && Rewardify::isReady()` so the plugin is inert
when Rewardify is not installed. In a **fulfilment** handler the rule is the
opposite for the failure path: do **not** swallow a fulfilment failure, throw it,
so Rewardify releases the member's points. Swallowing it would confirm a spend for
a reward you never delivered.

---

## Checklist

Source role:

- [ ] Plugin is in the `rewards` group, namespace `Rewardify\Plugin\Rewards\<Name>`.
- [ ] `services/provider.php` boots the plugin via `PluginInterface`.
- [ ] The `Extension` class implements `SubscriberInterface` and subscribes to host events.
- [ ] Each handler validates the subject (`> 0`) and a stable object id before reporting.
- [ ] Every report goes through one helper that guards `isReady()` and is wrapped in `try/catch`.
- [ ] Trust level is correct for the source (`server_verified` for server-side facts).
- [ ] Idempotency key granularity matches the intended reward frequency.
- [ ] Payload fields match the trigger's declared schema.
- [ ] The adapter answers `onRewardifyCollectAdapters` (so it shows on the Adapters
      screen) and `onRewardifyCollectTriggers` (so its events are selectable).

Fulfilment role:

- [ ] The provider is declared via `onRewardifyCollectProviders`, advertised only
      while the host is enabled.
- [ ] Each `config` field has the right `type`; searchable fields use `remote` and
      are backed by `onRewardifyProviderOptions`.
- [ ] `onRewardifyRedemptionFulfil` matches the provider key and handles each `op`
      it declared in `ops`.
- [ ] A `ref` returned from `issue` is enough to unwind the reward on `revoke` /
      `release`.
- [ ] A fulfilment failure **throws** (it does not swallow the error), so the
      points hold is released.

See also: [SDK integration](sdk.md) for the call surface, and
[Concepts](concepts.md) for how a reported event becomes a reward.
