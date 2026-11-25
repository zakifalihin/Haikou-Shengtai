"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Check, Copy } from "lucide-react";

import { StaticParallaxBanner } from "@/components/layout/StaticParallaxBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { submitRfq } from "@/lib/rfq";
import { site } from "@/lib/site";

/*
 * CONTACT PARALLAX PHOTOGRAPHY PLACEHOLDERS (Unsplash)
 * -----------------------------------------------------------------------------
 * Swap with real Haikou port / factory headquarters photography once available:
 * - Top Banner: "/images/contact-port-hero.jpg"
 * - Bottom Strip: "/images/contact-container-logistics.jpg"
 */
const HERO_BANNER_IMAGE = "/images/hero-global-export.webp";

const LOGISTICS_STRIP_IMAGE = "/images/contact-logistics.webp";

const inputClass =
  "w-full rounded-[2px] border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-neutral-400 transition-colors focus:border-[#143D2B] focus:outline-none";

const labelClass =
  "block font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#525252] mb-2";

export function ContactView() {
  const { t, pages } = useLanguage();
  const content = pages.contact;
  const { inquiry } = t;

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    fullName: string;
    email: string;
    division: string;
    volume: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    divisionIndex: 0,
    volumeIndex: 1,
    message: "",
    website: "",
  });

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      window.setTimeout(() => {
        setCopiedEmail((prev) => (prev === email ? null : prev));
      }, 2000);
    } catch {
      // Clipboard API unavailable in restricted context
    }
  };

  const selectedDivision =
    content.divisionOptions[formData.divisionIndex] ??
    content.divisionOptions[0];

  const selectedVolume =
    content.volumeOptions[formData.volumeIndex] ?? content.volumeOptions[0];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const result = await submitRfq({
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      division: selectedDivision,
      volume: selectedVolume,
      message: formData.message,
      website: formData.website,
      source: "Contact Page (/contact)",
    });

    setSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.error ?? "Unable to send inquiry.");
      return;
    }

    setSubmittedSummary({
      fullName: formData.fullName,
      email: formData.email,
      division: selectedDivision,
      volume: selectedVolume,
    });
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      divisionIndex: 0,
      volumeIndex: 1,
      message: "",
      website: "",
    });
  };

  return (
    <div className="bg-white">
      {/* 1. Top Full-Bleed Static-on-Scroll Parallax Banner */}
      <StaticParallaxBanner
        imageSrc={HERO_BANNER_IMAGE}
        imageAlt="Haikou maritime export port and international container terminal"
        breadcrumb={content.breadcrumb}
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* 2. Main Contact & B2B RFQ Section (Glides Over Static Banner) */}
      <section
        id="rfq-form"
        aria-labelledby="rfq-form-heading"
        className="relative z-10 scroll-mt-20 bg-white py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Official Contact Directory & Headquarters */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
                {inquiry.eyebrow}
              </p>
              <h2
                id="rfq-form-heading"
                className="mt-4 font-display text-2xl font-medium leading-[1.12] tracking-tight text-[#111827] md:text-3xl"
              >
                {inquiry.heading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
                {inquiry.body}
              </p>

              {/* Official Contact Directory */}
              <div className="mt-10">
                <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#111827]">
                  {content.directoryLabel}
                </p>
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
                  {content.directory.map((entry) => {
                    const isCopied = copiedEmail === entry.email;
                    return (
                      <li
                        key={entry.email}
                        className="flex items-center justify-between gap-3 py-4"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                            {entry.role}
                          </p>
                          <a
                            href={`mailto:${entry.email}`}
                            className="mt-1 block truncate text-sm font-medium text-[#111827] transition-colors hover:text-brand"
                          >
                            {entry.email}
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(entry.email)}
                          aria-label={`${content.copyLabel} ${entry.email}`}
                          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[2px] border border-neutral-200 bg-white px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] transition-colors hover:border-[#111827] hover:text-[#111827]"
                        >
                          {isCopied ? (
                            <>
                              <Check
                                className="size-3.5 text-[#143D2B]"
                                strokeWidth={1.5}
                              />
                              <span className="text-[#143D2B]">
                                {content.copiedLabel}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" strokeWidth={1.5} />
                              <span>{content.copyLabel}</span>
                            </>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Office Details & Response Commitment */}
              <dl className="mt-8 divide-y divide-neutral-200 border-b border-neutral-200 text-sm">
                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {inquiry.contact.addressLabel}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-[#111827]">
                    {inquiry.contact.addressValue}
                  </dd>
                </div>

                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {content.hoursLabel}
                  </dt>
                  <dd className="mt-1 text-[#111827]">{content.hoursValue}</dd>
                </div>

                <div className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                    {inquiry.contact.responseLabel}
                  </dt>
                  <dd className="mt-1 font-medium text-[#111827]">
                    {inquiry.contact.responseValue}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Column: Sharp-Bordered B2B RFQ Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[2px] border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10">
                {submittedSummary ? (
                  <div className="py-8">
                    <div className="inline-flex size-10 items-center justify-center rounded-[2px] border border-[#143D2B] text-[#143D2B]">
                      <Check className="size-5" strokeWidth={1.5} />
                    </div>

                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-brand">
                      {inquiry.confirmation.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#111827]">
                      {inquiry.confirmation.headingPrefix}{" "}
                      {submittedSummary.fullName}.
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#525252]">
                      {inquiry.confirmation.bodyPart1}{" "}
                      <span className="font-medium text-[#111827]">
                        {submittedSummary.division}
                      </span>{" "}
                      ({submittedSummary.volume}){" "}
                      {inquiry.confirmation.bodyPart2}{" "}
                      <span className="font-medium text-[#111827]">
                        {submittedSummary.email}
                      </span>{" "}
                      {inquiry.confirmation.bodyPart3}
                    </p>

                    <div className="mt-8 border-t border-neutral-200 pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-[2px]"
                        onClick={() => {
                          setSubmittedSummary(null);
                          setSubmitError(null);
                        }}
                      >
                        {inquiry.confirmation.resetButton}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden Honeypot Anti-Spam Field */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          website: e.target.value,
                        }))
                      }
                      className="hidden"
                      style={{ display: "none" }}
                    />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          {inquiry.form.fullNameLabel}
                        </label>
                        <input
                          id="contact-name"
                          name="fullName"
                          type="text"
                          required
                          placeholder={inquiry.form.fullNamePlaceholder}
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }))
                          }
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className={labelClass}>
                          {inquiry.form.companyLabel}
                        </label>
                        <input
                          id="contact-company"
                          name="companyName"
                          type="text"
                          required
                          placeholder={inquiry.form.companyPlaceholder}
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              companyName: e.target.value,
                            }))
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        {inquiry.form.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder={inquiry.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-division"
                          className={labelClass}
                        >
                          {inquiry.form.divisionLabel}
                        </label>
                        <select
                          id="contact-division"
                          name="division"
                          value={formData.divisionIndex}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              divisionIndex: Number(e.target.value),
                            }))
                          }
                          className={inputClass}
                        >
                          {content.divisionOptions.map((option, idx) => (
                            <option key={idx} value={idx}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-volume" className={labelClass}>
                          {inquiry.form.volumeLabel}
                        </label>
                        <select
                          id="contact-volume"
                          name="volume"
                          value={formData.volumeIndex}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              volumeIndex: Number(e.target.value),
                            }))
                          }
                          className={inputClass}
                        >
                          {content.volumeOptions.map((option, idx) => (
                            <option key={idx} value={idx}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelClass}>
                        {inquiry.form.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder={inquiry.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className={inputClass}
                      />
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        className="rounded-[2px] border border-red-200 bg-red-50 px-3.5 py-3 text-xs leading-relaxed text-red-800"
                      >
                        <p className="font-medium">{submitError}</p>
                        <p className="mt-1">
                          {inquiry.form.errorPrefix}{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="font-mono font-medium underline underline-offset-4 hover:text-red-950"
                          >
                            {inquiry.form.errorFallbackCta}
                          </a>
                          .
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                        {inquiry.form.shippingNote}
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="rounded-[2px] bg-[#143D2B] px-7 text-white hover:bg-[#0E2E20]"
                      >
                        <span>
                          {submitting
                            ? inquiry.form.submittingButton
                            : inquiry.form.submitButton}
                        </span>
                        <ArrowRight className="size-4" strokeWidth={1.5} />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Secondary Static-on-Scroll Parallax Port Logistics Strip */}
      <section
        aria-label={content.portStripEyebrow}
        className="relative h-[38vh] min-h-[280px] w-full overflow-hidden border-t border-neutral-200 bg-[#14171A] [clip-path:inset(0)]"
      >
        <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
          <Image
            src={LOGISTICS_STRIP_IMAGE}
            alt="Ocean container freight vessel for global Hainan export shipping"
            fill
            loading="lazy"
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-10 lg:px-8 lg:py-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
              {content.portStripEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-[1.15] tracking-tight text-white md:text-3xl">
              {content.portStripHeading}
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-2 border-t border-white/20 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/75 sm:flex-row sm:items-center">
            <span>{content.portStripTagLeft}</span>
            <span>{content.portStripTagRight}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
