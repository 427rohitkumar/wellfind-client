"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { submitDataDeletionRequest } from "@/lib/api";

const TYPES = [
  { value: "student_parent", label: "Student / Parent" },
  { value: "teacher", label: "Teacher" },
  { value: "other", label: "Other" },
] as const;

type FieldErrors = Record<string, string>;

const inputClass =
  "w-full rounded-xl border border-[#D7E2EE] bg-white px-4 py-3 text-sm text-[#101D36] placeholder:text-[#8A9EB8] focus:border-[#35D0BA] focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/30";

export function DeleteAccountRequestForm() {
  const [requesterType, setRequesterType] = useState<(typeof TYPES)[number]["value"]>("student_parent");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, must stay empty
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setFormError(null);

    if (!email.trim() && !phone.trim()) {
      setErrors({ email: "Enter the e-mail or phone number you used with Wellfind Academic." });
      return;
    }

    setLoading(true);
    try {
      const res = await submitDataDeletionRequest({ requesterType, fullName, email, phone, message, website });
      if (res.success) {
        const data = res.data as { reference?: string } | undefined;
        setReference(data?.reference ?? "received");
      } else {
        setErrors(res.fieldErrors ?? {});
        setFormError(res.message || "We could not submit your request. Please try again.");
      }
    } catch {
      setFormError("We could not reach the server. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (reference) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[#35D0BA]/40 bg-[#F3FCFA] p-6 text-center"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-[#0F9F8C]" />
        <h3 className="mt-3 text-lg font-extrabold text-[#101D36]">Request received</h3>
        <p className="mt-2 text-sm text-[#344054]">
          We will verify that the details belong to you and delete your data within 30 days.
          {reference !== "received" && (
            <>
              {" "}Your reference is <strong>{reference}</strong>.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="mb-2 text-sm font-bold text-[#101D36]">I am a</legend>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <label
              key={t.value}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                requesterType === t.value
                  ? "border-[#0F9F8C] bg-[#D7F6F1] text-[#0F6F63]"
                  : "border-[#D7E2EE] bg-white text-[#344054] hover:border-[#35D0BA]"
              }`}
            >
              <input
                type="radio"
                name="requesterType"
                value={t.value}
                checked={requesterType === t.value}
                onChange={() => setRequesterType(t.value)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="del-name" className="mb-1.5 block text-sm font-bold text-[#101D36]">
          Your name <span className="font-normal text-[#8A9EB8]">(optional)</span>
        </label>
        <input id="del-name" className={inputClass} value={fullName} onChange={(e) => setFullName(e.target.value)} maxLength={120} autoComplete="name" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="del-email" className="mb-1.5 block text-sm font-bold text-[#101D36]">E-mail used with Wellfind</label>
          <input
            id="del-email"
            type="email"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "del-email-err" : undefined}
          />
          {errors.email && <p id="del-email-err" className="mt-1.5 text-xs font-semibold text-[#D92D20]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="del-phone" className="mb-1.5 block text-sm font-bold text-[#101D36]">Phone used with Wellfind</label>
          <input
            id="del-phone"
            type="tel"
            inputMode="tel"
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={30}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "del-phone-err" : undefined}
          />
          {errors.phone && <p id="del-phone-err" className="mt-1.5 text-xs font-semibold text-[#D92D20]">{errors.phone}</p>}
        </div>
      </div>
      <p className="-mt-2 text-xs text-[#53647D]">Enter at least one. We use it only to find and verify your records.</p>

      <div>
        <label htmlFor="del-msg" className="mb-1.5 block text-sm font-bold text-[#101D36]">
          Anything we should know <span className="font-normal text-[#8A9EB8]">(optional)</span>
        </label>
        <textarea id="del-msg" rows={3} className={inputClass} value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} />
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="del-website">Leave this field empty</label>
        <input id="del-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {formError && (
        <p role="alert" className="rounded-xl border border-[#FDA29B] bg-[#FEF3F2] px-4 py-3 text-sm font-semibold text-[#B42318]">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#101D36] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#1E3154] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 text-[#35D0BA]" />}
        {loading ? "Submitting..." : "Request data deletion"}
      </button>
    </form>
  );
}
