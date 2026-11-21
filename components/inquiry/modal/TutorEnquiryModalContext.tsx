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

  // Global delegated click listener for "Find Your Tutor" buttons
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Never intercept clicks originating inside forms, embedded inquiry sections,
      // or elements explicitly marked with data-no-modal
      if (
        target.closest("form") ||
        target.closest("#inquiry-form-card") ||
        target.closest("[data-inquiry-form]") ||
        target.closest("[data-no-modal]") ||
        target.closest("[data-no-tutor-modal]") ||
        (target as HTMLButtonElement).type === "submit"
      ) {
        return;
      }

      // Check if clicked element or any ancestor is a configured modal trigger
      const trigger = target.closest<HTMLElement>(
        '[data-open-tutor-modal="true"]'
      );

      if (!trigger) return;

      // Prevent default navigation and open modal
      event.preventDefault();
      const initClass = trigger.getAttribute("data-initial-class") || "";
      const initLoc = trigger.getAttribute("data-initial-locality") || "";
      openModal({ initialClass: initClass, initialLocality: initLoc });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
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
