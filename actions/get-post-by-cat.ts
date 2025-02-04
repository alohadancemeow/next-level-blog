import { getPostsByCategory } from "@/actions/notion";

const limit = 6;

export const fetchPostsByCategory = async (
  categoryName: string,
  page: number
) => await getPostsByCategory(categoryName, limit, page);
