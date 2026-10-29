export interface TutorEnquiryFormData {
  studentClass: string;
  subjects: string[];
  customSubject?: string;
  preferredTiming: string;
  locality: string;
  customLocality?: string;
  budgetRange: string;
  parentName: string;
  phoneNumber: string;
  additionalNotes: string;
  agreedToPolicy: boolean;
}

export interface FormStepError {
  step: number;
  field: keyof TutorEnquiryFormData;
  message: string;
}

export const INITIAL_FORM_DATA: TutorEnquiryFormData = {
  studentClass: "",
  subjects: [],
  customSubject: "",
  preferredTiming: "",
  locality: "",
  customLocality: "",
  budgetRange: "₹4,000 – ₹6,500 / month",
  parentName: "",
  phoneNumber: "",
  additionalNotes: "",
  agreedToPolicy: true,
};

export const CLASS_OPTIONS = [
  { label: "UKG", category: "Pre-Primary" },
  { label: "Class 1", category: "Primary" },
  { label: "Class 2", category: "Primary" },
  { label: "Class 3", category: "Primary" },
  { label: "Class 4", category: "Primary" },
  { label: "Class 5", category: "Primary" },
  { label: "Class 6", category: "Middle" },
  { label: "Class 7", category: "Middle" },
  { label: "Class 8", category: "Middle" },
  { label: "Class 9", category: "Secondary" },
  { label: "Class 10", category: "Secondary" },
];

export const SUBJECT_OPTIONS = [
  "All School Subjects",
  "Mathematics",
  "Science (Phy/Chem/Bio)",
  "English & Grammar",
  "Social Science (SST)",
  "Hindi",
  "Computer / Coding",
  "Sanskrit",
];

export const TIMING_OPTIONS = [
  { label: "Evening (After 5 PM)", desc: "Most preferred by school students" },
  { label: "Late Evening (6 PM – 8 PM)", desc: "Ideal after tuition/sports" },
  { label: "Afternoon (2 PM – 5 PM)", desc: "Post lunch homework & study" },
  { label: "Morning (6:30 AM – 8 AM)", desc: "Early morning fresh focus" },
  { label: "Flexible / Mutually Agreed", desc: "Teacher & parent decide together" },
];

export const LOCALITY_OPTIONS = [
  "Kankarbagh",
  "Boring Road",
  "Danapur",
  "Raja Bazar",
  "Rajendra Nagar",
  "Bailey Road",
  "Patliputra",
  "Kadamkuan",
  "Khagaul",
  "Phulwari Sharif",
  "Rajapull",
  "Hartali Mor",
  "Patna (Other Locality)",
];

export const BUDGET_OPTIONS = [
  "₹2,500 – ₹4,000 / month",
  "₹4,000 – ₹6,500 / month",
  "₹6,500 – ₹9,000 / month",
  "₹9,000+ / month (Senior/Specialist)",
];

/**
 * Validates fields on a specific step.
 * Returns null if valid, or an error message.
 */
export function validateStep(
  step: number,
  data: TutorEnquiryFormData
): FormStepError | null {
  switch (step) {
    case 1:
      if (!data.studentClass || !data.studentClass.trim()) {
        return {
          step: 1,
          field: "studentClass",
          message: "Kripya student ki class select kijiye.",
        };
      }
      return null;

    case 2:
      if (!data.subjects || data.subjects.length === 0) {
        return {
          step: 2,
          field: "subjects",
          message: "Kam se kam ek subject select kijiye.",
        };
      }
      return null;

    case 3:
      if (!data.preferredTiming || !data.preferredTiming.trim()) {
        return {
          step: 3,
          field: "preferredTiming",
          message: "Kripya tuition ke liye suitable timing select kijiye.",
        };
      }
      return null;

    case 4:
      if (!data.locality || !data.locality.trim()) {
        return {
          step: 4,
          field: "locality",
          message: "Kripya Patna me apna residential area select kijiye.",
        };
      }
      if (
        data.locality === "Patna (Other Locality)" &&
        (!data.customLocality || !data.customLocality.trim())
      ) {
        return {
          step: 4,
          field: "customLocality",
          message: "Kripya apna locality name likhiye.",
        };
      }
      return null;

    case 5:
      if (!data.parentName || !data.parentName.trim()) {
        return {
          step: 5,
          field: "parentName",
          message: "Kripya Parent ya Guardian ka naam enter kijiye.",
        };
      }

      const cleanPhone = data.phoneNumber.replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length !== 10) {
        return {
          step: 5,
          field: "phoneNumber",
          message: "Kripya 10-digit mobile number enter kijiye.",
        };
      }

      // Check if starts with valid Indian mobile prefix (6, 7, 8, 9)
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        return {
          step: 5,
          field: "phoneNumber",
          message: "Kripya valid 10-digit Indian mobile number enter kijiye (starts with 6-9).",
        };
      }

      return null;

    default:
      return null;
  }
}

/**
 * Validates the complete form across all steps.
 * Returns the first error found, or null if valid.
 */
export function validateEntireForm(
  data: TutorEnquiryFormData
): FormStepError | null {
  for (let s = 1; s <= 5; s++) {
    const error = validateStep(s, data);
    if (error) return error;
  }
  return null;
}
