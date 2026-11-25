"use client";

import { useLanguage } from "@/context/LanguageContext";

export function FactoryAndQC() {
  const { t } = useLanguage();
  const section = t.factoryAndQC;

  return (
    <section
      id="factory-qc"
      aria-labelledby="factory-qc-heading"
      className="relative z-10 scroll-mt-20 border-b border-neutral-200 bg-[#F7F8F7] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial 2-Column Sticky Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Sticky Heading & Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {section.eyebrow}
            </p>
            <h2
              id="factory-qc-heading"
              className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl"
            >
              {section.heading}
            </h2>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
              {section.body}
            </p>

            <div className="mt-8 border-t border-neutral-200 pt-5 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
              {section.traceabilityNote}
            </div>
          </div>

          {/* Right: Clean Numbered Process List with Thin Hairline Dividers */}
          <div className="lg:col-span-7">
            <ol className="border-t border-neutral-200">
              {section.steps.map((step) => (
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

        {/* Bottom Strip: Monochrome Certifications & Compliance Bar */}
        <div
          id="certifications"
          className="scroll-mt-24 mt-20 border-t border-neutral-200 pt-10 lg:mt-24"
        >
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#111827]">
              {section.certificationsHeading}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
              {section.certificationsSubnote}
            </p>
          </div>

          <ul className="grid grid-cols-1 border border-neutral-200 bg-white sm:grid-cols-2 lg:grid-cols-5">
            {section.certifications.map((cert, index) => (
              <li
                key={cert.code}
                className={`p-5 ${index !== 0
                  ? "border-t border-neutral-200 lg:border-t-0 lg:border-l"
                  : ""
                  } ${index === 1 ? "sm:border-t-0 sm:border-l" : ""} ${index === 3 ? "sm:border-l" : ""
                  }`}
              >
                <p className="font-display text-sm font-semibold tracking-tight text-[#111827]">
                  {cert.code}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#525252]">
                  {cert.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
