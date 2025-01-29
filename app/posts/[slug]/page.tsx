import { Metadata, ResolvingMetadata } from "next";
import { getPostById } from "@/actions/get-post-by-id";
import { getPageContent } from "@/actions/notion-x";
import { TagSchemaType } from "@/types";
import { siteMetadata } from "@/site/siteMatedata";
import Content from "@/components/contents/Content";

type Params = Promise<{ slug: string }>;

type Props = {
  params: Params;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostById(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  // get tag for keywords
  const tags = Object(postData?.tags) as TagSchemaType[];

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
  const { slug } = await params;
  const recordMap = await getPageContent(slug);

  return recordMap && <Content recordMap={recordMap} />;
};

export default Post;
