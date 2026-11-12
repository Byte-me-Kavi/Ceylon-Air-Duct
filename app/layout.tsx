import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceylonairduct.com"),
  title: "Ceylon Air Duct Pvt Ltd | HVAC Duct Manufacturer & Supplier, Sri Lanka",
  description:
    "Ceylon Air Duct Pvt Ltd is a Sri Lanka-based manufacturer and supplier of high-quality air duct systems, grills, diffusers, dampers and HVAC components. Trusted by local and international clients for precision fabrication and timely delivery.",
  keywords: [
    "air duct",
    "HVAC",
    "ductwork",
    "spiral duct",
    "square duct",
    "diffusers",
    "grills",
    "dampers",
    "sound attenuators",
    "Sri Lanka",
    "manufacturer",
    "supplier",
    "exporter",
    "Ceylon Air Duct",
  ],
  authors: [
    {
      name: "Ceylon Air Duct Lanka Pvt Ltd",
      url: "https://ceylonairduct.com",
    },
  ],
  openGraph: {
    title:
      "Ceylon Air Duct Lanka Pvt Ltd | HVAC Duct Manufacturer & Supplier, Sri Lanka",
    description:
      "Trusted Sri Lanka-based manufacturer and exporter of ductwork, diffusers and HVAC components. Quality fabrication, fast lead times and international shipping.",
    url: "https://ceylonairduct.com",
    siteName: "Ceylon Air Duct Lanka Pvt Ltd",
    images: [
      {
        url: "/images/ll.png",
        alt: "Ceylon Air Duct Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/images/ll.png",
    shortcut: "/images/ll.png",
    apple: "/images/ll.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ceylon Air Duct Pvt Ltd",
    alternateName: "Ceylon Air Duct Lanka",
    url: "https://ceylonairduct.com",
    logo: "https://ceylonairduct.com/images/ll.png",
    description:
      "Leading manufacturer and supplier of HVAC air duct systems, grills, diffusers, and dampers in Sri Lanka",
    email: "sales@ceylonairduct.com",
    telephone: ["+94114435953", "+94774161678"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "538/B, Heenkenda",
        addressLocality: "Ragama",
        addressCountry: "LK",
        name: "Factory",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "No 1005, Kandy Road",
        addressLocality: "Kelaniya",
        addressCountry: "LK",
        name: "Sales Office",
      },
    ],
    sameAs: [
      "https://ceylonairduct.com",
      // Add social media profiles here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94114435953",
      contactType: "Sales",
      areaServed: "LK",
      availableLanguage: ["en", "si"],
    },
    founders: [
      {
        "@type": "Person",
        name: "Athula",
        email: "athula@ceylonairduct.com",
      },
      {
        "@type": "Person",
        name: "Nalin",
        email: "nalin@ceylonairduct.com",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
      itemOffered: [
        {
          "@type": "Product",
          name: "Square Ducts",
          description:
            "Precision-fabricated square ductwork for commercial and industrial HVAC systems",
        },
        {
          "@type": "Product",
          name: "Spiral Ducts",
          description:
            "Lightweight, high-strength spiral ducts for efficient HVAC performance",
        },
        {
          "@type": "Product",
          name: "Grills and Diffusers",
          description:
            "Architectural grills and precision diffusers for air distribution",
        },
        {
          "@type": "Product",
          name: "Volume Control Dampers",
          description: "Robust VCDs for airflow control in duct networks",
        },
        {
          "@type": "Product",
          name: "Sound Attenuators",
          description:
            "Acoustic attenuators for noise reduction in HVAC systems",
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
