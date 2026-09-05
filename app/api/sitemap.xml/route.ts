import { NextResponse } from "next/server";
import { canonicalUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/about",
  "/community-guidelines",
  "/delete-account",
  "/privacy-policy",
  "/support",
  "/terms-of-use",
];

const formatUrlEntry = (path: string) => {
  const loc = canonicalUrl(path);
  const priority = path === "/" ? "1.0" : "0.6";

  return `
    <url>
      <loc>${loc}</loc>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`;
};

export const dynamic = "force-static";
export async function GET() {
  const entries = staticRoutes.map(formatUrlEntry).join("");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
