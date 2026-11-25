import type { Metadata } from "next";

import { CoconutFoodView } from "@/components/pages/CoconutFoodView";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Coconut Food Processing & Export Ingredients",
  description:
    "Export-grade desiccated coconut (high & low fat), UHT aseptic coconut milk & cream, and cold-pressed virgin / RBD coconut oil manufactured in Haikou, Hainan under HACCP and ISO 9001 controls.",
  keywords: [
    "desiccated coconut supplier China",
    "aseptic coconut milk manufacturer",
    "virgin coconut oil bulk export",
    "RBD coconut oil flexitank",
    "Hainan coconut food processing",
    "OEM coconut ingredients",
  ],
  alternates: {
    canonical: "/coconut-food",
  },
  openGraph: {
    title: "Coconut Food Processing | Haikou Shengtai",
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
      <Navbar />
      <main className="flex-1">
        <CoconutFoodView />
      </main>
      <Footer />
    </>
  );
}
