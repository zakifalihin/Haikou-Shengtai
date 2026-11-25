/**
 * Shared site configuration for Haikou Shengtai Tropical-Crop Co., Ltd.
 */
export const site = {
  name: "HAIKOU SHENGTAI",
  legalName: "Haikou Shengtai Tropical-Crop Co., Ltd.",
  chineseName: "海口盛泰热带作物有限公司",
  founded: "November 18, 2006",
  registeredCapital: "800,000 CNY",
  domain: "haikoushengtaitropical.com",
  email: "info@haikoushengtaitropical.com",
  contacts: {
    general: "info@haikoushengtaitropical.com",
    director: "ding.yajiao@haikoushengtaitropical.com",
    indonesia: "hendry@haikoushengtaitropical.com",
  },
} as const;

export const navLinks = [
  { label: "Coconut Food", href: "/coconut-food" },
  { label: "Activated Carbon", href: "/activated-carbon" },
  { label: "Factory & QC", href: "/factory-qc" },
  { label: "Contact", href: "/contact" },
] as const;

export const rfqHref = "/contact#rfq-form";
