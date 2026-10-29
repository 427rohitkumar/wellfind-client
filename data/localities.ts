import localitiesData from "./localities.json";

export interface LocalityFaq {
  question: string;
  answer: string;
}

export interface ProcessStepData {
  step: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  sparkDirection: "left" | "right";
}

export interface LocalityData {
  slug: string;
  name: string;
  serviceName: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  heroTitle: string;
  heroDescription: string;
  ctaText: string;
  keywords: string[];
  hero: {
    headlineLine1: string;
    headlineHighlight1: string;
    headlineLine2: string;
    headlineHighlight2: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
  };
  howItWorks: {
    eyebrow: string;
    headingPrefix: string;
    headingHighlight: string;
    steps?: ProcessStepData[];
  };
  managedModel: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    description: string;
  };
  locationsSection: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
  };
  progressTracking: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
  };
  teachersSection: {
    badge: string;
    headingHighlight: string;
    heading: string;
    description: string;
  };
  teacherEvaluation: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
  };
  teacherNetwork: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  faqsSection: {
    eyebrow: string;
    title: string;
    description: string;
    faqs: LocalityFaq[];
  };
  inquirySection: {
    badge: string;
    title: string;
    description: string;
    initialLocality: string;
  };
}

export const ACTIVE_SUB_LOCALITY_SLUGS = [
  "boring-road",
  "kankarbagh",
  "rajendra-nagar",
  "bailey-road",
  "patliputra",
  "danapur",
  "kadamkuan",
  "khagaul",
  "phulwari-sharif",
  "rajapull",
] as const;

export const localities: Record<string, LocalityData> =
  localitiesData as unknown as Record<string, LocalityData>;

export function getLocality(slug: string): LocalityData | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return localities[normalized];
}

export function getActiveSubLocalitySlugs(): string[] {
  return [...ACTIVE_SUB_LOCALITY_SLUGS];
}

export function getActiveSubLocalities(): LocalityData[] {
  return ACTIVE_SUB_LOCALITY_SLUGS.map((slug) => localities[slug]).filter(
    (loc): loc is LocalityData => Boolean(loc)
  );
}

export function getAllLocalitySlugs(): string[] {
  return ["patna", ...ACTIVE_SUB_LOCALITY_SLUGS];
}
