"use client";

import Link from "next/link";
import { Space, Grid, Text, Box, Center, Divider } from "@mantine/core";

import MorePost from "@/components/Post/MorePost";
import Comments from "./Comments";
import Share from "@/components/Post/Share";

import { PageData } from "@/types";
import { notFound } from "next/navigation";
import { siteMetadata } from "@/site/siteMatedata";
import useGetRelatedPost from "@/hooks/useGetRelatedPost";

type Props = {
  posts: PageData[];
  postData: PageData;
  children: React.ReactNode;
};

const ContentBody = ({ posts, children, postData }: Props) => {
  const { relatedPosts } = useGetRelatedPost({
    posts,
    postTags: postData.tags,
    postId: postData.id,
  });

  // console.log(relatedPosts, "relatedPosts");

  if (!posts.length && !postData) return notFound();

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Grid gutter={50} mt={3}>
        <Grid.Col
          lg={3}
          md={2}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { display: "none" },
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
          <div className="mx-auto mb-8">{children}</div>

          <Space h={"xl"} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text> More in : </Text>
            {postData.tags.map((tag, i) => (
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

          {relatedPosts.length !== 0 ? (
            <Grid gutter="sm">
              {relatedPosts.map((post) => (
                <Grid.Col key={post.id} xs={6} md={4}>
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
          md={2}
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
