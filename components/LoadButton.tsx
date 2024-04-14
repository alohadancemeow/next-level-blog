"use client";

import { Button, Center, useMantineColorScheme } from "@mantine/core";
import { RocketIcon } from "./Icons";

type Props = {
  categoryName: string;
  isFetchingNextPage: boolean;
  loadNextPost: () => void;
  postCount: number;
};

const LoadButton = ({
  categoryName,
  isFetchingNextPage,
  loadNextPost,
  postCount,
}: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Center my={10} pb={5}>
      <Button
        // leftIcon={<RocketIcon />}
        variant="light"
        color={colorScheme === "dark" ? "gray" : "orange"}
        onClick={loadNextPost}
        loading={isFetchingNextPage}
        disabled={isFetchingNextPage}
      >
        {`#${postCount} More in: ${categoryName} `}
      </Button>
    </Center>
  );
};

export default LoadButton;
