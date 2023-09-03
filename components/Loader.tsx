"use client";

import ReactLoading from "react-loading";
import { useMantineColorScheme } from "@mantine/core";

type Props = {};

const Loader = (props: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <ReactLoading
        type="cubes"
        color={colorScheme === "dark" ? "#a33705" : "#ff922b"}
      />
    </div>
  );
};

export default Loader;
