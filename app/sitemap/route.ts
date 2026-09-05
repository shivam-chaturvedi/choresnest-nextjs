import { canonicalUrl } from "@/lib/seo";
import { FEATURE_LIST } from "@/lib/features";

const FEATURE_PATHS = FEATURE_LIST.map((feature) => `/features/${feature.slug}`);
const PUBLIC_PATHS = [
  "/",
  "/about",
  "/features",
  "/support",
  "/help",
  "/faq",
  "/getting-started",
  "/how-it-works",
  "/community-guidelines",
  "/delete-account",
  "/privacy-policy",
  "/terms-of-use",
  ...FEATURE_PATHS,
];

export function GET() {
  const lastMod = new Date().toISOString();
  const urls = PUBLIC_PATHS.map((path) => {
    return `  <url>\n    <loc>${canonicalUrl(path)}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
  }).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
