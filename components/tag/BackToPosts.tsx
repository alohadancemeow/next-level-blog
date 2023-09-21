"use client";

import { Box, Divider, Space, Text, UnstyledButton } from "@mantine/core";
import { ArrowBigLeftLine } from "tabler-icons-react";
import { useRouter } from "next/navigation";

type Props = {};

const BackToPosts = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Divider
        // size="sm"
        my="xs"
        variant="solid"
        labelPosition="center"
        label={
          <UnstyledButton
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // fontWeight: '500'
            }}
            onClick={() => router.push("/posts")}
          >
            <ArrowBigLeftLine size={28} />
            <Box ml={5} mr={10}>
              <Text>Back to Posts</Text>
            </Box>
          </UnstyledButton>
        }
      />
      <Space h={"xs"} />
    </>
  );
};

export default BackToPosts;
