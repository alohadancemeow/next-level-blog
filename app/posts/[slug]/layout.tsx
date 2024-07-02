import Layout from "@/components/layout/Layout";
import ContentTitle from "@/components/Post/ContentTitle";
import ScrollToTop from "@/components/ScrollToTop";

import { getAllPosts } from "@/lib/notion";
import { getPostById } from "@/actions/getPostById";
// import { getToc } from "@/actions/getToc";
import ContentBody from "@/components/Post/ContentBody";
import Loader from "@/components/Loader";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const layout = async ({ children, params }: Props) => {
  const id = params.slug;
  const posts = await getAllPosts();
  const postData = await getPostById(id);
  // const toc = await getToc(id);

  if (!postData) return <Loader />;

  return (
    <Layout>
      <div
        style={{
          height: "100%",
          padding: "0",
          marginTop: "20px",
        }}
        className="relative"
      >
        <ContentTitle postData={postData} />
        <ContentBody
          posts={posts}
          // toc={toc}
          postData={postData}
        >
          <div>{children}</div>
        </ContentBody>

        <ScrollToTop />
      </div>
    </Layout>
  );
};

export default layout;
