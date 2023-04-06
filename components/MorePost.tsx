import React from "react";
import { Post } from "contentlayer/generated";
import { Box, Card, Image, Tooltip } from "@mantine/core";
import Link from "next/link";

import { useViewportSize } from "@mantine/hooks";

const MorePost: React.FC<Post> = ({ ...post }) => {
  const { width } = useViewportSize();

  return (
    <Tooltip
      disabled={width < 1000}
      label={post.title}
      // color="orange"
      position="bottom"
      withArrow
      arrowPosition="center"
      transitionProps={{ transition: "slide-up", duration: 300 }}
      sx={(theme) => ({
        color: "white",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][5],
      })}
    >
      <Box>
        <Link href={post.url} legacyBehavior passHref>
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
        </Link>
      </Box>
    </Tooltip>
  );
};

export default MorePost;