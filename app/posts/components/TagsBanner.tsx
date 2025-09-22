"use client";

import { Box } from "@mantine/core";
import { TagSchemaType } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
  tags: TagSchemaType;
};

const TagsBanner = ({ tags }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-y-[3px] gap-x-[10px] text-xs">
      {Object.entries(tags).map((tag, i) => (
        <Box
          key={i}
          component="a"
          className="cursor-pointer text-neutral-500 dark:hover:text-amber-700 hover:text-orange-400 font-medium text-xs leading-relaxed"
          onClick={() => router.push(`/tags/${tag[0]}`)}
        >
          <span>{`#${tag[0]}(${tag[1]})`}</span>
        </Box>
      ))}
    </div>
  );
};

export default TagsBanner;
