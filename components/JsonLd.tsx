import { siteConfig, CONTACT_EMAIL, CONTACT_PHONE_SCHEMA } from "@/config/site";
import { SEO_LOCALITIES, SEO_CITY, type SeoFaq } from "@/data/seo-locations";

type JsonLdObject = Record<string, unknown>;

/** Serialises JSON-LD safely for inline <script> (escapes "<" to avoid breaking out of the tag). */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const json = JSON.stringify(data).replace(/</g, "\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

const abs = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path}`;

export function buildOrganizationJsonLd(): JsonLdObject {
  const areaServed = SEO_LOCALITIES.map((locality) => ({
    "@type": "Place",
    name: `${locality.name}, ${SEO_CITY}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_CITY,
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_SCHEMA,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_CITY,
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: SEO_CITY,
        address: {
          "@type": "PostalAddress",
          addressLocality: SEO_CITY,
          addressRegion: "Bihar",
          addressCountry: "IN",
        },
      },
      ...areaServed,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: CONTACT_PHONE_SCHEMA,
      email: CONTACT_EMAIL,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function buildFaqJsonLd(faqs: SeoFaq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path?: string }>
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.path ? { item: abs(item.path) } : {}),
      })
    ),
  };
}

export function buildServiceJsonLd(params: {
  name: string;
  description: string;
  path: string;
  areaName: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: "One-to-one home tuition",
    description: params.description,
    url: abs(params.path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "Place",
      name: params.areaName,
      address: {
        "@type": "PostalAddress",
        addressLocality: SEO_CITY,
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
    },
  };
}
