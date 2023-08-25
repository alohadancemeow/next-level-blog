import React from "react";
import Layout from "@/components/Layout";
import ContentTitle from "@/components/Post/ContentTitle";
import ScrollToTop from "@/components/ScrollToTop";

import { getPosts } from "@/lib/notion";
import { getPostById } from "@/actions/getPostById";
import { getToc } from "@/actions/getToc";
import { notFound } from "next/navigation";
import ContentBody from "@/components/Post/ContentBody";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const layout = async ({ children, params }: Props) => {
  const id = params.slug;
  const posts = await getPosts();
  const postData = await getPostById(id);
  const toc = await getToc(id);

  if (!postData) return notFound();
  return (
    <Layout title={postData.title ?? "Post title"}>
      <div
        style={{
          height: "100%",
          padding: "0",
          marginTop: "20px",
        }}
        className="relative"
      >
        <ContentTitle postData={postData} />
        <ContentBody
          posts={posts}
          //   matchedPosts={matchedPosts}
          //   headings={headings}
          //   link={(siteMetadata.siteAddress + post.url) as string}
        >
          <div>{children}</div>
        </ContentBody>

        <ScrollToTop />
      </div>
    </Layout>
  );
};

export default layout;
