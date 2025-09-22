"use server";

import api from "@/lib/notion-api";
import { revalidatePath } from "next/cache";

type PageContentFetcher = (slug: string) => Promise<any>;

/**
 * # Using react-notion-x for rendering content.
 * @author unoffial api (react-notion-x)
 * @param pageId (notion-post-ID)
 * @returnsType ExtendedRecordMap
 */
const fetchPageContent: PageContentFetcher = async (pageId: string) => {
  if (!pageId) return null;

  try {
    const recordMap = await api.getPage(pageId);
    return recordMap;
  } catch (error) {
    console.error("Failed to fetch page content:", error);
    throw new Error("Failed to fetch page content");
  }
};

// Helper function to fetch content by page ID from environment variables
const fetchContentById = async (pageId: string, pathToRevalidate: string) => {
  if (!pageId) throw new Error("Page ID is required");
  // console.log("fetchContentById", pageId);

  // revalidatePath(pathToRevalidate, "page");
  return fetchPageContent(pageId);
};

export const getPageContent = async (slug: string) => fetchPageContent(slug);

export const getAboutPageContent = async () => {
  const aboutPageId = process.env.NOTION_ABOUT_PAGE_ID as string;
  return fetchContentById(aboutPageId, "/about");
};

export const getNotePageContent = async () => {
  const notePageId = process.env.NOTION_NOTE_PAGE_ID as string;
  return fetchContentById(notePageId, "/note");
};

export const getProjectPageContent = async () => {
  const projectPageId = process.env.NOTION_PROJECT_PAGE_ID as string;
  return fetchContentById(projectPageId, "/project");
};
