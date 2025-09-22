"use client";

import { Box, Text } from "@mantine/core";
import { PostTagSchemaType } from "@/types";
import { useRouter } from "next/navigation";

type Props = {
  tags: PostTagSchemaType[];
};

const TagItem = ({ tags }: Props) => {
  const router = useRouter();
  
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
            <Text
              onClick={() => router.push(`/tags/${tag.name}`)}
              style={{
                textDecoration: "none",
                color: "grey",
                cursor: "pointer",
              }}
            >
              {`#${tag.name}`}
            </Text>
          </div>
        ))}
    </Box>
  );
};

export default TagItem;
