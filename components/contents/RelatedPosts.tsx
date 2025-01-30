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

  return (
    <div>
      {isGrid && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedPosts.map((post) => (
            <MorePost key={post.id} post={post} />
          ))}
        </div>
      )}

      {!isGrid && (
        <div className="flex flex-col gap-1">
          {relatedPosts.map((item) => (
            <PostCardFlex key={item.id} post={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedPosts;
