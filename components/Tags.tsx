import Link from "next/link";

import { Box, Text } from "@mantine/core";
import { useState } from "react";
import { useEffect } from "react";

type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  const [postTags, setPostTags] = useState<string[]>();

  useEffect(() => {
    if (tags) setPostTags(tags);
  }, [tags]);

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
      {postTags &&
        postTags.map((tag, idx) => (
          <div key={idx}>
            <Link href={`/tags/${tag.split(" ").join("-")}`} legacyBehavior>
              <Text
                component="a"
                style={{
                  textDecoration: "none",
                  color: "grey",
                }}
              >
                {`#${tag}`}
              </Text>
            </Link>
          </div>
        ))}
    </Box>
  );
};

export default Tags;
