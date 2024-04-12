"use server";

import { cache } from "react";
import { notion } from "./notion-client";
import api from "./notion-api";

import { PageData } from "@/types";
import { defaultImage } from "@/site/data";

export const getPosts = cache(async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        property: "Status",
        status: {
          equals: "Done",
        },
      },
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    });

    if (!response.results.length) return [];

    const pageData: PageData[] = response.results.map((page: any) => {
      const post: PageData = {
        id: page?.id,
        title: page?.properties?.Name?.title[0]?.plain_text ?? "title",
        createdTime: page?.created_time ?? "2023-07-27T17:12:00.000Z",
        lastUpdated: page?.last_edited_time ?? "2023-07-27T17:12:00.000Z",
        tags: page?.properties?.Tags?.multi_select ?? [],
        description:
          page?.properties?.Description?.rich_text[0]?.plain_text ??
          `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptatum nesciunt assumenda accusamus eius rem?`,
        coverImage:
          page?.cover?.external?.url ?? page?.cover?.file?.url ?? defaultImage,
        authorId: page?.created_by?.id,
        lastEditedBy: page?.last_edited_by?.id,
        icon: page?.icon?.emoji,
        category: page?.properties?.Category?.select?.name,
      };

      return post;
    });

    return pageData;
  } catch (error) {
    // console.log(error);
    throw new Error();
  }
});

export const getUser = cache(async (userId: string) => {
  const response = await notion.users.retrieve({ user_id: userId });
  return response;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

// # Using unoffial api
export const getPageContent = cache(async (slug: string) => {
  try {
    if (!slug) return null;

    const recordMap = await api.getPage(slug);
    return recordMap;
  } catch (error) {
    // console.log(error);
    throw new Error();
  }
});
