"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { submitRfq } from "@/lib/rfq";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-[2px] border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-neutral-400 transition-colors focus:border-[#143D2B] focus:outline-none";

const labelClass =
  "block font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#525252] mb-2";

export function InquirySection() {
  const { t } = useLanguage();
  const { inquiry } = t;

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
    volumeIndex: 2,
    message: "",
    website: "",
  });

  const selectedDivision =
    inquiry.form.divisionOptions[formData.divisionIndex] ??
    inquiry.form.divisionOptions[0];

  const selectedVolume =
    inquiry.form.volumeOptions[formData.volumeIndex] ??
    inquiry.form.volumeOptions[0];

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
      source: "Home Page (/#rfq)",
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
      volumeIndex: 2,
      message: "",
      website: "",
    });
  };

  return (
    <section
      id="rfq"
      aria-labelledby="rfq-heading"
      className="relative z-10 scroll-mt-20 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Direct Export Contact Details */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand">
              {inquiry.eyebrow}
            </p>
            <h2
              id="rfq-heading"
              className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#111827] md:text-4xl"
            >
              {inquiry.heading}
            </h2>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#525252]">
              {inquiry.body}
            </p>

            <dl className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
              <div className="py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {inquiry.contact.emailLabel}
                </dt>
                <dd className="mt-1 font-medium text-[#111827]">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-brand"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>

              <div className="py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {inquiry.contact.addressLabel}
                </dt>
                <dd className="mt-1 text-[#111827]">
                  {/* TODO(client): replace with exact street address */}
                  {inquiry.contact.addressValue}
                </dd>
              </div>

              <div className="py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {inquiry.contact.responseLabel}
                </dt>
                <dd className="mt-1 font-medium text-[#111827]">
                  {inquiry.contact.responseValue}
                </dd>
              </div>

              <div className="py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  {inquiry.contact.messagingLabel}
                </dt>
                <dd className="mt-1 font-mono text-xs text-[#111827]">
                  {/* TODO(client): replace with verified business phone / WeChat ID */}
                  {inquiry.contact.messagingValue}
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
                      <label htmlFor="rfq-name" className={labelClass}>
                        {inquiry.form.fullNameLabel}
                      </label>
                      <input
                        id="rfq-name"
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
                      <label htmlFor="rfq-company" className={labelClass}>
                        {inquiry.form.companyLabel}
                      </label>
                      <input
                        id="rfq-company"
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
                    <label htmlFor="rfq-email" className={labelClass}>
                      {inquiry.form.emailLabel}
                    </label>
                    <input
                      id="rfq-email"
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
                      <label htmlFor="rfq-division" className={labelClass}>
                        {inquiry.form.divisionLabel}
                      </label>
                      <select
                        id="rfq-division"
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
                        {inquiry.form.divisionOptions.map((option, idx) => (
                          <option key={idx} value={idx}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rfq-volume" className={labelClass}>
                        {inquiry.form.volumeLabel}
                      </label>
                      <select
                        id="rfq-volume"
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
                        {inquiry.form.volumeOptions.map((option, idx) => (
                          <option key={idx} value={idx}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rfq-message" className={labelClass}>
                      {inquiry.form.messageLabel}
                    </label>
                    <textarea
                      id="rfq-message"
                      name="message"
                      rows={4}
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
        </motion.div>
      </div>
    </section>
  );
}
