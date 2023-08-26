"use client";

import { SpotlightProvider } from "@mantine/spotlight";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PageData } from "@/types";

type Props = {
  children: ReactNode;
  data: PageData[];
};

const Spotlight = ({ children, data }: Props) => {
  const router = useRouter();

  return (
    <SpotlightProvider
      actions={data.map((post) => ({
        id: post.id,
        title: `📝 ${post.title}`,
        description: post.description,
        onTrigger: () => router.push(`/posts/${post.id}`),
        new: false,
      }))}
      searchPlaceholder="🪶 Search for posts..."
      nothingFoundMessage="🤔 Nothing found..."
      shortcut="mod + S"
      limit={5}
      highlightQuery
      // transitionProps={{ duration: 300, transition: "slide-down" }}
    >
      {children}
    </SpotlightProvider>
  );
};

export default Spotlight;
