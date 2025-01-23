"use client";

import {
  ActionIcon,
  Box,
  Center,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { SmallFeatherIcon } from "../Icons";
import { useViewportSize } from "@mantine/hooks";
import { siteMetadata } from "@/site/siteMatedata";

const FeedbackComponent = () => {
  const { width } = useViewportSize();
  const { colorScheme } = useMantineColorScheme();

  const bgColor =
    colorScheme === "dark"
      ? "var(--mantine-primary-color-9)"
      : "var(--mantine-primary-color-5)";

  if (width < 500) {
    return null;
  }

  return (
    <Tooltip
      label="Give feedback!"
      position="bottom"
      withArrow
      transitionProps={{ transition: "slide-up", duration: 300 }}
      style={{
        color: "white",
        backgroundColor: bgColor,
      }}
    >
      <Center
        mt={18}
        style={{
          position: "absolute",
          bottom: "2%",
          right: "6%",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              display: "grid",
              placeItems: "center",
              marginBottom: "15px",
            }}
          >
            <ActionIcon
              component="div"
              // color="orange"
              size="lg"
              radius="sm"
              variant="subtle"
              style={{
                // background: "none",
                borderColor: bgColor,
              }}
            >
              <div className="text-xl">
                <a
                  data-featurebase-link
                  href={`${siteMetadata.feedbackUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SmallFeatherIcon />
                </a>
              </div>
            </ActionIcon>
            <Box
              style={{
                width: "2px",
                height: "30px",
                padding: "0",
                margin: "15px auto",
                backgroundColor: bgColor,
              }}
            ></Box>
          </Box>
        </Box>
      </Center>
    </Tooltip>
  );
};

export default FeedbackComponent;
