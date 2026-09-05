import type { Metadata } from "next";
import { Shield, Users, WifiOff } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description =
  "Learn more about Chores Nest, the family organizer that simplifies household schedules, chores, and collaboration for every family member.";

const aboutSchema = createWebPageSchema({
  title: "About | Chores Nest",
  description,
  url: canonicalUrl("/about"),
});

export const metadata: Metadata = {
  title: "About",
  description,
  keywords: [...DEFAULT_KEYWORDS, "family collaboration mission", "household planning app"],
  alternates: {
    canonical: canonicalUrl("/about"),
  },
  openGraph: {
    title: "About Chores Nest",
    description,
    url: canonicalUrl("/about"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "About Chores Nest",
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

      <section>
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
    </div>
  );
}
