import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/config/site";

interface WhatsAppCTAProps {
  customMessage?: string;
  className?: string;
  variant?: "primary" | "accent" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function WhatsAppCTA({
  customMessage,
  className = "",
  variant = "whatsapp",
  size = "md",
  label = "Enquire on WhatsApp",
}: WhatsAppCTAProps) {
  const url = getWhatsAppUrl(customMessage);

  if (!url) {
    // If WhatsApp number is not configured in environment, render an informative prompt or link to inquiry form
    return (
      <Button
        variant="secondary"
        size={size}
        href="/contact/#inquire"
        className={className}
      >
        <MessageCircle className="w-4 h-4 text-[#35D0BA]" />
        <span>Request via Form</span>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      href={url}
      isExternal
      className={className}
      aria-label={`${label} (opens WhatsApp)`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>{label}</span>
    </Button>
  );
}
