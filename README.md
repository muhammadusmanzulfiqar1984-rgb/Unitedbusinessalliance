# United Business Alliance (UBA)

**National Business, Trade & Economic Advisory Council**

A national business platform for a stronger Pakistan.

This repository contains the independent UBA website and institutional administration platform. It is separate from Pakistan Business Forum (PBF) and must not alter, rebrand, or share an administrative database with the PBF website.

## Project status

**Phase 0 — Architecture and foundation.** This initial commit establishes the technical and governance documentation. Production application code will follow after the design system and homepage are reviewed.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database model](docs/DATABASE.md)
- [Roles and permissions](docs/RBAC.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Security plan](docs/SECURITY_PLAN.md)
- [Implementation roadmap](docs/IMPLEMENTATION_PLAN.md)
- [Governance and content controls](docs/GOVERNANCE.md)

## Proposed stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Payload CMS for editorial content and administrative workflows
- PostgreSQL
- Secure session-based authentication with MFA for privileged users
- S3-compatible object storage
- Cloudflare for DNS, CDN and edge protection
- Vercel or equivalent managed application hosting

Architecture decision: begin with a **modular monolith**, not microservices.

## Local development

Application setup instructions will be added with the first application-code commit. Do not install dependencies or configure production credentials until the runtime versions and hosting target have been verified.

## Institutional accuracy

Do not publish unverified claims of government recognition, statutory status, FPCCI endorsement, membership totals, partnerships, office addresses, contact details, appointments or achievements. Proposed office-bearers remain unpublished until the relevant approvals are documented.

## Separation requirement

- PBF remains an independent organisation and keeps its current website and infrastructure.
- UBA uses its own domain, repository, hosting, database, credentials, analytics and administration.
- Do not import PBF member records, logos, partner claims, content or private data into UBA without documented authority and permission.
