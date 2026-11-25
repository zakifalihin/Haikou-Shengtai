"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StaticParallaxBanner } from "@/components/layout/StaticParallaxBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

/*
 * FACTORY & QC BANNER PLACEHOLDER (Unsplash)
 * Swap with real Haikou manufacturing plant / laboratory photo later.
 */
const FACTORY_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1720036237334-9263cd28c3d4?auto=format&fit=crop&w=2400&q=85";

export function FactoryQCView() {
  const { t, pages } = useLanguage();
  const content = pages.factoryQC;
  const certs = pages.certifications;
  const workflow = t.factoryAndQC;

  return (
    <div className="bg-white">
      <StaticParallaxBanner
        imageSrc={FACTORY_BANNER_IMAGE}
        breadcrumb={content.breadcrumb}
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Solid Curtain Wrapper */}
      <div className="relative z-10 bg-white">
      {/* Corporate Fact Sheet Table */}
      <section className="border-b border-neutral-200 bg-[#FAFAFA] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {content.corporateEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
                {content.corporateHeading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
                {content.corporateBody}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-[2px] border border-neutral-200 bg-white">
                <table className="w-full border-collapse text-left text-sm">
                  <tbody>
                    {content.corporateFacts.map((fact, idx) => (
                      <tr
                        key={fact.label}
                        className={`border-b border-neutral-200 last:border-b-0 ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                        }`}
                      >
                        <th
                          scope="row"
                          className="w-2/5 px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500"
                        >
                          {fact.label}
                        </th>
                        <td className="px-5 py-4 font-medium text-[#111827]">
                          {fact.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 / Vertical Integration Workflow (01–05 Hairline List) */}
      <section className="border-b border-neutral-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                01 / {workflow.heading}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
                {workflow.heading}
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
                {workflow.body}
              </p>
              <div className="mt-8 border-t border-neutral-200 pt-5 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
                {workflow.traceabilityNote}
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="border-t border-neutral-200">
                {workflow.steps.map((step) => (
                  <li
                    key={step.number}
                    className="grid grid-cols-1 gap-3 border-b border-neutral-200 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6 lg:py-8"
                  >
                    <span className="font-mono text-sm font-medium tracking-[0.1em] text-brand tabular-nums">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight text-[#111827]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-[#525252]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / In-House Laboratory & Testing Standards (Dual-Division) */}
      <section className="border-b border-neutral-200 bg-[#F7F8F7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {content.labEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {content.labHeading}
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-[#525252]">
              {content.labSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Activated Carbon Lab */}
            <div className="border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
                {content.carbonLabStandard}
              </p>
              <h3 className="mt-2.5 font-display text-xl font-medium tracking-tight text-[#111827]">
                {content.carbonLabTitle}
              </h3>

              <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                {content.carbonLabTests.map((row) => (
                  <div
                    key={row.parameter}
                    className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4"
                  >
                    <dt className="font-medium text-[#111827]">
                      {row.parameter}
                    </dt>
                    <dd className="font-mono text-xs text-[#525252] sm:text-right">
                      {row.method}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Coconut Food Lab */}
            <div className="border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
                {content.foodLabStandard}
              </p>
              <h3 className="mt-2.5 font-display text-xl font-medium tracking-tight text-[#111827]">
                {content.foodLabTitle}
              </h3>

              <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                {content.foodLabTests.map((row) => (
                  <div
                    key={row.parameter}
                    className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4"
                  >
                    <dt className="font-medium text-[#111827]">
                      {row.parameter}
                    </dt>
                    <dd className="font-mono text-xs text-[#525252] sm:text-right">
                      {row.method}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / Certifications & Export Compliance (Consolidated from /certifications) */}
      <section
        id="certifications"
        className="scroll-mt-20 border-b border-neutral-200 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              03 / {certs.breadcrumb}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {certs.certsHeading}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 border border-neutral-200 md:grid-cols-2">
            {certs.certsList.map((cert, idx) => (
              <article
                key={cert.code}
                className={`flex flex-col justify-between p-6 sm:p-8 ${
                  idx % 2 === 1 ? "md:border-l md:border-neutral-200" : ""
                } ${idx >= 2 ? "border-t border-neutral-200" : ""} ${
                  idx === 1 ? "border-t border-neutral-200 md:border-t-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[#111827]">
                      {cert.code}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-brand">
                    {cert.scope}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#525252]">
                    {cert.description}
                  </p>
                </div>
                <p className="mt-5 border-t border-neutral-200 pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {cert.authority}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {certs.docsEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827]">
                {certs.docsHeading}
              </h3>
              <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-[#525252]">
                {certs.docsSubtitle}
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="border-t border-neutral-200">
                {certs.docsChecklist.map((doc) => (
                  <li
                    key={doc.number}
                    className="grid grid-cols-1 gap-2 border-b border-neutral-200 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
                  >
                    <span className="font-mono text-xs font-medium text-brand tabular-nums">
                      {doc.number}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-medium text-[#111827]">
                        {doc.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#525252]">
                        {doc.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Container Logistics & Port Dispatch */}
      <section className="bg-[#F7F8F7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {content.logisticsEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
                {content.logisticsHeading}
              </h2>
              <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[#525252]">
                {content.logisticsBody}
              </p>
              <div className="mt-8">
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
            </div>

            <div className="lg:col-span-6">
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                {content.logisticsSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      {spec.label}
                    </dt>
                    <dd className="font-medium text-[#111827] sm:text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
