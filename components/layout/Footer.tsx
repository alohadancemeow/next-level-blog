"use client";

import { siteMetadata } from "@/site/siteMatedata";
import { Center, Text } from "@mantine/core";

const Footer = () => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <Center style={{ fontWeight: "500", gap: "5px" }}>
        <div className="flex flex-col items-center gap-1">
          <div className="flex">
            <Text>Made with 🧡</Text>
            <Text
              pl={8}
              component="a"
              href={`${siteMetadata.github}`}
              target={"_blank"}
              referrerPolicy="no-referrer"
            >
              {siteMetadata.title}
            </Text>
          </div>
          <div className="flex">
            <Text fz={"xs"} color="dimmed">
              {`©2022 — ${new Date().getFullYear()}`}
            </Text>
            <Text
              fz={"xs"}
              pl={8}
              color="orange"
              component="a"
              href={`${siteMetadata.githubRepo}`}
              target={"_blank"}
              referrerPolicy="no-referrer"
            >
              {siteMetadata.version}
            </Text>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Footer;
