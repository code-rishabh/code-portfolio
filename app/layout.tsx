import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

export const metadata: Metadata = {
  title: "Rishabh Sharma - Frontend Developer Portfolio",
  description: "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications with 2+ years of experience.",
  keywords: [
    "portfolio", 
    "frontend developer", 
    "react developer", 
    "nextjs developer", 
    "typescript developer",
    "web developer",
    "javascript developer",
    "pune developer",
    "freelance developer",
    "ui developer"
  ],
  authors: [{ name: "Rishabh Sharma", url: "https://github.com/code-rishabh" }],
  creator: "Rishabh Sharma",
  publisher: "Rishabh Sharma",
  openGraph: {
    title: "Rishabh Sharma - Frontend Developer Portfolio",
    description: "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications.",
    type: "website",
    url: "https://rishabh-portfolio.vercel.app",
    siteName: "Rishabh Sharma Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rishabh Sharma - Frontend Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Sharma - Frontend Developer Portfolio",
    description: "Experienced Frontend Developer specializing in React, Next.js, and TypeScript.",
    creator: "@iamRissu",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rishabh Sharma",
    "jobTitle": "Frontend Developer",
    "description": "Experienced Frontend Developer specializing in React, Next.js, and TypeScript",
    "url": "https://rishabh-portfolio.vercel.app",
    "image": "https://rishabh-portfolio.vercel.app/og-image.jpg",
    "sameAs": [
      "https://github.com/code-rishabh",
      "https://linkedin.com/in/rishabh-sharma-9864741b8",
      "https://twitter.com/iamRissu"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Git"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "description": "Building modern, responsive web applications using React, Next.js, and TypeScript"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

