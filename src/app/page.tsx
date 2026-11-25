import { DualDivisionShowcase } from "@/components/sections/DualDivisionShowcase";
import { FactoryAndQC } from "@/components/sections/FactoryAndQC";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { InquirySection } from "@/components/sections/InquirySection";
import { Navbar } from "@/components/sections/Navbar";
import { ParallaxStatement } from "@/components/sections/ParallaxStatement";
import { ProductCatalog } from "@/components/sections/ProductCatalog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ParallaxStatement />
        <DualDivisionShowcase />
        <ProductCatalog />
        <FactoryAndQC />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
