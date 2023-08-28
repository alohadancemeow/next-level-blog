"use client";

import Menu from "@/components/Menu";
import Layout from "@/components/Layout";
import PageLayout from "@/components/PageLayout";

import { Container, Space } from "@mantine/core";
import Shortcuts from "./Shortcuts";
import CustomBlockquote from "./CustomBlockquote";

import FirstContent from "./contents/content-1.mdx";

type Props = {};

const NotePage = (props: Props) => {
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
          <CustomBlockquote
            cite="Forrest Gump"
            quote="Life is like an npm install – you never know what you are going to get."
          />
          <Space h={"lg"} />
          <div className="flex flex-col w-full gap-4 m-auto my-5 prose md:mx-0 dark:prose-invert">
            <FirstContent />
          </div>
          <Space h={"lg"} />
        </Container>
      </PageLayout>
    </Layout>
  );
};

export default NotePage;
