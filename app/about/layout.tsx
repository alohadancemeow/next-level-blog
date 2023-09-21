import React from "react";
import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/Menu";
import PageLayout from "@/components/layout/PageLayout";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <Layout>
      <PageLayout>
        <Menu title="About Me" />
        {children}
      </PageLayout>
    </Layout>
  );
};

export default layout;
