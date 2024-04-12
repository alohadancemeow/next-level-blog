"use client";

import React, { useEffect } from "react";

import { Space, Timeline } from "@mantine/core";
import { Books, Hash, SignRight } from "tabler-icons-react";

import Menu from "@/components/layout/Menu";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import Spotlight from "@/components/Spotlight";
import SearchPost from "@/components/posts/SearchPost";

import { notFound } from "next/navigation";
import { PageData, TagType } from "@/types";

import useFilterPostByTag from "@/hooks/useFilterPostByTag";
import useGetPostsByTag from "@/hooks/useGetPostsByTag";

import TagSection from "./contents/tag-section";
import Section from "./contents/section";
import EndSection from "./contents/end-section";
import { getCategory } from "@/actions/getCategory";

type Props = {
  posts: PageData[];
  tags: TagType;
};

const PostsPage = ({ posts, tags }: Props) => {
  const { tagname, setTagname } = useFilterPostByTag();
  const { filteredPosts } = useGetPostsByTag({ posts, tagname });

  const { categories } = getCategory(posts);
  console.log(categories, "categories");

  useEffect(() => {
    setTagname("");
  }, [setTagname]);

  if (!posts) return notFound();

  return (
    <Spotlight data={posts}>
      <Layout>
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
              <TagSection tags={tags} />
            </Timeline.Item>

            <Timeline.Item
              bullet={<Books size={16} />}
              // lineVariant="dashed"
              title={
                // filteredPosts.length !== 0 ? (
                //   <Highlight highlightColor="orange" highlight={`${tagname}`}>
                //     {`HERE'S ALL POSTS ABOUT " ${tagname.toLocaleUpperCase()} "`}
                //   </Highlight>
                // ) : (
                //   `HERE'S ALL POSTS`
                // )
                // "TODAY-I-LEARNED"
                categories[2].toUpperCase()
              }
            >
              <Section categoryName={categories[2]} />
            </Timeline.Item>
            <Timeline.Item
              bullet={<Books size={16} />}
              title={categories[1].toUpperCase()}
            >
              <Section categoryName={categories[1]} />
            </Timeline.Item>
            <Timeline.Item
              bullet={<Books size={16} />}
              title={categories[0].toUpperCase()}
            >
              <Section categoryName={categories[0]} />
            </Timeline.Item>

            <Timeline.Item
              title="END OF CONTENT"
              bullet={<SignRight size={16} />}
              lineVariant="dashed"
            >
              <EndSection setTagname={setTagname} posts={posts} />
            </Timeline.Item>
          </Timeline>
          <Space h="lg" />
        </PageLayout>
      </Layout>
    </Spotlight>
  );
};

export default PostsPage;
