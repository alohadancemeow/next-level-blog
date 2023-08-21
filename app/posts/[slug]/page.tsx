import React from 'react'

type Props = {}

const Post = (props: Props) => {
  return (
    <div>Post</div>
  )
}

export default Post

// export const getStaticPaths: GetStaticPaths = () => {
//     const paths: string[] = allPosts.map((post) => post.url);
//     return {
//       paths,
//       fallback: false,
//     };
//   };
  
//   export const getStaticProps: GetStaticProps = ({ params }) => {
//     // # Get a post that it's path = slug
//     const post = allPosts.find(
//       (post) => post._raw.flattenedPath === params!.slug
//     );
  
//     const postTags = post && post.tags;
  
//     // # Sorting all posts by date
//     const posts: Post[] = allPosts.sort((a, b) => {
//       return compareDesc(new Date(a.date), new Date(b.date));
//     });
  
//     // # Get posts that matched with tag,
//     // and that it's path  !== params!.slug
//     const matchedPosts = posts.filter(
//       (post) =>
//         post.tags.find((p) => postTags?.includes(p)) &&
//         post._raw.flattenedPath !== params!.slug
//     );
  
//     return {
//       props: {
//         post,
//         matchedPosts: matchedPosts.slice(0, 3),
//       },
//     };
//   };