# UBA Implementation Plan

## Phase 0 — Architecture and governance (current)

- [x] Separate UBA from PBF at repository and infrastructure level.
- [x] Record proposed architecture, data model, access model, design system and security requirements.
- [ ] Confirm legal/registered name and permitted organisational status.
- [ ] Approve constitution and appointment/decision authority.
- [ ] Confirm public contact channels and domain.

## Phase 1 — Visual foundation and public website

- [ ] Inspect approved logo source files and prepare responsive assets.
- [ ] Implement Next.js + TypeScript foundation.
- [ ] Implement design tokens and shared components.
- [ ] Build homepage and navigation.
- [ ] Build About, Leadership, Chapters, Policy, FPCCI Elections, News, Documents and Contact pages.
- [ ] Use draft/unpublished state for proposed leaders and unapproved claims.
- [ ] Add accessibility, SEO and responsive tests.
- [ ] Obtain institutional design/content approval.

## Phase 2 — CMS and administrative access

- [ ] Integrate Payload CMS and PostgreSQL.
- [ ] Configure user authentication and MFA for privileged roles.
- [ ] Implement RBAC and scoped chapter permissions.
- [ ] Add content review and publication workflow.
- [ ] Add audit event recording.
- [ ] Add media management and private document handling.

## Phase 3 — Membership and chapters

- [ ] Implement organisation and member records.
- [ ] Implement membership applications and review.
- [ ] Implement provincial, regional and sectoral chapter hierarchy.
- [ ] Implement chapter-level administration and reporting.
- [ ] Implement notices and transactional email.

## Phase 4 — Governance and election information

- [ ] Implement appointments and effective-date history.
- [ ] Implement resolutions and signatory records.
- [ ] Implement policy publication workflows.
- [ ] Implement FPCCI election information and candidate profiles.
- [ ] Implement campaign news and event records.
- [ ] Confirm electoral content and claims against applicable rules.
- [ ] Do not implement online voting.

## Phase 5 — Production readiness

- [ ] Configure independent UBA domain and DNS.
- [ ] Configure production database and object storage.
- [ ] Configure email authentication.
- [ ] Configure monitoring and backups.
- [ ] Complete security, privacy, accessibility and performance checks.
- [ ] Conduct user acceptance testing.
- [ ] Document deployment, rollback and recovery.
- [ ] Obtain launch approval.

## Delivery discipline

Work in small reviewable increments. Each phase should produce working software and a documented acceptance check. Do not build all modules in one unreviewed code generation pass.

Do not deploy to the PBF domain or infrastructure.
