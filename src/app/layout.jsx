import "./globals.css";
import { Inter, Grenze_Gotisch } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import DataState from "../app/Context/DataState";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grenze = Grenze_Gotisch({
  subsets: ["latin"],
  variable: "--font-grenze",
  display: "swap",
});

export const metadata = {
  title: "Makaut Buddy",
  description: "MAKAUT Buddy is the one-stop academic solution for every students of the University.",
  keywords: "MAKAUT, University, Academic, Next.js, Notes, PYQ, Syllabus, Makaut Buddy, Makaut Buddy App, Makaut Buddy Website, Makaut Buddy Web App, Makaut Buddy Web Application, Makaut Buddy Web Platform, Makaut Questions,Makaut PYQ, Makaut website, Makaut Buddy Web Portal, Makaut Website",
  author: "Arindam Majumder",
  url: "https://makaut-buddy.vercel.app",
  twitter: "@Arindam_1729",
  site_name: "MAKAUT Buddy  |  The Academic Solution for MAKAUT Students",
  locale: "en_US",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grenze.variable} dark text-foreground  `}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.site_name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:site" content={metadata.twitter} />
        <link rel="canonical" href={metadata.url} />
      </Head>
      <body className={inter.className}>
        <ClerkProvider
          publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <DataState>
            <Providers>
              {children}
              <Analytics />
            </Providers>
          </DataState>
        </ClerkProvider>
      </body>
    </html>
  );
}
