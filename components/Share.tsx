"use client";

import { ActionIcon, Box, Center, Text } from "@mantine/core";
import { BrandFacebook, BrandTwitter } from "tabler-icons-react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

type Props = {
  postLink: string;
};

const Share = ({ postLink }: Props) => {
  return (
    <Center
      mt={18}
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
        <Text tt="uppercase" c="dimmed">
          Share
        </Text>
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
            component="div"
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
            <FacebookShareButton
              quote="alohadancemeow"
              hashtag="#alohadancemeow"
              url={postLink}
              style={{ display: "grid", placeItems: "center" }}
            >
              <BrandFacebook size={18} />
            </FacebookShareButton>
          </ActionIcon>
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            marginBottom: "15px",
            alignItems: "center",
          }}
        >
          <ActionIcon
            component="div"
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
            <TwitterShareButton
              url={postLink}
              title="New post, let's explore"
              // via={'alohadancemeow.com'}
              hashtags={["#alohadancemeow"]}
              style={{ display: "grid", placeItems: "center" }}
            >
              <BrandTwitter size={18} />
            </TwitterShareButton>
          </ActionIcon>
        </Box>
      </Box>
    </Center>
  );
};

export default Share;
