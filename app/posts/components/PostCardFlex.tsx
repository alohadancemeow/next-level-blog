"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Text } from "@mantine/core";
import { PageDataSchemaType } from "@/types";
import { SmallFeatherIcon } from "@/components/icons/Icons";

type Props = {
  post: PageDataSchemaType;
};

const PostCardFlex = ({ post }: Props) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`} legacyBehavior passHref>
        <div className="p-2 cursor-pointer">
          <div className="md:flex hover:text-orange-400 dark:hover:text-amber-900 justify-between items-center hover:underline transition-transform ease-in-out duration-300">
            <div className="font-medium text-lg flex items-center gap-2 mb-1">
              <SmallFeatherIcon />
              <div>{post.title}</div>
            </div>
            <div className="hidden md:block">
              <time dateTime={post.createdTime}>
                <div className="flex gap-x-2 items-center justify-center">
                  {format(parseISO(post.createdTime), "yyyy-LL-dd ")}
                </div>
              </time>
            </div>
          </div>
          <Text c="dimmed" size="sm" className="line-clamp-3">
            {post.description}
          </Text>
        </div>
      </Link>
    </div>
  );
};

export default PostCardFlex;
