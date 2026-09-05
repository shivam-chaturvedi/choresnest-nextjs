import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, CheckCircle2, SplitSquareVertical, ShoppingBag, ShieldCheck } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, OG_IMAGE, SITE_NAME } from "@/lib/seo";

const pageDescription =
  "Chores Nest for roommates: Coordinate shared household chores, track communal apartment supplies, split shared grocery runs, and log household expenses without awkward conversations.";

export const metadata: Metadata = {
  title: "Chores Nest for Roommates – Shared Chores, Bills & Apartment Supplies",
  description: pageDescription,
  keywords: [
    "roommate chore app",
    "shared apartment chore tracker",
    "roommate grocery list",
    "roommate expense tracker",
    "apartment management app",
    "split household chores with roommates",
  ],
  alternates: {
    canonical: canonicalUrl("/for-roommates"),
  },
  openGraph: {
    title: "Chores Nest for Roommates – Shared Chores, Bills & Apartment Supplies",
    description: pageDescription,
    url: canonicalUrl("/for-roommates"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest for Roommates – Shared Chores, Bills & Apartment Supplies",
    description: pageDescription,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const roommateSchema = createWebPageSchema({
  title: "Chores Nest for Roommates",
  description: pageDescription,
  url: canonicalUrl("/for-roommates"),
});

const features = [
  {
    title: "Rotating Chore Schedules",
    desc: "Rotate deep kitchen cleans, taking out trash bins, and bathroom duty automatically. No awkward group chat arguments.",
    link: "/features/tasks",
  },
  {
    title: "Shared Household Supplies",
    desc: "A dedicated list for shared toilet paper, dish soap, olive oil, and trash bags. Whoever is at the market checks it off.",
    link: "/features/lists",
  },
  {
    title: "Transparent Shared Expenses",
    desc: "Log Wi-Fi bills, utility splits, and communal household purchases in seconds so everyone knows the score.",
    link: "/features/finance",
  },
  {
    title: "Apartment Notes & Wi-Fi Vault",
    desc: "Keep landlord contact info, lease documents, Wi-Fi passwords, and maintenance instructions pinned in one spot.",
    link: "/features/vault",
  },
];

export default function ForRoommatesPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <StructuredData id="roommate-page-schema" data={roommateSchema} />

      {/* Hero */}
      <div className="max-w-[1050px] mx-auto text-left mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Home className="w-3.5 h-3.5" /> Built for Shared Living
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.12]">
          Living with roommates, without the domestic friction.
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
          Keep shared apartment chores on a predictable rotation, maintain communal supplies effortlessly, and track expenses with complete transparency.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.choresnest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 transition-all text-base"
          >
            Get Started Free →
          </Link>
          <Link
            href="/tools/chore-chart-generator"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-secondary hover:bg-secondary/80 text-foreground font-semibold rounded-xl border border-border transition-all text-base"
          >
            Generate Roommate Chore Schedule
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-[1050px] mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
          The Roommate Operating System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1050px] mx-auto text-center rounded-2xl border border-border bg-secondary/50 p-10 sm:p-12">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
          Keep your apartment running smoothly
        </h3>
        <p className="text-muted-foreground font-light max-w-lg mx-auto mb-8">
          Download Chores Nest free on Android. Setup in two minutes with your roommates.
        </p>
        <Link
          href="https://play.google.com/store/apps/details?id=com.choresnest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 transition-all text-base"
        >
          Download Chores Nest →
        </Link>
      </div>
    </div>
  );
}
