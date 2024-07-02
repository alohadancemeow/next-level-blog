"use client";

import useFetchPosts from "@/hooks/useFetchPosts";
import SectionBody from "./section-body";
import LoadButton from "@/components/LoadButton";
import { Suspense } from "react";
import Loader from "@/components/Loader";

type Props = {
  categoryName: string;
  description: string;
};

const Section = ({ categoryName, description }: Props) => {
  const { posts, loadNextPost, isFetchingNextPage, hasNextPage } =
    useFetchPosts({ categoryName });

  // console.log(hasNextPage, isFetchingNextPage);

  if (!posts || !posts.length) return null;

  return (
    <Suspense fallback={<Loader />}>
      <SectionBody posts={posts} description={description} />
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

export default Section;
