"use client";

import { Container, Divider, Space } from "@mantine/core";
import ContentWrapper from "@/components/contents/ContentWrapper";
import CustomBlockquote from "@/app/note/components/CustomBlockquote";
// import ProjectItem from "./ProjectItem";

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
        <Space h={"sm"} />
        <CustomBlockquote
          cite="3rd rabbit The caffeine-driven man"
          quote="The only way to gain knowledge is to be aware of everything around you. ✌️"
        />
        <Space h={"xl"} />
        <Divider label="Recent Projects" labelPosition="center" />
        <ContentWrapper>
          {children}
          {/* <ProjectItem /> */}
        </ContentWrapper>
        <Space h={"lg"} />
        <Space h={"lg"} />
      </Container>
    </>
  );
};

export default ProjectPage;
