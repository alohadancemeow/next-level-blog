import { Metadata } from "next";
import { getAllPosts } from "@/actions/notion";

import { siteMetadata } from "@/site/siteMatedata";
import { ogPoststImage } from "@/site/data";

import PostsPageLayout from "@/components/posts/PostsPageLayout";
import TimelineContent from "@/components/posts/contents/TimelineContent";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Posts`,
  description: `All posts from ${siteMetadata.title}`,
  openGraph: {
    images: [ogPoststImage],
  },
};

type Props = {};

const Posts = async (props: Props) => {
  const posts = await getAllPosts();

  return (
    <PostsPageLayout posts={posts}>
      <Suspense fallback={<Loader />}>
        <TimelineContent posts={posts} />
      </Suspense>
    </PostsPageLayout>
  );
};

export default Posts;
