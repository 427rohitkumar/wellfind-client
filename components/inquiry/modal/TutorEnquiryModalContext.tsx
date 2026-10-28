"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TutorEnquiryModal } from "./TutorEnquiryModal";

interface OpenModalOptions {
  initialClass?: string;
  initialLocality?: string;
}

interface TutorEnquiryModalContextType {
  isOpen: boolean;
  openModal: (options?: OpenModalOptions) => void;
  closeModal: () => void;
}

const TutorEnquiryModalContext = createContext<
  TutorEnquiryModalContextType | undefined
>(undefined);

export function useTutorEnquiryModal(): TutorEnquiryModalContextType {
  const context = useContext(TutorEnquiryModalContext);
  if (!context) {
    throw new Error(
      "useTutorEnquiryModal must be used within a TutorEnquiryModalProvider"
    );
  }
  return context;
}

export function TutorEnquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialClass, setInitialClass] = useState("");
  const [initialLocality, setInitialLocality] = useState("");

  const openModal = useCallback((options?: OpenModalOptions) => {
    if (options?.initialClass) setInitialClass(options.initialClass);
    if (options?.initialLocality) setInitialLocality(options.initialLocality);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global delegated click listener for "Find Your Tutor" buttons and #inquire links
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Check if clicked element or any ancestor is a modal trigger
      const trigger = target.closest<HTMLElement>(
        '[data-open-tutor-modal], a[href*="#inquire"], button'
      );

      if (!trigger) return;

      // 1. Explicit data attribute
      if (trigger.getAttribute("data-open-tutor-modal") === "true") {
        event.preventDefault();
        const initClass = trigger.getAttribute("data-initial-class") || "";
        const initLoc = trigger.getAttribute("data-initial-locality") || "";
        openModal({ initialClass: initClass, initialLocality: initLoc });
        return;
      }

      // 2. Links to #inquire
      const href = trigger.getAttribute("href") || "";
      if (href.includes("#inquire")) {
        event.preventDefault();
        const initClass = trigger.getAttribute("data-initial-class") || "";
        const initLoc = trigger.getAttribute("data-initial-locality") || "";
        openModal({ initialClass: initClass, initialLocality: initLoc });
        return;
      }

      // 3. Buttons/links with trigger keywords in text
      const text = trigger.textContent?.trim().toLowerCase() || "";
      if (
        text.includes("find your tutor") ||
        text.includes("find a tutor") ||
        text.includes("request a tutor") ||
        text.includes("book free trial") ||
        text.includes("book trial")
      ) {
        event.preventDefault();
        const initClass = trigger.getAttribute("data-initial-class") || "";
        const initLoc = trigger.getAttribute("data-initial-locality") || "";
        openModal({ initialClass: initClass, initialLocality: initLoc });
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [openModal]);

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen, openModal, closeModal]
  );

  return (
    <TutorEnquiryModalContext.Provider value={value}>
      {children}
      <TutorEnquiryModal
        isOpen={isOpen}
        onClose={closeModal}
        initialClass={initialClass}
        initialLocality={initialLocality}
      />
    </TutorEnquiryModalContext.Provider>
  );
}
