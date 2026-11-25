"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

const LOCALE_OPTIONS: {
  code: Locale;
  label: string;
  htmlLang: string;
  ariaLabel: string;
}[] = [
  { code: "id", label: "ID", htmlLang: "id", ariaLabel: "Switch language to Indonesian" },
  { code: "en", label: "EN", htmlLang: "en", ariaLabel: "Switch language to English" },
  { code: "zh", label: "中文", htmlLang: "zh-CN", ariaLabel: "Switch language to Simplified Chinese" },
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasDarkHero = true;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = !hasDarkHero || scrolled || mobileOpen;
  const resolveHref = (href: string) =>
    href.startsWith("#") ? `/${href}` : href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-colors duration-300",
        isSolid
          ? "border-b border-neutral-200 bg-white/95 text-[#111827] backdrop-blur-md"
          : "border-b border-white/15 bg-transparent text-white",
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* Left: Typographic Wordmark */}
        <div className="justify-self-start">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-display text-sm font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-80"
          >
            {site.name}
          </Link>
        </div>

        {/* Center: 4 Clean Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-9">
            {t.navbar.links.map((link) => {
              const target = resolveHref(link.href);
              const isActive =
                pathname === target || pathname.startsWith(`${target}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={target}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap border-b-2 pb-1 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200",
                      isActive
                        ? isSolid
                          ? "border-[#143D2B] text-[#111827]"
                          : "border-white text-white"
                        : isSolid
                          ? "border-transparent text-[#525252] hover:text-[#111827]"
                          : "border-transparent text-white/80 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: EN | 中文 | ID Switcher + Sharp Rectangular CTA */}
        <div className="hidden items-center justify-self-end gap-6 lg:flex">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center font-mono text-xs tracking-[0.08em]"
          >
            {LOCALE_OPTIONS.map((option, idx) => {
              const active = lang === option.code;
              return (
                <span key={option.code} className="flex items-center">
                  {idx > 0 && (
                    <span
                      aria-hidden
                      className={cn(
                        "mx-2 h-3 w-px select-none",
                        isSolid ? "bg-neutral-300" : "bg-white/25",
                      )}
                    />
                  )}
                  <button
                    type="button"
                    lang={option.htmlLang}
                    aria-label={option.ariaLabel}
                    aria-pressed={active}
                    onClick={() => setLang(option.code)}
                    className={cn(
                      "cursor-pointer border-b pb-0.5 transition-colors",
                      active
                        ? isSolid
                          ? "border-[#143D2B] font-semibold text-[#111827]"
                          : "border-white font-semibold text-white"
                        : isSolid
                          ? "border-transparent text-neutral-600 hover:text-[#111827]"
                          : "border-transparent text-white/80 hover:text-white",
                    )}
                  >
                    {option.label}
                  </button>
                </span>
              );
            })}
          </div>

          <Button
            asChild
            variant={isSolid ? "default" : "inverse"}
            size="default"
            className="rounded-[2px] px-5"
          >
            <Link href="/contact#rfq-form">{t.navbar.cta}</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 justify-self-end lg:hidden">
          <Button
            type="button"
            variant={isSolid ? "ghost" : "ghostLight"}
            size="icon"
            aria-label={
              mobileOpen ? t.navbar.closeMenuAria : t.navbar.openMenuAria
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Full-Height Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="h-[calc(100dvh-80px)] overflow-y-auto border-t border-neutral-200 bg-white text-[#111827] lg:hidden"
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-8">
            <ul className="divide-y divide-neutral-200 border-b border-neutral-200">
              {t.navbar.links.map((link, idx) => {
                const target = resolveHref(link.href);
                const isActive =
                  pathname === target || pathname.startsWith(`${target}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={target}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-baseline justify-between py-5 font-display text-xl font-medium tracking-tight",
                        isActive ? "text-[#143D2B]" : "text-[#111827]",
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-neutral-400">
                        0{idx + 1}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {t.navbar.mobileLanguageLabel}
                </span>
                <div
                  role="group"
                  aria-label="Mobile language switcher"
                  className="flex items-center font-mono text-xs tracking-[0.08em]"
                >
                  {LOCALE_OPTIONS.map((option, idx) => {
                    const active = lang === option.code;
                    return (
                      <span key={option.code} className="flex items-center">
                        {idx > 0 && (
                          <span
                            aria-hidden
                            className="mx-2.5 h-3 w-px bg-neutral-300"
                          />
                        )}
                        <button
                          type="button"
                          lang={option.htmlLang}
                          aria-label={option.ariaLabel}
                          aria-pressed={active}
                          onClick={() => setLang(option.code)}
                          className={cn(
                            "cursor-pointer border-b pb-0.5 transition-colors",
                            active
                              ? "border-[#143D2B] font-semibold text-[#111827]"
                              : "border-transparent text-neutral-600 hover:text-[#111827]",
                          )}
                        >
                          {option.label}
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>

              <Button asChild size="lg" className="w-full rounded-[2px]">
                <Link
                  href="/contact#rfq-form"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.navbar.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
