import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";
import SiteFooter from "@/components/SiteFooter";
import CookieConsent from "@/components/CookieConsent";
import UtmCapture from "@/components/UtmCapture";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.title}`,
  },
  description: SITE.description,
  publisher: SITE.company.legalName,
  keywords: SITE.keywords,
  category: "reference",
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description:
      "Sammenlign kampagner, betalingsmetoder og regler for lovligt kasino i Danmark. 18+.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide til onlinekasino i Danmark",
    description:
      "Sammenlign kampagner, betalingsmetoder og regler for lovligt kasino i Danmark. 18+.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.company.legalName,
    legalName: SITE.company.legalNameFull,
    url: SITE.url,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.company.street,
      addressLocality: SITE.company.city,
      postalCode: SITE.company.postalCode,
      addressCountry: SITE.company.country,
    },
  };

  return (
    <html lang={SITE.lang}>
      <head>
        {/* Google Consent Mode v2 — standard er "denied" indtil brugeren accepterer.
            Ingen ekstern gtag indlæses som standard (alt lokalt). Når en Google Ads/
            Analytics-id sættes, kan tag'et tilføjes og samtykket styres af banneret. */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
      </head>
      <body>
        <a href="#indhold" className="lz-skip">
          Spring til indhold
        </a>
        <div className="lzx-particles" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <main id="indhold">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <UtmCapture />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
