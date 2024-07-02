"use server";

import { cache } from "react";
import { notion } from "./notion-client";
import api from "./notion-api";

import { revalidatePath } from "next/cache";
import { postMapping } from "./helpers";

type NotionQueryParams = {
  filter: any;
  sorts: any[];
};

const queryNotionDatabase = async (queryParams: NotionQueryParams) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      ...queryParams,
    });

    return response.results;
  } catch (error) {
    throw new Error("Failed to query Notion database");
  }
};

/**
 * get all published posts in notion
 * @returnsType: PageData[]
 */
export const getAllPosts = cache(async () => {
  const queryParams: NotionQueryParams = {
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
  };

  const results = await queryNotionDatabase(queryParams);
  if (!results.length) return [];

  const pageData = postMapping(results);

  revalidatePath("/posts", "page");

  return pageData;
});

/**
 * get posts by category that defined in notion
 * @params categoryName, limit, page
 * @returnsType PageData[]
 */
export const getPostsByCategory = async (
  categoryName: string,
  limit: number,
  page: number
) => {
  const queryParams: NotionQueryParams = {
    filter: {
      and: [
        {
          property: "Category",
          select: {
            equals: categoryName,
          },
        },
        {
          property: "Status",
          status: {
            equals: "Done",
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  };

  const results = await queryNotionDatabase(queryParams);
  if (!results.length) return [];

  const pageData = postMapping(results.slice((page - 1) * limit, page * limit));

  return pageData;
};

// export const getUser = cache(async (userId: string) => {
//   const response = await notion.users.retrieve({ user_id: userId });
//   return response;
// });

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

// <---- # using react-notion-x for rendering content ---->

type PageContentFetcher = (slug: string) => Promise<any>;

/**
 * @author unoffial api (react-notion-x)
 * @param pageId (notion-post-ID)
 * @returnsType ExtendedRecordMap
 */
const fetchPageContent: PageContentFetcher = cache(async (pageId: string) => {
  try {
    if (!pageId) return null;
    const recordMap = await api.getPage(pageId);
    return recordMap;
  } catch (error) {
    throw new Error("Failed to fetch page content");
  }
});

export const getPageContent = (slug: string) => fetchPageContent(slug);

export const getAboutPageContent = () => {
  const aboutPageId = process.env.NOTION_ABOUT_PAGE_ID as string;
  revalidatePath("/about", "page");

  return fetchPageContent(aboutPageId);
};

export const getNotePageContent = () => {
  const notePageId = process.env.NOTION_NOTE_PAGE_ID as string;
  revalidatePath("/note", "page");

  return fetchPageContent(notePageId);
};

export const getProjectPageContent = () => {
  const projectPageId = process.env.NOTION_PROJECT_PAGE_ID as string;
  revalidatePath("/project", "page");

  return fetchPageContent(projectPageId);
};
