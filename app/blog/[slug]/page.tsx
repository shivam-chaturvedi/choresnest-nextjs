import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCheck, CheckCircle2, Lightbulb, Linkedin, ListChecks } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blogs";
import { canonicalUrl, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const postUrl = canonicalUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: [post.targetKeyword, ...post.secondaryKeywords],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.metaDescription,
      url: postUrl,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
      images: [OG_IMAGE],
    },
    twitter: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.metaDescription,
      card: "summary_large_image",
      images: [OG_IMAGE.url],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = canonicalUrl(`/blog/${post.slug}`);

  // Find adjacent posts for bottom navigation
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: post.author,
      url: `${SITE_URL}/authors/shivam-chaturvedi`,
      jobTitle: "Founder & Lead Developer",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/app_icon.png`,
      },
    },
    keywords: [post.targetKeyword, ...post.secondaryKeywords].join(", "),
  };

  const breadcrumbStructuredData = {
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <article className="w-full py-10 md:py-16">
      <StructuredData id={`article-schema-${post.slug}`} data={articleStructuredData} />
      <StructuredData id={`breadcrumb-schema-${post.slug}`} data={breadcrumbStructuredData} />

      {/* Main container constrained to 1000-1100px for reading comfort */}
      <div className="mx-auto w-full max-w-[1050px]">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>

        {/* 1. Article Header */}
        <header className="mb-10 md:mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-extrabold tracking-tight text-foreground leading-[1.12] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground">
            <span>Written by</span>
            <Link href="/authors/shivam-chaturvedi" className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4">
              {post.author}
            </Link>
            <span className="text-muted-foreground/60">•</span>
            <span>{post.date}</span>
            <span className="text-muted-foreground/60">•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="w-full h-px bg-border mt-8" />
        </header>

        {/* 2. Direct Quick Answer Box for AI Extractability & Immediate Answer */}
        {post.quickAnswer && (
          <div className="mb-10 rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
              <CheckCheck className="w-4 h-4" /> Quick Answer &amp; Key Summary
            </div>
            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
              {post.quickAnswer}
            </p>
          </div>
        )}

        {/* 3. Article Intro / Lead Paragraph */}
        <div className="text-xl sm:text-2xl text-foreground font-light leading-relaxed mb-12 border-l-2 border-primary/60 pl-6 italic">
          {post.excerpt}
        </div>

        {/* 4. Article Content Sections */}
        <div className="space-y-12 md:space-y-16">
          {post.sections.map((section, idx) => (
            <section key={idx} className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground mb-6">
                {section.heading}
              </h2>

              {section.subheading && (
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-4">
                  {section.subheading}
                </h3>
              )}

              <div className="space-y-5 text-lg sm:text-[20px] text-muted-foreground font-light leading-[1.75]">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Optional Key Takeaway Callout */}
              {section.keyTakeaway && (
                <div className="my-8 rounded-xl bg-secondary/70 border border-border p-5 sm:p-6 text-foreground">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase font-bold tracking-wider text-primary mb-1">
                        Key Takeaway
                      </span>
                      <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
                        {section.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Optional Bullet List */}
              {section.bulletList && section.bulletList.length > 0 && (
                <div className="my-6 space-y-3 pl-2">
                  {section.bulletList.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                      <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Ordered List */}
              {section.orderedList && section.orderedList.length > 0 && (
                <div className="my-6 space-y-3 pl-1">
                  {section.orderedList.map((item, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-3.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                        {oIdx + 1}
                      </span>
                      <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Checklist */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="my-6 space-y-3 bg-card border border-border rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <ListChecks className="w-4 h-4 text-primary" /> Actionable Checklist
                  </div>
                  {section.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-foreground font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Optional Comparison Table */}
          {post.comparisonTable && (
            <section className="scroll-mt-24 my-10 md:my-14">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                The Quick Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border bg-card">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {post.comparisonTable.headers.map((header, hIdx) => (
                        <th
                          key={hIdx}
                          className="px-5 py-4 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm sm:text-base">
                    {post.comparisonTable.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          row.method.includes("Chores Nest")
                            ? "bg-primary/5 font-medium"
                            : "hover:bg-secondary/30 transition-colors"
                        }
                      >
                        <td className="px-5 py-4 text-foreground font-semibold">
                          {row.method}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{row.shared}</td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {row.preventsForgottenItems}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        {/* 4. Subtle, Premium CTA */}
        <div className="my-16 md:my-20 rounded-2xl border border-border bg-secondary/40 p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight mb-3">
            {post.cta.heading}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl mx-auto mb-8">
            {post.cta.subtext}
          </p>
          <Link
            href={post.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#016848,0_15px_20px_-3px_rgba(1,135,95,0.5)] active:translate-y-1 active:shadow-[0_0px_0_0_#016848,0_5px_10px_-3px_rgba(1,135,95,0.4)] transition-all text-base"
          >
            {post.cta.buttonText}
          </Link>
        </div>

        {/* 5. Topic Cluster & Internal Linking Hub */}
        {post.cluster && post.relatedLinks && post.relatedLinks.length > 0 && (
          <div className="my-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
              <BookOpen className="w-4 h-4" /> Part of the {post.cluster} System
            </div>
            <h4 className="text-xl font-heading font-bold text-foreground mb-4">
              Related Guides, Features &amp; Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/40 hover:bg-secondary/60 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-sm font-heading font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      {link.title} <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                    </span>
                    <p className="text-xs text-muted-foreground mt-1 font-light leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 6. Author Bio Box for E-E-A-T */}
        <div className="my-12 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden border border-border bg-secondary flex items-center justify-center shadow-sm">
            <Image
              src="/authors/shivam-chaturvedi.jpg"
              alt="Shivam Chaturvedi"
              width={72}
              height={72}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h4 className="text-base font-heading font-bold text-foreground">
                Written by <Link href="/authors/shivam-chaturvedi" className="text-primary hover:underline">{post.author}</Link>
              </h4>
              <span className="text-xs text-muted-foreground">
                Founder &amp; Developer, <Link href="https://play.google.com/store/apps/details?id=com.choresnest" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground/80">Chores Nest</Link>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
              Shivam is a software engineer and the creator of <Link href="https://play.google.com/store/apps/details?id=com.choresnest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Chores Nest</Link>. He enjoys turning ideas and everyday problems into useful digital products, from mobile and web apps to AI-powered tools and practical automation.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link
                href="/authors/shivam-chaturvedi"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                View author profile &amp; all guides →
              </Link>
              <Link
                href="https://www.linkedin.com/in/shivam-chaturvedi03/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /> LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Topic Keywords */}
        <div className="border-t border-border pt-8 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mr-2">
              Topics:
            </span>
            {[post.targetKeyword, ...post.secondaryKeywords].map((kw) => (
              <span
                key={kw}
                className="text-xs font-medium bg-secondary text-muted-foreground px-3 py-1 rounded-md"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* 7. Adjacent Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border pt-8">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <span className="text-xs text-muted-foreground font-medium mb-1">
                ← Previous Article
              </span>
              <span className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-col items-end text-right p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <span className="text-xs text-muted-foreground font-medium mb-1">
                Next Article →
              </span>
              <span className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {nextPost.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}
