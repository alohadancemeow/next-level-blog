import { Bai_Jamjuree, JetBrains_Mono } from "next/font/google";

export const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--jetBrains-mono",
});

export const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--bai-jamjuree",
});
