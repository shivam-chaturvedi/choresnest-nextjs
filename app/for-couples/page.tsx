import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Sparkles, Shield, RefreshCw } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, OG_IMAGE, SITE_NAME } from "@/lib/seo";

const pageDescription =
  "Chores Nest for couples: eliminate the invisible mental load, share grocery lists in real time, divide chores fairly, and track shared expenses without conflict.";

export const metadata: Metadata = {
  title: "Chores Nest for Couples – Shared Chores, Groceries & Finances",
  description: pageDescription,
  keywords: [
    "chores app for couples",
    "shared grocery list for couples",
    "split household chores fairly",
    "couples expense tracker",
    "relationship household management",
    "couples organizer app",
  ],
  alternates: {
    canonical: canonicalUrl("/for-couples"),
  },
  openGraph: {
    title: "Chores Nest for Couples – Shared Chores, Groceries & Finances",
    description: pageDescription,
    url: canonicalUrl("/for-couples"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest for Couples – Shared Chores, Groceries & Finances",
    description: pageDescription,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const coupleSchema = createWebPageSchema({
  title: "Chores Nest for Couples",
  description: pageDescription,
  url: canonicalUrl("/for-couples"),
});

const benefits = [
  {
    title: "Real-Time Shared Shopping",
    description:
      "Never text 'Do we need milk?' again. When one partner adds coffee at work, it appears instantly on the other's screen at the grocery store.",
    link: "/features/lists",
    linkText: "Explore Shopping Lists",
  },
  {
    title: "Fair & Frictionless Chore Division",
    description:
      "Assign recurring responsibilities like Kitchen Reset, Trash Day, and Laundry. Automatic notifications eliminate nagging and resentment.",
    link: "/features/tasks",
    linkText: "Explore Tasks & Chores",
  },
  {
    title: "Shared Expense Tracking",
    description:
      "Log joint purchases in three seconds. Keep rent, utilities, and date nights organized without complex, intimidating spreadsheets.",
    link: "/features/finance",
    linkText: "Explore Finance Tracker",
  },
  {
    title: "Coordinated Date & Event Calendar",
    description:
      "Keep doctor appointments, dinner reservations, social plans, and travel schedules synchronized in one shared calendar view.",
    link: "/features/calendar",
    linkText: "Explore Family Calendar",
  },
];

export default function ForCouplesPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <StructuredData id="couples-page-schema" data={coupleSchema} />

      {/* Hero */}
      <div className="max-w-[1050px] mx-auto text-left mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Heart className="w-3.5 h-3.5" /> Built for Modern Couples
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.12]">
          Run your household like a team, not a battlefield.
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
          The mental load of managing a home should never fall on one person. Chores Nest gives you a shared space for groceries, chores, calendars, and expenses.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.choresnest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 transition-all text-base"
          >
            Get Chores Nest Free →
          </Link>
          <Link
            href="/tools/chore-chart-generator"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-secondary hover:bg-secondary/80 text-foreground font-semibold rounded-xl border border-border transition-all text-base"
          >
            Try Free Chore Generator
          </Link>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-[1050px] mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
          Why Couples Love Chores Nest
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {item.linkText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Article Reference / Internal Link */}
      <div className="max-w-[1050px] mx-auto mb-20 bg-secondary/30 border border-border rounded-2xl p-8 sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold text-primary tracking-wider mb-2 block">
            Recommended Reading
          </span>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            How Couples Can Fairly Split Household Chores Without Resentment
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed mb-6">
            Explore our research-backed guide on identifying the invisible mental load, establishing zone ownership, and ending daily domestic friction.
          </p>
          <Link
            href="/blog/how-do-couples-fairly-split-household-chores"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Read Full Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1050px] mx-auto text-center rounded-2xl border border-border bg-secondary/50 p-10 sm:p-12">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
          Start organizing your home together today
        </h3>
        <p className="text-muted-foreground font-light max-w-lg mx-auto mb-8">
          Free to use on Android. Tasks, groceries, finances and calendars in one unified space.
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
