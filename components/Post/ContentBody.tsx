"use client";

import Link from "next/link";
import { Space, Grid, Text, Box, Center, Divider } from "@mantine/core";

import MorePost from "@/components/Post/MorePost";
import Comments from "./Comments";
import Share from "@/components/Post/Share";

import { PageDataSchemaType } from "@/types";
import { siteMetadata } from "@/site/siteMatedata";
import useGetRelatedPost from "@/hooks/useGetRelatedPost";
import Loader from "../Loader";
import { Suspense } from "react";

type Props = {
  posts: PageDataSchemaType[];
  postData: PageDataSchemaType;
  children: React.ReactNode;
};

const ContentBody = ({ posts, children, postData }: Props) => {
  const { relatedPosts } = useGetRelatedPost({
    posts,
    postTags: postData.tags,
    postId: postData.id,
  });

  // if (!posts.length && !postData) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Grid gutter={50} mt={3}>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 3 }}
            style={(theme) => ({
              [theme.breakpoints.md]: { display: "none" },
            })}
          >
            {postData && (
              <Share
                postLink={`${siteMetadata.siteAddress}/posts/${postData.id}`}
              />
            )}
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, md: 6, lg: 3 }}
            style={(theme) => ({
              [theme.breakpoints.md]: { padding: "0 6rem" },
              [theme.breakpoints.xs]: {
                padding: "0 2.5rem",
                fontSize: "15px",
              },
            })}
          >
            <div className="mx-auto mb-8">{children}</div>

            <Space h={"xl"} />

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text> More in : </Text>
              {postData.tags.map((tag, i) => (
                <Link key={i} href={`/tags/${tag.name}`} legacyBehavior>
                  <Text
                    component="a"
                    style={{
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

            {relatedPosts.length !== 0 ? (
              <Grid gutter="sm">
                {relatedPosts.map((post) => (
                  <Grid.Col key={post.id} span={{ md: 4, xs: 6 }}>
                    <MorePost post={post} />
                  </Grid.Col>
                ))}
              </Grid>
            ) : (
              <Center mt={30}>
                <Text>No post matched... 😕</Text>
              </Center>
            )}

            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"md"} />
            <Divider />
            <Space h={"xl"} />
            <Comments />
          </Grid.Col>

          <Grid.Col
            span={{ md: 2, lg: 3 }}
            style={(theme) => ({
              [theme.breakpoints.md]: { display: "none" },
            })}
          >
            {/* {headings && <TableOfContents links={headings} />} */}
          </Grid.Col>
        </Grid>
      </div>
    </Suspense>
  );
};

export default ContentBody;
