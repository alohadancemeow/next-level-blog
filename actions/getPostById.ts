import { cache } from "react";
import { PageData } from "@/types";
import { getPosts } from "@/lib/notion";

export const getPostById = cache(async (postId: string) => {
  const posts = await getPosts();

  try {
    const post = posts.find((post) => post.id === postId)!;
    const newPost: PageData = {
      id: post.id,
      coverImage: post.coverImage,
      title: post.title,
      lastUpdated: post.lastUpdated,
      description: post.description,
      createdTime: post.createdTime,
      tags: post.tags,
      authorId: post.authorId,
      lastEditedBy: post.lastEditedBy,
      icon: post.icon,
    };

    return newPost;
  } catch (error) {
    console.log(error, "error at getPostById");
  }
});
