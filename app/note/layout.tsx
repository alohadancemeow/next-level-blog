import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/Menu";
import PageLayout from "@/components/layout/PageLayout";
import MantineProviders from "@/components/providers/MantineProviders";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProviders>
      <Layout>
        <PageLayout>
          <Menu title="Liberation Notes" />
          {children}
        </PageLayout>
      </Layout>
    </MantineProviders>
  );
};

export default layout;
