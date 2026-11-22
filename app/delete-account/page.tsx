import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Globe, Trash2, Archive, Clock } from "lucide-react";
import { siteConfig, CONTACT_EMAIL } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DeleteAccountRequestForm } from "@/components/delete-account/DeleteAccountRequestForm";

export const metadata: Metadata = {
  title: "Delete your account and data",
  description:
    "How to delete your Wellfind Academic account and personal data: delete from the Wellfind Academic app or send a request on this page. Learn what is deleted and what is kept.",
  alternates: { canonical: `${siteConfig.url}/delete-account` },
  openGraph: {
    title: "Delete your account and data | Wellfind Academic",
    description: "Delete your Wellfind Academic account or request deletion of your personal data.",
    url: `${siteConfig.url}/delete-account`,
  },
};

const DELETED = [
  "Your login account and profile photo",
  "Uploaded documents such as ID and qualification proofs",
  "Notifications and the phones registered for notifications",
  "Your name, phone number and e-mail address on teacher applications, teacher profiles, student and parent records, enquiries and payment records",
  "Free-text notes you or our team entered about you",
];

const KEPT = [
  "Payment amounts, receipts, gateway references and payout records. They are kept without your name, phone number or e-mail, because accounting and tax rules require us to keep financial records.",
  "Anonymous class and allocation history (for example, that a class took place), so that other people's records stay correct.",
];

export default function DeleteAccountPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-[#D7E2EE] bg-white pb-12 pt-6 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Delete account & data" }]} className="mb-6" />
          <div className="max-w-4xl space-y-4">
            <Badge variant="subtle" size="md">
              <Trash2 className="mr-1 h-3.5 w-3.5 text-[#35D0BA]" />
              Wellfind Academic app
            </Badge>
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#101D36] sm:text-4xl md:text-5xl">
              Delete your Wellfind Academic account and data
            </h1>
            <p className="text-base leading-relaxed text-[#344054] sm:text-lg">
              This page is for the <strong>Wellfind Academic</strong> mobile app (Android) and the Wellfind Academic website,
              both provided by Wellfind Academic. You can delete your account yourself in the app, or ask us to delete your
              data from this page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7E2EE] bg-[#EAF0F8] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Steps */}
          <Card className="space-y-6 border-[#D7E2EE] bg-white p-6 sm:p-10">
            <h2 className="text-xl font-bold text-[#101D36] sm:text-2xl">How to request deletion</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#D7E2EE] bg-[#F8FAFC] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#0F6F63]">
                  <Smartphone className="h-4 w-4" /> Option 1: in the app
                </div>
                <p className="mb-2 text-sm text-[#53647D]">For teachers and staff with a Wellfind Academic login.</p>
                <ol className="list-decimal space-y-1.5 pl-5 text-sm text-[#344054]">
                  <li>Open the <strong>Wellfind Academic</strong> app and sign in.</li>
                  <li>Open <strong>My Profile</strong> (the round photo at the top right, or More &rarr; My Profile).</li>
                  <li>Scroll down and tap <strong>Delete account</strong>.</li>
                  <li>Enter your password, type <strong>DELETE</strong> and tap <strong>Delete my account</strong>.</li>
                </ol>
                <p className="mt-3 text-xs text-[#53647D]">
                  Your account is deleted immediately. If you still have active students, we ask you to finish or hand over those
                  classes first.
                </p>
              </div>

              <div className="rounded-2xl border border-[#D7E2EE] bg-[#F8FAFC] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#0F6F63]">
                  <Globe className="h-4 w-4" /> Option 2: on this page
                </div>
                <p className="mb-2 text-sm text-[#53647D]">
                  For students, parents, and anyone who cannot sign in to the app.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5 text-sm text-[#344054]">
                  <li>Fill in the form below with the e-mail or phone number you used with us.</li>
                  <li>We verify that the details belong to you (we may contact you).</li>
                  <li>We delete your personal data and confirm.</li>
                </ol>
                <p className="mt-3 text-xs text-[#53647D]">
                  Prefer e-mail? Write to <a className="font-semibold text-[#0F6F63] underline" href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20data`}>{CONTACT_EMAIL}</a> from the address you used.
                </p>
              </div>
            </div>

            <div id="request" className="scroll-mt-24 border-t border-[#EAF0F8] pt-6">
              <h3 className="mb-4 text-lg font-bold text-[#101D36]">Request data deletion</h3>
              <DeleteAccountRequestForm />
            </div>
          </Card>

          {/* What is deleted / kept */}
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-[#D7E2EE] bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#B42318]">
                <Trash2 className="h-4 w-4" /> Data we delete
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#344054]">
                {DELETED.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Card>
            <Card className="border-[#D7E2EE] bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#0F6F63]">
                <Archive className="h-4 w-4" /> Data we keep
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#344054]">
                {KEPT.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="border-[#D7E2EE] bg-white p-6 text-sm leading-relaxed text-[#344054]">
            <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#0F6F63]">
              <Clock className="h-4 w-4" /> Timing and retention
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li>Deleting from the app takes effect immediately; you are signed out and cannot sign in again.</li>
              <li>Requests sent on this page are completed within <strong>30 days</strong> of verification.</li>
              <li>Financial records are kept, without personal details, for the period required by Indian accounting and tax rules.</li>
              <li>Deleted data cannot be recovered. You can create a new account or application later if you wish.</li>
            </ul>
            <p className="mt-4">
              Read how we handle data in our <Link href="/privacy-policy" className="font-semibold text-[#0F6F63] underline">Privacy Policy</Link>.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
