import { useMemo } from "react";
import { PageData } from "@/types";

type Props = {
  posts: PageData[];
  tagname: string;
};

const useGetPostsByTag = ({ posts, tagname }: Props) => {
  const filteredPosts = useMemo(() => {
    const post =
      (posts &&
        posts.filter((post: PageData) =>
          post.tags?.some((t: any) => t?.name === tagname)
        )) ??
      [];

    return post;
  }, [tagname, posts]);

  return { filteredPosts };
};

export default useGetPostsByTag;
