import { NextResponse } from "next/server";
import { canonicalUrl } from "@/lib/seo";
import { FEATURE_LIST } from "@/lib/features";
import { BLOG_POSTS } from "@/lib/blogs";

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/for-couples", priority: "0.9", changefreq: "weekly" },
  { path: "/for-families", priority: "0.9", changefreq: "weekly" },
  { path: "/for-roommates", priority: "0.9", changefreq: "weekly" },
  { path: "/tools/grocery-list-maker", priority: "0.95", changefreq: "weekly" },
  { path: "/tools/chore-chart-generator", priority: "0.95", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/features", priority: "0.9", changefreq: "weekly" },
  { path: "/support", priority: "0.7", changefreq: "monthly" },
  { path: "/help", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/getting-started", priority: "0.8", changefreq: "monthly" },
  { path: "/how-it-works", priority: "0.8", changefreq: "monthly" },
  { path: "/community-guidelines", priority: "0.5", changefreq: "monthly" },
  { path: "/delete-account", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/terms-of-use", priority: "0.5", changefreq: "monthly" },
];

const featureRoutes = FEATURE_LIST.map((feature) => ({
  path: `/features/${feature.slug}`,
  priority: "0.8",
  changefreq: "weekly",
}));

const blogRoutes = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: "0.85",
  changefreq: "monthly",
}));

const formatUrlEntry = (entry: { path: string; priority: string; changefreq: string }) => {
  const loc = canonicalUrl(entry.path);
  return `
    <url>
      <loc>${loc}</loc>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>`;
};

export const dynamic = "force-static";
export async function GET() {
  const allRoutes = [...staticRoutes, ...featureRoutes, ...blogRoutes];
  const entries = allRoutes.map(formatUrlEntry).join("");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
