"use client";

import { Container, Divider, Space } from "@mantine/core";
import ContentWrapper from "@/components/contents/ContentWrapper";

const AboutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Space h="sm" />
      <Container
        size={"sm"}
        className="my-0 md:m-auto w-full justify-center flex"
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
