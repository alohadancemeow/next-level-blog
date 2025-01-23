"use client";

import { useState } from "react";
import { MantineProvider, localStorageColorSchemeManager } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

import Player from "@/components/Player";
import ThemeCheck from "@/components/ThemeCheck";
import { theme } from "@/styles/theme";

type Props = {
  children: React.ReactNode;
};

export default function MantineProviders({ children }: Props) {
  const [opened, setOpened] = useState<boolean>(false);

  // get color scheme manager from local storage
  const colorSchemeManager = localStorageColorSchemeManager({
    key: "mantine-color-scheme",
  });

  useHotkeys([["mod+shift+P", () => setOpened((o) => !o)]]);

  return (
    <MantineProvider
      defaultColorScheme="auto"
      colorSchemeManager={colorSchemeManager}
      theme={theme}
    >
      <ThemeCheck>{children}</ThemeCheck>
      <Player opened={opened} setOpened={setOpened} />
    </MantineProvider>
  );
}
