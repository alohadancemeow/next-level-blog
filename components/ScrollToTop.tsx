"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Affix, Box, Button, Transition, rem } from "@mantine/core";
import { ArrowUpCircle } from "tabler-icons-react";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix
        position={{ bottom: rem(30), right: rem(40) }}
        sx={(theme) => ({
          [theme.fn.smallerThan("md")]: { display: "none" },
          borderRadius: "3px",
        })}
      >
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Box
              component="button"
              // leftIcon={<ArrowUpCircle size={20} />}
              onClick={() => scrollTo({ y: 0 })}
              style={transitionStyles}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][5],

                borderRadius: "50%",
                padding: 12,
              })}
            >
              <ArrowUpCircle
                size={20}
                // color="black"
                className="text-black transition duration-300 ease-in-out hover:scale-150 dark:text-white"
              />
            </Box>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ScrollToTop;
