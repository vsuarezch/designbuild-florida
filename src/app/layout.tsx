import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ─── Replace G-XXXXXXXXXX with your real GA4 Measurement ID ───────────────────
// Get it from: analytics.google.com → Admin → Data Streams → your stream → Measurement ID
const GA_ID = "G-4RMDV7YLJQ";

export const metadata: Metadata = {
  title: {
    default: "designbuild-us — Structural Engineering & ADU Permitting | Florida",
    template: "%s | designbuild-us",
  },
  description:
    "designbuild-us coordinates STALO Engineering (structural engineering, permit-ready CDs) and Design Build Florida (ADU and guesthouse construction documents and permitting) across Florida.",
  metadataBase: new URL("https://www.designbuild-us.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.designbuild-us.com",
    siteName: "designbuild-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}

        {/* Google Analytics 4 — loads after page is interactive, doesn't block render */}
        {GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
