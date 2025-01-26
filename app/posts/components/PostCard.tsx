"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Card, Image, Text } from "@mantine/core";
import TagItem from "./TagItem";
import { PageDataSchemaType } from "@/types";
import { SmallFeatherIcon } from "@/components/Icons";

type Props = {
  post: PageDataSchemaType;
};

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`} legacyBehavior passHref>
        <Card
          component="div"
          shadow="md"
          p="md"
          radius={"sm"}
          className={
            "md:h-[420px] hover:bg-orange-200 dark:hover:bg-neutral-700 shadow-md  cursor-pointer hover:translate-y-[-8px] transition-transform ease-in-out duration-300"
          }
        >
          <div>
            <time dateTime={post.createdTime}>
              <div className="flex gap-2 mb-1">
                <SmallFeatherIcon />
                {format(parseISO(post.createdTime), "LLLL d, yyyy")}
              </div>
            </time>
          </div>

          <Card.Section>
            <Image src={post.coverImage} height={180} alt="post image" />
          </Card.Section>

          <TagItem tags={post.tags} />
          <Text style={{ fontWeight: 500 }} size="lg" mt={"sm"}>
            {post.title}
          </Text>
          <Text mt="xs" c="dimmed" size="sm" className="line-clamp-3">
            {post.description}
          </Text>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
