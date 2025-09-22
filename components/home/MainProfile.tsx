"use client";

import { useEffect, useRef, useState } from "react";
import { Button as CNButton, buttonVariants } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
};

const MainProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isInitialRender = useRef(true);

  useEffect(() => {
    return () => {
      isInitialRender.current = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
      <motion.div
        layout="position"
        transition={{ duration: DURATION, ease: EASE_OUT }}
      >
        {/* <div className="relative mx-auto rounded-full overflow-hidden size-[160px] sm:size-[200px] lg:size-[230px]">
          <Image
            src={"/image3.gif"}
            loading="eager"
            priority
            fill
            sizes="(min-width: 1024px) 230px, (min-width: 640px) 200px, 160px"
            alt="Profile"
            className="object-cover object-center"
            quality={100}
          />
        </div> */}
        <p className="font-serif uppercase tracking-[0.4em] leading-relaxed text-center text-xs short:lg:text-xs text-foreground">
          Personal Home
        </p>
        <h1 className="font-serif text-5xl italic short:lg:text-8xl sm:text-8xl text-foreground">
          Alohadancemeow®
        </h1>
      </motion.div>

      <div className="flex flex-col mb-12 items-center min-h-0 shrink w-full">
        <AnimatePresenceGuard>
          {!isOpen && (
            <motion.div
              key="newsletter"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
              }}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8">
                <motion.p
                  initial={isInitialRender.current ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                  className="text-base short:lg:text-lg sm:text-lg font-medium text-center text-foreground text-pretty"
                >
                  {`Hi there! 👋 I'm Hai — 海 — aka: alohadancemeow ✌️ `}
                  <br />
                  {`大家好，我叫海，很高兴认识你们。`}
                </motion.p>
              </div>
            </motion.div>
          )}

          <motion.div
            layout="position"
            transition={SPRING}
            key="button"
            className={isOpen ? "my-6" : "mt-6"}
          >
            <CNButton
              className={cn("relative px-8 cursor-pointer")}
              onClick={() => setIsOpen(!isOpen)}
              // shine={!isOpen.toString()}
            >
              <motion.span
                animate={{ x: isOpen ? -16 : 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT }}
                className="inline-block"
              >
                Manifesto
              </motion.span>

              {isOpen && (
                <motion.div
                  className={cn(
                    buttonVariants({ variant: "iconButton", size: "icon" }),
                    "absolute -top-px -right-px aspect-square cursor-pointer"
                  )}
                  initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                >
                  <X className="size-5 text-primary-foreground" />
                  {/* <Cross1Icon className="size-5 text-primary-foreground" /> */}
                </motion.div>
              )}
            </CNButton>
          </motion.div>

          {isOpen && (
            <motion.div
              key="manifesto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
              className="relative font-semibold flex min-h-0 flex-shrink overflow-hidden text-md md:text-lg max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/50 bg-primary/20 max-w-3xl text-foreground rounded-3xl ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 shadow-button"
            >
              <article className="relative text-white overflow-y-auto pretty-scrollbar italic p-6 h-full [&_p]:my-4">
                <p>
                  {`Feel pain. Contemplate pain. Accept pain. Know
                  pain.`}
                </p>

                <p>
                  {`Those who do not understand true pain will never understand
                  true peace. I will never forget Yahiko's pain.`}
                </p>
                <p>And now... this world shall know pain.</p>
                <p>SHINRA TENSEI!!!</p>
              </article>
            </motion.div>
          )}

          {!isOpen && (
            <motion.div
              key="menu"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: 150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
              }}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8">
                <motion.div
                  initial={isInitialRender.current ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                  className="text-base short:lg:text-lg sm:text-lg lg:text-xl font-medium text-center text-foreground text-pretty"
                >
                  <Menu />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresenceGuard>
      </div>
    </div>
  );
};

export default MainProfile;

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="popLayout" propagate>
      {children}
    </AnimatePresence>
  );
};

const Menu = () => {
  return (
    <div className="mt-6 md:mt-8 flex items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base">
      <Link
        href="/posts"
        className="text-foreground/80 hover:text-foreground transition-colors decoration-border/50"
        aria-label="Go to Posts"
      >
        📝 Posts
      </Link>
      <Link
        href="/hobbies"
        className="text-foreground/80 hover:text-foreground transition-colors decoration-border/50"
        aria-label="Go to Hobbies"
      >
        🎨 Hobbies
      </Link>
      <Link
        href="/note"
        className="text-foreground/80 hover:text-foreground transition-colors decoration-border/50"
        aria-label="Go to Notes"
      >
        ✏️ Notes
      </Link>
    </div>
  );
};
