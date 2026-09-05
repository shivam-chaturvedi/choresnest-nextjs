import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Chores Nest Community Guidelines explain the acceptable use policy and safety expectations for every household.";

const guidelinesSchema = createWebPageSchema({
  title: "Community Guidelines | Chores Nest",
  description,
  url: canonicalUrl("/community-guidelines"),
});

export const metadata: Metadata = {
  title: "Community Guidelines | Chores Nest",
  description,
  keywords: [...DEFAULT_KEYWORDS, "community guidelines", "use policy"],
  alternates: {
    canonical: canonicalUrl("/community-guidelines"),
  },
  openGraph: {
    title: "Community Guidelines | Chores Nest",
    description,
    url: canonicalUrl("/community-guidelines"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Community Guidelines | Chores Nest",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

type Section = {
  heading: string;
  paragraphs: string[];
};

const sections: Section[] = [
  {
    heading: "Our Commitment",
    paragraphs: [
      "Chores Nest is designed to help families and households organize daily life. We want the platform to remain safe, respectful, and trustworthy for everyone. These Community Guidelines describe the standards users must follow when using the Chores Nest application and related services. By using Chores Nest, you agree to follow these guidelines.",
    ],
  },
  {
    heading: "Respectful Use of the Platform",
    paragraphs: [
      "Users must interact with the platform in a respectful and responsible manner. You must not use the application to harass, threaten, or abuse others, share harmful, hateful, or discriminatory content, impersonate another individual or organization, or misuse family member profiles or shared features.",
    ],
  },
  {
    heading: "Appropriate Content",
    paragraphs: [
      "All content must comply with applicable laws and these guidelines. You must not upload or store content that promotes violence or illegal activities, contains explicit or sexually abusive material, includes hateful or discriminatory language, or violates the rights of other individuals. We reserve the right to remove content that violates these guidelines.",
    ],
  },
  {
    heading: "Protection of Personal Information",
    paragraphs: [
      "Users should respect the privacy of others. You must not share another person's private information without consent, collect or distribute personal data from other users, or attempt to access accounts or data without authorization. Household information should only be shared with trusted family members.",
    ],
  },
  {
    heading: "Security and System Integrity",
    paragraphs: [
      "Users must not attempt to interfere with the operation of the application. Prohibited actions include hacking or unauthorized system access, reverse engineering the application, exploiting security vulnerabilities, uploading malicious code or malware, and attempting to disrupt servers or infrastructure. Any attempts to compromise system security may result in account suspension.",
    ],
  },
  {
    heading: "Fair Use of the Service",
    paragraphs: [
      "Chores Nest is intended for personal household organization. You may not use the app for illegal purposes, operate automated bots or scripts, abuse notifications or system features, or attempt to overload or manipulate the service.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "You must respect intellectual property rights. You should not upload or distribute content that infringes copyrights, violates trademarks, or distributes proprietary materials without permission. If you believe content violates your intellectual property rights, please contact us.",
    ],
  },
  {
    heading: "Reporting Violations",
    paragraphs: [
      "If you encounter behavior or content that violates these guidelines, please report it at support@choresnest.com. Reports help us maintain a safe environment for everyone.",
    ],
  },
  {
    heading: "Enforcement",
    paragraphs: [
      "If these guidelines are violated, we may take actions including removal of content, warnings to users, temporary account suspension, or permanent account termination. These actions are taken at our discretion to protect the platform and its users.",
    ],
  },
  {
    heading: "Changes to These Guidelines",
    paragraphs: [
      "We may update these Community Guidelines as the platform evolves. Any updates will be posted on our website and within the application. Continued use of the service indicates acceptance of these updates.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Email: support@choresnest.com",
      "Website: choresnest.com",
    ],
  },
];

export default function CommunityGuidelinesPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="guidelines-schema" data={guidelinesSchema} />
      <section className="border-b bg-secondary">
        <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-foreground">Community Guidelines</h1>
          <p className="mt-2 text-sm text-muted-foreground font-light">Last Updated: March 8, 2026</p>
          <p className="text-sm text-muted-foreground font-light">Acceptable Use Policy · Chores Nest · choresnest.com</p>
        </div>
      </section>
      <section>
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-heading font-light text-foreground mb-3">{section.heading}</h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
