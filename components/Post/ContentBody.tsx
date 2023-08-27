"use client";

import Link from "next/link";
import { Space, Grid, Text, Box } from "@mantine/core";

import MorePost from "@/components/MorePost";
import Comments from "./Comments";
import Share from "@/components/Share";

import { PageData, PostTag } from "@/types";
import { notFound } from "next/navigation";
import { siteMetadata } from "@/site/siteMatedata";

type Props = {
  posts: PageData[];
  postData: PageData;
  children: React.ReactNode;
};

const ContentBody = ({ posts, children, postData }: Props) => {
  const tags = Object(postData.tags) as PostTag[];

  if (!posts.length && !postData) return notFound();

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Grid gutter={50} mt={3}>
        <Grid.Col
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("lg")]: { display: "none" },
          })}
        >
          {postData && (
            <Share
              postLink={`${siteMetadata.siteAddress}/posts/${postData.id}`}
            />
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
          <div className="mx-auto">{children}</div>

          <Space h={"xl"} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text> More in : </Text>
            {tags.map((tag, i) => (
              <Link key={i} href={`/tags/${tag.name}`} legacyBehavior>
                <Text
                  component="a"
                  sx={{
                    textDecoration: "none",
                    // color: `${tag.color ?? "gray"}`,
                    paddingInlineStart: "8px",
                  }}
                >
                  {`#${tag.name}`}
                </Text>
              </Link>
            ))}
          </Box>

          <Grid gutter="sm">
            {posts.map((post) => (
              <Grid.Col key={post.id} xs={6} md={4}>
                <MorePost post={post} />
              </Grid.Col>
            ))}
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
