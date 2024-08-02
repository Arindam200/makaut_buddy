import "./globals.css";
import { Inter, Grenze_Gotisch } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { ThemeProvider } from "../app/Context/ThemeContext";
import { ClerkProvider } from "@clerk/nextjs";
import NotesDataContextProvider from "./Context/NotesDataContext";
import UserSessionContextProvider from "./Context/UsersessionContext";

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
  description:
    "MAKAUT Buddy is the one-stop academic solution for every students of the University.",
  keywords:
    "MAKAUT, University, Academic, Next.js, Notes, PYQ, Syllabus, Makaut Buddy, Makaut Buddy App, Makaut Buddy Website, Makaut Buddy Web App, Makaut Buddy Web Application, Makaut Buddy Web Platform, Makaut Questions,Makaut PYQ, Makaut website, Makaut Buddy Web Portal, Makaut Website",
  author: "Arindam Majumder",
  openGraph: {
    title: "Makaut Buddy",
    description: "One-stop academic solution for every students of the University.",
    url: "https://makaut-buddy.vercel.app",
    siteName: "Makaut Buddy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Makaut Buddy",
    card: "summary_large_image",
    description: "One-stop academic solution for every students of the University.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grenze.variable} dark text-foreground  `}
    >
      <body className={inter.className}>
        <NotesDataContextProvider>
          <ClerkProvider
            publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          >
            <UserSessionContextProvider>
              <ThemeProvider>
                <Providers>
                  {children}
                  <Analytics />
                </Providers>
              </ThemeProvider>
            </UserSessionContextProvider>
          </ClerkProvider>
        </NotesDataContextProvider>
      </body>
    </html>
  );
}
