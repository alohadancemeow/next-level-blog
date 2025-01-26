import Layout from "@/components/layout/Layout";
import ContentTitle from "@/components/Post/ContentTitle";
import ScrollToTop from "@/components/ScrollToTop";

import { getAllPosts } from "@/actions/notion";
import { getPostById } from "@/actions/get-post-by-id";
// import { getToc } from "@/actions/getToc";
import ContentBody from "@/components/Post/ContentBody";
import Loader from "@/components/Loader";

type Params = Promise<{ slug: string }>;

type Props = {
  children: React.ReactNode;
  params: Params;
};

const layout = async ({ children, params }: Props) => {
  const { slug } = await params;
  const posts = await getAllPosts();
  const postData = await getPostById(slug);
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
