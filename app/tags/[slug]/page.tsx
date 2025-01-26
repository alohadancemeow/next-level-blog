import { getAllPosts } from "@/actions/notion";
import { Metadata, ResolvingMetadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";

import TagPage from "@/app/tags/components/TagPage";
import { ogTagImage } from "@/site/data";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const previousImages = (await props.parent)?.openGraph?.images || [];
  const params = await props.params;

  return {
    title: `${siteMetadata.title} — ${params.slug}`,
    description: `Posts about ${params.slug}`,
    openGraph: {
      images: [ogTagImage, ...previousImages],
    },
  };
}

const Tag = async (props: { params: Params }) => {
  const { slug } = await props.params;
  const posts = await getAllPosts();

  return <TagPage posts={posts} tagname={slug} />;
};

export default Tag;
