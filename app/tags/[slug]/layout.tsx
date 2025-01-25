import { getAllPosts } from "@/actions/notion";
import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/Menu";
import PageLayout from "@/components/layout/PageLayout";
import Spotlight from "@/components/Spotlight";
import BackToPosts from "@/components/tag/BackToPosts";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const layout = async ({ children, params }: Props) => {
  const posts = await getAllPosts();

  return (
    <Spotlight data={posts}>
      <Layout>
        <PageLayout>
          <Menu title={`# ${params.slug}`} />
          {/* <SearchPost /> */}
          <BackToPosts />
          {children}
        </PageLayout>
      </Layout>
    </Spotlight>
  );
};

export default layout;
