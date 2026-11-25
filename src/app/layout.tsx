import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  Noto_Sans_SC,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { JsonLd } from "@/components/seo/JsonLd";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#143D2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Haikou Shengtai Tropical-Crop Co., Ltd. | Coconut Food & Activated Carbon Exporter",
    template: "%s | Haikou Shengtai Tropical-Crop Co., Ltd.",
  },
  description:
    "Established in 2006 in Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. specializes in tropical crop cultivation, food-grade coconut processing, and international commodity trade across China, Indonesia, and Vietnam — exporting coconut food ingredients and coconut shell activated carbon & charcoal briquettes.",
  keywords: [
    "Haikou Shengtai Tropical-Crop Co., Ltd.",
    "Haikou Shengtai",
    "coconut shell activated carbon manufacturer",
    "desiccated coconut exporter China",
    "aseptic coconut milk supplier Hainan",
    "virgin coconut oil bulk supplier",
    "coconut charcoal briquettes OEM",
    "gold recovery activated carbon CIP CIL",
    "water filtration GAC supplier",
    "海口盛泰热带作物有限公司",
    "椰壳活性炭厂家",
    "海南椰蓉出口",
  ],
  applicationName: "Haikou Shengtai",
  authors: [{ name: "Haikou Shengtai Tropical-Crop Co., Ltd." }],
  creator: "Haikou Shengtai Tropical-Crop Co., Ltd.",
  publisher: "Haikou Shengtai Tropical-Crop Co., Ltd.",
  category: "Agriculture, Manufacturing & B2B Export",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Haikou Shengtai Tropical-Crop Co., Ltd.",
    locale: "en_US",
    title:
      "Haikou Shengtai Tropical-Crop Co., Ltd. | Coconut Food & Activated Carbon Exporter",
    description:
      "Est. 2006 in Haikou, Hainan. Integrated tropical crop sourcing across China, Indonesia & Vietnam — food-grade coconut ingredients and industrial coconut shell activated carbon.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1376,
        height: 768,
        alt: "Haikou Shengtai Tropical-Crop Co., Ltd. — Coconut Food & Activated Carbon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haikou Shengtai Tropical-Crop Co., Ltd. | Coconut Food & Activated Carbon Exporter",
    description:
      "Est. 2006 in Haikou, Hainan — coconut food ingredients, granular activated carbon, and charcoal briquettes for global B2B export.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${ibmPlexMono.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
