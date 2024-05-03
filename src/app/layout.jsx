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
