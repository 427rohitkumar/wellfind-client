"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CONTACT_WHATSAPP_NUMBER } from "@/config/site";

const WHATSAPP_PREFIX = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`;

function resolveLocation(anchor: HTMLAnchorElement): string {
  const explicit = anchor.closest<HTMLElement>("[data-track-location]");
  if (explicit?.dataset.trackLocation) return explicit.dataset.trackLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  const section = anchor.closest<HTMLElement>("section[id]");
  if (section?.id) return section.id;
  return "page_body";
}

/**
 * Delegated listener: every link to the Wellfind WhatsApp number (CTA buttons,
 * footer, header, contact page...) fires one `whatsapp_click` dataLayer event.
 */
export function WhatsAppClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || !anchor.href.startsWith(WHATSAPP_PREFIX)) return;
      trackWhatsAppClick(resolveLocation(anchor));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
