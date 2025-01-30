"use client";

import { useEffect } from "react";
import ServerErrorPage from "@/components/503/503";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <ServerErrorPage reset={reset} />
      </body>
    </html>
  );
}
