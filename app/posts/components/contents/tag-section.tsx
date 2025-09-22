"use client";

import { Space, Text } from "@mantine/core";
import { TagSchemaType } from "@/types";
import TagsBanner from "@/app/posts/components/TagsBanner";

type Props = {
  tags: TagSchemaType;
  categoryCount: number;
};

const TagSection = ({ tags, categoryCount }: Props) => {
  return (
    <div>
      <Text c="dimmed" size="xs" mt={4}>
        {`${categoryCount} categories, ${Object.keys(tags).length}`} tags in
        alohadancemeow posts
      </Text>
      <Space h="md" />
      <TagsBanner tags={tags} />
      <Space h="md" />
    </div>
  );
};

export default TagSection;
