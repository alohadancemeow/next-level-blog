import {
  Bai_Jamjuree,
  JetBrains_Mono,
  IBM_Plex_Sans_Thai,
} from "next/font/google";

export const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const iBM_Plex_Sans_Thai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});
