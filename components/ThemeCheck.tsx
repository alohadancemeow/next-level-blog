"use client";

import { useCallback, useEffect, useState } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { MantineColorScheme, useMantineColorScheme } from "@mantine/core";

/**
 * get dark theme form Mantine colorScheme,
 * then apply 'dark' to taildwind
 */
const ThemeCheck = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  const { toggleColorScheme } = useMantineColorScheme();
  const [colorScheme] = useLocalStorage<MantineColorScheme>({
    key: "mantine-color-scheme",
  });

  useHotkeys([["ctrl+D", () => toggleColorScheme()]]);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const checkTheme = useCallback(() => {
    if (
      colorScheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);

  useEffect(() => {
    setMounted(true);
    checkTheme();
  }, [colorScheme, checkTheme]);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ThemeCheck;
