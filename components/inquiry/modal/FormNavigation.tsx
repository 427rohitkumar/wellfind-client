"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  errorMessage?: string | null;
}

export function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting = false,
  errorMessage = null,
}: FormNavigationProps) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-3 pb-4 select-none">
      {/* Inline Step Error Banner */}
      {errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-3 px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-shake"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        {/* Previous Button */}
        <div>
          {!isFirstStep ? (
            <button
              type="button"
              onClick={onPrevious}
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D7E2EE] bg-white text-[#101D36] text-xs sm:text-sm font-bold hover:bg-[#F4F8FC] hover:border-[#B8CCE0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] disabled:opacity-50 cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          ) : (
            <div className="w-20" /> // Spacer for layout balance
          )}
        </div>

        {/* Step Indicator pill */}
        <div className="text-xs font-semibold text-[#53647D] hidden min-[400px]:block">
          Step {currentStep} of {totalSteps}
        </div>

        {/* Next or Submit Button */}
        <div>
          {!isLastStep ? (
            <Button
              type="button"
              variant="accent"
              size="md"
              onClick={onNext}
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="accent"
              size="md"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Tuition Request</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
