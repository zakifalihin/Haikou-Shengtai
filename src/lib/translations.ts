export type Locale = "en" | "zh" | "id";

export interface ProductTranslation {
  id: string;
  category: "coconut-food" | "activated-carbon" | "briquettes";
  code: string;
  title: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
}

export interface Dictionary {
  navbar: {
    links: { label: string; href: string }[];
    cta: string;
    mobileLanguageLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    cta: string;
    switcherAria: string;
    divisions: {
      id: "coconut-food" | "activated-carbon" | "global-export";
      index: string;
      label: string;
      summary: string;
      href: string;
      imageAlt: string;
    }[];
  };
  parallaxStatement: {
    eyebrow: string;
    heading: string;
    body: string;
    originLabel: string;
    originValue: string;
    portsLabel: string;
    portsValue: string;
    imageAlt: string;
    captionLeft: string;
    captionRight: string;
  };
  dualDivision: {
    sectionAria: string;
    food: {
      eyebrow: string;
      tag: string;
      heading: string;
      summary: string;
      imageAlt: string;
      lines: { name: string; spec: string }[];
      cta: string;
    };
    carbon: {
      eyebrow: string;
      tag: string;
      heading: string;
      summary: string;
      imageAlt: string;
      lines: { name: string; spec: string }[];
      cta: string;
    };
  };
  productCatalog: {
    eyebrow: string;
    heading: string;
    filterAria: string;
    tabs: {
      all: string;
      "coconut-food": string;
      "activated-carbon": string;
      briquettes: string;
    };
    requestCta: string;
    products: ProductTranslation[];
  };
  factoryAndQC: {
    eyebrow: string;
    heading: string;
    body: string;
    traceabilityNote: string;
    steps: {
      number: string;
      title: string;
      detail: string;
    }[];
    certificationsHeading: string;
    certificationsSubnote: string;
    certifications: {
      code: string;
      note: string;
    }[];
  };
  inquiry: {
    eyebrow: string;
    heading: string;
    body: string;
    contact: {
      emailLabel: string;
      addressLabel: string;
      addressValue: string;
      responseLabel: string;
      responseValue: string;
      messagingLabel: string;
      messagingValue: string;
    };
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      divisionLabel: string;
      divisionOptions: string[];
      volumeLabel: string;
      volumeOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      shippingNote: string;
      submitButton: string;
      submittingButton: string;
      errorPrefix: string;
      errorFallbackCta: string;
    };
    confirmation: {
      eyebrow: string;
      headingPrefix: string;
      bodyPart1: string;
      bodyPart2: string;
      bodyPart3: string;
      resetButton: string;
    };
  };
  footer: {
    tagline: string;
    divisionsHeading: string;
    divisionLinks: { label: string; href: string }[];
    qualityHeading: string;
    qualityLinks: { label: string; href: string }[];
    contactHeading: string;
    location: string;
    ports: string;
    copyright: string;
    exportNotice: string;
  };
  productDetail: {
    homeLabel: string;
    productsLabel: string;
    backToCatalog: string;
    rfqCta: string;
    coaCta: string;
    coaModalEyebrow: string;
    coaModalTitle: string;
    coaModalBody: string;
    coaModalProceed: string;
    coaModalClose: string;
    specsEyebrow: string;
    specsHeading: string;
    specParamCol: string;
    specValueCol: string;
    applicationsEyebrow: string;
    applicationsHeading: string;
    packagingEyebrow: string;
    packagingHeading: string;
    packStandardLabel: string;
    pack20ftLabel: string;
    pack40hcLabel: string;
    packLeadTimeLabel: string;
    packIncotermsLabel: string;
    relatedEyebrow: string;
    relatedHeading: string;
    viewSpecsLink: string;
    customGradeEyebrow: string;
    customGradeTitle: string;
    customGradeBody: string;
    customGradeCta: string;
  };
}

export const TRANSLATIONS: Record<Locale, Dictionary> = {
  en: {
    navbar: {
      links: [
        { label: "Coconut Food", href: "/coconut-food" },
        { label: "Activated Carbon", href: "/activated-carbon" },
        { label: "Factory & QC", href: "/factory-qc" },
        { label: "Contact", href: "/contact" },
      ],
      cta: "Request Quote",
      mobileLanguageLabel: "Language",
      openMenuAria: "Open navigation menu",
      closeMenuAria: "Close navigation menu",
    },
    hero: {
      eyebrow: "HAIKOU, HAINAN · EST. 2006",
      h1: "Integrated Hainan Coconut Supply. From Food-Grade Processing to Industrial Activated Carbon.",
      subtitle:
        "Established in 2006 in Haikou, Hainan — bridging tropical crop cultivation and Southeast Asian agricultural sourcing (Indonesia & Vietnam) with food-grade coconut processing and industrial activated carbon export.",
      cta: "Explore Specifications",
      switcherAria: "Division view selector",
      divisions: [
        {
          id: "coconut-food",
          index: "01",
          label: "Coconut Food",
          summary: "Desiccated Coconut · Coconut Milk · VCO & RBD Oil",
          href: "/coconut-food",
          imageAlt:
            "Hainan coconut harvest and food-grade coconut raw material processing",
        },
        {
          id: "activated-carbon",
          index: "02",
          label: "Activated Carbon",
          summary: "Water Filtration · Gold Recovery · Charcoal Briquettes",
          href: "/activated-carbon",
          imageAlt:
            "Coconut shell activated carbon and high-density charcoal briquette material",
        },
        {
          id: "global-export",
          index: "03",
          label: "Global Export",
          summary: "In-House Lab QC · Haikou & Yangpu Port FCL Dispatch",
          href: "/factory-qc",
          imageAlt:
            "Haikou maritime container port and global industrial export logistics",
        },
      ],
    },
    parallaxStatement: {
      eyebrow: "01 / CORPORATE OVERVIEW · EST. 2006",
      heading:
        "Two decades of tropical crop expertise. Connecting Southeast Asian sourcing to global food and industrial markets.",
      body: "Established in 2006 in Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. specializes in tropical & subtropical fruit cultivation, coconut processing, and international commodity trade — maintaining active cross-border supply chains across Southeast Asia, including direct agricultural and coconut sourcing from Indonesia and Vietnam alongside our industrial activated carbon and briquette export lines.",
      originLabel: "Trade Corridors",
      originValue: "China · Indonesia · Vietnam",
      portsLabel: "Export Dispatch",
      portsValue: "Haikou & Yangpu Ports",
      imageAlt:
        "Haikou Shengtai Tropical-Crop Co., Ltd. industrial manufacturing and processing facility scale",
      captionLeft: "FIG. 01 — INTEGRATED PROCESSING & KILN OPERATIONS, HAIKOU",
      captionRight: "FOOD-GRADE & INDUSTRIAL CARBON LINES",
    },
    dualDivision: {
      sectionAria: "Core manufacturing divisions",
      food: {
        eyebrow: "01 / COCONUT FOOD PROCESSING",
        tag: "FOOD-GRADE EXPORT",
        heading: "Coconut Food Ingredients",
        summary:
          "Processed from mature Hainan coconut kernel in dedicated hygienic workshops. Supplied to industrial bakeries, beverage bottlers, confectionery manufacturers, and private-label importers.",
        imageAlt:
          "Fresh Hainan coconuts prepared for food-grade ingredient processing",
        lines: [
          {
            name: "Desiccated Coconut",
            spec: "Fine / Medium / Flakes · High & Low Fat",
          },
          {
            name: "Coconut Milk & Cream",
            spec: "17% – 24% Fat · Aseptic Drums & Canned",
          },
          {
            name: "Virgin & RBD Coconut Oil",
            spec: "Cold-Pressed & Refined · 190kg Drums / Flexitank",
          },
          {
            name: "Roasted Coconut Chips",
            spec: "Natural & Toasted · Bulk Export Cartons",
          },
        ],
        cta: "View Food Specifications",
      },
      carbon: {
        eyebrow: "02 / ACTIVATED CARBON & BRIQUETTES",
        tag: "INDUSTRIAL GRADE",
        heading: "Activated Carbon & Charcoal",
        summary:
          "High-density coconut shell carbonised and steam-activated in rotary kilns. Engineered for high micropore volume, mechanical hardness, and low ash across water, mining, air, and fuel markets.",
        imageAlt:
          "High-density coconut shell charcoal and activated carbon industrial material",
        lines: [
          {
            name: "Granular & Powdered Activated Carbon",
            spec: "Coconut Shell Base · Steam Activated (GAC / PAC)",
          },
          {
            name: "Water & Air Filtration Grades",
            spec: "8×30 / 12×40 Mesh · Iodine 950 – 1,150 mg/g",
          },
          {
            name: "Gold Recovery Carbon (CIP / CIL)",
            spec: "6×12 Mesh · Ball-Pan Hardness ≥ 98.5%",
          },
          {
            name: "Shisha & BBQ Charcoal Briquettes",
            spec: "25mm Cube / Hexagonal · Ash ≤ 2.2%",
          },
        ],
        cta: "View Carbon Specifications",
      },
    },
    productCatalog: {
      eyebrow: "02 / EXPORT CATALOG",
      heading: "Product Specifications & Export Catalog",
      filterAria: "Filter products by division",
      tabs: {
        all: "All",
        "coconut-food": "Coconut Food",
        "activated-carbon": "Activated Carbon",
        briquettes: "Briquettes",
      },
      requestCta: "Request Spec Sheet / Quote",
      products: [
        {
          id: "desiccated-coconut",
          category: "coconut-food",
          code: "COCONUT FOOD · FINE / MEDIUM GRADE",
          title: "Desiccated Coconut (High & Low Fat)",
          imageAlt: "Food-grade white desiccated coconut for industrial food export",
          specs: [
            { label: "Fat Content", value: "65% ± 3% (HF) / 35% (LF)" },
            { label: "Moisture", value: "≤ 3.0%" },
            { label: "Shelf Life", value: "12 Months (Cool, Dry)" },
            { label: "MOQ / Pack", value: "1×20ft FCL · 25kg Bag" },
          ],
        },
        {
          id: "coconut-milk-cream",
          category: "coconut-food",
          code: "COCONUT FOOD · UHT ASEPTIC / CANNED",
          title: "Aseptic Coconut Milk & Cream",
          imageAlt: "Aseptic coconut milk and thick coconut cream samples",
          specs: [
            { label: "Fat Content", value: "17% / 22% / 24%" },
            { label: "pH Level", value: "5.9 – 6.3" },
            { label: "Shelf Life", value: "12–18 Months" },
            { label: "MOQ / Pack", value: "1×20ft FCL · 200kg Drum" },
          ],
        },
        {
          id: "virgin-rbd-coconut-oil",
          category: "coconut-food",
          code: "COCONUT FOOD · COLD-PRESSED / REFINED",
          title: "Virgin & RBD Coconut Oil",
          imageAlt: "Clear virgin and refined RBD coconut oil export samples",
          specs: [
            { label: "Free Fatty Acid", value: "≤ 0.1% (Lauric)" },
            { label: "Moisture", value: "≤ 0.1%" },
            { label: "Shelf Life", value: "24 Months" },
            { label: "MOQ / Pack", value: "190kg Drum / Flexitank" },
          ],
        },
        {
          id: "water-purification-gac",
          category: "activated-carbon",
          code: "ACTIVATED CARBON · 8×30 / 12×40 MESH",
          title: "Water Filtration Granular Carbon (GAC)",
          imageAlt: "Coconut shell granular activated carbon for water purification",
          specs: [
            { label: "Iodine Value", value: "1000 – 1100 mg/g" },
            { label: "Moisture", value: "≤ 5.0%" },
            { label: "Ash Content", value: "≤ 3.0%" },
            { label: "Packaging", value: "25kg / 500kg Jumbo Bag" },
          ],
        },
        {
          id: "gold-recovery-carbon",
          category: "activated-carbon",
          code: "ACTIVATED CARBON · 6×12 MESH CIP/CIL",
          title: "Gold Recovery Activated Carbon",
          imageAlt: "Coarse 6x12 mesh coconut shell activated carbon for gold recovery",
          specs: [
            { label: "Iodine Value", value: "1050 – 1150 mg/g" },
            { label: "Hardness", value: "≥ 98.5% (Ball-Pan)" },
            { label: "Moisture", value: "≤ 5.0%" },
            { label: "Packaging", value: "500kg / 550kg Jumbo Bag" },
          ],
        },
        {
          id: "shisha-bbq-briquettes",
          category: "briquettes",
          code: "BRIQUETTES · 25MM CUBE / HEXAGONAL",
          title: "Coconut Shell Charcoal Briquettes",
          imageAlt: "Uniform cube and hexagonal coconut shell charcoal briquettes",
          specs: [
            { label: "Ash Content", value: "≤ 2.2% (White Ash)" },
            { label: "Calorific Value", value: "7,200 – 7,500 kcal/kg" },
            { label: "Moisture", value: "≤ 6.0%" },
            { label: "Packaging", value: "1kg Box / 10kg Master" },
          ],
        },
      ],
    },
    factoryAndQC: {
      eyebrow: "03 / FACTORY & QUALITY CONTROL",
      heading: "Vertical Integration in Haikou, Hainan",
      body: "Haikou Shengtai utilizes 100% of every harvested coconut within a single integrated operation — fresh kernel is processed on food-grade lines while mature shell feeds our carbonization and steam activation kilns. Controlling both streams at source ensures consistent raw material density, batch traceability, and direct factory pricing.",
      traceabilityNote: "Batch Traceability · Pre-Shipment Sampling Available",
      steps: [
        {
          number: "01",
          title: "Raw Material Sourcing",
          detail:
            "Mature coconuts harvested from contracted plantations across Hainan Island. Incoming batches are inspected for shell density, kernel thickness, and moisture prior to separation.",
        },
        {
          number: "02",
          title: "Food-Grade Processing",
          detail:
            "Fresh coconut kernel enters isolated hygienic food workshops for blanching, desiccating, cold pressing, or UHT aseptic milk extraction under HACCP controls.",
        },
        {
          number: "03",
          title: "Shell Carbonization & Activation",
          detail:
            "Dense coconut shells are carbonised and steam-activated in rotary kilns at 850°C–950°C, then crushed, dedusted, and sieved into precise mesh grades or compressed into briquettes.",
        },
        {
          number: "04",
          title: "In-House Lab QC",
          detail:
            "Dedicated food microbiology and carbon testing laboratories verify iodine adsorption value, ball-pan hardness, moisture, ash content, fat percentage, and microbial limits per lot.",
        },
        {
          number: "05",
          title: "Global Container Logistics",
          detail:
            "Moisture-barrier bulk packaging (25kg kraft/PP bags, 500kg jumbo bags, 190kg–200kg drums), full COA/MSDS export documentation, and direct FCL dispatch via Haikou and Yangpu ports.",
        },
      ],
      certificationsHeading: "CERTIFICATIONS & COMPLIANCE",
      certificationsSubnote: "DOCUMENTATION PROVIDED UPON RFQ VERIFICATION",
      certifications: [
        { code: "ISO 9001", note: "Quality Management System" },
        { code: "HACCP", note: "Food Safety Controls" },
        { code: "HALAL", note: "Export Food Compliance" },
        { code: "COA & MSDS", note: "Issued Per Production Lot" },
        { code: "SGS / Intertek", note: "Third-Party Inspection Supported" },
      ],
    },
    inquiry: {
      eyebrow: "04 / REQUEST FOR QUOTATION",
      heading: "Direct Factory Inquiry",
      body: "Specify your target product grade, mesh size or fat percentage, packaging format, and destination port. Our export desk will provide FOB/CIF pricing, lead times, and batch COA documentation.",
      contact: {
        emailLabel: "Export Sales Email",
        addressLabel: "Headquarters",
        addressValue:
          "Room 1702, Building B, Jingrui Building, No. 1 Guomao Avenue, Longhua District, Haikou, Hainan, China",
        responseLabel: "Response Time",
        responseValue: "Within 24 Business Hours (GMT+8)",
        messagingLabel: "WeChat / WhatsApp",
        messagingValue: "+86 000 0000 0000 · WeChat ID: haikoushengtai",
      },
      form: {
        fullNameLabel: "Full Name *",
        fullNamePlaceholder: "e.g. David Chen",
        companyLabel: "Company Name *",
        companyPlaceholder: "e.g. Pacific Foods / Apex Water Ltd.",
        emailLabel: "Business Email *",
        emailPlaceholder: "procurement@company.com",
        divisionLabel: "Division / Product Interest *",
        divisionOptions: [
          "Coconut Food — Desiccated Coconut",
          "Coconut Food — Coconut Milk / Cream / Oil",
          "Coconut Food — Roasted Coconut Chips",
          "Activated Carbon — Water / Air Filtration (GAC/PAC)",
          "Activated Carbon — Gold Recovery (CIP / CIL)",
          "Charcoal Briquettes — Shisha / BBQ Grade",
          "Multiple Divisions / OEM Private Label",
        ],
        volumeLabel: "Estimated Volume *",
        volumeOptions: [
          "Sample Evaluation (1 – 5 kg)",
          "Trial Order / LCL Shipment",
          "1 × 20ft FCL",
          "1 × 40ft HC",
          "Annual / Recurring Contract Supply",
        ],
        messageLabel: "Technical Requirements / Message",
        messagePlaceholder:
          "Include target specifications (e.g., iodine value, mesh size, fat content, packaging format) and destination port...",
        shippingNote: "FOB HAIKOU / YANGPU · CIF WORLDWIDE",
        submitButton: "Submit Inquiry",
        submittingButton: "Sending Inquiry...",
        errorPrefix: "Unable to send inquiry right now. Please email us directly at",
        errorFallbackCta: "info@haikoushengtaitropical.com",
      },
      confirmation: {
        eyebrow: "INQUIRY SENT TO INFO@HAIKOUSHENGTAITROPICAL.COM",
        headingPrefix: "Thank you,",
        bodyPart1: "Your quotation request for",
        bodyPart2:
          "has been sent to info@haikoushengtaitropical.com. Our export sales team will reply to",
        bodyPart3: "within 24 business hours.",
        resetButton: "Submit Another Inquiry",
      },
    },
    footer: {
      tagline:
        "Haikou Shengtai Tropical-Crop Co., Ltd. (Est. 2006) — Tropical crop cultivation, food-grade coconut processing, and coconut shell activated carbon & charcoal briquette exports across China, Indonesia, and Vietnam.",
      divisionsHeading: "Divisions",
      divisionLinks: [
        { label: "Coconut Food Processing", href: "/coconut-food" },
        { label: "Activated Carbon (GAC / PAC)", href: "/activated-carbon" },
        { label: "Charcoal Briquettes", href: "/activated-carbon" },
        { label: "Export Product Catalog", href: "/#catalog" },
      ],
      qualityHeading: "Quality & Docs",
      qualityLinks: [
        { label: "Vertical Integration", href: "/factory-qc" },
        { label: "Factory & Lab QC", href: "/factory-qc" },
        { label: "Certifications & Compliance", href: "/factory-qc#certifications" },
        { label: "Request Quote (RFQ)", href: "/contact#rfq-form" },
      ],
      contactHeading: "Direct Contact",
      location:
        "Room 1702, Building B, Jingrui Building, No. 1 Guomao Ave, Longhua Dist., Haikou, Hainan, China",
      ports: "Ports: Haikou / Yangpu",
      copyright:
        "© 2026 Haikou Shengtai Tropical-Crop Co., Ltd. All rights reserved.",
      exportNotice: "EST. 2006 · HAINAN, CHINA · B2B EXPORT",
    },
    productDetail: {
      homeLabel: "Home",
      productsLabel: "Products",
      backToCatalog: "Back to Export Catalog",
      rfqCta: "Request Quotation (RFQ)",
      coaCta: "Download COA / Spec Sheet (PDF)",
      coaModalEyebrow: "OFFICIAL TECHNICAL DOCUMENTATION",
      coaModalTitle: "Certificate of Analysis & Spec Sheet",
      coaModalBody:
        "Official batch COA, MSDS, and full technical specification sheets are issued directly by our Haikou export desk to verified B2B buyers. Proceed to the RFQ form or email info@haikoushengtaitropical.com with your target grade.",
      coaModalProceed: "Proceed to RFQ Form",
      coaModalClose: "Close",
      specsEyebrow: "01 / TECHNICAL PARAMETERS",
      specsHeading: "Technical Specifications",
      specParamCol: "Parameter",
      specValueCol: "Export Standard Specification",
      applicationsEyebrow: "02 / INDUSTRIAL & COMMERCIAL USE",
      applicationsHeading: "Primary Applications",
      packagingEyebrow: "03 / CONTAINER LOADING & LOGISTICS",
      packagingHeading: "Export Packaging & Shipping",
      packStandardLabel: "Standard Packaging",
      pack20ftLabel: "20ft FCL Capacity",
      pack40hcLabel: "40ft HC Capacity",
      packLeadTimeLabel: "Production Lead Time",
      packIncotermsLabel: "Trade Terms",
      relatedEyebrow: "04 / SAME DIVISION",
      relatedHeading: "Related Export Products",
      viewSpecsLink: "View Specifications",
      customGradeEyebrow: "OEM / CUSTOM GRADE",
      customGradeTitle: "Require a Custom Mesh Size, Fat Grade, or Private Label?",
      customGradeBody:
        "Our Haikou production lines support custom sieving, acid-washed low-ash carbon, custom fat percentages, and OEM export packaging.",
      customGradeCta: "Request Custom Specification",
    },
  },

  zh: {
    navbar: {
      links: [
        { label: "椰子食品加工", href: "/coconut-food" },
        { label: "椰壳活性炭", href: "/activated-carbon" },
        { label: "工厂与质检", href: "/factory-qc" },
        { label: "联系我们", href: "/contact" },
      ],
      cta: "获取报价",
      mobileLanguageLabel: "语言切换",
      openMenuAria: "打开导航菜单",
      closeMenuAria: "关闭导航菜单",
    },
    hero: {
      eyebrow: "中国·海南海口 · 始创于 2006 年",
      h1: "海南全椰一体化供应链。从食品级椰子加工到工业椰壳活性炭制造。",
      subtitle:
        "海口盛泰热带作物有限公司成立于2006年，立足海南并深度布局东南亚（印尼与越南）热带农产品跨境直采网络，同步运营食品级椰子原料加工与工业椰壳活性炭、机制炭块出口业务。",
      cta: "查看产品规格",
      switcherAria: "事业部背景切换",
      divisions: [
        {
          id: "coconut-food",
          index: "01",
          label: "椰子食品加工",
          summary: "椰蓉 · 无菌椰浆/椰奶 · 初榨及精炼椰子油",
          href: "/coconut-food",
          imageAlt: "海南椰子原果与食品级椰肉加工原料",
        },
        {
          id: "activated-carbon",
          index: "02",
          label: "椰壳活性炭",
          summary: "水处理过滤 · 黄金提取炭 · 水烟与烧烤炭块",
          href: "/activated-carbon",
          imageAlt: "高密度椰壳活性炭与工业炭化原料",
        },
        {
          id: "global-export",
          index: "03",
          label: "工厂与全球出口",
          summary: "厂内实验室质检 · 海口港与洋浦港整柜直发",
          href: "/factory-qc",
          imageAlt: "海口港口集装箱码头与全球海运出口物流",
        },
      ],
    },
    parallaxStatement: {
      eyebrow: "01 / 企业概况 · 始创于 2006 年",
      heading: "深耕热带作物与跨境贸易二十载。贯通东南亚原料产地与全球工业及食品市场。",
      body: "海口盛泰热带作物有限公司成立于2006年11月，总部位于海南海口，专注于热带及亚热带果蔬种植、椰子初深加工及国际大宗农产品贸易。公司持续深耕东南亚跨境供应链，直接对接印度尼西亚与越南等核心产区货源，同时发展工业椰壳活性炭与机制炭块出口业务。",
      originLabel: "核心贸易走廊",
      originValue: "中国 · 印度尼西亚 · 越南",
      portsLabel: "出口装运港",
      portsValue: "海口港 / 洋浦港",
      imageAlt: "海口盛泰热带作物有限公司现代化工业生产与加工车间实景",
      captionLeft: "图 01 — 海口一体化椰子加工与炭化活化生产基地",
      captionRight: "食品级加工线 · 工业活性炭回转窑",
    },
    dualDivision: {
      sectionAria: "核心制造事业部",
      food: {
        eyebrow: "01 / 椰子食品加工事业部",
        tag: "食品级出口标准",
        heading: "食品级椰子原料",
        summary:
          "精选海南成熟椰肉，在独立食品级洁净车间内完成干燥、压榨与无菌灌装。稳定供应烘焙食品厂、饮料代工企业、糖果制造商及海外品牌商。",
        imageAlt: "用于食品级原料加工的海南成熟椰子",
        lines: [
          {
            name: "高脂 / 低脂椰蓉",
            spec: "细粉 / 中粗 / 椰丝 · 烘焙与食品工业专用",
          },
          {
            name: "无菌椰浆与浓缩椰奶",
            spec: "脂肪含量 17% – 24% · 200kg无菌桶 / 罐装",
          },
          {
            name: "初榨及RBD精炼椰子油",
            spec: "低温冷榨与精炼级 · 190kg铁桶 / 液袋",
          },
          {
            name: "原味及烘烤椰子脆片",
            spec: "自然烘烤 · 大宗出口箱装及OEM代工",
          },
        ],
        cta: "查看食品规格目录",
      },
      carbon: {
        eyebrow: "02 / 椰壳活性炭与炭块事业部",
        tag: "工业出口标准",
        heading: "椰壳活性炭与机制炭块",
        summary:
          "采用海南及东南亚高密度老椰壳，经回转炉炭化及850°C–950°C水蒸气物理活化。具备微孔发达、机械强度高、低灰分等特性，广泛用于水处理、选金、空气净化及水烟燃料领域。",
        imageAlt: "高密度椰壳活性炭与椰壳炭工业原料",
        lines: [
          {
            name: "颗粒与粉状椰壳活性炭",
            spec: "水蒸气物理活化 · 颗粒炭(GAC) / 粉状炭(PAC)",
          },
          {
            name: "净水与废气治理专用炭",
            spec: "8×30 / 12×40目 · 碘值 950 – 1,150 mg/g",
          },
          {
            name: "黄金提取专用炭 (CIP / CIL)",
            spec: "6×12目 · 球盘耐磨强度 ≥ 98.5%",
          },
          {
            name: "椰壳炭块 / 水烟炭与烧烤炭",
            spec: "25mm方炭 / 六角空心炭 · 灰分 ≤ 2.2%",
          },
        ],
        cta: "查看活性炭规格目录",
      },
    },
    productCatalog: {
      eyebrow: "02 / 出口产品规格目录",
      heading: "核心产品技术指标与出口目录",
      filterAria: "按事业部筛选产品",
      tabs: {
        all: "全部产品",
        "coconut-food": "椰子食品加工",
        "activated-carbon": "椰壳活性炭",
        briquettes: "椰壳炭块 / 水烟炭",
      },
      requestCta: "索取规格书 / 获取报价",
      products: [
        {
          id: "desiccated-coconut",
          category: "coconut-food",
          code: "椰子食品 · 细级 / 中粗级",
          title: "出口级椰蓉（高脂 / 低脂）",
          imageAlt: "食品级纯白椰蓉工业原料样品",
          specs: [
            { label: "脂肪含量", value: "65% ± 3% (高脂) / 35% (低脂)" },
            { label: "水分含量", value: "≤ 3.0%" },
            { label: "保质期", value: "12个月（阴凉干燥）" },
            { label: "起订量 / 包装", value: "1×20尺柜 · 25kg复合袋" },
          ],
        },
        {
          id: "coconut-milk-cream",
          category: "coconut-food",
          code: "椰子食品 · UHT无菌 / 罐装",
          title: "无菌灌装椰浆与浓缩椰奶",
          imageAlt: "食品级无菌椰浆与浓缩椰奶实验室样品",
          specs: [
            { label: "脂肪含量", value: "17% / 22% / 24%" },
            { label: "pH值", value: "5.9 – 6.3" },
            { label: "保质期", value: "12–18个月" },
            { label: "起订量 / 包装", value: "1×20尺柜 · 200kg无菌桶" },
          ],
        },
        {
          id: "virgin-rbd-coconut-oil",
          category: "coconut-food",
          code: "椰子食品 · 低温冷榨 / RBD精炼",
          title: "初榨椰子油与RBD精炼椰子油",
          imageAlt: "清澈透明的初榨及精炼椰子油样品",
          specs: [
            { label: "游离脂肪酸", value: "≤ 0.1%（以月桂酸计）" },
            { label: "水分及挥发物", value: "≤ 0.1%" },
            { label: "保质期", value: "24个月" },
            { label: "起订量 / 包装", value: "190kg铁桶 / 集装箱液袋" },
          ],
        },
        {
          id: "water-purification-gac",
          category: "activated-carbon",
          code: "椰壳活性炭 · 8×30 / 12×40目",
          title: "净水级椰壳颗粒活性炭 (GAC)",
          imageAlt: "工业水处理用8x30目椰壳颗粒活性炭样品",
          specs: [
            { label: "碘值", value: "1000 – 1100 mg/g" },
            { label: "水分", value: "≤ 5.0%" },
            { label: "灰分", value: "≤ 3.0%" },
            { label: "标准包装", value: "25kg编织袋 / 500kg吨袋" },
          ],
        },
        {
          id: "gold-recovery-carbon",
          category: "activated-carbon",
          code: "椰壳活性炭 · 6×12目 选金炭",
          title: "黄金提取专用椰壳活性炭 (CIP/CIL)",
          imageAlt: "高强度6x12目黄金吸附专用椰壳活性炭样品",
          specs: [
            { label: "碘值", value: "1050 – 1150 mg/g" },
            { label: "强度（耐磨）", value: "≥ 98.5%（球盘法）" },
            { label: "水分", value: "≤ 5.0%" },
            { label: "标准包装", value: "500kg / 550kg吨袋" },
          ],
        },
        {
          id: "shisha-bbq-briquettes",
          category: "briquettes",
          code: "椰壳炭块 · 25mm方炭 / 六角炭",
          title: "出口级椰壳炭块 / 水烟炭与烧烤炭",
          imageAlt: "高密度25mm方形及六角形椰壳机制炭块",
          specs: [
            { label: "灰分", value: "≤ 2.2%（纯白灰）" },
            { label: "热值", value: "7,200 – 7,500 kcal/kg" },
            { label: "水分", value: "≤ 6.0%" },
            { label: "标准包装", value: "1kg彩盒 / 10kg出口外箱" },
          ],
        },
      ],
    },
    factoryAndQC: {
      eyebrow: "03 / 工厂产能与质量控制",
      heading: "海南海口垂直一体化制造体系",
      body: "海口盛泰热带作物有限公司实现每一颗成熟椰子的100%综合利用——新鲜椰肉进入食品级生产线，老椰壳进入炭化与水蒸气活化回转窑。依托二十年跨境源头直采经验，确保原料密度稳定、批次全程可追溯，为海外采购商提供具备竞争力的直供价格。",
      traceabilityNote: "全批次溯源管理 · 支持装船前寄样复检",
      steps: [
        {
          number: "01",
          title: "原产地椰果直采",
          detail:
            "从海南岛合作椰林基地直采成熟老椰，进厂前严格检验椰壳壁厚密度、椰肉成熟度及初始水分，分类进入双线车间。",
        },
        {
          number: "02",
          title: "食品级洁净加工",
          detail:
            "新鲜椰肉在独立食品车间内经漂烫、烘干、冷榨或UHT超高温瞬时杀菌灌装，全程执行HACCP食品安全控制体系。",
        },
        {
          number: "03",
          title: "椰壳炭化与水蒸气活化",
          detail:
            "高密度椰壳经炭化炉及850°C–950°C水蒸气回转窑物理活化，随后破碎、除尘、精准筛分目数或高压成型为机制炭块。",
        },
        {
          number: "04",
          title: "厂内实验室逐批质检",
          detail:
            "独立食品微生物实验室与活性炭理化实验室逐批测定碘值、耐磨强度、水分、灰分、脂肪含量及微生物指标。",
        },
        {
          number: "05",
          title: "全球海运集装箱发运",
          detail:
            "提供防潮牛皮纸袋、500kg吨袋及200kg无菌铁桶等出口包装，随货提供完整COA、MSDS报关单据，经海口港与洋浦港直发全球。",
        },
      ],
      certificationsHeading: "资质认证与合规体系",
      certificationsSubnote: "询盘审核通过后可提供完整证书与检测报告副本",
      certifications: [
        { code: "ISO 9001", note: "国际质量管理体系认证" },
        { code: "HACCP", note: "食品危害分析与关键控制点" },
        { code: "HALAL", note: "清真食品出口合规认证" },
        { code: "COA & MSDS", note: "每生产批次随货出具质检单" },
        { code: "SGS / Intertek", note: "支持第三方装船前验货检测" },
      ],
    },
    inquiry: {
      eyebrow: "04 / 获取报价 (RFQ)",
      heading: "工厂出口直供询盘",
      body: "请告知您的目标产品规格（如碘值、目数、脂肪含量）、包装方式、采购数量及目的港。我们的外贸团队将为您出具FOB/CIF正式报价单、交期及批次COA报告。",
      contact: {
        emailLabel: "出口业务邮箱",
        addressLabel: "公司总部地址",
        addressValue: "中国海南省海口市龙华区国贸大道1号景瑞大厦B座1702室",
        responseLabel: "响应时效",
        responseValue: "24个工作小时内回复（北京时间 GMT+8）",
        messagingLabel: "微信 / WhatsApp",
        messagingValue: "+86 000 0000 0000 · 微信号：haikoushengtai",
      },
      form: {
        fullNameLabel: "联系人姓名 *",
        fullNamePlaceholder: "例如：陈先生 / David Chen",
        companyLabel: "公司名称 *",
        companyPlaceholder: "请输入贵司全称",
        emailLabel: "企业邮箱 *",
        emailPlaceholder: "procurement@company.com",
        divisionLabel: "意向事业部 / 产品类别 *",
        divisionOptions: [
          "椰子食品 — 出口级椰蓉（高脂/低脂）",
          "椰子食品 — 无菌椰浆 / 浓缩椰奶 / 椰子油",
          "椰子食品 — 烘烤椰子脆片",
          "椰壳活性炭 — 净水 / 空气净化炭 (GAC/PAC)",
          "椰壳活性炭 — 黄金提取炭 (CIP / CIL)",
          "椰壳炭块 — 水烟炭 / 烧烤机制炭",
          "多品类联合采购 / OEM贴牌代工",
        ],
        volumeLabel: "预计采购量 *",
        volumeOptions: [
          "样品测试 (1 – 5 kg)",
          "小批量试单 / 拼箱 (LCL)",
          "1 × 20尺整柜 (20ft FCL)",
          "1 × 40尺高柜 (40ft HC)",
          "年度框架长期供货协议",
        ],
        messageLabel: "技术规格要求 / 留言",
        messagePlaceholder:
          "请注明目标参数（如碘值、目数、灰分、脂肪含量、包装规格）及目的港...",
        shippingNote: "支持 FOB 海口/洋浦 · CIF 全球港口",
        submitButton: "提交询盘",
        submittingButton: "正在发送...",
        errorPrefix: "询盘提交失败，请直接发送邮件至",
        errorFallbackCta: "info@haikoushengtaitropical.com",
      },
      confirmation: {
        eyebrow: "询盘已发送至 INFO@HAIKOUSHENGTAITROPICAL.COM",
        headingPrefix: "感谢您的来询，",
        bodyPart1: "您关于",
        bodyPart2:
          "的报价请求已发送至 info@haikoushengtaitropical.com。海口盛泰外贸专员将在24个工作小时内通过邮箱",
        bodyPart3: "与您联系。",
        resetButton: "提交新询盘",
      },
    },
    footer: {
      tagline:
        "海口盛泰热带作物有限公司（始创于2006年）— 立足中国海南，贯通印尼与越南东南亚农产品供应链，专注椰子食品加工、椰壳活性炭与机制炭块全球B2B出口。",
      divisionsHeading: "核心业务",
      divisionLinks: [
        { label: "椰子食品加工", href: "/coconut-food" },
        { label: "椰壳活性炭 (GAC / PAC)", href: "/activated-carbon" },
        { label: "椰壳炭块 / 水烟炭", href: "/activated-carbon" },
        { label: "出口产品规格目录", href: "/#catalog" },
      ],
      qualityHeading: "品控与文件",
      qualityLinks: [
        { label: "垂直一体化产业链", href: "/factory-qc" },
        { label: "工厂与实验室质检", href: "/factory-qc" },
        { label: "资质认证与合规", href: "/factory-qc#certifications" },
        { label: "获取报价 (RFQ)", href: "/contact#rfq-form" },
      ],
      contactHeading: "直接联系",
      location: "中国海南省海口市龙华区国贸大道1号景瑞大厦B座1702室",
      ports: "出口港：海口港 / 洋浦港",
      copyright: "© 2026 海口盛泰热带作物有限公司 版权所有。",
      exportNotice: "始创于 2006 年 · 中国海南 · B2B 出口制造商",
    },
    productDetail: {
      homeLabel: "首页",
      productsLabel: "产品目录",
      backToCatalog: "返回出口产品目录",
      rfqCta: "获取报价 (RFQ)",
      coaCta: "下载 COA / 规格书 (PDF)",
      coaModalEyebrow: "官方技术与质检文件",
      coaModalTitle: "批次检测报告 (COA) 与产品规格书",
      coaModalBody:
        "正式批次COA质检报告、MSDS安全数据表及完整技术规格书由海口外贸团队向核实后的B2B采购商定向发放。请点击前往询盘表或致信 info@haikoushengtaitropical.com 说明目标型号。",
      coaModalProceed: "前往询盘表单",
      coaModalClose: "关闭",
      specsEyebrow: "01 / 理化与技术指标",
      specsHeading: "完整技术规格参数表",
      specParamCol: "检测项目",
      specValueCol: "出口标准指标",
      applicationsEyebrow: "02 / 行业应用场景",
      applicationsHeading: "主要应用领域",
      packagingEyebrow: "03 / 集装箱装箱与物流",
      packagingHeading: "出口包装与装运规格",
      packStandardLabel: "标准出口包装",
      pack20ftLabel: "20尺整柜装柜量",
      pack40hcLabel: "40尺高柜装柜量",
      packLeadTimeLabel: "生产交货周期",
      packIncotermsLabel: "贸易条款",
      relatedEyebrow: "04 / 同事业部产品",
      relatedHeading: "相关出口产品推荐",
      viewSpecsLink: "查看产品规格",
      customGradeEyebrow: "OEM / 定制规格",
      customGradeTitle: "需要定制目数、脂肪含量或海外品牌OEM贴牌包装？",
      customGradeBody:
        "海口生产基地支持定制筛分目数、酸洗低灰活性炭、定制脂肪规格及出口彩盒/大袋OEM代工。",
      customGradeCta: "提交定制规格需求",
    },
  },

  id: {
    navbar: {
      links: [
        { label: "Pangan Kelapa", href: "/coconut-food" },
        { label: "Karbon Aktif", href: "/activated-carbon" },
        { label: "Pabrik & QC", href: "/factory-qc" },
        { label: "Kontak", href: "/contact" },
      ],
      cta: "Minta Penawaran",
      mobileLanguageLabel: "Bahasa",
      openMenuAria: "Buka menu navigasi",
      closeMenuAria: "Tutup menu navigasi",
    },
    hero: {
      eyebrow: "HAIKOU, HAINAN · BERDIRI 2006",
      h1: "Rantai Pasok Kelapa Terintegrasi Hainan. Dari Pengolahan Pangan hingga Karbon Aktif Industri.",
      subtitle:
        "Berdiri sejak 2006 di Haikou, Hainan — menghubungkan budidaya komoditas tropis dan jaringan pasokan lintas batas Asia Tenggara (Indonesia & Vietnam) dengan pengolahan pangan kelapa serta ekspor karbon aktif industri.",
      cta: "Lihat Spesifikasi",
      switcherAria: "Pemilih tampilan divisi",
      divisions: [
        {
          id: "coconut-food",
          index: "01",
          label: "Pangan Kelapa",
          summary: "Kelapa Parut Kering · Santan Aseptik · Minyak VCO & RBD",
          href: "/coconut-food",
          imageAlt:
            "Panen kelapa Hainan dan bahan baku pengolahan pangan kelapa",
        },
        {
          id: "activated-carbon",
          index: "02",
          label: "Karbon Aktif",
          summary: "Filtrasi Air · Pemurnian Emas · Briket Shisha & BBQ",
          href: "/activated-carbon",
          imageAlt:
            "Karbon aktif tempurung kelapa dan material briket arang padat",
        },
        {
          id: "global-export",
          index: "03",
          label: "Ekspor Global",
          summary: "QC Laboratorium Internal · Pengapalan Haikou & Yangpu",
          href: "/factory-qc",
          imageAlt:
            "Pelabuhan kontainer maritim Haikou dan logistik ekspor global",
        },
      ],
    },
    parallaxStatement: {
      eyebrow: "01 / PROFIL PERUSAHAAN · BERDIRI 2006",
      heading:
        "Dua dekade operasi komoditas tropis. Menghubungkan pasokan Asia Tenggara ke pasar pangan dan industri global.",
      body: "Berdiri sejak 2006 di Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. bergerak di bidang budidaya buah tropis dan subtropis, pengolahan kelapa, serta perdagangan komoditas internasional — mengelola rantai pasok lintas batas aktif di Asia Tenggara termasuk pengadaan langsung bahan pertanian dan kelapa dari Indonesia serta Vietnam, berdampingan dengan lini ekspor karbon aktif tempurung kelapa dan briket arang.",
      originLabel: "Koridor Perdagangan",
      originValue: "Tiongkok · Indonesia · Vietnam",
      portsLabel: "Pelabuhan Ekspor",
      portsValue: "Pelabuhan Haikou & Yangpu",
      imageAlt:
        "Skala fasilitas manufaktur dan pengolahan industri Haikou Shengtai Tropical-Crop Co., Ltd.",
      captionLeft: "GAMBAR 01 — FASILITAS PENGOLAHAN & TANUR AKTIVASI, HAIKOU",
      captionRight: "LINI FOOD-GRADE & KARBON INDUSTRI",
    },
    dualDivision: {
      sectionAria: "Divisi manufaktur utama",
      food: {
        eyebrow: "01 / PENGOLAHAN PANGAN KELAPA",
        tag: "STANDAR EKSPOR FOOD-GRADE",
        heading: "Bahan Pangan Kelapa",
        summary:
          "Diolah dari daging kelapa tua Hainan di fasilitas higienis terpisah. Dipasok untuk industri roti, produsen minuman, pabrik konfeksioneri, serta importir private-label.",
        imageAlt:
          "Kelapa Hainan segar siap untuk pengolahan bahan pangan ekspor",
        lines: [
          {
            name: "Desiccated Coconut (Kelapa Parut Kering)",
            spec: "Fine / Medium / Flakes · High & Low Fat",
          },
          {
            name: "Santan & Krim Kelapa Aseptik",
            spec: "Kadar Lemak 17% – 24% · Drum Aseptik & Kaleng",
          },
          {
            name: "Minyak Kelapa Virgin (VCO) & RBD",
            spec: "Cold-Pressed & Refined · Drum 190kg / Flexitank",
          },
          {
            name: "Keripik Kelapa Panggang",
            spec: "Alami & Panggang · Karton Ekspor Curah",
          },
        ],
        cta: "Lihat Spesifikasi Pangan",
      },
      carbon: {
        eyebrow: "02 / KARBON AKTIF & BRIKET",
        tag: "STANDAR INDUSTRI",
        heading: "Karbon Aktif & Arang Tempurung",
        summary:
          "Tempurung kelapa berkepadatan tinggi yang dikarbonisasi dan diaktivasi uap dalam rotary kiln. Dirancang untuk volume mikropori tinggi, kekerasan mekanis, dan kadar abu rendah bagi sektor air, pertambangan, udara, dan bahan bakar.",
        imageAlt:
          "Material karbon aktif tempurung kelapa dan arang industri padat",
        lines: [
          {
            name: "Karbon Aktif Granular & Bubuk (GAC / PAC)",
            spec: "Basis Tempurung Kelapa · Aktivasi Uap Fisik",
          },
          {
            name: "Grade Filtrasi Air & Udara",
            spec: "Mesh 8×30 / 12×40 · Iodine Value 950 – 1.150 mg/g",
          },
          {
            name: "Karbon Pemurnian Emas (CIP / CIL)",
            spec: "Mesh 6×12 · Kekerasan Ball-Pan ≥ 98,5%",
          },
          {
            name: "Briket Arang Shisha & BBQ",
            spec: "Kubus 25mm / Heksagonal · Kadar Abu ≤ 2,2%",
          },
        ],
        cta: "Lihat Spesifikasi Karbon",
      },
    },
    productCatalog: {
      eyebrow: "02 / KATALOG EKSPOR",
      heading: "Spesifikasi Produk & Katalog Ekspor",
      filterAria: "Filter produk berdasarkan divisi",
      tabs: {
        all: "Semua",
        "coconut-food": "Pangan Kelapa",
        "activated-carbon": "Karbon Aktif",
        briquettes: "Briket Arang",
      },
      requestCta: "Minta Lembar Spesifikasi / Penawaran",
      products: [
        {
          id: "desiccated-coconut",
          category: "coconut-food",
          code: "PANGAN KELAPA · GRADE FINE / MEDIUM",
          title: "Desiccated Coconut (High & Low Fat)",
          imageAlt: "Kelapa parut kering putih standar ekspor industri pangan",
          specs: [
            { label: "Kadar Lemak", value: "65% ± 3% (HF) / 35% (LF)" },
            { label: "Kadar Air", value: "≤ 3,0%" },
            { label: "Masa Simpan", value: "12 Bulan (Sejuk, Kering)" },
            { label: "MOQ / Kemasan", value: "1×20ft FCL · Karung 25kg" },
          ],
        },
        {
          id: "coconut-milk-cream",
          category: "coconut-food",
          code: "PANGAN KELAPA · UHT ASEPTIK / KALENG",
          title: "Santan & Krim Kelapa Aseptik",
          imageAlt: "Sampel santan dan krim kelapa aseptik food-grade",
          specs: [
            { label: "Kadar Lemak", value: "17% / 22% / 24%" },
            { label: "Tingkat pH", value: "5,9 – 6,3" },
            { label: "Masa Simpan", value: "12–18 Bulan" },
            { label: "MOQ / Kemasan", value: "1×20ft FCL · Drum 200kg" },
          ],
        },
        {
          id: "virgin-rbd-coconut-oil",
          category: "coconut-food",
          code: "PANGAN KELAPA · COLD-PRESSED / REFINED",
          title: "Minyak Kelapa Virgin (VCO) & RBD",
          imageAlt: "Sampel minyak kelapa murni VCO dan RBD bening",
          specs: [
            { label: "Asam Lemak Bebas", value: "≤ 0,1% (Laurat)" },
            { label: "Kadar Air", value: "≤ 0,1%" },
            { label: "Masa Simpan", value: "24 Bulan" },
            { label: "MOQ / Kemasan", value: "Drum 190kg / Flexitank" },
          ],
        },
        {
          id: "water-purification-gac",
          category: "activated-carbon",
          code: "KARBON AKTIF · MESH 8×30 / 12×40",
          title: "Karbon Aktif Granular Filtrasi Air (GAC)",
          imageAlt: "Karbon aktif granular tempurung kelapa untuk pengolahan air",
          specs: [
            { label: "Nilai Iodin", value: "1000 – 1100 mg/g" },
            { label: "Kadar Air", value: "≤ 5,0%" },
            { label: "Kadar Abu", value: "≤ 3,0%" },
            { label: "Kemasan", value: "Karung 25kg / Jumbo Bag 500kg" },
          ],
        },
        {
          id: "gold-recovery-carbon",
          category: "activated-carbon",
          code: "KARBON AKTIF · MESH 6×12 CIP/CIL",
          title: "Karbon Aktif Pemurnian Emas",
          imageAlt: "Karbon aktif tempurung kelapa kasar mesh 6x12 untuk tambang emas",
          specs: [
            { label: "Nilai Iodin", value: "1050 – 1150 mg/g" },
            { label: "Kekerasan", value: "≥ 98,5% (Ball-Pan)" },
            { label: "Kadar Air", value: "≤ 5,0%" },
            { label: "Kemasan", value: "Jumbo Bag 500kg / 550kg" },
          ],
        },
        {
          id: "shisha-bbq-briquettes",
          category: "briquettes",
          code: "BRIKET · KUBUS 25MM / HEKSAGONAL",
          title: "Briket Arang Tempurung Kelapa",
          imageAlt: "Briket arang tempurung kelapa bentuk kubus dan heksagonal",
          specs: [
            { label: "Kadar Abu", value: "≤ 2,2% (Abu Putih)" },
            { label: "Nilai Kalor", value: "7.200 – 7.500 kcal/kg" },
            { label: "Kadar Air", value: "≤ 6,0%" },
            { label: "Kemasan", value: "Box 1kg / Master Carton 10kg" },
          ],
        },
      ],
    },
    factoryAndQC: {
      eyebrow: "03 / PABRIK & KONTROL KUALITAS",
      heading: "Integrasi Vertikal di Haikou, Hainan",
      body: "Haikou Shengtai memanfaatkan 100% bagian dari setiap kelapa yang dipanen dalam satu operasi terpadu — daging kelapa segar diolah pada lini food-grade sementara tempurung tua memasok tanur karbonisasi dan aktivasi uap. Pengendalian penuh dari hulu memastikan konsistensi kepadatan bahan baku, ketertelusuran batch, dan harga langsung pabrik.",
      traceabilityNote: "Ketertelusuran Batch · Tersedia Sampel Pra-Pengapalan",
      steps: [
        {
          number: "01",
          title: "Pengadaan Bahan Baku",
          detail:
            "Kelapa tua dipanen dari perkebunan mitra di seluruh Pulau Hainan. Setiap batch masuk diperiksa kepadatan tempurung, ketebalan daging, dan kadar air sebelum pemisahan.",
        },
        {
          number: "02",
          title: "Pengolahan Standar Pangan",
          detail:
            "Daging kelapa segar masuk ke area produksi higienis terisolasi untuk proses blanching, pengeringan, cold pressing, atau ekstraksi santan UHT aseptik sesuai kontrol HACCP.",
        },
        {
          number: "03",
          title: "Karbonisasi & Aktivasi Tempurung",
          detail:
            "Tempurung kelapa padat dikarbonisasi dan diaktivasi uap dalam rotary kiln pada suhu 850°C–950°C, lalu dipecah, dibersihkan dari debu, dan diayak sesuai ukuran mesh atau dicetak menjadi briket.",
        },
        {
          number: "04",
          title: "Uji Laboratorium Internal (QC)",
          detail:
            "Laboratorium mikrobiologi pangan dan pengujian karbon memverifikasi nilai iodin, kekerasan ball-pan, kadar air, kadar abu, persentase lemak, serta batas mikroba pada setiap lot.",
        },
        {
          number: "05",
          title: "Logistik Kontainer Global",
          detail:
            "Pengemasan curah kedap lembap (karung kraft/PP 25kg, jumbo bag 500kg, drum 190kg–200kg), dokumen ekspor COA/MSDS lengkap, dan pengiriman FCL langsung melalui Pelabuhan Haikou dan Yangpu.",
        },
      ],
      certificationsHeading: "SERTIFIKASI & KEPATUHAN",
      certificationsSubnote: "DOKUMENTASI TERSEDIA SETELAH VERIFIKASI RFQ",
      certifications: [
        { code: "ISO 9001", note: "Sistem Manajemen Mutu" },
        { code: "HACCP", note: "Pengendalian Keamanan Pangan" },
        { code: "HALAL", note: "Kepatuhan Pangan Ekspor" },
        { code: "COA & MSDS", note: "Diterbitkan Per Lot Produksi" },
        { code: "SGS / Intertek", note: "Mendukung Inspeksi Pihak Ketiga" },
      ],
    },
    inquiry: {
      eyebrow: "04 / PERMINTAAN PENAWARAN (RFQ)",
      heading: "Permintaan Penawaran Langsung Pabrik",
      body: "Sampaikan target grade produk, ukuran mesh atau persentase lemak, format kemasan, serta pelabuhan tujuan Anda. Tim ekspor kami akan mengirimkan penawaran FOB/CIF, jadwal produksi, dan dokumen COA.",
      contact: {
        emailLabel: "Email Penjualan Ekspor",
        addressLabel: "Kantor Pusat",
        addressValue:
          "Room 1702, Gedung B, Jingrui Building, No. 1 Guomao Avenue, Distrik Longhua, Haikou, Hainan, Tiongkok",
        responseLabel: "Waktu Respons",
        responseValue: "Dalam 24 Jam Kerja (GMT+8)",
        messagingLabel: "WeChat / WhatsApp",
        messagingValue: "+86 000 0000 0000 · ID WeChat: haikoushengtai",
      },
      form: {
        fullNameLabel: "Nama Lengkap *",
        fullNamePlaceholder: "mis. Budi Santoso",
        companyLabel: "Nama Perusahaan *",
        companyPlaceholder: "mis. PT Sumber Pangan / Apex Water Ltd.",
        emailLabel: "Email Bisnis *",
        emailPlaceholder: "procurement@perusahaan.com",
        divisionLabel: "Divisi / Produk yang Diminati *",
        divisionOptions: [
          "Pangan Kelapa — Desiccated Coconut",
          "Pangan Kelapa — Santan / Krim / Minyak Kelapa",
          "Pangan Kelapa — Keripik Kelapa Panggang",
          "Karbon Aktif — Filtrasi Air / Udara (GAC/PAC)",
          "Karbon Aktif — Pemurnian Emas (CIP / CIL)",
          "Briket Arang — Grade Shisha / BBQ",
          "Multi-Divisi / OEM Private Label",
        ],
        volumeLabel: "Estimasi Volume *",
        volumeOptions: [
          "Evaluasi Sampel (1 – 5 kg)",
          "Pesanan Uji Coba / Pengiriman LCL",
          "1 × 20ft FCL",
          "1 × 40ft HC",
          "Kontrak Pasokan Tahunan / Berkala",
        ],
        messageLabel: "Spesifikasi Teknis / Pesan",
        messagePlaceholder:
          "Cantumkan spesifikasi target (mis. nilai iodin, ukuran mesh, kadar lemak, format kemasan) serta pelabuhan tujuan...",
        shippingNote: "FOB HAIKOU / YANGPU · CIF SELURUH DUNIA",
        submitButton: "Kirim Permintaan",
        submittingButton: "Mengirim Permintaan...",
        errorPrefix: "Gagal mengirim permintaan saat ini. Silakan kirim email langsung ke",
        errorFallbackCta: "info@haikoushengtaitropical.com",
      },
      confirmation: {
        eyebrow: "PERMINTAAN TERKIRIM KE INFO@HAIKOUSHENGTAITROPICAL.COM",
        headingPrefix: "Terima kasih,",
        bodyPart1: "Permintaan penawaran Anda untuk",
        bodyPart2:
          "telah dikirim ke info@haikoushengtaitropical.com. Tim penjualan ekspor kami akan membalas ke",
        bodyPart3: "dalam waktu 24 jam kerja.",
        resetButton: "Kirim Permintaan Lain",
      },
    },
    footer: {
      tagline:
        "Haikou Shengtai Tropical-Crop Co., Ltd. (Berdiri 2006) — Budidaya komoditas tropis, pengolahan pangan kelapa food-grade, serta ekspor karbon aktif tempurung kelapa dan briket arang di Tiongkok, Indonesia, dan Vietnam.",
      divisionsHeading: "Divisi",
      divisionLinks: [
        { label: "Pengolahan Pangan Kelapa", href: "/coconut-food" },
        { label: "Karbon Aktif (GAC / PAC)", href: "/activated-carbon" },
        { label: "Briket Arang Kelapa", href: "/activated-carbon" },
        { label: "Katalog Produk Ekspor", href: "/#catalog" },
      ],
      qualityHeading: "Mutu & Dokumen",
      qualityLinks: [
        { label: "Integrasi Vertikal", href: "/factory-qc" },
        { label: "Pabrik & QC Laboratorium", href: "/factory-qc" },
        { label: "Sertifikasi & Kepatuhan", href: "/factory-qc#certifications" },
        { label: "Minta Penawaran (RFQ)", href: "/contact#rfq-form" },
      ],
      contactHeading: "Kontak Langsung",
      location:
        "Room 1702, Gedung B, Jingrui Building, No. 1 Guomao Avenue, Distrik Longhua, Haikou, Hainan, Tiongkok",
      ports: "Pelabuhan: Haikou / Yangpu",
      copyright:
        "© 2026 Haikou Shengtai Tropical-Crop Co., Ltd. Hak cipta dilindungi.",
      exportNotice: "BERDIRI 2006 · HAINAN, TIONGKOK · EKSPOR B2B",
    },
    productDetail: {
      homeLabel: "Beranda",
      productsLabel: "Produk",
      backToCatalog: "Kembali ke Katalog Ekspor",
      rfqCta: "Minta Penawaran (RFQ)",
      coaCta: "Unduh COA / Lembar Spesifikasi (PDF)",
      coaModalEyebrow: "DOKUMENTASI TEKNIS RESMI",
      coaModalTitle: "Certificate of Analysis (COA) & Lembar Spesifikasi",
      coaModalBody:
        "Dokumen resmi batch COA, MSDS, dan lembar spesifikasi lengkap diterbitkan langsung oleh tim ekspor Haikou kami kepada pembeli B2B terverifikasi. Lanjutkan ke formulir RFQ atau hubungi info@haikoushengtaitropical.com.",
      coaModalProceed: "Lanjut ke Formulir RFQ",
      coaModalClose: "Tutup",
      specsEyebrow: "01 / PARAMETER TEKNIS",
      specsHeading: "Spesifikasi Teknis Lengkap",
      specParamCol: "Parameter",
      specValueCol: "Spesifikasi Standar Ekspor",
      applicationsEyebrow: "02 / APLIKASI INDUSTRI & KOMERSIAL",
      applicationsHeading: "Aplikasi Utama",
      packagingEyebrow: "03 / PEMUATAN KONTAINER & LOGISTIK",
      packagingHeading: "Kemasan Ekspor & Pengiriman",
      packStandardLabel: "Kemasan Standar",
      pack20ftLabel: "Kapasitas 20ft FCL",
      pack40hcLabel: "Kapasitas 40ft HC",
      packLeadTimeLabel: "Waktu Produksi",
      packIncotermsLabel: "Ketentuan Perdagangan",
      relatedEyebrow: "04 / DIVISI YANG SAMA",
      relatedHeading: "Produk Ekspor Terkait",
      viewSpecsLink: "Lihat Spesifikasi",
      customGradeEyebrow: "OEM / GRADE KUSTOM",
      customGradeTitle: "Membutuhkan Ukuran Mesh, Kadar Lemak, atau Kemasan OEM Kustom?",
      customGradeBody:
        "Lini produksi Haikou kami mendukung pengayakan mesh kustom, karbon acid-washed rendah abu, persentase lemak khusus, serta kemasan ekspor private-label.",
      customGradeCta: "Ajukan Spesifikasi Kustom",
    },
  },
};
