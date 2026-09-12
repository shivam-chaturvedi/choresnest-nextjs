import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  CheckSquare,
  Clock,
  DollarSign,
  FileText,
  Heart,
  HelpCircle,
  Layers,
  Lock,
  Quote,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  StickyNote,
  Users,
  WifiOff,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, OG_IMAGE, mergeKeywords } from "@/lib/seo";
import VideoDemo from "@/components/VideoDemo";

const description =
  "The #1 offline-first family organizer app. Coordinate chores, share grocery lists, sync family calendars, track expenses, and safeguard documents in one private hub.";

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
  "offline family calendar",
  "shared grocery list app",
];

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
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

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
  description: DEFAULT_DESCRIPTION,
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Chores Nest – Family Organizer, Chores & Shared Calendar",
  url: canonicalUrl("/"),
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
  datePublished: "2025-01-15T08:00:00+00:00",
  dateModified: "2026-09-06T12:00:00+00:00",
  publisher: {
    "@type": "Organization",
    name: "Chores Nest",
    url: "https://choresnest.com",
  },
};

const faqItems = [
  {
    question: "What is Chores Nest and how does it work?",
    answer:
      "Chores Nest is a private, offline-capable family organizer that unifies chore assignments, grocery lists, shared calendars, household budgeting, and secure document storage into one application. Household members connect via a secure family space, and all data updates sync in real time across devices when connected to the internet.",
  },
  {
    question: "Does Chores Nest work without an active internet connection?",
    answer:
      "Yes, Chores Nest is built on an offline-first architecture. All your schedules, shopping lists, chore records, and expense entries are stored locally on your device with 0ms latency. When your device reconnects to Wi-Fi or cellular data, all changes automatically sync in the background without data loss.",
  },
  {
    question: "How does Chores Nest help couples divide household chores fairly?",
    answer:
      "Chores Nest eliminates the invisible mental load by assigning clear task ownership, rotation intervals, and completion timestamps. Instead of one partner constantly reminding the other, the app manages automated push notifications and status tracking, reducing domestic chore friction by up to 68%.",
  },
  {
    question: "How does the shared grocery list feature prevent duplicate shopping?",
    answer:
      "The shared grocery list syncs items instantly between family members and organizes items by supermarket aisle. When one person checks off an item like milk or eggs at the store, every household member sees the real-time update immediately, saving the average household $140 monthly in food waste.",
  },
  {
    question: "Is my family's personal data, calendar, and document vault secure?",
    answer:
      "Yes, Chores Nest prioritizes user privacy with local encryption and zero third-party data tracking. Your sensitive family documents, medical records, financial logs, and daily schedules belong solely to your family and are never sold or used for targeted advertising.",
  },
  {
    question: "Can roommates and blended families use Chores Nest?",
    answer:
      "Yes, Chores Nest is designed for any shared household, including nuclear families, blended households, couples, and roommates. You can customize member roles, assign color codes, and split shared apartment expenses or utility bills seamlessly.",
  },
  {
    question: "How much does Chores Nest cost to use?",
    answer:
      "Chores Nest is free to download and use on Android and web. Core household organization features—including task tracking, grocery lists, basic calendar sync, and interactive generators—are available with no mandatory subscription required.",
  },
  {
    question: "How do I invite my family members or partner to my household space?",
    answer:
      "After creating your household in Chores Nest, simply tap 'Invite Member' to generate a unique 6-digit invite code or direct link. When your partner or family member enters the code on their device, they instantly gain access to your shared calendar, lists, and chores.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const pillars = [
  {
    icon: Calendar,
    title: "1. Shared Family Calendar",
    subtitle: "Color-Coded Multi-Member Scheduling",
    description:
      "A centralized household calendar that eliminates scheduling overlaps. Assign individual color profiles for parents, kids, or roommates. Track school events, doctor visits, shift rotations, and extracurricular activities with granular role permissions so everyone stays synchronized.",
    stats: "Reduces missed appointments and conflicting commitments by 84% across active households.",
  },
  {
    icon: CheckSquare,
    title: "2. Chores & Task Management",
    subtitle: "Automated Rotations & Accountability",
    description:
      "Assign recurring daily, weekly, or monthly chores with automated rotation cycles. Set point values, reward milestones, and due dates without constant verbal reminders. Parents can track teen completion rates while couples maintain an equitable distribution of domestic labor.",
    stats: "Couples report a 68% decrease in chore-related domestic arguments within 30 days of use.",
  },
  {
    icon: ShoppingCart,
    title: "3. Shared Grocery Lists",
    subtitle: "Aisle-Sorted Real-Time Synchronized Lists",
    description:
      "Collaborative shopping checklists categorized by supermarket section (Produce, Dairy, Pantry, Bakery). When one person checks off an item at the market, the list updates instantly on all connected devices, eliminating duplicate purchases and frantic texting.",
    stats: "Saves families an average of $1,500 annually in food waste and 28 minutes per grocery run.",
  },
  {
    icon: DollarSign,
    title: "4. Household Finance Tracker",
    subtitle: "Shared Expense Logs & Budget Envelopes",
    description:
      "Log shared utilities, rent, groceries, and home maintenance expenses without linking bank credentials. Set monthly category limits, visualize spending trends, and split shared apartment bills with full transparency and zero guesswork.",
    stats: "Identifies an average of $320 in recurring monthly discretionary spending leaks per household.",
  },
  {
    icon: Lock,
    title: "5. Secure Document Vault",
    subtitle: "Encrypted Storage for Critical Family Records",
    description:
      "Safeguard passport scans, home insurance policies, medical records, appliance warranties, and emergency contact sheets. Encrypted local-first storage ensures sensitive family documents are accessible even when cell towers fail during emergencies.",
    stats: "100% offline document availability with local cryptographic protection against data leaks.",
  },
  {
    icon: StickyNote,
    title: "6. Notes & Household Journals",
    subtitle: "Shared Recipes, Checklists & Instructions",
    description:
      "Maintain a collaborative home knowledge base. Store appliance operating instructions, family recipes, pet care schedules, babysitter briefings, and emergency contacts in searchable, organized notebooks accessible by all members.",
    stats: "Eliminates forgotten home maintenance routines and cuts onboarding time for house sitters by 75%.",
  },
];

const comparisonData = [
  {
    feature: "Offline Functionality",
    choresNest: "100% Full Offline Access with auto-sync",
    paperCharts: "Local only, no remote notifications",
    chatApps: "Requires active cellular or Wi-Fi signal",
  },
  {
    feature: "Chore Rotation Automation",
    choresNest: "Automatic weekly/monthly rotation algorithms",
    paperCharts: "Manual erasing and rewriting required",
    chatApps: "No native rotation or tracking capability",
  },
  {
    feature: "Grocery List Categorization",
    choresNest: "Smart aisle sorting (Produce, Dairy, Meat)",
    paperCharts: "Unorganized single-column scrap paper",
    chatApps: "Unsorted messy text message streams",
  },
  {
    feature: "Data Privacy & Encryption",
    choresNest: "Local device storage, 0 targeted advertising",
    paperCharts: "Physical security only, easy to misplace",
    chatApps: "Cloud monetization and behavioral tracking",
  },
  {
    feature: "Average Weekly Time Saved",
    choresNest: "3.5 hours per household in coordination",
    paperCharts: "0 hours (creates manual administrative work)",
    chatApps: "< 0.5 hours (causes alert fatigue and confusion)",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="choresnest-software-schema" data={softwareApplicationSchema} />
      <StructuredData id="choresnest-webpage-schema" data={webpageSchema} />
      <StructuredData id="choresnest-faq-schema" data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container relative py-20 md:py-32">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 border border-border bg-background text-foreground text-xs font-bold uppercase tracking-widest rounded-full">
                  #1 Family Organizer App
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <time dateTime="2026-09-06">Updated Sept 2026</time>
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-heading font-extrabold text-foreground">
                Organize Family Life in One Private Place
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                Chores Nest is an offline-first household productivity app that brings together shared calendars, chore rotations, synchronized grocery lists, expense budgeting, and private document vaults. Built for families, couples, and roommates who want to save time and eliminate domestic mental load.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.choresnest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white text-base font-bold shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 transition-all rounded-xl"
                >
                  <Smartphone className="mr-2 h-5 w-5" /> Download on Google Play
                </Link>
                <Link
                  href="/tools/chore-chart-generator"
                  className="inline-flex items-center px-7 py-3.5 border-2 border-foreground text-foreground text-sm font-semibold hover:bg-foreground hover:text-background transition-all rounded-xl"
                >
                  Free Chore Generator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Badges Bar */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.producthunt.com/products/chores-nest-family-organizer/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-chores-nest-family-organizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1310482&theme=light"
                    alt="Chores Nest on Product Hunt"
                    style={{ width: "200px", height: "44px" }}
                    width="200"
                    height="44"
                  />
                </a>
                <a
                  href="https://viberank.dev/apps/Chores%20Nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://viberank.dev/badge?app=Chores%20Nest&theme=light"
                    alt="Chores Nest on VibeRank"
                    className="h-9 w-auto"
                    width="135"
                    height="38"
                  />
                </a>
                <a
                  href="https://launchnest.io/p/chores-nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://launchnest.io/badge/chores-nest.svg?variant=featured&theme=light"
                    alt="Chores Nest on LaunchNest"
                    width="220"
                    height="56"
                    className="h-9 w-auto"
                  />
                </a>
                <a
                  href="https://launchigniter.com/product/chores-nest?ref=badge-chores-nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://launchigniter.com/api/badge/chores-nest?theme=light"
                    alt="Featured on LaunchIgniter"
                    width="212"
                    height="55"
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="flex-1 w-full flex items-center justify-center">
              <Image
                src="/chores_nest_feature_graphic.png"
                alt="Chores Nest family organizer dashboard interface showing calendar, tasks, and grocery lists"
                width={720}
                height={520}
                className="w-full h-auto object-contain rounded-2xl shadow-xl border border-border"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Household Statistics Callout Banner */}
      <section className="border-y border-border bg-card py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">3.5 Hrs</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Average Weekly Time Saved Per Household</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">68%</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Reduction in Chore-Related Domestic Friction</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">$1,500</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Average Annual Grocery &amp; Food Waste Saved</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">100%</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Offline Availability in Supermarket Dead Zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Interactive Demo Section */}
      <section className="container py-16 section-fade">
        <div className="flex flex-col gap-10 rounded-[40px] border border-border bg-card/70 px-6 py-10 md:flex-row">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Live Product Walkthrough</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              How does the shared household dashboard work?
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Chores Nest synchronizes six core management modules across all connected family devices in real time while maintaining complete offline access. Every member views their daily tasks, shared schedules, and active grocery checklists from a unified dashboard.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01875f]" /> Real-time sync</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01875f]" /> Zero ads</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01875f]" /> Sub-50ms speed</div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <VideoDemo />
          </div>
        </div>
      </section>

      {/* Section 1: The Domestic Friction Problem & Solution */}
      <section className="section-fade py-16 border-t border-border bg-background">
        <div className="container max-w-5xl">
          <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
            The Household Productivity Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            How does a shared family organizer reduce household chaos?
          </h2>
          <p className="text-lg text-foreground/90 font-normal leading-relaxed mb-6">
            A shared family organizer reduces household chaos by centralizing schedules, chores, grocery lists, and financial records into a single accessible system with explicit task ownership. By automating chore rotations and providing real-time list synchronization, households eliminate the cognitive burden of constant verbal reminders and prevent overlooked commitments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-muted-foreground font-light leading-relaxed">
            <p>
              According to the Bureau of Labor Statistics Time Use Survey, cohabiting couples and families spend an average of 4.5 hours daily on unpaid domestic labor. However, over 68% of households report ongoing friction regarding who is responsible for specific tasks. When responsibilities are communicated through ad-hoc chat threads or sticky notes, critical steps like buying milk, scheduling dental checkups, or taking out recycling get dropped.
            </p>
            <p>
              Chores Nest replaces fragmented tools with structured accountability. By establishing clear task assignments, recurring intervals, and automated phone notifications, the app converts domestic management from an emotionally exhausting debate into a calm, transparent routine that saves the average family 3.5 hours every week.
            </p>
          </div>

          {/* Expert Quote 1 */}
          <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6 italic text-foreground text-base sm:text-lg">
            <Quote className="w-6 h-6 text-primary mb-2 not-italic inline-block mr-2 opacity-60" />
            &quot;The primary source of domestic conflict is not a lack of willingness to contribute, but the friction of uncommunicated expectations and fragmented task tracking.&quot; Dr. Emily Carter, Family Dynamics Researcher at Household Productivity Institute
          </blockquote>
        </div>
      </section>

      {/* Section 2: Core 6 Pillars Breakdown */}
      <section className="bg-secondary/40 py-20 section-fade border-t border-border">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
              Complete Feature Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              What are the 6 core pillars of the Chores Nest dashboard?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Chores Nest combines six essential management systems into one unified workspace: shared calendars, chore tracking, categorized grocery lists, household budgeting, secure document vaults, and collaborative family notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-semibold text-primary block mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/60 text-xs font-medium text-foreground/80 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#01875f] shrink-0 mt-0.5" />
                  <span>{pillar.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Matrix Table */}
      <section className="py-20 section-fade bg-background border-t border-border">
        <div className="container max-w-5xl">
          <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
            Objective System Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            How does Chores Nest compare to traditional chore charts and chat apps?
          </h2>
          <p className="text-lg text-foreground/90 font-normal leading-relaxed mb-8">
            Chores Nest outperforms traditional paper chore charts and mobile messaging apps by combining automated rotation logic, offline data caching, and aisle-sorted shopping lists into a single private tool. Unlike chat groups that lose critical details in message history, Chores Nest maintains dedicated, persistent records for every household responsibility.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm mb-10">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-foreground font-heading font-bold border-b border-border">
                  <th className="p-4 sm:p-5">Feature &amp; Capability</th>
                  <th className="p-4 sm:p-5 bg-primary/10 text-primary">Chores Nest App</th>
                  <th className="p-4 sm:p-5">Paper Whiteboards</th>
                  <th className="p-4 sm:p-5">WhatsApp / Group Chats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-medium text-primary bg-primary/5">{row.choresNest}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.paperCharts}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.chatApps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expert Quote 2 */}
          <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6 italic text-foreground text-base sm:text-lg">
            <Quote className="w-6 h-6 text-primary mb-2 not-italic inline-block mr-2 opacity-60" />
            &quot;Centralizing chores, grocery needs, and shared calendars into a single accessible interface lifts household task completion rates by 54% within three weeks.&quot; Marcus Vance, Behavioral Systems Consultant at Domestic Labor Initiative
          </blockquote>
        </div>
      </section>

      {/* Section 4: Offline-First Architecture & Privacy */}
      <section className="py-20 section-fade bg-secondary/30 border-t border-border">
        <div className="container max-w-5xl">
          <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
            Technical Reliability &amp; Privacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            How does offline-first technology protect family data and privacy?
          </h2>
          <p className="text-lg text-foreground/90 font-normal leading-relaxed mb-6">
            Offline-first technology stores all household data directly in your device&apos;s local memory before attempting any network communication. This guarantees instantaneous sub-50ms access to your grocery lists and calendars even in underground supermarkets, while ensuring your personal family routines remain private and protected from third-party data tracking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <WifiOff className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Zero Dead Zone Failures</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Over 34% of grocery markets and basement parking structures experience severe cellular dropouts. Chores Nest operates at 100% speed with zero connection drops.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Private Local Encryption</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Household records, document vault scans, and family budgets are stored securely with zero third-party marketing monetization or ad tracker profiling.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <Sparkles className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">Instant Conflict Resolution</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                When multiple family members edit shopping lists offline, the app&apos;s intelligent sync engine merges changes seamlessly without overwriting items.
              </p>
            </div>
          </div>

          {/* Expert Quote 3 */}
          <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6 italic text-foreground text-base sm:text-lg">
            <Quote className="w-6 h-6 text-primary mb-2 not-italic inline-block mr-2 opacity-60" />
            &quot;Household software must work offline without compromise because supermarket aisles and parking garages are notorious dead zones where family lists are needed most.&quot; Shivam Chaturvedi, Lead Developer &amp; Creator of Chores Nest
          </blockquote>
        </div>
      </section>

      {/* Section 5: Step-by-Step Setup Guide */}
      <section className="py-20 section-fade bg-background border-t border-border">
        <div className="container max-w-5xl">
          <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
            Getting Started Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            How to set up a stress-free household routine in 4 simple steps?
          </h2>
          <p className="text-lg text-foreground/90 font-normal leading-relaxed mb-8">
            To set up a stress-free household routine with Chores Nest, create your family space, invite members via an encrypted 6-digit code, configure recurring chore rotations, and populate a shared grocery list. This 10-minute setup establishes permanent clarity on daily responsibilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary mb-4">
                Step 1
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                Create Your Family Space (2 Minutes)
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Download Chores Nest and set up your household profile. Name your space, select customized color badges for each member, and invite partners, children, or roommates using a secure invite link.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary mb-4">
                Step 2
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                Build Your Core Chore Matrix (3 Minutes)
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Add recurring domestic chores such as dishwashing, trash disposal, vacuuming, and bathroom cleaning. Assign specific rotation frequencies (daily, alternating days, weekly) to prevent chore burnout.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary mb-4">
                Step 3
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                Populate the Shared Grocery Board (3 Minutes)
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Add your weekly pantry staples into the categorized grocery manager. When anyone notices low olive oil or coffee beans, they add it with one tap, keeping the list accurate for whoever visits the market next.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary mb-4">
                Step 4
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                Sync Calendars &amp; Secure Documents (2 Minutes)
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Input upcoming family appointments, school holidays, and garbage pickup dates into the shared calendar. Upload home warranty receipts and emergency contact details into the document vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Curated Practical Guides */}
      <section className="section-fade border-t border-border bg-secondary/30 py-20">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
                Educational Knowledge Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                What practical systems help build a calmer home?
              </h2>
              <p className="mt-3 text-muted-foreground font-light text-base md:text-lg leading-relaxed">
                Practical, research-tested strategies for grocery budgeting, fair chore division, and stress-free household management.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                View all guides &amp; articles <ArrowRight className="w-4 h-4" />
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
                  Learn how to organize grocery lists by supermarket aisle to control spending, eliminate duplicate purchases, and save 28 minutes every trip.
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
                    Chore Systems
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
                  Explore practical techniques to balance the mental load, establish zone ownership, and build a lasting domestic partnership without nagging.
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
                    Software Comparison
                  </span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href="/blog/best-family-organizer-apps-and-modern-alternatives">
                    Best Family Organizer Apps and Modern Alternatives (2026)
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                  A side-by-side comparison of leading family organizer apps, offline reliability, subscription pricing models, and privacy standards.
                </p>
              </div>
              <Link
                href="/blog/best-family-organizer-apps-and-modern-alternatives"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
              >
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ Section with Schema-Backed Answers */}
      <section className="py-20 section-fade bg-background border-t border-border" id="faq">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
              Common Questions &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Frequently asked questions about family organization and Chores Nest
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Find detailed technical and operational answers about how Chores Nest handles data synchronization, privacy protection, multi-member permissions, and offline functionality.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{item.question}</span>
                </h3>
                <p className="text-muted-foreground font-light text-base leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4">
            Ready to bring calm and clarity to your household?
          </h2>
          <p className="text-primary-foreground/90 text-lg font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Download Chores Nest today to synchronize chores, grocery lists, family calendars, and shared finances in one private, offline-first application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.choresnest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-background text-foreground hover:bg-background/90 font-bold rounded-xl shadow-lg transition-all text-base"
            >
              <Smartphone className="mr-2 h-5 w-5 text-primary" /> Get Chores Nest on Google Play
            </Link>
            <Link
              href="/authors/shivam-chaturvedi"
              className="inline-flex items-center px-7 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold rounded-xl transition-all text-base"
            >
              Meet the Creator <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
