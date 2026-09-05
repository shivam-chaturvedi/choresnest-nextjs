import type { Metadata } from "next";
import { LayoutGrid, Smartphone, UserPlus } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE, mergeKeywords } from "@/lib/seo";
import PlayStoreBanner from "@/components/ui/PlayStoreBanner";

const description = "Get your family organized in minutes with Chores Nest. Follow three simple steps to bring everyone together.";

const gettingStartedSchema = createWebPageSchema({
  title: "Getting Started | Chores Nest",
  description,
  url: canonicalUrl("/getting-started"),
});

const steps = [
  {
    icon: UserPlus,
    num: "1",
    title: "Create Your Household",
    desc: "Download Chores Nest, set up your household, and add family members with their own color and icon.",
  },
  {
    icon: LayoutGrid,
    num: "2",
    title: "Add Your Daily Life",
    desc: "Add tasks, events, grocery lists, notes, and financial records inside one shared space.",
  },
  {
    icon: Smartphone,
    num: "3",
    title: "Stay Connected",
    desc: "Every family member can view and update shared information. Changes sync automatically.",
  },
];

export const metadata: Metadata = {
  title: "Getting Started",
  description,
  keywords: mergeKeywords(DEFAULT_KEYWORDS, [
    "how to organize family life",
    "how to use choresnest",
    "family organizer app guide",
    "family planning tools guide",
    "household organization guide",
  ]),
  alternates: {
    canonical: canonicalUrl("/getting-started"),
  },
  openGraph: {
    title: "Getting Started | Chores Nest",
    description,
    url: canonicalUrl("/getting-started"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Getting Started | Chores Nest",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export default function GettingStartedPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="getting-started-schema" data={gettingStartedSchema} />
      <section className="bg-secondary border-b">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">Getting Started</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl font-light">
            Get your family organized in just a few minutes.
          </p>
        </div>
      </section>
      <section>
        <div className="container py-16 max-w-3xl">
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-5 p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-foreground flex items-center justify-center text-background font-heading font-light text-lg rounded-lg flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <div className="w-10 h-10 mb-3 bg-secondary flex items-center justify-center rounded-xl text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-light text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-secondary/30">
        <div className="container py-16">
          <PlayStoreBanner />
        </div>
      </section>
    </div>
  );
}
