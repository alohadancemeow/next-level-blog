import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import { Card, Image, Text } from "@mantine/core";
import Tags from "./Tags";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <Link href={post.url}>
        <Card
          component="a"
          shadow="sm"
          p="xl"
          radius={"sm"}
          style={{ height: "450px" }}
          sx={(theme) => ({
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.orange[2],
              transform: "translateY(-8px)",
              transition: "ease .3s",
            },
          })}
        >
          <Text size="xs" mb={"xs"}>
            <time dateTime={post.date}>
              🪶 {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </Text>

          <Card.Section>
            <Image src={post.image} height={180} alt="post image" />
          </Card.Section>

          <Tags tags={post.tags} />
          <Text weight={500} size="lg" mt={"sm"}>
            {post.title}
          </Text>
          <Text mt="xs" color="dimmed" size="sm">
            {post.description}
          </Text>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
