"use client";

import { Blockquote, useMantineColorScheme } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

type Props = {
  cite: string;
  quote: string;
};

const CustomBlockquote = ({ cite, quote }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const icon = <IconInfoCircle />;

  return (
    <Blockquote
      cite={`— ${cite}`}
      color="orange"
      icon={icon}
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
