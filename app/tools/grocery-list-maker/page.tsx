import type { Metadata } from "next";
import { canonicalUrl, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import GroceryListMakerClient from "./GroceryListMakerClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Free Grocery List Maker & Template Generator",
  description:
    "Generate organized, supermarket-aisle categorized grocery lists in seconds. Free interactive tool to build, customize, and copy your weekly grocery template.",
  keywords: [
    "free grocery list maker",
    "grocery list template generator",
    "interactive grocery list",
    "printable shopping list maker",
    "organized grocery template tool",
    "grocery list builder",
  ],
  alternates: {
    canonical: canonicalUrl("/tools/grocery-list-maker"),
  },
  openGraph: {
    title: "Free Grocery List Maker & Template Generator | Chores Nest",
    description:
      "Generate organized, supermarket-aisle categorized grocery lists in seconds. Free interactive tool to build, customize, and copy your weekly grocery template.",
    url: canonicalUrl("/tools/grocery-list-maker"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Free Grocery List Maker & Template Generator | Chores Nest",
    description:
      "Generate organized, supermarket-aisle categorized grocery lists in seconds. Free interactive tool to build, customize, and copy your weekly grocery template.",
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Grocery List Maker",
  url: canonicalUrl("/tools/grocery-list-maker"),
  applicationCategory: "LifestyleApplication",
  operatingSystem: "All",
  description:
    "Free interactive grocery list builder and supermarket category template generator.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function GroceryListMakerPage() {
  return (
    <div className="w-full py-10 md:py-16">
      <StructuredData id="grocery-tool-schema" data={toolSchema} />
      <GroceryListMakerClient />
    </div>
  );
}
