import { SITE_URL } from "@/lib/seo";

const ROBOTS = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\nHost: ${SITE_URL}\n`;

export function GET() {
  return new Response(ROBOTS, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
