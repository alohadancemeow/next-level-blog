import React from "react";
import api from "@/lib/notion-api";

export const getToc = React.cache(async (pageId: string) => {
  const recordMap = await api.getPage(pageId);
  const blocks = Object.entries(recordMap.block).flat();

  // Get table of content from blocks,
  // By filtering `h1, h2`
  const toc = blocks.filter(
    (block: any) =>
      block?.value?.type === "header" || block?.value?.type === "sub_header"
  );

  return toc;
});
