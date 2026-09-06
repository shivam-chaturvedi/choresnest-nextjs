import { SITE_URL } from "@/lib/seo";

const ROBOTS = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Diffbot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`;

export function GET() {
  return new Response(ROBOTS, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
