"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ClientComponent = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ClientComponent;
