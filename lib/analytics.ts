/**
 * Structured dataLayer events for GTM / GA4.
 * All helpers are no-ops on the server and never throw.
 */

export type WhatsAppButtonLocation = string;

export interface WhatsAppClickEvent {
  event: "whatsapp_click";
  button_location: string;
  page_path: string;
}

export interface TutorFormStepEvent {
  event: "tutor_form_step";
  step_number: number;
  step_name: string;
  selected_class: string;
  selected_locality: string;
  page_path: string;
}

export interface TutorLeadSubmittedEvent {
  event: "tutor_lead_submitted";
  form_type: "parent_enquiry" | "tutor_registration";
  selected_class: string;
  selected_locality: string;
  page_path: string;
}

export type AnalyticsEvent =
  | WhatsAppClickEvent
  | TutorFormStepEvent
  | TutorLeadSubmittedEvent;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Step names for the multi-step parent enquiry form (index 0 = step 1). */
export const ENQUIRY_STEP_NAMES = [
  "class",
  "subjects",
  "timing",
  "location_budget",
  "gender",
  "contact",
] as const;

export function getEnquiryStepName(stepNumber: number): string {
  return ENQUIRY_STEP_NAMES[stepNumber - 1] ?? `step_${stepNumber}`;
}

function currentPath(): string {
  return typeof window === "undefined" ? "" : window.location.pathname;
}

export function pushDataLayerEvent(payload: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ...payload });
  } catch {
    // Analytics must never break the UI.
  }
}

export function trackWhatsAppClick(buttonLocation: WhatsAppButtonLocation): void {
  pushDataLayerEvent({
    event: "whatsapp_click",
    button_location: buttonLocation,
    page_path: currentPath(),
  });
}

export function trackTutorFormStep(params: {
  stepNumber: number;
  selectedClass?: string;
  selectedLocality?: string;
}): void {
  pushDataLayerEvent({
    event: "tutor_form_step",
    step_number: params.stepNumber,
    step_name: getEnquiryStepName(params.stepNumber),
    selected_class: params.selectedClass ?? "",
    selected_locality: params.selectedLocality ?? "",
    page_path: currentPath(),
  });
}

export function trackTutorLeadSubmitted(params: {
  formType: TutorLeadSubmittedEvent["form_type"];
  selectedClass?: string;
  selectedLocality?: string;
}): void {
  pushDataLayerEvent({
    event: "tutor_lead_submitted",
    form_type: params.formType,
    selected_class: params.selectedClass ?? "",
    selected_locality: params.selectedLocality ?? "",
    page_path: currentPath(),
  });
}
