import { Metadata } from "next";
import { getTags } from "@/actions/getTags";
import { getPosts } from "@/lib/notion";

import PostsPage from "@/components/posts/PostsPage";
import { siteMetadata } from "@/site/siteMatedata";

export const metadata: Metadata = {
  title: `${siteMetadata.title} — Posts`,
  description: `All posts from ${siteMetadata.title}`,
};

type Props = {};

const Posts = async (props: Props) => {
  const posts = await getPosts();
  const tags = posts && getTags(posts);

  return <PostsPage posts={posts} tags={tags} />;
};

export default Posts;
