import "./globals.css";
import type { Metadata } from "next";
import { jetBrains_mono } from "./fonts";
import { siteMetadata } from "@/site/siteMatedata";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import MantineProviders from "@/providers/MantineProviders";
import ClientComponent from "@/components/ClientComponent";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    // images: [defaultImage],
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
      </body>
    </html>
  );
};

export default RootLayout;
