import type { Locale } from "@/lib/translations";

export type ProductCategory =
  | "coconut-food"
  | "activated-carbon"
  | "briquettes";

export type ProductDivision = "food" | "carbon";

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductLocaleContent {
  name: string;
  code: string;
  division: string;
  shortDesc: string;
  overview: string;
  imageAlt: string;
  highlightSpecs: SpecRow[];
  technicalSpecs: SpecRow[];
  applications: string[];
  packagingAndShipping: {
    standardPack: string;
    fcl20: string;
    hc40: string;
    leadTime: string;
    incoterms: string;
  };
}

export interface ProductData {
  slug: string;
  category: ProductCategory;
  divisionKey: ProductDivision;
  image: string;
  rfqDivisionIndex: number;
  translations: Record<Locale, ProductLocaleContent>;
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: "desiccated-coconut",
    category: "coconut-food",
    divisionKey: "food",
    image: "/images/products/food-1.webp",
    rfqDivisionIndex: 0,
    translations: {
      en: {
        name: "Desiccated Coconut (High & Low Fat)",
        code: "COCONUT FOOD · FINE / MEDIUM GRADE",
        division: "Coconut Food Processing",
        shortDesc:
          "Pure white, finely shredded and dehydrated mature Hainan coconut kernel processed under HACCP food-grade controls for industrial bakery and confectionery manufacturing.",
        overview:
          "Produced from freshly husked mature Hainan coconuts, our desiccated coconut is blanched, pared, disintegrated into precise Fine, Medium, or Flake cuts, and gently hot-air dried to preserve natural white color and aroma without artificial whitening agents.",
        imageAlt: "Food-grade white desiccated coconut for industrial food export",
        highlightSpecs: [
          { label: "Fat Content", value: "65% ± 3% (HF) / 35% (LF)" },
          { label: "Moisture", value: "≤ 3.0%" },
          { label: "Shelf Life", value: "12 Months (Cool, Dry)" },
          { label: "MOQ / Pack", value: "1×20ft FCL · 25kg Bag" },
        ],
        technicalSpecs: [
          { label: "Grade Cuts", value: "Extra Fine · Fine · Medium · Flakes" },
          { label: "Fat Content", value: "65% ± 3% (High Fat) / 35% ± 5% (Low Fat)" },
          { label: "Moisture Content", value: "≤ 3.0% (Max)" },
          { label: "Free Fatty Acid (as Lauric)", value: "≤ 0.15%" },
          { label: "SO2 Residue", value: "≤ 50 ppm (or SO2-Free on request)" },
          { label: "pH (10% Solution)", value: "6.1 – 6.7" },
          { label: "Microbiology (Salmonella / E. coli)", value: "Negative in 25g" },
          { label: "Shelf Life", value: "12 Months (Store < 25°C, RH < 65%)" },
          { label: "HS Code (Reference)", value: "0801.11.00 (TBC)" },
        ],
        applications: [
          "Industrial bakery fillings, cookies, macaroons, and pastry toppings",
          "Chocolate and confectionery bar inclusions and coatings",
          "Ready-to-eat cereal, granola, and snack bar formulations",
          "Foodservice bulk dry mixes and private-label retail repacking",
        ],
        packagingAndShipping: {
          standardPack: "25 kg / 50 kg 3-ply kraft paper bag with inner food-grade PE liner",
          fcl20: "12.0 – 13.0 MT (480 – 520 × 25 kg bags, floor-loaded)",
          hc40: "25.0 – 26.0 MT (1,000 – 1,040 × 25 kg bags, floor-loaded)",
          leadTime: "10 – 14 business days after order confirmation",
          incoterms: "FOB Haikou / Yangpu · CIF Global Ports",
        },
      },
      zh: {
        name: "出口级椰蓉（高脂 / 低脂）",
        code: "椰子食品 · 细级 / 中粗级",
        division: "椰子食品加工事业部",
        shortDesc:
          "精选海南成熟椰肉经HACCP洁净车间脱皮、粉碎与低温热风干燥制成，色泽纯白、椰香自然，专供烘焙工厂、糖果及食品配料企业。",
        overview:
          "原料采自海南岛成熟老椰，经去皮、巴氏蒸汽杀菌、精准切粒（细粉/中粗/椰丝）与热风烘干工艺加工，全程不添加漂白剂，保持稳定的脂肪含量与低水分指标，满足欧美、中东及东南亚出口食品标准。",
        imageAlt: "食品级纯白椰蓉工业原料样品",
        highlightSpecs: [
          { label: "脂肪含量", value: "65% ± 3% (高脂) / 35% (低脂)" },
          { label: "水分含量", value: "≤ 3.0%" },
          { label: "保质期", value: "12个月（阴凉干燥）" },
          { label: "起订量 / 包装", value: "1×20尺柜 · 25kg复合袋" },
        ],
        technicalSpecs: [
          { label: "粒度规格", value: "特细 / 细粉 (Fine) / 中粗 (Medium) / 椰丝" },
          { label: "脂肪含量", value: "65% ± 3%（高脂）/ 35% ± 5%（低脂）" },
          { label: "水分含量", value: "≤ 3.0%" },
          { label: "游离脂肪酸（以月桂酸计）", value: "≤ 0.15%" },
          { label: "二氧化硫残留", value: "≤ 50 ppm（可定制无硫款）" },
          { label: "pH值（10%水溶液）", value: "6.1 – 6.7" },
          { label: "致病菌（沙门氏菌/大肠杆菌）", value: "25g样品未检出" },
          { label: "保质期", value: "12个月（温度 < 25°C，湿度 < 65%）" },
          { label: "参考HS编码", value: "0801.11.00（以报关核定为准）" },
        ],
        applications: [
          "大型烘焙工厂馅料、曲奇饼干、面包表层及糕点夹心",
          "巧克力涂层、夹心糖果及坚果能量棒配料",
          "即食谷物燕麦、烘焙预拌粉及餐饮供应链原料",
          "海外品牌商OEM贴牌小包装分装供应",
        ],
        packagingAndShipping: {
          standardPack: "25kg / 50kg 三层牛皮纸复合袋，内衬食品级防潮PE袋",
          fcl20: "12.0 – 13.0 吨（480 – 520 袋 × 25kg，散装码柜）",
          hc40: "25.0 – 26.0 吨（1,000 – 1,040 袋 × 25kg，散装码柜）",
          leadTime: "确认订单后 10 – 14 个工作日发运",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 全球港口",
        },
      },
      id: {
        name: "Desiccated Coconut (High & Low Fat)",
        code: "PANGAN KELAPA · GRADE FINE / MEDIUM",
        division: "Divisi Pengolahan Pangan Kelapa",
        shortDesc:
          "Kelapa parut kering putih murni dari daging kelapa tua Hainan yang diproses sesuai standar keamanan pangan HACCP untuk industri roti dan konfeksioneri.",
        overview:
          "Diolah dari kelapa tua segar asal Hainan melalui proses pengupasan, blanching uap, pemotongan presisi (Fine, Medium, Flakes), dan pengeringan udara terkontrol untuk menjaga warna putih alami serta aroma tanpa bahan pemutih buatan.",
        imageAlt: "Kelapa parut kering putih standar ekspor industri pangan",
        highlightSpecs: [
          { label: "Kadar Lemak", value: "65% ± 3% (HF) / 35% (LF)" },
          { label: "Kadar Air", value: "≤ 3,0%" },
          { label: "Masa Simpan", value: "12 Bulan (Sejuk, Kering)" },
          { label: "MOQ / Kemasan", value: "1×20ft FCL · Karung 25kg" },
        ],
        technicalSpecs: [
          { label: "Ukuran Potongan", value: "Extra Fine · Fine · Medium · Flakes" },
          { label: "Kadar Lemak", value: "65% ± 3% (High Fat) / 35% ± 5% (Low Fat)" },
          { label: "Kadar Air", value: "≤ 3,0% (Maks)" },
          { label: "Asam Lemak Bebas (Laurat)", value: "≤ 0,15%" },
          { label: "Residu SO2", value: "≤ 50 ppm (tersedia opsi bebas SO2)" },
          { label: "pH (Larutan 10%)", value: "6,1 – 6,7" },
          { label: "Mikrobiologi (Salmonella / E. coli)", value: "Negatif dalam 25g" },
          { label: "Masa Simpan", value: "12 Bulan (Simpan < 25°C, RH < 65%)" },
          { label: "Kode HS (Referensi)", value: "0801.11.00 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Isian dan taburan industri roti, biskuit, kukis, dan pastri",
          "Campuran cokelat batangan, permen, dan produk konfeksioneri",
          "Formulasi sereal siap saji, granola, dan snack bar",
          "Bahan baku curah horeca dan pengemasan ulang private-label",
        ],
        packagingAndShipping: {
          standardPack: "Karung kertas kraft 3-lapis 25 kg / 50 kg dengan liner PE food-grade",
          fcl20: "12,0 – 13,0 MT (480 – 520 karung × 25 kg, floor-loaded)",
          hc40: "25,0 – 26,0 MT (1.000 – 1.040 karung × 25 kg, floor-loaded)",
          leadTime: "10 – 14 hari kerja setelah konfirmasi pesanan",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Global",
        },
      },
    },
  },
  {
    slug: "coconut-milk-cream",
    category: "coconut-food",
    divisionKey: "food",
    image: "/images/products/food-2.webp",
    rfqDivisionIndex: 1,
    translations: {
      en: {
        name: "Aseptic Coconut Milk & Cream",
        code: "COCONUT FOOD · UHT ASEPTIC / CANNED",
        division: "Coconut Food Processing",
        shortDesc:
          "Homogenized, UHT-sterilized coconut milk and thick coconut cream extracted from fresh Hainan coconut meat for beverage bottlers, sauces, and dairy-alternative producers.",
        overview:
          "Extracted directly from fresh mature coconut kernel and standardized to 17%, 22%, or 24% natural fat content. UHT aseptic thermal processing ensures commercial sterility and smooth emulsion stability for bulk industrial handling without refrigeration.",
        imageAlt: "Aseptic coconut milk and thick coconut cream samples",
        highlightSpecs: [
          { label: "Fat Content", value: "17% / 22% / 24%" },
          { label: "pH Level", value: "5.9 – 6.3" },
          { label: "Shelf Life", value: "12–18 Months" },
          { label: "MOQ / Pack", value: "1×20ft FCL · 200kg Drum" },
        ],
        technicalSpecs: [
          { label: "Fat Grades", value: "17% – 19% (Milk) · 22% – 24% (Cream)" },
          { label: "pH Value", value: "5.9 – 6.3" },
          { label: "Brix", value: "7.0 – 10.0° (Grade Dependent)" },
          { label: "Color & Texture", value: "Natural Creamy White, Smooth Emulsion" },
          { label: "Thermal Process", value: "UHT Sterilized & Aseptically Filled" },
          { label: "Stabilizers", value: "Additive-Free or Custom Food-Grade Stabilizer" },
          { label: "Commercial Sterility", value: "Pass (37°C / 10 Days Incubation)" },
          { label: "Shelf Life", value: "12 Months (Aseptic) / 18 Months (Canned)" },
          { label: "HS Code (Reference)", value: "2009.89.90 / 2106.90 (TBC)" },
        ],
        applications: [
          "Ready-to-drink coconut beverages, plant-based milks, and coffee creamers",
          "Industrial curry sauces, soups, and ethnic food manufacturing",
          "Dairy-free ice cream, yogurt, and chilled dessert formulations",
          "OEM private-label canned and Tetra Pak retail programs",
        ],
        packagingAndShipping: {
          standardPack: "200 kg aseptic bag-in-drum · 20 kg aseptic bag-in-box · 400ml / 2.9kg cans",
          fcl20: "16.0 MT (80 × 200 kg aseptic steel drums, palletized)",
          hc40: "25.0 – 26.0 MT (128 – 130 × 200 kg aseptic drums)",
          leadTime: "14 – 18 business days after order confirmation",
          incoterms: "FOB Haikou / Yangpu · CIF Global Ports",
        },
      },
      zh: {
        name: "无菌灌装椰浆与浓缩椰奶",
        code: "椰子食品 · UHT无菌 / 罐装",
        division: "椰子食品加工事业部",
        shortDesc:
          "采用新鲜海南老椰肉鲜榨均质，经UHT超高温瞬时杀菌无菌灌装，稳定供应茶饮连锁、饮料灌装厂、酱料及植物基乳品企业。",
        overview:
          "鲜榨老椰肉原浆，提供17%、22%、24%等标准脂肪规格，支持无添加纯原浆或定制稳定剂配方。全自动UHT无菌灌装工艺确保常温长期储存稳定性与细腻乳化质感，便于工业产线直接投料。",
        imageAlt: "食品级无菌椰浆与浓缩椰奶实验室样品",
        highlightSpecs: [
          { label: "脂肪含量", value: "17% / 22% / 24%" },
          { label: "pH值", value: "5.9 – 6.3" },
          { label: "保质期", value: "12–18个月" },
          { label: "起订量 / 包装", value: "1×20尺柜 · 200kg无菌桶" },
        ],
        technicalSpecs: [
          { label: "脂肪等级", value: "17% – 19%（椰奶）/ 22% – 24%（浓椰浆）" },
          { label: "pH值", value: "5.9 – 6.3" },
          { label: "可溶性固形物 (Brix)", value: "7.0 – 10.0°（按规格）" },
          { label: "色泽与组织状态", value: "自然乳白色，均质细腻无分层" },
          { label: "杀菌工艺", value: "UHT超高温瞬时杀菌 + 无菌冷灌装" },
          { label: "配方选项", value: "纯椰原浆无添加 / 定制食品级稳定剂" },
          { label: "商业无菌检测", value: "合格（37°C 保温10天检验）" },
          { label: "保质期", value: "12个月（无菌大桶）/ 18个月（马口铁罐）" },
          { label: "参考HS编码", value: "2009.89.90 / 2106.90（以报关核定为准）" },
        ],
        applications: [
          "即饮生椰拿铁基底、植物基椰奶及咖啡伴侣饮料生产",
          "东南亚咖喱酱料、复合调味汤底及预制菜工业制造",
          "植物基冰淇淋、椰子酸奶及冷链甜品原料",
          "海外品牌400ml罐装及利乐包OEM代工出口",
        ],
        packagingAndShipping: {
          standardPack: "200kg 无菌袋装铁桶 · 20kg 盒中袋 (BIB) · 400ml / 2.9kg 罐装",
          fcl20: "16.0 吨（80 桶 × 200kg 无菌铁桶，托盘装运）",
          hc40: "25.0 – 26.0 吨（128 – 130 桶 × 200kg 无菌铁桶）",
          leadTime: "确认订单后 14 – 18 个工作日发运",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 全球港口",
        },
      },
      id: {
        name: "Santan & Krim Kelapa Aseptik",
        code: "PANGAN KELAPA · UHT ASEPTIK / KALENG",
        division: "Divisi Pengolahan Pangan Kelapa",
        shortDesc:
          "Santan dan krim kelapa kental hasil ekstraksi daging kelapa segar Hainan yang disterilisasi UHT aseptik untuk industri minuman, saus, dan produk non-dairy.",
        overview:
          "Diekstraksi langsung dari daging kelapa tua segar dan distandarisasi pada kadar lemak alami 17%, 22%, atau 24%. Proses termal UHT aseptik memastikan sterilitas komersial dan stabilitas emulsi halus tanpa memerlukan rantai dingin.",
        imageAlt: "Sampel santan dan krim kelapa aseptik food-grade",
        highlightSpecs: [
          { label: "Kadar Lemak", value: "17% / 22% / 24%" },
          { label: "Tingkat pH", value: "5,9 – 6,3" },
          { label: "Masa Simpan", value: "12–18 Bulan" },
          { label: "MOQ / Kemasan", value: "1×20ft FCL · Drum 200kg" },
        ],
        technicalSpecs: [
          { label: "Grade Lemak", value: "17% – 19% (Santan) · 22% – 24% (Krim)" },
          { label: "Nilai pH", value: "5,9 – 6,3" },
          { label: "Brix", value: "7,0 – 10,0° (Sesuai Grade)" },
          { label: "Warna & Tekstur", value: "Putih Alami, Emulsi Halus Homogen" },
          { label: "Proses Termal", value: "Sterilisasi UHT & Pengisian Aseptik" },
          { label: "Stabilisator", value: "Tanpa Aditif atau Stabilisator Food-Grade" },
          { label: "Sterilitas Komersial", value: "Lulus (Inkubasi 37°C / 10 Hari)" },
          { label: "Masa Simpan", value: "12 Bulan (Aseptik) / 18 Bulan (Kaleng)" },
          { label: "Kode HS (Referensi)", value: "2009.89.90 / 2106.90 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Minuman kelapa siap saji, susu nabati, dan krimer kopi",
          "Industri saus kari, sup siap masak, dan bumbu makanan",
          "Formulasi es krim non-dairy, yogurt nabati, dan dessert dingin",
          "Program OEM kaleng 400ml dan kemasan Tetra Pak ritel",
        ],
        packagingAndShipping: {
          standardPack: "Drum besi aseptik 200 kg · Bag-in-Box 20 kg · Kaleng 400ml / 2,9kg",
          fcl20: "16,0 MT (80 drum aseptik × 200 kg, di atas palet)",
          hc40: "25,0 – 26,0 MT (128 – 130 drum aseptik × 200 kg)",
          leadTime: "14 – 18 hari kerja setelah konfirmasi pesanan",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Global",
        },
      },
    },
  },
  {
    slug: "virgin-coconut-oil",
    category: "coconut-food",
    divisionKey: "food",
    image: "/images/products/food-3.webp",
    rfqDivisionIndex: 1,
    translations: {
      en: {
        name: "Virgin & RBD Coconut Oil",
        code: "COCONUT FOOD · COLD-PRESSED / REFINED",
        division: "Coconut Food Processing",
        shortDesc:
          "Water-clear cold-pressed Virgin Coconut Oil (VCO) and neutral RBD Coconut Oil supplied in export steel drums, IBC totes, and flexitanks for food and cosmetic manufacturers.",
        overview:
          "Our Virgin Coconut Oil is mechanically cold-pressed from fresh white coconut kernel without chemical refining, preserving high lauric acid (48%–52%) and mild natural coconut aroma. Neutral, odorless RBD Coconut Oil is also produced for high-heat commercial frying and baking.",
        imageAlt: "Clear virgin and refined RBD coconut oil export samples",
        highlightSpecs: [
          { label: "Free Fatty Acid", value: "≤ 0.1% (Lauric)" },
          { label: "Moisture", value: "≤ 0.1%" },
          { label: "Shelf Life", value: "24 Months" },
          { label: "MOQ / Pack", value: "190kg Drum / Flexitank" },
        ],
        technicalSpecs: [
          { label: "Product Variants", value: "Cold-Pressed Virgin (VCO) · Refined (RBD)" },
          { label: "Free Fatty Acid (as Lauric)", value: "≤ 0.10%" },
          { label: "Moisture & Volatile Matter", value: "≤ 0.10%" },
          { label: "Lauric Acid (C12:0)", value: "47% – 53%" },
          { label: "Peroxide Value", value: "≤ 2.0 meq/kg" },
          { label: "Color (Lovibond 5.25\")", value: "≤ 0.5R / 2.0Y (VCO) · ≤ 1.0R / 10Y (RBD)" },
          { label: "Melting Point", value: "24°C – 26°C" },
          { label: "Shelf Life", value: "24 Months (Sealed, Ambient)" },
          { label: "HS Code (Reference)", value: "1513.11.00 / 1513.19.00 (TBC)" },
        ],
        applications: [
          "Functional nutrition, MCT blending, and health food bottling",
          "Commercial frying, confectionery fats, and vegan bakery shortening",
          "Cosmetic, skincare, and personal care base oil formulations",
          "Bulk industrial food-ingredient distribution and OEM jar packing",
        ],
        packagingAndShipping: {
          standardPack: "190 kg food-grade steel drum · 920 kg IBC tote · 21 MT Flexitank",
          fcl20: "15.2 MT (80 × 190 kg drums) or 21.0 MT (1 × Flexitank)",
          hc40: "24.7 MT (130 × 190 kg drums) or 22.0 MT (24 × IBC totes)",
          leadTime: "10 – 15 business days after order confirmation",
          incoterms: "FOB Haikou / Yangpu · CIF Global Ports",
        },
      },
      zh: {
        name: "初榨椰子油与RBD精炼椰子油",
        code: "椰子食品 · 低温冷榨 / RBD精炼",
        division: "椰子食品加工事业部",
        shortDesc:
          "提供低温冷榨初榨椰子油(VCO)与无色无味RBD精炼椰子油，支持190kg铁桶、IBC吨桶及集装箱液袋出口，服务食品加工与日化企业。",
        overview:
          "初榨椰子油(VCO)由新鲜纯白椰肉低温物理冷榨离心分离制成，清澈透明，保留47%–53%天然月桂酸与淡雅椰香；同时供应脱酸、脱色、脱臭的RBD精炼椰子油，适用于高温油炸、烘焙油脂及工业食品配方。",
        imageAlt: "清澈透明的初榨及精炼椰子油样品",
        highlightSpecs: [
          { label: "游离脂肪酸", value: "≤ 0.1%（以月桂酸计）" },
          { label: "水分及挥发物", value: "≤ 0.1%" },
          { label: "保质期", value: "24个月" },
          { label: "起订量 / 包装", value: "190kg铁桶 / 集装箱液袋" },
        ],
        technicalSpecs: [
          { label: "产品规格", value: "低温冷榨初榨椰子油 (VCO) / RBD精炼椰子油" },
          { label: "游离脂肪酸（以月桂酸计）", value: "≤ 0.10%" },
          { label: "水分及挥发物", value: "≤ 0.10%" },
          { label: "月桂酸含量 (C12:0)", value: "47% – 53%" },
          { label: "过氧化值", value: "≤ 2.0 meq/kg" },
          { label: "罗维朋色泽 (5.25寸)", value: "≤ 0.5R / 2.0Y (VCO) · ≤ 1.0R / 10Y (RBD)" },
          { label: "熔点", value: "24°C – 26°C" },
          { label: "保质期", value: "24个月（避光密封常温保存）" },
          { label: "参考HS编码", value: "1513.11.00 / 1513.19.00（以报关核定为准）" },
        ],
        applications: [
          "功能性健康食品、MCT中链甘油三酯原料及瓶装食用油分装",
          "商业油炸用油、糖果代可可脂及植物基烘焙起酥油",
          "护肤品、洗护日化及手工皂基础植物油脂原料",
          "大宗工业油脂贸易与海外品牌玻璃罐OEM灌装",
        ],
        packagingAndShipping: {
          standardPack: "190kg 食品级烤漆铁桶 · 920kg IBC吨桶 · 21吨 集装箱液袋",
          fcl20: "15.2 吨（80 桶 × 190kg 铁桶）或 21.0 吨（1 套液袋）",
          hc40: "24.7 吨（130 桶 × 190kg 铁桶）或 22.0 吨（24 个 IBC 吨桶）",
          leadTime: "确认订单后 10 – 15 个工作日发运",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 全球港口",
        },
      },
      id: {
        name: "Minyak Kelapa Virgin (VCO) & RBD",
        code: "PANGAN KELAPA · COLD-PRESSED / REFINED",
        division: "Divisi Pengolahan Pangan Kelapa",
        shortDesc:
          "Minyak Kelapa Murni (VCO) bening hasil cold-press dan Minyak Kelapa RBD netral dalam drum besi, IBC tote, dan flexitank untuk industri pangan serta kosmetik.",
        overview:
          "Virgin Coconut Oil (VCO) kami dipress dingin secara mekanis dari daging kelapa putih segar tanpa pemurnian kimia, menjaga kadar asam laurat alami (47%–53%) dan kejernihan maksimal. Tersedia pula minyak kelapa RBD netral tanpa bau untuk penggorengan suhu tinggi dan industri kue.",
        imageAlt: "Sampel minyak kelapa murni VCO dan RBD bening",
        highlightSpecs: [
          { label: "Asam Lemak Bebas", value: "≤ 0,1% (Laurat)" },
          { label: "Kadar Air", value: "≤ 0,1%" },
          { label: "Masa Simpan", value: "24 Bulan" },
          { label: "MOQ / Kemasan", value: "Drum 190kg / Flexitank" },
        ],
        technicalSpecs: [
          { label: "Varian Produk", value: "Cold-Pressed Virgin (VCO) · Refined (RBD)" },
          { label: "Asam Lemak Bebas (Laurat)", value: "≤ 0,10%" },
          { label: "Kadar Air & Volatil", value: "≤ 0,10%" },
          { label: "Kadar Asam Laurat (C12:0)", value: "47% – 53%" },
          { label: "Bilangan Peroksida", value: "≤ 2,0 meq/kg" },
          { label: "Warna (Lovibond 5,25\")", value: "≤ 0,5R / 2,0Y (VCO) · ≤ 1,0R / 10Y (RBD)" },
          { label: "Titik Leleh", value: "24°C – 26°C" },
          { label: "Masa Simpan", value: "24 Bulan (Tersegel, Suhu Ruang)" },
          { label: "Kode HS (Referensi)", value: "1513.11.00 / 1513.19.00 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Nutrisi fungsional, campuran MCT, dan pembotolan pangan sehat",
          "Minyak goreng komersial, lemak konfeksioneri, dan shortening nabati",
          "Formulasi minyak dasar kosmetik, skincare, dan perawatan tubuh",
          "Distribusi minyak industri curah dan pengemasan OEM toples kaca",
        ],
        packagingAndShipping: {
          standardPack: "Drum besi food-grade 190 kg · IBC tote 920 kg · Flexitank 21 MT",
          fcl20: "15,2 MT (80 drum × 190 kg) atau 21,0 MT (1 × Flexitank)",
          hc40: "24,7 MT (130 drum × 190 kg) atau 22,0 MT (24 × IBC tote)",
          leadTime: "10 – 15 hari kerja setelah konfirmasi pesanan",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Global",
        },
      },
    },
  },
  {
    slug: "granular-activated-carbon",
    category: "activated-carbon",
    divisionKey: "carbon",
    image: "/images/products/carbon-1.webp",
    rfqDivisionIndex: 3,
    translations: {
      en: {
        name: "Water Filtration Granular Carbon (GAC)",
        code: "ACTIVATED CARBON · 8×30 / 12×40 MESH",
        division: "Activated Carbon & Briquettes",
        shortDesc:
          "Steam-activated coconut shell granular carbon engineered for high microporosity, rapid dechlorination, and low pressure drop in municipal, industrial, and point-of-use water systems.",
        overview:
          "Manufactured from dense mature Hainan coconut shells carbonized and physically steam-activated at 850°C–950°C. Carefully crushed, dedusted, and screened to tight ASTM mesh distributions (8×30, 12×40, 20×50) with optional acid-washed low-ash grades for ultrapure water treatment.",
        imageAlt: "Coconut shell granular activated carbon for water purification",
        highlightSpecs: [
          { label: "Iodine Value", value: "1000 – 1100 mg/g" },
          { label: "Moisture", value: "≤ 5.0%" },
          { label: "Ash Content", value: "≤ 3.0%" },
          { label: "Packaging", value: "25kg / 500kg Jumbo Bag" },
        ],
        technicalSpecs: [
          { label: "Raw Material", value: "100% Mature Coconut Shell (Steam Activated)" },
          { label: "Mesh Size (ASTM)", value: "8×30 · 12×40 · 20×50 Mesh (Customizable)" },
          { label: "Iodine Adsorption Number", value: "1000 – 1100 mg/g (up to 1200 mg/g)" },
          { label: "BET Surface Area", value: "1050 – 1150 m²/g" },
          { label: "Ball-Pan Hardness", value: "≥ 98.0%" },
          { label: "Moisture (as Packed)", value: "≤ 5.0%" },
          { label: "Total Ash Content", value: "≤ 3.0% (Acid-Washed ≤ 1.0% available)" },
          { label: "Apparent Density", value: "0.48 – 0.53 g/cm³" },
          { label: "pH Value", value: "9 – 11 (6 – 8 for Acid-Washed)" },
          { label: "HS Code (Reference)", value: "3802.10.10 (TBC)" },
        ],
        applications: [
          "Municipal drinking water purification and dechlorination beds",
          "Industrial process water, RO pre-treatment, and ultrapure water",
          "Beverage bottling, brewery, and food-process water polishing",
          "Residential and commercial point-of-use (POU/POE) filter cartridges",
        ],
        packagingAndShipping: {
          standardPack: "25 kg multi-wall PP woven bag with PE liner · 500 kg FIBC jumbo bag",
          fcl20: "10.0 – 11.0 MT (20 × 500 kg jumbo bags or 440 × 25 kg bags)",
          hc40: "22.0 – 24.0 MT (44 × 500 kg jumbo bags or 920 × 25 kg bags)",
          leadTime: "7 – 12 business days after order confirmation",
          incoterms: "FOB Haikou / Yangpu · CIF Global Ports",
        },
      },
      zh: {
        name: "净水级椰壳颗粒活性炭 (GAC)",
        code: "椰壳活性炭 · 8×30 / 12×40目",
        division: "椰壳活性炭与炭块事业部",
        shortDesc:
          "水蒸气物理活化椰壳颗粒活性炭，微孔高度发达、余氯去除快、机械强度高，广泛用于市政饮用水、工业纯水及净水器滤芯填料。",
        overview:
          "精选高密度老椰壳经回转炉炭化与850°C–950°C高温水蒸气活化制成，经多级破碎、风选除尘与精准筛分（8×30、12×40、20×50目）。同时可根据客户需求提供酸洗低灰分级别，满足超纯水与食品饮料工艺用水要求。",
        imageAlt: "工业水处理用8x30目椰壳颗粒活性炭样品",
        highlightSpecs: [
          { label: "碘值", value: "1000 – 1100 mg/g" },
          { label: "水分", value: "≤ 5.0%" },
          { label: "灰分", value: "≤ 3.0%" },
          { label: "标准包装", value: "25kg编织袋 / 500kg吨袋" },
        ],
        technicalSpecs: [
          { label: "原料与工艺", value: "100% 成熟老椰壳 · 水蒸气物理活化" },
          { label: "目数范围 (ASTM)", value: "8×30 / 12×40 / 20×50目（支持定制）" },
          { label: "碘吸附值", value: "1000 – 1100 mg/g（最高可达1200 mg/g）" },
          { label: "BET比表面积", value: "1050 – 1150 m²/g" },
          { label: "耐磨强度（球盘法）", value: "≥ 98.0%" },
          { label: "水分含量", value: "≤ 5.0%" },
          { label: "灰分含量", value: "≤ 3.0%（酸洗级可达 ≤ 1.0%）" },
          { label: "堆积密度", value: "0.48 – 0.53 g/cm³" },
          { label: "pH值", value: "9 – 11（酸洗中性级 6 – 8）" },
          { label: "参考HS编码", value: "3802.10.10（以报关核定为准）" },
        ],
        applications: [
          "市政自来水厂深度净化、除余氯及去除微量有机物",
          "工业反渗透(RO)预处理、电厂锅炉补给水及电子超纯水",
          "酒类酿造、饮料灌装厂及食品工业工艺用水脱色除味",
          "家用与商用净水器滤芯(POU/POE)核心吸附介质",
        ],
        packagingAndShipping: {
          standardPack: "25kg 内衬PE防潮编织袋 · 500kg 集装吨袋 (FIBC)",
          fcl20: "10.0 – 11.0 吨（20个500kg吨袋 或 440袋×25kg）",
          hc40: "22.0 – 24.0 吨（44个500kg吨袋 或 920袋×25kg）",
          leadTime: "确认订单后 7 – 12 个工作日发运",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 全球港口",
        },
      },
      id: {
        name: "Karbon Aktif Granular Filtrasi Air (GAC)",
        code: "KARBON AKTIF · MESH 8×30 / 12×40",
        division: "Divisi Karbon Aktif & Briket",
        shortDesc:
          "Karbon granular tempurung kelapa aktivasi uap dengan mikropori tinggi, deklorinasi cepat, dan penurunan tekanan rendah untuk sistem pengolahan air kota dan industri.",
        overview:
          "Diproduksi dari tempurung kelapa tua Hainan berkepadatan tinggi yang dikarbonisasi dan diaktivasi uap fisik pada suhu 850°C–950°C. Dipecah, dibersihkan dari debu, dan diayak ketat sesuai standar mesh ASTM (8×30, 12×40, 20×50), tersedia pula varian acid-washed berkadar abu rendah.",
        imageAlt: "Karbon aktif granular tempurung kelapa untuk pengolahan air",
        highlightSpecs: [
          { label: "Nilai Iodin", value: "1000 – 1100 mg/g" },
          { label: "Kadar Air", value: "≤ 5,0%" },
          { label: "Kadar Abu", value: "≤ 3,0%" },
          { label: "Kemasan", value: "Karung 25kg / Jumbo Bag 500kg" },
        ],
        technicalSpecs: [
          { label: "Bahan Baku", value: "100% Tempurung Kelapa Tua (Aktivasi Uap)" },
          { label: "Ukuran Mesh (ASTM)", value: "8×30 · 12×40 · 20×50 Mesh (Kustom)" },
          { label: "Nilai Adsorpsi Iodin", value: "1000 – 1100 mg/g (hingga 1200 mg/g)" },
          { label: "Luas Permukaan BET", value: "1050 – 1150 m²/g" },
          { label: "Kekerasan Ball-Pan", value: "≥ 98,0%" },
          { label: "Kadar Air", value: "≤ 5,0%" },
          { label: "Kadar Abu Total", value: "≤ 3,0% (Acid-Washed ≤ 1,0% tersedia)" },
          { label: "Densitas Curah", value: "0,48 – 0,53 g/cm³" },
          { label: "Nilai pH", value: "9 – 11 (6 – 8 untuk Acid-Washed)" },
          { label: "Kode HS (Referensi)", value: "3802.10.10 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Pengolahan air minum PDAM/kota dan deklorinasi tangki filter",
          "Air proses industri, pra-perlakuan RO, dan air ultrapure",
          "Polishing air pada pabrik minuman kemasan, bir, dan pangan",
          "Media isi kartrid filter residensial dan komersial (POU/POE)",
        ],
        packagingAndShipping: {
          standardPack: "Karung PP 25 kg dengan liner PE · Jumbo bag FIBC 500 kg",
          fcl20: "10,0 – 11,0 MT (20 jumbo bag × 500 kg atau 440 karung × 25 kg)",
          hc40: "22,0 – 24,0 MT (44 jumbo bag × 500 kg atau 920 karung × 25 kg)",
          leadTime: "7 – 12 hari kerja setelah konfirmasi pesanan",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Global",
        },
      },
    },
  },
  {
    slug: "gold-recovery-activated-carbon",
    category: "activated-carbon",
    divisionKey: "carbon",
    image: "/images/products/carbon-2.webp",
    rfqDivisionIndex: 4,
    translations: {
      en: {
        name: "Gold Recovery Activated Carbon",
        code: "ACTIVATED CARBON · 6×12 MESH CIP/CIL",
        division: "Activated Carbon & Briquettes",
        shortDesc:
          "High-hardness, attrition-resistant 6×12 mesh coconut shell activated carbon engineered for maximum gold-cyanide adsorption kinetics and minimal carbon loss in CIP/CIL circuits.",
        overview:
          "Specifically selected from thick-walled mature coconut shells and pre-attrited to eliminate fragile platelets before shipment. Engineered to deliver high K-value and R-value gold loading capacity while withstanding repeated thermal regeneration in gold mining operations.",
        imageAlt: "Coarse 6x12 mesh coconut shell activated carbon for gold recovery",
        highlightSpecs: [
          { label: "Iodine Value", value: "1050 – 1150 mg/g" },
          { label: "Hardness", value: "≥ 98.5% (Ball-Pan)" },
          { label: "Moisture", value: "≤ 5.0%" },
          { label: "Packaging", value: "500kg / 550kg Jumbo Bag" },
        ],
        technicalSpecs: [
          { label: "Particle Size (ASTM)", value: "6×12 Mesh (1.70 – 3.35 mm) · 6×16 Mesh" },
          { label: "Iodine Adsorption Number", value: "1050 – 1150 mg/g" },
          { label: "Ball-Pan Hardness", value: "≥ 98.5% (Pre-attrited)" },
          { label: "CTC Activity", value: "≥ 60%" },
          { label: "Platelet Content", value: "≤ 3.0%" },
          { label: "Undersize (< 12 Mesh)", value: "≤ 2.0%" },
          { label: "Moisture Content", value: "≤ 5.0%" },
          { label: "Total Ash Content", value: "≤ 3.0%" },
          { label: "Apparent Density", value: "0.49 – 0.54 g/cm³" },
          { label: "HS Code (Reference)", value: "3802.10.10 (TBC)" },
        ],
        applications: [
          "Carbon-in-Pulp (CIP) gold recovery tanks in commercial mining",
          "Carbon-in-Leach (CIL) simultaneous leaching and gold adsorption",
          "Carbon-in-Column (CIC) heap leach pregnant solution recovery",
          "Precious metal refining and high-cycle thermal reactivation circuits",
        ],
        packagingAndShipping: {
          standardPack: "500 kg / 550 kg waterproof FIBC jumbo bag with bottom discharge spout",
          fcl20: "10.0 – 11.0 MT (20 × 500 kg or 550 kg jumbo bags)",
          hc40: "22.0 – 24.2 MT (44 × 500 kg or 550 kg jumbo bags)",
          leadTime: "10 – 14 business days after order confirmation",
          incoterms: "FOB Haikou / Yangpu · CIF Mining Destination Ports",
        },
      },
      zh: {
        name: "黄金提取专用椰壳活性炭 (CIP/CIL)",
        code: "椰壳活性炭 · 6×12目 选金炭",
        division: "椰壳活性炭与炭块事业部",
        shortDesc:
          "高耐磨强度6×12目椰壳选金活性炭，具备优异的金氰络合物吸附动力学(K值/R值)与极低片状率，最大限度降低炭浆法提金过程中的磨损流失。",
        overview:
          "严选厚壁老椰壳高温水蒸气活化，并在出厂前经机械预磨抛光与筛分除片工艺处理。产品具备高耐磨强度(≥98.5%)与高载金量，能耐受金矿冶炼厂高频次热再生循环，广泛出口至非洲、中亚、南美及澳洲金矿项目。",
        imageAlt: "高强度6x12目黄金吸附专用椰壳活性炭样品",
        highlightSpecs: [
          { label: "碘值", value: "1050 – 1150 mg/g" },
          { label: "强度（耐磨）", value: "≥ 98.5%（球盘法）" },
          { label: "水分", value: "≤ 5.0%" },
          { label: "标准包装", value: "500kg / 550kg吨袋" },
        ],
        technicalSpecs: [
          { label: "粒度规格 (ASTM)", value: "6×12目 (1.70 – 3.35 mm) · 可供6×16目" },
          { label: "碘吸附值", value: "1050 – 1150 mg/g" },
          { label: "球盘耐磨强度", value: "≥ 98.5%（出厂前预磨处理）" },
          { label: "四氯化碳吸附率 (CTC)", value: "≥ 60%" },
          { label: "片状炭含量", value: "≤ 3.0%" },
          { label: "筛下物 (< 12目)", value: "≤ 2.0%" },
          { label: "水分含量", value: "≤ 5.0%" },
          { label: "灰分含量", value: "≤ 3.0%" },
          { label: "堆积密度", value: "0.49 – 0.54 g/cm³" },
          { label: "参考HS编码", value: "3802.10.10（以报关核定为准）" },
        ],
        applications: [
          "炭浆法 (CIP) 黄金冶炼提金吸附槽",
          "炭浸法 (CIL) 边浸出边吸附提金工艺",
          "堆浸炭柱法 (CIC) 贵液黄金回收系统",
          "贵金属精炼及多循环高温再生冶金产线",
        ],
        packagingAndShipping: {
          standardPack: "500kg / 550kg 防潮覆膜集装吨袋（带底部卸料口，可托盘装载）",
          fcl20: "10.0 – 11.0 吨（20个 500kg / 550kg 吨袋）",
          hc40: "22.0 – 24.2 吨（44个 500kg / 550kg 吨袋）",
          leadTime: "确认订单后 10 – 14 个工作日发运",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 矿区目的港",
        },
      },
      id: {
        name: "Karbon Aktif Pemurnian Emas",
        code: "KARBON AKTIF · MESH 6×12 CIP/CIL",
        division: "Divisi Karbon Aktif & Briket",
        shortDesc:
          "Karbon aktif tempurung kelapa mesh 6×12 berkekerasan tinggi dan tahan abrasi untuk kinetika adsorpsi emas-sianida maksimal dengan kehilangan karbon minimal pada sirkuit CIP/CIL.",
        overview:
          "Dipilih khusus dari tempurung kelapa tua berdinding tebal dan melalui tahap pre-attrition untuk menghilangkan serpihan rapuh sebelum pengapalan. Dirancang untuk kapasitas muat emas (nilai K & R) yang tinggi serta tahan terhadap siklus reaktivasi termal berulang di tambang emas.",
        imageAlt: "Karbon aktif tempurung kelapa kasar mesh 6x12 untuk tambang emas",
        highlightSpecs: [
          { label: "Nilai Iodin", value: "1050 – 1150 mg/g" },
          { label: "Kekerasan", value: "≥ 98,5% (Ball-Pan)" },
          { label: "Kadar Air", value: "≤ 5,0%" },
          { label: "Kemasan", value: "Jumbo Bag 500kg / 550kg" },
        ],
        technicalSpecs: [
          { label: "Ukuran Partikel (ASTM)", value: "6×12 Mesh (1,70 – 3,35 mm) · 6×16 Mesh" },
          { label: "Nilai Adsorpsi Iodin", value: "1050 – 1150 mg/g" },
          { label: "Kekerasan Ball-Pan", value: "≥ 98,5% (Pre-attrited)" },
          { label: "Aktivitas CTC", value: "≥ 60%" },
          { label: "Kadar Kepingan (Platelet)", value: "≤ 3,0%" },
          { label: "Undersize (< 12 Mesh)", value: "≤ 2,0%" },
          { label: "Kadar Air", value: "≤ 5,0%" },
          { label: "Kadar Abu Total", value: "≤ 3,0%" },
          { label: "Densitas Curah", value: "0,49 – 0,54 g/cm³" },
          { label: "Kode HS (Referensi)", value: "3802.10.10 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Tangki pemulihan emas Carbon-in-Pulp (CIP) pertambangan komersial",
          "Proses pelindian dan adsorpsi simultan Carbon-in-Leach (CIL)",
          "Pemulihan larutan kaya emas heap leach Carbon-in-Column (CIC)",
          "Pemurnian logam mulia dan sirkuit reaktivasi termal siklus tinggi",
        ],
        packagingAndShipping: {
          standardPack: "Jumbo bag FIBC kedap air 500 kg / 550 kg dengan corong buang bawah",
          fcl20: "10,0 – 11,0 MT (20 jumbo bag × 500 kg atau 550 kg)",
          hc40: "22,0 – 24,2 MT (44 jumbo bag × 500 kg atau 550 kg)",
          leadTime: "10 – 14 hari kerja setelah konfirmasi pesanan",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Tujuan Tambang",
        },
      },
    },
  },
  {
    slug: "coconut-charcoal-briquettes",
    category: "briquettes",
    divisionKey: "carbon",
    image: "/images/products/carbon-3.webp",
    rfqDivisionIndex: 5,
    translations: {
      en: {
        name: "Coconut Shell Charcoal Briquettes",
        code: "BRIQUETTES · 25MM CUBE / HEXAGONAL",
        division: "Activated Carbon & Briquettes",
        shortDesc:
          "100% natural compressed coconut shell charcoal briquettes featuring ultra-low white ash (≤ 2.2%), high fixed carbon, zero chemical odor, and consistent 90–120 minute burn duration.",
        overview:
          "Produced from finely milled mature coconut shell charcoal blended with food-grade tapioca binder under high-pressure extrusion. Available in sharp-edged 25mm / 26mm cubes for shisha lounges and hollow-core hexagonal logs for commercial BBQ restaurants, with full OEM private-label box printing.",
        imageAlt: "Uniform cube and hexagonal coconut shell charcoal briquettes",
        highlightSpecs: [
          { label: "Ash Content", value: "≤ 2.2% (White Ash)" },
          { label: "Calorific Value", value: "7,200 – 7,500 kcal/kg" },
          { label: "Moisture", value: "≤ 6.0%" },
          { label: "Packaging", value: "1kg Box / 10kg Master" },
        ],
        technicalSpecs: [
          { label: "Shapes & Sizes", value: "25mm / 26mm Cube · Hexagonal Log · Flat" },
          { label: "Fixed Carbon", value: "≥ 80%" },
          { label: "Ash Content", value: "≤ 2.2% (Clean White / Light Gray Ash)" },
          { label: "Calorific Value", value: "7,200 – 7,500 kcal/kg" },
          { label: "Moisture Content", value: "≤ 6.0%" },
          { label: "Volatile Matter", value: "≤ 14%" },
          { label: "Burning Time", value: "90 – 120 Minutes (Shisha) / 3–4 hrs (BBQ)" },
          { label: "Drop Test / Odor", value: "No Cracks · Smokeless & Odorless" },
          { label: "Shipping Compliance", value: "SHT (Self-Heating Test) & MSDS Provided" },
          { label: "HS Code (Reference)", value: "4402.20.00 (TBC)" },
        ],
        applications: [
          "Export-grade shisha / hookah lounge charcoal brands (OEM / Private Label)",
          "Commercial yakitori, grillhouse, and smokeless BBQ restaurants",
          "Middle East, European, and North American wholesale charcoal distributors",
          "Long-burn outdoor catering and hospitality fuel supply",
        ],
        packagingAndShipping: {
          standardPack: "1 kg OEM inner box with plastic liner · 10 kg export master carton",
          fcl20: "17.5 – 18.5 MT (1,750 – 1,850 × 10 kg master cartons)",
          hc40: "25.0 – 26.5 MT (2,500 – 2,650 × 10 kg master cartons)",
          leadTime: "12 – 18 business days (OEM printed box order)",
          incoterms: "FOB Haikou / Yangpu · CIF Global Ports (DG Certified)",
        },
      },
      zh: {
        name: "出口级椰壳炭块 / 水烟炭与烧烤炭",
        code: "椰壳炭块 · 25mm方炭 / 六角炭",
        division: "椰壳活性炭与炭块事业部",
        shortDesc:
          "100%纯天然老椰壳炭粉高压成型，具备超低纯白灰分(≤2.2%)、高固定碳、无烟无异味与90–120分钟持久燃烧性能，支持海外品牌OEM定制彩盒。",
        overview:
          "采用海南成熟椰壳炭化磨粉，仅搭配食品级木薯淀粉粘合，经高压挤出切割与控温烘干成型。提供25mm/26mm水烟方炭及中空六角烧烤炭棒规格，出厂随附海运自热测试报告(SHT)与MSDS，顺畅对接中东、欧美及日韩出口渠道。",
        imageAlt: "高密度25mm方形及六角形椰壳机制炭块",
        highlightSpecs: [
          { label: "灰分", value: "≤ 2.2%（纯白灰）" },
          { label: "热值", value: "7,200 – 7,500 kcal/kg" },
          { label: "水分", value: "≤ 6.0%" },
          { label: "标准包装", value: "1kg彩盒 / 10kg出口外箱" },
        ],
        technicalSpecs: [
          { label: "常规形状与尺寸", value: "25mm / 26mm 方炭 · 六角空心炭棒 · 片炭" },
          { label: "固定碳含量", value: "≥ 80%" },
          { label: "灰分含量", value: "≤ 2.2%（纯白灰，不散灰）" },
          { label: "热值", value: "7,200 – 7,500 kcal/kg" },
          { label: "水分含量", value: "≤ 6.0%" },
          { label: "挥发分", value: "≤ 14%" },
          { label: "持续燃烧时间", value: "90 – 120 分钟（水烟方炭）/ 3–4小时（烧烤炭）" },
          { label: "跌落测试与气味", value: "高温不易裂 · 无烟无火星无异味" },
          { label: "海运合规文件", value: "随货提供 SHT 自热试验报告与 MSDS" },
          { label: "参考HS编码", value: "4402.20.00（以报关核定为准）" },
        ],
        applications: [
          "中东及欧美水烟(Shisha/Hookah)品牌方OEM贴牌代工",
          "高端日式烧鸟店、无烟炭火烤肉连锁餐厅商业燃料",
          "海外大型炭业批发商与商超渠道整柜供应",
          "户外餐饮及酒店长时间恒温烧烤燃料",
        ],
        packagingAndShipping: {
          standardPack: "1kg 定制彩盒（内封防潮膜）· 10kg 五层加厚出口外箱",
          fcl20: "17.5 – 18.5 吨（1,750 – 1,850 箱 × 10kg 外箱）",
          hc40: "25.0 – 26.5 吨（2,500 – 2,650 箱 × 10kg 外箱）",
          leadTime: "确认订单后 12 – 18 个工作日（含OEM彩盒印制）",
          incoterms: "FOB 海口港 / 洋浦港 · CIF 全球港口",
        },
      },
      id: {
        name: "Briket Arang Tempurung Kelapa",
        code: "BRIKET · KUBUS 25MM / HEKSAGONAL",
        division: "Divisi Karbon Aktif & Briket",
        shortDesc:
          "Briket arang tempurung kelapa alami 100% bertekanan tinggi dengan kadar abu putih sangat rendah (≤ 2,2%), karbon tetap tinggi, tanpa bau kimia, dan durasi bakar 90–120 menit.",
        overview:
          "Diproduksi dari tepung arang tempurung kelapa tua halus dengan perekat tapioka food-grade melalui ekstrusi bertekanan tinggi. Tersedia bentuk kubus presisi 25mm / 26mm untuk shisha dan batang heksagonal berlubang untuk restoran BBQ komersial, lengkap dengan layanan cetak kemasan OEM.",
        imageAlt: "Briket arang tempurung kelapa bentuk kubus dan heksagonal",
        highlightSpecs: [
          { label: "Kadar Abu", value: "≤ 2,2% (Abu Putih)" },
          { label: "Nilai Kalor", value: "7.200 – 7.500 kcal/kg" },
          { label: "Kadar Air", value: "≤ 6,0%" },
          { label: "Kemasan", value: "Box 1kg / Master Carton 10kg" },
        ],
        technicalSpecs: [
          { label: "Bentuk & Ukuran", value: "Kubus 25mm / 26mm · Batang Heksagonal · Flat" },
          { label: "Karbon Tetap (Fixed Carbon)", value: "≥ 80%" },
          { label: "Kadar Abu", value: "≤ 2,2% (Abu Putih Bersih)" },
          { label: "Nilai Kalor", value: "7.200 – 7.500 kcal/kg" },
          { label: "Kadar Air", value: "≤ 6,0%" },
          { label: "Zat Terbang (Volatile)", value: "≤ 14%" },
          { label: "Durasi Bakar", value: "90 – 120 Menit (Shisha) / 3–4 Jam (BBQ)" },
          { label: "Uji Jatuh & Bau", value: "Tidak Mudah Retak · Tanpa Asap & Bau" },
          { label: "Kepatuhan Pengapalan", value: "Tersedia SHT (Self-Heating Test) & MSDS" },
          { label: "Kode HS (Referensi)", value: "4402.20.00 (Konfirmasi Ekspor)" },
        ],
        applications: [
          "Merek arang shisha / hookah standar ekspor (OEM / Private Label)",
          "Restoran yakitori, grillhouse, dan BBQ komersial bebas asap",
          "Distributor grosir arang wilayah Timur Tengah, Eropa, dan Amerika",
          "Pasokan bahan bakar katering dan perhotelan berdurasi bakar panjang",
        ],
        packagingAndShipping: {
          standardPack: "Inner box OEM 1 kg berlapis plastik · Master carton ekspor 10 kg",
          fcl20: "17,5 – 18,5 MT (1.750 – 1.850 master carton × 10 kg)",
          hc40: "25,0 – 26,5 MT (2.500 – 2.650 master carton × 10 kg)",
          leadTime: "12 – 18 hari kerja (termasuk cetak kemasan OEM)",
          incoterms: "FOB Haikou / Yangpu · CIF Pelabuhan Global",
        },
      },
    },
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: ProductData): ProductData[] {
  return PRODUCTS_DATA.filter(
    (item) =>
      item.divisionKey === product.divisionKey && item.slug !== product.slug,
  );
}
