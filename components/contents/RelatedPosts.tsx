"use client";

import useGetRelatedPosts from "@/hooks/use-get-related-posts";
import { PageDataSchemaType } from "@/types";
import { Center, Text } from "@mantine/core";
import MorePost from "./MorePost";
import useLayoutStore from "@/hooks/use-layout-store";
import PostCardFlex from "@/app/posts/components/PostCardFlex";

type Props = {
  posts: PageDataSchemaType[];
  postData: PageDataSchemaType;
};

const RelatedPosts = ({ postData, posts }: Props) => {
  const { isGrid } = useLayoutStore();
  const { relatedPosts } = useGetRelatedPosts({
    posts,
    postTags: postData.tags,
    postId: postData.id,
  });

  if (relatedPosts.length === 0)
    return (
      <Center mt={30}>
        <Text>No post matched... 😕</Text>
      </Center>
    );

  const containerClass = isGrid
    ? "grid grid-cols-2 md:grid-cols-3 gap-4"
    : "flex flex-col gap-1";

  const Card = isGrid ? MorePost : PostCardFlex;

  return (
    <div className={containerClass}>
      {relatedPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RelatedPosts;
