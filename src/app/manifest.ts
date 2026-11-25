import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haikou Shengtai Tropical-Crop Co., Ltd.",
    short_name: "Haikou Shengtai",
    description:
      "Established in 2006 in Haikou, Hainan — coconut food processing, Southeast Asian agricultural sourcing, and steam-activated coconut shell carbon & charcoal briquettes.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#143D2B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
