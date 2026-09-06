import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckSquare,
  DollarSign,
  Heart,
  Layers,
  Lock,
  Shield,
  ShoppingCart,
  StickyNote,
  Users,
  WifiOff,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, OG_IMAGE, mergeKeywords } from "@/lib/seo";
import VideoDemo from "@/components/VideoDemo";
import PlayStoreBanner from "@/components/ui/PlayStoreBanner";

const description = "The #1 Family Organizer. Simplify your everyday life with one place for organizing all your family's schedules, lists and information.";
const schemaDescription = DEFAULT_DESCRIPTION;
const homepageKeywords = [
  "family organizer app",
  "family planner app",
  "household organizer app",
  "family management app",
  "family productivity app",
  "organize family life",
  "shared family organizer",
  "family scheduling app",
  "family task manager",
  "household productivity app",
  "digital family organizer",
  "smart family planner",
  "family collaboration app",
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chores Nest",
  operatingSystem: "Android",
  applicationCategory: "ProductivityApplication",
  url: canonicalUrl("/"),
  downloadUrl: "https://play.google.com/store/apps/details?id=com.choresnest",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: schemaDescription,
};

export const metadata: Metadata = {
  title: {
    absolute: "Chores Nest – Family Organizer, Chores & Shared Calendar",
  },
  description,
  keywords: mergeKeywords(DEFAULT_KEYWORDS, homepageKeywords),
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    description,
    url: canonicalUrl("/"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const features = [
  {
    icon: Calendar,
    title: "Shared Family Calendar",
    desc: "Coordinate events, appointments, and activities with color-coded roles.",
  },
  {
    icon: CheckSquare,
    title: "Chores & Task Management",
    desc: "Assign chores, rotate responsibilities, and track progress.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Lists",
    desc: "Create and share grocery lists that sync instantly across devices.",
  },
  {
    icon: Lock,
    title: "Secure Document Vault",
    desc: "Store IDs, warranties, receipts, and household documents safely.",
  },
  {
    icon: DollarSign,
    title: "Finance Tracker",
    desc: "Record expenses, budgets, and spending insights for the whole household.",
  },
  {
    icon: StickyNote,
    title: "Notes & Journals",
    desc: "Keep family notes, ideas, and reminders organized in one place.",
  },
];

const benefits = [
  {
    icon: Layers,
    title: "One App for Everything",
    desc: "Manage chores, schedules, lists, notes, finances, and documents from a single shared workspace.",
  },
  {
    icon: Users,
    title: "Built for Real Families",
    desc: "Every feature is designed for shared household collaboration and planning.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    desc: "Data stays available even without internet and syncs automatically when you reconnect.",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    desc: "Your family's data belongs to you. We never sell or share personal information.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="choresnest-software-schema" data={softwareApplicationSchema} />
      <section className="relative overflow-hidden bg-secondary">
        <div className="container relative py-24 md:py-36">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="flex-1">
              <span className="inline-block px-5 py-2 border border-border bg-background text-foreground text-xs uppercase tracking-widest mb-6">
                Family Organizer App
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Organize Family Life in One Place
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Chores Nest is an offline-first family organizer app that unifies shared calendars, chore tracking, synchronized grocery lists, expense budgeting, and secure family documents into one private workspace designed for real households.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.choresnest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-3 bg-[#01875f] hover:bg-[#01996d] text-white text-sm font-bold shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#016848,0_15px_20px_-3px_rgba(1,135,95,0.5)] active:translate-y-1 active:shadow-[0_0px_0_0_#016848,0_5px_10px_-3px_rgba(1,135,95,0.4)] transition-all rounded-xl"
                >
                  Get it on Google Play
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center px-10 py-3 border-2 border-foreground text-foreground text-sm hover:bg-foreground hover:text-background transition-all rounded-lg"
                >
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.producthunt.com/products/chores-nest-family-organizer/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-chores-nest-family-organizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1310482&theme=light"
                    alt="Chores Nest: Family Organizer - Organize family life in one simple app | Product Hunt"
                    style={{ width: "250px", height: "54px" }}
                    width="250"
                    height="54"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
              <Image
                src="/chores_nest_feature_graphic.png"
                alt="Chores Nest app showing organizer features"
                width={720}
                height={520}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 section-fade">
        <div className="flex flex-col gap-10 rounded-[40px] border border-border bg-card/70 px-6 py-10 md:flex-row">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">See Chores Nest in Action</p>
            <h2 className="mt-4 text-4xl font-heading text-foreground">How does the shared household dashboard work?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
              Watch a short demo showing how Chores Nest keeps calendars, tasks, and shared notes in sync so every family member stays aligned in real time.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <VideoDemo />
          </div>
        </div>
      </section>

      <section className="section-fade">
        <div className="container py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground">Why do families choose Chores Nest?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chores Nest eliminates household mental load by consolidating 6 core management modules (calendars, chores, shopping lists, notes, expenses, and document vaults) into one unified, offline-first family platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card p-6 border border-border hover:shadow-lg transition-shadow rounded-xl">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4 rounded-xl">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary section-fade">
        <div className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground">What features are included in Chores Nest?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Everything your household needs to stay coordinated, all in one secure app.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border border-border bg-card p-6 hover:shadow-lg transition-shadow rounded-xl">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-4 rounded-xl">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center px-8 py-3 border-2 border-foreground text-foreground text-sm hover:bg-foreground hover:text-background transition-all rounded-lg"
            >
              View All Features <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Human-First Guides Section */}
      <section className="section-fade border-b border-border bg-background">
        <div className="container py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-3 block">
                Practical Systems &amp; Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                What practical systems help build a calmer home?
              </h2>
              <p className="mt-3 text-muted-foreground font-light text-base md:text-lg leading-relaxed">
                Thoughtful, human-first strategies for stress-free groceries, fair chore routines, and realistic meal planning.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                View all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    Groceries &amp; Shopping
                  </span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href="/blog/the-grocery-list-that-actually-makes-weekly-shopping-easier">
                    The Grocery List That Actually Makes Weekly Shopping Easier
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                  Learn how to build a realistic grocery list workflow that saves money, eliminates forgotten items, and keeps your kitchen stocked all week.
                </p>
              </div>
              <Link
                href="/blog/the-grocery-list-that-actually-makes-weekly-shopping-easier"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
              >
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    Household Management
                  </span>
                  <span>•</span>
                  <span>9 min read</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href="/blog/how-do-couples-fairly-split-household-chores">
                    How Couples Can Fairly Split Household Chores Without Resentment
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                  Explore practical techniques to balance the invisible mental load, establish zone ownership, and build a lasting domestic partnership.
                </p>
              </div>
              <Link
                href="/blog/how-do-couples-fairly-split-household-chores"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
              >
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    Meal Planning
                  </span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href="/blog/a-simple-weekly-meal-planner-for-people-who-hate-meal-planning">
                    A Simple Weekly Meal Planner for People Who Hate Meal Planning
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                  You do not need spreadsheets or four-hour prep marathons. Here is a realistic 15-minute weekly meal planning approach.
                </p>
              </div>
              <Link
                href="/blog/a-simple-weekly-meal-planner-for-people-who-hate-meal-planning"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
              >
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-foreground section-fade">
        <div className="container py-24 text-center">
          <h2 className="text-3xl md:text-4xl text-primary-foreground">
            Life gets busy. Family Chores helps bring order to the everyday chaos of family life.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6 text-primary-foreground/70">
            Made with <Heart className="h-4 w-4 fill-current" /> for families.
          </div>
          <Link
            href="https://play.google.com/store/apps/details?id=com.choresnest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-10 px-10 py-3 bg-background text-foreground text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all rounded-lg font-medium"
          >
            Download the App
          </Link>
        </div>
      </section>

      <section className="container py-24 section-fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground font-heading">Get the App Today</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Join thousands of families organizing their lives with Chores Nest.
          </p>
        </div>
        <PlayStoreBanner />
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Using Chores Nest? Share your feedback &amp; rate us:
          </p>
          <a
            href="https://www.producthunt.com/products/chores-nest-family-organizer/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-chores-nest-family-organizer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1310482&theme=light"
              alt="Chores Nest: Family Organizer - Organize family life in one simple app | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
