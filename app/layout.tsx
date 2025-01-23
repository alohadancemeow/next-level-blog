import "@mantine/core/styles.css";
import "@/styles/globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import type { Metadata } from "next";
import { jetBrains_mono } from "./fonts";
import { siteMetadata } from "@/site/siteMatedata";
import { ogHomeImage } from "@/site/data";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import MantineProviders from "@/providers/MantineProviders";
import ClientComponent from "@/components/ClientComponent";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  metadataBase: siteMetadata.metadataBase,
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
    <html lang="en" className="scroll-smooth" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${jetBrains_mono.className} relative`}>
        <ClientComponent>
          <MantineProviders>
            <QueryProvider>{children}</QueryProvider>
          </MantineProviders>
        </ClientComponent>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
