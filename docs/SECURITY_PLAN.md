# UBA Security Plan

## Baseline controls

- HTTPS enforced throughout.
- Secure, HttpOnly, SameSite cookies for sessions.
- MFA required for privileged users.
- Password hashing delegated to a maintained authentication implementation.
- CSRF protection for state-changing requests where applicable.
- Server-side schema validation on all input.
- Output encoding and sanitisation.
- Rate limits for login, password reset and public submissions.
- Secure headers and content security policy.
- File type, size and content checks for uploads.
- Private files delivered only through authorised access.
- Secrets stored in hosting secret management, never committed.
- Database network access restricted to application infrastructure.
- Encrypted backups with documented restoration tests.
- Dependency and vulnerability scanning.
- Audit events for privileged and consequential actions.

## Privacy

Collect only information needed for membership or administration. Provide an understandable privacy notice, retention periods, consent where required, access controls and a documented deletion/correction process subject to applicable recordkeeping obligations.

Do not collect CNIC, financial or other sensitive information in public forms by default. Add such fields only after legal and operational necessity is documented.

## Environment separation

Local, preview/staging and production must have distinct:
- Databases
- Credentials
- Storage buckets
- Email sender configuration
- Analytics properties
- Secret keys

No production database export should be used in development without a controlled anonymisation process and documented approval.

## Audit and governance

Audit logs should record actor, action, target, time, outcome and relevant correlation ID. Do not log passwords, session tokens, full payment details or unnecessary personal data.

Appointment approvals and resolutions should be versioned and traceable. Published public content must reference an approved record where required.

## Release gates

Before production:
1. Dependency and secret scans pass.
2. Role/permission tests pass.
3. Authentication and session tests pass.
4. Form validation and rate-limit tests pass.
5. Upload controls are verified.
6. Backup restore is tested.
7. Accessibility and responsive checks pass.
8. Privacy notice and terms are reviewed.
9. Domain ownership and email authentication are verified.
10. Security review is signed off by an accountable operator.

This is an engineering plan, not a certification or guarantee of legal compliance.
