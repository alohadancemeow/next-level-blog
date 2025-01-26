"use client";

import useGetRelatedPost from "@/hooks/useGetRelatedPost";
import { PageDataSchemaType } from "@/types";
import { Center, Text } from "@mantine/core";
import MorePost from "./MorePost";

type Props = {
  posts: PageDataSchemaType[];
  postData: PageDataSchemaType;
};

const RelatedPosts = ({ postData, posts }: Props) => {
  const { relatedPosts } = useGetRelatedPost({
    posts,
    postTags: postData.tags,
    postId: postData.id,
  });

  return (
    <div>
      {relatedPosts.length !== 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedPosts.map((post) => (
            <MorePost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Center mt={30}>
          <Text>No post matched... 😕</Text>
        </Center>
      )}
    </div>
  );
};

export default RelatedPosts;
