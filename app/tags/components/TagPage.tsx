"use client";

import PostCard from "@/app/posts/components/PostCard";
import { notFound } from "next/navigation";
import { PageDataSchemaType } from "@/types";
import useGetPostsByTag from "@/hooks/use-get-posts-by-tag";

type Props = {
  posts: PageDataSchemaType[];
  tagname: string;
};

const TagPage = ({ posts, tagname }: Props) => {
  const { filteredPosts } = useGetPostsByTag({ posts, tagname });

  if (!filteredPosts.length) return notFound();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TagPage;
