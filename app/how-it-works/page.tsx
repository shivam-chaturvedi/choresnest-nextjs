import type { Metadata } from "next";
import { ArrowUpRight, ClipboardList, Users } from "lucide-react";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "See how Chores Nest helps your household stay synchronized across schedules, chores, meals, and finances.";

const schema = createWebPageSchema({
  title: "How It Works – Sync Family Schedules, Chores & Lists",
  description,
  url: canonicalUrl("/how-it-works"),
});

const steps = [
  { num: "1", title: "Create Your Household", desc: "Set up your household and invite family members to join.", icon: Users },
  { num: "2", title: "Add Your Daily Life", desc: "Add tasks, events, grocery lists, meals, and expenses.", icon: ClipboardList },
  { num: "3", title: "Stay Synchronized", desc: "Everything stays synchronized across all family devices.", icon: ArrowUpRight },
];

export const metadata: Metadata = {
  title: {
    absolute: "How It Works – Sync Family Schedules, Chores & Lists",
  },
  description,
  keywords: [...DEFAULT_KEYWORDS, "process", "family planner", "chore workflow", "household synchronization"],
  alternates: {
    canonical: canonicalUrl("/how-it-works"),
  },
  openGraph: {
    title: "How It Works – Sync Family Schedules, Chores & Lists",
    description,
    url: canonicalUrl("/how-it-works"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "How It Works – Sync Family Schedules, Chores & Lists",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="how-it-works-schema" data={schema} />
      <section className="border-b bg-secondary">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">How Chores Nest Works</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl font-light">
            Getting your family organized takes just three simple steps.
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
          <div className="text-center mt-12">
              <Link
              href="/features"
              className="inline-flex items-center px-8 py-3 border-2 border-foreground text-foreground font-light text-sm hover:bg-foreground hover:text-background transition-all"
            >
              Explore Features <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
