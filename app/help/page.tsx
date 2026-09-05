import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, HelpCircle, Search } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Find answers, feature guides, and quick help topics inside the Chores Nest Help Center.";

const helpSchema = createWebPageSchema({
  title: "Help Center | Chores Nest",
  description,
  url: canonicalUrl("/help"),
});

const sections = [
  {
    icon: BookOpen,
    title: "Feature Guides",
    desc: "Step-by-step tutorials for every feature.",
    to: "/getting-started",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    desc: "Common questions from families.",
    to: "/faq",
  },
  {
    icon: Search,
    title: "Search Help",
    desc: "Quickly find answers to your questions.",
  },
];

export const metadata: Metadata = {
  title: "Help Center | Chores Nest",
  description,
  keywords: [...DEFAULT_KEYWORDS, "support articles", "help docs"],
  alternates: {
    canonical: canonicalUrl("/help"),
  },
  openGraph: {
    title: "Help Center | Chores Nest",
    description,
    url: canonicalUrl("/help"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest Help Center",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="help-webpage-schema" data={helpSchema} />
      <section className="bg-secondary border-b">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">Help Center</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl font-light">
            Find answers, learn how to use features, and get the most out of Chores Nest.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 max-w-3xl">
          <div className="space-y-4">
            {sections.map((item) => (
              <div key={item.title} className="border border-border bg-card p-6 hover:shadow-lg transition-shadow rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 rounded-xl text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-light text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                    {item.to && (
                      <Link href={item.to} className="text-sm text-primary font-light hover:underline mt-2 inline-block">
                        Browse →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
