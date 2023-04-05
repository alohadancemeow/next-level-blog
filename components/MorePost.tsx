import React from "react";
import { Post } from "contentlayer/generated";
import { Box, Card, Image } from "@mantine/core";

const MorePost: React.FC<Post> = ({ ...post }) => {
  return (
    <Box>
      <Card
        component="div"
        shadow="md"
        mt={20}
        // p="xl"
        radius={"xs"}
        style={{ height: "auto" }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[5] : "none",
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.orange[2],
            transform: "translateY(-8px)",
            transition: "ease .3s",
            cursor: "pointer",
          },
        })}
      >
        <Card.Section>
          <Card.Section>
            <Image src={post.image} height={120} alt="post image" />
          </Card.Section>
        </Card.Section>
      </Card>
    </Box>
  );
};

export default MorePost;
