import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { NextSeo } from "next-seo";
import { siteMetadata } from "site/siteMatedata";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import ScrollToTop from "components/ScrollToTop";
import ContentTitle from "components/Post/ContentTitle";
import ContentBody from "components/Post/ContentBody";

export type Props = {
  post: Post;
  matchedPosts: Post[];
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
          />

          <ScrollToTop />
        </div>
      </Layout>
    </>
  );
};

export default PostLayout;

export const getStaticPaths: GetStaticPaths = () => {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  // # Get a post that it's path = slug
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params!.slug
  );

  const postTags = post && post.tags;

  // # Sorting all posts by date
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  // # Get posts that matched with tag,
  // and that it's path  !== params!.slug
  const matchedPosts = posts.filter(
    (post) =>
      post.tags.find((p) => postTags?.includes(p)) &&
      post._raw.flattenedPath !== params!.slug
  );

  return {
    props: {
      post,
      matchedPosts: matchedPosts.slice(0, 3),
    },
  };
};
