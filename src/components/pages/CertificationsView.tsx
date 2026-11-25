"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function CertificationsView() {
  const { pages } = useLanguage();
  const content = pages.certifications;

  return (
    <div className="bg-white">
      <PageHeader
        breadcrumb={content.breadcrumb}
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        theme="light"
      />

      {/* 01 / Monochrome Hairline-Bordered Certifications Grid */}
      <section className="border-b border-neutral-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {content.certsEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
              {content.certsHeading}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 border border-neutral-200 md:grid-cols-2">
            {content.certsList.map((cert, idx) => (
              <article
                key={cert.code}
                className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${
                  idx % 2 === 1 ? "md:border-l md:border-neutral-200" : ""
                } ${idx >= 2 ? "border-t border-neutral-200" : ""} ${
                  idx === 1 ? "border-t border-neutral-200 md:border-t-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-[#111827]">
                      {cert.code}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-brand">
                    {cert.scope}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                    {cert.description}
                  </p>
                </div>

                <p className="mt-6 border-t border-neutral-200 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {cert.authority}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / Export Documentation Checklist */}
      <section className="border-b border-neutral-200 bg-[#F7F8F7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {content.docsEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl">
                {content.docsHeading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
                {content.docsSubtitle}
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="border-t border-neutral-200">
                {content.docsChecklist.map((doc) => (
                  <li
                    key={doc.number}
                    className="grid grid-cols-1 gap-3 border-b border-neutral-200 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
                  >
                    <span className="font-mono text-sm font-medium text-brand tabular-nums">
                      {doc.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight text-[#111827]">
                        {doc.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#525252]">
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

      {/* Request Official Documents CTA */}
      <section className="bg-white py-20 lg:py-24">
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
            <Link href="/contact">
              <span>{content.ctaButton}</span>
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
