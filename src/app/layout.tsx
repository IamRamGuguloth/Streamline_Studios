import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Streamline Studios — Product Innovation Studio",
    template: "%s — Streamline Studios",
  },
  description:
    "Streamline Studios designs physical products from concept to production — combining industrial design, engineering, electronics and manufacturing.",
  keywords: [
    "product design",
    "industrial design",
    "electronics",
    "firmware",
    "IoT",
    "product innovation",
    "hardware",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://streamlinestudios.co",
    siteName: "Streamline Studios",
    title: "Streamline Studios — Product Innovation Studio",
    description:
      "Products that make complex systems feel natural.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline Studios",
    description: "Products that make complex systems feel natural.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
