"use client";

import { Blockquote, useMantineColorScheme } from "@mantine/core";

type Props = {
  cite: string;
  quote: string;
};

const CustomBlockquote = ({ cite, quote }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Blockquote
      cite={`— ${cite}`}
      color="orange"
      styles={(theme) => ({
        [theme.breakpoints.xs]: {
          fontSize: "15px",
          flexWrap: "wrap",
        },
        root: {
          borderColor:
            colorScheme === "light"
              ? theme.colors[theme.primaryColor][4]
              : theme.colors[theme.primaryColor][7],
        },
      })}
    >
      {quote}
    </Blockquote>
  );
};

export default CustomBlockquote;
