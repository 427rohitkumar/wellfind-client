import { siteConfig } from "@/config/site";
import { TutorEnquiryFormData } from "./formSchema";

export interface SubmissionResult {
  status: "success" | "endpoint_unconfigured" | "error";
  message: string;
  whatsappUrl?: string;
  fieldErrors?: Record<string, string>;
}

export function formatInquirySummary(data: TutorEnquiryFormData): string {
  const subjectsList = [...data.subjects];
  if (data.customSubject?.trim()) {
    subjectsList.push(data.customSubject.trim());
  }

  const localityText =
    data.locality === "Patna (Other Locality)" && data.customLocality?.trim()
      ? `Patna (${data.customLocality.trim()})`
      : data.locality;

  return [
    `🎓 *Wellfind Academic — Home Tutor Enquiry*`,
    `----------------------------------------`,
    `• *Student Class*: ${data.studentClass}`,
    `• *Required Subjects*: ${subjectsList.join(", ") || "All Subjects"}`,
    `• *Preferred Timing*: ${data.preferredTiming}`,
    `• *Residential Area*: ${localityText}`,
    `• *Budget Range*: ${data.budgetRange || "Flexible"}`,
    `• *Parent Name*: ${data.parentName}`,
    `• *Contact Number*: +91 ${data.phoneNumber}`,
    data.additionalNotes?.trim() ? `• *Special Notes*: ${data.additionalNotes.trim()}` : null,
    `----------------------------------------`,
    `Submitted from Wellfind Academic Website`,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function submitTutorEnquiry(
  data: TutorEnquiryFormData
): Promise<SubmissionResult> {
  const endpoint = siteConfig.contact.leadEndpoint;
  const summaryText = formatInquirySummary(data);

  // Prepare payload
  const payload = {
    parentName: data.parentName.trim(),
    phoneNumber: data.phoneNumber.trim(),
    studentClass: data.studentClass,
    locality:
      data.locality === "Patna (Other Locality)" && data.customLocality?.trim()
        ? data.customLocality.trim()
        : data.locality,
    subjects: data.subjects.join(", ") + (data.customSubject ? `, ${data.customSubject}` : ""),
    preferredTiming: data.preferredTiming,
    budgetRange: data.budgetRange,
    additionalNotes: data.additionalNotes?.trim() || "",
    source: "Full-Screen Tutor Enquiry Modal",
    submittedAt: new Date().toISOString(),
  };

  // Case 1: External Lead Endpoint is configured
  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return {
          status: "success",
          message: "Aapki inquiry successfully submit ho gayi hai!",
        };
      }

      // If server returned structured validation errors
      let errorMessage = "Submission could not be completed. Please try again.";
      let fieldErrors: Record<string, string> | undefined;

      try {
        const errorJson = await response.json();
        if (errorJson?.message) errorMessage = errorJson.message;
        if (errorJson?.errors) fieldErrors = errorJson.errors;
      } catch {
        // Non-JSON response
      }

      return {
        status: "error",
        message: errorMessage,
        fieldErrors,
      };
    } catch (err) {
      // Avoid logging full PII in console
      console.error("Enquiry submission network error:", (err as Error)?.message || "Unknown error");
      return {
        status: "error",
        message: "Network issue ke kaaran inquiry send nahi ho saki. Kripya dobara try karein ya WhatsApp se contact karein.",
      };
    }
  }

  // Case 2: Endpoint is not configured (Static/Jamstack deployment)
  // Transparent WhatsApp fallback using verified business WhatsApp
  if (siteConfig.contact.whatsapp) {
    const cleanNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(summaryText)}`;

    return {
      status: "success",
      message: "Enquiry details verified! Connecting to Wellfind Academic WhatsApp...",
      whatsappUrl: waUrl,
    };
  }

  // Case 3: Neither endpoint nor WhatsApp configured
  return {
    status: "endpoint_unconfigured",
    message: "Enquiry validated. Lead endpoint is pending configuration in this environment.",
  };
}
