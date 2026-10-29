export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    // Contact details are strictly environment-configured to avoid publishing unconfirmed contact details
    phone: string | null;
    whatsapp: string | null;
    email: string | null;
    address: string | null;
    leadEndpoint: string | null;
  };
  navigation: Array<{
    title: string;
    href: string;
  }>;
  serviceAreas: Array<{
    name: string;
    slug: string;
    href: string;
    shortDescription: string;
  }>;
  classes: Array<{
    label: string;
    slug: string;
    href: string;
    category: "pre-primary" | "primary" | "middle" | "secondary";
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Wellfind Academic",
  shortName: "Wellfind",
  tagline: "One-to-One Education, Managed by Wellfind",
  subTagline:
    "UKG se Class 10 tak apne bachche ki class, subject aur location ke according suitable home tutor dhoondhein.",
  description:
    "One-to-One Home Education from UKG to Class 10. Teachers deliver the education, but Wellfind maintains the quality.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wellfindacademic.com",
  ogImage: "https://www.wellfindacademic.com/OG-Image.png",
  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "9661421824",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919661421824",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "427rohitkumar@gmail.com",
    address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || null,
    leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || null,
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "Classes", href: "/classes/" },
    { title: "About", href: "/about/" },
    { title: "Contact", href: "/contact/" },
  ],
  serviceAreas: [
    {
      name: "Boring Road",
      slug: "boring-road",
      href: "/patna/boring-road",
      shortDescription:
        "Academic coaching support along Boring Road, Canal Road, and Anandpuri.",
    },
    {
      name: "Kankarbagh",
      slug: "kankarbagh",
      href: "/patna/kankarbagh",
      shortDescription:
        "Tutors available across colonies and sectors in Kankarbagh.",
    },
    {
      name: "Bailey Road",
      slug: "bailey-road",
      href: "/patna/bailey-road",
      shortDescription:
        "Tutors serving families along Bailey Road, Jagdeo Path, and Raja Bazar.",
    },
    {
      name: "Patliputra",
      slug: "patliputra",
      href: "/patna/patliputra",
      shortDescription:
        "Academic support across Patliputra Colony and surrounding sectors.",
    },
    {
      name: "Danapur",
      slug: "danapur",
      href: "/patna/danapur",
      shortDescription:
        "Tutor matching for Danapur Cantt, Khagaul Road, and Saguna Mor areas.",
    },
    {
      name: "Kadamkuan",
      slug: "kadamkuan",
      href: "/patna/kadamkuan",
      shortDescription:
        "Tutoring services for Nala Road, Sahityakar Colony, and Kadamkuan.",
    },
    {
      name: "Khagaul",
      slug: "khagaul",
      href: "/patna/khagaul",
      shortDescription:
        "Academic support for families in Khagaul and Railway Colony.",
    },
    {
      name: "Phulwari Sharif",
      slug: "phulwari-sharif",
      href: "/patna/phulwari-sharif",
      shortDescription:
        "One-to-one learning for students across Phulwari Sharif and AIIMS Road.",
    },
    {
      name: "Rajapull",
      slug: "rajapull",
      href: "/patna/rajapull",
      shortDescription:
        "Tuition services connecting central Bailey Road and Rajapull.",
    },
    {
      name: "Patna (Central)",
      slug: "patna",
      href: "/patna",
      shortDescription:
        "Comprehensive tutoring assistance across central Patna residential hubs.",
    },
    {
      name: "Rajendra Nagar",
      slug: "rajendra-nagar",
      href: "/patna/rajendra-nagar",
      shortDescription:
        "Dedicated tutor matching around Arya Kumar Road and Dinkar Golambar.",
    },
  ],
  classes: [
    { label: "UKG", slug: "ukg", href: "/classes/ukg", category: "pre-primary" },
    { label: "Class 1", slug: "class-1", href: "/classes/class-1", category: "primary" },
    { label: "Class 2", slug: "class-2", href: "/classes/class-2", category: "primary" },
    { label: "Class 3", slug: "class-3", href: "/classes/class-3", category: "primary" },
    { label: "Class 4", slug: "class-4", href: "/classes/class-4", category: "primary" },
    { label: "Class 5", slug: "class-5", href: "/classes/class-5", category: "primary" },
    { label: "Class 6", slug: "class-6", href: "/classes/class-6", category: "middle" },
    { label: "Class 7", slug: "class-7", href: "/classes/class-7", category: "middle" },
    { label: "Class 8", slug: "class-8", href: "/classes/class-8", category: "middle" },
    { label: "Class 9", slug: "class-9", href: "/classes/class-9", category: "secondary" },
    { label: "Class 10", slug: "class-10", href: "/classes/class-10", category: "secondary" },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string | null {
  if (!siteConfig.contact.whatsapp) return null;
  const cleanNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!cleanNumber) return null;
  if (!customMessage) {
    return `https://wa.me/${cleanNumber}`;
  }
  const text = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

export function getPhoneUrl(): string | null {
  if (!siteConfig.contact.phone) return null;
  const cleanNumber = siteConfig.contact.phone.replace(/[^\d+]/g, "");
  if (!cleanNumber) return null;
  if (!cleanNumber.startsWith("+")) {
    return cleanNumber.startsWith("91") ? `tel:+${cleanNumber}` : `tel:+91${cleanNumber}`;
  }
  return `tel:${cleanNumber}`;
}
