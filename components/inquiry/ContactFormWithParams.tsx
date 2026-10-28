"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

function FormWithParams() {
  const searchParams = useSearchParams();
  const initialClass = searchParams.get("class") || "";
  const initialLocality = searchParams.get("locality") || "";

  return (
    <InquiryForm
      initialClass={initialClass}
      initialLocality={initialLocality}
    />
  );
}

export function ContactFormWithParams() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-500">Loading inquiry form...</p>
        </div>
      }
    >
      <FormWithParams />
    </Suspense>
  );
}

