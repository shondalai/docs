# Maintaining the VidyaLMS user guides

The portal is the source of truth for these end-user guides. Edit `docs/extensions/vidyalms/`, then update `sidebars-vidyalms.ts` when adding a page. VidyaLMS is registered in `docusaurus.config.ts` as a separate docs plugin at `/vidyalms`, including local search, navbar, footer, and root redirect. The homepage product directory is in `src/components/HomepageFeatures/index.tsx`.

## Content scope

The initial set contains 47 guides and about 24,000 words. The public [feature reference](docs/extensions/vidyalms/help/feature-reference.md) maps the user-facing areas to their guides. The overview offers task-based entry points, and the learner guide can be shared directly with students.

| Documentation area | Implementation to review in the adjacent `vidyalms` repository |
| --- | --- |
| Installation, permissions, routes, blocks, shortcodes, and translations | `packages/adapter-joomla`, `packages/adapter-wordpress`, and `packages/core/src/I18n` |
| Settings and learner branding | `packages/ui/src/admin/settings`, host frontend renderers, and core configuration services |
| Course authoring, progression, quiz/assignment behaviour, and grading | `packages/ui/src`, core application/domain services, and Pro assessment providers |
| Practical assignment history and active time | `docs/design/practical-training-workflow.md`, assignment services, player heartbeat, and training-evidence reports |
| Organizations, units, roles, seats, and identity | `packages/ui/src/admin/organisations`, Pro organization UI, and core/Pro organization services |
| Shop integration and access lifecycle | `docs/technical/14-commerce-and-reporting.md`, Joomla EasyCommerce connection, and WordPress WooCommerce connection |
| Channels, message rules, templates, and automations | Current admin UI strings/screens and notification/automation services |
| Certificates, credits, signed credentials, reports, and AI | Core and Pro provider registrations, active UI, and relevant handlers |
| Imports, background work, privacy, community, and mobile | Host adapters, importer providers, task plugin, privacy integration, and `apps/mobile` |

Use code and current UI as the authority when older design documents disagree. In particular, do not copy an entire product-edition matrix into the user docs without checking registration and usable configuration.

## Decisions the guides must preserve

- EasyCommerce and WooCommerce own prices, payment gateways, orders, tax, invoices, subscriptions, and financial refunds. VidyaLMS grants and maintains learning access.
- Joomla product mappings belong in **VidyaLMS Settings → Shop integrations**. Its event plugin is enabled to handle events, not to host the mapping editor.
- WordPress mappings currently live on WooCommerce products and variations. Do not invent parity with the Joomla mapping editor.
- Explain access grants separately from enrolments, organization membership, and historical learning evidence.
- French translation support is not a bundled, reviewed French translation. Assignment file metadata exports are not photo archives. Browser activity time is not verified attendance.
- Do not advertise bundled SCORM/cmi5, live-meeting, protected-streaming, peer-review, or plagiarism connectors just because older plans mention them. Confirm the implementation and user setup before documenting them as available.
- The mobile project needs separate distribution and CMS-supported authentication; it is not published automatically by installing the extension.

## Writing and validation

Write for academy administrators, teachers, organization managers, and learners. Lead with the task, name real controls, explain the expected result, and link to troubleshooting. Explain unavoidable terms before using them. Keep credentials, tenant-specific URLs, private screenshots, and demo identities out of public examples.

Use relative `.md` links within the VidyaLMS tree. Add a title and description to each page. Verify that every page is in the sidebar and that every sidebar ID exists. Docusaurus can shorten a route when a document has the same name as its containing folder; use generated permalink metadata when checking built URLs.

Wrap reference tables in the portal's existing `table-wrapper` container, keeping its keyboard focus and accessible region label. This allows long shortcode and configuration tables to scroll within the article at phone widths rather than widening the whole page.

Run `npm run typecheck` and `npm run build` from the portal. Inspect warnings: existing portal settings do not fail the build for every broken link, so explicitly check links and anchors originating from the new or changed guides. Preview the production build using `npm run serve`, including search and narrow-screen navigation.

The initial validation checked all 47 pages, 179 relative source links, and 544 rendered article/pagination links and anchors. The production build reported unrelated pre-existing warnings in Community Surveys, Sociable, and CjForum documentation. These guides do not change those areas.

Publishing is a separate deployment step. Do not edit the generated `build/` output or use the EasyForms sync script to replace the VidyaLMS user guides.
