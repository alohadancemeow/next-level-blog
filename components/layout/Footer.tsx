"use client";

import { siteMetadata } from "@/site/siteMatedata";
import { Center, Text } from "@mantine/core";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <Center style={{ fontWeight: "500", gap: "5px" }}>
        <Text>Made with 🧡 </Text>
        <Text
          component="a"
          href={`${siteMetadata.github}`}
          target={"_blank"}
          referrerPolicy="no-referrer"
        >
          {siteMetadata.title}
        </Text>
      </Center>
    </div>
  );
};

export default Footer;
