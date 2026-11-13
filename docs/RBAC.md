# UBA Roles and Access Control

Use deny-by-default, least-privilege RBAC with optional resource scope. A role name alone is not sufficient to authorise a consequential institutional decision.

## Proposed roles

| Role | Normal access |
|---|---|
| Platform Administrator | Technical configuration, user provisioning and platform operations |
| Chairman | Institutional review/approval only where constitution or resolution delegates it |
| Co-Chairman | Explicitly delegated review/approval powers |
| Secretary General | Secretariat operations, records, workflow coordination |
| Additional Secretary General | Delegated Secretariat tasks |
| Finance Secretary | Finance-related records and approved financial workflows |
| Spokesperson | Approved public statements and media content |
| Chapter Administrator | Assigned chapter records only |
| Membership Reviewer | Assigned membership applications |
| Policy Editor | Draft policy and publication content |
| Media Editor | Draft news and press release content |
| Read-only Auditor | Read access to approved audit and governance records |

These roles are proposals for the application design, not legal definitions or proof that any person holds the position.

## Permission examples

- `content.read`
- `content.create`
- `content.edit_own_draft`
- `content.submit_review`
- `content.approve`
- `content.publish`
- `membership.read`
- `membership.review`
- `membership.request_information`
- `membership.approve`
- `membership.reject`
- `leadership.read`
- `leadership.propose_appointment`
- `leadership.approve_appointment`
- `governance.resolution.create_draft`
- `governance.resolution.adopt`
- `finance.read`
- `finance.manage`
- `chapter.manage_scoped`
- `elections.manage_content`
- `users.manage`
- `audit.read`
- `system.configure`

## Separation of duties

1. The person proposing an appointment should not be able to mark it approved unless the governing rules explicitly permit it.
2. A content editor can draft a press release but cannot publish it without the configured approval.
3. Finance Secretary access must not imply authority to approve their own reimbursements or payment requests.
4. Platform Administrator access does not imply authority to decide membership, appointments or policy.
5. Chapter administrators are limited to assigned chapters.
6. Audit events cannot be edited or deleted by ordinary administrators.

## Approval workflows

Use explicit workflow rules for membership acceptance, appointments, resolutions, official statements and financial actions. Bind each workflow to the authority defined in the approved constitution or subsequent resolutions. Until then, use configurable placeholders and prevent the website from presenting unapproved positions or persons as confirmed.
