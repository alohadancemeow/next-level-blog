"use client";

import { Box, Divider, Kbd, Space } from "@mantine/core";

type Props = {};

const Shortcuts = (props: Props) => {
  return (
    <ul>
      <li>
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: { fontSize: "15px" },
          })}
        >
          <span>
            {" "}
            🌤️ Switch Mode (<em>Global</em>) :
          </span>
          <Divider
            size={"xs"}
            variant="solid"
            labelPosition={"left"}
            label={
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box ml={5} mr={10}>
                  Using
                </Box>
                <Kbd>⌘</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
                <span style={{ margin: "0 10px" }}>/</span>
                <Kbd>Ctrl</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
              </Box>
            }
          />
        </Box>
      </li>
      <Space h={"lg"} />
      <li>
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: { fontSize: "15px" },
          })}
        >
          <span>
            🪶 Search for posts (<em>Only allowed in posts/tags page</em>) :
          </span>
          <Divider
            size={"xs"}
            variant="solid"
            labelPosition={"left"}
            label={
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box ml={5} mr={10}>
                  Using
                </Box>
                <Kbd>⌘</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>S</Kbd>
                <span style={{ margin: "0 10px" }}>/</span>
                <Kbd>Ctrl</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>S</Kbd>
              </Box>
            }
          />
        </Box>
      </li>
      <Space h={"lg"} />
      <li>
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: { fontSize: "15px" },
          })}
        >
          <span>
            🎵 Play/Stop the music (<em>Global</em>) :
          </span>
          <Divider
            size={"xs"}
            variant="solid"
            labelPosition={"left"}
            label={
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box ml={5} mr={10}>
                  Using
                </Box>
                <Kbd>⌘</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>Shift</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>P</Kbd>
                <span style={{ margin: "0 10px" }}>/</span>
                <Kbd>Ctrl</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>Shift</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>P</Kbd>
              </Box>
            }
          />
        </Box>
      </li>
    </ul>
  );
};

export default Shortcuts;
