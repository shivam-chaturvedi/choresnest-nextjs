import { canonicalUrl } from "@/lib/seo";
import { FEATURE_LIST } from "@/lib/features";
import { BLOG_POSTS } from "@/lib/blogs";

const FEATURE_PATHS = FEATURE_LIST.map((feature) => ({
  path: `/features/${feature.slug}`,
  lastMod: new Date().toISOString(),
  priority: "0.8",
  changefreq: "weekly",
}));

const BLOG_PATHS = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  lastMod: post.isoDate,
  priority: "0.85",
  changefreq: "monthly",
}));

const USE_CASE_PATHS = [
  { path: "/for-couples", priority: "0.9", changefreq: "weekly" },
  { path: "/for-families", priority: "0.9", changefreq: "weekly" },
  { path: "/for-roommates", priority: "0.9", changefreq: "weekly" },
];

const TOOL_PATHS = [
  { path: "/tools/grocery-list-maker", priority: "0.95", changefreq: "weekly" },
  { path: "/tools/chore-chart-generator", priority: "0.95", changefreq: "weekly" },
];

const STATIC_PATHS = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
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

export function GET() {
  const defaultLastMod = new Date().toISOString();

  const allEntries = [
    ...STATIC_PATHS.map((item) => ({
      ...item,
      lastMod: defaultLastMod,
    })),
    ...USE_CASE_PATHS.map((item) => ({
      ...item,
      lastMod: defaultLastMod,
    })),
    ...TOOL_PATHS.map((item) => ({
      ...item,
      lastMod: defaultLastMod,
    })),
    ...FEATURE_PATHS,
    ...BLOG_PATHS,
  ];

  const urls = allEntries
    .map((entry) => {
      return `  <url>\n    <loc>${canonicalUrl(entry.path)}</loc>\n    <lastmod>${entry.lastMod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
