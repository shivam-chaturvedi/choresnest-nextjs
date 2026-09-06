import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  Folder,
  Lock,
  MapPin,
  PieChart,
  Pin,
  Repeat,
  RefreshCw,
  RotateCcw,
  ScanLine,
  Search,
  Smartphone,
  Tag,
  TrendingUp,
  Users,
  Type,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import {
  canonicalUrl,
  createWebPageSchema,
  DEFAULT_KEYWORDS,
  OG_IMAGE,
  mergeKeywords,
} from "@/lib/seo";
import { FEATURE_LIST, getFeatureBySlug } from "@/lib/features";

type FeatureDetail = {
  slug: string;
  title: string;
  description: string;
  features: { icon: ComponentType<SVGProps<SVGSVGElement>>; text: string }[];
  example?: string;
  images?: { src: string; alt: string }[];
  docs?: string[];
};

const featureDetails: Record<string, FeatureDetail> = {
  calendar: {
    slug: "calendar",
    title: "Shared Family Calendar",
    description:
      "Keep every family member on the same schedule and track school events, medical appointments, and color-coded family activities with real-time sync in Chores Nest.",
    features: [
      { icon: Eye, text: "Day, week, and month views" },
      { icon: Calendar, text: "Color-coded events by family member" },
      { icon: Repeat, text: "Recurring events" },
      { icon: MapPin, text: "Location reminders" },
      { icon: Bell, text: "Custom notifications" },
    ],
    example: "Track school schedules, sports practices, doctor appointments, and family events all in one place.",
  },
  tasks: {
    slug: "tasks",
    title: "Tasks and Chores",
    description:
      "Assign tasks to family members, automate chore rotations, and monitor completion with priorities, deadlines, and reminders in Chores Nest.",
    features: [
      { icon: Users, text: "Assign tasks to family members" },
      { icon: Clock, text: "Set priorities and deadlines" },
      { icon: Repeat, text: "Recurring chores" },
      { icon: RotateCcw, text: "Chore rotation system" },
      { icon: CheckCircle, text: "Task completion tracking" },
    ],
    example: "Assign weekly chores like cleaning, laundry, or dishes to keep the household running smoothly.",
  },
  lists: {
    slug: "lists",
    title: "Shared Lists",
    description:
      "Create and share synchronized grocery, shopping, and to-do lists with your family, partner, or roommates using Chores Nest.",
    features: [
      { icon: RefreshCw, text: "Real-time updates across devices" },
      { icon: Tag, text: "Categories and quantities" },
      { icon: Smartphone, text: "Swipe to mark items complete" },
      { icon: Search, text: "Reusable list templates" },
    ],
    images: [{ src: "/feature_lists.png", alt: "Shared grocery list" }],
  },
  vault: {
    slug: "vault",
    title: "Secure Document Vault",
    description:
      "Store important household documents, IDs, medical records, receipts, and warranties with encrypted offline storage in Chores Nest.",
    features: [
      { icon: ScanLine, text: "Document scanning with OCR" },
      { icon: Lock, text: "Secure encrypted storage" },
      { icon: Search, text: "Search, filters, and tags" },
      { icon: Bell, text: "Expiration and service reminders" },
    ],
    images: [
      { src: "/feature_vault.png", alt: "Vault overview" },
      { src: "/feature_vault_details.png", alt: "Document details" },
    ],
    docs: [
      "Passports",
      "Insurance",
      "Receipts",
      "Warranties",
      "Medical Records",
      "Certificates",
    ],
  },
  finance: {
    slug: "finance",
    title: "Finance Tracker",
    description:
      "Track shared household spending, category budgets, and family cash flow with private expense tracking in Chores Nest.",
    features: [
      { icon: DollarSign, text: "Expense tracking" },
      { icon: TrendingUp, text: "Income records and trends" },
      { icon: PieChart, text: "Budget categories and breakdown" },
      { icon: BarChart3, text: "Spending insights and savings" },
    ],
    images: [
      { src: "/feature_finance.png", alt: "Finance overview" },
      { src: "/feature_finance_breakdown.png", alt: "Spending breakdown" },
    ],
  },
  notes: {
    slug: "notes",
    title: "Notes and Family Journals",
    description:
      "Capture family recipes, home maintenance checklists, and shared notes with folders, tags, and pinned items in Chores Nest.",
    features: [
      { icon: Folder, text: "Folders and tags" },
      { icon: Type, text: "Rich text editor" },
      { icon: Search, text: "Search across notes" },
      { icon: Pin, text: "Pinned important notes" },
    ],
    images: [{ src: "/feature_notes.png", alt: "Notes feature" }],
  },
};

const FEATURE_KEYWORD_MAP: Record<string, string[]> = {
  calendar: [
    "family calendar app",
    "shared family calendar",
    "family schedule organizer",
    "household calendar app",
    "family event planner",
    "family activity planner",
    "shared family schedule",
  ],
  tasks: [
    "family chores app",
    "family task manager",
    "household chores organizer",
    "family task planning",
    "assign chores to family",
    "family task tracking",
    "shared household tasks",
  ],
  lists: [
    "family shopping list app",
    "shared grocery list app",
    "household shopping list",
    "shared grocery lists",
    "family grocery organizer",
    "smart shopping list",
  ],
  vault: [
    "family document vault",
    "secure family document storage",
    "household document manager",
    "store family documents securely",
    "family warranty tracker",
    "household document organizer",
  ],
  finance: [
    "family finance tracker",
    "household expense tracker",
    "family budget planner",
    "family spending tracker",
    "shared expense manager",
    "household finance app",
  ],
  notes: [
    "family notes app",
    "shared family notes",
    "household notes organizer",
    "family idea notes",
    "shared household notes",
    "family memo organizer",
  ],
};

export function generateStaticParams() {
  return FEATURE_LIST.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  const detail = featureDetails[slug];

  if (!feature || !detail) {
    return { title: "Feature | Chores Nest" };
  }

  const url = canonicalUrl(`/features/${feature.slug}`);
  const pageKeywords = FEATURE_KEYWORD_MAP[slug] ?? [];
  const metaTitle = `${detail.title} App for Families | Chores Nest`;

  return {
    title: {
      absolute: metaTitle,
    },
    description: detail.description,
    keywords: mergeKeywords(DEFAULT_KEYWORDS, pageKeywords),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: detail.description,
      url,
      siteName: "Chores Nest",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      title: metaTitle,
      description: detail.description,
      card: "summary_large_image",
      images: [OG_IMAGE.url],
    },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  const detail = featureDetails[slug];

  if (!feature || !detail) {
    notFound();
  }

  const url = canonicalUrl(`/features/${feature?.slug}`);
  const pageSchema = createWebPageSchema({
    title: `${detail?.title ?? "Feature"} | Chores Nest`,
    description: detail?.description ?? "",
    url,
  });

  return (
    <div className="space-y-10 px-4 md:px-6 lg:px-8 py-12">
      <StructuredData id={`${slug}-schema`} data={pageSchema} />
      <section className="space-y-4 border-b pb-8 section-fade">
        <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">{feature?.category}</p>
        <h1 className="text-4xl font-heading text-foreground">{detail?.title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">{detail?.description}</p>
        {detail?.images && (
          <div className="flex flex-wrap gap-4 pt-6">
            {detail.images.map((image) => (
              <div key={image.src} className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-[2rem] border-[5px] border-foreground/10 shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="150px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="section-fade">
        <h2 className="text-2xl font-heading text-foreground mb-4">Features</h2>
        <div className="space-y-3">
          {detail.features.map((item) => (
            <div key={item.text} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-xl">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
      {detail.docs && (
        <section className="section-fade">
          <h2 className="text-2xl font-heading text-foreground mb-4">What You Can Store</h2>
          <div className="flex flex-wrap gap-2">
            {detail.docs.map((doc) => (
              <span key={doc} className="px-4 py-2 bg-secondary text-sm text-foreground border border-border rounded-full">
                {doc}
              </span>
            ))}
          </div>
        </section>
      )}
      {detail.example && (
        <section className="p-6 bg-secondary border border-border rounded-xl section-fade">
          <h3 className="text-lg font-heading text-foreground mb-2">Example Use</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{detail.example}</p>
        </section>
      )}
      <Link href="/features" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
        <ArrowRight className="h-4 w-4 rotate-180" /> Back to features overview
      </Link>
    </div>
  );
}
