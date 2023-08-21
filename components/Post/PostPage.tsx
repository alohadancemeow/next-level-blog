"use client";

import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { compareDesc } from "date-fns";

import { NextSeo } from "next-seo";
import { siteMetadata } from "@/site/siteMatedata";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import ContentTitle from "@/components/Post/ContentTitle";
import ContentBody from "@/components/Post/ContentBody";

export type Props = {
  post: any;
  matchedPosts: any[];
};

export type ContentHeader = {
  label: string;
  link: string;
  order: number;
};

const PostLayout: NextPage<Props> = ({ post, matchedPosts }) => {
  const router = useRouter();

  // get element's headings,
  // every time when post changed
  const [headings, setHeadings] = useState<ContentHeader[]>();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2,h3"))
      .filter((el) => el.id)
      .map((el) => ({
        label: el.textContent || "",
        link: el.id,
        order: Number(el.tagName.substring(1)) - 1,
      }));
    setHeadings(elements);
  }, [post]);

  return (
    <>
      <NextSeo
        title={`${post.title} | ${siteMetadata.title}`}
        description={post.description}
        canonical={siteMetadata.siteAddress}
        openGraph={{
          url: `${siteMetadata.siteAddress}${router.asPath}`,
          title: `${post.title} | ${siteMetadata.title}`,
          description: `${post.description}`,
          site_name: `${siteMetadata.title}`,
          images: [
            {
              url: `${post.image}`,
              alt: `${post.title} cover-image`,
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: `${siteMetadata.twitter}`,
          site: `${siteMetadata.twitter}`,
          cardType: "summary_large_image",
        }}
      />

      <Layout title={post.title}>
        <div
          style={{
            height: "100%",
            padding: "0",
            marginTop: "20px",
          }}
        >
          <ContentTitle post={post} />
          <ContentBody
            post={post}
            matchedPosts={matchedPosts}
            headings={headings}
            link={(siteMetadata.siteAddress + post.url) as string}
          />

          <ScrollToTop />
        </div>
      </Layout>
    </>
  );
};

export default PostLayout;
