"use client";

import React, { useEffect } from "react";
import { format, parseISO } from "date-fns";

import { Space, Grid, Timeline, Text, Highlight } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Books, Hash, SignRight } from "tabler-icons-react";

import PostCard from "@/components/PostCard";
import Menu from "@/components/Menu";
import TagsBanner from "@/components/TagsBanner";
import Layout from "@/components/Layout";
import PageLayout from "@/components/PageLayout";
import Spotlight from "@/components/Spotlight";
import SearchPost from "@/components/SearchPost";

import { notFound } from "next/navigation";
import { PageData, Tags } from "@/types";

import useFilterPostByTag from "@/hooks/useFilterPostByTag";
import useGetPostsByTag from "@/hooks/useGetPostsByTag";

type Props = {
  posts: PageData[];
  tags: Tags;
};

const PostsPage = ({ posts, tags }: Props) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { tagname, setTagname } = useFilterPostByTag();
  const { filteredPosts } = useGetPostsByTag({ posts, tagname });

  useEffect(() => {
    setTagname("");
  }, []);

  if (!posts) return notFound();

  return (
    <Spotlight data={posts}>
      <Layout title="Posts">
        <PageLayout>
          <Menu title="alohadancemeow posts" />
          <SearchPost />

          <Space h="md" />

          <Timeline
            // active={2}
            bulletSize={24}
            lineWidth={2}
            sx={{ padding: "0" }}
          >
            <Timeline.Item
              bullet={<Hash size={16} />}
              title="CHOOSE YOUR CONTENT"
            >
              <Text color="dimmed" size="xs" mt={4}>
                {`${Object.keys(tags).length}`} tags in alohadancemeow posts
              </Text>
              <Space h="md" />
              <TagsBanner tags={tags} />
              <Space h="lg" />
            </Timeline.Item>

            <Timeline.Item
              bullet={<Books size={16} />}
              // lineVariant="dashed"
              title={
                filteredPosts.length !== 0 ? (
                  <Highlight highlightColor="orange" highlight={`${tagname}`}>
                    {`HERE'S ALL POSTS ABOUT " ${tagname.toLocaleUpperCase()} "`}
                  </Highlight>
                ) : (
                  `HERE'S ALL POSTS`
                )
              }
            >
              <Text color="dimmed" size="xs" mt={4}>
                {`Found ${
                  filteredPosts.length === 0
                    ? posts.length
                    : filteredPosts.length
                } results`}
              </Text>
              <Space h="xl" />

              <Grid gutter="lg">
                {filteredPosts.length === 0
                  ? posts.map((item) => (
                      <Grid.Col key={item.id} xs={6} md={4}>
                        <PostCard post={item} />
                      </Grid.Col>
                    ))
                  : filteredPosts.map((item) => (
                      <Grid.Col key={item.id} xs={6} md={4}>
                        <PostCard post={item} />
                      </Grid.Col>
                    ))}
              </Grid>
              <Space h="xl" />
            </Timeline.Item>

            <Timeline.Item
              title="END OF CONTENT"
              bullet={<SignRight size={16} />}
              lineVariant="dashed"
            >
              <Text color="dimmed" size="sm">
                That&apos;s all posts for you, {""}
                <Text
                  // variant="gradient"
                  component="span"
                  inherit
                  onClick={() => {
                    setTagname("");
                    if (scroll.y > 0) scrollTo({ y: 0 });
                  }}
                  sx={{
                    color: "orange",
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
                {`${format(
                  parseISO(posts[0]?.lastUpdated ?? "2023-07-27T17:12:00.000Z"),
                  "LLLL d, yyyy"
                )}`}
              </Text>
            </Timeline.Item>
          </Timeline>
          <Space h="lg" />
        </PageLayout>
      </Layout>
    </Spotlight>
  );
};

export default PostsPage;
