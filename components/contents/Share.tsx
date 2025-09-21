"use client";

import { ActionIcon, Box, Center, Text } from "@mantine/core";
import { BrandFacebook } from "tabler-icons-react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { TwitterIcon } from "../icons/Icons";

type Props = {
  postLink: string;
};

const Share = ({ postLink }: Props) => {
  return (
    <div className=" hidden absolute md:flex md:left-[-35px] lg:left-[-50px]">
      <Center>
        <Box className="flex flex-col mt-2">
          <Text tt="uppercase" c="dimmed">
            Share
          </Text>
          <div className="!bg-orange-500 dark:!bg-amber-900 my-3 p-0 h-20 w-[2px] mx-auto " />
          <Box className="flex justify-center items-center mb-3">
            <ActionIcon
              component="div"
              color="orange"
              size="lg"
              radius="sm"
              variant="filled"
              className="!bg-orange-500 dark:!bg-amber-900"
            >
              <FacebookShareButton
                // quote="alohadancemeow"
                hashtag="#alohadancemeow"
                url={postLink}
                style={{ display: "grid", placeItems: "center" }}
              >
                <BrandFacebook size={18} className="dark:text-white" />
                {/* <FacebookIcon /> */}
              </FacebookShareButton>
            </ActionIcon>
          </Box>
          <Box className="flex justify-center items-center mb-3">
            <ActionIcon
              component="div"
              color="orange"
              size="lg"
              radius="sm"
              variant="filled"
              className="!bg-orange-500 dark:!bg-amber-900"
            >
              <TwitterShareButton
                url={postLink}
                title="New post, let's explore"
                // via={'alohadancemeow.com'}
                hashtags={["#alohadancemeow"]}
                style={{ display: "grid", placeItems: "center" }}
              >
                {/* <BrandTwitter size={18} /> */}
                <TwitterIcon />
              </TwitterShareButton>
            </ActionIcon>
          </Box>
        </Box>
      </Center>
    </div>
  );
};

export default Share;
