"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Card, Image, Text } from "@mantine/core";
import Tags from "./Tags";
import { PageData } from "@/types";

type Props = {
  post: PageData;
};

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <Link href={post.id} legacyBehavior passHref>
        <Card
          component="div"
          shadow="md"
          p="md"
          radius={"sm"}
          style={{ height: "450px" }}
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
          <Text size="xs" mb={"xs"}>
            <time dateTime={post.createdTime}>
              🪶 {format(parseISO(post.createdTime), "LLLL d, yyyy")}
            </time>
          </Text>

          <Card.Section>
            <Image src={post.coverImage} height={180} alt="post image" />
          </Card.Section>

          <Tags tags={post.tags} />
          <Text weight={500} size="lg" mt={"sm"}>
            {post.title}
          </Text>
          <Text mt="xs" color="dimmed" size="sm" className="line-clamp-3">
            {post.description}
          </Text>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
