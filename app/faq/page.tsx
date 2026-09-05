import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import FaqAccordion from "@/components/faq-accordion";
import { canonicalUrl, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Find answers to the most common questions families ask about Chores Nest.";

const faqs = [
  { q: "How do I add family members?", a: "Open the Family Members section and tap Add Member. Each member can have their own color and icon." },
  { q: "Is my data stored in the cloud?", a: "Chores Nest stores most data locally on your device and syncs securely when needed." },
  { q: "How do I backup my data?", a: "You can export your data anytime from the Data Export section in JSON or CSV format." },
  { q: "Can multiple family members use the same account?", a: "Yes. Each household can create multiple family profiles inside the app." },
  { q: "Does Chores Nest work offline?", a: "Yes! All your data stays available even without internet. Changes sync automatically when you reconnect." },
  { q: "Is my family's data private?", a: "Absolutely. We never sell your data. Your family's information belongs to you and is protected with industry-standard security." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: "FAQ | Chores Nest",
  description,
  keywords: [...DEFAULT_KEYWORDS, "faq", "family organizer"],
  alternates: {
    canonical: canonicalUrl("/faq"),
  },
  openGraph: {
    title: "Chores Nest FAQ",
    description,
    url: canonicalUrl("/faq"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest FAQ",
    card: "summary_large_image",
    description,
    images: [OG_IMAGE.url],
  },
};

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="faq-schema" data={faqSchema} />
      <section className="bg-secondary border-b">
        <div className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl font-light">
            Common questions from families using Chores Nest.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
