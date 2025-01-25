"use client";

import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
} from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";

const ThemeMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" my="md">
      <SegmentedControl
        size="xs"
        style={{ fontSize: "14px" }}
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
