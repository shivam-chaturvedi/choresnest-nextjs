import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Calendar,
  CheckSquare,
  Download,
  DollarSign,
  Lock,
  ShoppingCart,
  Shield,
  StickyNote,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import {
  canonicalUrl,
  createWebPageSchema,
  DEFAULT_KEYWORDS,
  OG_IMAGE,
  mergeKeywords,
} from "@/lib/seo";

const description =
  "Explore the powerful features of Chores Nest including shared family calendars, chores, shopping lists, finance tracking, notes, and document vault.";
const featuresPageKeywords = [
  "family organizer features",
  "family productivity app features",
  "family planning tools",
  "household management tools",
  "family organization tools",
  "shared family calendar",
  "family chores manager",
  "shared shopping lists",
  "family finance tracker",
  "family document vault",
  "family notes app",
  "shared family tasks",
];

const pageSchema = createWebPageSchema({
  title: "Chores Nest Features – Family Calendar, Chores & Lists",
  description,
  url: canonicalUrl("/features"),
});

export const metadata: Metadata = {
  title: {
    absolute: "Chores Nest Features – Family Calendar, Chores & Lists",
  },
  description,
  keywords: mergeKeywords(DEFAULT_KEYWORDS, featuresPageKeywords),
  alternates: {
    canonical: canonicalUrl("/features"),
  },
  openGraph: {
    title: "Chores Nest Features – Family Calendar, Chores & Lists",
    description,
    url: canonicalUrl("/features"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest Features – Family Calendar, Chores & Lists",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const showcases = [
  {
    icon: Calendar,
    title: "Family Calendar",
    desc:
      "Switch between day, week, and month views, color-code events by family member, and add reminders with location awareness.",
    to: "/features/calendar",
    images: ["/feature_calendar.png", "/feature_calendar_month.png"],
    bg: "bg-[hsl(210,30%,97%)]",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Lists",
    desc:
      "Collaborative grocery and to-do lists with categories, quantities, and swipes to mark items as purchased.",
    to: "/features/lists",
    images: ["/feature_lists.png"],
    bg: "bg-[hsl(150,20%,97%)]",
  },
  {
    icon: Lock,
    title: "Vault & Documents",
    desc:
      "Secure storage for warranties, bills, insurance, and reminders with OCR scanning, tags, and expiry alerts.",
    to: "/features/vault",
    images: ["/feature_vault.png", "/feature_vault_details.png"],
    bg: "bg-[hsl(40,30%,97%)]",
  },
  {
    icon: DollarSign,
    title: "Finance Tracking",
    desc:
      "Track income, expenses, budgets, and savings with category breakdowns and trend charts for the household.",
    to: "/features/finance",
    images: ["/feature_finance.png", "/feature_finance_breakdown.png"],
    bg: "bg-[hsl(185,20%,97%)]",
  },
  {
    icon: StickyNote,
    title: "Notes & Journals",
    desc: "Capture ideas, reminders, and shared information with folders, tags, and pinned notes.",
    to: "/features/notes",
    images: ["/feature_notes.png"],
    bg: "bg-[hsl(45,30%,97%)]",
  },
];

const moreFeatures = [
  {
    icon: CheckSquare,
    title: "Tasks & Chores",
    desc: "Assign responsibilities, set priorities, recurring tasks, and chore rotation with rewards.",
    to: "/features/tasks",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Smart alerts, daily agendas, and quiet hours so you never miss important events.",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    desc: "PIN lock, biometrics, encrypted storage, and emergency access mode keep your data protected.",
  },
  {
    icon: Download,
    title: "Data Export",
    desc: "Export backups as JSON or PDF and choose exactly what data to include.",
  },
];

export default function FeaturesOverviewPage() {
  return (
    <div className="space-y-16">
      <StructuredData id="features-overview-schema" data={pageSchema} />
      <section className="border-b bg-secondary/30">
        <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-heading text-foreground">Everything Your Family Needs</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Chores Nest combines the tools families use every day into a single shared system. No more switching between apps, just one simple workspace for schedules, tasks, lists, finances, and documents.
              </p>
              <Link
                href="/getting-started"
                className="inline-flex items-center mt-8 px-8 py-3 bg-foreground text-background text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <Image
                src="/feature_tablet_hero.png"
                alt="Family Chores app overview"
                width={420}
                height={260}
                className="relative h-full w-full rounded-[32px] object-cover shadow-[0_20px_60px_rgba(15,23,42,0.25)] border border-border/60"
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {showcases.map((feature, index) => {
        const isReversed = index % 2 === 1;
        return (
      <section
        key={feature.title}
        className={`${feature.bg || "bg-background"} section-fade`}
      >
            <div className="container py-20">
              <div
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 max-w-lg px-6 lg:px-0 lg:pl-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-2xl shadow-sm">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl text-foreground">{feature.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base mb-8">{feature.desc}</p>
                  {feature.to && (
                    <Link href={feature.to} className="inline-flex items-center text-primary font-medium hover:underline">
                      Explore {feature.title} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
                <div className="flex-1 flex justify-center gap-4">
                  {feature.images.length === 1 ? (
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                      <Image
                        src={feature.images[0]}
                        alt={`${feature.title} screenshot`}
                        width={320}
                        height={480}
                        className="relative w-full max-w-[320px] rounded-[2rem] shadow-2xl border-[6px] border-foreground/10"
                        style={{ width: "auto" }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex gap-4 items-start">
                      <div className="relative mt-8">
                        <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                        <Image
                          src={feature.images[0]}
                          alt={`${feature.title} screenshot 1`}
                          width={220}
                          height={420}
                          className="relative w-[220px] rounded-[1.5rem] shadow-2xl border-[5px] border-foreground/10"
                          style={{ width: "auto" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="relative -mt-2">
                        <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                        <Image
                          src={feature.images[1]}
                          alt={`${feature.title} screenshot 2`}
                          width={220}
                          height={420}
                          className="relative w-[220px] rounded-[1.5rem] shadow-2xl border-[5px] border-foreground/10"
                          style={{ width: "auto" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-secondary section-fade">
        <div className="container py-20">
          <h2 className="text-3xl text-foreground text-center mb-4">And Much More</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Every tool your family needs, built into one app.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {moreFeatures.map((item) => (
              <div key={item.title} className="bg-card p-6 border border-border rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 bg-secondary flex items-center justify-center rounded-xl">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                {item.to && (
                  <Link href={item.to} className="inline-flex items-center text-sm text-primary mt-3 hover:underline">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
