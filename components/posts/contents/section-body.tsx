"use client";

import { Grid, Space, Text } from "@mantine/core";
import PostCard from "@/components/posts/PostCard";
import { PageData } from "@/types";

type Props = {
  posts: PageData[];
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
              <Grid.Col key={item.id} xs={6} md={4}>
                <PostCard post={item} />
              </Grid.Col>
            ))
          : posts.map((item) => (
              <Grid.Col key={item.id} xs={6} md={4}>
                <PostCard post={item} />
              </Grid.Col>
            ))}
      </Grid>
      <Space h="xl" />
    </div>
  );
};

export default SectionBody;
