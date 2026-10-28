import React from "react";
import Link from "next/link";
import { Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D7F6F1] text-[#101D36] text-2xl font-extrabold border border-[#35D0BA]/40">
          404
        </div>

        <h1 className="text-3xl font-extrabold text-[#101D36] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-[#53647D] leading-relaxed">
          The page you are looking for does not exist or has been moved. You can
          explore our active home tuition services in Patna below.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="accent" size="md" href="/">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Back to Homepage</span>
          </Button>
          <Button variant="outline" size="md" href="/home-tuition/patna/">
            <MapPin className="w-4 h-4 mr-1.5" />
            <span>Patna Localities</span>
          </Button>
        </div>

        <div className="pt-4 border-t border-[#D7E2EE] text-xs text-[#53647D]">
          Looking for a specific grade?{" "}
          <Link
            href="/classes/"
            className="text-[#101D36] font-semibold underline hover:text-[#0F6F63]"
          >
            Browse UKG to Class 10
          </Link>
        </div>
      </div>
    </div>
  );
}
