import type { Metadata } from "next";

import { Geist, Space_Grotesk, Dhurjati } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
});

const dhurjati = Dhurjati({
  variable: "--font-dhurjati",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nordiafoundation.org"),
  title: "Nordia Foundation",
  description:
    "Nordia Foundation empowers individuals and communities through truth-driven education, awareness programs, and critical thinking to inspire lasting social change.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nordia Foundation",
    description:
      "Nordia Foundation empowers individuals and communities through truth-driven education, awareness programs, and critical thinking to inspire lasting social change.",
    url: "https://nordiafoundation.org",
    siteName: "Nordia Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nordia Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordia Foundation",
    description:
      "Nordia Foundation empowers individuals and communities through truth-driven education, awareness programs, and critical thinking to inspire lasting social change.",
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Nordia Foundation",
  url: "https://nordiafoundation.org",
  description:
    "Nordia Foundation empowers individuals and communities through truth-driven education, awareness programs, and critical thinking to inspire lasting social change.",
  logo: "https://nordiafoundation.org/opengraph-image",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nordia Foundation",
  url: "https://nordiafoundation.org",
  description:
    "Nordia Foundation empowers individuals and communities through truth-driven education, awareness programs, and critical thinking to inspire lasting social change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${dhurjati.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
