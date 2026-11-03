<?php

defined('_JEXEC') or die;

use Acme\Plugin\EasyCommerce\AcmeCatalog\Extension\AcmeCatalog;
use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use Psr\Log\NullLogger;

return new class implements ServiceProviderInterface {
    /** Register the plugin without doing any external work. */
    public function register(Container $container): void
    {
        $container->set(PluginInterface::class, static function (Container $container): PluginInterface {
            $plugin = new AcmeCatalog(
                $container->get(DispatcherInterface::class),
                (array) PluginHelper::getPlugin('easycommerce', 'acmecatalog')
            );
            $plugin->setApplication(Factory::getApplication());

            $services = Factory::getContainer();
            $plugin->setLogger($services->has('easycommerce.logger')
                ? $services->get('easycommerce.logger')
                : new NullLogger());

            return $plugin;
        });
    }
};
