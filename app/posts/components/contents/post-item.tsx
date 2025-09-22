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

  const containerClass = isGrid
    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-4"
    : "flex flex-col gap-1";

  const Card = isGrid ? PostCard : PostCardFlex;

  return (
    <div className={containerClass}>
      {posts.map((item) => (
        <Card key={item.id} post={item} />
      ))}
    </div>
  );
};

export default PostItem;
