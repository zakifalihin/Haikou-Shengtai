import type { Metadata } from "next";

import { ActivatedCarbonView } from "@/components/pages/ActivatedCarbonView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Coconut Shell Activated Carbon & Charcoal Briquettes",
  description:
    "Steam-activated coconut shell granular carbon (GAC 8x30 / 12x40 mesh), gold recovery carbon (CIP/CIL 6x12 mesh), and low-ash shisha/BBQ charcoal briquettes manufactured in Hainan, China.",
  keywords: [
    "coconut shell activated carbon manufacturer",
    "8x30 mesh GAC water filtration",
    "gold recovery activated carbon 6x12",
    "shisha charcoal briquettes OEM China",
    "low ash coconut charcoal exporter",
    "steam activated carbon factory",
  ],
  alternates: {
    canonical: "/activated-carbon",
  },
  openGraph: {
    title: "Activated Carbon & Charcoal Briquettes | Haikou Shengtai",
    description:
      "High-iodine coconut shell activated carbon for water, gold recovery, air filtration, and export charcoal briquettes.",
    url: "/activated-carbon",
    images: [
      {
        url: "/images/carbon-division-editorial.jpg",
        width: 1376,
        height: 768,
        alt: "Haikou Shengtai Coconut Shell Activated Carbon & Briquettes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activated Carbon & Charcoal Briquettes | Haikou Shengtai",
    description:
      "Steam-activated coconut shell carbon and low-ash charcoal briquettes direct from Hainan.",
    images: ["/images/carbon-division-editorial.jpg"],
  },
};

export default function ActivatedCarbonPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ActivatedCarbonView />
      </main>
      <Footer />
    </>
  );
}
