"use client";

import Link from "next/link";

import { Box, Text } from "@mantine/core";
import { PostTagSchemaType } from "@/types";

type Props = {
  tags: PostTagSchemaType[];
};

const TagItem = ({ tags }: Props) => {
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
      {tags &&
        tags.map((tag, idx) => (
          <div key={idx}>
            <Link href={`/tags/${tag.name}`} legacyBehavior>
              <Text
                component="a"
                style={{
                  textDecoration: "none",
                  color: "grey",
                  cursor: "pointer",
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

export default TagItem;
