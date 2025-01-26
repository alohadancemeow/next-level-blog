"use client";

import useFetchPosts from "@/hooks/useFetchPosts";
import GridItem from "./grid-item";
import LoadButton from "@/components/LoadButton";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { Text, Space } from "@mantine/core";

type Props = {
  categoryName: string;
  description: string;
};

const PostGrid = ({ categoryName, description }: Props) => {
  const { posts, loadNextPost, isFetchingNextPage, hasNextPage } =
    useFetchPosts({ categoryName });

  // console.log(hasNextPage, isFetchingNextPage);

  if (!posts || !posts.length) return null;

  return (
    <Suspense fallback={<Loader />}>
      <Text c="dimmed" size="xs" mt={4}>
        {`${description}`}
      </Text>
      <Space h="xl" />
      <GridItem posts={posts} />
      <Space h="xl" />
      {hasNextPage && (
        <LoadButton
          categoryName={categoryName}
          loadNextPost={loadNextPost}
          isFetchingNextPage={isFetchingNextPage}
          postCount={posts.length}
        />
      )}
    </Suspense>
  );
};

export default PostGrid;
