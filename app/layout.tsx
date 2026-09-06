import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/StructuredData";
import { faqItems } from "@/lib/faq";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  founderPersonSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/seo";
import { GA_MEASUREMENT_ID } from "@/lib/firebase";
import { siteNavigation } from "@/lib/navigation";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    template: "%s | Chores Nest",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
    types: {
      "text/plain": [
        { url: `${SITE_URL}/llms.txt`, title: "LLMs.txt" },
        { url: `${SITE_URL}/llms-full.txt`, title: "LLMs-Full.txt" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chores Nest – Family Organizer, Chores & Shared Calendar",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: siteNavigation.map((link, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: link.label,
    item: new URL(link.path, SITE_URL).toString(),
  })),
};

const structuredData = [
  organizationSchema,
  founderPersonSchema,
  websiteSchema,
  softwareApplicationSchema,
  breadcrumbStructuredData,
];

const isProduction = process.env.NODE_ENV === "production";
const shouldLoadAnalytics = Boolean(GA_MEASUREMENT_ID && isProduction);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="llms-full.txt" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${montserrat.variable} flex min-h-screen flex-col bg-background text-foreground`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {shouldLoadAnalytics && (
          <>
            <Script id="google-consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'wait_for_update': 500
                });
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="gtag-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
        <AnalyticsTracker />
        <Header />
        <main id="main-content" className="flex-1 w-full">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
        {structuredData.map((schema, index) => (
          <StructuredData key={index} id={`global-schema-${index}`} data={schema} />
        ))}
      </body>
    </html>
  );
}
