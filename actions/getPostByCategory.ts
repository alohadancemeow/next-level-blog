import { cache } from "react";
import { getPosts } from "@/lib/notion";

export const getPostCategory = cache(async (postCategory: string) => {
  const posts = await getPosts();

  try {
    const filteredPosts = posts.filter(
      (post) => post.category === postCategory
    )!;

    return filteredPosts.slice(0, 6);
  } catch (error) {
    console.log(error, "error at getPostByCategory");
  }
});
