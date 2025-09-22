"use client";

import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Affix, Box, Transition } from "@mantine/core";
import { ArrowUpCircle, Feather, Books } from "tabler-icons-react";
import { IconHome } from "@tabler/icons-react";
import { siteMetadata } from "@/site/siteMatedata";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();

  return (
    <>
      <Affix className="hidden md:flex md:!right-6 lg:!right-14 md:!bottom-4">
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Box className="flex flex-col mt-2">
              <Box className="flex justify-center items-center mb-3">
                <div className="flex flex-col gap-3">
                  <ActionIcon
                    component="div"
                    color="orange"
                    size="lg"
                    radius="sm"
                    variant="filled"
                    className="!bg-orange-500 dark:!bg-amber-900"
                    style={transitionStyles}
                    onClick={() => scrollTo({ y: 0 })}
                  >
                    <ArrowUpCircle
                      size={20}
                      className="text-black dark:text-white"
                    />
                  </ActionIcon>
                  <ActionIcon
                    component="div"
                    color="orange"
                    size="lg"
                    radius="sm"
                    variant="filled"
                    className="!bg-orange-500 dark:!bg-amber-900"
                    style={transitionStyles}
                    onClick={() => router.push("/posts")}
                  >
                    <Books size={20} className="text-black dark:text-white" />
                  </ActionIcon>
                  <ActionIcon
                    component="a"
                    color="orange"
                    size="lg"
                    radius="sm"
                    variant="filled"
                    className="!bg-orange-500 dark:!bg-amber-900"
                    style={transitionStyles}
                    target="_blank"
                    href={`${siteMetadata.feedbackUrl}`}
                  >
                    <Feather size={20} className="text-black dark:text-white" />
                  </ActionIcon>
                  <ActionIcon
                    component="div"
                    color="orange"
                    size="lg"
                    radius="sm"
                    variant="filled"
                    className="!bg-orange-500 dark:!bg-amber-900"
                    style={transitionStyles}
                    onClick={() => router.push("/")}
                  >
                    <IconHome
                      size={20}
                      className="text-black dark:text-white"
                    />
                  </ActionIcon>
                </div>
              </Box>
              <div className="bg-orange-500 dark:bg-amber-900 my-3 p-0 h-10 w-[2px] mx-auto " />
            </Box>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ScrollToTop;
