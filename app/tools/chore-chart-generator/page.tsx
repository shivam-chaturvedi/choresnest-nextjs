import type { Metadata } from "next";
import { canonicalUrl, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import ChoreChartGeneratorClient from "./ChoreChartGeneratorClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Free Chore Chart Generator & Household Schedule Maker",
  description:
    "Generate a fair, customized chore rotation chart for couples, families, or roommates in seconds. Free interactive tool to build sustainable household routines.",
  keywords: [
    "free chore chart generator",
    "chore chart maker",
    "interactive chore schedule generator",
    "roommate chore wheel generator",
    "family chore chart maker",
    "household routine builder",
  ],
  alternates: {
    canonical: canonicalUrl("/tools/chore-chart-generator"),
  },
  openGraph: {
    title: "Free Chore Chart Generator & Schedule Maker | Chores Nest",
    description:
      "Generate a fair, customized chore rotation chart for couples, families, or roommates in seconds. Free interactive tool to build sustainable household routines.",
    url: canonicalUrl("/tools/chore-chart-generator"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Free Chore Chart Generator & Schedule Maker | Chores Nest",
    description:
      "Generate a fair, customized chore rotation chart for couples, families, or roommates in seconds. Free interactive tool to build sustainable household routines.",
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Chore Chart Generator",
  url: canonicalUrl("/tools/chore-chart-generator"),
  applicationCategory: "LifestyleApplication",
  operatingSystem: "All",
  description:
    "Free interactive chore chart maker and household schedule generator for families, couples, and roommates.",
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

export default function ChoreChartGeneratorPage() {
  return (
    <div className="w-full py-10 md:py-16">
      <StructuredData id="chore-tool-schema" data={toolSchema} />
      <ChoreChartGeneratorClient />
    </div>
  );
}
