import { cache } from "react";
import { PageData } from "@/types";

export const getCategory = cache((posts: PageData[]) => {
  let categories = new Set<string>();

  posts &&
    posts.map((post: PageData) => {
      categories.add(post.category);
    });

  return { categories: Array.from(categories) };
});
