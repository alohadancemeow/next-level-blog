import { useMemo } from "react";
import { PageDataSchemaType, PostTagSchemaType } from "@/types";

type Props = {
  postId: string;
  posts: PageDataSchemaType[];
  postTags: PostTagSchemaType[];
};

const useGetRelatedPosts = ({ postId, posts, postTags }: Props) => {
  // # Get posts that matched with tags, except itself
  const relatedPosts = useMemo(() => {
    try {
      if (!posts && !postTags) return [];

      const tagnames = postTags.map((t) => t.name);
      const matchedPosts = posts.filter(
        (post) =>
          post.tags.find((t) => tagnames.includes(t.name)) && post.id !== postId
      );
      return matchedPosts.slice(0, 3);
    } catch (error) {
      console.log(error);
      return [];
    }
  }, [postId, posts, postTags]);

  return { relatedPosts };
};

export default useGetRelatedPosts;
