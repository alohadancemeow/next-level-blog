import { Metadata } from "next";
import { getAllPosts } from "@/lib/notion";

import { siteMetadata } from "@/site/siteMatedata";
import { ogPoststImage } from "@/site/data";

import PostsPage from "@/components/posts/PostsPageLayout";
import TimelineContent from "@/components/posts/contents/TimelineContent";

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
    <PostsPage posts={posts}>
      <TimelineContent posts={posts} />
    </PostsPage>
  );
};

export default Posts;
