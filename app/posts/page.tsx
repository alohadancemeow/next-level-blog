import { getTags } from "@/actions/getTags";
import { getPosts } from "@/lib/notion";

import PostsPage from "@/components/posts/PostsPage";

type Props = {};

const Posts = async (props: Props) => {
  const posts = await getPosts();
  const tags = posts && getTags(posts);

  return <PostsPage posts={posts} tags={tags} />;
};

export default Posts;
