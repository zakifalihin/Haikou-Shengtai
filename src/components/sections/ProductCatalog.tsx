"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_DATA, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProductCategory;

const FILTER_KEYS: FilterKey[] = [
  "all",
  "coconut-food",
  "activated-carbon",
  "briquettes",
];

export function ProductCatalog() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleProducts =
    activeFilter === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((item) => item.category === activeFilter);

  return (
    <section
      id="catalog"
      aria-labelledby="catalog-heading"
      className="relative z-10 scroll-mt-20 border-b border-neutral-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header + Sharp Underline Filter Tabs */}
        <div className="flex flex-col gap-8 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {t.productCatalog.eyebrow}
            </p>
            <h2
              id="catalog-heading"
              className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl"
            >
              {t.productCatalog.heading}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.productCatalog.filterAria}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            {FILTER_KEYS.map((key) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(key)}
                  className={cn(
                    "cursor-pointer border-b-2 pb-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-[#143D2B] text-[#111827]"
                      : "border-transparent text-[#525252] hover:border-neutral-300 hover:text-[#111827]",
                  )}
                >
                  {t.productCatalog.tabs[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Architectural Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleProducts.map((product, index) => {
            const content = product.translations[lang];
            const detailHref = `/products/${product.slug}`;

            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col rounded-none border border-neutral-200 bg-white"
              >
                {/* 4:3 Product Image (Clickable to Detail Page) */}
                <Link
                  href={detailHref}
                  className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-200 bg-[#F7F8F7]"
                >
                  <Image
                    src={product.image}
                    alt={content.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </Link>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-brand">
                    {content.code}
                  </p>

                  <h3 className="mt-2.5 font-display text-lg font-medium leading-snug tracking-tight text-[#111827]">
                    <Link
                      href={detailHref}
                      className="transition-colors hover:text-brand"
                    >
                      {content.name}
                    </Link>
                  </h3>

                  {/* Compact 2-Column Technical Spec Mini-Table */}
                  <dl className="mt-5 divide-y divide-neutral-200 border-y border-neutral-200 text-xs">
                    {content.highlightSpecs.map((spec) => (
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

                  {/* Bottom Action Link */}
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
