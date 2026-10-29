import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { ContactFormWithParams } from "@/components/inquiry/ContactFormWithParams";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";

export const metadata: Metadata = {
  title: "Contact Wellfind Academic | Home Tuition Inquiries in Patna",
  description:
    "Get in touch with Wellfind Academic to request a home tutor for UKG to Class 10 in Patna. Submit requirements online or connect via WhatsApp.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: "Contact Wellfind Academic | Home Tuition Inquiries in Patna",
    description:
      "Get in touch with Wellfind Academic to request a home tutor in Patna.",
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <ContactHeroSection />

      {/* FORM & CONTACT CHANNELS */}
      <section className="py-12 sm:py-16 bg-[#EAF0F8] border-b border-[#D7E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactFormWithParams />
            </div>

            {/* Right: Contact Information & Policies */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 sm:p-8 space-y-5">
                <h2 className="text-xl font-bold text-[#101D36]">
                  How to Reach Us
                </h2>

                <div className="space-y-4 text-sm">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919661421824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B] focus-visible:ring-offset-2 rounded-lg"
                    aria-label="Chat on WhatsApp at 9661421824"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30 group-hover:bg-[#c5f3eb] transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block group-hover:text-[#0F6F63] transition-colors">
                        WhatsApp Line
                      </span>
                      <span className="text-[#0F6F63] font-medium block group-hover:underline">
                        9661421824
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919661421824"
                    className="flex items-start gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B] focus-visible:ring-offset-2 rounded-lg"
                    aria-label="Call Wellfind Academic at 9661421824"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30 group-hover:bg-[#c5f3eb] transition-colors">
                      <Phone className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block group-hover:text-[#0F6F63] transition-colors">
                        Phone Calling
                      </span>
                      <span className="text-[#344054] font-medium block group-hover:text-[#101D36] group-hover:underline">
                        9661421824
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:427rohitkumar@gmail.com"
                    className="flex items-start gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B] focus-visible:ring-offset-2 rounded-lg"
                    aria-label="Send email to 427rohitkumar@gmail.com"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30 group-hover:bg-[#c5f3eb] transition-colors">
                      <Mail className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block group-hover:text-[#0F6F63] transition-colors">
                        Email Support
                      </span>
                      <span className="text-[#344054] font-medium block group-hover:text-[#101D36] group-hover:underline">
                        427rohitkumar@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Service Location */}
                  <div className="flex items-start gap-3 pt-1 border-t border-[#D7E2EE]">
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30">
                      <MapPin className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block">
                        Service Coverage
                      </span>
                      <p className="text-xs text-[#53647D] leading-relaxed mt-0.5">
                        In-home teacher matching across Patna, Bihar (Kankarbagh,
                        Danapur, Boring Road, Raja Bazar, Hartali Mor &amp;
                        surrounding sectors).
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3 pt-1 border-t border-[#D7E2EE]">
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30">
                      <Clock className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block">
                        Response Timing
                      </span>
                      <p className="text-xs text-[#53647D] leading-relaxed mt-0.5">
                        Inquiry reviews and teacher matching coordination
                        typically occur within 24 to 48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Information Promise Card */}
              <Card className="p-6 bg-white border-[#D7E2EE] space-y-3">
                <div className="flex items-center gap-2 text-[#101D36] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-[#35D0BA]" />
                  <span>Privacy &amp; Data Safeguard</span>
                </div>
                <p className="text-xs text-[#53647D] leading-relaxed">
                  We collect only the essential details necessary to identify
                  suitable teacher options for your child. We do not sell your
                  number to advertising aggregators or spam networks.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
