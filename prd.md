# Wellfind Academic — Website PRD

## 1. Product Overview

**Product:** Wellfind Academic Marketing Website  
**Domain:** `wellfindacademic.com` (intended; registration not confirmed)  
**Business Category:** Education Services & Teacher Matching  
**Primary Market:** Patna, Bihar, India  
**Target Classes:** UKG to Class 10  
**Primary Service:** Helping parents find suitable home tutors.

### Brand tagline
“Apne Bachche Ke Liye, Sahi Teacher Chuniye.”

### Product vision
Build a fast, modern, trustworthy and local-SEO-friendly website that helps parents discover Wellfind Academic, understand the service and submit a tuition inquiry with minimal effort.

### Core business objective
Generate qualified parent inquiries and convert them into successful teacher matches.

The website is a marketing and lead-generation platform, not a tutoring marketplace or a teacher-management application.

---

## 2. Problem Statement

Parents may struggle to find a suitable home tutor according to their child's class, subject, location, schedule and budget.

Wellfind Academic will simplify this discovery process by collecting parent requirements and helping identify suitable teachers where available.

The website must answer three questions quickly:

1. What does Wellfind Academic do?
2. Can it help my child in my area?
3. How do I enquire for a tutor?

---

## 3. Target Audience

### Primary audience
Parents and guardians looking for home tuition for children in UKG–Class 10.

### Secondary audience
- Parents searching for tuition in a specific locality.
- Parents looking for class- or subject-specific support.
- Teachers interested in connecting with student requirements.

### User expectations
- Clear service explanation.
- Simple navigation.
- Mobile-friendly interface.
- Easy WhatsApp, phone and form-based inquiries.
- Honest information about service availability.

---

## 4. Brand Identity and Color System

### Brand direction: Modern Academic

The visual identity must feel professional, trustworthy, fresh and approachable. Avoid the appearance of a generic coaching-centre template or a children's toy website.

### Official brand palette

| Token | Hex | Purpose |
|---|---|---|
| Primary | `#14532D` | Logo, primary headings, footer |
| Accent | `#16A34A` | CTA buttons and interactive elements |
| Background | `#F7F5EE` | Main background |
| Text | `#252923` | Primary text |
| Soft Green | `#DCFCE7` | Highlights and supporting sections |
| White | `#FFFFFF` | Cards, forms and contrast areas |
| Secondary Text | `#475569` | Supporting copy and descriptions |

### Color usage rules
- Emerald green establishes the brand identity.
- Fresh green is used for primary actions, not every decorative element.
- Warm ivory creates a softer alternative to a completely white interface.
- Charcoal provides readable typography.
- Soft green is reserved for subtle backgrounds and informational highlights.
- Avoid excessive gradients, multiple competing accent colors and unnecessary shadows.

Text and button combinations must meet WCAG AA contrast requirements wherever applicable. Use a darker green for white text if the accent green fails contrast testing.

### Typography
- Primary font: Inter or a similar modern sans-serif.
- Headings: Semibold or bold.
- Body text: Regular, readable line height.
- Buttons: Medium or semibold.
- Use a consistent type scale across all pages.

### Logo direction
Use the approved symbol concept: a graduation cap combined with an abstract “W” and an open-book motif.

Logo requirements:
- Symbol-only variant.
- Horizontal logo with wordmark.
- Light-background and dark-background variants.
- SVG preferred for production.
- PNG fallback for social profiles.
- Favicon derived from the symbol.

The generated logo concept is a visual reference. Recreate or refine it as a clean vector asset before production; do not depend on a raster image for every use.

---

## 5. Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Rendering | Static Site Generation (SSG) |
| Icons | Lucide React |
| Form validation | Zod with React Hook Form, if appropriate |
| Hosting | Vercel or suitable static hosting |
| Analytics | Google Analytics 4 |
| Search monitoring | Google Search Console |
| Advertising measurement | Google Ads and Meta Pixel, subject to consent and configuration |

Use stable, mutually compatible package versions when implementation begins.

### Architecture principles
- Static generation for public marketing pages.
- Reusable components and typed content data.
- No application database or admin dashboard initially.
- No authentication or user accounts.
- No unnecessary client-side JavaScript.
- Avoid building a custom backend unless the chosen lead-delivery mechanism requires one.

Important: A static website can generate pages at build time, but it cannot independently persist form submissions. A form requires an external form service or a lightweight lead endpoint.

---

## 6. Website Information Architecture

### Main routes

- `/` — Homepage
- `/home-tuition/patna/` — Patna home tuition
- `/home-tuition/patna/kankarbagh/` — Kankarbagh home tuition
- `/home-tuition/patna/danapur/` — Danapur home tuition
- `/home-tuition/patna/boring-road/` — Boring Road home tuition
- `/home-tuition/patna/raja-bazar/` — Raja Bazar home tuition
- `/home-tuition/patna/hartali-mor/` — Hartali Mor home tuition
- `/classes/` — Class overview
- `/classes/ukg/` — UKG tuition
- `/classes/class-1/` through `/classes/class-10/` — Class-specific pages
- `/about/` — About Wellfind Academic
- `/contact/` — Contact and inquiries
- `/privacy-policy/` — Privacy policy

Add other routes only when they serve a genuine user need.

### URL rules
- Use lowercase, readable, hyphen-separated slugs.
- Use one canonical URL per page.
- Use trailing-slash conventions consistently.
- Avoid duplicate URLs for the same locality.
- Link locality pages to their parent city page and related pages.

Danapur and other localities must have accurate geographic descriptions. The route structure is an information-architecture choice, not a claim that all areas are administratively part of Patna city.

---

## 7. Homepage Requirements

The homepage must communicate the service and primary CTA without unnecessary scrolling or clutter.

### Section 1: Header

Elements:
- Symbol and wordmark.
- Home.
- Home Tuition.
- Classes.
- About.
- Contact.
- Primary CTA: “Find a Tutor”.

Mobile navigation must remain simple and accessible.

### Section 2: Hero

Suggested heading:

“Apne Bachche Ke Liye, Sahi Teacher Chuniye.”

Supporting copy:

“UKG se Class 10 tak apne bachche ki class, subject aur location ke according suitable home tutor dhoondhein.”

Primary CTA: “Find a Tutor”

Secondary CTA: “Enquire on WhatsApp”

Include a compact inquiry-start interface with:
- Student's class.
- Preferred locality.
- Continue to inquiry.

Do not claim guaranteed matches or guaranteed academic results.

### Section 3: How It Works

Three simple steps:

1. Share your requirements.
2. Explore suitable teacher options.
3. Confirm a suitable match.

Describe only the actual operational process.

### Section 4: Classes

Present UKG and Classes 1–10 through a clean, accessible layout.

Each class link must lead to a relevant class page.

### Section 5: Service Areas

Display the six confirmed initial service areas:
- Patna.
- Kankarbagh.
- Danapur.
- Boring Road.
- Raja Bazar.
- Hartali Mor.

Each locality card links to its dedicated page.

### Section 6: Why Wellfind Academic?

Explain the actual value proposition:
- Requirement-based teacher matching.
- Consideration of class and subject.
- Location and schedule preferences.
- Discussion of budget and teacher availability.

Avoid unsupported claims such as “100% verified teachers” unless a genuine verification process exists.

### Section 7: Frequently Asked Questions

Suggested topics:
- Which classes are supported?
- How do I request a home tutor?
- Which areas are served?
- How are teacher options identified?
- How are fees and schedules discussed?
- What happens if no suitable teacher is available?

Answers must reflect actual business policies.

### Section 8: Final CTA

Heading: “Looking for a Suitable Home Tutor?”

CTA: “Enquire Now”

Include WhatsApp and phone options where the business contact details are confirmed.

### Section 9: Footer

Include:
- Logo and tagline.
- Service links.
- Class links.
- Service-area links.
- Contact information.
- Privacy policy.
- Social profile links.

Do not show fabricated addresses, ratings or contact details.

---

## 8. Local Landing Page Requirements

Each locality page must be genuinely useful and relevant to its area.

### Required page content
1. Locality-specific H1 heading.
2. Introduction to the home-tuition service.
3. Supported classes and relevant subjects.
4. Local service information.
5. How to submit an inquiry.
6. Relevant FAQs.
7. WhatsApp and inquiry CTAs.
8. Internal links to related locations and class pages.

### Example metadata

For Kankarbagh:

**Title:** Home Tuition in Kankarbagh, Patna | Wellfind Academic

**Description:** Looking for a home tutor in Kankarbagh, Patna? Share your child's class, subject and schedule requirements with Wellfind Academic.

**H1:** Looking for a Home Tutor in Kankarbagh, Patna?

### Local SEO content rules
- Do not merely replace locality names in duplicated copy.
- Include accurate local context.
- Publish only where the business can realistically arrange teachers.
- Never invent teacher counts, testimonials, reviews or local office addresses.
- Use self-referencing canonical URLs.
- Add breadcrumbs where useful.
- Include location pages in the XML sitemap when indexable.

---

## 9. Inquiry and Lead Generation

### Inquiry fields

Required:
- Parent or guardian name.
- Contact number.
- Student's class.
- Preferred locality.
- Required subject or subjects.

Optional:
- Preferred teaching days or time.
- Budget range.
- Additional requirements.

Avoid collecting children's full names, exact home addresses or unnecessary sensitive information at the initial stage.

### Inquiry journey

1. Parent selects a class and locality.
2. Parent completes the short inquiry form.
3. The website validates the input.
4. The inquiry is delivered to the designated business contact or lead service.
5. A clear success or failure message is shown.
6. The business contacts the parent and checks teacher availability.
7. Suitable options are discussed with the parent.

### Lead-delivery options

Choose one before implementation:

- **WhatsApp-first:** Pre-filled WhatsApp message. The parent must send the message to submit it.
- **External form service:** Form submission is stored and delivered by the selected provider.
- **Lightweight lead endpoint:** A separate endpoint stores or forwards submissions securely.

Do not show a success message until submission has actually succeeded. Track form submissions, WhatsApp clicks and phone clicks separately.

---

## 10. Technical SEO Requirements

### On-page SEO
- Unique page titles and meta descriptions.
- One clear H1 per page.
- Semantic HTML structure.
- Descriptive internal links.
- Relevant image alt text.
- Canonical URLs.
- Open Graph metadata.

### Indexing
- XML sitemap.
- `robots.txt`.
- Google Search Console setup.
- Correct production domain configuration.
- No accidental `noindex` on public pages.
- No indexing of staging or preview environments.

### Structured data
Use valid, relevant Schema.org types only when supported by actual business details.

Potential types:
- `Organization`.
- `WebSite`.
- `BreadcrumbList`.
- `Service`, where appropriate.

Do not create fake `LocalBusiness` locations or use unsupported review and rating markup.

### Performance
- Optimize images and fonts.
- Prefer lightweight SVG icons.
- Minimize client components.
- Avoid large animation libraries.
- Reserve image dimensions to reduce layout shifts.
- Target good Core Web Vitals on mobile.

---

## 11. Social and Advertising Readiness

The website must support marketing through:
- Instagram.
- Facebook.
- Google Search.
- Eligible Google Business Profile presence.
- WhatsApp outreach.
- Paid search and social campaigns.

Requirements:
- Consistent logo, colors and tagline.
- Shareable Open Graph image.
- Dedicated landing pages for relevant ad campaigns.
- Clear privacy disclosures.
- Conversion tracking configured correctly.
- UTM support for campaign attribution.

Google Business Profile must represent the real business accurately and comply with eligibility rules. Do not create fake offices or service locations.

---

## 12. Security, Privacy and Accessibility

### Security
- Validate form data.
- Keep API keys and secrets out of client-side code.
- Use HTTPS in production.
- Apply spam prevention and rate limiting at the form endpoint or provider.
- Avoid exposing parent contact details in URLs or logs.
- Use a trusted lead-delivery service.

### Privacy
- Publish a clear privacy policy.
- Explain how inquiry details are used.
- Obtain appropriate consent before sharing parent contact details with teachers.
- Minimize collection of information about children.
- Configure analytics and advertising consent appropriately.

### Accessibility
- Keyboard-accessible navigation.
- Visible focus states.
- Labels for all form fields.
- Accessible validation and error messages.
- Appropriate color contrast.
- Useful alt text for meaningful images.

---

## 13. Performance and Success Metrics

### Technical targets
- Lighthouse Performance target: 90+ on representative pages, where achievable.
- Lighthouse Accessibility target: 90+.
- Valid metadata, canonical URLs and sitemap.
- Responsive layouts across mobile, tablet and desktop.
- No critical runtime or console errors.

These are targets to test, not guaranteed outcomes.

### Business metrics
- Total inquiries.
- Qualified parent inquiries.
- Cost per inquiry.
- Inquiry-to-teacher-match rate.
- Match-to-start rate.
- WhatsApp and phone click-through rates.
- Organic impressions and clicks by locality.
- Parent satisfaction and referral inquiries.

Traffic alone is not success. The priority is qualified inquiries and successful matches.

---

## 14. Non-Goals for the Initial Release

The following are explicitly out of scope:

- Student accounts.
- Teacher accounts.
- Admin dashboard.
- Custom backend application.
- Custom database.
- Online payments.
- Automated teacher allocation.
- Live teacher availability management.
- Full tutoring marketplace.
- Complex booking calendar.
- Mobile applications.

These may be considered later after demand and the operating model are validated.

---

## 15. Implementation Phases

### Phase 1 — Brand and Project Foundation
- Confirm logo assets.
- Set up Next.js and TypeScript.
- Configure Tailwind CSS.
- Define design tokens and typography.
- Establish reusable layout components.

### Phase 2 — Homepage
- Header and navigation.
- Hero and primary CTA.
- Class overview.
- Service-area cards.
- How-it-works section.
- FAQs and footer.

### Phase 3 — Local SEO Pages
- Build a reusable locality-page template.
- Add the six confirmed service areas.
- Add distinct content and metadata.
- Connect internal links.

### Phase 4 — Class and Supporting Pages
- UKG–Class 10 pages.
- About page.
- Contact page.
- Privacy policy.

### Phase 5 — Lead Generation
- Finalize inquiry fields.
- Integrate selected form-delivery mechanism.
- Configure WhatsApp and phone actions.
- Verify success and failure states.

### Phase 6 — SEO and Performance
- Sitemap and robots configuration.
- Canonical URLs.
- Structured data.
- Image and font optimization.
- Mobile accessibility testing.

### Phase 7 — Launch and Measurement
- Connect the production domain.
- Configure Search Console and analytics.
- Test inquiry delivery.
- Publish social profiles and campaign landing pages.
- Begin measured local marketing.

---

## 16. Definition of Done

The initial release is ready when:

- The site works on mobile, tablet and desktop.
- All approved public routes load correctly.
- Locality pages contain accurate, useful and distinct content.
- The brand palette is applied consistently.
- WhatsApp and phone CTAs work with confirmed contact details.
- The inquiry mechanism has been tested end to end.
- Metadata, canonical URLs and sitemap are valid.
- No fabricated business claims or testimonials appear.
- Privacy and accessibility requirements are addressed.
- Analytics and conversion tracking have been verified.
- The production website is indexable and Search Console is configured.

## 17. Key Decisions Still Required

Before launch, confirm:
- Final logo vector asset.
- Official business phone and WhatsApp number.
- Lead delivery method.
- Exact subjects and teacher availability by area.
- Actual business address or service-area representation.
- Budget and contact policies.
- Final homepage copy and layout.

**Product principle:** Build only what helps parents understand the service, trust the brand and submit an inquiry. Keep the initial website fast, focused, maintainable and easy to expand.
