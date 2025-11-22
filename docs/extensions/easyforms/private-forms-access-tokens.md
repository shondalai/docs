# Private Forms & Access Tokens

> **Audience:** Site owners who want to control form access and send secure, personalized invitations.

This comprehensive guide explains how to create private forms that require secure access tokens, manage token-based invitations, and control who can access your forms, surveys, quizzes, and polls.

[← Back to Overview](/easyforms/overview) · [Email Templates](./emails)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Understanding Access Control](#2-understanding-access-control)
3. [Setting Up Private Forms](#3-setting-up-private-forms)
4. [Managing Access Tokens](#4-managing-access-tokens)
5. [Sending Invitations](#5-sending-invitations)
6. [Token Types & Settings](#6-token-types--settings)
7. [Monitoring Token Usage](#7-monitoring-token-usage)
8. [Email Templates for Invitations](#8-email-templates-for-invitations)
9. [Best Practices](#9-best-practices)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Overview

### What Are Private Forms?

Private forms are forms that **require a secure access token** to view and submit. Unlike public forms that anyone can access through menu items or direct links, private forms can only be accessed by people who have received a unique, secure invitation link.

### Why Use Private Forms?

**Perfect for:**

- 📊 **Surveys for specific groups** - Send surveys to selected participants without requiring registration
- 🎓 **Quizzes for students** - Distribute unique quiz links that can be used once
- 📝 **Feedback forms** - Request feedback from specific customers or clients
- 🎟️ **Event registrations** - Control who can register for exclusive events
- 💼 **Internal forms** - Share forms with team members or contractors
- 🔐 **Sensitive data collection** - Ensure only invited people can submit

**Key Benefits:**

- ✅ **No login required** - Recipients don't need to create accounts
- ✅ **Complete control** - You decide exactly who gets access
- ✅ **Track usage** - See who accessed and submitted the form
- ✅ **Prevent abuse** - Limit submissions and set expiration dates
- ✅ **Professional invitations** - Send beautiful, branded email invitations
- ✅ **Secure links** - Cryptographically secure tokens that can't be guessed

### How It Works

```
1. Create your form (survey, quiz, poll, etc.)
   ↓
2. Set access control to "Token-Based"
   ↓
3. Generate secure access tokens
   ↓
4. Send invitation emails with unique links
   ↓
5. Recipients click link and access the form
   ↓
6. Track who accessed and submitted
   ↓
7. Tokens expire or become exhausted automatically
```

---

## 2. Understanding Access Control

EasyForms provides three levels of access control for your forms:

### Access Control Types

#### Public Access (Default)

- **Who can access:** Anyone
- **How they access:** Menu items, direct links, embedded forms
- **Best for:** Contact forms, newsletter signups, general inquiries
- **Limitations:** No control over who submits

#### Private Access (Registered Users)

- **Who can access:** Logged-in Joomla users
- **How they access:** Must be authenticated
- **Best for:** Member-only forms, user profiles
- **Limitations:** Requires user accounts

#### Token-Based Access (Secure Invitations)

- **Who can access:** Only people with valid tokens
- **How they access:** Unique invitation links
- **Best for:** Targeted surveys, controlled distribution
- **Limitations:** Requires token management

### Comparison Table

| Feature | Public | Private | Token-Based |
|---------|--------|---------|-------------|
| **Requires Login** | ❌ No | ✅ Yes | ❌ No |
| **Open to All** | ✅ Yes | ❌ No | ❌ No |
| **Controlled Access** | ❌ No | ⚠️ Partial | ✅ Yes |
| **Track Individual Users** | ❌ No | ✅ Yes | ✅ Yes |
| **Set Expiration** | ❌ No | ❌ No | ✅ Yes |
| **Limit Submissions** | ⚠️ Global only | ⚠️ Global only | ✅ Per token |
| **Send Invitations** | ❌ No | ❌ No | ✅ Yes |
| **Appears in Public Listing** | ✅ Yes | ✅ Yes | ❌ No |
| **Easy Setup** | ✅ Easy | ⚠️ Medium | ⚠️ Medium |
| **Best For** | General forms | Members area | Targeted distribution |

---

## 3. Setting Up Private Forms

### Step 1: Configure Form Access Control

1. **Open Your Form in the Builder**
   - Go to **Components → EasyForms → Forms**
   - Click on the form you want to make private
   - Or create a new form

2. **Access the Settings Dialog**
   - Click the **Settings** button in the toolbar (⚙️ icon)
   - Select the **Access** tab

3. **Set Access Type to Token-Based**
   - Under **Access Control**, select **Token-Based**
   - You'll see: "Token-Based - Secure access links only"
   - Description: "Form can only be accessed via secure token links. Perfect for surveys sent to specific people."

4. **Configure Default Token Settings**

   When you select Token-Based access, additional settings appear:

   **Default Token Type:**
   - **Single Use** - Token can be used once (recommended for quizzes)
   - **Multi-Use** - Token can be used multiple times (for surveys)
   - **Unlimited** - No submission limit (for ongoing access)

   **Default Validity Days:**
   - How many days tokens are valid (default: 30 days)
   - Example: 7, 14, 30, 60, 90 days
   - Set to 0 for no expiration (not recommended)

   **Default Max Submissions:**
   - Maximum number of submissions per token
   - Only applies to Multi-Use tokens
   - Example: 1, 3, 5, 10 submissions

   **Auto Send Invitations:**
   - Toggle ON to automatically send invitation emails when creating tokens
   - Toggle OFF to create tokens without sending emails (send manually later)

   **Default Email Template:**
   - Select which email template to use for invitations
   - Choose from "Access Token" category templates
   - Leave empty to use default template

5. **Save Your Form**
   - Click **Save** or **Save & Close**
   - Your form is now private and token-protected

### Step 2: Verify Form is Private

After saving, verify your form requires tokens:

1. **Check Form Listing**
   - Go to **Components → EasyForms → Forms**
   - Private forms should NOT appear in public form listings
   - Access column shows "Token" or lock icon 🔒

2. **Test Direct Access**
   - Try accessing the form without a token
   - You should see a beautiful error page:
     - "Access Denied"
     - "Invalid or Expired Access Link"
     - Explanation of what went wrong
     - Guidance on what to do next

3. **Verify Settings**
   - Re-open the form builder
   - Go to Settings → Access tab
   - Confirm "Token-Based" is selected

---

## 4. Managing Access Tokens

### Accessing the Token Manager

Once your form is set to Token-Based access:

1. **Open Your Form in the Builder**
2. **Click Settings** (⚙️ icon)
3. **Go to Access Tab**
4. **Scroll to Access Token Manager Section**
   - You'll see token statistics and management interface
   - Token creation tools
   - List of existing tokens

### Token Manager Interface

The Access Token Manager provides a complete dashboard:

#### Statistics Overview

At the top, you'll see:

- **📊 Total Tokens** - All tokens created for this form
- **✅ Active Tokens** - Currently valid tokens
- **👁️ Views** - How many times tokens were accessed
- **📝 Submissions** - Total submissions via tokens

#### Search & Filter

- **Search Bar:** Find tokens by label, email, or token string
- **Filters:** Show all, active only, expired, exhausted
- **Sort:** By created date, expiry date, usage

#### Token List

Each token displays:

- **Label** - Friendly name (e.g., "John Smith", "Survey #1")
- **Recipient** - Email address (if provided)
- **Type** - Single Use, Multi-Use, or Unlimited
- **Usage** - Views/submissions count
- **Expires** - Expiration date
- **Status** - Active, Expired, Exhausted, Revoked
- **Actions** - Copy link, Send invite, Revoke, Delete

### Creating Individual Tokens

#### Quick Create

For creating one token at a time:

1. **Click "Create Token" Button**
   - Located at the top of the token manager

2. **Fill in Token Details:**

   **Basic Information:**
   - **Label** (optional) - Friendly name for this token
     - Example: "John Smith", "Q4 Survey Participant #1"
   - **Recipient Email** (optional) - Who this token is for
     - Example: john@example.com
     - Leave empty to create token without sending invite

   **Token Settings:**
   - **Token Type** - Uses default from form settings
     - Single Use, Multi-Use, or Unlimited
   - **Validity Days** - Uses default from form settings
     - Customize if needed for this specific token
   - **Max Submissions** - For Multi-Use tokens
     - Uses default from form settings

   **Invitation:**
   - **Send Notification** - Toggle ON to email immediately
   - **Email Template** - Choose which template to use
     - Defaults to form's default template
     - Select different template if needed
   - **Notes** (optional) - Internal notes about this token

3. **Click "Create Token"**
   - Token is generated with cryptographically secure random string
   - Email sent automatically if "Send Notification" is ON
   - Token appears in the list

4. **Copy Token Link**
   - Click the copy icon (📋) next to the token
   - Share the link manually if needed
   - Link format: `https://yoursite.com/form?formId=16&token=abc123...`

### Creating Bulk Tokens

For creating multiple tokens at once:

1. **Click "Bulk Create" Button**

2. **Configure Bulk Settings:**

   **Number of Tokens:**
   - Enter how many tokens to create
   - Example: 10, 50, 100, 500

   **Label Prefix:**
   - Base name for auto-generated labels
   - Example: "Survey Participant" → "Survey Participant #1", "#2", etc.

   **Token Settings:**
   - Use same settings interface as individual tokens
   - All tokens will have the same type, validity, etc.

   **Invitation:**
   - Choose whether to send invitations now or later
   - Select email template

3. **Click "Create Tokens"**
   - Tokens are created in bulk
   - Progress indicator shows creation status
   - All tokens appear in the list

4. **Export Token List**
   - Click "Export CSV" to download
   - Spreadsheet includes all token details and links
   - Use for mail merge or external distribution

### Importing Recipients and Creating Tokens

For creating tokens from a list of email addresses:

1. **Click "Import Recipients" Button**

2. **Prepare Your Recipient List:**

   **CSV Format:**
   ```csv
   email,name
   john@example.com,John Smith
   jane@example.com,Jane Doe
   bob@example.com,Bob Johnson
   ```

   **Or Simple List:**
   ```
   john@example.com
   jane@example.com
   bob@example.com
   ```

3. **Upload or Paste:**
   - **Option A:** Upload CSV file
   - **Option B:** Paste email addresses (one per line)

4. **Configure Import Settings:**

   **Token Settings:**
   - Token type (applies to all)
   - Validity days (applies to all)
   - Max submissions (if multi-use)

   **Invitation Settings:**
   - **Send Invitations Immediately** - Toggle ON/OFF
   - **Email Template** - Which template to use
   - **Batch Size** - How many to send at once

5. **Click "Import & Create Tokens"**
   - System creates one token per email address
   - Shows progress: "Created 45 of 100..."
   - Displays success/failure summary

6. **Review Results:**
   - **Successful:** Number of tokens created
   - **Failed:** Number that failed (invalid emails, duplicates)
   - **Sent:** Number of invitations sent
   - Download error log if needed

### Token Actions

For each token, you can perform actions:

#### Copy Link
- Click 📋 icon
- Copies full invitation URL to clipboard
- Paste in email, chat, or document

#### Send/Resend Invitation
- Click ✉️ envelope icon
- Opens invitation dialog
- Select email template
- Click "Send" to email the recipient
- Can resend if original was missed

#### Revoke Token
- Click 🚫 prohibition icon
- Confirms revocation
- Token status changes to "Revoked"
- Link no longer works
- Provide reason (optional)

#### Delete Token
- Click 🗑️ trash icon
- Confirms deletion
- Token permanently removed
- Cannot be undone

#### View Details
- Click on token label or row
- Shows complete token information:
  - Full token string
  - Creation date and creator
  - Access history (IPs, timestamps)
  - Submission history
  - Metadata

---

## 5. Sending Invitations

### Invitation Email System

EasyForms uses a sophisticated email system for sending token invitations:

- **Professional Templates** - Beautiful, responsive email designs
- **Personalization** - Include recipient names and custom fields
- **Email Queue** - Reliable delivery system
- **Tracking** - Know when invitations were sent
- **Resend Capability** - Easily resend to those who didn't receive

### Automatic Invitations

When creating tokens with "Send Notification" enabled:

1. **Token Created** → Email queued automatically
2. **Queue Processing** → Task scheduler sends email
3. **Delivery** → Recipient receives invitation
4. **Tracking** → Status updated to "Sent"

### Manual Invitations

To send invitations manually:

1. **Select Tokens** - Check boxes next to tokens in the list
2. **Click "Send Invitations" Button**
3. **Configure Send Options:**
   - Select email template
   - Review recipients
   - Choose batch settings
4. **Click "Send"**
5. **View Results:**
   - Shows how many sent successfully
   - Shows any failures
   - Option to retry failed sends

### Invitation Email Content

A typical invitation email includes:

**Subject Line:**
```
You're invited to access: [Form Title]
```

**Email Body:**
- Personalized greeting (if name provided)
- Form title and description
- What type of form (survey, quiz, poll, form)
- Prominent "Access Form" button with unique link
- Access details:
  - Token type (Single Use, Multi-Use, Unlimited)
  - Expiration date
  - Max submissions (if applicable)
- Security notice (don't share link)
- Support contact information
- Professional footer with site branding

**Example:**
```
Hello John Smith,

You've been granted secure access to our Q4 Customer Satisfaction Survey.

[Access Survey Button]

Access Details:
• Form: Q4 Customer Satisfaction Survey
• Access Type: Single Use
• Valid Until: December 22, 2025

This is a secure access link. Please do not share it with others.

Need help? Contact us at support@yoursite.com

© Your Company Name
```

### Tracking Invitation Status

For each token, you can see:

- **Notification Sent:** Yes/No
- **Sent At:** Date and time
- **Email Status:** Queued, Sent, Failed
- **First Accessed:** When link was first clicked
- **Last Accessed:** Most recent access
- **Access Count:** How many times accessed

---

## 6. Token Types & Settings

### Token Types Explained

#### Single Use Tokens

**Best for:** Quizzes, one-time registrations, unique responses

**Characteristics:**
- Can be submitted **exactly once**
- Becomes "exhausted" after submission
- Can be accessed multiple times before submission
- Useful for tracking individual responses

**Use Cases:**
- Student quizzes (one attempt per student)
- Event registrations (one registration per person)
- Feedback forms (one response per customer)
- Contest entries (one entry per participant)

**Example:**
```
John receives quiz link
→ Opens link (views: 1, submissions: 0)
→ Reviews questions
→ Closes browser
→ Opens link again (views: 2, submissions: 0)
→ Submits quiz (submissions: 1)
→ Link no longer works (exhausted)
```

#### Multi-Use Tokens

**Best for:** Surveys with follow-ups, team forms, progressive submissions

**Characteristics:**
- Can be submitted **multiple times**
- Set maximum number of submissions
- Useful for tracking progress
- Expires after max submissions reached

**Use Cases:**
- Weekly check-in surveys (4 submissions over 4 weeks)
- Team collaboration forms (5 team members)
- Progressive data collection (submit as you go)
- Feedback with updates (submit initial + follow-up)

**Example:**
```
Team lead receives link (max: 5 submissions)
→ Submits for team member 1 (submissions: 1/5)
→ Submits for team member 2 (submissions: 2/5)
→ ...
→ Submits for team member 5 (submissions: 5/5)
→ Link no longer works (exhausted)
```

#### Unlimited Tokens

**Best for:** Ongoing access, resource forms, reference materials

**Characteristics:**
- **No submission limit**
- Valid until expiration date
- Can be accessed unlimited times
- Useful for long-term access

**Use Cases:**
- Internal team forms (ongoing use)
- Reference submission forms
- Long-term projects
- Contractor access

**Example:**
```
Contractor receives link (valid: 90 days)
→ Submits project update (submissions: 1)
→ Submits another update next week (submissions: 2)
→ Submits monthly updates (submissions: 3, 4, 5...)
→ After 90 days: Link expires
```

### Token Settings Deep Dive

#### Validity Period

**What it does:** Sets how long a token remains valid

**Options:**
- 7 days - Short-term surveys
- 14 days - Standard surveys
- 30 days - Default, balanced option
- 60 days - Longer-term access
- 90 days - Extended access
- Custom - Any number of days
- Never - No expiration (not recommended)

**Recommendations:**
- **Surveys:** 14-30 days (urgency + flexibility)
- **Quizzes:** 7-14 days (prevent sharing)
- **Events:** 7 days before event
- **Internal:** 30-90 days

**What happens when expired:**
- Token status changes to "Expired"
- Access link shows error page
- User cannot submit
- Token can be reactivated if needed

#### Max Submissions (Multi-Use)

**What it does:** Limits total submissions per token

**Options:**
- 1 submission - Effectively single-use
- 2-5 submissions - Small teams
- 6-10 submissions - Medium teams
- 11-25 submissions - Large teams
- 26+ submissions - Very large groups
- Unlimited - No limit (use Unlimited type instead)

**Tracking:**
- Current submissions counted
- Remaining submissions calculated
- Exhausted when limit reached

**Example Scenarios:**

**Team of 5:**
```
Max Submissions: 5
Purpose: One submission per team member
Result: Link shared with team, each submits once
```

**3-Part Survey:**
```
Max Submissions: 3
Purpose: Baseline, midpoint, final survey
Result: Same person submits 3 times over time
```

### Auto-Send Invitations

**What it does:** Automatically sends invitation emails when tokens are created

**When ON:**
- Token created → Email queued immediately
- Uses default email template
- Sends to recipient email address
- Tracks sent status

**When OFF:**
- Token created without sending email
- Can send manually later
- Useful for:
  - Reviewing tokens before sending
  - Sending in batches at specific times
  - Using external email systems
  - Creating tokens for manual distribution

**Best Practices:**
- **ON** for individual token creation
- **OFF** for bulk creation (send in batches)
- **OFF** when importing (review first)
- **ON** for immediate distribution needs

### Default Email Template

**What it does:** Selects which email template to use for invitations

**Options:**
- **Access Token Invitation** (default) - Professional template
- **Custom Templates** - Create your own design
- **Blank** - Use system default

**Customization:**
- Go to **Components → EasyForms → Email Templates**
- Edit "Access Token Invitation" template
- Customize:
  - Subject line
  - Header text
  - Button text and colors
  - Footer content
  - Branding and logos

**Template Variables:**
- `{form_title}` - Form name
- `{form_type}` - form/survey/quiz/poll
- `{recipient_name}` - Recipient's name
- `{access_link}` - Unique token URL
- `{expiry_date}` - When token expires
- `{token_type}` - Single/Multi/Unlimited
- `{max_submissions}` - Submission limit
- `{site_name}` - Your site name
- `{site_email}` - Support email

---

## 7. Monitoring Token Usage

### Analytics Dashboard

The Token Manager provides comprehensive analytics:

#### Summary Statistics

**Top Cards:**
- **Total Tokens** - All tokens ever created
  - Active count in green
  - Inactive count in gray
- **Views** - Total access counts
  - Unique visitors
  - Total page loads
- **Submissions** - Forms submitted via tokens
  - Completion rate
  - Average per token

#### Token Status Breakdown

**Active Tokens:**
- Not expired
- Not exhausted
- Not revoked
- Available for use

**Expired Tokens:**
- Past validity date
- Automatically marked
- Can be extended if needed

**Exhausted Tokens:**
- Reached submission limit
- Single-use tokens that were used
- Multi-use tokens at max

**Revoked Tokens:**
- Manually disabled
- Cannot be reactivated
- Reason tracked

### Token List Details

For each token in the list:

**Label Column:**
- Shows friendly name
- Click to view full details

**Recipient Column:**
- Email address (if provided)
- Name (if provided)
- Blank if anonymous token

**Type Column:**
- Badge showing Single Use/Multi-Use/Unlimited
- Color-coded for quick identification

**Usage Column:**
- **Views:** Number of times accessed
- **Submissions:** Number of times submitted
- Format: "3 views" or "1/3 submissions"

**Expires Column:**
- Expiration date
- "Never" if no expiration
- Red text if expired

**Status Column:**
- Badge with current status
- Color-coded:
  - Green = Active
  - Yellow = Expiring soon
  - Red = Expired
  - Gray = Exhausted
  - Black = Revoked

**Actions Column:**
- Copy link button
- Send/Resend invitation
- Revoke token
- Delete token
- View details

### Detailed Token View

Click on any token to see complete details:

**Token Information:**
- Full token string (64-character hash)
- Token hash (SHA-256)
- Creation date and time
- Created by (admin username)
- Last modified

**Access Details:**
- Label and recipient
- Token type and settings
- Validity period
- Max submissions (if applicable)

**Usage Statistics:**
- Access count (total views)
- First accessed date/time
- Last accessed date/time
- IP addresses that accessed
- User agents (browsers)

**Submission History:**
- Submission count
- Submission dates/times
- Submission IDs (link to view)

**Notification Status:**
- Send notification: Yes/No
- Notification sent: Yes/No
- Sent at: Date/time
- Email template used

**Status Information:**
- Current status
- Revoked at (if revoked)
- Revoked by (admin)
- Revoke reason

**Notes:**
- Internal notes about this token
- Editable by admins

### Exporting Token Data

**CSV Export:**

1. **Click "Export CSV" Button**
2. **Downloads file with columns:**
   - Label
   - Recipient Email
   - Token Type
   - Status
   - Access Link (full URL)
   - Max Submissions
   - Submission Count
   - Access Count
   - Expires At
   - Created At

3. **Use for:**
   - Spreadsheet analysis
   - Mail merge in external tools
   - Backup of token data
   - Reporting to stakeholders

**Use Cases:**
- Send links via external email system
- Track who hasn't accessed yet
- Identify tokens needing follow-up
- Generate usage reports

### Search and Filter

**Search Tokens:**
- By label (name)
- By email address
- By token string
- Real-time filtering

**Filter by Status:**
- All tokens
- Active only
- Expired only
- Exhausted only
- Revoked only

**Pagination:**
- Shows 20 tokens per page (default)
- Navigate through pages
- Jump to specific page
- Shows "1-20 of 156" count

---

## 8. Email Templates for Invitations

### Default Template

EasyForms includes a professional, responsive email template for access token invitations.

**Design Features:**
- **Swiss Spa Aesthetic** - Minimalist, premium design
- **Responsive** - Works on mobile and desktop
- **Dark Mode** - Supports light and dark themes
- **Accessible** - High contrast, readable fonts
- **Professional** - Clean layout, clear call-to-action

**Template Structure:**

```
┌──────────────────────────────────────┐
│          🔒 (Icon)                   │
│       You're Invited                 │
├──────────────────────────────────────┤
│                                      │
│  Invalid or Expired Access Link      │
│                                      │
│  You have been invited to            │
│  participate in our survey...        │
│                                      │
│  ┌────────────────────────────────┐ │
│  │   Access Survey (Button)       │ │
│  │   This link is unique to you   │ │
│  └────────────────────────────────┘ │
│                                      │
│  Access Details:                     │
│  • Form: Customer Survey             │
│  • Type: Single Use                  │
│  • Valid Until: Dec 22, 2025         │
│  • Max Submissions: 1                │
│                                      │
│  Need help? Contact us               │
│                                      │
├──────────────────────────────────────┤
│        © Your Company                │
└──────────────────────────────────────┘
```

### Customizing Email Templates

#### Editing the Default Template

1. **Go to Email Templates:**
   - **Components → EasyForms → Email Templates**

2. **Find Access Token Template:**
   - Filter by category: "Access Token"
   - Click on "Access Token Invitation"

3. **Edit Template:**

   **Subject Line:**
   - Default: "You're invited to access: {form_title}"
   - Customize with variables
   - Keep under 50 characters for mobile

   **Body HTML:**
   - Visual editor available
   - Drag-and-drop blocks
   - Use template variables
   - Preview in light/dark mode

   **Body Text:**
   - Plain text version
   - For email clients without HTML support
   - Auto-generated from HTML

4. **Available Variables:**
   - `{form_title}` - Name of the form
   - `{form_type}` - form/survey/quiz/poll
   - `{recipient_name}` - Recipient's name
   - `{access_link}` - Unique secure URL
   - `{expiry_date}` - Expiration date
   - `{token_type}` - Token type label
   - `{max_submissions_row}` - HTML for max submissions
   - `{max_submissions_info}` - Plain text version
   - `{site_name}` - Your website name
   - `{site_email}` - Support email

5. **Design Tips:**
   - Keep it simple and scannable
   - Make the button prominent
   - Include essential information only
   - Use your brand colors
   - Test on mobile devices
   - Check spam score

6. **Save Template:**
   - Click "Save" or "Save & Close"
   - Template is now available for use

#### Creating Custom Templates

To create a brand-new template:

1. **Create New Template:**
   - **Components → EasyForms → Email Templates**
   - Click "New"

2. **Configure Template:**
   - **Name:** "Custom Invitation Template"
   - **Category:** Access Token
   - **Status:** Published
   - **Language:** All or specific

3. **Design Email:**
   - Use template editor
   - Add your branding
   - Include required variables
   - Style for your audience

4. **Select in Form Settings:**
   - Open form builder
   - Settings → Access tab
   - Under "Default Email Template"
   - Select your custom template

### Template Best Practices

#### Content

**Do:**
- ✅ Personalize with recipient name
- ✅ Clearly state what form it is
- ✅ Explain why they received this
- ✅ Make the button obvious
- ✅ Include expiration date
- ✅ Provide support contact
- ✅ Add unsubscribe link (if ongoing)

**Don't:**
- ❌ Use generic greetings ("Dear User")
- ❌ Hide important information
- ❌ Use tiny fonts
- ❌ Include too many links
- ❌ Forget mobile users
- ❌ Use all caps or excessive punctuation

#### Design

**Do:**
- ✅ Use consistent branding
- ✅ Test in multiple email clients
- ✅ Ensure mobile responsiveness
- ✅ Use alt text for images
- ✅ Keep file size small
- ✅ Use web-safe fonts

**Don't:**
- ❌ Rely on images for critical info
- ❌ Use background images
- ❌ Make links look like text
- ❌ Use too many colors
- ❌ Forget dark mode compatibility

#### Deliverability

**Do:**
- ✅ Use clear, descriptive subject lines
- ✅ Include plain text version
- ✅ Avoid spam trigger words
- ✅ Test spam score
- ✅ Authenticate your domain (SPF, DKIM)
- ✅ Warm up your sending IP

**Don't:**
- ❌ Use "FREE" or "URGENT" in subject
- ❌ Send from noreply@ addresses
- ❌ Include shortened URLs
- ❌ Use excessive exclamation marks!!!
- ❌ Send to purchased lists

---

## 9. Best Practices

### Planning Your Private Form

**Before Creating Tokens:**

1. **Define Your Audience**
   - Who needs access?
   - How many people?
   - Do they know each other?
   - What's their tech comfort level?

2. **Choose Token Type**
   - One response per person? → Single Use
   - Multiple submissions expected? → Multi-Use
   - Ongoing access needed? → Unlimited

3. **Set Validity Period**
   - How much time do they need?
   - Is there urgency?
   - When do you need responses?
   - Add buffer for stragglers

4. **Plan Distribution**
   - Email invitations? (use auto-send)
   - Manual sharing? (create without sending)
   - External mail merge? (export CSV)
   - Mix of methods? (batch approach)

### Token Creation Strategies

#### Small Groups (1-10 people)

**Recommended:**
- Create individual tokens
- Include names and emails
- Enable auto-send
- Personalize labels

**Process:**
```
1. Create tokens one-by-one
2. Add recipient names and emails
3. Send automatically as you create
4. Track individually
```

#### Medium Groups (10-100 people)

**Recommended:**
- Import from CSV/spreadsheet
- Batch create tokens
- Send invitations in phases
- Monitor response rates

**Process:**
```
1. Prepare recipient list in spreadsheet
2. Export as CSV (email, name columns)
3. Import and create tokens
4. Send in batches of 25-50
5. Follow up with non-responders
```

#### Large Groups (100+ people)

**Recommended:**
- Bulk create tokens
- Export CSV for mail merge
- Use external email system
- Stagger distribution

**Process:**
```
1. Bulk create tokens (e.g., 500)
2. Export CSV with links
3. Use Mailchimp/Sendinblue for sending
4. Track opens and clicks externally
5. Monitor EasyForms for submissions
```

### Security Best Practices

**Token Security:**

1. **Don't Share Tokens Publicly**
   - Never post links on social media
   - Don't include in public documents
   - Avoid forums or public wikis

2. **Use Appropriate Expiration**
   - Shorter = more secure
   - Longer = more convenient
   - Balance based on sensitivity

3. **Monitor for Unusual Activity**
   - Check access from unexpected IPs
   - Look for excessive views without submission
   - Revoke if suspicious activity

4. **Limit Information Exposure**
   - Don't include sensitive data in labels
   - Be careful with notes field
   - Consider GDPR compliance

**Email Security:**

1. **Authenticate Your Domain**
   - Set up SPF records
   - Configure DKIM signing
   - Enable DMARC policy

2. **Use HTTPS**
   - Ensure site has valid SSL
   - All token links use HTTPS
   - Prevent man-in-the-middle attacks

3. **Educate Recipients**
   - Explain how to identify legitimate emails
   - Warn about phishing
   - Provide verification method

### Form Design for Token-Based Access

**Form Setup:**

1. **Clear Introduction**
   - Explain why they received access
   - What the form is for
   - How long it will take
   - What happens with their data

2. **Progress Indicators**
   - For multi-page forms
   - Show completion percentage
   - Indicate required vs optional

3. **Save and Continue**
   - Allow partial completion
   - Resume later with same token
   - Email draft link

4. **Confirmation**
   - Thank you message
   - What happens next
   - Who to contact for questions

**Question Design:**

1. **Keep It Focused**
   - Only ask necessary questions
   - Respect their time
   - Avoid redundancy

2. **Make It Easy**
   - Use appropriate field types
   - Provide clear instructions
   - Include examples if needed

3. **Test Thoroughly**
   - Submit as a recipient would
   - Check mobile experience
   - Verify logic and validation

### Communication Best Practices

**Initial Invitation:**

1. **Timing**
   - Send during business hours
   - Avoid weekends (for business surveys)
   - Consider time zones

2. **Subject Line**
   - Clear and specific
   - Mention the form name
   - Create urgency if needed
   - Example: "Your input needed: Q4 Survey"

3. **Email Body**
   - Explain why they were selected
   - Estimated time to complete
   - Deadline for response
   - Benefits of participating

**Follow-Up:**

1. **First Reminder (50% point)**
   - "Gentle reminder about [survey name]"
   - Resend to those who haven't responded
   - Highlight deadline approaching

2. **Final Reminder (80% point)**
   - "Last chance to participate"
   - Emphasize importance
   - Extend deadline if needed

3. **Thank You**
   - Send to those who completed
   - Share preliminary results (if appropriate)
   - Explain next steps

### Response Rate Optimization

**Increase Response Rates:**

1. **Incentives**
   - Offer prize drawing
   - Provide early access to results
   - Donate to charity per response

2. **Personalization**
   - Use recipient names
   - Explain why their input matters
   - Reference previous interactions

3. **Make It Easy**
   - Mobile-friendly design
   - Save and continue option
   - Short completion time

4. **Build Trust**
   - Explain data privacy
   - Show legitimate sender
   - Use professional design

5. **Create Urgency**
   - Set clear deadlines
   - Limit token validity
   - Highlight limited spots

**Monitor and Adjust:**

1. **Track Metrics**
   - Email open rate
   - Link click rate
   - Form completion rate
   - Drop-off points

2. **Identify Issues**
   - Low opens? → Improve subject line
   - Low clicks? → Better email content
   - Low completions? → Simplify form

3. **Test and Iterate**
   - A/B test subject lines
   - Try different send times
   - Adjust form length

### Data Management

**Organization:**

1. **Token Labels**
   - Use consistent naming
   - Include relevant identifiers
   - Make searchable

2. **Notes Field**
   - Document token purpose
   - Track manual communications
   - Note any special cases

3. **Export Regularly**
   - Backup token data
   - Archive expired tokens
   - Maintain records

**Compliance:**

1. **GDPR/Privacy**
   - Collect consent if required
   - Provide privacy policy link
   - Allow data deletion requests
   - Honor opt-out requests

2. **Data Retention**
   - Set retention policies
   - Delete old tokens
   - Archive submissions

3. **Security**
   - Limit admin access
   - Use strong passwords
   - Enable two-factor auth
   - Audit access logs

---

## 10. Troubleshooting

### Common Issues and Solutions

#### "Invalid or Expired Access Token" Error

**Symptoms:**
- User clicks link and sees error page
- Cannot access the form
- Shows "Access Denied" message

**Possible Causes & Solutions:**

1. **Token Has Expired**
   - **Check:** View token details, check "Expires" date
   - **Solution:** Extend expiration or create new token
   - **Prevent:** Set longer validity period

2. **Token Was Revoked**
   - **Check:** View token status
   - **Solution:** Reactivate (if system allows) or create new token
   - **Prevent:** Only revoke when absolutely necessary

3. **Token Is Exhausted**
   - **Check:** Single-use token already submitted
   - **Solution:** Create new token for that person
   - **Prevent:** Use multi-use for multiple submissions

4. **Token String Modified**
   - **Check:** Compare link with original
   - **Solution:** Resend original invitation
   - **Prevent:** Educate users not to modify links

5. **Token Doesn't Exist**
   - **Check:** Verify token was created
   - **Solution:** Create token if missing
   - **Prevent:** Verify creation before sending

#### Invitation Emails Not Sending

**Symptoms:**
- Tokens created but emails not received
- "Send Invitations" doesn't work
- Recipients say they didn't get email

**Possible Causes & Solutions:**

1. **Email in Spam Folder**
   - **Check:** Ask recipient to check spam
   - **Solution:** Add to safe senders list
   - **Prevent:** Authenticate domain (SPF, DKIM)

2. **Email Queue Not Processing**
   - **Check:** Components → EasyForms → Email Queue
   - **Solution:** Run task scheduler or cron job
   - **Prevent:** Set up automated task scheduler

3. **Invalid Email Address**
   - **Check:** Verify email format
   - **Solution:** Correct email and resend
   - **Prevent:** Validate emails during import

4. **Email Template Issues**
   - **Check:** Test email template
   - **Solution:** Fix template errors
   - **Prevent:** Test templates before using

5. **Server Email Configuration**
   - **Check:** Joomla Global Configuration → Server → Mail Settings
   - **Solution:** Configure SMTP properly
   - **Prevent:** Test email sending regularly

#### Tokens Not Appearing in Manager

**Symptoms:**
- Created tokens don't show in list
- Token count shows but list is empty
- Search returns no results

**Possible Causes & Solutions:**

1. **Pagination Issue**
   - **Check:** Navigate to other pages
   - **Solution:** Check if tokens on other pages
   - **Prevent:** Use search to find specific tokens

2. **Filter Applied**
   - **Check:** Look at active filters
   - **Solution:** Clear all filters
   - **Prevent:** Reset filters after use

3. **Database Error**
   - **Check:** Joomla error logs
   - **Solution:** Check database table integrity
   - **Prevent:** Regular database backups

4. **Wrong Form Selected**
   - **Check:** Verify correct form open
   - **Solution:** Open correct form
   - **Prevent:** Double-check form before creating tokens

#### Form Showing as Public

**Symptoms:**
- Form appears in public listings
- Anyone can access without token
- Access control not working

**Possible Causes & Solutions:**

1. **Access Control Not Set**
   - **Check:** Settings → Access tab
   - **Solution:** Set to "Token-Based"
   - **Prevent:** Verify settings before publishing

2. **Form Not Saved**
   - **Check:** Re-open form settings
   - **Solution:** Set access control and save
   - **Prevent:** Always save after changes

3. **Cache Issue**
   - **Check:** Clear Joomla cache
   - **Solution:** System → Clear Cache
   - **Prevent:** Disable cache during development

4. **Database Not Updated**
   - **Check:** Database `access_control` column
   - **Solution:** Run SQL update or reinstall component
   - **Prevent:** Ensure database migrations ran

#### Token Usage Not Tracking

**Symptoms:**
- Views count stays at 0
- Submission count not updating
- Access history empty

**Possible Causes & Solutions:**

1. **Token Not Being Validated**
   - **Check:** Form loads without error
   - **Solution:** Verify token validation in code
   - **Prevent:** Test token before distributing

2. **Browser Issues**
   - **Check:** Try different browser
   - **Solution:** Clear browser cache
   - **Prevent:** Use incognito/private mode for testing

3. **JavaScript Errors**
   - **Check:** Browser console for errors
   - **Solution:** Fix JavaScript conflicts
   - **Prevent:** Test in multiple browsers

4. **Database Not Updating**
   - **Check:** Database logs
   - **Solution:** Check table permissions
   - **Prevent:** Regular database maintenance

### Error Messages and Meanings

| Error Message | Meaning | Solution |
|---------------|---------|----------|
| "Invalid or expired access token" | Token not found, expired, revoked, or exhausted | Verify token status, create new if needed |
| "Form requires access token" | Accessing form without token | Use invitation link with token |
| "This token has already been used" | Single-use token was submitted | Expected behavior or create new token |
| "Token has expired" | Past validity date | Extend expiration or create new token |
| "Maximum submissions reached" | Multi-use token at limit | Expected behavior or create new token |
| "Token has been revoked" | Manually disabled | Reactivate or create new token |
| "Email queue is full" | Too many pending emails | Wait for processing or increase queue size |
| "Failed to send invitation" | Email delivery error | Check email settings, recipient address |
| "Invalid email address" | Email format incorrect | Correct email format |
| "Template not found" | Email template missing | Select valid template or use default |

### Getting Additional Help

If you continue to experience issues:

1. **Check Documentation**
   - Review this guide thoroughly
   - Check related documentation
   - Look for updates or errata

2. **Enable Debug Mode**
   - Joomla Global Configuration → System
   - Set Debug System to Yes
   - Check error messages

3. **Check Logs**
   - Components → EasyForms → Logs
   - Look for errors related to tokens
   - Check Joomla error logs

4. **Test in Isolation**
   - Create simple test form
   - Create single test token
   - Try in incognito mode
   - Eliminate variables

5. **Community Support**
   - EasyForms community forum
   - Joomla community forums
   - Stack Overflow

6. **Professional Support**
   - Contact EasyForms support
   - Provide detailed information:
     - EasyForms version
     - Joomla version
     - PHP version
     - Error messages
     - Steps to reproduce
   - Include screenshots if helpful

---

## Related Documentation

- [Email Templates](./emails) - Customize invitation emails
- [Form Builder Guide](./form-builder) - Create and design forms
- [Analytics](./analytics) - Track form performance
- [Integrations](./integrations) - Connect to external services

---

## Quick Reference

### Token Creation Checklist

- [ ] Form set to "Token-Based" access
- [ ] Default token settings configured
- [ ] Email template customized (optional)
- [ ] Recipient list prepared
- [ ] Token type selected appropriately
- [ ] Validity period set
- [ ] Test token created and tested
- [ ] Invitations sent
- [ ] Recipients notified via backup channel
- [ ] Tracking plan in place

### Best Practices Summary

1. ✅ Plan before creating tokens
2. ✅ Use appropriate token type
3. ✅ Set reasonable expiration dates
4. ✅ Personalize invitations
5. ✅ Test with real submission
6. ✅ Monitor response rates
7. ✅ Send reminders
8. ✅ Track usage metrics
9. ✅ Revoke unused tokens
10. ✅ Archive completed surveys

### Security Checklist

- [ ] HTTPS enabled on site
- [ ] Email domain authenticated (SPF, DKIM)
- [ ] Token expiration set appropriately
- [ ] Access logs monitored
- [ ] Sensitive data encrypted
- [ ] Privacy policy linked
- [ ] GDPR compliance verified
- [ ] Admin access limited
- [ ] Regular security updates applied
- [ ] Backup system in place

---

## Glossary

**Access Control** - System that determines who can view and submit a form

**Access Token** - Unique, cryptographically secure string that grants access to a private form

**Exhausted Token** - Token that has reached its maximum number of submissions

**Expiration Date** - Date when a token becomes invalid

**Invitation** - Email sent to recipient with unique access link

**Label** - Friendly name for a token (e.g., recipient name)

**Multi-Use Token** - Token that can be submitted multiple times up to a limit

**Revoked Token** - Token that has been manually disabled by an administrator

**Single-Use Token** - Token that can only be submitted once

**Token Hash** - SHA-256 hash of the token string for database storage

**Token String** - 64-character random string used in access links

**Unlimited Token** - Token with no submission limit (expires by date only)

**Validity Period** - Number of days a token remains active

---

**Need more help?** Check our [Troubleshooting Guide](./troubleshooting-guide) or contact support.

[← Back to Overview](/easyforms/overview)

