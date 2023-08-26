"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";
import { ArrowUpCircle } from "tabler-icons-react";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix
        position={{ bottom: rem(20), right: rem(20) }}
        sx={(theme) => ({
          [theme.fn.smallerThan("md")]: { display: "none" },
          borderRadius: "3px",
        })}
      >
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUpCircle size={20} />}
              onClick={() => scrollTo({ y: 0 })}
              style={transitionStyles}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][5],
              })}
            >
              Back to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ScrollToTop;
