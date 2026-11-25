import type { Locale } from "@/lib/translations";

export interface PagesDictionary {
  coconutFood: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    overviewEyebrow: string;
    overviewHeading: string;
    overviewBody: string;
    sourcingHighlights: { label: string; value: string }[];
    catalogEyebrow: string;
    catalogHeading: string;
    oemEyebrow: string;
    oemHeading: string;
    oemSubtitle: string;
    oemSpecs: { title: string; detail: string }[];
    ctaEyebrow: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
  activatedCarbon: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    capabilityEyebrow: string;
    capabilityHeading: string;
    capabilityBody: string;
    capabilityMetrics: { label: string; value: string }[];
    catalogEyebrow: string;
    catalogHeading: string;
    matrixEyebrow: string;
    matrixHeading: string;
    matrixItems: {
      code: string;
      sector: string;
      recommendedGrade: string;
      keyParameters: string;
      description: string;
    }[];
    ctaEyebrow: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
  factoryQC: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    corporateEyebrow: string;
    corporateHeading: string;
    corporateBody: string;
    corporateFacts: { label: string; value: string }[];
    labEyebrow: string;
    labHeading: string;
    labSubtitle: string;
    carbonLabTitle: string;
    carbonLabStandard: string;
    carbonLabTests: { parameter: string; method: string }[];
    foodLabTitle: string;
    foodLabStandard: string;
    foodLabTests: { parameter: string; method: string }[];
    logisticsEyebrow: string;
    logisticsHeading: string;
    logisticsBody: string;
    logisticsSpecs: { label: string; value: string }[];
    ctaButton: string;
  };
  certifications: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    certsEyebrow: string;
    certsHeading: string;
    certsList: {
      code: string;
      scope: string;
      authority: string;
      description: string;
    }[];
    docsEyebrow: string;
    docsHeading: string;
    docsSubtitle: string;
    docsChecklist: {
      number: string;
      title: string;
      detail: string;
    }[];
    ctaEyebrow: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
  contact: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    hoursLabel: string;
    hoursValue: string;
    directoryLabel: string;
    directory: { role: string; email: string }[];
    copyLabel: string;
    copiedLabel: string;
    submittingLabel: string;
    divisionOptions: string[];
    volumeOptions: string[];
    portStripEyebrow: string;
    portStripHeading: string;
    portStripTagLeft: string;
    portStripTagRight: string;
  };
}

export const PAGES_TRANSLATIONS: Record<Locale, PagesDictionary> = {
  en: {
    coconutFood: {
      breadcrumb: "Coconut Food",
      eyebrow: "DIVISION 01 / FOOD-GRADE EXPORT",
      title: "Coconut Food Processing",
      subtitle:
        "Hygienic, export-grade coconut ingredients processed directly from mature Hainan coconut plantations for global bakeries, beverage bottlers, and food manufacturers.",
      overviewEyebrow: "01 / HAINAN SOURCING & PROCESSING",
      overviewHeading: "Direct Kernel Processing at Origin",
      overviewBody:
        "Operating in Haikou, Hainan, our food division processes freshly husked mature coconuts within 24 hours of harvest. Dedicated stainless-steel blanching, drying, cold-pressing, and UHT aseptic filling lines ensure pure white appearance, stable fat percentages, and full microbiological compliance.",
      sourcingHighlights: [
        { label: "Raw Material Origin", value: "Contracted Hainan Plantations" },
        { label: "Food Safety Standard", value: "HACCP · ISO 9001 · HALAL" },
        { label: "Processing Window", value: "Fresh Kernel Within 24 Hours" },
        { label: "Export Port Dispatch", value: "Haikou & Yangpu (FCL / LCL)" },
      ],
      catalogEyebrow: "02 / FOOD-GRADE PRODUCTS",
      catalogHeading: "Coconut Food Export Lineup",
      oemEyebrow: "03 / OEM & EXPORT PACKAGING",
      oemHeading: "Bulk Industrial & Private-Label Packaging",
      oemSubtitle:
        "Flexible moisture-barrier bulk formats for factory lines alongside OEM/private-label retail packaging programs.",
      oemSpecs: [
        {
          title: "Desiccated Coconut Bulk Bags",
          detail: "25 kg / 50 kg 3-ply kraft paper bags with inner food-grade PE liner; 12–13 MT per 20ft FCL.",
        },
        {
          title: "Aseptic Drums & Bag-in-Box",
          detail: "200 kg aseptic steel drums and 20 kg BIB cartons for ambient bulk coconut milk and cream transport.",
        },
        {
          title: "Steel Drums, IBC & Flexitanks",
          detail: "190 kg food-grade lacquer steel drums, 920 kg IBC totes, or 21 MT container flexitanks for VCO and RBD oil.",
        },
        {
          title: "OEM / Private Label Programs",
          detail: "Custom retail cans (400ml / 2.9kg), Tetra Pak, and custom printed pouches available for contracted volume.",
        },
      ],
      ctaEyebrow: "DIRECT FACTORY SUPPLY",
      ctaHeading: "Request Samples or Bulk Food Pricing",
      ctaBody:
        "Share your target fat grade, cut size, packaging format, and destination port to receive a formal FOB/CIF quotation and COA.",
      ctaButton: "Request Food Quotation",
    },
    activatedCarbon: {
      breadcrumb: "Activated Carbon",
      eyebrow: "DIVISION 02 / INDUSTRIAL CARBON & FUEL",
      title: "Activated Carbon & Briquettes",
      subtitle:
        "High-density coconut shell activated carbon and compressed charcoal briquettes engineered in rotary steam-activation kilns for water, mining, air, and shisha/BBQ markets.",
      capabilityEyebrow: "01 / STEAM ACTIVATION ENGINEERING",
      capabilityHeading: "Rotary Kiln Carbonization & Physical Steam Activation",
      capabilityBody:
        "Thick-walled mature coconut shells are carbonized and physically steam-activated at 850°C–950°C without chemical binders. Controlled residence time develops a dense microporous network with high iodine adsorption, ball-pan hardness ≥ 98%, and low ash content.",
      capabilityMetrics: [
        { label: "Activation Method", value: "Physical Steam (850°C – 950°C)" },
        { label: "Iodine Value Range", value: "900 – 1,200 mg/g" },
        { label: "Ball-Pan Hardness", value: "≥ 98.0% (Pre-Attrited Available)" },
        { label: "Mesh Screening", value: "4×8 · 6×12 · 8×30 · 12×40 · 200 Mesh" },
      ],
      catalogEyebrow: "02 / CARBON & BRIQUETTE PRODUCTS",
      catalogHeading: "Industrial Carbon & Charcoal Lineup",
      matrixEyebrow: "03 / INDUSTRIAL APPLICATION MATRIX",
      matrixHeading: "Engineered Grades by Sector",
      matrixItems: [
        {
          code: "APP 01",
          sector: "Water Purification",
          recommendedGrade: "8×30 / 12×40 Mesh GAC",
          keyParameters: "Iodine 1000–1100 mg/g · Ash ≤ 3% (Acid-Washed ≤ 1%)",
          description:
            "Municipal drinking water dechlorination, industrial RO pre-treatment, and point-of-use filter cartridges.",
        },
        {
          code: "APP 02",
          sector: "Gold Recovery (CIP / CIL)",
          recommendedGrade: "6×12 / 6×16 Mesh High-Hardness",
          keyParameters: "Hardness ≥ 98.5% · Platelets ≤ 3% · High K/R Value",
          description:
            "Pre-attrited coconut shell carbon engineered for rapid gold-cyanide adsorption and minimal attrition loss.",
        },
        {
          code: "APP 03",
          sector: "Air & Gas Filtration",
          recommendedGrade: "4×8 / 6×12 Mesh Vapor Phase",
          keyParameters: "CTC ≥ 60% · Low Pressure Drop · Moisture ≤ 5%",
          description:
            "Industrial VOC abatement, solvent recovery, odor control scrubbers, and respirator cartridges.",
        },
        {
          code: "APP 04",
          sector: "Shisha & BBQ Export",
          recommendedGrade: "25mm Cube / Hexagonal Briquettes",
          keyParameters: "Ash ≤ 2.2% (White) · 7,200+ kcal/kg · SHT Certified",
          description:
            "100% natural compressed coconut shell briquettes with zero odor, smokeless burn, and OEM carton printing.",
        },
      ],
      ctaEyebrow: "TECHNICAL SPECIFICATION DESK",
      ctaHeading: "Request Technical Data Sheet & Batch COA",
      ctaBody:
        "Specify your required ASTM mesh size, iodine number, ash limit, and FCL volume for direct factory FOB/CIF pricing.",
      ctaButton: "Request Carbon Quotation",
    },
    factoryQC: {
      breadcrumb: "Factory & QC",
      eyebrow: "MANUFACTURING & QUALITY ASSURANCE · EST. 2006",
      title: "Factory & Quality Control",
      subtitle:
        "Vertically integrated Hainan operations combining 20+ years of tropical crop sourcing across China, Indonesia, and Vietnam with food-grade workshops, rotary activation kilns, and dual in-house laboratories.",
      corporateEyebrow: "CORPORATE PROFILE · VERIFIED REGISTRY",
      corporateHeading: "Corporate Fact Sheet",
      corporateBody:
        "Established on November 18, 2006 in Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. bridges tropical & subtropical agricultural sourcing with industrial food processing and coconut shell activated carbon exports.",
      corporateFacts: [
        { label: "Company Name", value: "Haikou Shengtai Tropical-Crop Co., Ltd." },
        { label: "Official Chinese Name", value: "海口盛泰热带作物有限公司" },
        { label: "Established", value: "November 18, 2006 (20+ Years)" },
        { label: "Registered Capital", value: "800,000 CNY" },
        {
          label: "Headquarters",
          value:
            "Room 1702, Building B, Jingrui Building, No. 1 Guomao Avenue, Longhua District, Haikou, Hainan, China",
        },
        { label: "Key Trade Corridors", value: "China · Indonesia · Vietnam" },
      ],
      labEyebrow: "02 / IN-HOUSE TESTING LABORATORIES",
      labHeading: "Dual-Division Laboratory & Testing Standards",
      labSubtitle:
        "Every production lot is sampled and verified prior to bagging and container loading. Third-party SGS or Intertek pre-shipment inspection is supported on all export orders.",
      carbonLabTitle: "Activated Carbon & Charcoal Lab",
      carbonLabStandard: "ASTM D2867 / D3802 / D4607 · GB/T 12496",
      carbonLabTests: [
        { parameter: "Iodine Adsorption Number", method: "ASTM D4607 / GB/T 12496.8" },
        { parameter: "Ball-Pan Hardness", method: "ASTM D3802" },
        { parameter: "Particle Size Distribution (Mesh)", method: "ASTM D2862 Dry Sieving" },
        { parameter: "Moisture & Total Ash Content", method: "ASTM D2867 / D2866" },
        { parameter: "Apparent Density & CTC Activity", method: "ASTM D2854 / D3467" },
      ],
      foodLabTitle: "Coconut Food Safety & Microbiology Lab",
      foodLabStandard: "HACCP · ISO 9001 · Export Food Standards",
      foodLabTests: [
        { parameter: "Fat Content & Free Fatty Acid (FFA)", method: "Soxhlet Extraction / Titration" },
        { parameter: "Moisture & Water Activity (Aw)", method: "Oven Drying / Aw Meter" },
        { parameter: "Microbiological Screening", method: "TPC, Coliforms, E. coli, Salmonella" },
        { parameter: "Commercial Sterility (UHT Milk)", method: "37°C / 10-Day Incubation Test" },
        { parameter: "SO2 Residue & Foreign Matter", method: "Monier-Williams / Metal Detection" },
      ],
      logisticsEyebrow: "03 / EXPORT LOGISTICS & DISPATCH",
      logisticsHeading: "Container Loading & Port Connectivity",
      logisticsBody:
        "Situated in Haikou, Hainan, our warehouse and container-stuffing bay connect directly to Haikou Port and Yangpu International Container Terminal for weekly sailings to Southeast Asia, the Middle East, Europe, Africa, and the Americas.",
      logisticsSpecs: [
        { label: "Primary Export Ports", value: "Haikou Port & Yangpu Port, Hainan" },
        { label: "Standard Container Modes", value: "20ft FCL · 40ft HC · Flexitank · LCL" },
        { label: "Pre-Shipment Inspection", value: "SGS / Intertek / BV Supported" },
        { label: "Export Documentation", value: "COA · MSDS · SHT · Phyto · CO" },
      ],
      ctaButton: "Schedule Audit or Request Sample",
    },
    certifications: {
      breadcrumb: "Certifications",
      eyebrow: "COMPLIANCE & EXPORT DOCUMENTATION",
      title: "Certifications & Compliance",
      subtitle:
        "Verified quality management, food safety systems, and complete customs/hazardous-goods documentation for smooth international import clearance.",
      certsEyebrow: "01 / MANAGEMENT & PRODUCT SYSTEMS",
      certsHeading: "International Quality & Safety Standards",
      certsList: [
        {
          code: "ISO 9001",
          scope: "Quality Management System",
          authority: "Industrial & Food Operations",
          description:
            "Standardized production workflows, raw material traceability, calibration schedules, and non-conformance controls across both manufacturing divisions.",
        },
        {
          code: "HACCP",
          scope: "Hazard Analysis Critical Control Point",
          authority: "Coconut Food Processing Division",
          description:
            "Preventive food safety controls governing raw kernel receiving, thermal blanching, drying, UHT sterilization, metal detection, and hygienic packing.",
        },
        {
          code: "HALAL",
          scope: "Halal Export Food Compliance",
          authority: "Food-Grade Coconut Ingredients",
          description:
            "Dedicated plant-based coconut processing free from cross-contamination, meeting import requirements for Middle East, Southeast Asian, and global Halal markets.",
        },
        {
          code: "FDA / Food Safety",
          scope: "Export Food Safety & Traceability",
          authority: "International Food Import Standards",
          description:
            "Compliant with international food-contact packaging, microbiological limits, and customs registration protocols for North American and European food importers.",
        },
      ],
      docsEyebrow: "02 / SHIPMENT DOCUMENTATION CHECKLIST",
      docsHeading: "Export & Customs Clearance Documents",
      docsSubtitle:
        "Every export container ships with verified batch documentation prepared by our Haikou export compliance team.",
      docsChecklist: [
        {
          number: "01",
          title: "COA — Certificate of Analysis",
          detail:
            "Lot-specific laboratory report verifying iodine value, hardness, ash, moisture (for carbon) or fat content, FFA, and microbiology (for food).",
        },
        {
          number: "02",
          title: "MSDS & SHT (Self-Heating Test)",
          detail:
            "Material Safety Data Sheet and UN-compliant Self-Heating Test reports for steam-activated carbon and coconut charcoal briquettes ocean freight.",
        },
        {
          number: "03",
          title: "Phytosanitary & Health Certificates",
          detail:
            "Official CIQ / customs health, sanitary, and phytosanitary certificates required for agricultural and food-grade coconut product imports.",
        },
        {
          number: "04",
          title: "SGS / Intertek Pre-Shipment Inspection",
          detail:
            "Independent third-party witness sampling, weight verification, and container loading supervision arranged upon buyer request.",
        },
      ],
      ctaEyebrow: "DOCUMENT VERIFICATION",
      ctaHeading: "Need Official Certificate Copies for Vendor Onboarding?",
      ctaBody:
        "Contact our export compliance desk to receive current certificate copies, sample COAs, and factory audit dossiers.",
      ctaButton: "Request Official Documents",
    },
    contact: {
      breadcrumb: "Contact",
      eyebrow: "GLOBAL EXPORT DESK · HAIKOU, HAINAN",
      title: "Direct Factory Inquiries & Export Quotations",
      subtitle:
        "Connect directly with Haikou Shengtai's export desk for FOB/CIF pricing, sample dispatch, batch COA documentation, and OEM production schedules.",
      hoursLabel: "Business Hours",
      hoursValue: "Monday – Saturday, 08:30 – 18:00 (GMT+8)",
      directoryLabel: "Official Contact Directory",
      directory: [
        {
          role: "Export Desk & General Inquiries",
          email: "info@haikoushengtaitropical.com",
        },
        {
          role: "Director — Ding Yajiao",
          email: "ding.yajiao@haikoushengtaitropical.com",
        },
        {
          role: "Indonesia Manager — Hendry",
          email: "hendry@haikoushengtaitropical.com",
        },
      ],
      copyLabel: "Copy",
      copiedLabel: "Copied",
      submittingLabel: "Submitting...",
      divisionOptions: [
        "Coconut Food Processing",
        "Activated Carbon & Briquettes",
        "Both Divisions (Food & Industrial Carbon)",
      ],
      volumeOptions: [
        "Sample Evaluation (1 – 5 kg)",
        "1 × 20ft FCL",
        "1 × 40ft HC",
      ],
      portStripEyebrow: "GLOBAL CONTAINER LOGISTICS",
      portStripHeading:
        "Weekly FCL & Flexitank Dispatch from Haikou and Yangpu Ports.",
      portStripTagLeft: "FOB HAIKOU / YANGPU · CIF WORLDWIDE",
      portStripTagRight: "SGS / INTERTEK PRE-SHIPMENT INSPECTION SUPPORTED",
    },
  },

  zh: {
    coconutFood: {
      breadcrumb: "椰子食品加工",
      eyebrow: "第一事业部 / 食品级出口标准",
      title: "椰子食品加工事业部",
      subtitle:
        "依托海南原产地成熟椰林直供，在独立HACCP洁净车间生产出口级椰蓉、无菌椰浆及椰子油，服务全球烘焙、饮品与食品制造商。",
      overviewEyebrow: "01 / 海南原产地直采与加工",
      overviewHeading: "原产地鲜果24小时内鲜榨精加工",
      overviewBody:
        "工厂位于中国海南海口，成熟老椰采摘剥壳后24小时内进入不锈钢食品级生产线。通过蒸汽漂烫、低温烘干、物理冷榨与UHT超高温无菌灌装工艺，确保产品色泽纯白、脂肪指标稳定且微生物全面达标。",
      sourcingHighlights: [
        { label: "原料原产地", value: "海南岛合作生态椰林直采" },
        { label: "食品安全体系", value: "HACCP · ISO 9001 · HALAL" },
        { label: "鲜果加工时效", value: "采后24小时内进入洁净线" },
        { label: "出口装运港", value: "海口港 / 洋浦港（整柜/拼箱）" },
      ],
      catalogEyebrow: "02 / 食品级核心产品",
      catalogHeading: "椰子食品出口产品系列",
      oemEyebrow: "03 / OEM代工与出口包装",
      oemHeading: "工业大宗包装与品牌OEM贴牌方案",
      oemSubtitle:
        "提供适配工业产线的防潮大宗包装，同时支持海外商超及餐饮品牌的OEM定制灌装与彩盒印制。",
      oemSpecs: [
        {
          title: "椰蓉出口防潮复合袋",
          detail: "25kg / 50kg 三层牛皮纸复合袋内衬食品级PE袋；20尺整柜可装 12–13 吨。",
        },
        {
          title: "无菌大桶与盒中袋 (BIB)",
          detail: "200kg 无菌袋装铁桶及 20kg 盒中袋，常温运输无菌椰浆与浓缩椰奶，无需冷链。",
        },
        {
          title: "铁桶、IBC吨桶与集装箱液袋",
          detail: "初榨及精炼椰子油支持190kg烤漆铁桶、920kg IBC吨桶及21吨集装箱液袋发运。",
        },
        {
          title: "OEM / 贴牌定制服务",
          detail: "按合同采购量提供400ml/2.9kg马口铁罐、利乐包及定制印刷小袋出口代工。",
        },
      ],
      ctaEyebrow: "源头工厂直供",
      ctaHeading: "索取食品原料样品或大宗报价",
      ctaBody:
        "请告知您所需的脂肪等级、粒度规格、包装方式及目的港，我们将出具正式FOB/CIF报价单及批次COA报告。",
      ctaButton: "获取食品事业部报价",
    },
    activatedCarbon: {
      breadcrumb: "椰壳活性炭",
      eyebrow: "第二事业部 / 工业炭与机制炭块",
      title: "椰壳活性炭与机制炭块",
      subtitle:
        "采用高密度老椰壳经回转炉水蒸气物理活化制成，专供市政与工业净水、黄金冶炼提金、废气治理及出口级水烟/烧烤炭市场。",
      capabilityEyebrow: "01 / 水蒸气物理活化工艺",
      capabilityHeading: "回转窑炭化与850°C–950°C高温水蒸气活化",
      capabilityBody:
        "严选厚壁老椰壳，经炭化及高温水蒸气物理活化（无化学粘合剂），精准控制活化时间形成发达微孔结构。具备高碘吸附值、球盘耐磨强度≥98%及低灰分特性。",
      capabilityMetrics: [
        { label: "活化工艺", value: "高温水蒸气物理活化 (850°C – 950°C)" },
        { label: "碘值范围", value: "900 – 1,200 mg/g" },
        { label: "球盘耐磨强度", value: "≥ 98.0%（选金炭可预磨处理）" },
        { label: "目数筛分范围", value: "4×8 · 6×12 · 8×30 · 12×40 · 200目" },
      ],
      catalogEyebrow: "02 / 活性炭与炭块产品",
      catalogHeading: "工业活性炭与椰壳炭块系列",
      matrixEyebrow: "03 / 工业应用选型矩阵",
      matrixHeading: "分行业推荐规格与核心参数",
      matrixItems: [
        {
          code: "应用 01",
          sector: "水处理与净水过滤",
          recommendedGrade: "8×30 / 12×40目 颗粒炭 (GAC)",
          keyParameters: "碘值 1000–1100 mg/g · 灰分 ≤ 3%（酸洗级 ≤ 1%）",
          description:
            "适用于市政饮用水除余氯、工业反渗透RO预处理、饮料工艺用水脱色及家用净水滤芯。",
        },
        {
          code: "应用 02",
          sector: "黄金冶炼提取 (CIP / CIL)",
          recommendedGrade: "6×12 / 6×16目 高强度选金炭",
          keyParameters: "耐磨强度 ≥ 98.5% · 片状率 ≤ 3% · 高K/R载金值",
          description:
            "出厂前经机械预磨抛光，吸附动力学优异、热再生损耗极低，适配大型金矿炭浆/炭浸工艺。",
        },
        {
          code: "应用 03",
          sector: "空气净化与废气治理",
          recommendedGrade: "4×8 / 6×12目 气相吸附炭",
          keyParameters: "CTC ≥ 60% · 低风阻压降 · 水分 ≤ 5%",
          description:
            "适用于工业VOCs挥发性有机物回收、溶剂吸附、恶臭气体洗涤塔及防毒呼吸滤罐。",
        },
        {
          code: "应用 04",
          sector: "水烟炭与烧烤炭出口",
          recommendedGrade: "25mm方炭 / 六角空心炭棒",
          keyParameters: "纯白灰分 ≤ 2.2% · 热值 7,200+ kcal/kg · 附SHT报告",
          description:
            "100%纯天然椰壳炭粉高压成型，无烟无异味、燃烧持久，支持中东及欧美品牌OEM彩盒定制。",
        },
      ],
      ctaEyebrow: "技术选型与出口报价",
      ctaHeading: "索取技术规格书与批次检测报告 (COA)",
      ctaBody:
        "请提供目标ASTM目数、碘值、灰分要求及采购柜量，我们的技术外贸团队将为您提供工厂直供报价。",
      ctaButton: "获取活性炭报价",
    },
    factoryQC: {
      breadcrumb: "工厂与质检",
      eyebrow: "生产制造与质量保证体系 · 始创于 2006 年",
      title: "工厂实力与实验室质检",
      subtitle:
        "立足海南海口二十载，贯通中国、印度尼西亚与越南东南亚农产品供应链，集成食品级洁净车间、活性炭回转窑与双独立厂内理化及微生物检测实验室。",
      corporateEyebrow: "企业工商档案 · 官方注册信息",
      corporateHeading: "企业核心档案一览",
      corporateBody:
        "海口盛泰热带作物有限公司成立于2006年11月18日，深耕热带及亚热带果蔬种植、椰子加工与跨境大宗贸易，同步发展食品级椰子原料与工业椰壳活性炭出口业务。",
      corporateFacts: [
        { label: "企业英文全称", value: "Haikou Shengtai Tropical-Crop Co., Ltd." },
        { label: "企业中文全称", value: "海口盛泰热带作物有限公司" },
        { label: "成立日期", value: "2006年11月18日（20年行业积淀）" },
        { label: "注册资本", value: "800,000 人民币 (CNY)" },
        {
          label: "总部注册地址",
          value: "中国海南省海口市龙华区国贸大道1号景瑞大厦B座1702室",
        },
        { label: "核心跨境贸易走廊", value: "中国 · 印度尼西亚 · 越南" },
      ],
      labEyebrow: "02 / 厂内独立检测实验室",
      labHeading: "双事业部检测标准与质量控制",
      labSubtitle:
        "每生产批次在包装与装柜前均执行抽样全检，并全面支持买家委托SGS或Intertek第三方装船前验货。",
      carbonLabTitle: "活性炭与炭块理化实验室",
      carbonLabStandard: "执行 ASTM D2867 / D3802 / D4607 · GB/T 12496 标准",
      carbonLabTests: [
        { parameter: "碘吸附值测定", method: "ASTM D4607 / GB/T 12496.8" },
        { parameter: "球盘耐磨强度", method: "ASTM D3802" },
        { parameter: "粒度目数分布", method: "ASTM D2862 标准振筛" },
        { parameter: "水分与总灰分", method: "ASTM D2867 / D2866" },
        { parameter: "堆积密度与CTC吸附率", method: "ASTM D2854 / D3467" },
      ],
      foodLabTitle: "椰子食品理化与微生物实验室",
      foodLabStandard: "执行 HACCP · ISO 9001 · 出口食品检验规范",
      foodLabTests: [
        { parameter: "脂肪含量与游离脂肪酸(FFA)", method: "索氏抽提 / 滴定测定" },
        { parameter: "水分含量与水分活度(Aw)", method: "恒温干燥法 / 活度仪" },
        { parameter: "微生物全项筛查", method: "菌落总数、大肠菌群、沙门氏菌" },
        { parameter: "无菌椰浆商业无菌检验", method: "37°C 10天保温留样验证" },
        { parameter: "二氧化硫残留与金检异物", method: "蒸馏滴定 / 在线金属探测" },
      ],
      logisticsEyebrow: "03 / 出口仓储与集装箱物流",
      logisticsHeading: "标准装柜作业与港口直连网络",
      logisticsBody:
        "海口生产基地紧邻海口港与洋浦国际集装箱码头，配备防潮成品库与标准化装柜平台，每周均有稳定班轮直达东南亚、中东、欧洲、非洲及美洲主要港口。",
      logisticsSpecs: [
        { label: "主要出口港", value: "海南海口港 / 洋浦国际港" },
        { label: "常规装运方式", value: "20尺整柜 · 40尺高柜 · 液袋 · 拼箱" },
        { label: "第三方验货", value: "支持 SGS / Intertek / BV 监装" },
        { label: "随货出口单证", value: "COA · MSDS · SHT · 植检证 · 产地证" },
      ],
      ctaButton: "预约验厂或申请寄样",
    },
    certifications: {
      breadcrumb: "资质认证",
      eyebrow: "国际体系与出口合规单证",
      title: "资质认证与出口合规",
      subtitle:
        "完善的质量管理与食品安全认证体系，配套规范齐全的国际海运及目的港清关单证，保障全球B2B客户顺畅通关。",
      certsEyebrow: "01 / 管理与产品认证体系",
      certsHeading: "国际质量与食品安全标准",
      certsList: [
        {
          code: "ISO 9001",
          scope: "国际质量管理体系",
          authority: "食品与工业双事业部覆盖",
          description:
            "覆盖原料入厂检验、工艺参数控制、设备校准、全批次溯源及不合格品隔离的标准化质量管理体系。",
        },
        {
          code: "HACCP",
          scope: "危害分析与关键控制点",
          authority: "椰子食品加工事业部",
          description:
            "针对鲜椰接收、巴氏漂烫、干燥、UHT无菌杀菌、金属探测及洁净包装环节建立关键食品安全控制点。",
        },
        {
          code: "HALAL",
          scope: "清真食品出口合规认证",
          authority: "食品级椰子配料系列",
          description:
            "全植物基独立产线无交叉污染，满足中东、东南亚及全球清真食品市场的清关与采购合规要求。",
        },
        {
          code: "FDA / 食品安全合规",
          scope: "国际食品出口与溯源标准",
          authority: "欧美及国际食品进口规范",
          description:
            "符合食品接触包装材料安全、微生物限量及海关出口食品生产企业备案规范，服务欧美品牌采购商。",
        },
      ],
      docsEyebrow: "02 / 出口清关单证清单",
      docsHeading: "每批出口货物随附单证",
      docsSubtitle:
        "海口出口单证团队为每笔订单提前核对并备齐目的港清关与海运合规文件。",
      docsChecklist: [
        {
          number: "01",
          title: "COA — 批次出厂检测报告",
          detail:
            "按生产批号出具实测报告，载明活性炭碘值、强度、灰分、水分，或椰子食品脂肪、酸价及微生物指标。",
        },
        {
          number: "02",
          title: "MSDS 与 SHT 海运自热试验报告",
          detail:
            "提供符合国际海运危规(IMDG)要求的化学品安全技术说明书及蒸汽活化炭/椰壳炭块自热试验报告。",
        },
        {
          number: "03",
          title: "植物检疫证与官方卫生证书",
          detail:
            "由海关检验检疫机构出具的出口食品卫生证书、植物检疫证书及原产地证(CO / FORM E)。",
        },
        {
          number: "04",
          title: "SGS / Intertek 装船前第三方检验",
          detail:
            "按客户要求配合第三方机构入厂见证取样、复检理化指标、核重并监督集装箱封箱。",
        },
      ],
      ctaEyebrow: "资质文件核验",
      ctaHeading: "供应商准入需要正式证书与COA样本？",
      ctaBody:
        "请联系我们的出口合规与外贸团队，获取现行有效资质证书副本、样本COA报告及工厂审核资料。",
      ctaButton: "申请官方资质文件",
    },
    contact: {
      breadcrumb: "联系我们",
      eyebrow: "全球出口业务中心 · 中国海南海口",
      title: "源头工厂直供询盘与出口报价",
      subtitle:
        "直接对接海口盛泰外贸与技术支持团队，获取FOB/CIF正式报价、免费寄样、批次COA报告及OEM排产计划。",
      hoursLabel: "工作时间",
      hoursValue: "周一至周六 08:30 – 18:00（北京时间 GMT+8）",
      directoryLabel: "官方业务联络名录",
      directory: [
        {
          role: "出口业务与综合咨询",
          email: "info@haikoushengtaitropical.com",
        },
        {
          role: "总经理 — 丁亚娇 (Ding Yajiao)",
          email: "ding.yajiao@haikoushengtaitropical.com",
        },
        {
          role: "印度尼西亚业务经理 — Hendry",
          email: "hendry@haikoushengtaitropical.com",
        },
      ],
      copyLabel: "复制",
      copiedLabel: "已复制",
      submittingLabel: "提交中...",
      divisionOptions: [
        "椰子食品加工事业部",
        "椰壳活性炭与机制炭块事业部",
        "双事业部联合采购（食品 + 工业活性炭）",
      ],
      volumeOptions: [
        "样品寄送与测试 (1 – 5 kg)",
        "1 × 20尺整柜 (20ft FCL)",
        "1 × 40尺高柜 (40ft HC)",
      ],
      portStripEyebrow: "全球海运集装箱发运",
      portStripHeading: "依托海口港与洋浦国际港，每周稳定发运整柜与液袋出口订单。",
      portStripTagLeft: "支持 FOB 海口/洋浦 · CIF 全球目的港",
      portStripTagRight: "支持 SGS / INTERTEK 第三方装船前验货",
    },
  },

  id: {
    coconutFood: {
      breadcrumb: "Pangan Kelapa",
      eyebrow: "DIVISI 01 / STANDAR EKSPOR FOOD-GRADE",
      title: "Pengolahan Pangan Kelapa",
      subtitle:
        "Bahan pangan kelapa higienis standar ekspor yang diolah langsung dari perkebunan kelapa tua Hainan untuk industri roti, minuman, dan manufaktur pangan global.",
      overviewEyebrow: "01 / SUMBER BAHAN BAKU & PENGOLAHAN HAINAN",
      overviewHeading: "Pengolahan Daging Kelapa Segar Langsung di Sumber",
      overviewBody:
        "Beroperasi di Haikou, Hainan, divisi pangan kami mengolah kelapa tua yang baru dikupas dalam waktu 24 jam pascapanen. Lini blanching stainless-steel, pengeringan terkontrol, cold-pressing, dan pengisian aseptik UHT menjaga warna putih murni, kestabilan kadar lemak, serta kepatuhan mikrobiologi.",
      sourcingHighlights: [
        { label: "Asal Bahan Baku", value: "Perkebunan Mitra Pulau Hainan" },
        { label: "Standar Keamanan Pangan", value: "HACCP · ISO 9001 · HALAL" },
        { label: "Kecepatan Proses", value: "Daging Segar Dalam 24 Jam" },
        { label: "Pelabuhan Pengapalan", value: "Haikou & Yangpu (FCL / LCL)" },
      ],
      catalogEyebrow: "02 / PRODUK FOOD-GRADE",
      catalogHeading: "Lini Produk Ekspor Pangan Kelapa",
      oemEyebrow: "03 / OEM & KEMASAN EKSPOR",
      oemHeading: "Kemasan Industri Curah & Private-Label",
      oemSubtitle:
        "Format kemasan curah kedap lembap untuk lini pabrik serta program kemasan ritel OEM/private-label.",
      oemSpecs: [
        {
          title: "Karung Curah Desiccated Coconut",
          detail: "Karung kertas kraft 3-lapis 25 kg / 50 kg dengan liner PE food-grade; muatan 12–13 MT per 20ft FCL.",
        },
        {
          title: "Drum Aseptik & Bag-in-Box",
          detail: "Drum besi aseptik 200 kg dan karton BIB 20 kg untuk pengiriman santan dan krim kelapa suhu ruang.",
        },
        {
          title: "Drum Besi, IBC & Flexitank",
          detail: "Drum besi food-grade 190 kg, IBC tote 920 kg, atau flexitank kontainer 21 MT untuk minyak VCO dan RBD.",
        },
        {
          title: "Program OEM / Private Label",
          detail: "Tersedia kaleng ritel (400ml / 2,9kg), kemasan Tetra Pak, serta pouch cetak khusus untuk kontrak volume.",
        },
      ],
      ctaEyebrow: "PASOKAN LANGSUNG PABRIK",
      ctaHeading: "Minta Sampel atau Penawaran Harga Curah",
      ctaBody:
        "Sampaikan target kadar lemak, ukuran potongan, format kemasan, dan pelabuhan tujuan Anda untuk penawaran FOB/CIF serta COA.",
      ctaButton: "Minta Penawaran Pangan",
    },
    activatedCarbon: {
      breadcrumb: "Karbon Aktif",
      eyebrow: "DIVISI 02 / KARBON INDUSTRI & BAHAN BAKAR",
      title: "Karbon Aktif & Briket Arang",
      subtitle:
        "Karbon aktif tempurung kelapa berkepadatan tinggi dan briket arang padat yang diproduksi dalam rotary kiln aktivasi uap untuk sektor air, tambang emas, udara, dan shisha/BBQ.",
      capabilityEyebrow: "01 / REKAYASA AKTIVASI UAP",
      capabilityHeading: "Karbonisasi Rotary Kiln & Aktivasi Uap Fisik",
      capabilityBody:
        "Tempurung kelapa tua berdinding tebal dikarbonisasi dan diaktivasi uap secara fisik pada suhu 850°C–950°C tanpa perekat kimia. Pengendalian waktu tinggal menghasilkan jaringan mikropori padat dengan daya serap iodin tinggi, kekerasan ball-pan ≥ 98%, dan kadar abu rendah.",
      capabilityMetrics: [
        { label: "Metode Aktivasi", value: "Uap Fisik (850°C – 950°C)" },
        { label: "Rentang Nilai Iodin", value: "900 – 1.200 mg/g" },
        { label: "Kekerasan Ball-Pan", value: "≥ 98,0% (Tersedia Pre-Attrited)" },
        { label: "Ayakan Mesh", value: "4×8 · 6×12 · 8×30 · 12×40 · 200 Mesh" },
      ],
      catalogEyebrow: "02 / PRODUK KARBON & BRIKET",
      catalogHeading: "Lini Karbon Industri & Arang Ekspor",
      matrixEyebrow: "03 / MATRIKS APLIKASI INDUSTRI",
      matrixHeading: "Grade Terukur Berdasarkan Sektor",
      matrixItems: [
        {
          code: "APP 01",
          sector: "Filtrasi & Pengolahan Air",
          recommendedGrade: "GAC Mesh 8×30 / 12×40",
          keyParameters: "Iodin 1000–1100 mg/g · Abu ≤ 3% (Acid-Washed ≤ 1%)",
          description:
            "Deklorinasi air minum kota, pra-perlakuan RO industri, pemurnian air minuman, dan kartrid filter POU/POE.",
        },
        {
          code: "APP 02",
          sector: "Pemurnian Emas (CIP / CIL)",
          recommendedGrade: "Mesh 6×12 / 6×16 Kekerasan Tinggi",
          keyParameters: "Kekerasan ≥ 98,5% · Kepingan ≤ 3% · Nilai K/R Tinggi",
          description:
            "Karbon tempurung kelapa pre-attrited untuk adsorpsi emas-sianida cepat dengan tingkat kehilangan abrasi minimal.",
        },
        {
          code: "APP 03",
          sector: "Filtrasi Udara & Gas",
          recommendedGrade: "Vapor Phase Mesh 4×8 / 6×12",
          keyParameters: "CTC ≥ 60% · Penurunan Tekanan Rendah · Air ≤ 5%",
          description:
            "Pengendalian VOC industri, pemulihan pelarut, scrubber pengendali bau, dan kartrid respirator.",
        },
        {
          code: "APP 04",
          sector: "Ekspor Shisha & BBQ",
          recommendedGrade: "Briket Kubus 25mm / Heksagonal",
          keyParameters: "Abu ≤ 2,2% (Putih) · 7.200+ kcal/kg · Sertifikat SHT",
          description:
            "Briket tempurung kelapa alami 100% tanpa bau, tanpa asap, durasi bakar stabil, dan layanan cetak kemasan OEM.",
        },
      ],
      ctaEyebrow: "MEJA SPESIFIKASI TEKNIS",
      ctaHeading: "Minta Lembar Data Teknis & Batch COA",
      ctaBody:
        "Sampaikan kebutuhan ukuran mesh ASTM, nilai iodin, batas kadar abu, dan volume FCL untuk penawaran langsung pabrik FOB/CIF.",
      ctaButton: "Minta Penawaran Karbon",
    },
    factoryQC: {
      breadcrumb: "Pabrik & QC",
      eyebrow: "MANUFAKTUR & PENJAMINAN MUTU · BERDIRI 2006",
      title: "Pabrik & Kontrol Kualitas",
      subtitle:
        "Operasi terintegrasi vertikal di Hainan dengan 20+ tahun pengalaman pengadaan komoditas tropis lintas Tiongkok, Indonesia, dan Vietnam, menggabungkan workshop food-grade, rotary kiln aktivasi, dan dua laboratorium uji internal.",
      corporateEyebrow: "PROFIL PERUSAHAAN · DATA RESMI",
      corporateHeading: "Lembar Fakta Perusahaan",
      corporateBody:
        "Didirikan pada 18 November 2006 di Haikou, Hainan, Haikou Shengtai Tropical-Crop Co., Ltd. menghubungkan budidaya komoditas tropis dan pengadaan lintas batas Asia Tenggara dengan pengolahan pangan kelapa serta ekspor karbon aktif industri.",
      corporateFacts: [
        { label: "Nama Resmi Perusahaan", value: "Haikou Shengtai Tropical-Crop Co., Ltd." },
        { label: "Nama Resmi Mandarin", value: "海口盛泰热带作物有限公司" },
        { label: "Tanggal Berdiri", value: "18 November 2006 (20+ Tahun)" },
        { label: "Modal Terdaftar", value: "800.000 CNY" },
        {
          label: "Kantor Pusat",
          value:
            "Room 1702, Gedung B, Jingrui Building, No. 1 Guomao Avenue, Distrik Longhua, Haikou, Hainan, Tiongkok",
        },
        { label: "Koridor Perdagangan Utama", value: "Tiongkok · Indonesia · Vietnam" },
      ],
      labEyebrow: "02 / LABORATORIUM PENGUJIAN INTERNAL",
      labHeading: "Laboratorium Dual-Divisi & Standar Pengujian",
      labSubtitle:
        "Setiap lot produksi diambil sampel dan diverifikasi sebelum pengemasan serta pemuatan kontainer. Inspeksi pihak ketiga SGS atau Intertek didukung untuk seluruh pesanan ekspor.",
      carbonLabTitle: "Laboratorium Karbon Aktif & Arang",
      carbonLabStandard: "ASTM D2867 / D3802 / D4607 · GB/T 12496",
      carbonLabTests: [
        { parameter: "Nilai Adsorpsi Iodin", method: "ASTM D4607 / GB/T 12496.8" },
        { parameter: "Kekerasan Ball-Pan", method: "ASTM D3802" },
        { parameter: "Distribusi Ukuran Partikel (Mesh)", method: "ASTM D2862 Ayakan Kering" },
        { parameter: "Kadar Air & Kadar Abu Total", method: "ASTM D2867 / D2866" },
        { parameter: "Densitas Curah & Aktivitas CTC", method: "ASTM D2854 / D3467" },
      ],
      foodLabTitle: "Laboratorium Keamanan Pangan & Mikrobiologi",
      foodLabStandard: "HACCP · ISO 9001 · Standar Pangan Ekspor",
      foodLabTests: [
        { parameter: "Kadar Lemak & Asam Lemak Bebas (FFA)", method: "Ekstraksi Soxhlet / Titrasi" },
        { parameter: "Kadar Air & Aktivitas Air (Aw)", method: "Pengeringan Oven / Aw Meter" },
        { parameter: "Uji Mikrobiologi Lengkap", method: "TPC, Coliform, E. coli, Salmonella" },
        { parameter: "Sterilitas Komersial (Santan UHT)", method: "Uji Inkubasi 37°C / 10 Hari" },
        { parameter: "Residu SO2 & Deteksi Benda Asing", method: "Monier-Williams / Metal Detector" },
      ],
      logisticsEyebrow: "03 / LOGISTIK EKSPOR & PENGAPALAN",
      logisticsHeading: "Pemuatan Kontainer & Konektivitas Pelabuhan",
      logisticsBody:
        "Berlokasi di Haikou, Hainan, gudang dan area stuffing kontainer kami terhubung langsung ke Pelabuhan Haikou dan Terminal Kontainer Internasional Yangpu dengan jadwal pelayaran mingguan ke Asia Tenggara, Timur Tengah, Eropa, Afrika, dan Amerika.",
      logisticsSpecs: [
        { label: "Pelabuhan Ekspor Utama", value: "Pelabuhan Haikou & Yangpu, Hainan" },
        { label: "Moda Kontainer Standar", value: "20ft FCL · 40ft HC · Flexitank · LCL" },
        { label: "Inspeksi Pra-Pengapalan", value: "Mendukung SGS / Intertek / BV" },
        { label: "Dokumen Ekspor", value: "COA · MSDS · SHT · Phyto · CO" },
      ],
      ctaButton: "Jadwalkan Audit atau Minta Sampel",
    },
    certifications: {
      breadcrumb: "Sertifikasi",
      eyebrow: "KEPATUHAN & DOKUMENTASI EKSPOR",
      title: "Sertifikasi & Kepatuhan",
      subtitle:
        "Sistem manajemen mutu, keamanan pangan, serta dokumentasi kepabeanan dan pengapalan lengkap untuk kelancaran impor internasional.",
      certsEyebrow: "01 / SISTEM MANAJEMEN & PRODUK",
      certsHeading: "Standar Mutu & Keamanan Internasional",
      certsList: [
        {
          code: "ISO 9001",
          scope: "Sistem Manajemen Mutu",
          authority: "Operasi Pangan & Industri",
          description:
            "Alur produksi terstandarisasi, ketertelusuran bahan baku, jadwal kalibrasi alat uji, serta pengendalian ketidaksesuaian di kedua divisi manufaktur.",
        },
        {
          code: "HACCP",
          scope: "Hazard Analysis Critical Control Point",
          authority: "Divisi Pengolahan Pangan Kelapa",
          description:
            "Kontrol keamanan pangan preventif pada penerimaan daging kelapa, blanching termal, pengeringan, sterilisasi UHT, deteksi logam, dan pengemasan higienis.",
        },
        {
          code: "HALAL",
          scope: "Kepatuhan Pangan Ekspor Halal",
          authority: "Bahan Pangan Kelapa Food-Grade",
          description:
            "Pengolahan berbasis nabati terpisah bebas kontaminasi silang, memenuhi persyaratan impor pasar Timur Tengah, Asia Tenggara, dan pasar Halal global.",
        },
        {
          code: "FDA / Keamanan Pangan",
          scope: "Keamanan & Ketertelusuran Pangan Ekspor",
          authority: "Standar Impor Pangan Internasional",
          description:
            "Memenuhi standar kemasan kontak pangan, batas mikrobiologi, serta registrasi kepabeanan bagi importir pangan di Amerika Utara dan Eropa.",
        },
      ],
      docsEyebrow: "02 / DAFTAR DOKUMEN PENGAPALAN",
      docsHeading: "Dokumen Ekspor & Kepabeanan",
      docsSubtitle:
        "Setiap kontainer ekspor disertai dokumen batch terverifikasi yang disiapkan oleh tim kepatuhan ekspor Haikou kami.",
      docsChecklist: [
        {
          number: "01",
          title: "COA — Certificate of Analysis",
          detail:
            "Laporan uji laboratorium per lot produksi yang memuat nilai iodin, kekerasan, abu, air (untuk karbon) atau kadar lemak, FFA, dan mikrobiologi (untuk pangan).",
        },
        {
          number: "02",
          title: "MSDS & SHT (Self-Heating Test)",
          detail:
            "Material Safety Data Sheet dan laporan Self-Heating Test sesuai standar pengapalan laut untuk karbon aktif uap dan briket arang kelapa.",
        },
        {
          number: "03",
          title: "Sertifikat Fitosanitari & Kesehatan",
          detail:
            "Sertifikat kesehatan, sanitasi, fitosanitari resmi, serta Surat Keterangan Asal (CO / FORM E) untuk impor produk pangan kelapa.",
        },
        {
          number: "04",
          title: "Inspeksi Pra-Pengapalan SGS / Intertek",
          detail:
            "Pengambilan sampel tersaksi, verifikasi berat, dan pengawasan stuffing kontainer oleh lembaga independen pihak ketiga sesuai permintaan pembeli.",
        },
      ],
      ctaEyebrow: "VERIFIKASI DOKUMEN",
      ctaHeading: "Membutuhkan Salinan Sertifikat Resmi untuk Registrasi Vendor?",
      ctaBody:
        "Hubungi tim kepatuhan ekspor kami untuk memperoleh salinan sertifikat aktif, contoh COA, dan berkas audit pabrik.",
      ctaButton: "Minta Dokumen Resmi",
    },
    contact: {
      breadcrumb: "Kontak",
      eyebrow: "MEJA EKSPOR GLOBAL · HAIKOU, HAINAN",
      title: "Permintaan Langsung Pabrik & Penawaran Ekspor",
      subtitle:
        "Terhubung langsung dengan tim ekspor Haikou Shengtai untuk penawaran harga FOB/CIF, pengiriman sampel, dokumen COA, dan jadwal produksi OEM.",
      hoursLabel: "Jam Operasional",
      hoursValue: "Senin – Sabtu, 08:30 – 18:00 (GMT+8)",
      directoryLabel: "Direktori Kontak Resmi",
      directory: [
        {
          role: "Meja Ekspor & Pertanyaan Umum",
          email: "info@haikoushengtaitropical.com",
        },
        {
          role: "Direktur — Ding Yajiao",
          email: "ding.yajiao@haikoushengtaitropical.com",
        },
        {
          role: "Manajer Indonesia — Hendry",
          email: "hendry@haikoushengtaitropical.com",
        },
      ],
      copyLabel: "Salin",
      copiedLabel: "Disalin",
      submittingLabel: "Mengirim...",
      divisionOptions: [
        "Pengolahan Pangan Kelapa",
        "Karbon Aktif & Briket Arang",
        "Kedua Divisi (Pangan & Karbon Industri)",
      ],
      volumeOptions: [
        "Evaluasi Sampel (1 – 5 kg)",
        "1 × 20ft FCL",
        "1 × 40ft HC",
      ],
      portStripEyebrow: "LOGISTIK KONTAINER GLOBAL",
      portStripHeading:
        "Pengapalan FCL & Flexitank Mingguan dari Pelabuhan Haikou dan Yangpu.",
      portStripTagLeft: "FOB HAIKOU / YANGPU · CIF SELURUH DUNIA",
      portStripTagRight: "MENDUKUNG INSPEKSI PRA-PENGAPALAN SGS / INTERTEK",
    },
  },
};
