"use client";

import React from "react";
import { format, parseISO } from "date-fns";

import { Center, Space } from "@mantine/core";

import Breadcrumbs from "components/Breadcrumbs";
import Header from "components/Header";
import Tags from "components/Tags";

import { Props } from "pages/posts/[slug]";

const ContentTitle: React.FC<Pick<Props, "post">> = React.memo(({ post }) => {
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {post && (
        <time dateTime={post.date} style={{ fontSize: "15px" }}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      )}
      <Header title={post.title} />
      <Tags tags={post.tags} />
      <Space h="xs" />
      <Breadcrumbs />
      <Space h="sm" />
    </Center>
  );
});

export default ContentTitle;
