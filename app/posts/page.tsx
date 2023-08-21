import PostsPage from "@/components/posts/PostsPage";

type Props = {};

const Posts = (props: Props) => {
  const posts = [];
  const tags = [];

  return <PostsPage posts={posts} tags={tags} />;
};

export default Posts;
