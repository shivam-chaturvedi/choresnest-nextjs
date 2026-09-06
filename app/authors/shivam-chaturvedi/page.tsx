import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Code, Github, Linkedin, Mail, ShieldCheck, Users } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS } from "@/lib/blogs";
import { canonicalUrl, FOUNDER_NAME, FOUNDER_TITLE, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const description =
  "Shivam Chaturvedi is the Founder and Lead Developer of Chores Nest. Learn about his background in building privacy-first family productivity software and household organization tools.";

const authorPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: FOUNDER_NAME,
  jobTitle: FOUNDER_TITLE,
  url: `${SITE_URL}/authors/shivam-chaturvedi`,
  image: `${SITE_URL}/authors/shivam-chaturvedi.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/shivam-chaturvedi03/",
    "https://github.com/shivam-chaturvedi",
    "https://play.google.com/store/apps/details?id=com.choresnest",
    "https://www.producthunt.com/products/chores-nest-family-organizer",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
  },
  knowsAbout: [
    "Household Task & Chore Management",
    "Shared Family Calendars & Synchronization",
    "Offline-First Software Architecture",
    "Android & Mobile App Development",
    "Privacy-Conscious Data Storage",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Shivam Chaturvedi",
      item: `${SITE_URL}/authors/shivam-chaturvedi`,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Shivam Chaturvedi – Founder & Lead Developer of Chores Nest",
  },
  description,
  keywords: [
    "Shivam Chaturvedi",
    "Shivam Chaturvedi Chores Nest",
    "Chores Nest Founder",
    "Chores Nest Developer",
    "Family organizer developer",
  ],
  alternates: {
    canonical: canonicalUrl("/authors/shivam-chaturvedi"),
  },
  openGraph: {
    title: "Shivam Chaturvedi – Founder & Lead Developer of Chores Nest",
    description,
    url: canonicalUrl("/authors/shivam-chaturvedi"),
    siteName: SITE_NAME,
    type: "profile",
    images: [{ url: `${SITE_URL}/authors/shivam-chaturvedi.jpg`, width: 400, height: 400, alt: "Shivam Chaturvedi" }],
  },
  twitter: {
    title: "Shivam Chaturvedi – Founder & Lead Developer of Chores Nest",
    description,
    card: "summary",
    images: [`${SITE_URL}/authors/shivam-chaturvedi.jpg`],
  },
};

export default function AuthorProfilePage() {
  const articles = BLOG_POSTS;

  return (
    <div className="w-full py-12 md:py-20">
      <StructuredData id="author-person-schema" data={authorPersonSchema} />
      <StructuredData id="author-breadcrumb-schema" data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-4xl">
        {/* Header / Bio Card */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/20 bg-secondary flex items-center justify-center shadow-md">
              <Image
                src="/authors/shivam-chaturvedi.jpg"
                alt="Shivam Chaturvedi - Founder of Chores Nest"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <span className="inline-block text-xs uppercase font-bold tracking-widest text-primary mb-2 bg-primary/10 px-3 py-1 rounded-full">
                Founder &amp; Developer
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
                Shivam Chaturvedi
              </h1>
              <p className="mt-1 text-lg text-primary font-medium">
                Creator of <Link href="https://play.google.com/store/apps/details?id=com.choresnest" target="_blank" rel="noopener noreferrer" className="hover:underline">Chores Nest</Link>
              </p>

              <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                Shivam is a software engineer and the creator of <Link href="https://play.google.com/store/apps/details?id=com.choresnest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Chores Nest</Link>. He enjoys turning ideas and everyday problems into useful digital products, from mobile and web apps to AI-powered tools and automation. Alongside building his own products, he works with people and businesses to develop apps, improve their web presence and SEO, and build practical agentic AI solutions. If you have an idea or a problem worth solving, feel free to connect with him.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <Link
                  href="https://www.linkedin.com/in/shivam-chaturvedi03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" /> LinkedIn
                </Link>
                <Link
                  href="https://github.com/shivam-chaturvedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.choresnest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Code className="w-4 h-4" /> Google Play
                </Link>
                <a
                  href="mailto:support@choresnest.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" /> support@choresnest.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Architectural Philosophy */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Family-First Design
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Every workflow is tested for real household dynamics, ensuring smooth coordination between partners, parents, children, and roommates.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Offline-First &amp; Private
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Data is stored directly on your device first, operating seamlessly without internet and keeping family information strictly private.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Practical Systems
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Authoring step-by-step frameworks on domestic labor balance, meal planning systems, and stress-free shopping routines.
            </p>
          </div>
        </div>

        {/* Articles Written by Shivam */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Articles &amp; Guides by Shivam
            </h2>
            <span className="text-sm text-muted-foreground">
              {articles.length} Guides Published
            </span>
          </div>

          <div className="space-y-4">
            {articles.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary shrink-0 group-hover:translate-x-1 transition-transform"
                  >
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
