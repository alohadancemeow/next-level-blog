"use client";

import { Loader as MtLoader } from "@mantine/core";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <MtLoader color="orange" size="xl" type="dots" />
    </div>
  );
};

export default Loader;
