import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Read the Chores Nest Terms of Use to understand eligibility, acceptable behavior, and legal rights when using the service.";

const termsSchema = createWebPageSchema({
  title: "Terms of Use & Service Agreement | Chores Nest Family App",
  description,
  url: canonicalUrl("/terms-of-use"),
});

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use & Service Agreement | Chores Nest Family App",
  },
  description,
  keywords: [...DEFAULT_KEYWORDS, "terms", "acceptable use", "terms of use", "service agreement"],
  alternates: {
    canonical: canonicalUrl("/terms-of-use"),
  },
  openGraph: {
    title: "Terms of Use & Service Agreement | Chores Nest Family App",
    description,
    url: canonicalUrl("/terms-of-use"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Terms of Use & Service Agreement | Chores Nest Family App",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const serviceFeatures = [
  "Task and chore management",
  "Shared family calendars",
  "Shopping lists",
  "Notes and reminders",
  "Finance tracking",
  "Document vault storage",
  "Family member profiles",
  "Notifications and alerts",
  "Data export tools",
];

const unacceptable = [
  "Use the Services for illegal activities",
  "Upload harmful software or malicious code",
  "Attempt to disrupt the system or servers",
  "Access other users' data without authorization",
  "Attempt to reverse engineer the application",
];

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="terms-schema" data={termsSchema} />
      <section className="border-b bg-secondary">
        <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground">Terms of Use</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last Updated: March 8, 2026</p>
          <p className="text-sm text-muted-foreground">Chores Nest · choresnest.com</p>
        </div>
      </section>
      <section>
        <div className="w-full px-4 md:px-6 lg:px-8 py-14 text-left">
          <div className="space-y-10 max-w-4xl">
            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Acceptance of Terms</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Welcome to Chores Nest. These Terms of Use govern your access to and use of the Chores Nest mobile application, the website located at choresnest.com, and any related services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                By downloading, installing, accessing, or using Chores Nest, you agree to be bound by these Terms of Use and our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">About Chores Nest</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chores Nest is a digital family organization platform designed to help households manage daily responsibilities. The Services may include:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                {serviceFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Eligibility</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To use Chores Nest, you must be at least 13 years old, or use the service under the supervision of a parent or legal guardian.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">User Accounts</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Certain features require creating an account. Chores Nest currently supports email and password login, Google account login (OAuth), and guest mode access.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                You agree to provide accurate information, keep your credentials secure, and notify us if unauthorized access occurs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Acceptable Use</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                You agree to use Chores Nest responsibly and lawfully. You must not:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                {unacceptable.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Intellectual Property</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All intellectual property related to the Chores Nest application is owned by the developers of Chores Nest or their licensors. You may not reproduce, distribute, or modify any part of the Services without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Disclaimer of Warranties</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We make no guarantees regarding uninterrupted availability, error-free operation, or compatibility with all devices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-light text-foreground mb-3">Contact Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email: <a href="mailto:support@choresnest.com" className="text-primary hover:underline">support@choresnest.com</a>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">Website: choresnest.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
