"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

const LOCALE_OPTIONS: { code: Locale; label: string; htmlLang: string }[] = [
  { code: "id", label: "ID", htmlLang: "id" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "zh", label: "中文", htmlLang: "zh-CN" },
];

const resolveHref = (href: string) =>
  href.startsWith("#") ? `/${href}` : href;

export function Footer() {
  const { lang, setLang, t } = useLanguage();
  const { footer } = t;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#14171A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white"
            >
              {site.name}
            </Link>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-neutral-400">
              {footer.tagline}
            </p>
            <div
              role="group"
              aria-label="Footer language switcher"
              className="mt-6 inline-flex items-center border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              {LOCALE_OPTIONS.map((option, idx) => {
                const active = lang === option.code;
                return (
                  <span key={option.code} className="flex items-center">
                    {idx > 0 && (
                      <span
                        aria-hidden
                        className="mx-2 h-2.5 w-px bg-white/25"
                      />
                    )}
                    <button
                      type="button"
                      lang={option.htmlLang}
                      aria-pressed={active}
                      onClick={() => setLang(option.code)}
                      className={cn(
                        "cursor-pointer transition-colors",
                        active
                          ? "font-semibold text-white"
                          : "text-neutral-400 hover:text-white",
                      )}
                    >
                      {option.label}
                    </button>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                {footer.divisionsHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.divisionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={resolveHref(link.href)}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                {footer.qualityHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.qualityLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={resolveHref(link.href)}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                {footer.contactHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-neutral-400">{footer.location}</li>
                <li className="font-mono text-xs text-neutral-400">
                  {footer.ports}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <p>{footer.copyright}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
            {footer.exportNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
