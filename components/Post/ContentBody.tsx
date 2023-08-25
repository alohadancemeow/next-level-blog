"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

import { CSSIcon, JsIcon, TsIcon, NpmIcon } from "@/components/Post/SvgIcons";
import { Prism } from "@mantine/prism";
import { Space, Grid, Image, AspectRatio, Text, Box } from "@mantine/core";

import CodeBox from "@/components/Post/Code";
import TableOfContents from "@/components/TableOfContents";
import MorePost from "@/components/MorePost";
import Comments from "./Comments";
import Share from "@/components/Share";
import { PageData } from "@/types";

import { notFound } from "next/navigation";

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

// interface ContentProps extends Props {
//   headings: ContentHeader[] | undefined;
//   link: string;
// }

type Props = {
  posts: PageData[];
  children: React.ReactNode;
};

const ContentBody = ({ posts, children }: Props) => {
  if (!posts.length) return notFound();

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
          {/* {post && <Share postLink={link} />} */}
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
          <div className="prose">{children}</div>

          <Space h={"xl"} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text> More in : </Text>
            {/* {post.tags.map((tag, i) => (
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
            ))} */}
          </Box>

          <Grid gutter="sm">
            more posts
            {/* {matchedPosts.map((post) => (
              <Grid.Col key={post._id} xs={6} md={4}>
                <MorePost {...post} />
              </Grid.Col>
            ))} */}
          </Grid>

          <Space h={"xl"} />
          <Space h={"xl"} />
          <Space h={"xl"} />
          <Comments />
        </Grid.Col>

        <Grid.Col
          md={4}
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { display: "none" },
          })}
        >
          {/* {headings && <TableOfContents links={headings} />} */}
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ContentBody;
