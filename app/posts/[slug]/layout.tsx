import Layout from "@/components/layout/Layout";
import ContentTitle from "@/components/Post/ContentTitle";
import ScrollToTop from "@/components/ScrollToTop";

import { getAllPosts } from "@/actions/notion";
import { getPostById } from "@/actions/get-post-by-id";
// import { getToc } from "@/actions/getToc";
import ContentBody from "@/components/Post/ContentBody";
import Loader from "@/components/Loader";
import PageLayout from "@/components/layout/PageLayout";
import { siteMetadata } from "@/site/siteMatedata";
import Share from "@/components/Post/Share";

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
      <PageLayout>
        <div className="relative h-full p-0 mt-3">
          <ContentTitle postData={postData} />
          <div className="sticky top-5 z-10 left-0">
            {postData && (
              <Share
                postLink={`${siteMetadata.siteAddress}/posts/${postData.id}`}
              />
            )}
          </div>
          <ContentBody
            posts={posts}
            // toc={toc}
            postData={postData}
          >
            <div>{children}</div>
          </ContentBody>

          <ScrollToTop />
        </div>
      </PageLayout>
    </Layout>
  );
};

export default layout;
