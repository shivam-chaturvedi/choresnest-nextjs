import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { canonicalUrl, createWebPageSchema, DEFAULT_KEYWORDS, OG_IMAGE } from "@/lib/seo";

const description = "Learn how to delete your Chores Nest account and what happens to your data.";

const pageSchema = createWebPageSchema({
  title: "Delete Account – Request Household Data & Account Removal",
  description,
  url: canonicalUrl("/delete-account"),
});

export const metadata: Metadata = {
  title: {
    absolute: "Delete Account – Request Household Data & Account Removal",
  },
  description,
  keywords: [...DEFAULT_KEYWORDS, "account deletion", "data removal", "delete chores nest account", "privacy request"],
  alternates: {
    canonical: canonicalUrl("/delete-account"),
  },
  openGraph: {
    title: "Delete Account – Request Household Data & Account Removal",
    description,
    url: canonicalUrl("/delete-account"),
    siteName: "Chores Nest",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    title: "Delete Account – Request Household Data & Account Removal",
    description,
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const steps = [
  "Open the Chores Nest app.",
  "Navigate to the More tab in the bottom navigation menu.",
  "Select Privacy & Security.",
  "Scroll down to the Danger Zone section.",
  "Tap Delete Account.",
  "Confirm the deletion prompt.",
];

const deletedData = [
  "Tasks and chore lists",
  "Calendar entries",
  "Shopping lists",
  "Notes and reminders",
  "Financial records",
  "Family member profiles",
  "Uploaded documents",
  "Notification preferences",
];

export default function DeleteAccountPage() {
  return (
    <div className="flex flex-col">
      <StructuredData id="delete-account-schema" data={pageSchema} />
      <section className="bg-foreground">
        <div className="container py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-light text-primary-foreground uppercase tracking-wider">Account Deletion</h1>
          <p className="mt-3 text-sm text-primary-foreground/60 font-light uppercase tracking-widest">Last Updated: March 8, 2026</p>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-10 text-muted-foreground leading-relaxed font-light">
          <div className="space-y-4">
            <p>
              Chores Nest gives users full control over their personal information. If you no longer wish to use the service, you can permanently delete your account and associated data directly from within the application.
            </p>
            <p>
              This page explains how account deletion works and how to request assistance if needed.
            </p>
          </div>

          <div className="rounded-2xl border border-destructive bg-[#001b3f] p-6 text-white shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <p className="text-base font-semibold leading-relaxed">
              Deleting your account removes all data stored locally on your devices as well as every copy kept in Chores Nest cloud storage. This process is irreversible and no backups can be restored after the account is removed, so export any data you wish to keep (for example by downloading PDF/JSON exports) before you proceed.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-light text-foreground mb-3">How To Delete Your Chores Nest Account</h2>
            <p className="text-sm text-muted-foreground">Users can delete their account at any time from inside the mobile application. Follow these steps:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-sm text-muted-foreground">Once confirmed, the deletion process will begin.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-light text-foreground mb-3">What Happens When You Delete Your Account</h2>
            <p className="text-sm text-muted-foreground">When you delete your account:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Your Chores Nest profile is permanently removed.</li>
              <li>Authentication records associated with your account are deleted.</li>
              <li>Your personal data stored in Chores Nest systems is removed.</li>
              <li>Your locally stored application data is cleared from the device.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Examples of data removed include:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {deletedData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">Once the deletion process is complete, the account cannot be recovered.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-light text-foreground mb-3">Data Stored On Your Device</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chores Nest may store some information locally on your device to enable offline functionality. When the Delete Account option is used, local application data associated with the account is also removed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-light text-foreground mb-3">Backup Retention</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In limited cases, encrypted backups may remain in system backups for a short period of time before they are automatically removed as part of routine backup rotation policies. These backups are not accessible through the application and are automatically deleted after the retention period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-light text-foreground mb-3">Requesting Account Deletion Support</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you cannot access the app or need assistance deleting your account, you may contact our support team. Please include the email address associated with your Chores Nest account.
            </p>
            <p className="text-sm text-muted-foreground">
              Support contact: <a href="mailto:support@choresnest.com" className="text-primary hover:underline">support@choresnest.com</a>
            </p>
            <p className="text-sm text-muted-foreground">Our team will help verify the request and process the account deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-light text-foreground mb-3">Additional Information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">For more details about how your data is handled, please review:</p>
            <ul className="space-y-2 mt-2 text-sm text-muted-foreground list-disc pl-5">
              <li>
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-primary hover:underline">Terms of Use</Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-primary hover:underline">Community Guidelines</Link>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">These documents are available on the Chores Nest website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
