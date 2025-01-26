"use client";

import { Grid } from "@mantine/core";
import PostCard from "@/app/posts/components/PostCard";
import { notFound } from "next/navigation";
import { PageData } from "@/types";
import useGetPostsByTag from "@/hooks/useGetPostsByTag";

type Props = {
  posts: PageData[];
  tagname: string;
};

const TagPage = ({ posts, tagname }: Props) => {
  const { filteredPosts } = useGetPostsByTag({ posts, tagname });

  if (!filteredPosts.length) return notFound();

  return (
    <Grid gutter="lg">
      {filteredPosts.map((post) => (
        <Grid.Col key={post.id} xs={6} md={4}>
          <PostCard post={post} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default TagPage;
