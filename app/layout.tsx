import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { siteConfig } from "@/config/site";
import { TutorEnquiryModalProvider } from "@/components/inquiry/modal/TutorEnquiryModalContext";

// Google Tag Manager container. Override per environment with NEXT_PUBLIC_GTM_ID.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WH64GL42";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wellfind Academic | Managed One-to-One Education",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "home tuition in Patna",
    "home tutor in Patna",
    "one-to-one education",
    "UKG to Class 10 tuition",
    "managed home education",
    "Wellfind Academic",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Wellfind Academic | Managed One-to-One Education",
    description:
      "Quality-managed one-to-one home education for UKG to Class 10 in Patna. The right teacher, structured learning, and progress you can see.",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://www.wellfindacademic.com/OG-Image.png",
        width: 1741,
        height: 908,
        alt: "Wellfind Academic — managed one-to-one education for children from UKG to Class 10.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellfind Academic | Managed One-to-One Education",
    description:
      "Quality-managed one-to-one home education for UKG to Class 10 in Patna. The right teacher, structured learning, and progress you can see.",
    images: ["https://www.wellfindacademic.com/OG-Image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    areaServed: {
      "@type": "City",
      name: "Patna",
    },
    ...(siteConfig.contact.phone
      ? { telephone: siteConfig.contact.phone }
      : {}),
    ...(siteConfig.contact.email
      ? { email: siteConfig.contact.email }
      : {}),
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#EAF0F8] text-[#344054]">
        {GTM_ID && (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        )}
        <TutorEnquiryModalProvider>
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#101D36] focus:text-[#35D0BA] focus:rounded-md focus:shadow-xl focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </TutorEnquiryModalProvider>
      </body>
    </html>
  );
}
