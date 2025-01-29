"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  autoContrast: true,
  luminanceThreshold: 0.3,
  primaryColor: "orange",
  // Controls --mantine-font-family
  fontFamily: "'JetBrains Mono', 'Bai Jamjuree'",
  // Controls --mantine-font-family-monospace
  fontFamilyMonospace: "'JetBrains Mono', monospace",

  headings: {
    // Controls --mantine-font-family-headings
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
});
