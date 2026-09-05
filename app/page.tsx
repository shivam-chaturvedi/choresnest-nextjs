import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckSquare,
  DollarSign,
  Heart,
  Lock,
  Shield,
  ShoppingCart,
  Sparkles,
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
  title: "Home",
  description,
  keywords: mergeKeywords(DEFAULT_KEYWORDS, homepageKeywords),
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Chores Nest | One Place for Family Organization",
    description,
    url: canonicalUrl("/"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest | One Place for Family Organization",
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
    icon: Sparkles,
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
                Family Chores helps families stay organized with shared calendars, chores, shopping lists, documents, finances, and more — all in one secure app designed for real households.
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
            <h2 className="mt-4 text-4xl font-heading text-foreground">Watch the shared household dashboard</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
              Watch a short demo showing how Chores Nest keeps calendars, tasks, and shared notes in sync so every family member stays aligned.
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
          <h2 className="text-3xl md:text-4xl text-foreground">Why Families Love Family Chores</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Families today use too many apps to manage daily life. Family Chores brings everything together into a single shared space where every member of the household can stay organized and connected.
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
            <h2 className="text-3xl md:text-4xl text-foreground">Feature Highlights</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Everything your family needs to stay organized, all in one app.
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
      </section>
    </div>
  );
}
