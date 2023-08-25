import { Metadata, ResolvingMetadata } from "next";

import api from "@/lib/notion-api";
import { getPostById } from "@/actions/getPostById";
import { PostTag } from "@/types";
import { siteMetadata } from "@/site/siteMatedata";
import Content from "@/components/Post/Content";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const postData = await getPostById(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  // get tag for keywords
  const tags = Object(postData?.tags) as PostTag[];

  return {
    title: `${siteMetadata.title} — ${postData && postData.title}`,
    description: postData && postData.description,
    keywords: postData && tags.map((tag) => tag.name),
    openGraph: {
      images: [(postData && postData.coverImage) as string, ...previousImages],
    },
  };
}

const Post = async ({ params }: Props) => {
  const recordMap = await api.getPage(params.slug);

  return <Content recordMap={recordMap} />;
};

export default Post;

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
