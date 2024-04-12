"use client";

import { Space, Text } from "@mantine/core";
import { TagType } from "@/types";
import TagsBanner from "@/components/posts/TagsBanner";

type Props = {
  tags: TagType;
};

const TagSection = ({ tags }: Props) => {
  return (
    <div>
      <Text color="dimmed" size="xs" mt={4}>
        {`${Object.keys(tags).length}`} tags in alohadancemeow posts
      </Text>
      <Space h="md" />
      <TagsBanner tags={tags} />
      <Space h="lg" />
    </div>
  );
};

export default TagSection;
