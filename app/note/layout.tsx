import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/Menu";
import PageLayout from "@/components/layout/PageLayout";
import ScrollToTop from "@/components/common/ScrollToTop";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <PageLayout>
        <Menu title="Liberation Notes" />
        {children}
        <ScrollToTop />
      </PageLayout>
    </Layout>
  );
};

export default layout;
