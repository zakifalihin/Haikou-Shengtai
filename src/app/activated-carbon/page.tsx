import type { Metadata } from "next";

import { ActivatedCarbonView } from "@/components/pages/ActivatedCarbonView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, buildDivisionItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Coconut Shell Activated Carbon & Charcoal Briquettes",
  description:
    "Steam-activated coconut shell granular carbon (8x30/12x40 GAC), 6x12 gold recovery carbon, and low-ash shisha & BBQ charcoal briquettes from Hainan.",
  keywords: [
    "coconut shell activated carbon",
    "8x30 mesh GAC water filtration",
    "gold recovery activated carbon 6x12",
    "shisha charcoal briquettes OEM",
    "low ash coconut charcoal exporter",
    "Hainan activated carbon supplier",
  ],
  alternates: {
    canonical: "/activated-carbon",
  },
  openGraph: {
    title:
      "Activated Carbon & Charcoal Briquettes | Haikou Shengtai Tropical-Crop Co., Ltd.",
    description:
      "High-iodine coconut shell activated carbon for water, gold recovery, air filtration, and export charcoal briquettes.",
    url: "/activated-carbon",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Haikou Shengtai Coconut Shell Activated Carbon & Briquettes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activated Carbon & Charcoal Briquettes | Haikou Shengtai",
    description:
      "Steam-activated coconut shell carbon and low-ash charcoal briquettes direct from Hainan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ActivatedCarbonPage() {
  return (
    <>
      <JsonLd data={buildDivisionItemListJsonLd("carbon")} />
      <Navbar />
      <main className="flex-1">
        <ActivatedCarbonView />
      </main>
      <Footer />
    </>
  );
}
