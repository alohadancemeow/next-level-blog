import { getPosts } from "@/lib/notion";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import PageLayout from "@/components/PageLayout";
import Spotlight from "@/components/Spotlight";
import BackToPosts from "@/components/tag/BackToPosts";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const layout = async ({ children, params }: Props) => {
  const posts = await getPosts();

  return (
    <Spotlight data={posts}>
      <Layout title={`Tags: ${params.slug}`}>
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
