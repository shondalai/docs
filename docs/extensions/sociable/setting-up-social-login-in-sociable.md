---
id: setting-up-social-login-in-sociable
title: Setting Up Social Login
sidebar_label: Social Login
sidebar_position: 8
---

## Overview

Sociable provides built-in OAuth authentication for Google, Facebook, and Apple. Users can log in with their social accounts without creating separate passwords.

## Supported Providers

| Provider | Status | Notes |
|----------|--------|-------|
| Google | Supported | OAuth 2.0 |
| Facebook | Supported | OAuth 2.0 |
| Apple | Supported | Sign in with Apple |

## Authentication Settings

Configure social login in **Components → Sociable → Settings → Auth**:

| Setting | Description | Default |
|---------|-------------|---------|
| Override Joomla Login | Use Sociable login page instead of Joomla | Yes |
| Override Joomla Register | Use Sociable registration instead of Joomla | Yes |
| Login Redirect URL | Where to redirect after login | / |
| Register Redirect URL | Where to redirect new users | /welcome |

### Google OAuth Settings

| Setting | Description |
|---------|-------------|
| Enable Google Login | Turn on Google sign-in |
| Google Client ID | OAuth client ID from Google Console |
| Google Client Secret | OAuth client secret from Google Console |

### Facebook OAuth Settings

| Setting | Description |
|---------|-------------|
| Enable Facebook Login | Turn on Facebook sign-in |
| Facebook Client ID | App ID from Facebook Developer Console |
| Facebook Client Secret | App secret from Facebook Developer Console |

### Apple OAuth Settings

| Setting | Description |
|---------|-------------|
| Enable Apple Login | Turn on Sign in with Apple |
| Apple Client ID | Services ID from Apple Developer |
| Apple Team ID | Your Apple Developer team ID |
| Apple Key ID | Key ID for your private key |
| Apple Client Secret | Generated from your private key |

## Setting Up Google Login

### Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services → Credentials**
4. Click **Create Credentials → OAuth client ID**
5. Select **Web application**
6. Add authorized redirect URI:
   ```
   https://yourdomain.com/index.php?option=com_sociable&task=auth.oauthCallback&provider=google
   ```
7. Save and note the **Client ID** and **Client Secret**

### Step 2: Configure OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**
2. Select **External** user type
3. Fill in app information:
   - App name
   - User support email
   - Developer contact
4. Add scopes:
   - `email`
   - `profile`
   - `openid`
5. Add test users if in development

### Step 3: Configure in Sociable

1. Go to **Components → Sociable → Settings → Auth**
2. Enable **Google Login**
3. Enter **Google Client ID**
4. Enter **Google Client Secret**
5. Save

---

## Setting Up Facebook Login

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps → Create App**
3. Select **Consumer** or **Business** type
4. Enter app name and contact email
5. Create the app

### Step 2: Configure Facebook Login

1. In app dashboard, click **Add Product**
2. Select **Facebook Login → Set Up**
3. Choose **Web**
4. Enter your site URL
5. Go to **Facebook Login → Settings**
6. Add Valid OAuth Redirect URIs:
   ```
   https://yourdomain.com/index.php?option=com_sociable&task=auth.oauthCallback&provider=facebook
   ```
7. Save

### Step 3: Get App Credentials

1. Go to **Settings → Basic**
2. Note the **App ID** (Client ID)
3. Click **Show** to reveal **App Secret** (Client Secret)

### Step 4: Configure in Sociable

1. Go to **Components → Sociable → Settings → Auth**
2. Enable **Facebook Login**
3. Enter **Facebook Client ID** (App ID)
4. Enter **Facebook Client Secret** (App Secret)
5. Save

### Step 5: App Review (Production)

For production use:
1. Switch app to **Live** mode
2. Complete App Review if required
3. Verify business if needed

---

## Setting Up Apple Login

### Step 1: Configure App ID

1. Go to [Apple Developer Portal](https://developer.apple.com/)
2. Navigate to **Certificates, Identifiers & Profiles**
3. Go to **Identifiers → App IDs**
4. Create or edit your app ID
5. Enable **Sign in with Apple** capability
6. Configure as primary or grouped

### Step 2: Create Services ID

1. Go to **Identifiers → Services IDs**
2. Click **+** to register new
3. Enter description and identifier (this is your **Client ID**)
4. Enable **Sign in with Apple**
5. Configure domains and return URLs:
   - **Domain**: `yourdomain.com`
   - **Return URL**: 
     ```
     https://yourdomain.com/index.php?option=com_sociable&task=auth.oauthCallback&provider=apple
     ```
6. Save

### Step 3: Create Private Key

1. Go to **Keys**
2. Click **+** to create new key
3. Enter key name
4. Enable **Sign in with Apple**
5. Configure which App ID to associate
6. Register and **download the key file** (.p8)
7. Note the **Key ID**

### Step 4: Generate Client Secret

Apple uses JWT for client secret. Generate using a script:

```php
// Generate Apple Client Secret
$teamId = 'YOUR_TEAM_ID';
$clientId = 'YOUR_SERVICES_ID';
$keyId = 'YOUR_KEY_ID';
$privateKey = file_get_contents('path/to/AuthKey_XXXX.p8');

$header = base64_encode(json_encode([
    'alg' => 'ES256',
    'kid' => $keyId
]));

$claims = base64_encode(json_encode([
    'iss' => $teamId,
    'iat' => time(),
    'exp' => time() + (86400 * 180), // 6 months
    'aud' => 'https://appleid.apple.com',
    'sub' => $clientId
]));

// Sign with ES256 using your private key
// Use a JWT library for production
```

### Step 5: Configure in Sociable

1. Go to **Components → Sociable → Settings → Auth**
2. Enable **Apple Login**
3. Enter **Apple Client ID** (Services ID)
4. Enter **Apple Team ID**
5. Enter **Apple Key ID**
6. Enter **Apple Client Secret** (generated JWT)
7. Save

---

## Enable Authentication Plugin

After configuring providers, enable the authentication plugin:

1. Go to **System → Manage → Plugins**
2. Search for "Authentication - Sociable"
3. Enable the plugin

---

## How It Works

### OAuth Flow

1. User clicks social login button
2. Redirected to provider authorization page
3. User grants permission
4. Redirected back to callback URL with auth code
5. Server exchanges code for access token
6. Server fetches user profile
7. User logged in or account created

### User Matching

When a user authenticates:

1. **Email Match**: If email exists, link accounts
2. **New User**: If no match, create new Joomla user
3. **Linked Account**: Store OAuth credentials for future logins

### Data Retrieved

| Field | Google | Facebook | Apple |
|-------|--------|----------|-------|
| Email | ✓ | ✓ | ✓* |
| Name | ✓ | ✓ | ✓* |
| Avatar | ✓ | ✓ | - |
| Provider ID | ✓ | ✓ | ✓ |

*Apple may hide email on subsequent logins

---

## Managing Linked Accounts

### User View

Users can manage linked accounts in their profile:

1. Go to Profile → Settings
2. View connected social accounts
3. Link additional accounts
4. Unlink accounts (if password is set)

### Admin View

Administrators can view OAuth links:

1. Go to **Components → Sociable → Users**
2. Select a user
3. View **Connected Accounts** section

---

## Redirect Configuration

### Login Redirect

After successful login:
- Uses `loginRedirectUrl` setting
- Or returns to the page user came from
- Default: `/`

### Registration Redirect

After new user registration via OAuth:
- Uses `registerRedirectUrl` setting
- Good for onboarding/welcome pages
- Default: `/welcome`

---

## Troubleshooting

### "Invalid redirect URI"

- Verify redirect URI matches exactly in provider console
- Check for trailing slashes
- Ensure HTTPS is used in production

### "OAuth provider not enabled"

- Check provider is enabled in Sociable settings
- Verify Client ID and Secret are set
- Enable Authentication plugin

### Apple Login Issues

- Client secret expires (regenerate every 6 months)
- Ensure Services ID is configured correctly
- Return URL must use HTTPS

### User Email Not Received

- Facebook: Request `email` permission in App Review
- Apple: Email may be hidden on subsequent logins
- Google: Ensure email scope is included

---

## Security Considerations

- Always use HTTPS in production
- Keep Client Secrets secure
- Regenerate Apple client secret periodically
- Review app permissions regularly
- Monitor for suspicious OAuth activity

---

## Next Steps

- [Modules and Plugins](sociable-modules-and-plugins) - Enable required plugins
- [User Profiles](configuring-multiple-profiles-in-sociable) - Configure profile creation
- [Getting Started](getting-started-guide-for-sociable) - Complete setup guide
