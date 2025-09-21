import { Background } from "./Background";
import MainProfile from "./MainProfile";
import MainFooter from "./MainFooter";
import { siteMetadata } from "@/site/siteMatedata";
import { Copyright, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const NewProfile = () => {
  return (
    <main className="h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Credit />
        <Background
          src="/silhouette-at-twilight.mp4"
          placeholder="/alt-placeholder.png"
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
      <div className="relative mx-auto pointer-events-auto">
        <div className="transition duration-700 w-full left-0 right-0 grid grid-cols-[17.5rem_auto] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] mx-auto gap-4 px-0 md:px-4">
          {hasBannerCredit && (
            <a
              href={siteMetadata.credits.banner.credit.url}
              id="banner-credit"
              target="_blank"
              rel="noopener"
              aria-label="Visit image source"
              className={cn(
                `group onload-animation transition-all absolute flex justify-center items-center rounded-full px-3 right-4 top-4 bg-black/60 hover:bg-black/70 h-9`,
                { "hover:pr-9 active:bg-black/80": hasBannerLink }
              )}
            >
              <Copyright className="text-white/75 mr-1 size-4" />
              <div className="text-white/75 text-xs">
                {siteMetadata.credits.banner.credit.text.toLocaleUpperCase()}
              </div>
              {hasBannerLink && (
                <ExternalLink className="transition absolute right-4 text-blue-400 size-4 opacity-0 group-hover:opacity-100" />
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
