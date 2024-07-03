import { getAllPosts } from "@/lib/notion";
import { Metadata, ResolvingMetadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";

import TagPage from "@/components/tag/TagPage";
import { ogTagImage } from "@/site/data";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: `${siteMetadata.title} — ${params.slug}`,
    description: `Posts about ${params.slug}`,
    openGraph: {
      images: [ogTagImage, ...previousImages],
    },
  };
}

type Props = {
  params: {
    slug: string;
  };
};

const Tag = async ({ params }: Props) => {
  const posts = await getAllPosts();

  return <TagPage posts={posts} tagname={params.slug} />;
};

export default Tag;
