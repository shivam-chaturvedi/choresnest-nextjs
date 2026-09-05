import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Calendar, CheckSquare, Wallet, Lock } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, OG_IMAGE, SITE_NAME } from "@/lib/seo";

const pageDescription =
  "Chores Nest for families: Keep everyone on the same page with shared family calendars, kid-friendly chore routines, collaborative grocery lists, and secure family document storage.";

export const metadata: Metadata = {
  title: "Chores Nest for Families – Shared Family Calendar, Chores & Lists",
  description: pageDescription,
  keywords: [
    "family organizer app",
    "family chore chart app",
    "shared family calendar",
    "family task management",
    "kids chore tracker",
    "family shopping list",
  ],
  alternates: {
    canonical: canonicalUrl("/for-families"),
  },
  openGraph: {
    title: "Chores Nest for Families – Shared Family Calendar, Chores & Lists",
    description: pageDescription,
    url: canonicalUrl("/for-families"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest for Families – Shared Family Calendar, Chores & Lists",
    description: pageDescription,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const familySchema = createWebPageSchema({
  title: "Chores Nest for Families",
  description: pageDescription,
  url: canonicalUrl("/for-families"),
});

const features = [
  {
    icon: Calendar,
    title: "Unified Family Calendar",
    desc: "Color-coded scheduling for school events, soccer games, doctor visits, and family vacations.",
    link: "/features/calendar",
  },
  {
    icon: CheckSquare,
    title: "Kids & Teens Chore System",
    desc: "Teach responsibility with recurring chore assignments, completion logs, and positive habit tracking.",
    link: "/features/tasks",
  },
  {
    icon: Lock,
    title: "Encrypted Document Vault",
    desc: "Safely store insurance policies, medical records, passport copies, and appliance warranties in one place.",
    link: "/features/vault",
  },
  {
    icon: Wallet,
    title: "Household Finance & Budgets",
    desc: "Track monthly family expenses, grocery budgets, and extracurricular spending with simple visual charts.",
    link: "/features/finance",
  },
];

export default function ForFamiliesPage() {
  return (
    <div className="w-full py-12 md:py-20">
      <StructuredData id="family-page-schema" data={familySchema} />

      {/* Hero */}
      <div className="max-w-[1050px] mx-auto text-left mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" /> Built for Busy Households
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.12]">
          Everything your family needs to stay organized in one place.
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
          Replace the chaotic mess of wall calendars, sticky notes, and separate apps with a calm, privacy-first family dashboard designed for real everyday life.
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
            href="/tools/grocery-list-maker"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-secondary hover:bg-secondary/80 text-foreground font-semibold rounded-xl border border-border transition-all text-base"
          >
            Free Grocery List Tool
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-[1050px] mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
          The All-in-One Family Operating System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
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

      {/* Deep Dive Article Reference / Internal Link */}
      <div className="max-w-[1050px] mx-auto mb-20 bg-secondary/30 border border-border rounded-2xl p-8 sm:p-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold text-primary tracking-wider mb-2 block">
            Featured Family Guide
          </span>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            Best Family Organizer Apps: What to Look for Beyond Outdated Tools
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed mb-6">
            Compare modern all-in-one family organizers against legacy ad-heavy alternatives. Learn how offline sync, privacy, and unified tools transform family life.
          </p>
          <Link
            href="/blog/best-family-organizer-apps-and-modern-alternatives"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Read the Comparison <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1050px] mx-auto text-center rounded-2xl border border-border bg-secondary/50 p-10 sm:p-12">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
          Give your family the gift of calm organization
        </h3>
        <p className="text-muted-foreground font-light max-w-lg mx-auto mb-8">
          Free to download. All your family schedules, chores, groceries, and documents in one secure place.
        </p>
        <Link
          href="https://play.google.com/store/apps/details?id=com.choresnest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 transition-all text-base"
        >
          Get Chores Nest for Android →
        </Link>
      </div>
    </div>
  );
}
