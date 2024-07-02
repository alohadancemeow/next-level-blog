import { getPostsByCategory } from "@/lib/notion";

const limit = 6;

export const fetchPostsByCategory = async (
  categoryName: string,
  page: number
) => await getPostsByCategory(categoryName, limit, page);
