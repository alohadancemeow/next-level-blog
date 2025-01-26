"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Card, Image, Text, useMantineColorScheme } from "@mantine/core";
import Tags from "./Tags";
import { PageDataSchemaType } from "@/types";
import { SmallFeatherIcon } from "@/components/Icons";

type Props = {
  post: PageDataSchemaType;
};

const PostCard = ({ post }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div>
      <Link href={`/posts/${post.id}`} legacyBehavior passHref>
        <Card
          component="div"
          shadow="md"
          p="md"
          radius={"sm"}
          style={{ height: "450px" }}
          styles={(theme) => ({
            root: {
              backgroundColor:
                colorScheme === "dark" ? theme.colors.dark[5] : "none",
              "&:hover": {
                backgroundColor:
                  colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.orange[2],
                transform: "translateY(-8px)",
                transition: "ease .3s",
                cursor: "pointer",
              },
            },
          })}
        >
          {/* <Text size="xs" mb={"xs"}> */}
          <div>
            <time dateTime={post.createdTime}>
              <div className="flex gap-2">
                <SmallFeatherIcon />
                {format(parseISO(post.createdTime), "LLLL d, yyyy")}
              </div>
            </time>
          </div>

          <Card.Section>
            <Image src={post.coverImage} height={180} alt="post image" />
          </Card.Section>

          <Tags tags={post.tags} />
          <Text style={{ fontWeight: 500 }} size="lg" mt={"sm"}>
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
