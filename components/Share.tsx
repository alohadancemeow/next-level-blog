import { ActionIcon, Box, Center, Divider, Text } from "@mantine/core";
import React from "react";
import { BrandFacebook, BrandTwitter } from "tabler-icons-react";

type Props = {
  postLink: string;
};

const Share = ({ postLink }: Props) => {
  console.log(postLink);

  return (
    <Center
      mt={16}
      sx={{
        position: "sticky",
        top: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text>Share</Text>
        <Box
          sx={(theme) => ({
            width: "2px",
            height: "80px",
            padding: "0",
            margin: "15px auto",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                : theme.colors[theme.primaryColor][5],
          })}
        ></Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            marginBottom: "15px",
          }}
        >
          <ActionIcon
            color="orange"
            size="lg"
            radius="sm"
            variant="filled"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                  : theme.colors[theme.primaryColor][5],
            })}
          >
            <BrandFacebook size={18} />
          </ActionIcon>
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            marginBottom: "15px",
          }}
        >
          <ActionIcon
            color="orange"
            size="lg"
            radius="sm"
            variant="filled"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                  : theme.colors[theme.primaryColor][5],
            })}
          >
            <BrandTwitter size={18} />
          </ActionIcon>
        </Box>
      </Box>
    </Center>
  );
};

export default Share;
