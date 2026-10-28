"use client";

import React, { useState, useRef } from "react";
import { CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";
import { FormProgressIndicator } from "./FormProgressIndicator";
import { FormNavigation } from "./FormNavigation";
import { FormStepRenderer } from "./FormStepRenderer";
import {
  TutorEnquiryFormData,
  INITIAL_FORM_DATA,
  validateStep,
  validateEntireForm,
} from "./formSchema";
import { submitTutorEnquiry, SubmissionResult } from "./enquiryService";
import { Button } from "@/components/ui/Button";

interface TutorEnquiryFormProps {
  onClose: () => void;
  initialClass?: string;
  initialLocality?: string;
}

export function TutorEnquiryForm({
  onClose,
  initialClass = "",
  initialLocality = "",
}: TutorEnquiryFormProps) {
  const [formData, setFormData] = useState<TutorEnquiryFormData>({
    ...INITIAL_FORM_DATA,
    studentClass: initialClass || "",
    locality: initialLocality || "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  const [stepError, setStepError] = useState<{ field: string; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const totalSteps = 5;
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Field change handler that preserves all values and clears related errors
  const handleFieldChange = (updated: Partial<TutorEnquiryFormData>) => {
    setFormData((prev) => ({ ...prev, ...updated }));
    if (stepError && Object.keys(updated).includes(stepError.field)) {
      setStepError(null);
    }
  };

  // Move to a specific step with direction-based animation
  const goToStep = (targetStep: number, targetDirection: "forward" | "backward") => {
    if (isAnimating || targetStep === currentStep) return;
    setIsAnimating(true);
    setDirection(targetDirection);
    setCurrentStep(targetStep);

    // Scroll container to top smoothly on step change
    if (formContainerRef.current) {
      formContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  // Next step handler with validation
  const handleNext = () => {
    if (isSubmitting || isAnimating) return;

    // Validate current step
    const error = validateStep(currentStep, formData);
    if (error) {
      setStepError({ field: String(error.field), message: error.message });

      // Focus invalid field
      const fieldEl = document.getElementById(String(error.field));
      if (fieldEl) fieldEl.focus();
      return;
    }

    // Step is valid, clear error and advance
    setStepError(null);
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1, "forward");
    }
  };

  // Previous step handler
  const handlePrevious = () => {
    if (isSubmitting || isAnimating || currentStep <= 1) return;
    setStepError(null);
    goToStep(currentStep - 1, "backward");
  };

  // Submit complete form
  const handleSubmit = async () => {
    if (isSubmitting) return;

    // 1. Validate entire form from step 1 to 5
    const fullError = validateEntireForm(formData);
    if (fullError) {
      setStepError({ field: String(fullError.field), message: fullError.message });

      // If error is on an earlier slide, jump to that slide
      if (fullError.step !== currentStep) {
        const navDirection = fullError.step < currentStep ? "backward" : "forward";
        goToStep(fullError.step, navDirection);
      }

      // Focus field after slide transition
      setTimeout(() => {
        const fieldEl = document.getElementById(String(fullError.field));
        if (fieldEl) fieldEl.focus();
      }, 400);

      return;
    }

    // 2. Submit to service
    setIsSubmitting(true);
    setStepError(null);

    try {
      const result = await submitTutorEnquiry(formData);
      setSubmissionResult(result);

      // If server returned field validation errors, map to relevant step
      if (result.status === "error" && result.fieldErrors) {
        const firstErrorKey = Object.keys(result.fieldErrors)[0];
        const errorMsg = result.fieldErrors[firstErrorKey];
        setStepError({ field: firstErrorKey, message: errorMsg });
      }
    } catch {
      setSubmissionResult({
        status: "error",
        message: "An unexpected error occurred. Please try again or reach out on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to start a new enquiry
  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setStepError(null);
    setSubmissionResult(null);
  };

  // ====================================================
  // SUCCESS VIEW
  // ====================================================
  if (submissionResult?.status === "success") {
    return (
      <div className="w-full max-w-2xl mx-auto my-auto p-6 sm:p-10 text-center flex flex-col items-center justify-center animate-fade-in">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D7F6F1] border-2 border-[#35D0BA] flex items-center justify-center mb-6 shadow-md">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#0F6F63]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#101D36] tracking-tight">
          Inquiry Successfully Sent!
        </h3>

        <p className="mt-3 text-sm sm:text-base text-[#53647D] max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-[#101D36]">{formData.parentName}</strong>! We have received your tuition request for{" "}
          <strong className="text-[#101D36]">{formData.studentClass}</strong> in{" "}
          <strong className="text-[#101D36]">{formData.locality}</strong>.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-[#F4F8FC] border border-[#D7E2EE] text-left text-xs sm:text-sm text-[#344054] w-full max-w-md space-y-1.5">
          <div className="text-[11px] font-bold text-[#53647D] uppercase tracking-wider mb-1">
            Confirmed Details
          </div>
          <div>• <strong>Class</strong>: {formData.studentClass}</div>
          <div>• <strong>Subjects</strong>: {formData.subjects.join(", ")}</div>
          <div>• <strong>Preferred Timing</strong>: {formData.preferredTiming}</div>
          <div>• <strong>Contact Mobile</strong>: +91 {formData.phoneNumber}</div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          {submissionResult.whatsappUrl ? (
            <a
              href={submissionResult.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Continue on WhatsApp</span>
            </a>
          ) : null}

          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm border-[#D7E2EE] hover:bg-[#EAF0F8]"
          >
            Close Window
          </Button>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-6 text-xs text-[#53647D] hover:text-[#101D36] underline cursor-pointer inline-flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Submit another inquiry</span>
        </button>
      </div>
    );
  }

  // ====================================================
  // FORM SLIDE VIEW
  // ====================================================
  return (
    <div
      ref={formContainerRef}
      className="w-full h-full flex flex-col justify-between overflow-y-auto px-4 sm:px-6 md:px-12 py-3 sm:py-6"
    >
      {/* Top Header: Progress Indicator */}
      <div className="shrink-0 w-full pt-1 pb-2">
        <FormProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Main Slide Content Area with Smooth Horizontal Slide Transition */}
      <div className="flex-1 flex items-center justify-center py-4 my-auto relative overflow-hidden max-w-5xl mx-auto w-full">
        <div
          key={currentStep}
          className={`w-full transition-all duration-350 ease-out transform ${
            direction === "forward" ? "animate-slide-left" : "animate-slide-right"
          }`}
        >
          <FormStepRenderer
            currentStep={currentStep}
            formData={formData}
            onChange={handleFieldChange}
            errorField={stepError?.field}
          />
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="shrink-0 w-full border-t border-[#D7E2EE]/60 pt-2">
        <FormNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          errorMessage={stepError?.message}
        />
      </div>
    </div>
  );
}
