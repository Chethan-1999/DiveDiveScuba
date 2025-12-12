import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Deep Dive Netrani - Best Scuba Diving in Netrani Island, Murudeshwar Karnataka",
  description: "#1 Scuba Diving Center at Netrani Island, Murudeshwar. Professional PADI certified instructors, underwater photography, marine life exploration. Book your Karnataka scuba diving adventure today! Call 6360788946",
  keywords: "scuba diving Netrani Island, Murudeshwar scuba diving, Karnataka diving, underwater adventure, PADI certified, marine life, coral reef diving, scuba diving packages, diving center Netrani, best scuba diving Karnataka",
  authors: [{ name: "Deep Dive Netrani" }],
  openGraph: {
    title: "Deep Dive Netrani - Premier Scuba Diving at Netrani Island",
    description: "Discover the underwater paradise of Netrani Island with professional scuba diving services. Crystal clear waters, vibrant marine life, and expert guidance.",
    url: "https://deepdivenatrani.com",
    siteName: "Deep Dive Netrani",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/Image (10).jpg",
        width: 1200,
        height: 630,
        alt: "Deep Dive Netrani - Scuba Diving at Netrani Island",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Dive Netrani - Best Scuba Diving in Netrani Island",
    description: "Experience world-class scuba diving at Netrani Island, Karnataka. Professional instructors, equipment rental, and accommodation packages available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
