import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Space, Grid, Timeline, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import PostCard from "components/PostCard";
import Menu from "components/Menu";
import TagsBanner from "components/TagsBanner";
import Layout from "components/Layout";
import PageLayout from "components/PageLayout";
import Spotlight from "components/Spotlight";
import SearchPost from "components/SearchPost";

import { NextSeo } from "next-seo";
import { siteMetadata } from "site/siteMatedata";

export type Tags = {
  [key: string]: number;
};

type Props = {
  posts: Post[];
  tags: Tags;
};

const PostsPage: NextPage<Props> = ({ posts, tags }) => {
  const [filteredByTag, setFilteredByTag] = useState<Tags>({
    "": 0,
  });

  const filteredByTagKey = Object.keys(filteredByTag);

  const postByTag = posts.filter((post) =>
    post.tags.some((t) => t === filteredByTagKey[0])
  );

  return (
    <>
      <NextSeo
        title={`Posts | ${siteMetadata.title}`}
        description={`All posts from ${siteMetadata.title}`}
        canonical={siteMetadata.siteAddress}
        openGraph={{
          url: `${siteMetadata.siteAddress}/posts`,
          title: `Posts | ${siteMetadata.title}`,
          description: `All posts from ${siteMetadata.title} blog`,
          images: [
            {
              url: "/assets/site/og-posts.png",
              alt: "posts page",
              type: "image/png",
            },
            // { url: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' },
          ],
          site_name: `${siteMetadata.title}`,
        }}
        twitter={{
          handle: `${siteMetadata.twitter}`,
          site: `${siteMetadata.twitter}`,
          cardType: "summary_large_image",
        }}
      />

      <Contents
        posts={posts}
        tags={tags}
        filteredByTag={filteredByTag}
        setFilteredByTag={setFilteredByTag}
        postByTag={postByTag}
      />
    </>
  );
};

interface ContentProps extends Props {
  postByTag: Post[];
  filteredByTag: Tags;
  setFilteredByTag: React.Dispatch<React.SetStateAction<Tags>>;
}

const Contents: React.FC<ContentProps> = React.memo(
  ({ posts, tags, filteredByTag, setFilteredByTag, postByTag }) => {
    const [scroll, scrollTo] = useWindowScroll();
    return (
      <Spotlight data={posts}>
        <Layout title="Posts">
          <PageLayout>
            <Menu title="alohadancemeow posts" />
            <SearchPost />

            <Space h="md" />

            <Timeline
              active={2}
              bulletSize={24}
              lineWidth={2}
              sx={{ padding: "0" }}
            >
              <Timeline.Item bullet={"#"} title="CHOOSE YOUR CONTENT">
                <Text color="dimmed" size="xs" mt={4}>
                  {`${Object.keys(tags).length}`} tags in alohadancemeow posts
                </Text>
                <Space h="md" />
                <TagsBanner tags={tags} setFilteredByTag={setFilteredByTag} />
                <Space h="lg" />
              </Timeline.Item>

              <Timeline.Item
                bullet={"#"}
                // lineVariant="dashed"
                title={
                  postByTag.length !== 0
                    ? `HERE'S ALL POSTS ABOUT "${String(
                        Object.keys(filteredByTag)
                      ).toLocaleUpperCase()}"`
                    : `HERE'S ALL POSTS`
                }
              >
                <Text color="dimmed" size="xs" mt={4}>
                  About{" "}
                  {`${
                    postByTag.length === 0
                      ? posts.length
                      : Object.values(filteredByTag)
                  }`}{" "}
                  results
                </Text>
                <Space h="xl" />

                <Grid gutter="lg">
                  {postByTag.length === 0
                    ? posts.map((item, idx) => (
                        <Grid.Col key={idx} xs={6} md={4}>
                          <PostCard post={item} />
                        </Grid.Col>
                      ))
                    : postByTag.map((item, idx) => (
                        <Grid.Col key={idx} xs={6} md={4}>
                          <PostCard post={item} />
                        </Grid.Col>
                      ))}
                </Grid>
                <Space h="xl" />
              </Timeline.Item>

              <Timeline.Item
                title="END OF CONTENT"
                bullet={"#"}
                lineVariant="dashed"
              >
                <Text color="dimmed" size="sm">
                  You&apos;ve submitted a pull request {""}
                  <Text
                    variant="link"
                    component="span"
                    inherit
                    onClick={() => {
                      setFilteredByTag({ [""]: 0 });
                      if (scroll.y > 0) scrollTo({ y: 0 });
                    }}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                  >
                    Clear filter and back to top ({`#${posts.length}`})
                  </Text>
                </Text>
                <Text size="xs" mt={4}>
                  Last updated on{" "}
                  {`${format(parseISO(posts[0].date), "LLLL d, yyyy")}`}
                </Text>
              </Timeline.Item>
            </Timeline>
            <Space h="lg" />
          </PageLayout>
        </Layout>
      </Spotlight>
    );
  }
);

export default PostsPage;

export const getStaticProps: GetStaticProps = async () => {
  // Get all posts,
  // Sorting the posts by date.
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  // Get all tags
  const tags: Tags = {};
  allPosts.map((post) =>
    post.tags.map((tag) => {
      if (!tags[tag]) {
        tags[tag] = 1;
      } else {
        tags[tag] += 1;
      }
    })
  );

  return {
    props: {
      posts,
      tags,
    },
  };
};
