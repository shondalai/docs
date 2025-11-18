# EasyForms Documentation Portal

This is the user documentation portal for EasyForms, built with [Docusaurus](https://docusaurus.io/).

## 📦 What's Included

Complete end-user documentation for EasyForms covering:
- Form building and design
- AI-powered features
- Analytics and reporting
- Integrations with third-party services
- And much more

## 🚀 Quick Start

### Prerequisites

- Node.js version 20.0 or above

### Installation

```bash
cd docs-portal
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build for Production

```bash
npm run build
```

This command generates static content into the `build` directory, which can be served using any static hosting service.

## 📝 Syncing Documentation

Documentation is sourced from the EasyForms extension folder. To sync the latest docs:

```powershell
.\scripts\sync-docs.ps1
```

This script copies `easyforms/docs/end-user/*.md` → `docs/extensions/easyforms/`

Run this script whenever you update documentation in the EasyForms repository.

## 🗂️ Project Structure

```
docs-portal/
├── docs/
│   ├── intro.md              # Landing page
│   └── extensions/
│       └── easyforms/        # EasyForms user documentation
│           ├── overview.md
│           ├── form-builder.md
│           ├── ai-form-builder.md
│           └── ... (all user guides)
├── src/
│   ├── components/           # React components
│   └── pages/               # Custom pages
├── static/                  # Static assets
├── scripts/
│   └── sync-docs.ps1        # Sync script
├── docusaurus.config.ts     # Site configuration
└── sidebars.ts              # Sidebar navigation
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

   Or connect your Git repository to Netlify for automatic deployments.

### Option 2: Custom Server

1. Build the site (as above)
2. Copy the `build/` folder to your web server
3. Configure your web server to serve static files

See `DEPLOYMENT.md` for complete deployment instructions.

## 📚 Adding New Documentation

1. Add or update `.md` files in `easyforms/docs/end-user/`
2. Run the sync script: `.\scripts\sync-docs.ps1`
3. Rebuild: `npm run build`
4. Deploy

## 🔧 Configuration

### Site Metadata

Edit `docusaurus.config.ts`:
- `title` - Site title
- `tagline` - Site description
- `url` - Production URL
- `baseUrl` - Base path (use `/` for root domain, `/docs/` for subdirectory)

### Navigation

Edit `sidebars.ts` to configure sidebar navigation.

### Homepage

Edit `src/pages/index.tsx` and `src/components/HomepageFeatures/index.tsx` to customize the landing page.

## 📄 License

See the EasyForms LICENSE file.
