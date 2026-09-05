import { FEATURE_LIST } from "@/lib/features";

export const siteNavigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Blog", path: "/blog" },
  { label: "For Couples", path: "/for-couples" },
  { label: "For Families", path: "/for-families" },
  { label: "For Roommates", path: "/for-roommates" },
  { label: "Grocery List Maker", path: "/tools/grocery-list-maker" },
  { label: "Chore Chart Generator", path: "/tools/chore-chart-generator" },
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
