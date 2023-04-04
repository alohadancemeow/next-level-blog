import Link from "next/link";
import { Center, Text } from "@mantine/core";

const IconLogo = () => (
  <Link href="/" legacyBehavior>
    <Text
      component="a"
      style={{
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "20px" }}>✌️</span>
      <Text style={{ fontWeight: "bold" }}>alohadancemeow</Text>
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
