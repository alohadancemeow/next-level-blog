"use client";

import Link from "next/link";
import { Center, Text } from "@mantine/core";
import { siteMetadata } from "@/site/siteMatedata";
import { RocketIcon } from "../icons/Icons";

const IconLogo = () => (
  <Link href="/" legacyBehavior>
    <Text
      component="a"
      style={{
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: "20px" }}>
        <RocketIcon />
      </span>
      <Text style={{ fontWeight: "bold" }}>{siteMetadata.title}</Text>
    </Text>
  </Link>
);

const Logo = () => {
  return (
    <Center
      inline
      style={{
        display: "flex",
        margin: "2rem 0 1rem",
      }}
    >
      <IconLogo />
    </Center>
  );
};

export default Logo;
