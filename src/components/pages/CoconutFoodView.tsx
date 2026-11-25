"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StaticParallaxBanner } from "@/components/layout/StaticParallaxBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_DATA } from "@/data/products";

/*
 * COCONUT FOOD BANNER PLACEHOLDER (Unsplash)
 * Swap with real Hainan coconut plantation / food processing photo later.
 */
const FOOD_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1577394221632-55dc64570920?auto=format&fit=crop&w=2400&q=85";

export function CoconutFoodView() {
  const { lang, t, pages } = useLanguage();
  const content = pages.coconutFood;
  const foodProducts = PRODUCTS_DATA.filter((p) => p.divisionKey === "food");

  return (
    <div className="bg-white">
      <StaticParallaxBanner
        imageSrc={FOOD_BANNER_IMAGE}
        breadcrumb={content.breadcrumb}
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Solid Curtain Wrapper */}
      <div className="relative z-10 bg-white">
      {/* Food-Grade Processing & Hainan Sourcing Overview */}
      <section className="border-b border-neutral-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {content.overviewEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
                {content.overviewHeading}
              </h2>
              <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[#525252] md:text-base">
                {content.overviewBody}
              </p>
            </div>

            <div className="lg:col-span-6">
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                {content.sourcingHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      {item.label}
                    </dt>
                    <dd className="font-medium text-[#111827] sm:text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Product Grid — Coconut Food ONLY */}
      <section className="border-b border-neutral-200 bg-[#F7F8F7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-b border-neutral-200 pb-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {content.catalogEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {content.catalogHeading}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {foodProducts.map((product) => {
              const p = product.translations[lang];
              const detailHref = `/products/${product.slug}`;

              return (
                <article
                  key={product.slug}
                  className="group flex flex-col rounded-none border border-neutral-200 bg-white"
                >
                  <Link
                    href={detailHref}
                    className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-200 bg-[#F7F8F7]"
                  >
                    <Image
                      src={product.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-brand">
                      {p.code}
                    </p>
                    <h3 className="mt-2.5 font-display text-lg font-medium leading-snug tracking-tight text-[#111827]">
                      <Link
                        href={detailHref}
                        className="transition-colors hover:text-brand"
                      >
                        {p.name}
                      </Link>
                    </h3>

                    <dl className="mt-5 divide-y divide-neutral-200 border-y border-neutral-200 text-xs">
                      {p.highlightSpecs.map((spec) => (
                        <div
                          key={spec.label}
                          className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-2.5"
                        >
                          <dt className="text-[#525252]">{spec.label}</dt>
                          <dd className="text-right font-mono font-medium text-[#111827] tabular-nums">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 pt-1">
                      <Link
                        href={detailHref}
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111827] transition-colors hover:text-brand"
                      >
                        <span>{t.productCatalog.requestCta}</span>
                        <ArrowRight
                          className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OEM / Private Label & Export Packaging Specs */}
      <section className="border-b border-neutral-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {content.oemEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {content.oemHeading}
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#525252]">
              {content.oemSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border border-neutral-200 md:grid-cols-2">
            {content.oemSpecs.map((spec, idx) => (
              <div
                key={spec.title}
                className={`p-6 sm:p-8 ${
                  idx % 2 === 1 ? "md:border-l md:border-neutral-200" : ""
                } ${idx >= 2 ? "border-t border-neutral-200" : ""} ${
                  idx === 1 ? "border-t border-neutral-200 md:border-t-0" : ""
                }`}
              >
                <p className="font-mono text-xs text-brand">0{idx + 1}</p>
                <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-[#111827]">
                  {spec.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#525252]">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F7F8F7] py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {content.ctaEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
              {content.ctaHeading}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#525252]">
              {content.ctaBody}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-[2px] bg-[#143D2B] px-7 text-white hover:bg-[#0E2E20]"
          >
            <Link href="/contact#rfq-form">
              <span>{content.ctaButton}</span>
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
}
