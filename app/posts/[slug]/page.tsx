import { Metadata, ResolvingMetadata } from "next";
import { getPostById } from "@/actions/get-post-by-id";
import { getPageContent } from "@/actions/notion-x";
import { PostTagSchemaType } from "@/types";

import { siteMetadata } from "@/site/siteMatedata";
import Content from "@/components/contents/Content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostById(slug);
  if (!postData) return {};

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // get tag for keywords
  const tags = (postData.tags || []) as PostTagSchemaType[];

  return {
    title: `${siteMetadata.title} — ${postData.title}`,
    description: postData && postData.description,
    keywords: tags.map((tag) => String(tag.name)),
    openGraph: {
      images: postData.coverImage
        ? [postData.coverImage, ...previousImages]
        : previousImages,
    },
  };
}

const Post = async ({ params }: Props) => {
  const { slug } = await params;
  const recordMap = await getPageContent(slug);

  return recordMap && <Content recordMap={recordMap} />;
};

export default Post;
