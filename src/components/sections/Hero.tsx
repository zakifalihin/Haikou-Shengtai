"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/*
 * HERO 3-SLIDE EDITORIAL PHOTOGRAPHY (Optimized Local WebP, < 105 KB each)
 * -----------------------------------------------------------------------------
 * Swap any file under `public/images/` with real client photography (<= 1400px WebP).
 */
const HERO_IMAGES = {
  "coconut-food": "/images/hero-coconut-food.webp",
  "activated-carbon": "/images/carbon-hero-banner.webp",
  "global-export": "/images/hero-global-export.webp",
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

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#1C1F23] [clip-path:inset(0)]"
    >
      {/* Static-on-Scroll Full-Bleed Slideshow Layer — Slide 0 paints immediately on SSR for fast LCP */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-in-out will-change-[opacity,transform] ${
                isActive ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              <Image
                src={HERO_IMAGES[slide.id]}
                alt={slide.imageAlt}
                fill
                priority={isFirst}
                fetchPriority={isFirst ? "high" : "low"}
                loading={isFirst ? "eager" : "lazy"}
                decoding={isFirst ? "sync" : "async"}
                sizes="100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
          );
        })}

        {/* Strengthened Editorial Dark Gradient Scrim for WCAG AA (>= 4.5:1) Text Contrast */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35"
        />
      </div>

      {/* Foreground Content — Immediate Paint (No Hidden Initial State) */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pt-28 pb-12 lg:px-8 lg:pb-16">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/95">
            {t.hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
          >
            {t.hero.h1}
          </h1>

          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/90 md:text-[17px]">
            {t.hero.subtitle}
          </p>

          <div className="mt-9">
            <Link
              href="/#catalog"
              className="group inline-flex min-h-[44px] items-center gap-3 border-b border-white/80 pb-2 text-sm font-medium tracking-[0.02em] text-white transition-colors duration-200 hover:border-white"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight
                aria-hidden="true"
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
