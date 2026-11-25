import type { Metadata } from "next";

import { CoconutFoodView } from "@/components/pages/CoconutFoodView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildDivisionItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Coconut Food Processing & Export Ingredients",
  description:
    "HACCP-certified Hainan exporter of high/low-fat desiccated coconut, UHT aseptic coconut milk & cream, and cold-pressed virgin & RBD coconut oil.",
  keywords: [
    "desiccated coconut exporter",
    "coconut milk and cream supplier",
    "virgin coconut oil bulk China",
    "RBD coconut oil flexitank",
    "Hainan coconut food processing",
    "OEM coconut ingredients",
  ],
  alternates: {
    canonical: "/coconut-food",
  },
  openGraph: {
    title: "Coconut Food Processing | Haikou Shengtai Tropical-Crop Co., Ltd.",
    description:
      "Food-grade desiccated coconut, aseptic coconut milk & cream, and virgin/RBD coconut oil directly from Hainan, China.",
    url: "/coconut-food",
    images: [
      {
        url: "/images/products/food-1.jpg",
        width: 1200,
        height: 896,
        alt: "Haikou Shengtai Food-Grade Desiccated Coconut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coconut Food Processing | Haikou Shengtai",
    description:
      "HACCP-certified Hainan coconut food ingredients for global B2B manufacturers.",
    images: ["/images/products/food-1.jpg"],
  },
};

export default function CoconutFoodPage() {
  return (
    <>
      <JsonLd data={buildDivisionItemListJsonLd("food")} />
      <Navbar />
      <main className="flex-1">
        <CoconutFoodView />
      </main>
      <Footer />
    </>
  );
}
