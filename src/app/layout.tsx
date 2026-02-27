import type { Metadata } from "next";

import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nordia Foundation",
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
        className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
