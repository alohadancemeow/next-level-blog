import { z } from "zod";

const PostSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
});

export const TagSchema = z.record(z.string(), z.number());

export const ContentHeaderSchema = z.object({
  label: z.string(),
  link: z.string(),
  order: z.number(),
});

export const PageDataSchema = z.object({
  id: z.string(),
  coverImage: z.string().optional(),
  title: z.string(),
  description: z.string(),
  createdTime: z.string(),
  lastUpdated: z.string(),
  authorId: z.string(),
  lastEditedBy: z.string(),
  tags: z.array(PostSchema),
  icon: z.string(),
  category: z.string(),
});

// Export the types
export type PostSchemaType = z.infer<typeof PostSchema>;
export type TagSchemaType = z.infer<typeof TagSchema>;
export type ContentHeaderSchemaType = z.infer<typeof ContentHeaderSchema>;
export type PageDataSchemaType = z.infer<typeof PageDataSchema>;

export const PageDataArraySchema = z.array(PageDataSchema);
