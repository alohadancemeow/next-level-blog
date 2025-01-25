"use client";

import { Container, Space } from "@mantine/core";
import ContentWrapper from "@/components/ContentWrapper";
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
        styles={(theme) => ({
          [theme.breakpoints.xs]: { margin: "0 -2rem" },
        })}
      >
        <ContentWrapper>
          {children}
          <ProjectItem />
        </ContentWrapper>
        <Space h={"lg"} />
        <Space h={"lg"} />
      </Container>
    </>
  );
};

export default ProjectPage;
