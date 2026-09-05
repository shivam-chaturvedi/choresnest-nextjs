import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Review Chores Nest's privacy statement to understand how we collect, use, and protect household data.";

const privacySchema = createWebPageSchema({
  title: "Privacy Policy | Chores Nest",
  description,
  url: canonicalUrl("/privacy-policy"),
});

export const metadata: Metadata = {
  title: "Privacy Policy | Chores Nest",
  description,
  keywords: [...DEFAULT_KEYWORDS, "privacy", "data protection"],
  alternates: {
    canonical: canonicalUrl("/privacy-policy"),
  },
  openGraph: {
    title: "Chores Nest Privacy Statement",
    description,
    url: canonicalUrl("/privacy-policy"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Chores Nest Privacy Statement",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

type Section = {
  heading: string;
  content?: string[];
  list?: string[];
  groups?: { title: string; entries: string[] }[];
  contact?: { email: string; website: string };
};

const sections: Section[] = [
  {
    heading: "Your Privacy Matters",
    content: [
      "Chores Nest is designed to help families and households organize daily life. Our app brings together calendars, chores, shopping lists, finances, notes, documents, and family profiles into one secure workspace.",
      "Our goal is to be transparent about how and why we collect and use information. We believe your personal data belongs to you. We do not sell your personal information, and we use data only to operate and improve the service.",
    ],
  },
  {
    heading: "When Does This Privacy Statement Apply?",
    content: [
      "This Privacy Statement applies whenever you interact with Chores Nest through:",
      "If you have questions after reviewing this Privacy Statement, you may contact us at support@choresnest.com.",
    ],
    list: [
      "The Chores Nest mobile application",
      "The website at choresnest.com",
      "Email communications or support requests",
      "Other features or services related to the application",
    ],
  },
  {
    heading: "What Personal Information Do We Collect?",
    groups: [
      {
        title: "Account and Registration Information",
        entries: [
          "When creating or logging into an account we may collect:",
          "Email address",
          "Authentication credentials",
          "Account identifiers",
          "Google account identifier (when using Google login)",
        ],
      },
      {
        title: "Household and User Content",
        entries: [
          "Chores Nest allows you to create and store household information. This may include:",
          "Tasks and chore assignments",
          "Calendar events and reminders",
          "Grocery or shopping lists",
          "Expense tracking and financial entries",
          "Personal notes and household records",
          "Documents uploaded to the Vault",
          "Household member profiles",
          "Notification preferences",
        ],
      },
    ],
  },
  {
    heading: "How Do We Use Personal Information?",
    content: [
      "To Provide the Services: Manage your account, synchronize household data, display tasks, events, notes, and reminders.",
      "To Improve the Application: Analyze anonymized usage data to improve stability and user experience.",
      "To Provide Notifications: Send reminders, alerts, and updates related to your tasks or events.",
      "Security: Detect suspicious activity and protect accounts from unauthorized access.",
    ],
  },
  {
    heading: "Who Do We Share Personal Information With?",
    content: [
      "We do not sell personal information.",
      "Service Providers: We may share information with trusted providers that help operate the service, including cloud hosting, authentication, and analytics services.",
      "Legal Requirements: Information may be disclosed if required to comply with applicable law or to protect user safety.",
    ],
  },
  {
    heading: "How Can You Control Your Information?",
    content: [
      "Within the application you can update account information, manage family member profiles, export your data in JSON or CSV formats, and delete your account.",
    ],
  },
  {
    heading: "Children's Privacy",
    content: [
      "Chores Nest is not intended for children under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Contact",
    contact: {
      email: "support@choresnest.com",
      website: "choresnest.com",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="privacy-policy-schema" data={privacySchema} />
      <section className="border-b bg-secondary/30">
        <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground">Privacy Statement</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last Updated: March 8, 2026</p>
          <p className="mt-4 text-sm text-muted-foreground">Chores Nest · choresnest.com</p>
        </div>
      </section>
      <section>
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-heading font-light text-foreground mb-3">{section.heading}</h2>
                {section.content && (
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    {section.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.groups && (
                  <div className="space-y-6 mt-4">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <p className="font-semibold text-foreground mb-2">{group.title}</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          {group.entries.map((entry) => (
                            <li key={entry}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {section.contact && (
                  <div className="space-y-1 text-sm text-muted-foreground leading-relaxed mt-1">
                    <p>
                      Email: <a href={`mailto:${section.contact.email}`} className="text-primary hover:underline">{section.contact.email}</a>
                    </p>
                    <p>Website: <span className="text-foreground">{section.contact.website}</span></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
