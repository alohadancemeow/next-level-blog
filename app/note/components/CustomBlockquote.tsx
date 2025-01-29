"use client";

import { Blockquote } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

type Props = {
  cite: string;
  quote: string;
};

const CustomBlockquote = ({ cite, quote }: Props) => {
  const icon = <IconInfoCircle />;

  return (
    <Blockquote
      className="flex-wrap"
      cite={`— ${cite}`}
      color="orange"
      icon={icon}
    >
      {quote}
    </Blockquote>
  );
};

export default CustomBlockquote;
