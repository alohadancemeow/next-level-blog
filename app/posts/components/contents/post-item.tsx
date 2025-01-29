"use client";

import { PageDataSchemaType } from "@/types";
import PostCard from "@/app/posts/components/PostCard";
import useLayoutStore from "@/hooks/use-layout-store";
import PostCardFlex from "../PostCardFlex";

type Props = {
  posts: PageDataSchemaType[];
};

const PostItem = ({ posts }: Props) => {
  const { isGrid } = useLayoutStore();

  return (
    <>
      {isGrid ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.length === 0
            ? posts.map((item) => <PostCard key={item.id} post={item} />)
            : posts.map((item) => <PostCard key={item.id} post={item} />)}
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {posts.length === 0
            ? posts.map((item) => <PostCardFlex key={item.id} post={item} />)
            : posts.map((item) => <PostCardFlex key={item.id} post={item} />)}
        </div>
      )}
    </>
  );
};

export default PostItem;
