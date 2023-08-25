"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ClientComponent = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  // const theme = localStorage.getItem("mantine-color-scheme");

  // console.log(theme, "theme");

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // const checkTheme = () => {
  //   if (
  //     // localStorage.theme === "dark" ||
  //     theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  useEffect(() => {
    setMounted(true);
    // checkTheme();
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ClientComponent;
