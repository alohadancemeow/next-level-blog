import React from "react";
import { PageData, Tags } from "@/types";

export const getTags = React.cache((posts: PageData[]) => {
  // Get all tags
  const allTags: Tags = {};

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
