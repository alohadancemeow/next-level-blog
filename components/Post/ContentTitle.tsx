"use client";

import React from "react";
import { format, parseISO } from "date-fns";

import { Center, Space } from "@mantine/core";

import Breadcrumbs from "@/components/Post/Breadcrumbs";
import Header from "@/components/layout/Header";
import TagItem from "@/app/posts/components/TagItem";

import { PageDataSchemaType } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  postData: PageDataSchemaType;
};

const ContentTitle = ({ postData }: Props) => {
  if (!postData) return notFound();

  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {postData.lastUpdated ? (
        <time dateTime={postData.lastUpdated} style={{ fontSize: "15px" }}>
          {`Last updated: ${format(
            parseISO(postData.lastUpdated),
            "LLLL d, yyyy"
          )}`}
        </time>
      ) : (
        <time dateTime={postData.createdTime} style={{ fontSize: "15px" }}>
          {`${format(parseISO(postData.createdTime), "LLLL d, yyyy")}`}
        </time>
      )}
      <Header title={postData.title} />
      <TagItem tags={postData.tags} />
      <Space h="xs" />
      <Breadcrumbs />
      <Space h="sm" />
    </Center>
  );
};

export default ContentTitle;
