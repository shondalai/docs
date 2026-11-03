<?php

namespace Acme\Plugin\EasyCommerce\AcmeCatalog\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\EasyCommerce\Administrator\Event\Product\AfterProductSaveEvent;
use Joomla\Event\SubscriberInterface;
use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;

/** A minimal, read-only example of an EasyCommerce business-event listener. */
final class AcmeCatalog extends CMSPlugin implements SubscriberInterface, LoggerAwareInterface
{
    use LoggerAwareTrait;

    /** Map the exact event name to this plugin's handler. */
    public static function getSubscribedEvents(): array
    {
        return ['onEasyCommerceAfterProductSave' => 'afterProductSave'];
    }

    /** Record a product ID without logging its content or customer data. */
    public function afterProductSave(AfterProductSaveEvent $event): void
    {
        $this->logger?->info('Acme Catalog received product save', [
            'plugin' => 'acmecatalog',
            'product_id' => $event->getProductId(),
            'is_new' => $event->isNew(),
        ]);
    }
}
