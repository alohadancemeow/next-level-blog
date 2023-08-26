"use cleint";

import Link from "next/link";
import { Box, Card, Image, Tooltip } from "@mantine/core";

import { useViewportSize } from "@mantine/hooks";
import { PageData } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  post: PageData;
};

const MorePost = ({ post }: Props) => {
  const { width } = useViewportSize();

  if (!post) return notFound();

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
        <Link href={`/posts/${post.id}`} legacyBehavior passHref>
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
                <Image src={post.coverImage} height={120} alt="post image" />
              </Card.Section>
            </Card.Section>
          </Card>
        </Link>
      </Box>
    </Tooltip>
  );
};

export default MorePost;
