"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/*
 * HERO 3-SLIDE EDITORIAL PHOTOGRAPHY
 * -----------------------------------------------------------------------------
 * Swap any URL below with local high-resolution client photography under `public/images/`
 * (recommended >= 2400x1600px, widescreen landscape, natural editorial lighting):
 * - 01 Coconut Food:      "/images/hero-coconut-food.jpg"
 * - 02 Activated Carbon:  "/images/carbon-hero-banner.jpg" (local studio photo)
 * - 03 Global Export:     "/images/hero-factory-export.jpg"
 */
const HERO_IMAGES = {
  "coconut-food":
    "https://images.unsplash.com/photo-1567567278636-c8fa119561be?auto=format&fit=crop&w=2400&q=85",
  "activated-carbon": "/images/carbon-hero-banner.jpg",
  "global-export":
    "https://images.unsplash.com/photo-1745147878224-2633491d3c07?auto=format&fit=crop&w=2400&q=85",
} as const;

const SLIDE_DURATION_MS = 5500;

export function Hero() {
  const { t } = useLanguage();
  const slides = t.hero.divisions;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 5.5s across all 3 supply-chain photographs
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#1C1F23] [clip-path:inset(0)]"
    >
      {/* Static-on-Scroll Full-Bleed Slideshow Layer (Clipped to Hero Bounds) */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION_MS / 1000, ease: "easeOut" },
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={HERO_IMAGES[activeSlide.id]}
              alt={activeSlide.imageAlt}
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Constant Editorial Dark Gradient Overlay for 100% Legibility Across All Slides */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25"
        />
      </div>

      {/* Foreground Content — Clean Bottom-Left Swiss Editorial Typography */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pt-28 pb-12 lg:px-8 lg:pb-16">
        <div className="max-w-4xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 sm:text-xs">
            {t.hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
          >
            {t.hero.h1}
          </h1>

          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/80 md:text-[17px]">
            {t.hero.subtitle}
          </p>

          <div className="mt-9">
            <Link
              href="/#catalog"
              className="group inline-flex items-center gap-3 border-b border-white/60 pb-2 text-sm font-medium tracking-[0.02em] text-white transition-colors duration-200 hover:border-white"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
