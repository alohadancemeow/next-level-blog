"use client";

import Link from "next/link";

import { Box, Text } from "@mantine/core";
import { PostTag } from "@/types";

type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  const allTags = Object(tags) as PostTag[];

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        alignItems: "center",
        marginTop: "5px",
        fontSize: "12px",
      }}
    >
      {allTags &&
        allTags.map((tag, idx) => (
          <div key={idx}>
            <Link href={`/tags/${tag.name}`} legacyBehavior>
              <Text
                component="a"
                style={{
                  textDecoration: "none",
                  color: "grey",
                }}
              >
                {`#${tag.name}`}
              </Text>
            </Link>
          </div>
        ))}
    </Box>
  );
};

export default Tags;
