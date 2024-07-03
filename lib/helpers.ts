import { defaultImage } from "@/site/data";
import { PageData, TagType } from "@/types";

export const postMapping = (data: any[]) => {
  if (!data.length) return [];

  return data.map((page: any) => {
    const post = {
      id: page?.id,
      title: page?.properties?.Name?.title[0]?.plain_text ?? "title",
      createdTime: page?.created_time ?? "2023-07-27T17:12:00.000Z",
      lastUpdated: page?.last_edited_time ?? "2023-07-27T17:12:00.000Z",
      tags: page?.properties?.Tags?.multi_select ?? [],
      description:
        page?.properties?.Description?.rich_text[0]?.plain_text ??
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptatum nesciunt assumenda accusamus eius rem?`,
      coverImage:
        page?.cover?.external?.url ?? page?.cover?.file?.url ?? defaultImage,
      authorId: page?.created_by?.id,
      lastEditedBy: page?.last_edited_by?.id,
      icon: page?.icon?.emoji,
      category: page?.properties?.Category?.select?.name,
    } as PageData;

    return post;
  });
};

// Get all tags
export const getTags = (posts: PageData[]) => {
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
};

// get unique category
export const getCategory = (posts: PageData[]) => {
  let categories = new Set<string>();

  posts &&
    posts.map((post: PageData) => {
      categories.add(post.category);
    });

  return Array.from(categories);
};
