"use client";

import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";

/*
 * INDUSTRIAL FACILITY PLACEHOLDER (Unsplash)
 * -----------------------------------------------------------------------------
 * Replace with wide-angle Haikou Shengtai plant / rotary kiln / food processing
 * line photography (e.g. "/images/factory-scale-haikou.jpg", >= 2400px wide).
 */
const FACILITY_IMAGE_SRC =
  "https://images.unsplash.com/photo-1566930665082-4ae9dbbb5b6b?auto=format&fit=crop&w=2400&q=85";

export function ParallaxStatement() {
  const { t } = useLanguage();

  return (
    <section
      id="overview"
      aria-labelledby="statement-heading"
      className="relative z-10 scroll-mt-20 bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* High-Contrast Swiss Editorial Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {t.parallaxStatement.eyebrow}
            </p>
            <h2
              id="statement-heading"
              className="mt-5 font-display text-3xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-4xl lg:text-[2.75rem]"
            >
              {t.parallaxStatement.heading}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-[48ch] text-[15px] leading-relaxed text-[#525252] md:text-base">
              {t.parallaxStatement.body}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-5">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {t.parallaxStatement.originLabel}
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#111827]">
                  {t.parallaxStatement.originValue}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {t.parallaxStatement.portsLabel}
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#111827]">
                  {t.parallaxStatement.portsValue}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Wide Architectural Static-on-Scroll Parallax Image Window */}
        <figure className="mt-16 lg:mt-20">
          <div className="relative h-[55vh] min-h-[380px] max-h-[680px] w-full overflow-hidden border border-neutral-200 bg-[#1C1F23] [clip-path:inset(0)]">
            <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
              <Image
                src={FACILITY_IMAGE_SRC}
                alt={t.parallaxStatement.imageAlt}
                fill
                sizes="100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <figcaption className="flex flex-col justify-between gap-2 border-b border-neutral-200 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500 sm:flex-row sm:items-center">
            <span>{t.parallaxStatement.captionLeft}</span>
            <span>{t.parallaxStatement.captionRight}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
