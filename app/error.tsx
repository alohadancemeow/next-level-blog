"use client";

import ServerErrorPage from "@/components/503/503";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ServerErrorPage reset={reset} />
      </body>
    </html>
  );
}
