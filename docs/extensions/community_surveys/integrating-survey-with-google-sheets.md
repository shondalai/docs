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
- **Per-account revocation** — disconnect a single integration without affecting others.
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
- Test users — while the app is in "Testing" mode, only the email addresses you list here can connect. Add yourself.

You can leave the app in **Testing** mode indefinitely — that's fine for a self-hosted site. Switch to **Production** if you want anyone to connect (requires Google's verification process for sensitive scopes, which Sheets + Drive are).

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

Click **Test connection**. The adapter fetches the sheet's metadata via the Sheets API; success means everything is wired.

### 5. Save

Submit a test response to fire the first sync. The first row appears in your sheet within ~1 second (synchronous mode) or within a few minutes (async).

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

Three ways:

1. **In the integration configure pane** — click the "Connect Google" button to reconnect (replaces the existing connection without deleting the integration).
2. **Delete the integration** — removes the integration row + its tokens.
3. **In Google's account.google.com** — Security → Third-party access → revoke the "Community Surveys" app. The next sync will fail with `auth_invalid`; the admin sees the failure in the Activity tab and can reconnect.

Disconnecting one integration doesn't affect others — each integration stores its own per-account tokens.

---

## How OAuth flows under the hood

The reason it works:

1. Wizard's "Connect Google" calls `api.googleOauthStart` → server generates a CSRF state token and returns Google's auth URL.
2. Wizard opens a popup to that URL. User signs in + grants scopes on Google's own page.
3. Google redirects to your Joomla's OAuth callback URL with `?code=...&state=...`.
4. Server validates state, exchanges the code with Google for an access token + a long-lived **refresh token**, encrypts the bundle, and stores it tied to the state token.
5. Callback HTML closes the popup and posts the state back to the wizard via `postMessage`.
6. Wizard now holds an opaque OAuth handle. User finishes filling the wizard and clicks Save.
7. On save, the server swaps the handle for the actual refresh token via single-use consumption and stores it encrypted on the integration.
8. At every sync, the adapter exchanges the refresh token for a fresh 1-hour access token (cheap) and uses it to call Sheets.

The refresh token lasts until you revoke it. The access token lasts an hour and is minted per-sync — no caching, no expiry headache.

All tokens encrypted at rest via AES-256-GCM keyed off Joomla's site secret. See [Integrations overview → Credentials and security](./integrations-overview.md#credentials-and-security).

---

## Common issues

### "Google OAuth is not configured for this site"

Settings → Integrations → Google → finish the one-time setup. The wizard's Connect button is disabled until Client ID + Secret are saved.

### "Google did not return a refresh token. Revoke prior access and try again."

If you've previously connected the same Google account, Google's behaviour is to only mint a refresh token on the first consent. We force `prompt=consent` in the OAuth URL, but in rare cases Google still skips it.

Fix: in `account.google.com/security` → Third-party access → revoke the app → reconnect.

### "Connection successful" but rows don't appear

- **Worksheet name typo** — the adapter looks for the exact tab name. Defaults to `Sheet1`; if your tab is named differently, update the config.
- **Sheet permissions changed** — the OAuth grant covers everything the user can access. If you transferred sheet ownership or revoked the user's access, syncs fail.
- **Async dispatch + no task scheduler** — the integration queued the sync but the **Drain Integration Retry Queue** task isn't running. See [Integrations overview → Retries](./integrations-overview.md#retries).

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
| Refresh token lifetime | Until revoked | OAuth tokens don't expire unless revoked or unused for 6 months |
| Header row writes | Once per integration | Tick `header_row_written` after the first sync |
| Cell content | Sheets' default (50K chars per cell) | Long answers truncate at this limit |
