import "./globals.css";
import type { Metadata } from "next";
import { jetBrains_mono } from "./fonts";
import { siteMetadata } from "@/site/siteMatedata";
import { ogHomeImage } from "@/site/data";

import { Analytics } from '@vercel/analytics/react';

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import MantineProviders from "@/providers/MantineProviders";
import ClientComponent from "@/components/ClientComponent";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — ${siteMetadata.homeTitle}`,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    images: [ogHomeImage],
    type: "website",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetBrains_mono.className} relative`}>
        <ClientComponent>
          <MantineProviders>{children}</MantineProviders>
        </ClientComponent>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
