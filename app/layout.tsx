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
    default: "Chores Nest – Family Organizer App",
    template: "%s | Chores Nest",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Chores Nest – Family Organizer App",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chores Nest – Family Organizer App",
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
  },
};

const baseDescription = DEFAULT_DESCRIPTION;

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chores Nest",
  url: SITE_URL,
  logo: "https://choresnest.com/app_icon.png",
  sameAs: ["https://play.google.com/store/apps/details?id=com.choresnest"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@choresnest.com",
      contactType: "Customer Support",
    },
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Chores Nest",
  description: baseDescription,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "Chores Nest",
    url: SITE_URL,
    logo: "https://choresnest.com/app_icon.png",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
  organizationStructuredData,
  websiteStructuredData,
  faqStructuredData,
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
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="gtag-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
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
