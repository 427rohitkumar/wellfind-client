"use client";

import React from "react";
import Image from "next/image";
import {
  Check,
  MapPin,
  Clock,
  BookOpen,
  GraduationCap,
  User,
  FileText,
  Sparkles,
} from "lucide-react";
import {
  TutorEnquiryFormData,
  CLASS_OPTIONS,
  SUBJECT_OPTIONS,
  TIMING_OPTIONS,
  LOCALITY_OPTIONS,
  BUDGET_OPTIONS,
} from "./formSchema";

interface FormStepRendererProps {
  currentStep: number;
  formData: TutorEnquiryFormData;
  onChange: (updated: Partial<TutorEnquiryFormData>) => void;
  errorField?: string | null;
}

export function FormStepRenderer({
  currentStep,
  formData,
  onChange,
  errorField,
}: FormStepRendererProps) {
  // ----------------------------------------------------
  // STEP 1: CLASS SELECTION
  // ----------------------------------------------------
  if (currentStep === 1) {
    return (
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Character Illustration (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[220px] sm:h-[300px] flex items-center justify-center">
            <Image
              src="/form/class.png"
              alt="Kaunsi class ke liye tutor required hai?"
              width={480}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
          <span className="sr-only">Question: Kaunsi class ke liye tutor required hai?</span>
        </div>

        {/* Input Options (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Step 1 of 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
              Select Student&apos;s Class
            </h3>
            <p className="text-xs sm:text-sm text-[#53647D] mt-1">
              Choose the current academic standard for which home tuition is needed.
            </p>
          </div>

          {/* Grid of Class Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
            {CLASS_OPTIONS.map((item) => {
              const isSelected = formData.studentClass === item.label;

              return (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => onChange({ studentClass: item.label })}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/30 shadow-xs scale-[1.02]"
                      : "border-[#D7E2EE] bg-white text-[#344054] hover:bg-[#F4F8FC] hover:border-[#B8CCE0]"
                  } ${errorField === "studentClass" && !formData.studentClass ? "border-red-400 bg-red-50/50" : ""}`}
                >
                  <div>
                    <span className="block text-sm font-bold">{item.label}</span>
                    <span className="text-[10px] text-[#53647D] font-medium">
                      {item.category}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#35D0BA] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#101D36] stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {errorField === "studentClass" && (
            <p className="text-xs text-red-600 font-semibold mt-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Kripya student ki class select kijiye.
            </p>
          )}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // STEP 2: SUBJECTS (Alternating: Form Left, Character Right)
  // ----------------------------------------------------
  if (currentStep === 2) {
    const handleToggleSubject = (subject: string) => {
      let updated: string[];
      if (subject === "All School Subjects") {
        updated = formData.subjects.includes("All School Subjects")
          ? []
          : ["All School Subjects"];
      } else {
        const withoutAll = formData.subjects.filter((s) => s !== "All School Subjects");
        if (withoutAll.includes(subject)) {
          updated = withoutAll.filter((s) => s !== subject);
        } else {
          updated = [...withoutAll, subject];
        }
      }
      onChange({ subjects: updated });
    };

    return (
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Input Options (Left on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Step 2 of 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
              Select Required Subject(s)
            </h3>
            <p className="text-xs sm:text-sm text-[#53647D] mt-1">
              Select one or multiple subjects where your child needs tutor assistance.
            </p>
          </div>

          {/* Subjects Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {SUBJECT_OPTIONS.map((sub) => {
              const isSelected = formData.subjects.includes(sub);

              return (
                <button
                  type="button"
                  key={sub}
                  onClick={() => handleToggleSubject(sub)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/30 shadow-xs"
                      : "border-[#D7E2EE] bg-white text-[#344054] hover:bg-[#F4F8FC] hover:border-[#B8CCE0]"
                  } ${errorField === "subjects" && formData.subjects.length === 0 ? "border-red-400 bg-red-50/50" : ""}`}
                >
                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                      isSelected
                        ? "bg-[#35D0BA] border-[#35D0BA] text-[#101D36]"
                        : "border-[#CBD5E1] bg-white"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{sub}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Subject Note */}
          <div className="mt-4">
            <label
              htmlFor="customSubject"
              className="block text-xs font-semibold text-[#53647D] uppercase tracking-wider mb-1"
            >
              Other Subject / Specific Syllabus (Optional)
            </label>
            <input
              type="text"
              id="customSubject"
              value={formData.customSubject || ""}
              onChange={(e) => onChange({ customSubject: e.target.value })}
              placeholder="e.g. NTSE foundation, Olympiad, Spoken English"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7E2EE] bg-white text-xs sm:text-sm text-[#101D36] focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA]"
            />
          </div>

          {errorField === "subjects" && (
            <p className="text-xs text-red-600 font-semibold mt-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Kam se kam ek subject select kijiye.
            </p>
          )}
        </div>

        {/* Character Illustration (Right on desktop matching subject.png layout) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[220px] sm:h-[300px] flex items-center justify-center">
            <Image
              src="/form/subject.png"
              alt="Kaunse subjects ke liye tutor chahiye?"
              width={480}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
          <span className="sr-only">Question: Kaunse subjects ke liye tutor chahiye?</span>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // STEP 3: PREFERRED TIMING
  // ----------------------------------------------------
  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Character Illustration (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[220px] sm:h-[300px] flex items-center justify-center">
            <Image
              src="/form/teaching-time.png"
              alt="Padhai ke liye best timing kaunsi rahegi?"
              width={480}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
          <span className="sr-only">Question: Padhai ke liye best timing kaunsi rahegi?</span>
        </div>

        {/* Input Options (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Step 3 of 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
              Preferred Tuition Timing
            </h3>
            <p className="text-xs sm:text-sm text-[#53647D] mt-1">
              Select the time slot that fits your child&apos;s school schedule and daily routine.
            </p>
          </div>

          {/* Timing Cards List */}
          <div className="space-y-2.5">
            {TIMING_OPTIONS.map((slot) => {
              const isSelected = formData.preferredTiming === slot.label;

              return (
                <button
                  type="button"
                  key={slot.label}
                  onClick={() => onChange({ preferredTiming: slot.label })}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/30 shadow-xs"
                      : "border-[#D7E2EE] bg-white text-[#344054] hover:bg-[#F4F8FC] hover:border-[#B8CCE0]"
                  } ${errorField === "preferredTiming" && !formData.preferredTiming ? "border-red-400 bg-red-50/50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-[#35D0BA] bg-[#35D0BA]"
                          : "border-[#CBD5E1] bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-[#101D36]" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#101D36]">
                        {slot.label}
                      </div>
                      <div className="text-[11px] text-[#53647D]">
                        {slot.desc}
                      </div>
                    </div>
                  </div>
                  <Clock
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? "text-[#0F6F63]" : "text-[#94A3B8]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {errorField === "preferredTiming" && (
            <p className="text-xs text-red-600 font-semibold mt-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Kripya tuition ke liye suitable timing select kijiye.
            </p>
          )}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // STEP 4: LOCALITY & BUDGET
  // ----------------------------------------------------
  if (currentStep === 4) {
    return (
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Input Options (Left on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Step 4 of 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
              Locality in Patna & Budget
            </h3>
            <p className="text-xs sm:text-sm text-[#53647D] mt-1">
              Select your residential neighborhood for hyperlocal tutor matching.
            </p>
          </div>

          {/* Locality Dropdown / Grid */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="localitySelect"
                className="block text-xs font-bold text-[#101D36] uppercase tracking-wider mb-1.5"
              >
                Patna Locality / Area <span className="text-red-500">*</span>
              </label>
              <select
                id="localitySelect"
                value={formData.locality}
                onChange={(e) => onChange({ locality: e.target.value })}
                className={`w-full px-3.5 py-3 rounded-xl border text-sm bg-white font-medium focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA] ${
                  errorField === "locality" && !formData.locality
                    ? "border-red-400 bg-red-50/50"
                    : "border-[#D7E2EE] text-[#101D36]"
                }`}
              >
                <option value="">-- Choose Your Patna Area --</option>
                {LOCALITY_OPTIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              {formData.locality === "Patna (Other Locality)" && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={formData.customLocality || ""}
                    onChange={(e) => onChange({ customLocality: e.target.value })}
                    placeholder="Enter your colony / landmark in Patna"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7E2EE] bg-white text-xs sm:text-sm text-[#101D36] focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA]"
                  />
                </div>
              )}

              {errorField === "locality" && (
                <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Kripya Patna me apna residential area select kijiye.
                </p>
              )}
            </div>

            {/* Monthly Budget Range */}
            <div>
              <label className="block text-xs font-bold text-[#101D36] uppercase tracking-wider mb-1.5">
                Estimated Monthly Budget Range <span className="text-[#53647D] lowercase font-normal">(optional)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BUDGET_OPTIONS.map((budget) => {
                  const isSelected = formData.budgetRange === budget;

                  return (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => onChange({ budgetRange: budget })}
                      className={`px-3 py-2.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-[#35D0BA] bg-[#EAF8F6] text-[#101D36] ring-2 ring-[#35D0BA]/30 shadow-xs"
                          : "border-[#D7E2EE] bg-white text-[#344054] hover:bg-[#F4F8FC] hover:border-[#B8CCE0]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{budget}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#0F6F63] stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Character Illustration (Right on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[220px] sm:h-[300px] flex items-center justify-center">
            <Image
              src="/form/budget-range-removebg.png"
              alt="Aapka monthly budget range kitna rahega?"
              width={480}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
          <span className="sr-only">Question: Aapka monthly budget range kitna rahega?</span>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // STEP 5: CONTACT DETAILS & REVIEW
  // ----------------------------------------------------
  if (currentStep === 5) {
    return (
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Character Illustration (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] h-[220px] sm:h-[300px] flex items-center justify-center">
            <Image
              src="/form/contact-no.png"
              alt="Apna contact number fill kijiye."
              width={480}
              height={420}
              priority
              className="w-full h-full object-contain drop-shadow-sm select-none pointer-events-none"
            />
          </div>
          <span className="sr-only">Question: Apna contact number fill kijiye.</span>

          {/* Quick Recap Capsule */}
          <div className="mt-2 w-full max-w-sm bg-[#F4F8FC] border border-[#D7E2EE] rounded-2xl p-3.5 text-xs text-[#344054] space-y-1">
            <div className="font-bold text-[#101D36] text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#35D0BA]" />
              <span>Your Requirements Summary</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#53647D]">Class:</span>
              <span className="font-semibold text-[#101D36]">{formData.studentClass || "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#53647D]">Subjects:</span>
              <span className="font-semibold text-[#101D36] truncate max-w-[180px]">
                {formData.subjects.join(", ") || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#53647D]">Locality:</span>
              <span className="font-semibold text-[#101D36]">{formData.locality || "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#53647D]">Timing:</span>
              <span className="font-semibold text-[#101D36]">{formData.preferredTiming || "Flexible"}</span>
            </div>
          </div>
        </div>

        {/* Input Options (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F6F1] text-[#0F6F63] text-xs font-bold uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5" />
              <span>Step 5 of 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#101D36] tracking-tight">
              Parent Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-[#53647D] mt-1">
              Our academic counselor in Patna will contact you to confirm tutor profiles and demo schedule.
            </p>
          </div>

          <div className="space-y-3.5">
            {/* Parent Name */}
            <div>
              <label
                htmlFor="parentName"
                className="block text-xs font-bold text-[#101D36] uppercase tracking-wider mb-1"
              >
                Parent / Guardian Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#53647D]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => onChange({ parentName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                    errorField === "parentName"
                      ? "border-red-400 bg-red-50/50 focus:ring-red-300"
                      : "border-[#D7E2EE] bg-white text-[#101D36] focus:ring-[#35D0BA]/50 focus:border-[#35D0BA]"
                  }`}
                  required
                />
              </div>
              {errorField === "parentName" && (
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Kripya Parent ya Guardian ka naam enter kijiye.
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-bold text-[#101D36] uppercase tracking-wider mb-1"
              >
                10-Digit Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex">
                <div className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-[#D7E2EE] bg-[#F4F8FC] text-[#101D36] text-xs font-bold">
                  🇮🇳 +91
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const clean = e.target.value.replace(/\D/g, "").slice(0, 10);
                    onChange({ phoneNumber: clean });
                  }}
                  placeholder="9876543210"
                  maxLength={10}
                  className={`w-full px-3.5 py-3 rounded-r-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                    errorField === "phoneNumber"
                      ? "border-red-400 bg-red-50/50 focus:ring-red-300"
                      : "border-[#D7E2EE] bg-white text-[#101D36] focus:ring-[#35D0BA]/50 focus:border-[#35D0BA]"
                  }`}
                  required
                />
              </div>
              {errorField === "phoneNumber" && (
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Kripya valid 10-digit mobile number enter kijiye.
                </p>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-xs font-bold text-[#101D36] uppercase tracking-wider mb-1"
              >
                Any specific teacher preference? <span className="text-[#53647D] lowercase font-normal">(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 pointer-events-none text-[#53647D]">
                  <FileText className="w-4 h-4" />
                </div>
                <textarea
                  id="additionalNotes"
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => onChange({ additionalNotes: e.target.value })}
                  placeholder="e.g. CBSE pattern, female tutor preferred, exam preparation focus"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D7E2EE] bg-white text-xs sm:text-sm text-[#101D36] focus:outline-none focus:ring-2 focus:ring-[#35D0BA]/50 focus:border-[#35D0BA]"
                />
              </div>
            </div>

            {/* Policy Consent */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="agreedToPolicy"
                checked={formData.agreedToPolicy}
                onChange={(e) => onChange({ agreedToPolicy: e.target.checked })}
                className="mt-0.5 rounded border-[#CBD5E1] text-[#35D0BA] focus:ring-[#35D0BA] cursor-pointer"
              />
              <label htmlFor="agreedToPolicy" className="text-[11px] text-[#53647D] leading-tight cursor-pointer">
                I agree to be contacted by Wellfind Academic coordinators regarding home tutor options in Patna.
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
