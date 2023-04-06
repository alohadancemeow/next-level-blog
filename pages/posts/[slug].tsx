import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useEffect, useState } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

import { Prism } from "@mantine/prism";
import {
  Space,
  Center,
  Grid,
  Image,
  AspectRatio,
  Text,
  Box,
} from "@mantine/core";

import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from "components/TableOfContents";
import Header from "components/Header";
import CodeBox from "components/Post/Code";
import { CSSIcon, JsIcon, TsIcon, NpmIcon } from "components/Post/SvgIcons";
import Comments from "components/Comments";
import Breadcrumbs from "components/Breadcrumbs";
import ScrollToTop from "components/ScrollToTop";
import Share from "components/Share";

import { NextSeo } from "next-seo";
import { siteMetadata } from "site/siteMatedata";
import { useRouter } from "next/router";
import MorePost from "components/MorePost";

const myMdxComponents = {
  CodeBox,
  Space,
  Prism,
  Image,
  CSSIcon,
  JsIcon,
  TsIcon,
  NpmIcon,
  AspectRatio,
};

type ContentHeader = {
  label: string;
  link: string;
  order: number;
};

export type Props = {
  post: Post;
  matchedPosts: Post[];
};

const PostLayout: NextPage<Props> = ({ post, matchedPosts }) => {
  const router = useRouter();

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
          <ContentBody post={post} matchedPosts={matchedPosts} />

          <ScrollToTop />
        </div>
      </Layout>
    </>
  );
};

export default PostLayout;

const MemoizedComments = React.memo(Comments);

// # Title of contents
const ContentTitle: React.FC<Pick<Props, "post">> = React.memo(({ post }) => {
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <time dateTime={post.date} style={{ fontSize: "15px" }}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <Header title={post.title} />
      <Tags tags={post.tags} />
      <Space h="xs" />
      <Breadcrumbs />
      <Space h="sm" />
    </Center>
  );
});

// Body of contents
const ContentBody: React.FC<Props> = React.memo(({ post, matchedPosts }) => {
  const MDXContent = useMDXComponent(post.body.code);

  // get element's headings
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
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Grid gutter={50}>
        <Grid.Col
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("lg")]: { display: "none" },
          })}
        >
          {post && (
            <Share postLink={(siteMetadata.siteAddress + post.url) as string} />
          )}
        </Grid.Col>

        <Grid.Col
          md={8}
          lg={6}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { padding: "0 6rem" },
            [theme.fn.smallerThan("xs")]: {
              padding: "0 2.5rem",
              fontSize: "15px",
            },
          })}
        >
          <article>
            <MDXContent components={myMdxComponents} />
          </article>
          <Space h={"xl"} />
          {/* # Note More post */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text> More in : </Text>
            {post.tags.map((tag, i) => (
              <Link
                key={i}
                href={`/tags/${tag.split(" ").join("-")}`}
                legacyBehavior
              >
                <Text
                  component="a"
                  sx={{
                    textDecoration: "none",
                    // color: "grey",
                    paddingInlineStart: "8px",
                  }}
                >
                  {`#${tag}`}
                </Text>
              </Link>
            ))}
          </Box>

          <Grid gutter="sm">
            {matchedPosts.map((post) => (
              <Grid.Col key={post._id} xs={6} md={4}>
                <MorePost {...post} />
              </Grid.Col>
            ))}
          </Grid>

          <Space h={"xl"} />
          <Space h={"xl"} />
          <MemoizedComments />
        </Grid.Col>

        <Grid.Col
          md={4}
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { display: "none" },
          })}
        >
          {headings && <TableOfContents links={headings} />}
        </Grid.Col>
      </Grid>
    </div>
  );
});

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
