"use client";

import Menu from "@/components/layout/Menu";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";

import { Container, Divider, Space } from "@mantine/core";
import Shortcuts from "./Shortcuts";
import CustomBlockquote from "./CustomBlockquote";

import FirstContent from "./contents/content-1.mdx";
import ContentWrapper from "../ContentWrapper";

type Props = {
  children: React.ReactNode;
};

const NotePage = ({ children }: Props) => {
  return (
    <Layout>
      <PageLayout>
        <Menu title="Liberation Notes" />
        <Space h={"lg"} />
        <Container
          size={"sm"}
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: { margin: "0 -2rem" },
          })}
        >
          <Shortcuts />
          <Space h={"xl"} />
          <Space h={"sm"} />
          <CustomBlockquote
            cite="3rd rabbit The caffeine-driven man"
            quote="The only way to gain knowledge is to be aware of everything around you. ✌️"
          />
          <Space h={"lg"} />
          <Space h={"lg"} />
          <Divider />

          <ContentWrapper>
            {/* <FirstContent /> */}
            {children}
          </ContentWrapper>

          <Space h={"lg"} />
          <Divider />
          <Space h={"lg"} />
        </Container>
      </PageLayout>
    </Layout>
  );
};

export default NotePage;
