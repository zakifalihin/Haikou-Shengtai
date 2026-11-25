import type { Metadata } from "next";

import { FactoryQCView } from "@/components/pages/FactoryQCView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Factory, Quality Control & Certifications",
  description:
    "Vertically integrated Hainan coconut processing facility, rotary steam activation kilns, ASTM & HACCP testing laboratories, ISO 9001, HALAL, COA/MSDS compliance, and Haikou/Yangpu container export logistics.",
  keywords: [
    "coconut processing factory Hainan",
    "activated carbon lab testing ASTM D4607",
    "ISO 9001 HACCP HALAL coconut exporter",
    "SGS Intertek pre-shipment inspection China",
    "Haikou Yangpu port export manufacturer",
  ],
  alternates: {
    canonical: "/factory-qc",
  },
  openGraph: {
    title: "Factory, Quality Control & Certifications | Haikou Shengtai",
    description:
      "Full coconut vertical integration, dual in-house QC laboratories, and ISO 9001 / HACCP / HALAL export compliance.",
    url: "/factory-qc",
    images: [
      {
        url: "/images/carbon-division-editorial.jpg",
        width: 1376,
        height: 768,
        alt: "Haikou Shengtai Factory & Quality Control Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factory, QC & Certifications | Haikou Shengtai",
    description:
      "Vertically integrated Hainan manufacturing with ASTM & HACCP in-house lab verification.",
    images: ["/images/carbon-division-editorial.jpg"],
  },
};

export default function FactoryQCPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FactoryQCView />
      </main>
      <Footer />
    </>
  );
}
