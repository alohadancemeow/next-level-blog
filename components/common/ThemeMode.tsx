"use client";

import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
} from "@mantine/core";
import { useEffect } from "react";
import { Sun, Moon } from "tabler-icons-react";

const ThemeMode = () => {
  const { colorScheme, toggleColorScheme, setColorScheme } =
    useMantineColorScheme();

  useEffect(() => {
    if (colorScheme) {
      setColorScheme(colorScheme);
    }
  }, [colorScheme, setColorScheme]);

  return (
    <Group justify="center" my="md">
      <SegmentedControl
        size="xs"
        style={{ fontSize: "14px" }}
        defaultValue={colorScheme}
        value={colorScheme}
        onChange={() => toggleColorScheme()}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <Sun size={14} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <Moon size={14} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};

export default ThemeMode;
