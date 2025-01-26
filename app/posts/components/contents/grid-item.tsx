"use client";

import { PageDataSchemaType } from "@/types";
import PostCard from "@/app/posts/components/PostCard";

type Props = {
  posts: PageDataSchemaType[];
};

const GridItem = ({ posts }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.length === 0
        ? posts.map((item) => <PostCard key={item.id} post={item} />)
        : posts.map((item) => <PostCard key={item.id} post={item} />)}
    </div>
  );
};

export default GridItem;
