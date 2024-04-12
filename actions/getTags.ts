import { cache } from "react";
import { PageData, TagType } from "@/types";

export const getTags = cache((posts: PageData[]) => {
  // Get all tags
  const allTags: TagType = {};

  posts &&
    posts.map((post: PageData) =>
      post.tags?.map((tag: any) => {
        if (!allTags[tag.name]) {
          allTags[tag.name] = 1;
        } else {
          allTags[tag.name] += 1;
        }
      })
    );

  return allTags;
});
