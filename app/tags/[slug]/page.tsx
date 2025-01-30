import { getAllPosts } from "@/actions/notion";
import { Metadata, ResolvingMetadata } from "next";
import { siteMetadata } from "@/site/siteMatedata";

import TagPage from "@/app/tags/components/TagPage";
import { ogTagImage } from "@/site/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent)?.openGraph?.images || [];
  const { slug } = await params;

  return {
    title: `${siteMetadata.title} — ${slug}`,
    description: `Posts about ${slug}`,
    openGraph: {
      images: [ogTagImage, ...previousImages],
    },
  };
}

const Tag = async ({ params }: Props) => {
  const { slug } = await params;
  const posts = await getAllPosts();

  return <TagPage posts={posts} tagname={slug} />;
};

export default Tag;
