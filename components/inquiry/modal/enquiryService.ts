import { siteConfig } from "@/config/site";
import { TutorEnquiryFormData } from "./formSchema";
import { submitStudentEnquiry } from "@/lib/api";

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
    `• *Student Name*: ${data.parentName}`,
    `• *Student Gender*: ${data.studentGender || "-"}`,
    `• *Teacher Preference*: ${data.preferredTeacherGender || "any"}`,
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
  const locality =
    data.locality === "Patna (Other Locality)" && data.customLocality?.trim()
      ? data.customLocality.trim()
      : data.locality;

  const res = await submitStudentEnquiry({
    parentName: data.parentName.trim(),
    name: data.parentName.trim(),
    studentGender: data.studentGender || undefined,
    preferredTeacherGender: data.preferredTeacherGender || "any",
    phoneNumber: data.phoneNumber.trim(),
    studentClass: data.studentClass,
    locality,
    customLocality: data.customLocality?.trim(),
    subjects: data.subjects,
    customSubject: data.customSubject?.trim(),
    preferredTiming: data.preferredTiming,
    budgetRange: data.budgetRange,
    additionalNotes: data.additionalNotes?.trim(),
    agreedToPolicy: true,
  });

  if (res.success) {
    return {
      status: "success",
      message: res.message || "Aapki inquiry successfully submit ho gayi hai!",
    };
  }

  return {
    status: "error",
    message: res.message || res.error || "Submission could not be completed. Please try again.",
    fieldErrors: res.fieldErrors,
  };
}
