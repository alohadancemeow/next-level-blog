"use client";

import { Grid, Space, Text } from "@mantine/core";
import PostCard from "@/app/posts/components/PostCard";
import { PageDataSchemaType } from "@/types";

type Props = {
  posts: PageDataSchemaType[];
  description: string;
};

const SectionBody = ({ posts, description }: Props) => {
  return (
    <div>
      <Text color="dimmed" size="xs" mt={4}>
        {`${description}`}
      </Text>
      <Space h="xl" />
      <Grid gutter="lg">
        {posts.length === 0
          ? posts.map((item) => (
              <Grid.Col key={item.id} span={{ base: 12, md: 6, xs: 3 }}>
                <PostCard post={item} />
              </Grid.Col>
            ))
          : posts.map((item) => (
              <Grid.Col key={item.id} span={{ base: 12, md: 6, xs: 3 }}>
                <PostCard post={item} />
              </Grid.Col>
            ))}
      </Grid>
      <Space h="xl" />
    </div>
  );
};

export default SectionBody;
