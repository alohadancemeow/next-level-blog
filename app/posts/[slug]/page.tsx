import { Metadata, ResolvingMetadata } from "next";

import { getPostById } from "@/actions/getPostById";
import { getPageContent } from "@/lib/notion";
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
  const recordMap = await getPageContent(params.slug);

  return recordMap && <Content recordMap={recordMap} />;
};

export default Post;
