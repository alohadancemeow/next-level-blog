"use client";

import React, { useEffect, useState } from "react";
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
  const checkTheme = () => {
    if (
      colorScheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    checkTheme();
  }, [colorScheme]);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ThemeCheck;
