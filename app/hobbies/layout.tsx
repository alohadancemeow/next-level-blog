import ScrollToTop from "@/components/common/ScrollToTop";
import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/Menu";
import PageLayout from "@/components/layout/PageLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <PageLayout>
        <Menu title="Hobbies" />
        {children}
        <ScrollToTop />
      </PageLayout>
    </Layout>
  );
};

export default layout;
