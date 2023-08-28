"use client";

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import React, { useState } from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import Player from "@/components/Player";
import ThemeCheck from "@/components/ThemeCheck";

type Props = {
  children: React.ReactNode;
};

export default function MantineProviders({ children }: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod + D", () => toggleColorScheme()]]);

  const [opened, setOpened] = useState<boolean>(false);
  useHotkeys([["mod + shift + L", () => setOpened((o) => !o)]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: colorScheme,
          primaryColor: "orange",
          // fontFamily: ["'JetBrains Mono', 'Bai Jamjuree'"],
          fontFamily: "'JetBrains Mono', 'Bai Jamjuree'",

          headings: {
            fontFamily: "JetBrains Mono",
            fontWeight: "500",
            sizes: {
              h2: {
                fontSize: "24px",
              },
              h3: {
                fontSize: "18px",
              },
            },
          },
          breakpoints: {
            xs: "500",
            sm: "800",
            md: "1000",
            lg: "1200",
            xl: "1400",
          },
        }}
      >
        <GlobalStyles />
        <ThemeCheck>{children}</ThemeCheck>
        <Player opened={opened} setOpened={setOpened} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
