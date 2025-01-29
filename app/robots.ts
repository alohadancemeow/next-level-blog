import type { MetadataRoute } from "next";
import { siteMetadata } from "@/site/siteMatedata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      `${siteMetadata.metadataBase}/sitemap.xml`,
      `${siteMetadata.metadataBase}/posts/sitemap.xml`,
    ],
  };
}
