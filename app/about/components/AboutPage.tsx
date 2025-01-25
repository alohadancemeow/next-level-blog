"use client";

import { Container, Divider, Space } from "@mantine/core";
import ContentWrapper from "@/components/ContentWrapper";

const AboutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Space h="sm" />
      <Container
        size={"sm"}
        styles={(theme) => ({
          root: {
            [theme.breakpoints.xs]: { margin: "0 -2rem" },
          },
        })}
      >
        <ContentWrapper>{children}</ContentWrapper>
        <Space h={"lg"} />
        <Divider />
        <Space h={"lg"} />
      </Container>
    </>
  );
};

export default AboutPage;
