"use server";

import { cache } from "react";
import { notion } from "@/lib/notion-client";
import crypto from "crypto";
import { kv } from "@vercel/kv";

// import { revalidatePath } from "next/cache";
import { postMapping } from "@/helpers/post-mapping";

type NotionQueryParams = {
  filter: any;
  sorts: any[];
};

// Helper function to hash data
const hashData = (data: any) => {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
};

// Function to query the Notion database with caching
const queryNotionDatabase = async (queryParams: NotionQueryParams) => {
  const cacheKey = `queryCache-${hashData(queryParams)}`;
  const cachedData = await kv.get(cacheKey);
  const cachedHash = await kv.get(`${cacheKey}-hash`);

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      ...queryParams,
    });

    const newHash = hashData(response.results);

    if (cachedHash === newHash) {
      console.log("Returning cached data");
      return JSON.parse(cachedData as any);
    }

    // If the data has changed, update the cache
    await kv.set(cacheKey, JSON.stringify(response.results), { ex: 60 * 60 }); // Cache for 1 hour
    await kv.set(`${cacheKey}-hash`, newHash, { ex: 60 * 60 }); // Cache for 1 hour

    return response.results;
  } catch (error) {
    console.error("Failed to query Notion database:", error);
    throw new Error("Failed to query Notion database");
  }
};

/**
 * Get all published posts in Notion
 * @returnsType PageData[]
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
  // revalidatePath("/posts", "page");

  return pageData;
});

/**
 * Get posts by category defined in Notion
 * @param categoryName
 * @param limit
 * @param page
 * @returnsType PageData[]
 */
export const getPostsByCategory = async (
  categoryName: string,
  limit: number = 6,
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

// Retrieve a specific page from Notion
export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});
