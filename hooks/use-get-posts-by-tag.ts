import { useMemo } from "react";
import { PageDataSchemaType } from "@/types";

type Props = {
  posts: PageDataSchemaType[];
  tagname: string;
};

const useGetPostsByTag = ({ posts, tagname }: Props) => {
  const filteredPosts = useMemo(() => {
    const post =
      (posts &&
        posts.filter((post: PageDataSchemaType) =>
          post.tags?.some((t: any) => t?.name === tagname)
        )) ??
      [];

    return post;
  }, [tagname, posts]);

  return { filteredPosts };
};

export default useGetPostsByTag;
