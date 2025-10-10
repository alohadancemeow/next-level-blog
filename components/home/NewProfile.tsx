"use client";

import { Background } from "./Background";
import MainProfile from "./MainProfile";
import MainFooter from "./MainFooter";
import { siteMetadata } from "@/site/siteMatedata";
import { Copyright, ExternalLink, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const NewProfile = () => {
  return (
    <main className="h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Credit />
        <Background
          src="/silhouette-at-twilight.mp4"
          placeholder="/alt-placeholder.jpg"
        />
        {/* <Background
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4"
          placeholder="/alt-placeholder.png"
        /> */}
        <MainProfile />
        <MainFooter />
      </div>
    </main>
  );
};

export default NewProfile;

const Credit = () => {
  const hasBannerCredit =
    siteMetadata.credits.banner.credit.text &&
    siteMetadata.credits.banner.credit.url;
  const hasBannerLink = !!siteMetadata.credits.banner.credit.url;

  return (
    <div className="fixed top-0 left-0 w-full z-30 pointer-events-none">
      <div className="relative mx-auto pointer-events-auto flex">
        <div className="transition duration-700 w-full left-0 right-0 grid grid-cols-[17.5rem_auto] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] mx-auto gap-4 px-0 md:px-4">
          <div className="absolute right-4 top-4 flex items-center gap-2">
            {hasBannerCredit && (
              <a
                href={siteMetadata.credits.banner.credit.url}
                id="banner-credit"
                target="_blank"
                rel="noopener"
                aria-label="Visit image source"
                className={cn(
                  `group onload-animation transition-all flex justify-center items-center rounded-full px-3 bg-black/60 hover:bg-black/70 h-9`,
                  { "hover:pr-9 active:bg-black/80": hasBannerLink }
                )}
              >
                <Copyright className="text-white/75 mr-1 size-4" />
                <div className="text-white/75 text-xs">
                  {siteMetadata.credits.banner.credit.text.toLocaleUpperCase()}
                </div>
                {hasBannerLink && (
                  <ExternalLink className="transition text-blue-400 size-4 opacity-0 group-hover:opacity-100 ml-2" />
                )}
              </a>
            )}
            <MusicPlayer />
          </div>
        </div>

      </div>
    </div>
  );
};


const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;

    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    // Set a lower volume
    el.volume = 0.3;

    const handleEnded = () => setIsPlaying(false);
    el.addEventListener("ended", handleEnded);

    return () => {
      el.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="pointer-events-auto">
      <button
        type="button"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        onClick={togglePlay}
        className="flex items-center cursor-pointer justify-center h-9 w-9 rounded-full bg-black/60 hover:bg-black/70 active:bg-black/80 text-white/80 transition"
      >
        {isPlaying ? (
          <Pause className="size-4" />
        ) : (
          <Play className="size-4" />
        )}
      </button>
      <audio ref={audioRef} src="/assets/lan-ting-xu.mp3" preload="none" loop />
    </div>
  );
};