import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wellfind Academic",
  description:
    "Read the Wellfind Academic Terms & Conditions for parents, students and teachers using our home-tuition matching platform.",
  openGraph: {
    title: "Terms & Conditions | Wellfind Academic",
    description:
      "The terms that apply when you use Wellfind Academic as a parent, student or teacher.",
    url: `${siteConfig.url}/terms-and-conditions`,
  },
};

const SECTIONS: Array<{ title: string; body: React.ReactNode }> = [
  {
    title: "1. About Wellfind Academic",
    body: (
      <p>
        Wellfind Academic is a managed one-to-one home-tuition platform for
        students from UKG to Class 10. We connect families with teachers who
        have been reviewed by our team. These terms apply to everyone who uses
        our website, submits an enquiry or applies to teach with us.
      </p>
    ),
  },
  {
    title: "2. Accepting these terms",
    body: (
      <p>
        By ticking the agreement box on a form or by using the website, you
        confirm that you have read and accepted these Terms &amp; Conditions
        and our{" "}
        <Link href="/privacy-policy/" className="text-[#101D36] underline font-medium hover:text-[#0F6F63]">
          Privacy Policy
        </Link>
        . If you do not agree, please do not submit any form.
      </p>
    ),
  },
  {
    title: "3. Information you provide",
    body: (
      <p>
        You agree that the details you submit are true, accurate and your own.
        Wellfind Academic may decline or close an enquiry or application that
        contains false, misleading or incomplete information.
      </p>
    ),
  },
  {
    title: "4. For parents and students",
    body: (
      <ul className="list-disc pl-5 space-y-1.5 text-[#53647D]">
        <li>An enquiry is a request for help; it is not a guarantee that a teacher will be available.</li>
        <li>Our team will contact you to verify requirements before any teacher is suggested.</li>
        <li>Tuition fees and any optional assessment are discussed and confirmed with you before they begin.</li>
        <li>You are expected to share accurate student, schedule and location details.</li>
      </ul>
    ),
  },
  {
    title: "5. For teachers",
    body: (
      <ul className="list-disc pl-5 space-y-1.5 text-[#53647D]">
        <li>
          Submitting the &quot;Join as a Teacher&quot; form is an application,
          not an offer of work. Approval is at the sole discretion of Wellfind
          Academic.
        </li>
        <li>
          Your application may be reviewed by phone, a basic screening test and
          an interview. You may be shortlisted, approved, rejected or asked for
          more information.
        </li>
        <li>
          Identity and qualification documents are collected later, through
          your teacher account, if your application moves forward. Providing
          genuine documents is a condition of approval.
        </li>
        <li>
          Fees, payment schedules and Wellfind Academic&apos;s service
          commission are shared with you and agreed before any allocation
          starts.
        </li>
        <li>
          You agree to follow the agreed schedule, behave professionally and
          respectfully with students and families, and not arrange tuition
          with a family introduced by Wellfind Academic outside the platform
          without informing us.
        </li>
      </ul>
    ),
  },
  {
    title: "6. Conduct",
    body: (
      <p>
        You agree not to misuse the website, submit spam or fraudulent
        enquiries, harass our team, parents, students or teachers, or attempt
        to access systems or data you are not authorised to use.
      </p>
    ),
  },
  {
    title: "7. Privacy and data",
    body: (
      <p>
        We handle personal information as described in our{" "}
        <Link href="/privacy-policy/" className="text-[#101D36] underline font-medium hover:text-[#0F6F63]">
          Privacy Policy
        </Link>
        . You can ask us to review, update or delete your details at any time.
      </p>
    ),
  },
  {
    title: "8. Limitation of responsibility",
    body: (
      <p>
        Wellfind Academic works to introduce suitable, reviewed teachers, but
        we cannot guarantee specific academic results. To the extent permitted
        by law, we are not liable for indirect or consequential losses arising
        from the use of the website or from arrangements made between families
        and teachers.
      </p>
    ),
  },
  {
    title: "9. Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The latest version will
        always be available on this page with its &quot;last updated&quot;
        date. Continued use of the website after a change means you accept the
        updated terms.
      </p>
    ),
  },
  {
    title: "10. Contact us",
    body: (
      <p>
        For questions about these terms, please reach out through our{" "}
        <Link href="/contact/" className="text-[#101D36] underline font-medium hover:text-[#0F6F63]">
          Contact Page
        </Link>
        .
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="mb-6" />
          <div className="max-w-4xl space-y-4">
            <Badge variant="subtle" size="md">
              <FileText className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
              Clear &amp; Fair
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-[#344054] leading-relaxed">
              Last updated: November 2026. These terms explain the rules for
              using Wellfind Academic as a parent, student or teacher.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 sm:p-10 space-y-8 bg-white border-[#D7E2EE] text-[#344054] text-sm sm:text-base leading-relaxed">
            {SECTIONS.map((section, index) => (
              <div
                key={section.title}
                className={`space-y-3 ${index > 0 ? "border-t border-[#D7E2EE] pt-6" : ""}`}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#101D36]">{section.title}</h2>
                {section.body}
              </div>
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
}
