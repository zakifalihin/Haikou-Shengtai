"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  theme?: "light" | "dark";
}

export function PageHeader({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  theme = "light",
}: PageHeaderProps) {
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <section
      className={cn(
        "border-b pt-36 pb-16 lg:pt-40 lg:pb-20",
        isDark
          ? "border-white/15 bg-[#1C1F23] text-white"
          : "border-neutral-200 bg-[#FAFAFA] text-[#111827]",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className={cn(
            "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]",
            isDark ? "text-neutral-400" : "text-neutral-500",
          )}
        >
          <Link
            href="/"
            className={cn(
              "transition-colors",
              isDark ? "hover:text-white" : "hover:text-[#111827]",
            )}
          >
            {t.productDetail.homeLabel}
          </Link>
          <ChevronRight
            className={cn("size-3.5", isDark ? "text-white/30" : "text-neutral-400")}
            strokeWidth={1.5}
          />
          <span className={isDark ? "text-white" : "text-[#111827]"}>
            {breadcrumb}
          </span>
        </nav>

        {/* Eyebrow + H1 + Subtitle */}
        <div className="mt-8 max-w-4xl">
          <p
            className={cn(
              "font-mono text-xs font-medium uppercase tracking-[0.16em]",
              isDark ? "text-white/65" : "text-brand",
            )}
          >
            {eyebrow}
          </p>

          <h1
            className={cn(
              "mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]",
              isDark ? "text-white" : "text-[#111827]",
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "mt-5 max-w-[62ch] text-base leading-relaxed md:text-[17px]",
              isDark ? "text-neutral-300" : "text-[#525252]",
            )}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
