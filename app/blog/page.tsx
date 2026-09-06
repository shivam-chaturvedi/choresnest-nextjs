import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS } from "@/lib/blogs";
import { canonicalUrl, DEFAULT_KEYWORDS, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog – Practical Guides for Household Organization",
  description:
    "Explore practical guides, grocery list systems, chore strategies, meal planning frameworks, and budget tracking tips for organized families.",
  keywords: [
    ...DEFAULT_KEYWORDS,
    "grocery list tips",
    "how to make grocery list",
    "grocery list template",
    "shared grocery list app",
    "chore chart guide",
    "weekly meal planner",
    "household budget tracker",
    "family finance tracker",
  ],
  alternates: {
    canonical: canonicalUrl("/blog"),
  },
  openGraph: {
    title: "Chores Nest Blog – Practical Guides for Household Organization",
    description:
      "Explore practical guides, grocery list systems, chore strategies, meal planning frameworks, and budget tracking tips for organized families.",
    url: canonicalUrl("/blog"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest Blog – Practical Guides for Household Organization",
    card: "summary_large_image",
    images: [OG_IMAGE.url],
    description:
      "Explore practical guides, grocery list systems, chore strategies, meal planning frameworks, and budget tracking tips for organized families.",
  },
};

const blogListStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Chores Nest Blog",
  description:
    "Practical guides, grocery list systems, chore strategies, meal planning frameworks, and budget tracking tips for organized families.",
  url: canonicalUrl("/blog"),
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/app_icon.png`,
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    url: canonicalUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Person",
      name: post.author,
    },
  })),
};

export default function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <div className="w-full py-12 md:py-16">
      <StructuredData id="blog-listing-schema" data={blogListStructuredData} />

      {/* Header section */}
      <div className="max-w-[1100px] mx-auto text-left mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          Household Knowledge &amp; Guides
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground">
          Chores Nest Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
          Thoughtful, human-first guides on grocery planning, chore routines, meal schedules, and household finances to help your family live with greater clarity and calm.
        </p>
      </div>

      {/* Topic Clusters Grid */}
      <div className="max-w-[1100px] mx-auto mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">Topic Cluster</span>
          <h3 className="font-heading font-bold text-foreground text-base mb-1.5">Shared Grocery Lists</h3>
          <p className="text-xs text-muted-foreground font-light mb-3">Aisle-by-aisle shopping systems, note app alternatives, and free tools.</p>
          <Link href="/tools/grocery-list-maker" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Free List Maker Tool →
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">Topic Cluster</span>
          <h3 className="font-heading font-bold text-foreground text-base mb-1.5">Chores &amp; Tasks</h3>
          <p className="text-xs text-muted-foreground font-light mb-3">Fair couple chore division, sustainable charts, and rotation rules.</p>
          <Link href="/tools/chore-chart-generator" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Chore Chart Tool →
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">Topic Cluster</span>
          <h3 className="font-heading font-bold text-foreground text-base mb-1.5">Family Finance</h3>
          <p className="text-xs text-muted-foreground font-light mb-3">Daily expense logs, flexible budget envelopes, and cash leak audits.</p>
          <Link href="/features/finances" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Finance Tracker →
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">Topic Cluster</span>
          <h3 className="font-heading font-bold text-foreground text-base mb-1.5">Family Routines</h3>
          <p className="text-xs text-muted-foreground font-light mb-3">15-minute meal plans, organizer comparisons, and shared calendars.</p>
          <Link href="/features/calendar" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Shared Calendar →
          </Link>
        </div>
      </div>

      {/* Featured post */}
      {featuredPost && (
        <div className="max-w-[1100px] mx-auto mb-16">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-secondary/40 hover:bg-secondary/70 border border-border rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-200"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
              <span className="font-semibold text-primary uppercase tracking-wide bg-primary/10 px-2.5 py-0.5 rounded-md">
                {featuredPost.category}
              </span>
              <span>•</span>
              <span className="font-medium text-foreground">{featuredPost.author}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
              {featuredPost.title}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>

            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
              Read Article <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      )}

      {/* Grid of remaining posts */}
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-8 border-b pb-3">
          All Articles &amp; Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 sm:p-7 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="font-medium text-primary bg-secondary px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.secondaryKeywords.slice(0, 2).map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground/80 bg-secondary/60 px-2 py-0.5 rounded"
                    >
                      <Tag className="w-2.5 h-2.5 opacity-60" />
                      {kw}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-0.5 transition-transform"
                >
                  Read full guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
