---
id: certificates
title: Certificates & Credentials
sidebar_label: Certificates
---

# Certificates & Credentials

This guide explains how Community Quiz awards certificates, how to design them, and how anyone can verify they are genuine. It is written for the people who set up assessments and courses, in plain language.

> **Audience:** Trainers, certification bodies, HR teams, and course creators. No coding or design background needed.

[← Back to Overview](./overview.md)

A certificate in Community Quiz is a **verifiable credential**: a PDF a learner can download, an entry in your records, and a public web page that proves the credential is real. You design the look once (in the **Template Designer**), decide the rules for awarding it (on a quiz's **Certificate tab** or a course's **Certificate tab**), and the system issues it automatically when a learner earns it.

---

## 1. The big picture

There are two ways a certificate is awarded:

| Source | When it is issued |
|--------|-------------------|
| **A quiz or exam** | When a learner's graded attempt meets the award score. |
| **A course** | When a learner meets the course's completion rules. |

Either way, the same thing happens behind the scenes:

```
Learner earns it  →  A credential is created  →  A PDF is rendered
   →  An email goes out (optional)  →  A public verification page goes live
```

Each credential gets a unique **credential ID** (for example `CQ-2026-00064`), a validity period, and a public link anyone can use to check it. The learner can download the PDF any time from their results area.

> **One thing worth knowing up front:** a credential records the learner, the source, the score, and the dates as they were at the moment it was issued. Re-designing the template later changes how *future* certificates look, but the facts on an issued credential stay fixed.

---

## 2. Turning certificates on

You enable certificates per quiz or per course, not globally.

- **For a quiz or exam:** open the **Certificate tab** in the [Quiz Builder](./quiz-builder.md#7-certificate-tab--rewarding-a-pass) and turn on **Issue a certificate for this exam**.
- **For a course:** open the **Certificate tab** in the [Course Builder](./course-builder.md#5-certificate-tab--credentials) and turn on **Award certificate**.

Each of these unlocks the award rules below and lets you pick which **credential template** (design) to use.

### Award rules (quizzes)

| Setting | What it means | Default |
|---------|---------------|---------|
| **Award when score ≥** | The minimum percentage that earns the certificate. | The quiz pass mark |
| **Validity period** | How long it stays valid: 6 months, 1 year, 2 years, or no expiry. | 1 year |
| **CPD / CE credits** | Continuing-education hours printed on the certificate. | 3 |
| **Require manual approval** | Hold the certificate until a reviewer approves it, instead of issuing automatically. | Off |
| **Re-issue on retake** | Replace the certificate if a later attempt scores higher. | On |
| **Issue for prior passes** | Back-fill certificates for learners who already passed before you switched this on. | Off |

### Award rules (courses)

A course issues its certificate when the learner's enrolment is marked **completed**. What "completed" means is set by the course's completion rules (all required lessons, a percentage of progress, or passing the final exam), optionally combined with extra gates like a minimum time on the course or manual approval. See the [Course Builder](./course-builder.md#5-certificate-tab--credentials) for the full list. Courses default to **6** CPD hours.

> **Tip:** "Require manual approval" is useful for high-stakes credentials. With it on, the learner finishes and the credential waits in your queue until a person approves it. With it off, the certificate is issued the instant the rules are met.

---

## 3. Designing the certificate (Template Designer)

The look of every certificate comes from a **credential template**. You can reuse one template across many quizzes and courses, or design a different one for each. To edit a design, open the **Template Designer** (the **Open template designer** / **Edit this template** button on the Certificate tab, or the **Certificate Templates** area in the admin).

The designer has a **live preview** on one side and these controls on the other.

### Start from a preset

Pick one of four starting points, then adjust anything you like:

| Preset | Style |
|--------|-------|
| **Modern** | Indigo accent, a soft background glow, a fine border, and a holographic seal. Clean and contemporary. |
| **Classic** | Navy accent, a flat background, a double border, and a solid seal. Formal and traditional. |
| **Minimal** | Slate accent, no background, no border, no seal. Typography only. |
| **Foil deluxe** | Gold accent, a diagonal wash, an ornate frame, and a holographic seal. The premium look. |

Choosing a preset fills in sensible defaults for the controls below. From there, everything is adjustable.

### The controls

| Control | What it does |
|---------|--------------|
| **Template name** | An internal name so you can find it later. |
| **Accent colour** | The main colour, used for the title, the seal, and the border. Pick a swatch or type a hex code. |
| **Background** | **Plain** (flat), **Soft glow** (a gentle wash), **Guilloche** (fine engraved lines, like banknotes), or **Gradient** (a diagonal wash). |
| **Border** | **None**, **Hairline** (a thin line), **Double** (a two-line frame), or **Ornate** (an outer line plus an inset inner frame). |
| **Seal** | **Holographic** (a rainbow ring), **Classic** (a solid ring), **Monogram** (your organisation's initials), or **None**. |
| **Fields to show** | Toggles for **Score**, **Result** (Pass/Fail), **Issue date**, **Expiry date**, and **CPD credits**. Only the ones you switch on appear. |
| **Title** | The line above the learner's name, e.g. "Certificate of Achievement". |
| **Body text** | The sentence under the name. Supports the placeholders in the next section. |
| **Organisation name** | Printed at the top of the certificate. |
| **Signatories** | Up to two signers, each with a **name** and a **title** (e.g. "Jane Smith / Program Director"). A signatory with no name is left off automatically. |
| **Verification QR** | Show a QR code that links to the public verification page. |
| **Credential ID** | Show the `CQ-…` ID in the footer. |
| **Page** | A4 **landscape** (the default) or A4 **portrait**. |

### Placeholders for the body text

In the **Title** and **Body text** fields you can drop in placeholders that are filled per learner when the PDF is made:

| Placeholder | Becomes |
|-------------|---------|
| `{{name}}` | The learner's name |
| `{{exam}}` | The quiz or course title |
| `{{score}}` | The learner's score |
| `{{result}}` | Pass or Fail |
| `{{date}}` | The issue date |
| `{{expiry}}` | The expiry date |
| `{{credential_id}}` | The credential ID |
| `{{verify_url}}` | The public verification link |
| `{{org}}` | Your organisation name |

> **Example body:** `This certifies that {{name}} has successfully completed {{exam}}.`

---

## 4. How the certificate is printed (and what to expect)

Certificates are generated as **PDF** files using a built-in engine. The engine is reliable and self-contained (it needs no internet connection to render), but it is deliberately conservative about visual effects, so a few things are worth knowing:

- **Backgrounds** (soft glow, gradient, guilloche) are drawn as images behind the card, so they print exactly as previewed. If your server is missing the PHP image library (GD), backgrounds fall back to a flat colour automatically. Nothing breaks.
- **The holographic seal** is a finely segmented rainbow ring, not a smooth gradient, because the PDF engine cannot draw true gradients. It still looks like foil.
- **The ornate border** is an outer line plus an inset inner frame.
- **Fonts** use a clean built-in typeface (Helvetica), so certificates look identical on every server with no font installation needed.
- **Long names** are centred and sized to fit.

You do not need to configure any of this, and there is no PDF engine to choose: certificates always use the built-in, pure-PHP renderer so they work on every host. It is handled for you; the preview is what you get.

---

## 5. Public verification

Every credential has a public page anyone can open to confirm it is genuine. This is what turns a nice-looking PDF into a *trustworthy* credential: an employer or registrar can check it without contacting you.

The link looks like `…&view=verify&credential_id=CQ-2026-00064`, and the certificate's QR code points to it. The page shows:

- The **credential ID** and a clear **status** badge.
- The **holder's name**.
- The **issue date**, **expiry date**, **score**, and **CPD hours**.
- A short **proof hash** and a count of how many times the credential has been verified.
- Whether the credential is also available as an **Open Badge** (see below).

The status badge is one of:

| Status | Meaning |
|--------|---------|
| **Valid** | Active and not expired. |
| **Expiring** | Active but within 30 days of its expiry date. |
| **Expired** | Past its expiry date. |
| **Revoked** | Cancelled by an administrator, with the reason shown. |

If someone types in an ID that does not exist, the page offers a search box to try another. The verification page works whether or not the person is logged in.

---

## 6. Sharing as an Open Badge

When **Open Badge 3.0** is enabled on the Certificate tab, each credential also carries a standards-based **Open Badge** payload. This is a portable, machine-readable version of the credential that digital wallets and credential platforms (such as the services that add badges to a LinkedIn profile) can import. The badge points back to the same public verification page, so it stays verifiable wherever it travels.

> **Note:** the Open Badge is generated and served with the credential, and the verification page shows when a credential is badge-enabled. Pushing a badge into a specific wallet or social profile is done by the learner through that platform's "add a credential" importer, using the public link or the badge data. An optional **xAPI statement** can also be prepared for organisations that run a Learning Record Store; this is an advanced option that depends on your own LRS setup.

---

## 7. Managing issued credentials (admin)

The admin **Certificates** area lists every credential you have issued, with filters for **Active**, **Expiring (under 30 days)**, **Expired**, and **Revoked**, plus the holder and score. From here you can:

- **Issue a credential manually** for a specific learner and quiz/course (useful for offline achievements or corrections).
- **Approve** credentials that are waiting, when "Require manual approval" is on.
- **Renew** a credential to extend its expiry.
- **Revoke** a credential, choosing a reason: **Integrity violation**, **Issued in error**, **Holder request**, **Expired policy**, or **Superseded**. A revoked credential immediately shows as revoked on its public page.
- View the **audit trail** for any credential (every issue, renewal, and revocation is logged).

> **Re-issue on retake:** with this on (the default for quizzes), a learner who retakes and scores higher gets an updated credential, and the older one is superseded. With it off, the first qualifying result is the one that stands.

---

## 8. What the learner sees

1. **They earn it.** They pass the exam (or complete the course). If approval is required, they see the credential as pending until you approve it.
2. **They are notified.** If **Email certificate on issue** is on, they receive an email with a link to the credential (and, where configured, the PDF).
3. **They download it.** From their results / certificates area, they can download the PDF at any time. A learner can only download their own active credentials.
4. **They share it.** They can hand someone the public verification link or QR code, or import the Open Badge into a wallet or profile.

---

## 9. Common setups

**A simple course-completion certificate.** Course Certificate tab: Award certificate on. Template: *Modern*. Validity: no expiry. Show fields: Issue date only. Email on issue: on.

**A professional certification with CPD and an expiry.** Quiz Certificate tab: Award when score ≥ the pass mark, Validity 1 year, CPD 8 hours, Re-issue on retake on. Template: *Foil deluxe* with Score, Result, Issue date, Expiry date, and CPD all shown. Open Badge on. Renewal reminder set so holders are nudged before expiry.

**A high-stakes credential a person must approve.** Quiz Certificate tab: Require manual approval on. The learner finishes, the credential waits in your Certificates queue, and you approve each one after your own checks.

**A clean, formal look with no decoration.** Template Designer: preset *Minimal*, Border None, Seal None, Background Plain, a single signatory, Credential ID shown in the footer.

---

## 10. Troubleshooting

- **No certificate was issued.** Check that the Certificate tab is switched on, that the learner's score met **Award when score ≥**, and that the attempt is fully **graded** (an attempt with essays or uploads waiting to be marked is not final yet, so the certificate waits too). If **Require manual approval** is on, the credential is waiting for you to approve it.
- **The background or seal looks flat.** Your server may be missing the PHP image library (GD), so backgrounds fell back to a flat colour. This is cosmetic only; ask your host to enable GD.
- **The verification page says "not found".** Make sure you are using the full credential ID exactly as printed, including the `CQ-` prefix. The system handles the hyphens in the ID for you.
- **A learner says the wrong name is on the certificate.** The name is captured when the credential is issued. Fix the user's account name, then re-issue (or revoke and re-issue) the credential.
- **The design changed but old certificates did not.** That is expected: issued credentials keep their original look and facts. Only newly issued ones use the updated template.

---

## Related

- [Quiz & Exam Builder](./quiz-builder.md#7-certificate-tab--rewarding-a-pass) - the Certificate tab for exams.
- [Course Builder](./course-builder.md#5-certificate-tab--credentials) - the Certificate tab for courses.
- [Scoring Guide](./scoring-guide.md) - how the score that earns a certificate is calculated.
- [Grading & Review](./grading.md) - how human-marked questions are finalised before a certificate can issue.
