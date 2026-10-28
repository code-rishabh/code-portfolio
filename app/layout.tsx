import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TransitionProvider } from "@/components/Transition";
import { Preloader } from "@/components/Preloader";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { RevealManager } from "@/components/RevealManager";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Product-minded builder. 3+ years taking B2B SaaS, EdTech, AI and XR products from discovery to launch: a VR campus tour platform used by 170+ US school districts, an AI-powered CRM and more.";

// Vercel provides the production domain at build time, so link previews always
// point at the live site even if the domain changes.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishabh Sharma: Product-minded builder",
    template: "%s · Rishabh Sharma",
  },
  description,
  openGraph: {
    title: "Rishabh Sharma: Product-minded builder",
    description,
    url: "/",
    siteName: "Rishabh Sharma",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f3ece0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll>
          <TransitionProvider>
            <Preloader />
            <Nav />
            <main>{children}</main>
            <Cursor />
            <RevealManager />
            <div className="grain" aria-hidden />
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
