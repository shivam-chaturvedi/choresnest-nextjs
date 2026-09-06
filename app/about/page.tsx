import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, WifiOff } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description =
  "Learn more about Chores Nest, the family organizer that simplifies household schedules, chores, and collaboration for every family member.";

const aboutSchema = createWebPageSchema({
  title: "About Chores Nest – Our Family Organization Mission & Story",
  description,
  url: canonicalUrl("/about"),
});

export const metadata: Metadata = {
  title: {
    absolute: "About Chores Nest – Our Family Organization Mission & Story",
  },
  description,
  keywords: [...DEFAULT_KEYWORDS, "about chores nest", "family collaboration mission", "household planning app"],
  alternates: {
    canonical: canonicalUrl("/about"),
  },
  openGraph: {
    title: "About Chores Nest – Our Family Organization Mission & Story",
    description,
    url: canonicalUrl("/about"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "About Chores Nest – Our Mission & Family Productivity Story",
    card: "summary_large_image",
    images: [OG_IMAGE.url],
    description,
  },
};

const philosophy = [
  { icon: WifiOff, title: "Offline First", desc: "The app works even without internet and syncs automatically when you're back online." },
  { icon: Shield, title: "Privacy Focused", desc: "Your family's data belongs to you. We prioritize security and data ownership." },
  { icon: Users, title: "Family Centered", desc: "Every feature is designed for real household needs and shared family use." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="about-webpage-schema" data={aboutSchema} />
      <section className="border-b bg-secondary/30">
        <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20 text-left">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground">About Chores Nest</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-full">
            Simplifying family organization, one household at a time.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <h2 className="text-2xl font-heading text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Chores Nest was created to simplify family organization and reduce the stress of managing everyday household responsibilities. We believe that when families have a clear, shared system, daily life runs more smoothly for everyone.
          </p>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <h2 className="text-2xl font-heading text-foreground mb-4">Why It Exists</h2>
          <p className="text-muted-foreground leading-relaxed">
            Families often rely on multiple apps for calendars, grocery lists, tasks, and budgeting. This creates confusion and wastes time. Chores Nest brings everything together in one shared space, designed specifically for households to collaborate and stay on top of daily responsibilities.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <h2 className="text-2xl font-heading text-foreground mb-6">Design Philosophy</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {philosophy.map((item) => (
              <div key={item.title} className="bg-card p-6 border border-border rounded-xl">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center mb-3 rounded-xl">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <h2 className="text-2xl font-heading text-foreground mb-4">The Creator &amp; Engineering</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Chores Nest is designed and built by <Link href="/authors/shivam-chaturvedi" className="font-medium text-foreground hover:text-primary underline underline-offset-4">Shivam Chaturvedi</Link>. Motivated by the friction of managing household logistics across disjointed tools, Shivam engineered Chores Nest as an offline-first, shared family workspace that values user privacy above all else.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/authors/shivam-chaturvedi"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Meet the Founder &amp; Read Bio →
            </Link>
            <a
              href="mailto:support@choresnest.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card text-foreground font-medium rounded-lg text-sm hover:border-primary/40 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
