---
title: Connect an organization directory or single sign-on
description: Understand domain verification, directory-managed membership, and the responsibilities of your sign-in provider.
---

Your CMS remains responsible for signing people in. VidyaLMS can use installed identity and directory integrations to connect those people with the right organization and learning context.

These are optional organization services. Their setup normally involves your website administrator and the person who manages your company's identity provider.

## Single sign-on

For SAML or OpenID Connect, configure the supported sign-in connector on Joomla or WordPress first. VidyaLMS's identity mapping does not replace that connector or act as a complete sign-in server.

Agree on the information the identity provider will supply, such as a stable user identifier and organization or group membership. Configure the available mapping to the intended organization and roles. Prefer the smallest useful set of permissions.

Test with a separate employee account. Confirm sign-in, organization membership, allowed courses, and what happens when the upstream account or group membership changes. Successful sign-in alone does not mean course access is correctly assigned.

## Verify an organization's domain

Where domain claims are supported, enter the organization's domain and follow the displayed verification instructions. A domain administrator normally adds the supplied TXT record to DNS.

Use the verification action again after the record becomes available. **Pending** is not the same as verified. Verification also needs the supporting domain-verification service to be installed and configured.

Owning a domain is not a reason to grant its users site-wide administrator rights. Review the membership and access rules independently.

## Directory and roster connections

Business integrations can support SCIM, OneRoster services, and learning-platform roster connections such as LTI NRPS. Only configure the connection that your upstream service and installed package actually support.

Have your administrator establish the connection credentials, permitted scope, identity matching rules, and synchronization schedule. Import a small test group before bringing in an entire directory.

If a membership is marked as directory-managed, change it in the upstream directory. A local edit may be refused or replaced by the next synchronization.

## Check the outcome

Review created accounts, organization membership, assigned roles, and rejected rows or synchronization errors. Pay particular attention to people who leave the organization: their organization access should end without deleting personal learning history or unrelated purchases.

For a one-off spreadsheet rather than a continuous directory connection, use the appropriate [roster import](../maintenance/import-export.md). For permission design, see [users and permissions](../configuration/users-permissions.md).
