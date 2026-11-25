"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/*
 * DIVISION SHOWCASE PHOTOGRAPHY PLACEHOLDERS (Unsplash)
 * -----------------------------------------------------------------------------
 * Swap these URLs with real Haikou Shengtai factory photography once available:
 * - Food line: "/images/division-coconut-food.jpg"
 * - Carbon line: "/images/division-activated-carbon.jpg"
 */
const FOOD_DIVISION_IMAGE =
  "https://images.unsplash.com/photo-1559842911-25e8399e3c38?auto=format&fit=crop&w=1600&q=85";

const CARBON_DIVISION_IMAGE = "/images/carbon-division-editorial.jpg";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function DualDivisionShowcase() {
  const { t } = useLanguage();
  const { food, carbon } = t.dualDivision;

  return (
    <section
      aria-label={t.dualDivision.sectionAria}
      className="relative z-10 border-y border-neutral-200 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: 01 / Coconut Food Processing (Light Architectural Surface) */}
        <div
          id="coconut-food"
          className="scroll-mt-20 border-b border-neutral-200 bg-white px-6 py-20 sm:px-10 lg:border-r lg:border-b-0 lg:px-14 lg:py-28 xl:px-20"
        >
          <motion.div {...reveal} className="mx-auto max-w-xl lg:mr-0 lg:ml-auto">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {food.eyebrow}
              </p>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                {food.tag}
              </span>
            </div>

            <h2 className="mt-7 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {food.heading}
            </h2>

            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-[#525252]">
              {food.summary}
            </p>

            {/* Editorial Photograph with Subtle Hover Scale */}
            <div className="group relative mt-8 aspect-[16/10] w-full overflow-hidden border border-neutral-200 bg-[#F7F8F7]">
              <Image
                src={FOOD_DIVISION_IMAGE}
                alt={food.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Hairline-Divided Product Lines */}
            <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {food.lines.map((line) => (
                <li
                  key={line.name}
                  className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="font-display text-sm font-medium text-[#111827]">
                    {line.name}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 sm:text-right">
                    {line.spec}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="#catalog"
                className="group inline-flex items-center gap-2.5 border-b border-[#143D2B] pb-1.5 text-sm font-medium text-[#143D2B] transition-colors hover:border-[#111827] hover:text-[#111827]"
              >
                <span>{food.cta}</span>
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 02 / Activated Carbon & Briquettes (Deep Charcoal Surface) */}
        <div
          id="activated-carbon"
          className="scroll-mt-20 bg-[#1C1F23] px-6 py-20 text-white sm:px-10 lg:px-14 lg:py-28 xl:px-20"
        >
          <motion.div {...reveal} className="mx-auto max-w-xl lg:mr-auto lg:ml-0">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/80">
                {carbon.eyebrow}
              </p>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                {carbon.tag}
              </span>
            </div>

            <h2 className="mt-7 font-display text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-4xl">
              {carbon.heading}
            </h2>

            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-neutral-300">
              {carbon.summary}
            </p>

            {/* Moody Industrial Photograph with Subtle Hover Scale */}
            <div className="group relative mt-8 aspect-[16/10] w-full overflow-hidden border border-white/15 bg-[#14171A]">
              <Image
                src={CARBON_DIVISION_IMAGE}
                alt={carbon.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Hairline-Divided Industrial Lines */}
            <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {carbon.lines.map((line) => (
                <li
                  key={line.name}
                  className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="font-display text-sm font-medium text-white">
                    {line.name}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 sm:text-right">
                    {line.spec}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="#catalog"
                className="group inline-flex items-center gap-2.5 border-b border-white/60 pb-1.5 text-sm font-medium text-white transition-colors hover:border-white"
              >
                <span>{carbon.cta}</span>
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
