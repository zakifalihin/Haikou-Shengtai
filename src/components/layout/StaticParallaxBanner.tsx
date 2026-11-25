"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface StaticParallaxBannerProps {
  imageSrc: string;
  imageAlt?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  breadcrumbTrail?: BreadcrumbItem[];
  heightClass?: string;
  children?: ReactNode;
}

/**
 * Cross-browser "Static-on-Scroll" Parallax Banner.
 * Uses `[clip-path:inset(0)]` on the outer section combined with a `fixed inset-0`
 * background layer so the photo stays 100% static in the viewport while page content
 * glides over it like a curtain — works reliably on both Desktop and iOS/Mobile Safari.
 */
export function StaticParallaxBanner({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  breadcrumbTrail,
  heightClass = "h-[55vh] min-h-[420px]",
  children,
}: StaticParallaxBannerProps) {
  const { t } = useLanguage();

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-[#1C1F23] [clip-path:inset(0)]",
        heightClass,
      )}
    >
      {/* Static-in-Viewport Background Layer Clipped to Banner Bounds */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />
      </div>

      {/* Bottom-Left Swiss Editorial Foreground */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pt-28 pb-12 lg:px-8 lg:pb-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            {(breadcrumb || (breadcrumbTrail && breadcrumbTrail.length > 0)) && (
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/65"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  {t.productDetail.homeLabel}
                </Link>

                {breadcrumbTrail?.map((item) => (
                  <span key={item.label} className="flex items-center gap-2">
                    <ChevronRight
                      className="size-3.5 text-white/35"
                      strokeWidth={1.5}
                    />
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </span>
                ))}

                {breadcrumb && (
                  <>
                    <ChevronRight
                      className="size-3.5 text-white/35"
                      strokeWidth={1.5}
                    />
                    <span className="text-white">{breadcrumb}</span>
                  </>
                )}
              </nav>
            )}

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 sm:text-xs">
              {eyebrow}
            </p>

            <h1 className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-white/80 md:text-[17px]">
                {subtitle}
              </p>
            )}
          </div>

          {children && <div className="lg:shrink-0">{children}</div>}
        </div>
      </div>
    </section>
  );
}
