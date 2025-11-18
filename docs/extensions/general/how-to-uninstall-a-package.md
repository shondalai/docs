---
id: how-to-uninstall-a-package
title: How to uninstall a package
sidebar_label: How to uninstall a package
sidebar_position: 5
---

#### Precautions:

- Never uninstall individual extensions of a package separately. i.e. components/modules/plugins should never be uninstalled separately.
- To clean uninstall complete extension including component, modules and plugin; the package should be uninstalled.
- Do not uninstall CjLib package before uninstalling other corejoomla extensions.
- Database tables will never be deleted by the uninstall. You need to delete them manually using your SQL client such as phpMyAdmin etc.

#### Steps to uninstall the extension:

- Go to Extensions -> Manage
- Filter package extension type
- Uninstall the required package
To make sure no other module/plugin remains
- Go to Extensions -> Plugins and search for survey and uninstall any such leftover plugins
- Go to Extensions -> Modules and search for survey and uninstall any such leftover modules

- Uninstall CjLib package