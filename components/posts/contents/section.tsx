"use client";

import { getPostCategory } from "@/actions/getPostByCategory";
import SectionBody from "./section-body";
import LoadButton from "@/components/LoadButton";

type Props = {
  categoryName: string;
};

const Section = async ({ categoryName }: Props) => {
  const posts = await getPostCategory(categoryName);

  if (!posts || !posts.length) return null;

  return (
    <>
      <SectionBody posts={posts} />
      <LoadButton categoryName={categoryName} />
    </>
  );
};

export default Section;
