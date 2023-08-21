"use client";

import { SpotlightProvider } from "@mantine/spotlight";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  data: any[];
};

const Spotlight = ({ children, data }: Props) => {
  // console.log('data', data);

  const router = useRouter();

  return (
    <SpotlightProvider
      actions={data.map((post) => ({
        id: post._id,
        title: `📝 ${post.title}`,
        description: post.description,
        onTrigger: () => router.push(post.url),
        new: false,
      }))}
      searchPlaceholder="🪶 Search for posts..."
      nothingFoundMessage="🤔 Nothing found..."
      shortcut="mod + S"
      limit={5}
      highlightQuery
      //   transitionProps={{ duration: 300, transition: "slide-down" }}
    >
      {children}
    </SpotlightProvider>
  );
};

export default Spotlight;
