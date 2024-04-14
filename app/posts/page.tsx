import { Metadata } from "next";
import { getPosts } from "@/lib/notion";
import { getTags } from "@/actions/getTags";
import { getCategory } from "@/actions/getCategory";

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
  const posts = await getPosts();
  const tags = posts && getTags(posts);

  const { categories } = getCategory(posts);

  return (
    <PostsPage posts={posts} tags={tags} categoryCount={categories.length}>
      <TimelineContent categories={categories} posts={posts} />
    </PostsPage>
  );
};

export default Posts;
