import type { ProductData } from "@/data/products";

/**
 * Centralized SEO & Structured Data configuration.
 * Set NEXT_PUBLIC_SITE_URL in production environment variables once final domain is live.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.haikoushengtaitropical.com";

export const DEFAULT_OG_IMAGE = "/images/carbon-division-editorial.jpg";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Haikou Shengtai Tropical-Crop Co., Ltd.",
    alternateName: ["Haikou Shengtai", "海口盛泰热带作物有限公司"],
    foundingDate: "2006-11-18",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "Established in 2006 in Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. specializes in tropical crop cultivation, food-grade coconut processing, and international commodity trade across Southeast Asia (Indonesia & Vietnam) alongside coconut shell activated carbon and charcoal briquette exports.",
    email: "info@haikoushengtaitropical.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Room 1702, Building B, Jingrui Building, No. 1 Guomao Avenue, Longhua District",
      addressLocality: "Haikou",
      addressRegion: "Hainan",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@haikoushengtaitropical.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Chinese", "Indonesian"],
      },
      {
        "@type": "ContactPoint",
        contactType: "executive",
        name: "Ding Yajiao",
        email: "ding.yajiao@haikoushengtaitropical.com",
        areaServed: "Worldwide",
        availableLanguage: ["Chinese", "English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "operations",
        name: "Hendry",
        email: "hendry@haikoushengtaitropical.com",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
    knowsAbout: [
      "Tropical & Subtropical Crop Cultivation",
      "Desiccated Coconut Manufacturing",
      "Aseptic Coconut Milk Processing",
      "Virgin and RBD Coconut Oil",
      "Coconut Shell Activated Carbon",
      "Gold Recovery Activated Carbon CIP CIL",
      "Coconut Shell Charcoal Briquettes",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Haikou Shengtai Tropical-Crop Co., Ltd.",
    description:
      "Established in 2006 in Haikou, Hainan — coconut food processing, Southeast Asian agricultural sourcing, and industrial activated carbon export.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: ["en", "zh-CN", "id"],
  };
}

export function buildProductJsonLd(product: ProductData) {
  const en = product.translations.en;
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const divisionPath =
    product.divisionKey === "food" ? "/coconut-food" : "/activated-carbon";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${productUrl}#product`,
      name: en.name,
      description: `${en.shortDesc} ${en.overview}`,
      image: [`${SITE_URL}${product.image}`],
      sku: product.slug.toUpperCase(),
      category: en.division,
      brand: {
        "@type": "Brand",
        name: "Haikou Shengtai",
      },
      manufacturer: {
        "@id": `${SITE_URL}/#organization`,
      },
      additionalProperty: en.technicalSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
      offers: {
        "@type": "Offer",
        url: productUrl,
        availability: "https://schema.org/InStock",
        businessFunction: "https://schema.org/Sell",
        seller: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "Worldwide",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: en.division,
          item: `${SITE_URL}${divisionPath}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: en.name,
          item: productUrl,
        },
      ],
    },
  ];
}
