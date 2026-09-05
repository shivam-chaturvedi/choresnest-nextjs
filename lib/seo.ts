export const SITE_NAME = "Chores Nest";

export const SITE_URL = "https://choresnest.com";

export const DEFAULT_DESCRIPTION =
  "Chores Nest is a family organizer app that helps households manage chores, calendars, shopping lists, finances, notes, and documents in one secure shared workspace.";

export const DEFAULT_KEYWORDS = [
  "family organizer app",
  "family planner app",
  "household management app",
  "shared family calendar",
  "family chores app",
  "family task manager",
  "family finance tracker",
  "family document vault",
  "family productivity app",
  "Chores Nest",
  "Chores Nest app",
  "Chores Nest family organizer",
  "Chores Nest calendar",
  "Chores Nest chores manager",
  "Chores Nest finance tracker",
];

export const mergeKeywords = (...lists: string[][]) => Array.from(new Set(lists.flat()));

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Chores Nest share preview",
};

export const canonicalUrl = (path: string = "") => `${SITE_URL}${path}`;

type WebPageSchemaProps = {
  title: string;
  description: string;
  url: string;
};

export const createWebPageSchema = ({ title, description, url }: WebPageSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
});
