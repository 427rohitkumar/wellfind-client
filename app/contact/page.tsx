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
import { siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ContactFormWithParams } from "@/components/inquiry/ContactFormWithParams";

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
  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <section className="bg-white border-b border-[#D7E2EE] pt-6 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact & Inquiries" }]} className="mb-6" />

          <div className="max-w-4xl space-y-4">
            <Badge variant="subtle" size="md">
              <MessageCircle className="w-3.5 h-3.5 text-[#35D0BA] mr-1" />
              Direct Parent Inquiries
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101D36] leading-[1.15]">
              Contact Wellfind Academic
            </h1>

            <p className="text-lg sm:text-xl text-[#344054] font-medium leading-relaxed">
              Looking for a suitable home tutor for your child in Patna? Share
              your requirements below, and our team will get in touch with you.
            </p>
          </div>
        </div>
      </section>

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
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30">
                      <MessageCircle className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block">
                        WhatsApp Line
                      </span>
                      {whatsappUrl ? (
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0F6F63] hover:underline font-medium"
                        >
                          Send WhatsApp Message
                        </a>
                      ) : (
                        <span className="text-xs text-[#53647D] italic">
                          Dedicated WhatsApp channel pending environment activation
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30">
                      <Phone className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block">
                        Phone Calling
                      </span>
                      {phoneUrl ? (
                        <a
                          href={phoneUrl}
                          className="text-[#344054] hover:text-[#101D36] font-medium"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      ) : (
                        <span className="text-xs text-[#53647D] italic">
                          Official phone helpline pending launch activation
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D7F6F1] text-[#0A4D45] flex items-center justify-center shrink-0 border border-[#35D0BA]/30">
                      <Mail className="w-5 h-5 text-[#0F6F63]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#101D36] block">
                        Email Support
                      </span>
                      {siteConfig.contact.email ? (
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-[#344054] hover:text-[#101D36] font-medium"
                        >
                          {siteConfig.contact.email}
                        </a>
                      ) : (
                        <span className="text-xs text-[#53647D] italic">
                          Official support email pending configuration
                        </span>
                      )}
                    </div>
                  </div>

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
