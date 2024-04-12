"use client";

import { Space, Text } from "@mantine/core";
import { TagType } from "@/types";
import TagsBanner from "@/components/posts/TagsBanner";

type Props = {
  tags: TagType;
  categories: string[];
};

const TagSection = ({ tags, categories }: Props) => {
  return (
    <div>
      <Text color="dimmed" size="xs" mt={4}>
        {`${categories.length} categories, ${Object.keys(tags).length}`} tags in
        alohadancemeow posts
      </Text>
      <Space h="md" />
      <TagsBanner tags={tags} />
      <Space h="lg" />
    </div>
  );
};

export default TagSection;
