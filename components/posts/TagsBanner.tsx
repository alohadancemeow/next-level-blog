"use client";

import { useCallback, useRef } from "react";
import { Box } from "@mantine/core";
import { TagType } from "@/types";

// import useFilterPostByTag from "@/hooks/useFilterPostByTag";
import { useRouter } from "next/navigation";

type Props = {
  tags: TagType;
};

const TagsBanner = ({ tags }: Props) => {
  const chipRef = useRef<null | HTMLAnchorElement>(null);
  // const { setTagname, tagname } = useFilterPostByTag();

  const router = useRouter();

  // const toggle = useCallback(
  //   (tag: [string, number]) => {
  //     if (!chipRef.current) return null;

  //     if (!chipRef.current?.title || chipRef.current?.title !== tag[0]) {
  //       setTagname(tag[0]);
  //       chipRef.current.title = tag[0];
  //     } else {
  //       setTagname("");
  //       chipRef.current.title = "";
  //     }
  //   },
  //   [setTagname, chipRef]
  // );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3px 10px",
        // justifyContent: 'center',
      }}
    >
      {Object.entries(tags).map((tag, i) => (
        <Box
          key={i}
          ref={chipRef}
          component="a"
          style={{
            // padding: '2px 5px',
            fontWeight: "500",
            fontSize: "15px",
          }}
          sx={(theme) => ({
            // [theme.fn.largerThan('xl')]: { fontSize: '18px' },
            // [theme.fn.smallerThan('xl')]: { fontSize: '16px' },
            // [theme.fn.smallerThan('md')]: { fontSize: '15px' },
            // color: theme.colors.gray[6],

            // color:
            //   chipRef.current?.title === tag[0]
            //     ? theme.colors[theme.primaryColor][3]
            //     : theme.colors.gray[6],

            color: theme.colors.gray[6],
            "&:hover": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors[theme.primaryColor][3]
                  : theme.black,
            },
          })}
          onClick={() => router.push(`/tags/${tag[0]}`)}
        >
          <span>{`#${tag[0]}(${tag[1]})`}</span>
        </Box>
      ))}
    </div>
  );
};

export default TagsBanner;
