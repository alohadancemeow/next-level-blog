"use client";

import { Title, useMantineColorScheme } from "@mantine/core";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Title
      styles={(theme) => ({
        root: {
          fontSize: "25px",
          [theme.breakpoints.xs]: { fontSize: "12px" },
          color:
            theme.colors[theme.primaryColor][colorScheme === "dark" ? 2 : 0],
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.orange[9]
              : theme.colors[theme.primaryColor][5],
          borderRadius: "3px",
          padding: "5px 10px",
        },
      })}
    >
      {title}
    </Title>
  );
};

export default Header;
