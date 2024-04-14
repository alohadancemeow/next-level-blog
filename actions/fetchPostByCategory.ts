import { getPostsByCategory } from "@/lib/notion";
import { PageData } from "@/types";
import { defaultImage } from "@/site/data";

const limit = 6;

export const fetchPostsByCategory = async (
  categoryName: string,
  page: number
) => {
  try {
    const results = await getPostsByCategory(categoryName, limit, page);

    if (!results.length) return [];

    const pageData: PageData[] = results.map((page: any) => {
      const post: PageData = {
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
      };

      return post;
    });

    return pageData;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
