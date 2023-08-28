"use client";

import Menu from "@/components/layout/Menu";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";

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
            cite="3rd rabbit The caffeine-driven man"
            quote="The only way to gain knowledge is to be aware of everything around you. ✌️"
          />
          <Space h={"lg"} />
          <div
            className="
            flex 
            flex-col  
            gap-4 
            m-auto 
            my-5 
            md:mx-0 
            prose
            prose-ul:list-square
            w-full
            prose-ol:m-0 
            prose-ul:m-0 
            prose-li:m-0 
            prose-a:no-underline 
            prose-img:m-0
            dark:prose-invert 
            prose-blockquote:border-amber-500
            dark:prose-blockquote:border-amber-700
            dark:prose-a:border-amber-700
            dark:[&>div>a>div>*]:text-white
            dark:[&>div>a>div>div>*]:text-gray-500
            "
          >
            <FirstContent />
          </div>
          <Space h={"lg"} />
        </Container>
      </PageLayout>
    </Layout>
  );
};

export default NotePage;
