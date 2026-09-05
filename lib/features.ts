export type FeatureDefinition = {
  slug: string;
  title: string;
  summary: string;
  category: string;
};

export const FEATURE_LIST: FeatureDefinition[] = [
  {
    slug: "calendar",
    title: "Family Calendar",
    summary:
      "Plan family events, appointments, and reminders with color-coded views for every member.",
    category: "Scheduling & Events",
  },
  {
    slug: "tasks",
    title: "Tasks & Chores",
    summary: "Assign responsibilities, rotate chores, and track completion across the household.",
    category: "Chore Management",
  },
  {
    slug: "lists",
    title: "Shopping Lists",
    summary: "Create collaborative grocery and to-do lists with categories and reusable templates.",
    category: "Lists & Shopping",
  },
  {
    slug: "vault",
    title: "Vault & Documents",
    summary: "Store important documents, receipts, and IDs with reminders and encrypted storage.",
    category: "Security & Storage",
  },
  {
    slug: "finance",
    title: "Finance Tracker",
    summary: "Understand expenses, budgets, and savings with visual breakdowns for the household.",
    category: "Finances",
  },
  {
    slug: "notes",
    title: "Notes & Journals",
    summary: "Capture ideas, reminders, and shared information with folders, tags, and pins.",
    category: "Notes & Journals",
  },
];

export const getFeatureBySlug = (slug: string) => FEATURE_LIST.find((feature) => feature.slug === slug);
