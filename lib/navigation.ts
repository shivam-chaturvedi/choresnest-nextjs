import { FEATURE_LIST } from "@/lib/features";

export const siteNavigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Support", path: "/support" },
  { label: "Help Center", path: "/help" },
  { label: "FAQ", path: "/faq" },
  { label: "Getting Started", path: "/getting-started" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Community Guidelines", path: "/community-guidelines" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms-of-use" },
  { label: "Delete Account", path: "/delete-account" },
];

export const featureNavigation = [
  { label: "Overview", path: "/features" },
  ...FEATURE_LIST.map((feature) => ({
    label: feature.title,
    path: `/features/${feature.slug}`,
    category: feature.category,
  })),
];
