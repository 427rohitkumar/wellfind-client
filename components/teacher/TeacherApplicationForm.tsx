"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
  UserRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface TeacherApplicationData {
  fullName: string;
  phoneNumber: string;
  email: string;
  qualification: string;
  subjects: string;
  classes: string;
  locality: string;
  experience: string;
  availability: string;
  additionalNotes: string;
  agreedToPolicy: boolean;
}

type TeacherApplicationErrors = Partial<Record<keyof TeacherApplicationData, string>>;

const SUBJECT_OPTIONS = [
  "All School Subjects",
  "Mathematics",
  "Science",
  "English & Grammar",
  "Social Science",
  "Hindi",
  "Sanskrit",
  "Computer / Coding",
];

const EXPERIENCE_OPTIONS = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

const AVAILABILITY_OPTIONS = [
  "Morning",
  "Afternoon",
  "Evening",
  "Morning & evening",
  "Flexible",
];

const initialData: TeacherApplicationData = {
  fullName: "",
  phoneNumber: "",
  email: "",
  qualification: "",
  subjects: "",
  classes: "",
  locality: "",
  experience: "",
  availability: "",
  additionalNotes: "",
  agreedToPolicy: false,
};

const inputClass =
  "w-full h-12 rounded-xl border border-[#D7E2EE] bg-white px-3.5 text-sm text-[#101D36] placeholder-[#53647D]/60 transition-colors focus:border-[#35D0BA] focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/20";

export function TeacherApplicationForm() {
  const [formData, setFormData] = useState<TeacherApplicationData>(initialData);
  const [errors, setErrors] = useState<TeacherApplicationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "unconfigured" | "error">("idle");

  const updateField = <K extends keyof TeacherApplicationData>(
    field: K,
    value: TeacherApplicationData[K]
  ) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: TeacherApplicationErrors = {};
    const cleanPhone = formData.phoneNumber.replace(/\D/g, "");

    if (!formData.fullName.trim()) nextErrors.fullName = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) nextErrors.phoneNumber = "Please enter a valid 10-digit mobile number";
    if (!formData.qualification.trim()) nextErrors.qualification = "Please add your highest qualification";
    if (!formData.subjects) nextErrors.subjects = "Please select a subject";
    if (!formData.classes) nextErrors.classes = "Please select the class level you teach";
    if (!formData.locality) nextErrors.locality = "Please select your locality";
    if (!formData.experience) nextErrors.experience = "Please select your experience";
    if (!formData.availability) nextErrors.availability = "Please select your availability";
    if (!formData.agreedToPolicy) nextErrors.agreedToPolicy = "Please accept the privacy policy";

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) document.getElementById(`teacher-${firstError}`)?.focus();
    return Object.keys(nextErrors).length === 0;
  };

  const formatSummary = () =>
    [
      "*Wellfind Academic — Teacher Partner Application*",
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phoneNumber.trim()}`,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      `Qualification: ${formData.qualification.trim()}`,
      `Subjects: ${formData.subjects}`,
      `Classes: ${formData.classes}`,
      `Locality: ${formData.locality}`,
      `Experience: ${formData.experience}`,
      `Availability: ${formData.availability}`,
      formData.additionalNotes.trim() ? `Notes: ${formData.additionalNotes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("idle");
    const endpoint = siteConfig.contact.leadEndpoint;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "Teacher Partner Application",
            fullName: formData.fullName.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            email: formData.email.trim(),
            qualification: formData.qualification.trim(),
            subjects: formData.subjects,
            classes: formData.classes,
            locality: formData.locality,
            experience: formData.experience,
            availability: formData.availability,
            additionalNotes: formData.additionalNotes.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });
        setStatus(response.ok ? "success" : "error");
      } catch (error) {
        console.error("Teacher application submission failed:", error);
        setStatus("error");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setIsSubmitting(false);
    if (siteConfig.contact.whatsapp) {
      const cleanNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
      window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(formatSummary())}`, "_blank");
      setStatus("success");
    } else {
      setStatus("unconfigured");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[#B9E9E1] bg-white p-7 text-center shadow-lg sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D7F6F1] text-[#0F6F63] ring-8 ring-[#D7F6F1]/50">
          <CheckCircle2 className="h-9 w-9" strokeWidth={2.2} />
        </div>
        <h2 className="mt-5 text-2xl font-black tracking-tight text-[#101D36]">Profile received</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#53647D]">
          Thank you, {formData.fullName}. We&apos;ll review your details and contact you when a suitable home-tuition requirement is available.
        </p>
        <button type="button" onClick={() => { setFormData(initialData); setStatus("idle"); }} className="mt-6 text-sm font-bold text-[#0F6F63] underline underline-offset-2">
          Submit another profile
        </button>
      </div>
    );
  }

  const errorText = (field: keyof TeacherApplicationData) =>
    errors[field] ? <p className="mt-1.5 text-xs font-semibold text-red-600" role="alert">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-[#D7E2EE] bg-white p-5 shadow-lg sm:p-8">
      <div className="flex items-start gap-3 border-b border-[#D7E2EE] pb-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D7F6F1] text-[#0F6F63]">
          <UserRound className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-[#101D36]">Teacher profile form</h2>
          <p className="mt-1 text-xs leading-relaxed text-[#53647D]">Share your details. We&apos;ll review your profile before connecting a relevant enquiry.</p>
        </div>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div><p className="font-bold">We couldn&apos;t send your profile</p><p className="mt-1 text-xs">Please try again. Your details remain in this form.</p></div>
        </div>
      )}

      {status === "unconfigured" && (
        <div role="status" className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
          Your profile is ready, but the application channel is not configured yet. Please contact the Wellfind team directly.
        </div>
      )}

      <div className="mt-6 space-y-7">
        <section>
          <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-[#0F6F63]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7F6F1]">1</span>About you</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="teacher-fullName" className="mb-1.5 block text-sm font-bold text-[#101D36]">Full name <span className="text-red-500">*</span></label>
              <input id="teacher-fullName" autoComplete="name" value={formData.fullName} onChange={(event) => updateField("fullName", event.target.value)} placeholder="e.g. Ankit Kumar" className={inputClass} />
              {errorText("fullName")}
            </div>
            <div>
              <label htmlFor="teacher-phoneNumber" className="mb-1.5 block text-sm font-bold text-[#101D36]">Mobile number <span className="text-red-500">*</span></label>
              <input id="teacher-phoneNumber" type="tel" inputMode="numeric" autoComplete="tel" maxLength={14} value={formData.phoneNumber} onChange={(event) => updateField("phoneNumber", event.target.value)} placeholder="10-digit mobile number" className={inputClass} />
              {errorText("phoneNumber")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="teacher-email" className="mb-1.5 block text-sm font-bold text-[#101D36]">Email address <span className="text-xs font-normal text-[#53647D]">(optional)</span></label>
              <input id="teacher-email" type="email" autoComplete="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" className={inputClass} />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-[#0F6F63]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7F6F1]">2</span>Teaching profile</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="teacher-qualification" className="mb-1.5 block text-sm font-bold text-[#101D36]">Highest qualification <span className="text-red-500">*</span></label>
              <input id="teacher-qualification" value={formData.qualification} onChange={(event) => updateField("qualification", event.target.value)} placeholder="e.g. B.Sc. Mathematics" className={inputClass} />
              {errorText("qualification")}
            </div>
            <div>
              <label htmlFor="teacher-experience" className="mb-1.5 block text-sm font-bold text-[#101D36]">Teaching experience <span className="text-red-500">*</span></label>
              <div className="relative">
                <select id="teacher-experience" value={formData.experience} onChange={(event) => updateField("experience", event.target.value)} className={`${inputClass} appearance-none pr-10 ${!formData.experience ? "text-[#53647D]/70" : ""}`}>
                  <option value="">Select experience</option>
                  {EXPERIENCE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
              </div>
              {errorText("experience")}
            </div>
            <div>
              <label htmlFor="teacher-subjects" className="mb-1.5 block text-sm font-bold text-[#101D36]">Primary subject <span className="text-red-500">*</span></label>
              <div className="relative">
                <select id="teacher-subjects" value={formData.subjects} onChange={(event) => updateField("subjects", event.target.value)} className={`${inputClass} appearance-none pr-10 ${!formData.subjects ? "text-[#53647D]/70" : ""}`}>
                  <option value="">Select subject</option>
                  {SUBJECT_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
              </div>
              {errorText("subjects")}
            </div>
            <div>
              <label htmlFor="teacher-classes" className="mb-1.5 block text-sm font-bold text-[#101D36]">Class level <span className="text-red-500">*</span></label>
              <div className="relative">
                <select id="teacher-classes" value={formData.classes} onChange={(event) => updateField("classes", event.target.value)} className={`${inputClass} appearance-none pr-10 ${!formData.classes ? "text-[#53647D]/70" : ""}`}>
                  <option value="">Select class level</option>
                  <option value="UKG–Class 5">UKG–Class 5</option>
                  <option value="Class 6–8">Class 6–8</option>
                  <option value="Class 9–10">Class 9–10</option>
                  <option value="Multiple levels">Multiple levels</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
              </div>
              {errorText("classes")}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-[#0F6F63]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7F6F1]">3</span>Availability</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="teacher-locality" className="mb-1.5 block text-sm font-bold text-[#101D36]">Teaching locality <span className="text-red-500">*</span></label>
              <div className="relative">
                <select id="teacher-locality" value={formData.locality} onChange={(event) => updateField("locality", event.target.value)} className={`${inputClass} appearance-none pr-10 ${!formData.locality ? "text-[#53647D]/70" : ""}`}>
                  <option value="">Select locality in Patna</option>
                  {siteConfig.serviceAreas.map((area) => <option key={area.slug}>{area.name}</option>)}
                  <option>Other Patna locality</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
              </div>
              {errorText("locality")}
            </div>
            <div>
              <label htmlFor="teacher-availability" className="mb-1.5 block text-sm font-bold text-[#101D36]">Preferred availability <span className="text-red-500">*</span></label>
              <div className="relative">
                <select id="teacher-availability" value={formData.availability} onChange={(event) => updateField("availability", event.target.value)} className={`${inputClass} appearance-none pr-10 ${!formData.availability ? "text-[#53647D]/70" : ""}`}>
                  <option value="">Select availability</option>
                  {AVAILABILITY_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
              </div>
              {errorText("availability")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="teacher-additionalNotes" className="mb-1.5 block text-sm font-bold text-[#101D36]">Anything else we should know? <span className="text-xs font-normal text-[#53647D]">(optional)</span></label>
              <textarea id="teacher-additionalNotes" rows={3} value={formData.additionalNotes} onChange={(event) => updateField("additionalNotes", event.target.value)} placeholder="Mention preferred subjects, nearby areas or teaching preferences" className={`${inputClass} h-auto resize-none py-3.5`} />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-7 border-t border-[#D7E2EE] pt-5">
        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-[#53647D]" htmlFor="teacher-agreedToPolicy">
          <input id="teacher-agreedToPolicy" type="checkbox" checked={formData.agreedToPolicy} onChange={(event) => updateField("agreedToPolicy", event.target.checked)} className="mt-0.5 h-4 w-4 rounded border-[#B8CCE0] accent-[#35D0BA]" />
          <span>I agree to share these details with Wellfind Academic for teacher profile review. Read our <Link href="/privacy-policy/" className="font-semibold text-[#101D36] underline">Privacy Policy</Link>.</span>
        </label>
        {errorText("agreedToPolicy")}
        <button type="submit" disabled={isSubmitting} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#35D0BA] px-6 text-sm font-bold text-[#101D36] shadow-sm transition-all hover:bg-[#2BBFA9] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending profile...</> : <><Send className="h-4 w-4" /> Submit teacher profile</>}
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#8A9EB8]"><BriefcaseBusiness className="h-3.5 w-3.5" /> We contact teachers when a suitable requirement is available.</p>
      </div>
    </form>
  );
}
