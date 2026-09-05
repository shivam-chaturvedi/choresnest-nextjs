import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Mail, MessageSquare } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE, mergeKeywords } from "@/lib/seo";

const description = "Need help using Chores Nest? Browse support resources, contact our team, or visit the Help Center.";

const supportSchema = createWebPageSchema({
  title: "Support | Chores Nest",
  description,
  url: canonicalUrl("/support"),
});

export const metadata: Metadata = {
  title: "Support",
  description,
  keywords: mergeKeywords(DEFAULT_KEYWORDS, [
    "choresnest help center",
    "family organizer app help",
    "choresnest support",
    "how to use family organizer app",
    "family productivity app help",
    "household organizer help",
  ]),
  alternates: {
    canonical: canonicalUrl("/support"),
  },
  openGraph: {
    title: "Chores Nest Support",
    description,
    url: canonicalUrl("/support"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest Support",
    card: "summary_large_image",
    images: [OG_IMAGE.url],
    description,
  },
};

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="support-webpage-schema" data={supportSchema} />
      <section className="bg-secondary border-b">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">Support</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl font-light">
            Need help using Chores Nest? We are here to help with guides, FAQs, and direct support.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 max-w-3xl">
          <div className="space-y-4">
            <div className="border border-border bg-card p-6 hover:shadow-lg transition-shadow rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 rounded-xl text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-light text-foreground mb-1">Help Center</h3>
                  <p className="text-sm text-muted-foreground mb-2 font-light">Browse guides, feature tours, and FAQs.</p>
                  <Link href="/help" className="text-sm text-primary font-light hover:underline">
                    Visit Help Center →
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 hover:shadow-lg transition-shadow rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 rounded-xl text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-light text-foreground mb-1">Contact Support</h3>
                  <p className="text-sm text-muted-foreground mb-1 font-light">Email us for any assistance.</p>
                  <a href="mailto:support@choresnest.com" className="text-sm text-primary font-light hover:underline">
                    support@choresnest.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 hover:shadow-lg transition-shadow rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 rounded-xl text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-light text-foreground mb-1">Feedback</h3>
                  <p className="text-sm text-muted-foreground font-light">Send feedback directly from the app for feature suggestions or bug reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
