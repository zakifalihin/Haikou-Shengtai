"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, X } from "lucide-react";

import { StaticParallaxBanner } from "@/components/layout/StaticParallaxBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import type { ProductData } from "@/data/products";

const DIVISION_BANNER_IMAGES = {
  food: "https://images.unsplash.com/photo-1567567278636-c8fa119561be?auto=format&fit=crop&w=2400&q=85",
  carbon: "/images/carbon-division-editorial.jpg",
} as const;

interface ProductDetailViewProps {
  product: ProductData;
  relatedProducts: ProductData[];
}

export function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const { lang, t } = useLanguage();
  const [coaModalOpen, setCoaModalOpen] = useState(false);

  const ui = t.productDetail;
  const content = product.translations[lang];
  const rfqTarget = `/contact?product=${product.slug}#rfq-form`;
  const divisionHref =
    product.divisionKey === "food" ? "/coconut-food" : "/activated-carbon";

  return (
    <div className="bg-white">
      {/* Compact Static-on-Scroll Parallax Header Banner */}
      <StaticParallaxBanner
        imageSrc={DIVISION_BANNER_IMAGES[product.divisionKey]}
        imageAlt={content.division}
        eyebrow={content.code}
        title={content.name}
        breadcrumbTrail={[{ label: ui.productsLabel, href: divisionHref }]}
        breadcrumb={content.name}
        heightClass="h-[38vh] min-h-[300px]"
      >
        <Link
          href={divisionHref}
          className="inline-flex items-center gap-2 border-b border-white/50 pb-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/85 transition-colors hover:border-white hover:text-white"
        >
          <ArrowLeft className="size-3.5" strokeWidth={1.5} />
          <span>{ui.backToCatalog}</span>
        </Link>
      </StaticParallaxBanner>

      {/* Solid Curtain Wrapper — White Specification Sheet Glides Over Static Banner */}
      <div className="relative z-10 bg-white">
      {/* Top Split Layout (2-Column) */}
      <section className="border-b border-neutral-200 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Left: Sharp-Bordered 4:3 Product Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none border border-neutral-200 bg-[#F7F8F7]">
                <Image
                  src={product.image}
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex items-center justify-between border-x border-b border-neutral-200 bg-[#FAFAFA] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                <span>{content.division}</span>
                <span>HAINAN EXPORT GRADE</span>
              </div>
            </div>

            {/* Right: Category Tag, H1, Summary, Key Specs & Dual CTAs */}
            <div className="lg:col-span-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {content.code}
              </p>

              <h2 className="mt-4 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
                {content.name}
              </h2>

              <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-[#525252] md:text-base">
                {content.shortDesc}
              </p>

              <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-[#525252]">
                {content.overview}
              </p>

              {/* Key Highlight Specs */}
              <dl className="mt-8 grid grid-cols-1 border-y border-neutral-200 sm:grid-cols-2">
                {content.highlightSpecs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`py-3.5 ${
                      idx >= 2 ? "border-t border-neutral-200" : ""
                    } ${
                      idx % 2 === 1
                        ? "border-t border-neutral-200 sm:border-t-0 sm:border-l sm:pl-5"
                        : "sm:pr-5"
                    } ${idx === 3 ? "sm:border-t" : ""}`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-medium text-[#111827] tabular-nums">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Sharp Rectangular CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-[2px] bg-[#143D2B] px-6 text-white hover:bg-[#0E2E20]"
                >
                  <Link href={rfqTarget}>
                    <span>{ui.rfqCta}</span>
                    <ArrowRight className="size-4" strokeWidth={1.5} />
                  </Link>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setCoaModalOpen(true)}
                  className="rounded-[2px] border-neutral-300 px-6 text-[#111827] hover:border-[#111827]"
                >
                  <FileText className="size-4" strokeWidth={1.5} />
                  <span>{ui.coaCta}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Technical Specification Table */}
      <section className="border-b border-neutral-200 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {ui.specsEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
              {ui.specsHeading}
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto border border-neutral-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-[#F7F8F7]">
                  <th
                    scope="col"
                    className="w-2/5 px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#525252]"
                  >
                    {ui.specParamCol}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#525252]"
                  >
                    {ui.specValueCol}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.technicalSpecs.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={`border-b border-neutral-200 last:border-b-0 ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#111827]"
                    >
                      {row.label}
                    </th>
                    <td className="px-6 py-4 font-mono text-[13px] text-[#525252] tabular-nums">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications & Container Packaging 2-Column Strip */}
      <section className="border-b border-neutral-200 bg-[#F7F8F7] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Primary Applications */}
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {ui.applicationsEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
                {ui.applicationsHeading}
              </h2>

              <ol className="mt-8 border-t border-neutral-200">
                {content.applications.map((item, idx) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3 border-b border-neutral-200 py-4 text-sm leading-relaxed text-[#525252]"
                  >
                    <span className="font-mono text-xs font-medium text-brand">
                      0{idx + 1}
                    </span>
                    <span className="text-[#111827]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: Export Packaging & Container Loading */}
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {ui.packagingEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
                {ui.packagingHeading}
              </h2>

              <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {ui.packStandardLabel}
                  </dt>
                  <dd className="mt-1 font-medium text-[#111827]">
                    {content.packagingAndShipping.standardPack}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {ui.pack20ftLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-[13px] text-[#111827] tabular-nums">
                    {content.packagingAndShipping.fcl20}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {ui.pack40hcLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-[13px] text-[#111827] tabular-nums">
                    {content.packagingAndShipping.hc40}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      {ui.packLeadTimeLabel}
                    </dt>
                    <dd className="mt-1 text-[#111827]">
                      {content.packagingAndShipping.leadTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      {ui.packIncotermsLabel}
                    </dt>
                    <dd className="mt-1 font-mono text-xs text-[#111827]">
                      {content.packagingAndShipping.incoterms}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products (Same Division + Custom OEM Card in 3-Col Grid) */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-b border-neutral-200 pb-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {ui.relatedEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl">
              {ui.relatedHeading}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {relatedProducts.map((item) => {
              const itemContent = item.translations[lang];
              return (
                <article
                  key={item.slug}
                  className="group flex flex-col rounded-none border border-neutral-200 bg-white"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-200 bg-[#F7F8F7]"
                  >
                    <Image
                      src={item.image}
                      alt={itemContent.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-brand">
                      {itemContent.code}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-[#111827]">
                      <Link
                        href={`/products/${item.slug}`}
                        className="transition-colors hover:text-brand"
                      >
                        {itemContent.name}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#525252]">
                      {itemContent.shortDesc}
                    </p>
                    <div className="mt-auto pt-6">
                      <Link
                        href={`/products/${item.slug}`}
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111827] transition-colors hover:text-brand"
                      >
                        <span>{ui.viewSpecsLink}</span>
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

            {/* 3rd Slot: Custom OEM / Specification Card */}
            <div className="flex flex-col justify-between rounded-none border border-neutral-200 bg-[#1C1F23] p-6 text-white lg:p-8">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                  {ui.customGradeEyebrow}
                </p>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-white">
                  {ui.customGradeTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  {ui.customGradeBody}
                </p>
              </div>
              <div className="mt-8 border-t border-white/15 pt-6">
                <Link
                  href={rfqTarget}
                  className="group inline-flex items-center gap-2 text-[13px] font-medium text-white transition-colors hover:text-neutral-300"
                >
                  <span>{ui.customGradeCta}</span>
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COA / Spec Sheet Request Modal (Sharp Architectural Dialog) */}
      {coaModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coa-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          onClick={() => setCoaModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[2px] border border-neutral-200 bg-white p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
                  {ui.coaModalEyebrow}
                </p>
                <h3
                  id="coa-modal-title"
                  className="mt-1.5 font-display text-xl font-medium tracking-tight text-[#111827]"
                >
                  {ui.coaModalTitle}
                </h3>
              </div>
              <button
                type="button"
                aria-label={ui.coaModalClose}
                onClick={() => setCoaModalOpen(false)}
                className="cursor-pointer p-1 text-neutral-500 transition-colors hover:text-[#111827]"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#525252]">
              {ui.coaModalBody}
            </p>

            <div className="mt-4 border border-neutral-200 bg-[#F7F8F7] px-4 py-3 font-mono text-xs text-[#111827]">
              {content.name}
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCoaModalOpen(false)}
                className="rounded-[2px]"
              >
                {ui.coaModalClose}
              </Button>
              <Button
                asChild
                className="rounded-[2px] bg-[#143D2B] text-white hover:bg-[#0E2E20]"
              >
                <Link href={rfqTarget} onClick={() => setCoaModalOpen(false)}>
                  <span>{ui.coaModalProceed}</span>
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
