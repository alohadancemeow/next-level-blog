"use client";

import React, { ReactNode } from "react";
import { Box } from "@mantine/core";

import Logo from "./Logo";
import Footer from "./Footer";
import ThemeMode from "./ThemeMode";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="relative flex flex-col justify-between w-full h-full p-0">
        <Box>
          <Logo />
          <ThemeMode />
          {children}
        </Box>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
