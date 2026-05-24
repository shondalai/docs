---
id: weighted-voting
title: Weighted (proxy) voting
sidebar_label: Weighted voting
sidebar_position: 5
---

# Weighted (proxy) voting

_Introduced in Community Polls 7.1.0._

Weighted voting lets a single member cast one ballot that is counted as **more than one vote**. It was built for association and assembly votes where members may carry **proxies** for absent members: each voter makes one choice, and that choice counts for themselves plus everyone who delegated their vote to them.

The model is deliberately simple — there are **no separate proxy ballots** and **no "vote on behalf of" picker**. A member votes once; the system multiplies that vote by a weight the administrator assigned beforehand.

```
voting weight = 1 (the member's own vote) + number of proxies
```

A member may carry **0 to N proxies** (you choose the upper bound per poll — see [Setting the proxy limit](#setting-the-proxy-limit-per-poll)). The server's absolute ceiling is 100.

## Turning it on

1. Open the poll in the editor wizard.
2. Step through **Build → Design → Voting weights**.
3. Enable **Weighted (proxy) voting** at the top of the step.
4. Save the poll. **Draft** is the right status while you're still assigning proxies — assignments lock the moment the poll goes Live.

Enabling weighted voting changes how the poll behaves:

- **Login is required.** A guest has no account to attach a proxy weight to, so guests cannot vote on a weighted poll.
- **One ballot per member**, always — regardless of the per-poll restriction method. The weighting model relies on each member voting exactly once.

## Assigning proxies

Proxy assignments live directly inside the **Voting weights** wizard step — there's no separate page to visit.

- Use **Add a member** to search by name, username, or email and add a member with a chosen proxy count.
- Each row has a proxy selector. The **Weight** column shows the derived `1 + proxies`.
- Remove a member to revert them to a plain weight of 1.

### Setting the proxy limit per poll

A number field at the top of the assignments card — **Maximum proxies per member** — controls the upper bound of the proxy selector. Default is 5. Pick whatever your by-laws permit (1 to 100). The value is **not saved** with the poll: it's a UI knob that just shapes the dropdown so you aren't scrolling past a hundred entries when your rule allows three.

The field can never be lowered below the highest already-saved proxy on the poll, so you can't accidentally hide a member's existing assignment.

### Importing from a CSV

Click **Import CSV** to bulk-load proxy assignments. The file has two columns — a header row is optional:

```
email,proxy_count
mario.rossi@email.it,5
anna.bianchi@email.it,2
```

Importing is a two-step process:

1. **Preview** — every row is matched against a Joomla user account. Matched and skipped rows are listed so you can review them before committing. Rows are skipped when the email is invalid, the proxy count is not a whole number, the count exceeds the server's hard ceiling, the email matches no member account, or the email is duplicated within the file.
2. **Import** — only the matched rows are written.

### Once the poll goes Live

The same Voting weights step renders as a **read-only mirror**: the toggle disables, a "locked" notice appears, and the assignments table still shows every member and proxy count but hides the add-member box, the CSV import button, the proxy selectors, and the remove buttons. To change assignments again, move the poll back to **Draft** on the Publish step.

This is enforced by the server too — every weight-mutation request is refused while the poll is Live or Closed. The guarantee is that the tally can never be disputed because delegations are fixed before voting opens.

## The audit report

The audit report lives on the poll's **Results** page, in the **Voting weights** section at the bottom — it only appears once a weighted poll is collecting (or has collected) ballots. For every member who holds a proxy assignment or has cast a vote it confirms:

| Column | Meaning |
| ------ | ------- |
| Member | Display name / username |
| Email  | Account email |
| Proxies | Proxies assigned |
| Weight | Effective voting weight (`1 + proxies`) |
| Voted  | Whether the member has cast a ballot (Yes / No) |

The report **never shows which option a member chose** — the ballot stays secret. Use **Export audit CSV** for an offline copy.

## Weighted results

The Results page's **Voting weights** section also shows the tally for the poll:

- The **weighted total** per option is the primary figure.
- The **raw ballot count** is reported alongside it.
- Percentages are computed against the weighted total.

Results for a weighted poll are an administrator-only view. Individual ballots remain secret; the tally never reveals who chose what.

## Post-vote confirmation for voters

For polls where results should not be visible to voters (the typical association-vote setup), turn off **Show results after vote** in the editor. Voters then see a short confirmation card instead of any tally after submitting. You can customise the confirmation message via the poll's **End message** field — if it's left blank, a generic "Thank you. Your vote has been recorded." is shown.

## How the weight is recorded

Each ballot **snapshots** the weight it was cast at. If a member's proxy count is changed later (while the poll is still unpublished), ballots already recorded keep the weight they were counted with — a reassignment never silently rewrites a tally.

## Permissions

- Reading the Voting weights panel (and the Results page section) requires `core.manage` on the component.
- Changing proxy assignments — adding members, editing counts, importing CSVs — requires `core.edit`.

The server clamps every assignment to its hard ceiling and refuses every mutation against a Live or Closed poll, regardless of the user's role.

## Data model

| Object | Purpose |
| ------ | ------- |
| `#__communitypolls_vote_weights` | One row per `(poll, member)` proxy assignment |
| `#__communitypolls_votes.weight` | The weight each ballot was cast at (default 1) |
| Poll attribute `weighted_voting` | Per-poll on/off flag |

Non-weighted polls are unaffected: every ballot carries a weight of 1, so the weighted sum equals the raw count.
