import type { Metadata } from "next";

import { ContactView } from "@/components/pages/ContactView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Contact & Request Export Quotation (RFQ)",
  description:
    "Request FOB Haikou/Yangpu or CIF global pricing, samples, COA/MSDS, and OEM quotes directly from Haikou Shengtai Tropical-Crop Co., Ltd. (Est. 2006).",
  keywords: [
    "Haikou Shengtai contact",
    "coconut activated carbon RFQ",
    "desiccated coconut bulk quotation",
    "Hainan export manufacturer inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Request Quotation (RFQ) | Haikou Shengtai",
    description:
      "Direct factory B2B export desk in Haikou, Hainan — response within 24 business hours.",
    url: "/contact",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Haikou Shengtai Global Export Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & RFQ | Haikou Shengtai",
    description:
      "Direct factory export inquiries for coconut food ingredients and activated carbon.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactView />
      </main>
      <Footer />
    </>
  );
}
