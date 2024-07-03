"use client";

import { Divider, Space, Timeline } from "@mantine/core";
import { Hash } from "tabler-icons-react";

import Menu from "@/components/layout/Menu";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import Spotlight from "@/components/Spotlight";
import SearchPost from "@/components/posts/SearchPost";
import TagSection from "./contents/tag-section";

import { PageData } from "@/types";
import { getCategory, getTags } from "@/lib/helpers";
import Loader from "../Loader";

type Props = {
  children: React.ReactNode;
  posts: PageData[];
};

const PostsPageLayout = ({ children, posts }: Props) => {
  if (!posts) return <Loader />;

  const tags = getTags(posts);
  const categoryCount = getCategory(posts).length;

  return (
    <Spotlight data={posts}>
      <Layout>
        <PageLayout>
          <Menu title="alohadancemeow posts" />
          <SearchPost />

          <Space h="md" />

          <Timeline
            // active={0}
            bulletSize={24}
            lineWidth={2}
            sx={{ padding: "0" }}
          >
            <Timeline.Item
              bullet={<Hash size={16} />}
              title="CHOOSE YOUR CONTENT"
            >
              <TagSection tags={tags} categoryCount={categoryCount} />
            </Timeline.Item>
          </Timeline>

          <Divider />
          <Space h="sm" />
          {children}
          <Space h="lg" />
        </PageLayout>
      </Layout>
    </Spotlight>
  );
};

export default PostsPageLayout;
