"use client";

import { Box } from "@mantine/core";
import Logo from "./Logo";
import Footer from "./Footer";
import ThemeMode from "@/components/common/ThemeMode";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
