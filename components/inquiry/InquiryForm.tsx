"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  GraduationCap,
  Loader2,
  MapPin,
  MessageCircle,
  RotateCcw,
  Send,
  User,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export interface InquiryFormProps {
  initialClass?: string;
  initialLocality?: string;
  className?: string;
}

export interface InquiryFormData {
  parentName: string;
  phoneNumber: string;
  studentClass: string;
  locality: string;
  subjects: string;
  preferredTiming: string;
  additionalNotes: string;
}

export interface InquiryFormErrors {
  parentName?: string;
  phoneNumber?: string;
  studentClass?: string;
  locality?: string;
  subjects?: string;
  preferredTiming?: string;
}

const TOTAL_STEPS = 5;

const STEP_DETAILS = [
  { label: "Class", icon: GraduationCap },
  { label: "Subjects", icon: BookOpen },
  { label: "Timing", icon: Clock },
  { label: "Location", icon: MapPin },
  { label: "Contact", icon: User },
];

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

const TIMING_OPTIONS = [
  { label: "Evening", detail: "After 5 PM" },
  { label: "Late evening", detail: "6 PM – 8 PM" },
  { label: "Afternoon", detail: "2 PM – 5 PM" },
  { label: "Morning", detail: "6:30 AM – 8 AM" },
  { label: "Flexible", detail: "Mutually agreed" },
];

const inputClass =
  "w-full h-12 px-3.5 rounded-xl border border-[#D7E2EE] bg-white text-sm text-[#101D36] placeholder-[#53647D]/60 transition-colors focus:outline-none focus:border-[#35D0BA] focus:ring-2 focus:ring-[#35D0BA]/20";

function getInitialData(
  initialClass: string,
  initialLocality: string
): InquiryFormData {
  return {
    parentName: "",
    phoneNumber: "",
    studentClass: initialClass,
    locality: initialLocality,
    subjects: "",
    preferredTiming: "",
    additionalNotes: "",
  };
}

export function InquiryForm({
  initialClass = "",
  initialLocality = "",
  className = "",
}: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>(() =>
    getInitialData(initialClass, initialLocality)
  );
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "endpoint_unconfigured" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);

  const updateField = (field: keyof InquiryFormData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errors[field as keyof InquiryFormErrors]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[field as keyof InquiryFormErrors];
        return next;
      });
    }
  };

  const toggleSubject = (subject: string) => {
    const next =
      subject === "All School Subjects"
        ? selectedSubjects.includes(subject)
          ? []
          : [subject]
        : selectedSubjects.includes(subject)
          ? selectedSubjects.filter((item) => item !== subject)
          : [...selectedSubjects.filter((item) => item !== "All School Subjects"), subject];

    setSelectedSubjects(next);
    updateField("subjects", next.join(", "));
  };

  const validateStep = (step: number): boolean => {
    const nextErrors: InquiryFormErrors = {};
    let firstInvalidField = "";

    if (step === 1 && !formData.studentClass) {
      nextErrors.studentClass = "Please select your child's class";
      firstInvalidField = "inquiry-studentClass";
    }

    if (step === 2 && selectedSubjects.length === 0) {
      nextErrors.subjects = "Please select at least one subject";
      firstInvalidField = "inquiry-subjects";
    }

    if (step === 3 && !formData.preferredTiming) {
      nextErrors.preferredTiming = "Please choose a preferred time";
      firstInvalidField = "inquiry-timing";
    }

    if (step === 4 && !formData.locality) {
      nextErrors.locality = "Please select a locality in Patna";
      firstInvalidField = "inquiry-locality";
    }

    if (step === 5) {
      if (!formData.parentName.trim()) {
        nextErrors.parentName = "Please enter parent or guardian name";
        firstInvalidField = "inquiry-parentName";
      }

      const cleanedPhone = formData.phoneNumber.replace(/\D/g, "");
      const normalizedPhone =
        cleanedPhone.length === 12 && cleanedPhone.startsWith("91")
          ? cleanedPhone.slice(2)
          : cleanedPhone;

      if (!normalizedPhone) {
        nextErrors.phoneNumber = "Please enter your 10-digit mobile number";
        firstInvalidField = firstInvalidField || "inquiry-phoneNumber";
      } else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
        nextErrors.phoneNumber = "Please enter a valid 10-digit Indian mobile number";
        firstInvalidField = firstInvalidField || "inquiry-phoneNumber";
      }
    }

    setErrors(nextErrors);
    if (firstInvalidField) {
      window.setTimeout(() => document.getElementById(firstInvalidField)?.focus(), 0);
    }
    return Object.keys(nextErrors).length === 0;
  };

  const moveToStep = (step: number, nextDirection: "forward" | "backward") => {
    setDirection(nextDirection);
    setCurrentStep(step);
    setErrors({});
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < TOTAL_STEPS) moveToStep(currentStep + 1, "forward");
  };

  const handlePrevious = () => {
    if (currentStep > 1) moveToStep(currentStep - 1, "backward");
  };

  const formatSummaryText = (): string => {
    return [
      "*Wellfind Academic Tuition Inquiry*",
      `Parent: ${formData.parentName.trim()}`,
      `Phone: ${formData.phoneNumber.trim()}`,
      `Class: ${formData.studentClass}`,
      `Locality: ${formData.locality}`,
      `Subjects: ${formData.subjects.trim()}`,
      formData.preferredTiming.trim()
        ? `Preferred Timings: ${formData.preferredTiming.trim()}`
        : null,
      formData.additionalNotes.trim()
        ? `Notes: ${formData.additionalNotes.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentStep < TOTAL_STEPS) {
      handleNext();
      return;
    }
    if (!validateStep(TOTAL_STEPS)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    const endpoint = siteConfig.contact.leadEndpoint;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            parentName: formData.parentName.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            studentClass: formData.studentClass,
            locality: formData.locality,
            subjects: formData.subjects.trim(),
            preferredTiming: formData.preferredTiming.trim(),
            additionalNotes: formData.additionalNotes.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });
        setSubmitStatus(response.ok ? "success" : "error");
      } catch (error) {
        console.error("Inquiry submission failed:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setIsSubmitting(false);
    if (siteConfig.contact.whatsapp) {
      const cleanNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
      window.open(
        `https://wa.me/${cleanNumber}?text=${encodeURIComponent(formatSummaryText())}`,
        "_blank"
      );
      setSubmitStatus("success");
    } else {
      setSubmitStatus("endpoint_unconfigured");
    }
  };

  const handleReset = () => {
    setFormData(getInitialData(initialClass, initialLocality));
    setSelectedSubjects([]);
    setCurrentStep(1);
    setErrors({});
    setSubmitStatus("idle");
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formatSummaryText());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const renderError = (field: keyof InquiryFormErrors) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs font-semibold text-red-600" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <div
      id="inquire"
      className={`relative overflow-hidden rounded-2xl sm:rounded-[24px] border border-[#D7E2EE] bg-white shadow-xl shadow-[#101D36]/5 ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#35D0BA] via-[#0F6F63] to-[#35D0BA]" />

      <div className="border-b border-[#D7E2EE] px-5 pb-5 pt-7 sm:px-8 sm:pb-6 sm:pt-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#35D0BA]/30 bg-[#D7F6F1] text-[#0F6F63]">
              <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F9F8C]">
                Home tuition enquiry
              </span>
              <span className="mt-0.5 block text-xs text-[#53647D]">Takes about 2 minutes</span>
            </div>
          </div>
          <span className="hidden rounded-full bg-[#F4F8FC] px-3 py-1 text-[11px] font-semibold text-[#53647D] sm:inline-flex">
            No commitment
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-[#101D36] sm:text-3xl">
          Find the right tutor for your child
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#53647D] sm:text-base">
          Answer a few quick questions and we&apos;ll match your requirements with suitable tutors in your area.
        </p>

        <div className="mt-6" aria-label={`Step ${currentStep} of ${TOTAL_STEPS}`}>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-bold text-[#101D36]">
              Step {currentStep} of {TOTAL_STEPS}: {STEP_DETAILS[currentStep - 1].label}
            </span>
            <span className="font-medium text-[#53647D]">{Math.round((currentStep / TOTAL_STEPS) * 100)}% complete</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#EAF0F8]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#35D0BA] to-[#0F6F63] transition-all duration-300"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <div className="mt-3 hidden items-center justify-between sm:flex">
            {STEP_DETAILS.map((step, index) => {
              const Icon = step.icon;
              const stepNumber = index + 1;
              const isDone = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              return (
                <div key={step.label} className="flex items-center gap-1.5">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${isDone ? "bg-[#35D0BA] text-[#101D36]" : isCurrent ? "bg-[#101D36] text-white" : "bg-[#EAF0F8] text-[#8A9EB8]"}`}>
                    {isDone ? <Check className="h-3 w-3" strokeWidth={3} /> : <Icon className="h-3 w-3" />}
                  </span>
                  <span className={`text-[11px] font-semibold ${isCurrent ? "text-[#101D36]" : isDone ? "text-[#0F6F63]" : "text-[#8A9EB8]"}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {submitStatus === "success" ? (
        <div className="px-5 py-12 text-center sm:px-8 sm:py-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#D7F6F1] text-[#0F6F63] ring-8 ring-[#D7F6F1]/50">
            <CheckCircle2 className="h-9 w-9" strokeWidth={2.2} />
          </div>
          <h4 className="text-2xl font-extrabold tracking-tight text-[#101D36]">Your tutor request is on its way</h4>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#53647D]">
            Thanks, {formData.parentName || "there"}. Our team will review your requirements and contact you with suitable options.
          </p>
          <div className="mx-auto mt-5 flex max-w-md flex-wrap justify-center gap-2 text-xs font-semibold text-[#101D36]">
            <span className="rounded-full border border-[#35D0BA]/30 bg-[#F4F8FC] px-3 py-1.5">{formData.studentClass}</span>
            <span className="rounded-full border border-[#35D0BA]/30 bg-[#F4F8FC] px-3 py-1.5">{formData.locality}</span>
            <span className="rounded-full border border-[#35D0BA]/30 bg-[#F4F8FC] px-3 py-1.5">{formData.subjects}</span>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {siteConfig.contact.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(formatSummaryText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                Continue on WhatsApp
              </a>
            )}
            <button type="button" onClick={handleReset} className="inline-flex items-center gap-2 rounded-xl border border-[#D7E2EE] bg-white px-5 py-3 text-sm font-bold text-[#101D36] transition-colors hover:bg-[#F4F8FC]">
              <RotateCcw className="h-4 w-4 text-[#53647D]" />
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {submitStatus === "endpoint_unconfigured" && (
            <div className="mx-5 mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 sm:mx-8">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="font-bold">Your details are ready to share</p>
                  <p className="mt-1 text-xs leading-relaxed text-amber-800">Direct delivery is not configured yet. Copy the summary below or configure WhatsApp / the lead endpoint.</p>
                  <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-white/80 p-3 text-[11px] text-[#344054]">{formatSummaryText()}</pre>
                  <button type="button" onClick={handleCopySummary} className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-white px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100/60">
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy summary"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div role="alert" className="mx-5 mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 sm:mx-8">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div><p className="font-bold">We couldn&apos;t submit your request</p><p className="mt-1 text-xs">Your details are still here. Please try again or contact us on WhatsApp.</p></div>
            </div>
          )}

          <div key={currentStep} className={`min-h-[350px] px-5 py-7 sm:min-h-[365px] sm:px-8 sm:py-8 ${direction === "forward" ? "animate-slide-left" : "animate-slide-right"}`}>
            {currentStep === 1 && (
              <fieldset>
                <legend className="text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">Which class does your child need help with?</legend>
                <p className="mt-1.5 text-sm text-[#53647D]">Select the current class so we can suggest the right level of support.</p>
                <div id="inquiry-studentClass" className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {siteConfig.classes.map((item) => {
                    const selected = formData.studentClass === item.label;
                    return (
                      <button type="button" key={item.slug} aria-pressed={selected} onClick={() => updateField("studentClass", item.label)} className={`flex min-h-[62px] items-center justify-between rounded-xl border p-3 text-left transition-all ${selected ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/25" : "border-[#D7E2EE] bg-white text-[#344054] hover:border-[#B8CCE0] hover:bg-[#F4F8FC]"}`}>
                        <span><span className="block text-sm font-bold">{item.label}</span><span className="mt-0.5 block text-[10px] font-medium text-[#53647D]">{item.category.replace("-", " ")}</span></span>
                        {selected && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#35D0BA]"><Check className="h-3 w-3 text-[#101D36]" strokeWidth={3} /></span>}
                      </button>
                    );
                  })}
                </div>
                {renderError("studentClass")}
              </fieldset>
            )}

            {currentStep === 2 && (
              <fieldset>
                <legend className="text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">What should the tutor focus on?</legend>
                <p className="mt-1.5 text-sm text-[#53647D]">Choose one or more subjects. You can select all subjects too.</p>
                <div id="inquiry-subjects" className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {SUBJECT_OPTIONS.map((subject) => {
                    const selected = selectedSubjects.includes(subject);
                    return (
                      <button type="button" key={subject} aria-pressed={selected} onClick={() => toggleSubject(subject)} className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm font-semibold transition-all ${selected ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/20" : "border-[#D7E2EE] bg-white text-[#344054] hover:border-[#B8CCE0] hover:bg-[#F4F8FC]"}`}>
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${selected ? "border-[#35D0BA] bg-[#35D0BA]" : "border-[#CBD5E1]"}`}>{selected && <Check className="h-3 w-3 text-[#101D36]" strokeWidth={3} />}</span>
                        {subject}
                      </button>
                    );
                  })}
                </div>
                {renderError("subjects")}
              </fieldset>
            )}

            {currentStep === 3 && (
              <fieldset>
                <legend className="text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">When would classes work best?</legend>
                <p className="mt-1.5 text-sm text-[#53647D]">Pick the time that fits your child&apos;s school and daily routine.</p>
                <div id="inquiry-timing" className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {TIMING_OPTIONS.map((option) => {
                    const selected = formData.preferredTiming === `${option.label} (${option.detail})`;
                    return (
                      <button type="button" key={option.label} aria-pressed={selected} onClick={() => updateField("preferredTiming", `${option.label} (${option.detail})`)} className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${selected ? "border-[#35D0BA] bg-[#EAF8F6] ring-2 ring-[#35D0BA]/20" : "border-[#D7E2EE] bg-white hover:border-[#B8CCE0] hover:bg-[#F4F8FC]"}`}>
                        <span><span className="block text-sm font-bold text-[#101D36]">{option.label}</span><span className="mt-0.5 block text-xs text-[#53647D]">{option.detail}</span></span>
                        <Clock className={`h-4 w-4 ${selected ? "text-[#0F6F63]" : "text-[#94A3B8]"}`} />
                      </button>
                    );
                  })}
                </div>
                {renderError("preferredTiming")}
              </fieldset>
            )}

            {currentStep === 4 && (
              <fieldset>
                <legend className="text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">Where will the classes take place?</legend>
                <p className="mt-1.5 text-sm text-[#53647D]">We use your area to find tutors who can conveniently travel to you.</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="inquiry-locality" className="mb-1.5 block text-sm font-bold text-[#101D36]">Preferred locality <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select id="inquiry-locality" value={formData.locality} onChange={(event) => updateField("locality", event.target.value)} className={`${inputClass} cursor-pointer appearance-none pr-10 ${!formData.locality ? "text-[#53647D]/70" : ""}`}>
                        <option value="">Select locality in Patna</option>
                        {siteConfig.serviceAreas.map((area) => <option key={area.slug} value={area.name}>{area.name}</option>)}
                        <option value="Other Patna Locality">Other Patna Locality</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#53647D]" />
                    </div>
                    {renderError("locality")}
                  </div>
                  <div>
                    <label htmlFor="inquiry-additionalNotes" className="mb-1.5 block text-sm font-bold text-[#101D36]">Any preference for the tutor? <span className="text-xs font-normal text-[#53647D]">(optional)</span></label>
                    <textarea id="inquiry-additionalNotes" rows={3} value={formData.additionalNotes} onChange={(event) => updateField("additionalNotes", event.target.value)} placeholder="e.g. CBSE board, female tutor preferred, homework support" className={`${inputClass} h-auto resize-none py-3.5`} />
                  </div>
                </div>
              </fieldset>
            )}

            {currentStep === 5 && (
              <fieldset>
                <legend className="text-xl font-extrabold tracking-tight text-[#101D36] sm:text-2xl">Where should we send the tutor options?</legend>
                <p className="mt-1.5 text-sm text-[#53647D]">Share your contact details and our team will get in touch.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-parentName" className="mb-1.5 block text-sm font-bold text-[#101D36]">Parent / guardian name <span className="text-red-500">*</span></label>
                    <input id="inquiry-parentName" type="text" autoComplete="name" value={formData.parentName} onChange={(event) => updateField("parentName", event.target.value)} placeholder="e.g. Ramesh Kumar" className={inputClass} />
                    {renderError("parentName")}
                  </div>
                  <div>
                    <label htmlFor="inquiry-phoneNumber" className="mb-1.5 block text-sm font-bold text-[#101D36]">Mobile number <span className="text-red-500">*</span></label>
                    <input id="inquiry-phoneNumber" type="tel" inputMode="numeric" autoComplete="tel" maxLength={14} value={formData.phoneNumber} onChange={(event) => updateField("phoneNumber", event.target.value)} placeholder="10-digit mobile number" className={inputClass} />
                    {renderError("phoneNumber")}
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-[#D7E2EE] bg-[#F8FAFC] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#53647D]">Your enquiry summary</p>
                  <div className="mt-3 grid gap-2 text-xs text-[#344054] sm:grid-cols-2">
                    <span><strong className="text-[#101D36]">Class:</strong> {formData.studentClass || "—"}</span>
                    <span><strong className="text-[#101D36]">Subjects:</strong> {formData.subjects || "—"}</span>
                    <span><strong className="text-[#101D36]">Timing:</strong> {formData.preferredTiming || "—"}</span>
                    <span><strong className="text-[#101D36]">Area:</strong> {formData.locality || "—"}</span>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-[#53647D]">Your information is used only to coordinate suitable tutor options. By submitting, you agree to our <Link href="/privacy-policy/" className="font-semibold text-[#101D36] underline hover:text-[#35D0BA]">Privacy Policy</Link>.</p>
              </fieldset>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-[#D7E2EE] px-5 py-4 sm:px-8">
            <button type="button" onClick={handlePrevious} disabled={currentStep === 1 || isSubmitting} className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors sm:px-4 ${currentStep === 1 ? "pointer-events-none opacity-0" : "border border-[#D7E2EE] text-[#101D36] hover:bg-[#F4F8FC]"}`}>
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <span className="hidden text-xs font-medium text-[#53647D] sm:block">Your progress is saved on this screen</span>
            {currentStep < TOTAL_STEPS ? (
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-[#35D0BA] px-5 py-2.5 text-sm font-bold text-[#101D36] shadow-sm transition-all hover:bg-[#2BBFA9] hover:shadow-md disabled:opacity-60 sm:px-6">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-[#35D0BA] px-5 py-2.5 text-sm font-bold text-[#101D36] shadow-sm transition-all hover:bg-[#2BBFA9] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:px-6">
                {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Request a tutor</>}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
