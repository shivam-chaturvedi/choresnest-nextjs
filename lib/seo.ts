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

export const FOUNDER_NAME = "Shivam Chaturvedi";
export const FOUNDER_TITLE = "Founder & Lead Developer";
export const FOUNDER_URL = `${SITE_URL}/authors/shivam-chaturvedi`;
export const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/shivam-chaturvedi03/";

export const ORGANIZATION_SAME_AS = [
  "https://play.google.com/store/apps/details?id=com.choresnest",
  "https://www.linkedin.com/in/shivam-chaturvedi03/",
  "https://www.producthunt.com/products/chores-nest-family-organizer",
  "https://launchbuff.com/products/chores-nest-family-organizer-zeujn2",
  "https://viberank.dev/apps/Chores%20Nest",
  "https://github.com/shivam-chaturvedi",
  "https://x.com/choresnest",
];

export const founderPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: FOUNDER_NAME,
  jobTitle: FOUNDER_TITLE,
  url: FOUNDER_URL,
  image: `${SITE_URL}/authors/shivam-chaturvedi.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/shivam-chaturvedi03/",
    "https://github.com/shivam-chaturvedi",
  ],
  worksFor: {
    "@id": `${SITE_URL}/#organization`,
  },
  knowsAbout: [
    "Household Management Systems",
    "Family Productivity Tools",
    "Offline-First Architecture",
    "Android Development",
    "Full-Stack Web Development",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/app_icon.png`,
  image: `${SITE_URL}/app_icon.png`,
  description: DEFAULT_DESCRIPTION,
  founder: {
    "@id": `${SITE_URL}/#founder`,
  },
  sameAs: ORGANIZATION_SAME_AS,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@choresnest.com",
      contactType: "Customer Support",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Android",
  url: SITE_URL,
  downloadUrl: "https://play.google.com/store/apps/details?id=com.choresnest",
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  author: {
    "@id": `${SITE_URL}/#founder`,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  screenshot: `${SITE_URL}/chores_nest_feature_graphic.png`,
  featureList: [
    "Shared Family Calendar with Color-Coded Roles",
    "Chores & Task Management with Rotation Schedules",
    "Shared Grocery & Shopping Lists with Instant Sync",
    "Secure Household Document Vault",
    "Family Expense and Finance Tracker",
    "Collaborative Notes and Household Journals",
    "Offline-First Storage with Auto-Sync",
  ],
};

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
    "@id": `${SITE_URL}/#website`,
  },
});

