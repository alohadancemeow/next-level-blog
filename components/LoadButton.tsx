"use client";

import { useState } from "react";
import { Button, Center, useMantineColorScheme } from "@mantine/core";
import { RocketIcon } from "./Icons";

type Props = {
  categoryName: string;
};

const LoadButton = ({ categoryName }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Center my={10} pb={5}>
      <Button
        leftIcon={<RocketIcon />}
        variant="light"
        color={colorScheme === "dark" ? "gray" : "orange"}
        onClick={() => setLoading(!isLoading)}
        loading={isLoading}
      >
        {`More in: ${categoryName}`}
      </Button>
    </Center>
  );
};

export default LoadButton;
