---
id: integrating-survey-with-google-sheets
title: Google Sheets Integration
sidebar_label: Google Sheets
sidebar_position: 83
---

# Google Sheets Integration

Append every survey response as a row in a Google Sheets worksheet. Two-stage setup:

1. **One-time per Joomla install** — register an OAuth client with Google Cloud (5-minute wizard).
2. **Every integration after that** — one-click "Connect Google" → pick the sheet → save.

For framework concepts (events, retries, logs), see [Integrations Overview](./integrations-overview.md).

---

## Why OAuth (not service-account JSON)

Earlier versions of this integration used a Google Cloud service-account JSON key. We moved to OAuth in v8 because:

- **One-time setup** vs per-integration JSON paste.
- **Personal Google accounts** work — service accounts can't write to a personal Drive without explicit sharing.
- **Per-integration reconnect** — update the Google connection from the integration you want to fix.
- **Audit trail in Google's account.google.com** — users see which apps have access.

The trade-off is the **one-time GCP setup**. After that, every integration is one click.

---

## One-time setup

Open **Settings → Integrations → Google** in the admin.

You'll see a 5-step walkthrough with deep-links into Google Cloud Console.

### Step 1 — Create a Google Cloud project

Click the **Open Google Cloud Console** link.

- Project name — anything (e.g. "Community Surveys").
- Billing — not required for the free tier of Sheets + Drive APIs.

### Step 2 — Enable the Sheets + Drive APIs

The setup panel has direct links to each API page. For each:

1. Click the link.
2. **Enable**.
3. Wait for the green checkmark.

You need both:

- **Google Sheets API** — for reading + writing sheets.
- **Google Drive API** — for listing the user's sheets in the picker.

### Step 3 — Configure the OAuth consent screen

- User type — **External** (works for personal Google accounts) or **Internal** (workspaces only, requires Google Workspace).
- App name — e.g. "Community Surveys on `<your-site.com>`".
- User support email + developer contact — your email.
- Scopes — Google will ask which scopes the app needs. **The Community Surveys admin asks for**:
  - `auth/spreadsheets` (read + write Sheets)
  - `auth/drive.readonly` (list user's sheets)
  - `auth/userinfo.email` (display the connected account in the admin)
- Test users — for an **External** app in **Testing**, add the Google account you’ll use to connect.

**Use External + Testing for short trials only.** With the Sheets and Drive scopes listed above, [Google expires the refresh token after seven days](https://developers.google.com/identity/protocols/oauth2#expiration). The integration can work at first and stop syncing a week later, even on a self-hosted site.

For ongoing sync, use **Internal** if every account that needs to connect belongs to your Google Workspace organization. Otherwise, use **External → In production** and follow any [Google verification requirements](https://developers.google.com/identity/protocols/oauth2/production-readiness/overview) that apply to your app. If you connected while the app was in Testing, reconnect in Community Surveys after changing the status.

### Step 4 — Create OAuth credentials

The setup panel deep-links to the Credentials page.

1. **Create credentials** → OAuth client ID.
2. Application type — **Web application**.
3. Name — anything (e.g. "Community Surveys credentials").
4. **Authorised redirect URIs** — paste the URL shown in the setup panel. This is the URL Google will redirect users back to after they grant access. Copy it from the panel's "Redirect URI" field; it looks like:

   ```
   https://your-site.com/administrator/index.php?option=com_communitysurveys&task=api.googleOauthCallback
   ```

5. **Create**. Google shows your Client ID + Client Secret.

### Step 5 — Paste credentials into Community Surveys

Back in the setup panel:

- **Client ID** — paste from Google.
- **Client Secret** — paste from Google.

Click **Save changes** at the top of the Settings page. The setup panel's status badge flips from "Not configured" to **Configured**.

You're done with the one-time setup. Every Google Sheets integration after this point uses the credentials you just saved.

---

## Creating a Google Sheets integration

After the one-time setup:

### 1. Prepare a sheet

In Google Sheets:

1. Create a new spreadsheet.
2. Add column headers to the first row (e.g. "Response ID", "Completed at", "Status", then one column per question title). The adapter will write the header on first sync if the sheet is empty — but you can pre-author it for control.
3. Don't share the sheet — OAuth means *you* are authorising the adapter to write on your behalf, so no special sharing is needed.

Copy the spreadsheet's URL (or the long ID from the URL).

### 2. New integration

In Community Surveys: **Integrations → Marketplace → Google Sheets**.

### 3. Fill the wizard

- **Survey** — which survey's responses to append.
- **Internal name** — e.g. "CSAT → quarterly report sheet".
- **Google account** — click **Connect Google**. A popup opens:
  1. Sign in to the Google account that should own the writes.
  2. Pick that account from the chooser.
  3. Grant the requested scopes (Sheets, Drive readonly, userinfo).
  4. The popup closes automatically; the wizard shows "Connected as alice@example.com".
- **Spreadsheet** — paste the URL or pick from the dropdown (only populated after Connect Google succeeds; lists every sheet the connected account can access, most-recently-modified first).
- **Worksheet name** — the tab name. Default: `Sheet1`.
- **Include metadata columns** — when on, the first 4 columns are Response ID, Completed at, Status, Survey. Off if you only want question columns.
- **Header row already written** — leave unchecked on first save; the adapter writes a header on the first sync. Tick it after the first row appears, otherwise every sync would rewrite the header.

### 4. Test connection

Click **Test connection**. A successful test confirms that Community Surveys can read the spreadsheet’s metadata. It does not test whether the integration can write a row.

### 5. Save

Save the integration, then submit a test response. Open the selected spreadsheet and tab and confirm that a new row contains your test answers. If you use async dispatch, wait for the scheduled task to run. If the row does not appear, check the integration’s **Activity** tab for the result of the sync.

---

## Row format

Each response becomes one row. The column order:

1. **Response ID** (if `include_metadata` is on)
2. **Completed at** (timestamp)
3. **Status** (`complete` / `partial`)
4. **Survey** (title)
5. **One column per question** — in the survey's question order.

For each question column:

- **Choice questions** — picked label.
- **Multi-choice (checkbox / rank)** — comma-separated labels.
- **NPS / slider** — numeric value.
- **Free-text** — the raw text.
- **Grid questions** — `row → col` pairs joined with `; `.
- **Date** — ISO date.
- **Geolocation** — `"lat, lng"` plus the address if provided.
- **Signature** — empty (can't fit a signature in a cell). The PDF export captures signatures.
- **File upload** — filename.

Cells use Sheets' `USER_ENTERED` input mode — Sheets parses dates and numbers automatically like a user typed them, so timestamps appear as Sheets-native dates rather than strings.

---

## Disconnecting

Choose the action based on what you want to do:

- **Reconnect one integration:** Open that integration, click **Connect Google**, and save. Then submit a test response and confirm that its row appears in the selected worksheet.
- **Stop using one integration:** Delete that integration in Community Surveys if you no longer need it.
- **Remove Google access for the app:** Use your Google Account’s [third-party connections page](https://myaccount.google.com/connections) only if you intend to remove the app’s access or need the last-resort reset below. [Google revokes access for that account across the OAuth project](https://developers.google.com/identity/protocols/oauth2/web-server#tokenrevoke), not just for one survey. Other integrations using the same Google account and OAuth project may stop syncing and need to be reconnected. Verify a test row for each integration you reconnect.

---

## How OAuth flows under the hood

The reason it works:

1. Wizard's "Connect Google" calls `api.googleOauthStart` → server generates a CSRF state token and returns Google's auth URL.
2. Wizard opens a popup to that URL. User signs in + grants scopes on Google's own page.
3. Google redirects to your Joomla's OAuth callback URL with `?code=...&state=...`.
4. Server validates state, exchanges the code with Google for an access token and a **refresh token**, encrypts the bundle, and stores it tied to the state token.
5. Callback HTML closes the popup and posts the state back to the wizard via `postMessage`.
6. Wizard now holds an opaque OAuth handle. User finishes filling the wizard and clicks Save.
7. On save, the server swaps the handle for the actual refresh token via single-use consumption and stores it encrypted on the integration.
8. At every sync, the adapter exchanges the refresh token for a fresh 1-hour access token (cheap) and uses it to call Sheets.

Google can expire or invalidate refresh tokens. For example, tokens issued to External apps in Testing expire after seven days for this integration. See [Google’s refresh token guidance](https://developers.google.com/identity/protocols/oauth2#expiration) for other causes.

All tokens encrypted at rest via AES-256-GCM keyed off Joomla's site secret. See [Integrations overview → Credentials and security](./integrations-overview.md#credentials-and-security).

---

## Common issues

### "Google OAuth is not configured for this site"

Settings → Integrations → Google → finish the one-time setup. The wizard's Connect button is disabled until Client ID + Secret are saved.

### "Google did not return a refresh token. Revoke prior access and try again."

First, open the affected integration and try **Connect Google** again with the intended Google account. If Google still does not return a refresh token, remove the app’s access from that Google Account only as a last resort, then reconnect. Read [Disconnecting](#disconnecting) first: removing access may interrupt other integrations using the same Google account and OAuth project.

### "Connection successful" but rows don't appear

- **Worksheet name typo** — the adapter looks for the exact tab name. Defaults to `Sheet1`; if your tab is named differently, update the config.
- **Sheet permissions changed** — the OAuth grant covers everything the user can access. If you transferred sheet ownership or revoked the user's access, syncs fail.
- **Async dispatch + no task scheduler** — the integration queued the sync but the **Drain Integration Retry Queue** task isn't running. See [Integrations overview → Retries](./integrations-overview.md#retries).

### Rows stopped appearing about a week after connecting

1. In Google Auth Platform, check whether the app’s audience is **External** and its publishing status is **Testing**. Review the integration’s **Activity** tab for an authentication failure. A failure can also have other causes, such as revoked access.
2. If the app is in Testing, reconnect for another short test, or follow [Step 3](#step-3--configure-the-oauth-consent-screen) to configure the app for ongoing sync. After changing the publishing status, open the existing integration and click **Connect Google** again to authorize it under the new status.
3. Save, submit a test response, and verify that the row appears in the selected worksheet. **Test connection** alone does not confirm that writes have resumed.

### "HTTP 403 — The user does not have sufficient permissions"

The connected Google account can't write to the sheet. Either:

- Connect a different Google account that owns or has edit access on the sheet.
- Share the sheet with the connected account.

### "HTTP 429 — rate limit"

Google Sheets has a per-project quota (300 read/write requests/min by default). The adapter automatically retries with backoff. If you're hitting limits, batch your surveys or request quota increase from Google.

### "The OAuth client was not found"

The Client ID in Settings → Google is wrong, or the OAuth client has been deleted in GCP. Re-paste from `console.cloud.google.com/apis/credentials`.

---

## Migrating from service account (legacy)

If you used the old service-account flow in pre-v8 versions:

1. Old integrations show as "Adapter google_sheets is no longer installed" because the credential format changed.
2. **Best path** — delete the old integration row, create a new one through the OAuth wizard.
3. The data already in your sheet stays — only the writing pipeline changes.

If you have many legacy integrations to migrate, the configure pane's missing-adapter view shows the raw stored config so you can copy the sheet ID + worksheet name before deletion.

---

## Limits

| | Limit | Notes |
|---|---|---|
| Sheets API quota | 300 requests/min per project | Google's default |
| Drive API quota | 1000 requests / 100 sec | Used only for the sheet picker |
| Sync timeout | 20 seconds per attempt | Hard limit |
| Refresh token lifetime | 7 days for External apps in Testing | Other [expiry and revocation conditions](https://developers.google.com/identity/protocols/oauth2#expiration) also apply |
| Header row writes | Once per integration | Tick `header_row_written` after the first sync |
| Cell content | Sheets' default (50K chars per cell) | Long answers truncate at this limit |
