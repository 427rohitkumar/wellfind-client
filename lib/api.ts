/**
 * Wellfind Academic Client — Centralized Backend API Client
 *
 * Connects public frontend forms with the Wellfind Academic API (wellfind-api).
 * Base URL is set via NEXT_PUBLIC_API_URL in .env.local (dev) or .env.production (prod).
 * Production value: https://api.wellfindacademic.com
 */

// Fallback must never be localhost in a production build (env files are gitignored,
// so a CI/host build without NEXT_PUBLIC_API_URL would otherwise ship localhost).
const DEFAULT_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wellfindacademic.com'
    : 'http://localhost:3004';

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
).replace(/\/+$/, '');

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  fieldErrors?: Record<string, string>;
}

export interface StudentEnquiryInput {
  parentName?: string;
  name?: string;
  studentGender?: 'male' | 'female' | 'other';
  preferredTeacherGender?: 'male' | 'female' | 'any';
  phoneNumber: string;
  studentClass: string;
  locality: string;
  customLocality?: string;
  subjects: string[] | string;
  customSubject?: string;
  preferredTiming?: string;
  budgetRange?: string;
  additionalNotes?: string;
  agreedToPolicy?: boolean;
}

export interface TeacherApplicationInput {
  fullName: string;
  phoneNumber?: string;
  mobileNumber?: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
  qualification?: string;
  highestQualification?: string;
  experience?: string;
  teachingExperience?: string;
  subjects?: string;
  primarySubject?: string;
  classes?: string;
  classLevel?: string;
  locality?: string;
  teachingLocality?: string;
  availability?: string;
  preferredAvailability?: string;
  additionalNotes?: string;
  agreedToPolicy?: boolean;
  aadhaarDocument?: File | null;
  qualificationDocument?: File | null;
}

/**
 * Normalizes subjects input into a non-empty string[] as required by backend.
 */
function normalizeSubjects(raw: string[] | string): string[] {
  if (Array.isArray(raw)) {
    const cleaned = raw.map((s) => s.trim()).filter(Boolean);
    return cleaned.length > 0 ? cleaned : ['All School Subjects'];
  }
  if (typeof raw === 'string' && raw.trim()) {
    const parts = raw.split(',').map((s) => s.trim()).filter(Boolean);
    return parts.length > 0 ? parts : [raw.trim()];
  }
  return ['All School Subjects'];
}

/**
 * Clean and normalize phone numbers (e.g. "+91 98765 43210" -> "9876543210" or keep valid digits).
 */
function cleanPhone(phone: string): string {
  const digitsOnly = phone.replace(/[^\d+]/g, '');
  return digitsOnly;
}

/**
 * Submit student/parent inquiry to POST /api/student-enquiries.
 */
export async function submitStudentEnquiry(
  input: StudentEnquiryInput
): Promise<ApiResponse> {
  const endpoint = `${API_BASE_URL}/api/student-enquiries`;

  const studentName = (input.parentName || input.name || '').trim();
  const subjectsArray = normalizeSubjects(input.subjects);

  // If customSubject was provided, ensure it is added to subjects if not already there
  if (input.customSubject && input.customSubject.trim() && !subjectsArray.includes(input.customSubject.trim())) {
    subjectsArray.push(input.customSubject.trim());
  }

  const payload: Record<string, unknown> = {
    name: studentName,
    phoneNumber: cleanPhone(input.phoneNumber || ''),
    studentClass: input.studentClass?.trim() || '',
    locality: input.locality?.trim() || '',
    subjects: subjectsArray,
    preferredTiming: (input.preferredTiming || 'Flexible').trim(),
    budgetRange: (input.budgetRange || '₹4,000 – ₹6,500 / month').trim(),
    agreedToPolicy: true,
  };

  if (input.studentGender) payload.studentGender = input.studentGender;
  if (input.preferredTeacherGender) payload.preferredTeacherGender = input.preferredTeacherGender;
  if (input.customSubject?.trim()) {
    payload.customSubject = input.customSubject.trim();
  }
  if (input.customLocality?.trim()) {
    payload.customLocality = input.customLocality.trim();
  }
  if (input.additionalNotes?.trim()) {
    payload.additionalNotes = input.additionalNotes.trim();
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (response.ok) {
      return {
        success: true,
        message: data?.message || 'Aapki inquiry successfully submit ho gayi hai!',
        data: data?.enquiry,
      };
    }

    return {
      success: false,
      message: data?.error || data?.message || `Submission failed with status ${response.status}`,
      error: data?.error || data?.message,
      fieldErrors: data?.errors,
    };
  } catch (err) {
    const errorMsg = (err as Error)?.message || 'Network connection failed.';
    return {
      success: false,
      message: `Backend connection error: ${errorMsg}. Please ensure the API is running at ${API_BASE_URL}.`,
      error: errorMsg,
    };
  }
}

/**
 * Submit teacher job application to POST /api/teacher-enquiries (multipart/form-data).
 */
export async function submitTeacherApplication(
  input: TeacherApplicationInput | FormData
): Promise<ApiResponse> {
  const endpoint = `${API_BASE_URL}/api/teacher-enquiries`;

  let formData: FormData;

  if (input instanceof FormData) {
    formData = input;
  } else {
    formData = new FormData();
    formData.append('fullName', (input.fullName || '').trim());
    formData.append(
      'mobileNumber',
      cleanPhone((input.mobileNumber || input.phoneNumber || '').trim())
    );

    if (input.email && input.email.trim()) {
      formData.append('email', input.email.trim());
    }

    if (input.gender) {
      formData.append('gender', input.gender);
    }

    formData.append(
      'highestQualification',
      (input.highestQualification || input.qualification || '').trim()
    );
    formData.append(
      'teachingExperience',
      (input.teachingExperience || input.experience || '').trim()
    );
    formData.append(
      'primarySubject',
      (input.primarySubject || input.subjects || '').trim()
    );
    formData.append(
      'classLevel',
      (input.classLevel || input.classes || '').trim()
    );
    formData.append(
      'teachingLocality',
      (input.teachingLocality || input.locality || '').trim()
    );
    formData.append(
      'preferredAvailability',
      (input.preferredAvailability || input.availability || '').trim()
    );

    if (input.additionalNotes && input.additionalNotes.trim()) {
      formData.append('additionalNotes', input.additionalNotes.trim());
    }

    formData.append('agreedToPolicy', 'true');

    if (input.aadhaarDocument instanceof File) {
      formData.append('aadhaarDocument', input.aadhaarDocument);
    }
    if (input.qualificationDocument instanceof File) {
      formData.append('qualificationDocument', input.qualificationDocument);
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const data = await response.json().catch(() => null);

    if (response.ok) {
      return {
        success: true,
        message: data?.message || 'Teacher application submitted successfully.',
        data: data?.application,
      };
    }

    return {
      success: false,
      message: data?.error || data?.message || `Application failed with status ${response.status}`,
      error: data?.error || data?.message,
    };
  } catch (err) {
    const errorMsg = (err as Error)?.message || 'Network connection failed.';
    return {
      success: false,
      message: `Backend connection error: ${errorMsg}. Please ensure the API is running at ${API_BASE_URL}.`,
      error: errorMsg,
    };
  }
}
