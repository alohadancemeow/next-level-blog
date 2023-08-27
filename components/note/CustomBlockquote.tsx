"use client";

import { Blockquote } from "@mantine/core";

type Props = {
  cite: string;
  quote: string;
};

const CustomBlockquote = ({ cite, quote }: Props) => {
  return (
    <Blockquote
      cite={`— ${cite}`}
      color="orange"
      //   sx={{ borderLeft: 'none' }}
      sx={(theme) => ({
        // border: "none",
        [theme.fn.smallerThan("xs")]: {
          fontSize: "15px",
          flexWrap: "wrap",
        },
        borderColor:
          theme.colorScheme === "light"
            ? theme.colors[theme.primaryColor][4]
            : theme.colors[theme.primaryColor][6],
      })}
    >
      {quote}
    </Blockquote>
  );
};

export default CustomBlockquote;
