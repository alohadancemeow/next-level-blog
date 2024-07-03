"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

/**
 * get dark theme form Mantine colorScheme,
 * then apply 'dark' to taildwind
 */
const ThemeCheck = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
  });

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
