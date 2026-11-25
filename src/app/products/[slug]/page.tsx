import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { ProductDetailView } from "@/components/sections/ProductDetailView";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PRODUCTS_DATA,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { buildProductJsonLd } from "@/lib/seo";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: false },
    };
  }

  const en = product.translations.en;

  return {
    title: `${en.name} — Export Specifications`,
    description: en.shortDesc,
    keywords: [
      en.name,
      en.division,
      "Haikou Shengtai",
      "Hainan export manufacturer",
      "B2B bulk supplier China",
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/products/${product.slug}`,
      title: `${en.name} | Haikou Shengtai`,
      description: en.shortDesc,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 896,
          alt: en.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${en.name} | Haikou Shengtai`,
      description: en.shortDesc,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <JsonLd data={buildProductJsonLd(product)} />
      <Navbar />
      <main className="flex-1">
        <ProductDetailView
          product={product}
          relatedProducts={relatedProducts}
        />
      </main>
      <Footer />
    </>
  );
}
