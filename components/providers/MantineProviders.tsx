"use client";

import { useState } from "react";
import { MantineProvider, localStorageColorSchemeManager } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

import Player from "@/components/common/Player";
import ThemeCheck from "@/components/common/ThemeCheck";
import { theme } from "@/styles/theme";

const getRootElement = () =>
  typeof window === "undefined" ? undefined : document.body;

export default function MantineProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // debug
  console.log("MantineProviders is rendering");

  const [opened, setOpened] = useState<boolean>(false);

  // get color scheme manager from local storage
  const colorSchemeManager = localStorageColorSchemeManager({
    key: "mantine-color-scheme",
  });

  useHotkeys([["mod+shift+P", () => setOpened((o) => !o)]]);

  return (
    <MantineProvider
      getRootElement={getRootElement}
      defaultColorScheme="auto"
      colorSchemeManager={colorSchemeManager}
      theme={theme}
    >
      <ThemeCheck>{children}</ThemeCheck>
      <Player opened={opened} setOpened={setOpened} />
    </MantineProvider>
  );
}
