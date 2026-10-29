"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { TutorEnquiryForm } from "./TutorEnquiryForm";

interface TutorEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: string;
  initialLocality?: string;
}

export function TutorEnquiryModal({
  isOpen,
  onClose,
  initialClass = "",
  initialLocality = "",
}: TutorEnquiryModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Synchronize render lifecycle with opening/closing animation
  useEffect(() => {
    let animFrame: number;
    let timer: NodeJS.Timeout;

    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
      timer = setTimeout(() => {
        setShouldRender(true);
        animFrame = requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      }, 0);
    } else {
      timer = setTimeout(() => {
        setIsAnimating(false);
        const closeTimer = setTimeout(() => {
          setShouldRender(false);
          // Restore focus to trigger CTA
          if (previouslyFocusedElementRef.current) {
            previouslyFocusedElementRef.current.focus();
          }
        }, 350);
        return () => clearTimeout(closeTimer);
      }, 0);
    }

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrame);
    };
  }, [isOpen]);

  // Lock background scroll when open
  useEffect(() => {
    if (!shouldRender) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Compensate for scrollbar width to prevent layout jump
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [shouldRender]);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!shouldRender) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldRender, onClose]);

  // Focus trap / initial focus on close button
  useEffect(() => {
    if (isAnimating && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isAnimating]);

  if (!shouldRender) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-title"
      className={`fixed inset-0 z-50 w-screen min-h-screen overflow-y-auto overflow-x-hidden overscroll-contain bg-white select-none transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isAnimating
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{
        width: "100vw",
      }}
    >
      <h2 id="modal-enquiry-title" className="sr-only">
        Wellfind Academic Home Tutor Enquiry Form
      </h2>

      {/* ======================================================== */}
      {/* DECORATIVE CORNER TEAL CIRCLES & AMBIENT GRAPHICS */}
      {/* ======================================================== */}
      {/* Top-Left Decorative Teal Circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-[#35D0BA]/15 blur-2xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-6 w-16 h-16 rounded-full border-2 border-[#35D0BA]/25 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 left-16 w-6 h-6 rounded-full bg-[#35D0BA]/30 -z-10"
      />

      {/* Bottom-Right Decorative Teal Circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#35D0BA]/12 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-10 w-20 h-20 rounded-full border-2 border-[#35D0BA]/25 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-24 w-8 h-8 rounded-full bg-[#35D0BA]/25 -z-10"
      />

      {/* Top-Right Close Button Header */}
      <div className="sticky top-0 relative w-full flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-[#D7E2EE]/60 bg-white/95 backdrop-blur-md z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#35D0BA] animate-pulse" />
          <span className="text-xs sm:text-sm font-black text-[#101D36] tracking-tight uppercase">
            Wellfind Academic — Home Tutor Enquiry
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close Enquiry Form (Press Escape)"
          className="p-2 sm:p-2.5 rounded-full bg-[#F4F8FC] border border-[#D7E2EE] text-[#101D36] hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] cursor-pointer shadow-2xs group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
        </button>
      </div>

      {/* ======================================================== */}
      {/* MAIN MULTI-STEP FORM BODY */}
      {/* ======================================================== */}
      <div className="w-full relative z-20">
        <TutorEnquiryForm
          onClose={onClose}
          initialClass={initialClass}
          initialLocality={initialLocality}
        />
      </div>
    </div>
  );
}
