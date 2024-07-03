"use client";

import { ActionIcon, Box, Center, Tooltip } from "@mantine/core";
import { SmallFeatherIcon } from "../Icons";
import { useViewportSize } from "@mantine/hooks";

const FeedbackComponent = () => {
  const { width } = useViewportSize();

  return (
    <Tooltip
      disabled={width < 500}
      label={"Give feedback!"}
      // color="orange"
      position="bottom"
      withArrow
      // arrowPosition="center"
      transitionProps={{ transition: "slide-up", duration: 300 }}
      sx={(theme) => ({
        color: "white",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][5],
      })}
    >
      <Center
        mt={18}
        sx={{
          position: "absolute",
          bottom: "2%",
          right: "6%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
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
                background: "none",
                borderColor:
                  theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][5],
              })}
            >
              <div className="text-xl">
                <a
                  data-featurebase-link
                  href="https://alohadancemeow.featurebase.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SmallFeatherIcon />
                </a>
              </div>
            </ActionIcon>
            <Box
              sx={(theme) => ({
                width: "2px",
                height: "30px",
                padding: "0",
                margin: "15px auto",
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][5],
              })}
            ></Box>
            {/* <Text tt="uppercase" c="dimmed">
            Give Feedback
          </Text> */}
          </Box>
        </Box>
      </Center>
    </Tooltip>
  );
};

export default FeedbackComponent;
