# About Wellfind Academic

## What Is This Project?

**Wellfind Academic** is a Next.js 16 marketing and lead-generation website built for **home tuition tutoring services in Patna, Bihar, India**. It helps parents discover, evaluate, and inquire about qualified home tutors for their children — from UKG (Upper Kindergarten) through Class 10 — across CBSE, ICSE, and Bihar State Board curricula.

The project is bootstrapped with `create-next-app` and uses:

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.4.0 | React framework (App Router, SSR, ISR, Turbopack) |
| React | 19.3.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Lucide React | ^1.56.0 | Iconography |

## Why This Project Exists

### The Problem

Parents in Patna often struggle to find a suitable home tutor matched to their child's specific class, subject, board, location, schedule, and budget. Word-of-mouth recommendations are scarce, commercial coaching classes pack dozens of students into one room, and families frequently cannot find a teacher who can reliably visit their specific locality on time.

### The Solution

Wellfind Academic simplifies the tutor discovery process by:

- **Collecting parent requirements** — child's grade, subject needs, preferred Patna locality, schedule, and language preference
- **Matching teachers based on realistic criteria** — academic stage, syllabus, geographical proximity, schedule availability
- **Offering an introductory session** — so parents and students can observe the tutor's teaching style before committing
- **Providing honest, no-exaggeration coordination** — no fake reviews, no fabricated testimonials, no guaranteed results that cannot be backed up

### Brand Positioning

- **Tagline:** *"Apne Bachche Ke Liye, Sahi Teacher Chuniye."* (For Your Child, Choose the Right Teacher.)
- **Sub-tagline:** Find a suitable home tutor for your child's class, subject, and location from UKG to Class 10.
- **Business model:** Marketing and lead-generation platform — not a tutoring marketplace, not a teacher-management application, and not a payment processing system.
- **Primary market:** Patna, Bihar, India (service areas: Kankarbagh, Danapur, Boring Road, Raja Bazar, Hartali Mor, Patna Central)
- **Target audience:** Parents and guardians looking for home tuition; secondary audience includes teachers interested in connecting with student requirements

## Core Features

1. **Homepage** — Hero section, How It Works (4-step journey), Trust Metrics, Patna service locations, Progress Tracking, Teachers section, FAQs, and an embedded inquiry form
2. **About Page** — Mission, philosophy, service areas, boards served, and direct inquiry/ WhatsApp CTA
3. **Class Pages** (UKG–Class 10) — Board-specific curriculum focus, key subjects, learning outcomes, and teaching approach for each grade
4. **Locality Pages** — Local SEO–optimized pages for Kankarbagh, Danapur, Boring Road, Raja Bazar, and Hartali Mor with neighborhood context and landmarks
5. **Contact Page** — Inquiry form with WhatsApp and phone CTA integration
6. **Inquiry System** — Multi-step tutor enquiry form with validation, progress tracking, and modal-based submission
7. **SEO & Performance** — Sitemap, robots.txt, canonical URLs, Open Graph metadata, and structured data for each page

## What This Project Is NOT (Non-Goals)

The initial release explicitly does **not** include:

- Student accounts or teacher accounts
- Admin dashboard or custom backend application
- Custom database or automated teacher allocation
- Online payments or live teacher availability management
- Full tutoring marketplace or complex booking calendar
- Mobile applications

These may be considered later after demand and the operating model are validated.

## Contact & Lead Delivery

Contact details (phone, WhatsApp, email, address, lead endpoint) are **strictly environment-configured** and not published until confirmed. The inquiry mechanism delivers leads through a configurable endpoint, with WhatsApp and phone click-through actions available on every page.

## License

Private project. All rights reserved.