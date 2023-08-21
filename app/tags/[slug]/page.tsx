import TagPage from "@/components/tag/TagPage";

type Props = {};

const Tag = (props: Props) => {
  const posts = [];
  const matchedPosts = [];

  return <TagPage posts={posts} matchedPosts={matchedPosts} />;
};

export default Tag;

// export const getStaticPaths: GetStaticPaths = async () => {
//     const paths: string[] = [];

//     allPosts.forEach((post) =>
//       post.tags.forEach((tag) => paths.push(`/tags/${tag.split(" ").join("-")}`))
//     );
//     return {
//       paths,
//       fallback: false,
//     };
//   };

//   export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const matchedPosts: Post[] = [];

//     // Get all posts,
//     // Sorting the posts by date.
//     const posts: Post[] = allPosts.sort((a, b) => {
//       return compareDesc(new Date(a.date), new Date(b.date));
//     });

//     // Get posts that matched with tag
//     allPosts.forEach((post) =>
//       post.tags.forEach((tag) => {
//         if (tag.split(" ").join("-") === params!.slug) {
//           matchedPosts.push(post);
//         }
//       })
//     );

//     return {
//       props: {
//         posts,
//         matchedPosts,
//       },
//     };
//   };
