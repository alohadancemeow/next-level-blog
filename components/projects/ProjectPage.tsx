"use client";

import React from "react";
import { Container, Divider, Space } from "@mantine/core";
import ContentWrapper from "../ContentWrapper";
import ProjectItem from "./ProjectItem";

type Props = {
  children: React.ReactNode;
};

const ProjectPage = ({ children }: Props) => {
  return (
    <>
      <Space h={"sm"} />
      <Container
        size={"sm"}
        sx={(theme) => ({
          [theme.fn.smallerThan("xs")]: { margin: "0 -2rem" },
        })}
      >
        {/* <Space h={"lg"} />
        <Space h={"lg"} /> */}

        {/* <Divider /> */}
        <ContentWrapper>
          {children}
          <ProjectItem />
        </ContentWrapper>
        <Space h={"lg"} />
        {/* <Divider /> */}
        <Space h={"lg"} />
      </Container>
    </>
  );
};

export default ProjectPage;
