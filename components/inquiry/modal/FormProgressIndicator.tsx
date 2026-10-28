"use client";

import React from "react";

interface FormProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = [
  "Class Selection",
  "Subjects",
  "Preferred Timing",
  "Locality & Budget",
  "Contact Details",
];

export function FormProgressIndicator({
  currentStep,
  totalSteps,
}: FormProgressIndicatorProps) {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-2 select-none">
      {/* Top Meta: Step Count & Current Label */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#D7F6F1] text-[#0F6F63] font-black text-xs uppercase tracking-wider">
            {currentStep}/{totalSteps} Steps
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#101D36] truncate">
            {STEP_LABELS[currentStep - 1] || "Requirement"}
          </span>
        </div>
        <span className="text-xs font-semibold text-[#53647D]">
          {progressPercentage}% Completed
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative w-full h-2 bg-[#EAF0F8] rounded-full overflow-hidden border border-[#D7E2EE]">
        <div
          className="h-full bg-gradient-to-r from-[#35D0BA] to-[#0F6F63] rounded-full transition-all duration-400 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Step Dots (Desktop / Tablet) */}
      <div className="hidden sm:flex justify-between items-center mt-2 px-1">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => {
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className="flex items-center gap-1.5"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#35D0BA] scale-100 ring-2 ring-[#35D0BA]/30"
                    : isCurrent
                    ? "bg-[#101D36] scale-125 ring-2 ring-[#101D36]/20"
                    : "bg-[#D7E2EE]"
                }`}
              />
              <span
                className={`text-[11px] font-medium hidden md:inline transition-colors ${
                  isCurrent
                    ? "text-[#101D36] font-bold"
                    : isCompleted
                    ? "text-[#0F6F63]"
                    : "text-[#8A9EB8]"
                }`}
              >
                {STEP_LABELS[stepNumber - 1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
