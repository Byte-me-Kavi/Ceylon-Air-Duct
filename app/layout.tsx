import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ceylon Air Duct Lanka Pvt Ltd — HVAC Duct Manufacturer & Supplier | Sri Lanka",
  description:
    "Ceylon Air Duct Lanka Pvt Ltd is a Sri Lanka-based manufacturer and supplier of high-quality air duct systems, grills, diffusers, dampers and HVAC components. Trusted by local and international clients for precision fabrication and timely delivery.",
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
      "Ceylon Air Duct Lanka Pvt Ltd — HVAC Duct Manufacturer & Supplier | Sri Lanka",
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
  twitter: {
    card: "summary_large_image",
    title:
      "Ceylon Air Duct Lanka Pvt Ltd — HVAC Duct Manufacturer & Supplier | Sri Lanka",
    description:
      "Trusted Sri Lanka-based manufacturer and exporter of ductwork, diffusers and HVAC components.",
    images: ["/images/ll.png"],
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
