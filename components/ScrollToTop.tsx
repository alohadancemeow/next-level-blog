"use client";

import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Affix, Box, Text, Transition } from "@mantine/core";
import { ArrowUpCircle } from "tabler-icons-react";

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix className="hidden md:flex md:right-[35px] lg:right-[50px] md:bottom-10">
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Box className="flex flex-col mt-2">
              <Text tt="uppercase" c="dimmed">
                Top
              </Text>
              <div className="bg-orange-500 dark:bg-amber-900 my-3 p-0 h-20 w-[2px] mx-auto " />
              <Box className="flex justify-center items-center mb-3">
                <ActionIcon
                  component="div"
                  color="orange"
                  size="lg"
                  radius="sm"
                  variant="filled"
                  className="bg-orange-500 dark:bg-amber-900"
                  style={transitionStyles}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  <ArrowUpCircle
                    size={20}
                    className="text-black dark:text-white"
                  />
                </ActionIcon>
              </Box>
            </Box>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ScrollToTop;
