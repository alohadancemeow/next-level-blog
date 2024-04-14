import useFetchPosts from "@/hooks/useFetchPosts";
import SectionBody from "./section-body";
import LoadButton from "@/components/LoadButton";

type Props = {
  categoryName: string;
  description: string;
};

const Section = ({ categoryName, description }: Props) => {
  const { posts, loadNextPost, isFetchingNextPage, hasNextPage } =
    useFetchPosts({ categoryName });

  // console.log(hasNextPage, isFetchingNextPage);

  if (!posts || !posts.length) return null;

  return (
    <>
      <SectionBody posts={posts} description={description} />
      {hasNextPage && (
        <LoadButton
          categoryName={categoryName}
          loadNextPost={loadNextPost}
          isFetchingNextPage={isFetchingNextPage}
          postCount={posts.length}
        />
      )}
    </>
  );
};

export default Section;
