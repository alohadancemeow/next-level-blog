"use client";

import { Divider, UnstyledButton, Box, Kbd } from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import { Search } from "tabler-icons-react";

const SearchPost = () => {
  return (
    // <div
    //   style={{
    //     position: "sticky",
    //     top: 10,
    //     zIndex: '9'
    //   }}
    // >
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
          onClick={() => openSpotlight()}
        >
          <Search size={28} />
          <Box ml={5} mr={10}>
            Search
          </Box>
          <Kbd>⌘</Kbd>
          <span style={{ margin: "0 5px" }}>+</span>
          <Kbd>K</Kbd>
          <span style={{ margin: "0 10px" }}>/</span>
          <Kbd>Ctrl</Kbd>
          <span style={{ margin: "0 5px" }}>+</span>
          <Kbd>K</Kbd>
        </UnstyledButton>
      }
    />
    // </div>
  );
};

export default SearchPost;
