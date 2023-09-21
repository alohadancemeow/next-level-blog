"use client";

import React from "react";
import { Container, Divider, Space } from "@mantine/core";
import ContentWrapper from "../ContentWrapper";

type Props = {
  children: React.ReactNode;
};

const ProjectPage = ({ children }: Props) => {
  return (
    <>
      <Space h={"lg"} />
      <Container
        size={"sm"}
        sx={(theme) => ({
          [theme.fn.smallerThan("xs")]: { margin: "0 -2rem" },
        })}
      >
        <Space h={"lg"} />
        <Space h={"lg"} />
        <Divider />
        <ContentWrapper>{children}</ContentWrapper>
        <Space h={"lg"} />
        <Divider />
        <Space h={"lg"} />
      </Container>
    </>
  );
};

export default ProjectPage;
